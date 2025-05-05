<script lang="ts" setup>
import Tag from '~/components/Tag.vue'
import { useHead } from '#app'


const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('posts').path(route.path).first()
})

const formatDate = (date: string | Date | undefined) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString()
}

const formatDateTime = (date: string | Date | undefined) => {
  if (!date) return ''
  return new Date(date).toISOString()
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.value?.title,
        "datePublished": formatDateTime(post.value?.date),
        "dateModified": formatDateTime(post.value?.date),
        "description": post.value?.description || "",
        "author": {
          "@type": "Person",
          "name": "Jesse Dorsey",
          "url": "https://jessedorsey.com"
        },
        "publisher": {
          "@type": "Person",
          "name": "Jesse Dorsey",
        },
        "keywords": post.value ? [...(post.value.tags || []), ...(post.value.categories || [])].join(', ') : ""
      }
    }
  ]
})

</script>

<template>
  <article class="post">
    <header class="post-header">
      <h1 class="post-title">{{ post?.title }}</h1>
      <div class="post-meta">
        <div class="post-categories" v-if="post?.categories?.length">
          <span>Categories:</span>
          <Tag v-for="category in post.categories" :key="category" :text="category"
            :to="`/categories/${category.toLowerCase()}`" />
        </div>
        <span>
          Date: <time :datetime="formatDateTime(post?.date)">{{ formatDate(post?.date) }}</time>
        </span>
      </div>
    </header>

    <div class="post-content">
      <ContentRenderer v-if="post" :value="post" />
    </div>

    <div class="post-tags" v-if="post?.tags?.length">
      <span>Tags:</span>
      <Tag v-for="tag in post.tags" :key="tag" :text="tag" :to="`/tags/${tag.toLowerCase()}`" />
    </div>
  </article>
</template>

<style scoped>
.post {
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
}

.post-header {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.post-title {
  font-family: 'Bebas Neue';
  font-size: clamp(3rem, 5vw, 4.2rem);
  font-weight: normal;
  margin-bottom: 0;
  transform: skew(-5deg);
  color: #000;
  border-bottom: 3px solid var(--primary-color);
  ;
}

.post-meta {
  font-size: 1rem;
  color: #666;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 3px solid var(--primary-color);
  padding: 10px 0;
}

.post-categories,
.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.post-categories span,
.post-tags span {
  margin-right: 0.5rem;
  color: #666;
}

.post-content {
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.post-content :deep(p) {
  margin-bottom: 2rem;
}

.post-content :deep(h2) {
  font-family: 'Bebas Neue';
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: normal;
  margin: 3rem 0 1.5rem;
  color: var(--primary-color);
}

.post-content :deep(h3) {
  font-family: 'Bebas Neue';
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: normal;
  margin: 2.5rem 0 1.5rem;
  color: #00A89D;
}

.post-content :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.post-content :deep(a::after) {
  content: '';
  position: absolute;
  width: 100%;
  height: 0.1em;
  background: currentColor;
  left: 0;
  bottom: 0.05em;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.post-content :deep(a:hover) {
  color: #00A89D;
}

.post-content :deep(a:hover::after) {
  transform: scaleX(1);
  transform-origin: left;
}

.post-content :deep(ul) {
  margin: 2rem 0;
  padding-left: 2rem;
}

.post-content :deep(li) {
  margin-bottom: 1rem;
}

.post-content :deep(blockquote) {
  border-left: 4px solid var(--primary-color);
  padding-left: 2rem;
  margin: 2rem 0;
  font-style: italic;
  color: #333;
}

@media (max-width: 768px) {
  .post {
    width: 90%;
    margin: 2rem auto;
  }

  .post-content {
    font-size: 1rem;
    line-height: 1.6;
  }

  .post-header {
    margin-bottom: 2rem;
  }

  .post-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>