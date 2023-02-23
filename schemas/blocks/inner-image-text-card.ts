import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'inner_image_text_card',
    title: 'Inner Image Text Card',
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
            name: 'bg_gradient_from',
            title: 'Background Gradient From',
            type: 'string',
        },
        {
            name: 'bg_gradient_to',
            title: 'Background Gradient To',
            type: 'string',
        },
        {
            name: 'title_color',
            title: 'Title Color',
            type: 'string',
        },
        {
            name: 'label_color',
            title: 'Label Color',
            type: 'string',
        },
        {
            name: 'title_bold_color',
            title: 'Title Bold Color',
            type: 'string',
        }
    ]
}
