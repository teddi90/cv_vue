<script setup>
import {ref} from "vue";

const aboutMessage = ref('default');
const setAboutMessage = (value) => {
  aboutMessage.value=value;
}
</script>

<template>
  <section class="py-[120px] dark:bg-black" id="about">
    <span class="subtitle">My Intro</span>
    <h2 class="title">About me</h2>
    <div class="container mx-auto">
      <div class="flex gap-4">
        <div class="flex lg:w-[500px] justify-end">
          <img class="rounded-[24px] shadow-lg max-w-[350px]" src="@/assets/images/photo2.jpg" alt="">
        </div>
        <div class="flex-1">
          <div class="flex justify-center space-x-10 mb-12">
            <div class="flex justify-center">
              <div @mouseover="setAboutMessage('experience')"
                   class="group flex flex-col w-[150px] items-center p-6 shadow-xl rounded-2xl dark:bg-darkBG hover:shadow-black transition ease-in duration-300"
                   :class="[aboutMessage==='experience' ? 'shadow-custom_black' : '']"
              >
                <font-awesome-icon :icon="['far', 'keyboard']"
                                   class="h-7 w-7 mb-1 dark:text-white group-hover:text-blue-700 transition ease-in duration-300"
                                   :class="[aboutMessage==='experience' ? 'text-blue-700' : '']"
                />
                <h3 class="font-semibold dark:text-white">
                  Experience
                </h3>
                <span class="text-sm dark:text-white">14 months</span>
              </div>
            </div>
            <div class="flex justify-center">
              <div @mouseover="setAboutMessage('completed')"
                   class="group flex flex-col w-[150px] items-center p-6 shadow-xl rounded-2xl dark:bg-darkBG hover:shadow-black transition ease-in duration-300"
                   :class="[aboutMessage==='completed' ? 'shadow-custom_black' : '']"
              >
                <font-awesome-icon :icon="['fas', 'laptop-file']"
                                   class="h-7 w-7 mb-1 dark:text-white group-hover:text-green-800 transition ease-in duration-300"
                                   :class="[aboutMessage==='completed' ? 'text-green-800' : '']"
                />

                <h3 class="font-semibold dark:text-white">
                  Completed
                </h3>
                <span class="text-sm dark:text-white">6 projects</span>
              </div>
            </div>
            <div class="flex justify-center">
              <div @mouseover="setAboutMessage('pet_project')"
                   class="group flex flex-col w-[150px] items-center p-6 shadow-xl rounded-2xl dark:bg-darkBG hover:shadow-black transition ease-in duration-300"
                   :class="[aboutMessage==='pet_project' ? 'shadow-custom_black' : '']"
              >
                <font-awesome-icon :icon="['fas', 'laptop-code']"
                                   class="h-7 w-7 mb-1 dark:text-white group-hover:text-orange-500 transition ease-in duration-300"
                                   :class="[aboutMessage==='pet_project' ? 'text-orange-500' : '']"
                />
                <h3 class="font-semibold dark:text-white">
                  Pet projects
                </h3>
                <span class="text-sm dark:text-white">12</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <p v-if="aboutMessage==='default'" class="md:max-w-[700px] mb-[40px] dark:text-white transition ease-in duration-300">
              Frontend developer from Ivano-Frankivsk. I create web pages with HTML, CSS and JavaScript. I would like to develop website for you.
            </p>
            <p v-else-if="aboutMessage==='experience'" class="md:max-w-[700px] mb-[40px] dark:text-white transition ease-in duration-300">
              Working as frontend developer at the company for 14 months. Where I created SPA with Vue, Nuxt, WordPress, Woocommerce shop
            </p>
            <p v-else-if="aboutMessage==='completed'" class="md:max-w-[700px] mb-[40px] dark:text-white transition ease-in duration-300">
              I completed 6 projects landing page, SPA with Vue, Nuxt/WordPress headless, woocommerce shop
            </p>
            <p v-else-if="aboutMessage==='pet_project'" class="md:max-w-[700px] mb-[40px] dark:text-white transition ease-in duration-300">
              I'm trying to self-learn and recently I've started learning the backend (Php/Laravel). I've completed pet projects like tasks manager like Trello, created a simple shop with Firebase, shop with Laravel and some other projects
            </p>
            <a href="#contact" class="btn">Contact me</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>