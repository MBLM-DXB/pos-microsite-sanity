import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_banner_with_slider',
    title: 'Home Banner With Slider',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'home_banner_with_slider_item',
                },  
            ],
        }
    ]
}
