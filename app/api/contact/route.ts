import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { sendInquiryNotification } from '@/lib/resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // 1. Server-side Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (!projectType) {
      return NextResponse.json(
        { error: 'Please select a project type.' },
        { status: 400 }
      )
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      )
    }

    // 2. Insert inquiry entry into Supabase database
    const { error } = await supabase.from('inquiries').insert([
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        project_type: projectType,
        message: message.trim(),
      },
    ])

    if (error) {
      console.error('Supabase Database Error:', error)
      return NextResponse.json(
        { error: 'Failed to store inquiry in database.' },
        { status: 500 }
      )
    }

    // 3. Send email notification (non-blocking — don't fail the form if email fails)
    try {
      await sendInquiryNotification({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        projectType,
        message: message.trim(),
      })
    } catch (emailError) {
      // Log but don't break the form submission — the inquiry is already saved
      console.error('Email notification failed (inquiry still saved):', emailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry saved successfully.',
    })
  } catch (error) {
    console.error('API endpoint error:', error)
    return NextResponse.json(
      { error: 'An unexpected internal server error occurred.' },
      { status: 500 }
    )
  }
}
