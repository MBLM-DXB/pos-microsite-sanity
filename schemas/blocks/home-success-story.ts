import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_success_story',
    title: 'Home success story',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'clients',
            title: 'Clients',
            type: 'array',
            of: [
                {
                    type: 'home_success_story_client',
                },
            ]
            
        }
    ]
}
