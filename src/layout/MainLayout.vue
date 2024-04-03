<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <HeaderApp/>
  <slot/>
  <Footer/>
</template>
