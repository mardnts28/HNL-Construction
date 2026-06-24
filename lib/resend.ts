import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface InquiryEmailData {
  name: string
  email: string
  phone: string | null
  projectType: string
  message: string
}

/**
 * Send an email notification to the business email when a new inquiry is submitted.
 * Uses Resend's built-in email delivery — no external templates needed.
 */
export async function sendInquiryNotification(data: InquiryEmailData) {
  const { name, email, phone, projectType, message } = data

  const { error } = await resend.emails.send({
    from: 'HNL Construction <onboarding@resend.dev>',
    to: process.env.BUSINESS_EMAIL!,
    subject: `New Inquiry: ${projectType} — ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7;">
        
        <!-- Header -->
        <div style="background: #1c1c1e; padding: 32px 28px;">
          <h1 style="color: #d4a843; font-size: 20px; margin: 0; font-weight: 700;">
            🏗️ New Project Inquiry
          </h1>
          <p style="color: #a1a1aa; font-size: 13px; margin: 8px 0 0 0;">
            Received from HNL Construction website
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #1c1c1e; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #1c1c1e; font-size: 15px;">
                <a href="mailto:${email}" style="color: #d4a843; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #1c1c1e; font-size: 15px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Project Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f4f4f5;">
                <span style="display: inline-block; background: #f5ecd7; color: #1c1c1e; padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 600;">${projectType}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1c1c1e; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br />')}</td>
            </tr>
          </table>

          <!-- Reply Button -->
          <div style="margin-top: 28px; text-align: center;">
            <a href="mailto:${email}?subject=Re: ${projectType} Inquiry — HNL Construction" 
               style="display: inline-block; background: #d4a843; color: #1c1c1e; padding: 12px 32px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none;">
              Reply to ${name}
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #fafafa; padding: 16px 28px; border-top: 1px solid #f4f4f5;">
          <p style="color: #a1a1aa; font-size: 11px; margin: 0; text-align: center;">
            This email was sent automatically from the HNL Construction website contact form.
          </p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('Resend email error:', error)
    throw new Error('Failed to send email notification.')
  }
}
