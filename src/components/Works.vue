<script setup>
import {useSVStore} from "@/stores/cv.js";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const store = useSVStore();
const filterSelect = ref('all');
const setFilter = (value) => {
  filterSelect.value = value;
}
const filteredWorks = computed(() => {
  if (filterSelect.value === 'all') {
    return store.works;
  } else if (filterSelect.value === 'frontend') {
    return store.getFrontendWorks();
  } else if (filterSelect.value === 'fullstack') {
    return store.getFullstackWorks();
  } else if (filterSelect.value === 'pet_project') {
    return store.getPetProjectWorks();
  }
})
const beforeEnter=(el)=>{
 el.style.opacity=0;
 el.style.transform='translateY(100px)'

}
const enter=(el,done)=>{
  gsap.to(el,{
    opacity:1,
    y:0,
    duration:2,
    onComplete:done,
    ease:"bounce",
    stagger:0.2,
  })
}
</script>

<template>
  <section class="dark:bg-black py-[120px]" id="work">
    <span class="subtitle">My Portfolio</span>
    <h2 class="title">Recent Works</h2>
    <div class="container mx-auto">
      <div class="flex justify-center space-x-1 md:space-x-3 mb-9">
        <button @click="setFilter('all')"
                type="button"
                class="text-sm md:text-base py-1 px-2 rounded-lg dark:text-white"
                :class="[filterSelect==='all'? 'bg-mainColor text-white' : '']"
        >All
        </button>
        <button @click="setFilter('frontend')"
                type="button"
                class="text-sm md:text-base py-1 px-2 rounded-lg dark:text-white"
                :class="[filterSelect==='frontend'? 'bg-mainColor text-white' : '']"
        >Frontend
        </button>
        <button @click="setFilter('fullstack')"
                type="button"
                class="text-sm md:text-base py-1 px-2 rounded-lg dark:text-white"
                :class="[filterSelect==='fullstack'? 'bg-mainColor text-white' : '']"
        >Fullstack
        </button>
        <button @click="setFilter('pet_project')"
                type="button"
                class="text-sm md:text-base py-1 px-2 rounded-lg dark:text-white"
                :class="[filterSelect==='pet_project'? 'bg-mainColor text-white' : '']"
        >Pet projects
        </button>
      </div>
      <transition-group
          tag="div"
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          class="grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-5">
          <div v-for="work in filteredWorks" :key="work.id"
              class="work group shadow-xl rounded-lg p-4 hover:shadow-black transition duration-300 ease-out dark:bg-darkBG">
            <div class="mb-2 relative pt-[70%] overflow-hidden">
              <img :src="'/src/assets/images/'+work.image" :alt="work.name"
                   class="absolute top-0 left-[50%] min-w-[100%] min-h-[100%] -translate-x-[50%] group-hover:scale-[1.3] transition duration-300 ease-out">
              <div class="flex h-full absolute w-full top-0 left-0  items-center bg-black bg-opacity-80 z-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-out">
                <div class="flex flex-1 justify-center items-center p-2 flex-wrap space-x-2">
                   <span v-for="tech in work.technologies" :key="tech"
                      class="border border-white text-white text-xs p-1 mb-2">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            <RouterLink :to="{name:'work', params:{id:work.id}}"
                        class="block font-semibold mb-1 dark:text-white hover:text-mainColorDarker transition duration-300 ease-out">
              {{ work.name }}
            </RouterLink>
            <a :href="work.link" target="_blank"
               class="flex items-center group/link hover:text-mainColor dark:text-white transition duration-300 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5 mr-1 group-hover/link:animate-spin">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"/>
              </svg>
              Visit </a>
          </div>
      </transition-group>
    </div>
  </section>
</template>
