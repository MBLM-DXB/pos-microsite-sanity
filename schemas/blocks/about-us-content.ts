import { titleWithDescription } from '../helpers/basics'

export default {
    name: 'about_us_content',
    title: 'About Us Content',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'logo_svg_icon',
            title: 'Logo SVG Icon',
            type: 'text',
        }
    ]
}