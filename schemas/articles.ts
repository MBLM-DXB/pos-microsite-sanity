import { articleInnerPage } from './helpers/basics'

export default {
  name: 'articles_page',
  title: 'Articles',
  type: 'document',
  fields: [...articleInnerPage()],
}
