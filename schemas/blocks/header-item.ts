import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'header_item',
    title: 'Header Item',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        ...(buttonBlock()),
        {
            name: 'inner_items',
            title: 'Inner Items',
            type: 'array',
            of: [
                {
                    type: 'page_link',
                },
            ],
        },
        {
            name: 'link_type',
            title: 'link_type',
            type: 'string',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'CTA', value: 'cta' },
                ],
                layout: 'radio',
            },
        }
    ]
}