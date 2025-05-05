<script setup>
import { useHead } from '#app'

useColors()


useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jesse Dorsey",
        "url": "https://jessedorsey.com",
        "image": "https://jessedorsey.com/profile.png",
        "sameAs": [
          "https://linkedin.com/in/jessedorsey",
          "https://bsky.app/profile/jessedorsey.com",
          "https://twitter.com/_jessedorsey",
          "https://instagram.com/reallyjesse"
        ],
        "jobTitle": "CTO at Sparen, Co-Founder at Oddity Nook",
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Sparen Homes"
          },
          {
            "@type": "Organization",
            "name": "Oddity Nook"
          }
        ],
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Michigan Technological University"
          },
          {
            "@type": "CollegeOrUniversity",
            "name": "Wayne State University"
          }
        ],
        "knowsAbout": [
          "Software Engineering",
          "DevOps",
          "Cloud Infrastructure",
          "Machine Learning",
          "System Architecture"
        ],
        "description": "Jesse Dorsey is a senior engineering leader, currently CTO at Sparen and Co-Founder of Oddity Nook. With over 15 years of experience, he has led high-impact engineering teams and built scalable systems across startups and enterprise environments."
      }
    }
  ]
})
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
  --primary-color: #000;
  /* Default fallback */
  --accent-color: #000;
  /* Default fallback */
}

/* Global styles that use the dynamic colors */
a {
  color: var(--primary-color);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent-color);
}

html,
body {
  margin: 0;
  padding: 0;
}

p:first-child {
  margin: 0;
  padding: 0;
}

p {}
</style>