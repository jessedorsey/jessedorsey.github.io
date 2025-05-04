<script setup>
useColors()
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --primary-color: #000;  /* Default fallback */
  --accent-color: #000;   /* Default fallback */
}

/* Global styles that use the dynamic colors */
a {
  color: var(--primary-color);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent-color);
}

html, body {
  margin: 0; padding: 0;
}
p:first-child{
  margin: 0; padding: 0;
}
p {
  
}
</style>