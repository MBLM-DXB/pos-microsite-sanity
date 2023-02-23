import { textButtonBlock } from '../helpers/basics'

export default {
    name: 'cta',
    title: 'CTA',
    type: 'object',
    fields: [
        ...(textButtonBlock()),
    ]
}