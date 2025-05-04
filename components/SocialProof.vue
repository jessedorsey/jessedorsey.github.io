<template>
  <div class="full-band">
    <section class="social-proof">
      <div class="section-header">
        <h2 class="headline">Collaborations.</h2>
        <p>Places I've worked, or worked with -</p>
      </div>

      <div class="logo-grid">
        <div class="logo-row">
          <div class="logo-item">
            <div class="placeholder">
              <span>This Could Be You</span>
            </div>
          </div>
          <div class="logo-item">
            <div class="placeholder">
              <span>Your Logo Here</span>
            </div>
          </div>
          <div class="logo-item">
            <div class="placeholder">
              <span>I'm Affordable</span>
            </div>
          </div>
        </div>

        <div class="logo-row">
          <div class="logo-item">
            <div class="placeholder">
              <span>Let's Work Together</span>
            </div>
          </div>
          <div class="logo-item">
            <div class="placeholder">
              <span>Your Brand Here</span>
            </div>
          </div>
          <div class="logo-item">
            <div class="placeholder">
              <span>Available for Hire</span>
            </div>
          </div>
        </div>
      </div>

      <div class="cta">
        <NuxtLink to="/jesse" class="learn-more">MORE ABOUT ME</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.full-band {
  width: 100%;
  background-color: #f3f3f3;
  /* background-color: #000; */
}

.section-header {
  text-align: left;
  padding-bottom: 1rem;
}

.section-header h2,
.section-header p {
  margin: 0;
  padding: 0;
}

.social-proof {
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0;
}

.headline {
  font-family: 'Bebas Neue';
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--primary-color);
  font-weight: normal;
}

.logo-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 4rem;
}

.logo-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.logo-item {
  flex: 0 1 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder {
  width: 100%;
  height: 100%;
  border: 2px dashed #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.placeholder:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.cta {
  margin-top: 3rem;
}

.learn-more {
  display: inline-block;
  padding: 1rem 2rem;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  text-decoration: none;
  font-family: 'Bebas Neue';
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.learn-more:hover {
  background: var(--primary-color);
  color: white;
}

.social-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--accent-color);
}

.highlight {
  color: var(--primary-color);
}

.stat-number {
  color: var(--accent-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .social-proof {
    width: 90%;
    margin: 4rem auto;
  }

  .logo-grid {
    gap: 3rem;
  }

  .logo-row {
    gap: 2rem;
  }

  .logo-item {
    flex: 0 1 200px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .logo-item {
    flex: 0 1 160px;
    height: 70px;
  }

  .placeholder {
    font-size: 0.9rem;
  }
}
</style>