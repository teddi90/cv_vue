<script setup>
import {useSVStore} from "@/stores/cv.js";
import { onMounted, ref} from "vue";
import Contacts from "@/components/Contacts.vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
const store = useSVStore();
const work = ref(null);

onMounted(() => {
  store.getWorkById(props.id);
  work.value = store.work;
})
</script>

<template>
  <main v-if="work">
    <section class="py-[120px] dark:text-white dark:bg-black">
      <div class="container mx-auto">
        <div class="flex gap-8">
          <div class="flex-1">
            <img :src="`/src/assets/images/${work.image}`" class="rounded-md" :alt="work.name">
          </div>
          <div class="flex-1">
            <h2 class="text-xl mb-5 font-bold">{{ work.name }}</h2>
            <div class="mb-5">
              <span v-for="technology in work.technologies"
                    class="py-1 px-2 border border-black dark:border-white mr-2 text-sm">
                {{ technology }}
              </span>
            </div>
            <div class="flex space-x-3 items-center mb-4">
              <div class="flex items-center">
                Site:
                <a :href="work.project_link"
                   class="cursor-pointer inline-flex hover:text-blue-500 transition ease-in duration-300">
                  <font-awesome-icon :icon="['fas', 'earth-europe']" class="h-6 w-6 ml-1"/>
                </a>
              </div>
              <div class="flex items-center">
                Project: <a :href="work.project_link"
                            class="cursor-pointer inline-flex hover:text-orange-500 transition ease-in duration-300">
                <font-awesome-icon :icon="['fab', 'github']" class="h-6 w-6 ml-1"/>
              </a>
              </div>
              <p>Year: {{ work.year }}</p>
            </div>
            <p class="">{{ work.description }}</p>

          </div>
        </div>
      </div>
    </section>
    <Contacts/>
  </main>
</template>
