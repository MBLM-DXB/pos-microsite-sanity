import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'horizontal_slider_item',
    title: 'Horizontal Slider Item',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        ...buttonBlock(),
        {
            name: 'video',
            title: 'Video',
            type: 'file',
        }

    ]
}
