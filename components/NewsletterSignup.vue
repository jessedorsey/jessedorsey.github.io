<template>
  <div v-if="false" class="newsletter-container">
    <div class="newsletter-content">
      <h2>Stay Updated</h2>
      <p>Get occasional updates about new projects, music releases, and blog posts.</p>
      <form class="newsletter-form" @submit.prevent="handleSubmit">
        <input 
          v-model="email"
          type="email" 
          placeholder="your@email.com"
          aria-label="Email address for newsletter"
        >
        <button 
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!email.value) return
  
  isSubmitting.value = true
  try {
    // TODO: Implement newsletter signup logic
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    email.value = ''
    alert('Thanks for subscribing!') // Replace with better UI feedback
  } catch (error) {
    console.error('Newsletter signup failed:', error)
    alert('Signup failed. Please try again.') // Replace with better error handling
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.newsletter-container {
  width: 85%;
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 4px;
  border: 2px solid var(--primary-color);
}

.newsletter-content {
  text-align: center;
}

.newsletter-content h2 {
  font-family: 'Bebas Neue';
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: normal;
}

.newsletter-content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.newsletter-form input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.newsletter-form button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-family: 'Bebas Neue';
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.newsletter-form button:hover:not(:disabled) {
  background: var(--accent-color);
}

.newsletter-form button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .newsletter-container {
    width: 90%;
    padding: 1.5rem;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .newsletter-container {
    width: 92%;
  }

  .newsletter-content h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  }

  .newsletter-content p {
    font-size: 1rem;
  }
}
</style> 