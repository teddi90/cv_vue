<script setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useSVStore} from "@/stores/cv.js";
import {useRouter} from "vue-router";

const store=useSVStore();
const currentSection = ref('home');
const scrollY = ref(false);
const router=useRouter();
const isHomePage=computed(()=>{
  return router.currentRoute.value.name==='home'
})

const watchScroll=() => {
  const allSections = document.querySelectorAll("section");
  scrollY.value = window.scrollY >= 50;

  allSections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection.value = section.id;
    }
  });
}
onMounted(() => {

  window.addEventListener("scroll",watchScroll );
});
onUnmounted(()=>{
  window.removeEventListener("scroll",watchScroll );
})
</script>

<template>
  <header class="bg-white py-2 fixed top-0 left-0 w-[100%] z-[99] dark:bg-black"
          :class="[scrollY? 'shadow-md' : '']"
          id="header">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between">
        <RouterLink :to="{name:'home'}"
           class="flex items-center dark:text-white hover:text-mainColor hover:dark:text-mainColor transition-colors duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-7 h-7 inline-block mr-1">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/>
          </svg>
          <span class="font-bold text-sm sm:text-base">frontend_developer</span>
        </RouterLink>
        <div v-if="isHomePage"
            class="menu shadow-xl fixed w-[270px] sm:w-[300px] bottom-[20px] left-0 right-0 bg-gray-300 bg-opacity-20 dark:bg-white dark:bg-opacity-20 px-[15px] py-[10px] sm:px-[17px] sm:py-[12px] rounded-[40px] mx-auto">
          <ul class="flex justify-between">
            <li>
              <a href="#home" class="dark:text-white flex items-center p-[7px] rounded-full"
                 :class="[currentSection==='home' ? 'shadow-black bg-mainColor text-white':'']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#about" class="dark:text-white flex items-center p-[7px] rounded-full"
                 :class="[currentSection==='about' ? 'shadow-black bg-mainColor text-white':'']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#skills" class="dark:text-white flex items-center p-[7px] rounded-full"
                 :class="[currentSection==='skills' ? 'shadow-black bg-mainColor text-white':'']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#work" class="dark:text-white flex items-center p-[7px] rounded-full"
                 :class="[currentSection==='work' ? 'shadow-black bg-mainColor text-white':'']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#contact" class="dark:text-white flex items-center p-[7px] rounded-full"
                 :class="[currentSection==='contact' ? 'shadow-black bg-mainColor text-white':'']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-[22px] h-[22px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <button @click="store.toggleTheme()"
                class="bg-transparent border-0 ">
          <font-awesome-icon v-if="store.isDark" :icon="['far', 'sun']" class="w-5 h-5 text-white hover:text-mainColor transition-colors duration-300 ease-in-out"/>
          <font-awesome-icon v-else :icon="['far', 'moon']" class="w-5 h-5 text-black hover:text-mainColor transition-colors duration-300 ease-in-out"/>
        </button>
      </nav>
    </div>
  </header>
</template>
