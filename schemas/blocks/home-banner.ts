import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_banner',
    title: 'Home Banner',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'subtitle',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'model',
            title: 'Model',
            type: 'image',
        },
    ]
}