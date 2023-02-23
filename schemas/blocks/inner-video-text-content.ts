import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'inner_video_text_content',
    title: 'Inner Video Text Content',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file'
        },
        {
            name: 'text_color',
            title: 'Text Color',
            type: 'string',
        },
        {
            name: 'bg_color',
            title: 'Background Color',
            type: 'string',
        }
            
    ]
}
