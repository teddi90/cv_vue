<script setup>

</script>

<template>
  <footer class="bg-mainColor pt-[30px] pb-[15px]">
    <div class="container mx-auto">
      <a href="#home" class="inline-flex  items-center text-white mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="w-8 h-8 inline-block mr-1">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/>
        </svg>
        <span class="font-bold text-xl">frontend_developer</span>
      </a>
      <div class="flex justify-end mb-40px items-center">
        <p class="text-white mr-4 italic">Let's <span class="font-semibold not-italic">create</span> together</p>
        <a href="https://linkedin.com/in/olegsloboydan"
           class="group flex items-center p-[8px] rounded-full shadow-black m-3 hover:shadow-lg bg-white transition duration-500 ease-in-out"
           target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="h-6 w-6 group-hover:text-[#0e76a8] transition duration-500 ease-in-out"/>
        </a>
        <a href="https://github.com/teddi90"
           class="group flex items-center p-[8px] rounded-full shadow-black m-3 hover:shadow-lg bg-white transition duration-500 ease-in-out"
           target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" class="h-6 w-6 group-hover:text-yellow-500 transition duration-500 ease-in-out"/>
        </a>
        <a href="https://www.facebook.com/oleg510bodyan/"
           class="group flex items-center p-[8px] rounded-full shadow-black m-3 hover:shadow-lg bg-white transition duration-500 ease-in-out"
           target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="h-6 w-6 group-hover:text-[#3b5998] transition duration-500 ease-in-out"/>
        </a>
      </div>
      <h4 class="text-white text-xs">All rights reserved <font-awesome-icon :icon="['far', 'copyright']" class="w-3 h-3"/> 2024</h4>


    </div>
  </footer>
</template>
