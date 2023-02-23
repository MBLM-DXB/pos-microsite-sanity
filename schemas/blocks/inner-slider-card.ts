import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'inner_slider_card',
    title: 'Inner Slider Card',
    type: 'object',
    fields: [
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'inner_slider_card_item',
                },
            ]
        }
    ]
}
