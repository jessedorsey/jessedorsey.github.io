<script setup lang="ts">
import { format } from 'date-fns'

interface Post {
  title: string
  path: string
  description?: string
  date: Date
  categories?: string[]
}

type GroupedPosts = Map<number, Post[]>

const { data: posts } = await useAsyncData('posts-list', () => {
  return queryCollection('posts')
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date', 'categories')
    .all()
})


// Group posts by year
const groupedPost = computed<GroupedPosts>(() => {
  const groups = new Map<number, Post[]>()

  posts.value?.forEach(post => {
    const year = new Date(post.date).getFullYear()

    // Add year if not found
    if (!groups.has(year)) {
      groups.set(year, [])
    }

    const yearPosts = groups.get(year)
    if (yearPosts) {
      yearPosts.push(post)
    }
  })

  return new Map(
    [...groups.entries()].sort(([yearA], [yearB]) => yearB - yearA)
  )
})


// Format date to Month Day
const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'MMM d')
}
</script>

<template>
  <div class="posts-container">

    <div v-for="[year, yearPosts] in groupedPost" :key="year" class="year-group">
      <h2 class="year-title">{{ year }}</h2>
      <div class="posts-list">
        <NuxtLink v-for="post in yearPosts" :key="post.path" :to="post.path" class="post-link">
          <div class="post-content">
            <span class="post-date">{{ formatDate(post.date.toString()) }}</span>
            <span class="post-title">{{ post.title }}</span>
            <span v-if="post.categories?.length" class="post-category">
              {{ post.categories[0] }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts-container {
  width: 85%;
  max-width: 1400px;
  margin: 4rem auto;
}

.year-group {
  margin-bottom: 4rem;
}

h1 {
  font-family: 'Bebas Neue';
  font-size: 3rem;
}

.year-title {
  font-family: 'Bebas Neue';
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 2rem;
  transform: skew(-5deg);
  color: #000;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-link {
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;
}

.post-link:hover {
  background-color: #f5f5f5;
}

.post-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.1rem;
}

.post-date {
  color: #666;
  width: 8rem;
  font-family: 'Bebas Neue';
  font-size: 1.2rem;
}

.post-title {
  font-family: 'Bebas Neue';
  font-size: 1.8rem;
  font-weight: normal;
  color: var(--primary-color);
  transition: color 0.2s ease;
}

.post-link:hover .post-title {
  color: var(--accent-color);
}

.post-category {
  color: #666;
  margin-left: auto;
  padding: 0.3rem 1rem;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.post-link:hover .post-category {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .posts-container {
    width: 90%;
    margin: 2rem auto;
  }

  .post-content {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .post-title {
    font-size: 1.6rem;
  }

  .post-date {
    width: auto;
  }

  .post-category {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .posts-container {
    width: 92%;
  }

  .year-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .post-title {
    font-size: 1.4rem;
  }

  .post-content {
    font-size: 1rem;
  }
}
</style>
