import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'industries_horizontal_slider_item',
    title: 'Industries Horizontal Slider Item',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        
    ]
}
