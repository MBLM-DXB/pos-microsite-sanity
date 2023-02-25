import { articleInnerPage } from './helpers/basics'

export default {
  name: 'articles_page',
  title: 'Articles',
  type: 'document',
  fields: [...articleInnerPage(),
    {
      name: 'news_type',
      type: 'string',
      title: 'News Type',
      options: {
          list: [
              {title: 'Announcement', value: 'announcement'},
              {title: 'Press', value: 'press'},
              {title: 'Story', value: 'story'}
          ],
                  layout: 'radio'
              }
          },
          {
            name: 'date',
            type: 'date',
            title: 'Date',
            options: {
                calendarTodayLabel: 'Today'
            }
        }],
}
