import { buttonBlock } from '../helpers/basics'

export default {
    name: 'page_link',
    title: 'page_link',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        ...(buttonBlock()),
    ]
}