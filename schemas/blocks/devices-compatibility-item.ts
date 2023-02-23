import { titleWithDescription } from '../helpers/basics'

export default {
    name: 'devices_compatibility_item',
    title: 'Devices Compatibility Item',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'external_url',
            title: 'External Url',
            type: 'string',
        },
    ]
}