import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_full_width_banner',
    title: 'Home Full Width Banner',
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
