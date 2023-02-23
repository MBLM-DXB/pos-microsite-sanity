import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_video_card_item',
    title: 'Home video card item',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        ...buttonBlock(),
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
        }

    ]
}
