import { titleWithDescription } from '../helpers/basics'

export default {
    name: 'features_banner',
    title: 'Features Banner',
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