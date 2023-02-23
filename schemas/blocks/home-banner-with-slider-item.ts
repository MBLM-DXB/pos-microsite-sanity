import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_banner_with_slider_item',
    title: 'Home Banner With Slider Item',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}
