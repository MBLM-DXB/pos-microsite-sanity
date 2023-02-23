import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'horizontal_slider',
    title: 'Horizontal Slider',
    type: 'object',
    fields: [
        
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'horizontal_slider_item',
                },

            ],
        }
    ]
}
