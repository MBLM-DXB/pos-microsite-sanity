import { pageBasicInfo, groups } from "./helpers/basics";

export default {
    name: 'bottom_cta',
    title: 'Bottom CTA',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'text', 
            title: 'Subtitle',
        },
    ]
}