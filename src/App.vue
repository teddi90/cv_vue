<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Works from "@/components/Works.vue";
import Contacts from "@/components/Contacts.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <HeaderApp/>
  <main class="main">
    <Hero/>
    <About/>
    <Skills/>
    <Works/>
    <Contacts/>
  </main>
  <Footer/>
</template>

