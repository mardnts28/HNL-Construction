import { defineField, defineType } from 'sanity'
import { PackageIcon } from '@sanity/icons'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,

  fields: [
    // ─── Basic Info ───────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      description: 'e.g., Aluminum Systems, uPVC Systems, Architectural Panels',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated URL identifier from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Windows & Doors', value: 'windows-doors' },
          { title: 'Façades & Panels', value: 'facades-panels' },
          { title: 'Screens & Security', value: 'screens-security' },
          { title: 'Folding & Sliding systems', value: 'folding-sliding' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // ─── Description ─────────────────────────────────────────────
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short introduction or summary of the product system.',
      validation: (Rule) => Rule.required().max(500),
    }),

    defineField({
      name: 'fullOverview',
      title: 'System Overview / Details',
      type: 'array',
      description: 'Detailed description paragraphs for the product system detail page.',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),

    // ─── Key Features / Technical Specifications ──────────────────
    defineField({
      name: 'features',
      title: 'Key Features / Technical Specifications',
      type: 'array',
      description: 'A list of distinct features or technical specifications.',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'e.g., Thermal Break Technology',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'desc',
              title: 'Feature Description',
              type: 'text',
              description: 'Detailed details of this technical feature.',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    // ─── Main Image ───────────────────────────────────────────────
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'The main feature image for card displays and page hero backdrop.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Required for accessibility and SEO.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ─── Gallery ─────────────────────────────────────────────────
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      description: 'Images showcasing this system in action or installation closeups.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'e.g., Panoramic Slim-Frame Sliders',
            }),
            defineField({
              name: 'scope',
              title: 'Scope / Location',
              type: 'string',
              description: 'e.g., Luxury Residential Villa, Makati',
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      const categoryMap: Record<string, string> = {
        'windows-doors': 'Windows & Doors',
        'facades-panels': 'Façades & Panels',
        'screens-security': 'Screens & Security',
        'folding-sliding': 'Folding & Sliding',
      }
      return {
        title,
        subtitle: categoryMap[subtitle] || subtitle || 'No Category',
        media,
      }
    },
  },
})
