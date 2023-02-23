export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
          {
              type: 'header_item',
          }
      ],
    },
  ],
}