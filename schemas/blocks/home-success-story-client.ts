import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_success_story_client',
    title: 'Home success story client',
    type: 'object',
    fields: [
        {
            name: 'client_logo',
            title: 'Client Logo',
            type: 'image'
        },
        {
            name: 'client_url',
            title: 'Client URL',
            type: 'string',
            
        }
    ]
}
