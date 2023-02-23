import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'industries_horizontal_slider',
    title: 'Industries Horizontal Slider',
    type: 'object',
    fields: [
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'industries_horizontal_slider_item',
                },
            ],
        }
        
    ]
}
