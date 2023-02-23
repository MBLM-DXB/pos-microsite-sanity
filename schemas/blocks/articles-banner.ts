import { titleWithDescription } from '../helpers/basics'

export default {
    name: 'articles_banner',
    title: 'Articles Banner',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'background_svg_icon',
            title: 'Background SVG Icon',
            type: 'text',
        }
    ]
}