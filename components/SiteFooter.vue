<script setup lang="ts">
import { ref, onMounted } from 'vue';

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

const copyrightText = ref('2022-2025');
const currentSystem = ref('Decimal (Standard)');

const setCopyrightText = () => {
  const randomSystem = systems[Math.floor(Math.random() * systems.length)];
  copyrightText.value = randomSystem.value;
  currentSystem.value = randomSystem.description;
};

onMounted(() => {
  setCopyrightText();
});
</script>

<template>
    <footer>
      <p>
        <span class="copyright-symbol">&copy;</span>
        <span 
          class="copyright-date" 
          :title="currentSystem"
          @click="setCopyrightText"
        >{{ copyrightText }}</span>
        <span class="copyright-name"> - Jesse</span>
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
}
  footer p {
    width: 90%;
    margin: 0 auto;
    font-size: 11px;
    color: #333;
    display: flex;
    gap: 0.25rem;
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