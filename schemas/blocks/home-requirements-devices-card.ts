import { buttonBlock, titleWithDescription } from '../helpers/basics'

export default {
    name: 'home_requirements_devices_card',
    title: 'Home Requirements Devices Card',
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
            name: 'requirements_list',
            title: 'Requirements List',
            type: 'array',
            of: [
                {
                type: 'block'
                }
            ]
        },
        {
            name: 'card_width',
            title: 'Card Width',
            type: 'string',
            options: {
                list: [
                    { title: 'lg', value: 'lg' },
                    { title: 'sm', value: 'sm' },
                ],
                layout: 'radio',
            }
        },
        {
            name: 'class_name',
            title: 'Class Name',
            type: 'string',

        }

    ]
}
