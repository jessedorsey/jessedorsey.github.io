<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GitHubIcon from './icons/GitHubIcon.vue'
import { usePseudoRandom } from '#imports';

const systems = [
  { value: "2022 – 2025", description: "Decimal (Standard)" },
  { value: "11111100110 – 11111110001", description: "Binary (Base-2)" },
  { value: "7E6 – 7E9", description: "Hexadecimal (Base-16)" },
  { value: "٢٠٢٢ – ٢٠٢٥", description: "Arabic-Indic Numerals" },
  { value: "二〇二二 – 二〇二五", description: "Chinese Numerals (Simplified)" },
  { value: "이천이십이 – 이천이십오", description: "Korean Numerals" },
  { value: "二千二十二 – 二千二十五", description: "Japanese Numerals" },
  { value: "MMXXII – MMXXV", description: "Roman Numerals" },
  { value: "1YA – 1YB", description: "Base-36 (Alphanumeric)" }
];

const githubLinksText = [
  "Steal this site!!",
  "But you wouldn't pirate a website!"
]

const copyrightText = ref('2022-2025');
const currentSystem = ref('Decimal (Standard)');

const setCopyrightText = () => {
  const randomSystem = systems[usePseudoRandom('number-systems', systems.length, 3)];
  copyrightText.value = randomSystem.value;
  currentSystem.value = randomSystem.description;
};

const githubOriginalValue = 'Find this on github'
const githubText = ref(githubOriginalValue)
const setGithubText = () => {
  githubText.value = githubLinksText[Math.floor(Math.random() * githubLinksText.length)];
}
const resetGithubText = () => {
  githubText.value = githubOriginalValue
}

onMounted(() => {
  setCopyrightText()
});




</script>

<template>
  <footer>
    <p>
      <span class="copyright-symbol">&copy;</span>
      <span class="copyright-date" :title="currentSystem" @click="setCopyrightText">{{ copyrightText }}</span>
      <span class="copyright-name"> - Jesse</span>
    </p>
    <p class="pright">
      <a @mouseenter="setGithubText" @mouseleave="resetGithubText" title="See the source on github"
        href="https://github.com/jessedorsey/jessedorsey.github.io/" target="_blank">
        {{ githubText }}
      </a>
      <GitHubIcon />
    </p>
  </footer>
</template>

<style scoped>
footer {
  z-index: 999;
  height: 25px;
  background-color: #efefef;
  font-family: sans-serif;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
}

footer p {
  width: 90%;
  margin: 0 auto;
  font-size: 11px;
  color: #333;
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.pright {
  text-align: right;
  justify-content: flex-end;
}

.copyright-date {
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
}

.copyright-date:hover {
  color: #666;
}

.footer {
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #eee;
}

.footer-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--accent-color);
}

.copyright {
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>