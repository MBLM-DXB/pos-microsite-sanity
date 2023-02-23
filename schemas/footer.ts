export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
      {
          name: 'text',
          title: 'Text',
          type: 'string',
          group: 'footer',
      },
      {
          name: 'social',
          title: 'Social',
          type: 'array',
          of: [
              {
                  type: 'external_icon_link',
              }
          ],
          group: 'footer',
      },
      {
          name: 'copyright',
          title: 'Copyright',
          type: 'string',
          group: 'footer',
      },
      {
          name: 'footer_links',
          title: 'Footer Links',
          type: 'array',
          of: [
              {
                  type: 'default_link',
              }
          ],
          group: 'footer',
      },

  ],
}