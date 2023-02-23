import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'industries_banner',
    title: 'Industries Banner',
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
    ]
}
