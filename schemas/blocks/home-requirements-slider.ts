import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_requirements_slider',
    title: 'Home Requirements Slider',
    type: 'object',
    fields: [
        ...(titleWithDescription()),
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'devices',
            title: 'Devices',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'home_requirements_devices_card',
                        }]
                    }]
        }
    ]
}
