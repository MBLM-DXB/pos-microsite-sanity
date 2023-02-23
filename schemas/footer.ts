export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
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
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
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
        },
    ],
}