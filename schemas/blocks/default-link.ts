import { textButtonBlock } from '../helpers/basics'

export default {
    name: 'default_link',
    title: 'Default Link',
    type: 'object',
    fields: [
        ...(textButtonBlock()),
    ]
}