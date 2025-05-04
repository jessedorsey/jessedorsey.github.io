<template>
  <div class="parallax-container">
    <div class="matrix-overlay"></div>
    <div class="image-container">
      <div class="framed-image left">Picture of Me</div>
      <div class="framed-image right">Picture of Me</div>
    </div>

    <div class="code-layer code-layer-1" aria-hidden="true" v-html="codeBlock1"></div>
    <div class="code-layer code-layer-2" aria-hidden="true" v-html="codeBlock2"></div>
    <div class="code-layer code-layer-3" aria-hidden="true" v-html="codeBlock3"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const rust = [
`use std::error::Error;

#[derive(Debug)]
struct Life {
    creativity: f64,
    curiosity: f64,
}

impl Life {
    fn evolve(&mut self) {
        loop {
            self.create();
            self.learn();
        }
    }

    fn create(&self) {
        println!("Creating...");
    }

    fn learn(&mut self) {
        self.curiosity += 0.1;
        println!("Learning...");
    }
}`, 
`#[derive(Debug)]
enum Creation {
    Design(SystemArchitecture),
    Code(Project),
    Music(Track),
}

#[derive(Debug)]
struct SystemArchitecture;
#[derive(Debug)]
struct Project;
#[derive(Debug)]
struct Track;

struct Creator;

impl Creator {
    fn make(&self) -> Result<Creation, Box<dyn Error>> {
        Ok(Creation::Code(Project))
    }
}`, 
`#[derive(Debug)]
struct Growth;
#[derive(Debug)]
struct Experience;

struct Path;

impl Path {
    fn new() -> Self {
        Path
    }

    fn read(&mut self) -> Result<(), Experience> {
        Ok(())
    }

    fn write(&mut self) -> Result<(), Experience> {
        Ok(())
    }

    fn create(&mut self) -> Result<(), Experience> {
        Ok(())
    }

    fn grow(self) -> Growth {
        Growth
    }
}

async fn journey() -> Result<Growth, Experience> {
    let mut path = Path::new();
    path.read()?;
    path.write()?;
    path.create()?;
    Ok(path.grow())
}`]

const python = [
`class Life:
    def __init__(self):
        self.creativity = 1.0
        self.curiosity = 1.0

    def evolve(self):
        while True:
            self.create()
            self.learn()

    def create(self):
        print("Creating...")

    def learn(self):
        self.curiosity += 0.1
        print("Learning...")`, 
`from enum import Enum

class Creation(Enum):
    DESIGN = "SystemArchitecture"
    CODE = "Project"
    MUSIC = "Track"

class Creator:
    def make(self):
        return Creation.CODE`, 
`class Growth:
    pass

class Experience(Exception):
    pass

class Path:
    def read(self):
        return True

    def write(self):
        return True

    def create(self):
        return True

    def grow(self):
        return Growth()

async def journey():
    path = Path()
    path.read()
    path.write()
    path.create()
    return path.grow()`]

const javascript = [
`class Life {
    constructor() {
        this.creativity = 1.0;
        this.curiosity = 1.0;
    }

    evolve() {
        while (true) {
            this.create();
            this.learn();
        }
    }

    create() {
        console.log("Creating...");
    }

    learn() {
        this.curiosity += 0.1;
        console.log("Learning...");
    }
}`, 
`const Creation = {
    DESIGN: "SystemArchitecture",
    CODE: "Project",
    MUSIC: "Track"
};

class Creator {
    make() {
        return Creation.CODE;
    }
}`, 
`class Growth {}

class Experience extends Error {}

class Path {
    read() {
        return true;
    }

    write() {
        return true;
    }

    create() {
        return true;
    }

    grow() {
        return new Growth();
    }
}

async function journey() {
    const path = new Path();
    path.read();
    path.write();
    path.create();
    return path.grow();
}`]

const prose = [
`Life is a loop of creation and learning.
Each cycle builds on the last, as curiosity feeds creativity.`,
`A creator makes something from nothing,
inspired by design, code, or sound.`,
`The journey is made of steps:
reading the world, writing your mark,
and creating something new. Then you grow.`
]

const codeBlock1 = ref('')
const codeBlock2 = ref('')
const codeBlock3 = ref('')

const allVariants = [rust, python, javascript, prose]

let ticking = false
let lastKnownScrollPosition = 0
let container = null

const handleScroll = () => {
  lastKnownScrollPosition = window.scrollY

  if (!ticking && container) {
    window.requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect()
      const containerTop = rect.top + lastKnownScrollPosition
      const viewportHeight = window.innerHeight
      const scrollProgress = (lastKnownScrollPosition - containerTop) / viewportHeight

      if (scrollProgress >= -1 && scrollProgress <= 1) {
        const layers = document.querySelectorAll('.code-layer')
        layers.forEach((layer, index) => {
          const speed = (index + 1) * 0.2
          const yPos = scrollProgress * speed * viewportHeight * 0.5
          layer.style.transform = `translate3d(0, ${yPos}px, 0) ${layer.dataset.baseTransform || ''}`
        })
      }
      
      ticking = false
    })

    ticking = true
  }
}

onMounted(() => {
  const selected = allVariants[Math.floor(Math.random() * allVariants.length)]
  codeBlock1.value = `<pre>${escapeHTML(selected[0])}</pre>`
  codeBlock2.value = `<pre>${escapeHTML(selected[1])}</pre>`
  codeBlock3.value = `<pre>${escapeHTML(selected[2])}</pre>`
  
  container = document.querySelector('.parallax-container')
  
  // Store base transforms
  document.querySelectorAll('.code-layer').forEach(layer => {
    const style = window.getComputedStyle(layer)
    layer.dataset.baseTransform = style.transform
  })
  
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #fff;
}

.matrix-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      rgba(224, 37, 80, 0.02) 0px,
      rgba(224, 37, 80, 0) 2px,
      rgba(224, 37, 80, 0) 50px
    );
  pointer-events: none;
  z-index: 3;
  animation: scan 10s linear infinite;
}

@keyframes scan {
  0% {
    background-position: 0 -100vh;
  }
  100% {
    background-position: 0 100vh;
  }
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.framed-image {
  position: absolute;
  width: 40%;
  height: 70vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #000;
  border-radius: 4px;
  overflow: hidden;
}

.framed-image.left {
  left: -5%;
  top: 15vh;
  transform: rotate(-2deg);
}

.framed-image.right {
  right: -5%;
  top: 35vh;
  transform: rotate(2deg);
}

.code-layer {
  position: absolute;
  width: 100%;
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  line-height: 1.8;
  pointer-events: none;
  z-index: 2;
  opacity: 0.95;
  will-change: transform;
  transition: transform 0.1s linear;
}

.code-layer pre {
  user-select: none;
  margin: 0;
  padding: 2rem;
  white-space: pre;
  background: none;
  border: none;
}

.code-layer-1 {
  top: 5%;
  left: 5%;
  color: rgba(0, 0, 0, 0.07);
  width: 50%;
  transform: perspective(1000px) rotateY(-5deg);
}

.code-layer-2 {
  top: 35%;
  right: 5%;
  left: auto;
  text-align: right;
  color: rgba(0, 0, 0, 0.05);
  width: 50%;
  transform: perspective(1000px) rotateY(5deg);
}

.code-layer-3 {
  bottom: 15%;
  left: 25%;
  color: rgba(0, 0, 0, 0.03);
  width: 50%;
  transform: perspective(1000px) rotateX(-5deg);
}

@media (max-width: 768px) {
  .code-layer {
    font-size: 1.4rem;
  }
  
  .code-layer-1,
  .code-layer-2,
  .code-layer-3 {
    width: 80%;
    transform: none;
  }
}

@media (max-width: 480px) {
  .code-layer {
    font-size: 1.1rem;
  }
  
  .code-layer-1,
  .code-layer-2,
  .code-layer-3 {
    width: 90%;
  }
  
  .code-layer pre {
    padding: 1rem;
  }
}

.code-block {
  background: #1a1a1a;
  color: var(--accent-color);
  padding: 1rem;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
}

.highlight {
  color: var(--primary-color);
}

.accent {
  color: var(--accent-color);
}

.code-comment {
  color: #666;
}

.parallax-element {
  border: 2px solid var(--primary-color);
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.parallax-element:hover {
  border-color: var(--accent-color);
}
</style>
