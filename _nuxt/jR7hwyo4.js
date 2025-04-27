import{_ as k}from"./DlAUqK2U.js";import{b as l,g as T,z as x,c as P,o as L,a as t}from"./C-c69ZSP.js";const M={class:"parallax-container"},S=["innerHTML"],D=["innerHTML"],b=["innerHTML"],j={__name:"ParallaxBit",setup(G){function a(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const g=[`use std::error::Error;

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
}`,`#[derive(Debug)]
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
}`,`#[derive(Debug)]
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
}`],w=[`class Life:
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
        print("Learning...")`,`from enum import Enum

class Creation(Enum):
    DESIGN = "SystemArchitecture"
    CODE = "Project"
    MUSIC = "Track"

class Creator:
    def make(self):
        return Creation.CODE`,`class Growth:
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
    return path.grow()`],y=[`class Life {
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
}`,`const Creation = {
    DESIGN: "SystemArchitecture",
    CODE: "Project",
    MUSIC: "Track"
};

class Creator {
    make() {
        return Creation.CODE;
    }
}`,`class Growth {}

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
}`],v=[`Life is a loop of creation and learning.
Each cycle builds on the last, as curiosity feeds creativity.`,`A creator makes something from nothing,
inspired by design, code, or sound.`,`The journey is made of steps:
reading the world, writing your mark,
and creating something new. Then you grow.`],u=l(""),d=l(""),f=l(""),p=[g,w,y,v];let s=!1,o=0,c=null;const h=()=>{o=window.scrollY,!s&&c&&(window.requestAnimationFrame(()=>{const e=c.getBoundingClientRect().top+o,n=window.innerHeight,i=(o-e)/n;i>=-1&&i<=1&&document.querySelectorAll(".code-layer").forEach((m,E)=>{const _=(E+1)*.2,C=i*_*n*.5;m.style.transform=`translate3d(0, ${C}px, 0) ${m.dataset.baseTransform||""}`}),s=!1}),s=!0)};return T(()=>{const r=p[Math.floor(Math.random()*p.length)];u.value=`<pre>${a(r[0])}</pre>`,d.value=`<pre>${a(r[1])}</pre>`,f.value=`<pre>${a(r[2])}</pre>`,c=document.querySelector(".parallax-container"),document.querySelectorAll(".code-layer").forEach(e=>{const n=window.getComputedStyle(e);e.dataset.baseTransform=n.transform}),window.addEventListener("scroll",h,{passive:!0})}),x(()=>{window.removeEventListener("scroll",h)}),(r,e)=>(L(),P("div",M,[e[0]||(e[0]=t("div",{class:"matrix-overlay"},null,-1)),e[1]||(e[1]=t("div",{class:"image-container"},[t("div",{class:"framed-image left"},"Picture of Me"),t("div",{class:"framed-image right"},"Picture of Me")],-1)),t("div",{class:"code-layer code-layer-1","aria-hidden":"true",innerHTML:u.value},null,8,S),t("div",{class:"code-layer code-layer-2","aria-hidden":"true",innerHTML:d.value},null,8,D),t("div",{class:"code-layer code-layer-3","aria-hidden":"true",innerHTML:f.value},null,8,b)]))}},A=k(j,[["__scopeId","data-v-14226c54"]]);export{A as default};
