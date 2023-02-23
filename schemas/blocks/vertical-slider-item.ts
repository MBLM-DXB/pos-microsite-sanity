import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'vertical_slider_item',
    title: 'Vertical Slider Item',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        ...(buttonBlock()),
    ]
}
