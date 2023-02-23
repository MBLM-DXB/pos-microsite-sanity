export const textBlock = () => {
    return [
        {
            name: `title`,
            type: 'string',
            title: 'Title'
        },
        {
            name: `subtitle`,
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: `text`,
            type: 'string',
            title: 'Text'
        },
    ]
}

export const groups = [
    {
        name: 'details',
        title: 'Details',
    },
    {
        name: 'seo',
        title: 'SEO',
    },
]

export const pageBasicInfo = () => {
    return [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'base_slug',
            type:'string',
            title: 'Base Slug'
        },
        {
            name: 'slug',
            type:'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: string) => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 300)
              }
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'text',
            type: 'array',
            title: 'Text',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'Content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'about_us_content'
                },
                {
                    type: 'html_content'
                },
                {
                    type: 'html_content_banner'
                },
                {
                    type: 'articles_banner'
                },
                {
                    type: 'articles_paginated'
                },
                {
                    type: 'cta',
                },
                {
                    type: 'devices_compatibility'
                },
                {
                    type: 'features_banner'
                },
                {
                    type: 'home_banner_with_slider'
                },
                {
                    type: 'home_banner'
                },
                {
                    type: 'home_full_width_banner'
                },
                {
                    type: 'home_requirements_slider'
                },
                {
                    type: 'home_success_story'
                },
                {
                    type: 'home_video_card'
                },
                {
                    type: 'horizontal_slider'
                },
                {
                    type: 'industries_horizontal_slider'
                },
                {
                    type: 'inner_image_text_card',
                },
                {
                    type: 'inner_slider_card'
                },
                {
                    type: 'inner_video_text_content'
                },
                {
                    type: 'vertical_slider'
                }
            ]


        },
        {
            name: 'seo_title',
            type: 'string',
            title: 'SEO Title',
        },
        {
            name: 'seo_description',
            type: 'text',
            title: 'SEO Description',
        },
    ]
}


export const titleWithDescription = () => {
    return [{
        name: 'title',
        type: 'string',
        title: 'Title'
    },
    {
        name: 'description',
        title: 'Description',
        type: 'array',
            of: [
                {
                type: 'block'
                }
            ]
    },
    {
        name: 'label',
        type: 'string',
        title: 'Label'
    }]
}

export const titleBlock = ()  => {
    return [
        {
            name: `title`,
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        }
    ]
}

export const titleText = ()  => {
    return [
        {
            name: `title`,
            type: 'string',
            title: 'Title'
        },
        {
            name: `text`,
            type: 'string',
            title: 'Text'
        }
    ]
}

export const buttonBlock = () => {
    return [
        {
            name: 'button_text',
            type: 'string',
            title: 'Button Text',
        },
        {
            name: 'link',
            type: 'reference',
            title: 'Link',
            to: [{type: 'page'}, {type: 'articles_page'}, {type: 'features_page'}, {type: 'industries_page'}]  
        },
    ]
}

export const textButtonBlock = () => {
    return [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        ...(buttonBlock())
    ]
}

export const image = () => {
    return {
        name: 'image',
        type:`image`,
        title: 'Image'
    }
}

export const imageBlock = () => {
    return [
        {
            name: 'image',
            type:`image`,
            title: 'Image'
        },
        {
            name: 'alt',
            type:`string`,
            title: 'Alt'
        },
        
    ]
}

export const imageTextBlock = () => {
    return [
        ...(imageBlock()),
        {
            name: 'text',
            type:`text`,
            title: 'Text'
        },
    ]
}

export const imageTextButtonBlock = () => {
    return [
        ...(imageTextBlock()),
        ...(buttonBlock()),
    ]
}

export const imageTextTitleBlock = () => {
    return [
        ...(imageTextBlock()),
        {
            name: 'title',
            type:`string`,
            title: 'Title'
        },
    ]
}

export const imageTextTitleButtonBlock = () => {
    return [
        ...(imageTextTitleBlock()),
        ...(buttonBlock()),
    ]
}

export const imageTextTitleSubtitleBlock = () => {
    return [
        ...(imageTextTitleBlock()),
        {
            name: 'subtitle',
            type:`string`,
            title: 'Subtitle'
        },
    ]
}

export const imageTextTitleSubtitleButtonBlock = () => {
    return [
        ...(imageTextTitleSubtitleBlock()),
        ...(buttonBlock()),
    ]
}


