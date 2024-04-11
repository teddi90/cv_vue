<script setup>
import Skills from "@/components/Skills.vue";
import Works from "@/components/Works.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Contacts from "@/components/Contacts.vue";
import gsap from 'gsap';
import scrollTrigger from 'gsap/src/ScrollTrigger';
import {onMounted} from "vue";
gsap.registerPlugin(scrollTrigger)
onMounted(()=>{
  const about=gsap.timeline({duration:1, ease:'power2.out',
    scrollTrigger:{
      trigger:'#about',
      start:"-100 center",
      end:"+=300",
      scrub:true
    }
  });
  about.from('#about .title',{y:50, autoAlpha:0,duration:1,ease:'power2.out'});
  about.from('#about .subtitle',{y:-50, autoAlpha:0,duration:1,ease:'power2.out'});
  about.fromTo('.about__btn',{y:200, autoAlpha:0 },{y:0, autoAlpha:1, stagger:0.5 ,duration:.5,ease:'power2.out'},2);
  about.from('#about img',{x:-200, autoAlpha:0,duration:1,ease:'power2.out'},2);

  const skills=gsap.timeline({duration:1, ease:'power2.out',
    scrollTrigger:{
      trigger:'#skills',
      start:"-100 center",
      end:"+=350",
      scrub:2,
    }
  });
  skills.from('#skills .title',{y:50, autoAlpha:0,duration:.5,ease:'power2.out'});
  skills.from('#skills .subtitle',{y:-50, autoAlpha:0,duration:.3,ease:'power2.out'});
  skills.from('.skills__card',{x:-300,autoAlpha:0, duration:.5,ease:'power2.out'});
  skills.fromTo('#skills ul li',{y:100, autoAlpha:0 },{y:0, autoAlpha:1, stagger:0.1 ,duration:1,ease:'power2.out'},2);

})
</script>

<template>
    <main class="main">
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contacts/>
    </main>
</template>

<style scoped>

</style>