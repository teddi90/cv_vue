<script setup>

</script>

<template>
  <section class="flex items-center dark:bg-black h-[100vh]" id="home">
    <div class="container mx-auto">
      <div class="flex items-center flex-col dark:text-white">
        <span class="font-semibold mb-[10px]">Hello, I'm</span>
        <h1 class="text-3xl font-bold mb-5">Oleg Slobodyan</h1>
        <h3 class="text-xl mb-[40px] font-bold">Frontend Developer</h3>
        <div class="mb-[70px] sm:mb-[100px]">
          <a href="/src/assets/cv_frontend_vue_slobodyan.pdf" download="frontend_vue_slobodyan" class="btn__primary mr-6">
            Download CV
          </a>
          <a href="#about" class="btn">About me</a>
        </div>
      </div>
      <div class="flex justify-between relative">
        <div class="flex flex-col justify-center after:content-[''] after:absolute after:left-[13px] after:bottom-[12px] sm:after:bottom-[22px] md:after:bottom-[47px] after:block after:h-6 sm:after:h-9 after:w-1.5 after:bg-black dark:after:bg-white">
          <a href="https://linkedin.com/in/olegsloboydan"
             class="group flex items-center p-[7px] rounded-full shadow-black mb-2 hover:shadow-lg hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out"
             target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
          </a>
          <a href="https://github.com/teddi90"
             class="group flex items-center p-[7px] rounded-full shadow-black mb-2 hover:shadow-lg hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out"
             target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
          </a>
          <a href="https://www.facebook.com/oleg510bodyan/"
             class="group flex items-center p-[7px] rounded-full shadow-black mb-2 hover:shadow-lg hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out"
             target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
          </a>
        </div>
        <img class="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full" src="@/assets/images/photo.jpg" alt="photo">
        <div class="flex flex-col">
          <a href="#about" class="relative flex items-center mt-[40px] sm:mt-[70px] md:mt-20 group p-[7px] rounded-full shadow-black mb-2 hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out">
            <font-awesome-icon :icon="['fas', 'computer-mouse']" class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
            <span class="absolute rotate-90 w-[100px] font-semibold -left-[33px] top-[87px] dark:text-white group-hover:text-mainColor transition duration-500 ease-in-out">Scroll Down</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
