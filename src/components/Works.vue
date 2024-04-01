<script setup>

</script>

<template>
  <section class="dark:bg-black py-[120px]" id="work">
    <span class="subtitle">My Portfolio</span>
    <h2 class="title">Recent Works</h2>
    <div class="container mx-auto">
      <div class="flex justify-center space-x-3 mb-9">
        <button type="button" class="py-1 px-2 bg-mainColor rounded-lg">All</button>
        <button type="button" class="">Frontend</button>
        <button type="button" class="">Fullstack</button>
        <button type="button" class="">Pet Projects</button>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <template v-for="i in 6">
          <div class="group shadow-xl rounded-lg p-4 hover:shadow-black transition duration-300 ease-out">
            <div class="work-card work-left">
              <div class="mb-2 relative pt-[70%] overflow-hidden">
                <img src="@/assets/images/qoob.jpg" alt="work"
                     class="absolute top-0 left-[50%] min-w-[100%] min-h-[100%] -translate-x-[50%] group-hover:scale-[1.3] transition duration-300 ease-out">
              </div>
              <h3 class="font-semibold mb-1">Qoob design website</h3>
              <a href="https://qoobdesign.com.ua/" target="_blank" class="work-card__btn">Demo <i
                  class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
