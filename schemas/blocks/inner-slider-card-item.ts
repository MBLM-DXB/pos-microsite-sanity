import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'inner_slider_card_item',
    title: 'Inner Slider Card Item',
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
        {
            name: 'video',
            title: 'Video',
            type: 'file'
        },
    ]
}
