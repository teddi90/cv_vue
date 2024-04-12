<script setup>
import Skills from "@/components/Skills.vue";
import Works from "@/components/Works.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Contacts from "@/components/Contacts.vue";
import {gsap} from 'gsap';
import scrollTrigger from 'gsap/src/ScrollTrigger';
import {onMounted} from "vue";

gsap.registerPlugin(scrollTrigger)
onMounted(() => {
  const about = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.out'
    },
    scrollTrigger: {
      trigger: '#about',
      start: "-100 center",
      end: "+=300",
      scrub: true
    }
  });
  about.from('#about .title', {y: 50, autoAlpha: 0});
  about.from('#about .subtitle', {y: -50, autoAlpha: 0});
  about.fromTo('.about__btn', {y: 200, autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: 0.5, duration: .5}, 2);
  about.from('#about img', {x: -200, autoAlpha: 0}, 2);

  const skills = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.out'
    },
    scrollTrigger: {
      trigger: '#skills',
      start: "-100 center",
      end: "+=350",
      scrub: 2,
    }
  });
  skills.from('#skills .title', {y: 50, autoAlpha: 0, duration: .5});
  skills.from('#skills .subtitle', {y: -50, autoAlpha: 0, duration: .3});
  skills.from('.skills__card', {x: -300, autoAlpha: 0, duration: .5});
  skills.fromTo('#skills ul li', {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: 0.1, duration: 1}, 2);

  const job = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.out'
    },
    scrollTrigger: {
      trigger: '.job',
      start: "-200 center",
      end: "+=300",
      scrub: 1,
    }
  });
  job.fromTo('.job .work-card__circle_top', {y: -200, scale: 3, autoAlpha: 0}, {
    y: 0,
    scale: 1,
    autoAlpha: 1,
    duration: 1,
    ease: 'bounce'
  }, '>');
  job.fromTo('.job .work-card__line', {css: {height: 0}, autoAlpha: 0, duration: 2}, {
    css: {height: '100%'},
    autoAlpha: 1,
    stagger: 0.7
  },);
  job.fromTo('.job .work-card_left', {x: -200, autoAlpha: 0}, {x: 0, autoAlpha: 1}, '>');
  job.fromTo('.job .work-card_right', {x: 200, autoAlpha: 0}, {x: 0, autoAlpha: 1}, '<=');
  job.fromTo('.job .work-card__circle_bottom', {y: 200, scale: 3, autoAlpha: 0}, {
    y: 0,
    scale: 1,
    autoAlpha: 1,
    duration: .5,
    ease: 'bounce'
  });

  const education = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.out'
    },
    scrollTrigger: {
      trigger: '.education',
      start: "-200 center",
      end: "+=300",
      scrub: 1,
    }
  });
  education.fromTo('.education .work-card__circle_top', {y: -200, scale: 3, autoAlpha: 0}, {
    y: 0,
    scale: 1,
    autoAlpha: 1,
    duration: 1,
    ease: 'bounce'
  }, '>');
  education.fromTo('.education .work-card__line', {css: {height: 0}, autoAlpha: 0, duration: 2}, {
    css: {height: '100%'},
    autoAlpha: 1,
    stagger: 0.7
  },);
  education.fromTo('.education .work-card_left', {x: -200, autoAlpha: 0}, {x: 0, autoAlpha: 1}, '>');
  education.fromTo('.education .work-card_right', {x: 200, autoAlpha: 0}, {x: 0, autoAlpha: 1}, '<=');
  education.fromTo('.education .work-card__circle_bottom', {y: 200, scale: 3, autoAlpha: 0}, {
    y: 0,
    scale: 1,
    autoAlpha: 1,
    duration: .5,
    ease: 'bounce'
  });

  const works = gsap.timeline({
    defaults: {
      duration: .5,
      ease: 'power2.out'
    },
    scrollTrigger: {
      trigger: '#work',
      start: "top center",
      end: "+=300",
      // scrub:true
    }
  });
  works.from('#work .title', {y: 50, autoAlpha: 0});
  works.from('#work .subtitle', {y: -50, autoAlpha: 0});
  works.from('.work__buttons', {x: -200, autoAlpha: 0});
  works.fromTo('.portfolio-work', {y: 200, autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: .1, duration: .5});

  const contact = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.out'
    },
    scrollTrigger: {
      trigger: '#contact',
      start: "-100 center",
      end: "+=300",
      scrub: true
    }
  });
  contact.from('.title', {y: 50, autoAlpha: 0});
  contact.from('.subtitle', {y: -50, autoAlpha: 0});
  contact.fromTo('.form-wrapper',{x:200,autoAlpha: 0},{x:0,autoAlpha: 1},2);
  contact.fromTo('.contact-question',{x:-200,autoAlpha: 0},{x:0,autoAlpha: 1},2)


});
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