import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        content_en: defineCollection({
            type: 'page',
            source: {
                include: '**/*.md',
                exclude: ['posts/*.md', 'books/*md'],
            },
            schema: z.object({
                title: z.string().nonempty(),
                description: z.string().nonempty(),
                date: z.string().nonempty()
            })}
        ),
        now: defineCollection({
            source: 'now.md',
            type: 'page',
        }),
        posts: defineCollection({
            source: 'posts/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                date: z.date(),
                categories: z.array(z.string()).optional(),
                tags: z.array(z.string()).optional(),
                description: z.string().optional()
            })
        }),
        books: defineCollection({
            source: 'books/*md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                isbn: z.string(),
                buyLink: z.string(),
                cardDescription: z.string(),
                tags: z.array(z.string()).optional(),
            })
        }),
        workProduct: defineCollection({
            source: 'work/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                date: z.string(),
                endDate: z.string().optional(),
                type: z.enum(['monies', 'funsies']),
                description: z.string(),
                technologies: z.array(z.string()).optional(),
                link: z.string().optional(),
                image: z.string().optional()
            })
        })
    }
})