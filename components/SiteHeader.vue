<script setup lang="ts">
import BlueskyIcon from './icons/BlueskyIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header role="banner">
        <div class="h-container" :class="{ 'scrolled': isScrolled }">
            <NuxtLink to="/" aria-label="Home page">
                <h1 class="namelink">Jesse Dorsey</h1>
            </NuxtLink>
            <button class="hamburger" @click="toggleMenu" :aria-expanded="isMenuOpen"
                aria-label="Toggle navigation menu">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <nav role="navigation" aria-label="Main navigation" class="desktop-nav">
                <div class="internal-links">
                    <NuxtLink to="/" aria-label="Home page">Home</NuxtLink>
                    <NuxtLink to="/now" aria-label="Now page">Now</NuxtLink>
                    <NuxtLink to="/posts" aria-label="Blog posts">Posts</NuxtLink>
                    <NuxtLink to="/work" aria-label="Work page">Work</NuxtLink>
                    <NuxtLink to="/bookshelf" aria-label="Bookshelf page">Bookshelf</NuxtLink>
                    <NuxtLink to="/studio" aria-label="Link to music section">Music</NuxtLink>
                </div>
                <div class="social-links" aria-label="Social media links">
                    <a href="https://bsky.app/profile/jessedorsey.com" target="_blank" rel="noopener noreferrer"
                        aria-label="Follow me on Bluesky">
                        <span class="sr-only">Bluesky</span>
                        <BlueskyIcon />
                    </a>
                    <a href="https://linkedin.com/in/jessedorsey" target="_blank" rel="noopener noreferrer"
                        aria-label="Connect with me on LinkedIn">
                        <span class="sr-only">LinkedIn</span>
                        <LinkedInIcon />
                    </a>
                    <a href="https://instagram.com/reallyjesse" target="_blank" rel="noopener noreferrer"
                        aria-label="Follow me on Instagram">
                        <span class="sr-only">Instagram</span>
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/jessedorsey" target="_blank" rel="noopener noreferrer"
                        aria-label="View my projects on GitHub">
                        <span class="sr-only">GitHub</span>
                        <GitHubIcon />
                    </a>
                </div>
            </nav>
            <nav role="navigation" aria-label="Mobile navigation" class="mobile-nav"
                :class="{ 'is-active': isMenuOpen }">
                <div class="internal-links">
                    <NuxtLink to="/" aria-label="Home page">Home</NuxtLink>
                    <NuxtLink to="/now" aria-label="Now page">Now</NuxtLink>
                    <NuxtLink to="/posts" aria-label="Blog posts">Posts</NuxtLink>
                    <NuxtLink to="/work" aria-label="Work page">Work</NuxtLink>
                    <NuxtLink to="/bookshelf" aria-label="Bookshelf page">Bookshelf</NuxtLink>
                    <NuxtLink to="/studio" aria-label="Link to music section">Music</NuxtLink>
                </div>
                <div class="social-links" aria-label="Social media links">
                    <a href="https://bsky.app/profile/jessedorsey.com" target="_blank" rel="noopener noreferrer"
                        aria-label="Follow me on Bluesky">
                        <span class="sr-only">Bluesky</span>
                        <BlueskyIcon />
                    </a>
                    <a href="https://linkedin.com/in/jessedorsey" target="_blank" rel="noopener noreferrer"
                        aria-label="Connect with me on LinkedIn">
                        <span class="sr-only">LinkedIn</span>
                        <LinkedInIcon />
                    </a>
                    <a href="https://instagram.com/reallyjesse" target="_blank" rel="noopener noreferrer"
                        aria-label="Follow me on Instagram">
                        <span class="sr-only">Instagram</span>
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/jessedorsey" target="_blank" rel="noopener noreferrer"
                        aria-label="View my projects on GitHub">
                        <span class="sr-only">GitHub</span>
                        <GitHubIcon />
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.namelink {
    font-family: 'Bebas Neue';
}

header {
    margin: 0 auto;
    position: fixed;
    gap: 2rem;
    z-index: 999;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.h-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 10px;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
}

.h-container.scrolled {
    border-bottom: 1px solid var(--primary-color);
}

h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-align: center;
    color: #1a1a1a;
}

nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
}

.internal-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.nav-link {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.2s ease;
}

.nav-link:hover {
    color: var(--accent-color);
}

.nav-link.router-link-active {
    color: var(--accent-color);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: #4a4a4a;
    transition: color 0.2s ease;
}

.social-links a:hover {
    color: #000;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* Hamburger Menu Styles */
.hamburger {
    display: none;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;
}

.hamburger-box {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    width: 30px;
    height: 3px;
    background-color: #1a1a1a;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
    content: "";
    display: block;
}

.hamburger-inner::before {
    top: -10px;
}

.hamburger-inner::after {
    bottom: -10px;
}

/* Desktop Navigation */
.desktop-nav {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
}

/* Mobile Navigation */
.mobile-nav {
    display: none;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-nav.is-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

@media (max-width: 767px) {
    .hamburger {
        display: block;
    }

    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: flex;
    }

    .h-container {
        flex-wrap: wrap;
    }

    .internal-links {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .social-links {
        justify-content: center;
        width: 100%;
    }
}

@media (min-width: 768px) {
    .hamburger {
        display: none;
    }

    .mobile-nav {
        display: none;
    }

    .desktop-nav {
        display: flex;
    }
}
</style>