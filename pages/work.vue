<script setup lang="ts">
import { format, parse } from 'date-fns'
import Tag from '~/components/Tag.vue'

const { data: workItems } = await useAsyncData('work-list', () => {
    return queryCollection('workProduct')
        .order('date', 'DESC')
        .all()
})

const formatDateDisplay = (date: string, endDate?: string) => {
    const startDate = parse(date, 'yyyy-MM-dd', new Date())
    const formattedStart = format(startDate, 'MMM yyyy')

    if (!endDate) {
        return formattedStart
    }

    if (endDate === 'now') {
        return `${formattedStart} - Present`
    }

    const end = parse(endDate, 'yyyy-MM-dd', new Date())
    return `${formattedStart} - ${format(end, 'MMM yyyy')}`
}
</script>

<template>
    <main class="work-container">
        <header class="work-header">
            <a href='/jesse-dorsey-resume-web-2025.pdf' target="_blank"><button class="resume-button" type="button"
                    aria-label="Download Resume">
                    Just Grab My Resume
                </button></a>
        </header>

        <section class="timeline-container" aria-label="Work History">
            <div v-if="!workItems" aria-live="polite">Loading work history...</div>
            <div v-else-if="workItems.length === 0" aria-live="polite">No work items found.</div>

            <div v-else class="timeline">
                <article v-for="(item, index) in workItems" :key="index"
                    :class="['timeline-item', item.type === 'monies' ? 'right' : 'left']" :aria-label="item.title">
                    <div class="timeline-content">
                        <header class="timeline-header">
                            <h2 class="timeline-title">{{ item.title }}</h2>
                            <time class="timeline-date" :datetime="item.date">
                                {{ formatDateDisplay(item.date, item.endDate) }}
                            </time>
                        </header>

                        <p class="timeline-description">{{ item.description }}</p>

                        <footer class="timeline-footer">
                            <ul v-if="item.technologies?.length" class="timeline-tech" aria-label="Technologies used">
                                <li v-for="tech in item.technologies" :key="tech">
                                    <Tag :text="tech" variant="tech" />
                                </li>
                            </ul>

                            More Info Coming Soon...
                            <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer"
                                class="timeline-link" :aria-label="'View ' + item.title + ' project'">
                                View Project →
                            </a>
                        </footer>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped>
.work-container {
    width: 85%;
    max-width: 1200px;
    margin: 4rem auto;
}

.work-header {
    margin-bottom: 4rem;
    text-align: center;
}

.resume-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.resume-button:hover {
    transform: translateY(-2px);
}

.timeline-container {
    position: relative;
}

.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    width: 50%;
    margin-bottom: 2rem;
    box-sizing: border-box;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.timeline-item.left {
    padding-right: 40px;
}

.timeline-item.right {
    left: 50%;
    padding-left: 40px;
}

.timeline-item.left::after {
    right: -10px;
}

.timeline-item.right::after {
    left: -10px;
}

.timeline-content {
    position: relative;
    margin: 0 20px;
    padding: 1.5rem;
    background: white;
}

.timeline-header {
    margin-bottom: 1rem;
}

.timeline-title {
    font-family: 'Bebas Neue';
    font-size: 2rem;
    margin: 0 0 0.5rem;
    color: var(--primary-color);
}

.timeline-date {
    display: block;
    font-size: 0.9rem;
    color: #666;
}

.timeline-description {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.timeline-footer {
    margin-top: 1.5rem;
}

.timeline-tech {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.timeline-link {
    display: inline-block;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}

.timeline-link:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .timeline::after {
        left: 31px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 1rem;
    }

    .timeline-item.right {
        left: 0;
    }

    .timeline-item.left::after,
    .timeline-item.right::after {
        left: 21px;
    }
}
</style>