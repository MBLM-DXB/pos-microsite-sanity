import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'html_content',
    title: 'Html Content',
    type: 'object',
    fields: [
        
        {
            name: 'title',
            title: 'title',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [
                {
                type: 'block'
                }
            ]
        }
    ]
}
