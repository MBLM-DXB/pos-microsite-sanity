import { titleWithDescription } from '../helpers/basics'

export default {
    name: 'devices_compatibility',
    title: 'Devices Compatibility',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'devices_compatibility_item',
                },
            ],
        }
    ]
}