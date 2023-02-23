import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_video_card',
    title: 'Home Video Card',
    type: 'object',
    fields: [
        
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'home_video_card_item',
                },

            ],
        }
    ]
}
