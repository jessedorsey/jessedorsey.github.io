<template>
  <div>
    <slot name="hero_title" mdc-unwrap="p" />
    <div class="blurb">
      <p><strong>Hey. I'm Jesse ~</strong></p>
      <p>
        Mostly <NuxtLink to="/work" aria-label="View my work and projects">I make stuff</NuxtLink>, design systems, and
        <a href="https://github.com/jessedorsey" aria-label="Visit my GitHub profile">write code</a>. I'm always
        <NuxtLink to="/bookshelf" aria-label="Browse my bookshelf">reading something</NuxtLink>, and I'm trying to get
        better <NuxtLink to="/posts" aria-label="Read my blog posts">at writing </NuxtLink>.
      </p>
      <p>
        Right now, <NuxtLink to="/now" aria-label="See what I'm currently working on">I'm juggling a few things
        </NuxtLink>, eventually, <NuxtLink to="/studio" aria-label="Check out my studio work">I'll drop a summer banger
        </NuxtLink>.
      </p>
      <p>
        This site? It's a snapshot. Part notebook, really <a href="https://instagram.com/reallyjesse"
          aria-label="Follow me on Instagram">a signal booster</a>, all chaos, a place for things that matter.
      </p>
    </div>
    <div class="scroll-indicator" aria-label="Scroll down for more content">
      <div class="chevron" />
      <div class="chevron" />
      <div class="chevron" />
    </div>

    <ParallaxBit />
    <SocialProof />
    <NewsletterSignup />
  </div>
</template>

<style scoped>
.blurb {
  padding-top: 100px;
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
  font-family: 'Bebas Neue';
  text-align: justify;
  font-size: clamp(1.5rem, 3.5vw, 4.2rem);
  line-height: 1.2;
  letter-spacing: 0.02em;
}

.blurb p {
  margin: 1.5rem 0;
}

.blurb p:first-child {
  margin: 0;
  padding: 0;
}

.blurb strong {
  color: #000;
  font-weight: normal;
  display: inline-block;
  transform: skew(-5deg);
  padding: 0 0.2em;
  background: linear-gradient(104deg, rgba(255, 255, 255, 0) 0.9%, rgba(255, 255, 255, 0.3) 2.4%, rgba(255, 255, 255, 0.1) 5.8%, rgba(255, 255, 255, 0.1) 93%, rgba(255, 255, 255, 0.1) 96%, rgba(255, 255, 255, 0) 98%), linear-gradient(183deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 7.9%, rgba(255, 255, 255, 0) 15%);
  position: relative;
}

.blurb a {
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.blurb a::after {
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

.blurb a:hover {
  color: var(--accent-color);
}

.blurb a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.scroll-indicator {
  position: relative;
  width: 40px;
  height: 60px;
  margin: 2rem auto;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: var(--primary-color);
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate3d(0, 30px, 0);
  }

  33% {
    opacity: 1;
    transform: translate3d(0, 30px, 0);
  }

  67% {
    opacity: 1;
    transform: translate3d(0, 40px, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
}

/* Add responsive adjustments */
@media (max-width: 768px) {
  .blurb {
    width: 90%;
    font-size: clamp(1.6rem, 3.2vw, 2.8rem);
  }
}

@media (max-width: 480px) {
  .blurb {
    width: 92%;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    padding: 5rem 0;
  }

  .blurb p {
    margin: 1rem 0;
  }
}

.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #fff;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>