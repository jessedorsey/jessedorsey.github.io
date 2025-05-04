<script setup lang="ts">
import NewsletterSignup from '~/components/NewsletterSignup.vue';

</script>

<template>
  <div>
    <div class="hero-image">
      <img src="https://placehold.co/1920x1080/222222/FFFFFF/png?text=This'll be a picture one day too"
        alt="Jesse Dorsey" />
    </div>


    <blockquote
      cite="https://www.goodreads.com/quotes/33157-wisdom-comes-from-experience-experience-is-often-a-result-of"
      class="quote">
      <p>“Wisdom comes from experience. Experience is often a result of lack of wisdom.”</p>
      <cite>— Terry Pratchett</cite>
    </blockquote>


    <div class="content-section">
      <p> I'm a creative technologist, engineer, and builder. I make things - any things - that push the world
        into more interesting, better, stranger places. Whether it's devious automotive engineering, oddball
        games, or tools built through sheer stubbornness, my work exists to make the future less boring and more
        alive. </p>
      <p> I'm not loyal to one medium or industry. Web, physical, mechanical, digital - it's all just material for
        building things that matter. I care about systems, structures, and making ideas real. I
        believe the best work doesn't just solve problems; it breaks patterns and creates new possibilities.
      </p>
    </div>

    <div class="work-photos">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="https://placehold.co/800x600/222222/FFFFFF/png?text=DesigningPhoto"
            alt="Jesse working on design systems">
          <p>Designing systems that scale</p>
        </div>
        <div class="photo-item">
          <img src="https://placehold.co/800x600/222222/FFFFFF/png?text=SpeakingPhoto"
            alt="Jesse speaking at a conference">
          <p>Sharing knowledge at conferences</p>
        </div>
        <div class="photo-item">
          <img src="https://placehold.co/800x600/222222/FFFFFF/png?text=BuildingPhoto" alt="Making stuff" />
          <p>Building the future of the world</p>
        </div>
      </div>
    </div>


    <div class="content-section">
      <h2>Connect</h2>
      <p>
        Want to work together or just chat? Find me on <a href="https://github.com/jessedorsey">GitHub</a>,
        <a href="https://instagram.com/reallyjesse">Instagram</a>, or <a
          href="https://bsky.app/profile/jessedorsey.com">Bluesky</a>.
      </p>
    </div>
    <NewsletterSignup />
  </div>
</template>

<style scoped>
.hero-image {
  width: 100%;
  height: 80vh;
  max-height: 500px;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.work-photos {
  width: 100%;
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.05);
}

.photo-grid {
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 16/9;
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-item:hover img {
  transform: scale(1.05);
}

.photo-item p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  margin: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.photo-item:hover p {
  transform: translateY(0);
}

.blurb {
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
  font-family: 'Bebas Neue';
  text-align: justify;
  font-size: clamp(3.5rem, 3.5vw, 4.2rem);
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

.quote {
  font-family: 'Bebas Neue';
  font-style: italic;
  font-size: clamp(1.5rem, 3vw, 3.5rem);
  color: var(--primary-color);
  margin: 2rem 0 !important;
  text-align: center;
}

.content-section {
  width: 85%;
  max-width: 1400px;
  margin: 4rem auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 2rem 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.6;
}

.content-section h2 {
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.content-section p {
  margin: 1.5rem 0;
  text-align: justify;
}

.content-section p:first-child {
  margin-top: 0;
}

.content-section p:last-child {
  margin-bottom: 0;
}

.current-work {
  font-size: clamp(1.8rem, 2vw, 2.2rem);
  line-height: 1.6;
}

.current-work p {
  margin: 1.5rem 0;
}

.blurb a,
.content-section a {
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.blurb a::after,
.content-section a::after {
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

.blurb a:hover,
.content-section a:hover {
  color: var(--accent-color);
}

.blurb a:hover::after,
.content-section a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .photo-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {

  .blurb,
  .content-section {
    width: 90%;
    font-size: clamp(1.6rem, 3.2vw, 2.8rem);
  }

  .quote {
    font-size: clamp(2rem, 2.8vw, 3rem);
  }

  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .hero-image {
    height: 60vh;
  }
}

@media (max-width: 480px) {

  .blurb,
  .content-section {
    width: 92%;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    padding: 1rem 0;
  }

  .quote {
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  }

  .hero-image {
    height: 50vh;
  }

  .photo-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>