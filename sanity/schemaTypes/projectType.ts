import { defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FolderIcon,

  fields: [
    // ─── Basic Info ───────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),

    defineField({
      name: 'slug',
      title: 'Page URL (Auto-generated)',
      type: 'slug',
      description: 'This is automatically created from the project title. No need to edit this.',
      readOnly: true,
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, region, or full address of the project.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Hospital', value: 'hospital' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // ─── Description ─────────────────────────────────────────────
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description or summary of the project.',
      validation: (Rule) => Rule.required().max(500),
    }),

    // ─── Main Image ───────────────────────────────────────────────
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Hero/cover image shown at the top of the project page.',
      options: {
        hotspot: true, // enables focal-point cropping
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image Description',
          type: 'string',
          description: 'Briefly describe what is in the photo (e.g., "Front view of the building" or "Interior hallway with glass panels"). This helps with Google search visibility.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption (Optional)',
          type: 'string',
          description: 'A short label shown below the image on the website, if any.',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ─── Gallery ─────────────────────────────────────────────────
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      description: 'Additional project photos shown in the gallery.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Image Description',
              type: 'string',
              description: 'Briefly describe what is in this photo (e.g., "Sliding glass door installation").',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
              description: 'A short label shown with this photo, if any.',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(0).max(20),
    }),

    // ─── Meta ─────────────────────────────────────────────────────
    defineField({
      name: 'completionYear',
      title: 'Completion Year',
      type: 'number',
      description: 'The year the project was completed.',
      validation: (Rule) =>
        Rule.integer().min(1990).max(new Date().getFullYear() + 5),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Pin this project to the top of the Projects page.',
      initialValue: false,
    }),
  ],

  // ─── Studio Preview ───────────────────────────────────────────
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'mainImage',
      category: 'category',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, category, featured }) {
      const categoryLabel =
        category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : 'Uncategorized'

      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: `${categoryLabel} · ${subtitle ?? 'No location'}`,
        media,
      }
    },
  },

  // ─── Ordering ─────────────────────────────────────────────────
  orderings: [
    {
      title: 'Newest First',
      name: 'completionYearDesc',
      by: [{ field: 'completionYear', direction: 'desc' }],
    },
    {
      title: 'A → Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
