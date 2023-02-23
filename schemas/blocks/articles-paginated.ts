import { titleWithDescription } from '../helpers/basics'

export default {
    name: 'articles_paginated',
    title: 'Articles Paginated',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
    ]
}