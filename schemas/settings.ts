export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    groups: [
        {
            name: 'header',
            title: 'Header',
            options: {
                collapsible: true,
                collapsed: true,
            }
        },
        {
            name: 'footer',
            title: 'Footer',
            options: {
                collapsible: true,
                collapsed: true,
            }
        },
        {
            name: 'bottom_cta',
            title: 'Bottom CTA',
            options: {
                collapsible: true,
                collapsed: true,
            }
        },
    ],
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            group: 'header',
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
            group: 'header',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text',
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
            name: 'copyrigth',
            title: 'Copyrigth',
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
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            group: 'bottom_cta',
        },
        {
            name: 'subtitle',
            type: 'text',
            title: 'Subtitle',
            group: 'bottom_cta',
        },

    ],
}