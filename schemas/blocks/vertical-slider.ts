import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'vertical_slider',
    title: 'Vertical Slider',
    type: 'object',
    fields: [
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'vertical_slider_item',
                },
            ],
        }
    ]
}
