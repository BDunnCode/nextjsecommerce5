import {defineField, defineType} from 'sanity';

export const order = defineType({
  name: 'Order',
  title: 'Orders',
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
      name: 'qty',
      title: 'Qty',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    }),
    defineField({
      name: "paid",
      title: "Paid",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "delivered",
      title: "Delivered",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    }),  
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
});