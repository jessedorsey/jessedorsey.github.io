<template>
    <article class="book-card">
        <div class="book-cover">
            <img :src="coverUrl" :alt="`Cover of ${book.title}`" @error="handleImageError" />
        </div>
        <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="description">{{ book.cardDescription || book.description }}</p>
            <div class="book-meta">
                <span class="isbn">ISBN: {{ book.isbn }}</span>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { useBookCover } from '~/composables/useBookCover'

const props = defineProps<{
    book: {
        title: string
        isbn: string
        description?: string
        cardDescription?: string
        path: string
    }
}>()

const { coverUrl } = useBookCover(props.book.isbn)
const hasError = ref(false)

const handleImageError = () => {
    hasError.value = true
}
</script>

<style scoped>
.book-card {

    display: flex;
    gap: 1rem;
}

.book-cover {
    flex-shrink: 0;
    width: 120px;
    height: 180px;
    background: #f5f5f5;
    border-radius: 4px;
    overflow: hidden;
}

.book-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.book-info {
    position: relative;
    flex: 1;
    display: flex;
    font-size: 12px;
    flex-direction: column;
    gap: 0.5rem;
}

.book-info h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--primary-color);
}

.description {
    color: #444;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.book-meta {
    font-style: italic;
    position: absolute;
    bottom:0;
    color: #666;
    font-size: 0.6rem;
}

@media (max-width: 640px) {
    .book-card {
        flex-direction: column;
    }

    .book-cover {
        width: 100%;
        height: 200px;
    }
}
</style> 