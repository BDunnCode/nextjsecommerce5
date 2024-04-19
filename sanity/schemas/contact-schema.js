import {defineField, defineType} from 'sanity';

export const contact = defineType({
  name: 'Contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issue',
      title: 'Issue',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DDTHH:mm:ssZ',
      }
    }),
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
});