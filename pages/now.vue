<script setup lang="ts">
const route = useRoute()
const {data: now } = await useAsyncData(route.path, ()=>{
    return queryCollection('now').path(route.path).first()
})
</script>

<template>
  <article class="now-page">
    <header class="now-header">
      <h1 class="now-title">{{now.title}}</h1>
    </header>
    
    <div class="now-content">
      <ContentRenderer v-if="now" :value="now"/>
    </div>
  </article>
</template>

<style scoped>
.now-page {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 50px;
}

:deep(hr) {
  border: 3px solid var(--primary-color);
}

.now-header {
  margin: 0 auto;
}

.now-title {
  font-family: 'Bebas Neue';
  font-size: clamp(3rem, 5vw, 4.2rem);
  font-weight: normal;
  line-height: 1.1;
  margin-bottom: 1rem;
  transform: skew(-5deg);
  color: #000;
}

.now-content {
  margin: 0 auto;
  font-size: 1.1rem;
}

.now-content :deep(p) {
  margin-bottom: 1.5rem;
}

.now-content :deep(h2) {
  font-family: 'Bebas Neue';
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: normal;
  margin: 2rem 0 1rem;
  color: var(--primary-color);
}

.now-content :deep(h3) {
  font-family: 'Bebas Neue';
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: normal;
  margin: 1.5rem 0 1rem;
  color: var(--accent-color);
}

.now-content :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.now-content :deep(a::after) {
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

.now-content :deep(a:hover) {
  color: var(--accent-color);
}

.now-content :deep(a:hover::after) {
  transform: scaleX(1);
  transform-origin: left;
}

.now-content :deep(ul) {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.now-content :deep(li) {
  margin-bottom: 0.75rem;
}

.now-content :deep(blockquote) {
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #333;
}

@media (max-width: 768px) {
  .now-page {
    width: 90%;
    margin: 1.5rem auto;
  }

  .now-content {
    font-size: 1rem;
    line-height: 1.6;
  }

  .now-header {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .now-page {
    width: 92%;
  }
}
</style>