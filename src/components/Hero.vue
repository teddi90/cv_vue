<script setup>
import {onMounted, ref} from "vue";
import {gsap} from 'gsap';
import TextPlugin from 'gsap/src/TextPlugin';
gsap.registerPlugin(TextPlugin);

const words=['Oleg Slobodyan','Frontend Developer']
// const greeting = ref(null);
// const fullName = ref(null)
// const profession = ref(null)
const image = ref(null);
const social = ref(null);
const buttons = ref(null);
const scrollBtn = ref(null);

onMounted(() => {

  gsap.to('.cursor',{opacity:1, ease:'power2.inOut', repeat:-1,duration:.5, yoyo:true, delay:2 });
  const boxTl=gsap.timeline();
  boxTl.to('.box',{duration:1,width:'100%', delay:.5, ease:'power4.inOut'})
      .from('.greeting',{duration:1, y:50, ease:'power3.out', onComplete: ()=>{masterTl.play()} })
      .to('.box',{duration:1, height:'100%', ease:'elastic.out'});

  let masterTl=gsap.timeline({repeat:-1}).pause();
  words.forEach(word=>{
    let tl=gsap.timeline({repeat:1, yoyo:true, repeatDelay:2});
    tl.to('.animated-text',{duration:1,text:word });
    masterTl.add(tl);
  })


  const tl = gsap.timeline({ease: 'power2.out'});
  // tl.from(greeting.value, {
  //   scale: 3,
  //   duration: 1,
  // }).from(fullName.value, {
  //   autoAlpha: 0,
  //   scale: 3,
  //   duration: 1,
  // }).from(profession.value, {
  //   y: '-100',
  //   autoAlpha: 0,
  //   scale: 2,
  //   duration: 1,
  // })

  tl.from(buttons.value, {
    y: '100',
    autoAlpha: 0,
    duration: 1,
  }, 3).from(image.value, {
    y: '-100',
    autoAlpha: 0,
    duration: 1,
  }, 3)
      .from(social.value, {
        x: '-200',
        autoAlpha: 0,
        ease: 'power2.out',
        duration: 2,
      }, 3).from(scrollBtn.value, {
    x: '200',
    autoAlpha: 0,
    duration: 2,
    ease: 'power2.out',
  }, 3).from('.header', {
    y: '-100',
    autoAlpha: 0,
    ease: 'power2.out',
    duration: 2,
  }, 3).fromTo('.menu', {
    y: '100',
    autoAlpha: 0,
  }, {
    y: 0,
    autoAlpha: 1,
    ease: 'power2.out',
    duration: 2,
  }, 3)
  tl.play();
})
</script>

<template>
  <section class="flex items-center dark:bg-black h-[100vh]" id="home">
    <div class="container mx-auto">
      <div class="flex items-center flex-col dark:text-white">
        <!--        <span ref="greeting" class="font-semibold mb-[10px]">Hello, I'm</span>-->
        <!--        <h1 ref="fullName" class="text-3xl font-bold mb-5">Oleg Slobodyan</h1>-->
        <!--        <h3 ref="profession" class="text-xl mb-[40px] font-bold">Frontend Developer</h3>-->
        <h1 class="relative text-3xl mb-[70px] overflow-hidden w-[450px]">

          <span class=" inline-block mr-1 relative"><span class="greeting">Hello, I'm <span class="box"></span></span></span>
          <span class="animated-text"></span>
          <span class="cursor opacity-0">_</span>
        </h1>
        <div ref="buttons" class="mb-[70px] sm:mb-[100px]">
          <a href="/src/assets/cv_frontend_vue_slobodyan.pdf" download="frontend_vue_slobodyan"
             class="btn__primary mr-6">
            Download CV
          </a>
          <a href="#about" class="btn">About me</a>
        </div>
      </div>
      <div class="flex justify-between relative">
        <div ref="social"
             class="flex flex-col justify-center after:content-[''] after:absolute after:left-[13px] after:bottom-[12px] sm:after:bottom-[22px] md:after:bottom-[47px] after:block after:h-6 sm:after:h-9 after:w-1.5 after:bg-black dark:after:bg-white">
          <a href="https://linkedin.com/in/olegsloboydan"
             class="group flex items-center p-[7px] rounded-full shadow-black mb-2 hover:shadow-lg hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out"
             target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']"
                               class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
          </a>
          <a href="https://github.com/teddi90"
             class="group flex items-center p-[7px] rounded-full shadow-black mb-2 hover:shadow-lg hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out"
             target="_blank">
            <font-awesome-icon :icon="['fab', 'github']"
                               class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
          </a>
          <a href="https://www.facebook.com/oleg510bodyan/"
             class="group flex items-center p-[7px] rounded-full shadow-black mb-2 hover:shadow-lg hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out"
             target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook-f']"
                               class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
          </a>
        </div>
        <img ref="image" class="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full"
             src="@/assets/images/photo.jpg" alt="photo">
        <div ref="scrollBtn" class="flex flex-col">
          <a href="#about"
             class="relative flex items-center mt-[40px] sm:mt-[70px] md:mt-[105px] group p-[7px] rounded-full shadow-black mb-2 hover:bg-mainColor dark:bg-white dark:hover:bg-mainColor transition duration-500 ease-in-out">
            <font-awesome-icon :icon="['fas', 'computer-mouse']"
                               class="h-5 w-5 group-hover:text-white transition duration-500 ease-in-out"/>
            <span
                class="absolute rotate-90 w-[100px] font-semibold -left-[33px] top-[87px] dark:text-white group-hover:text-mainColor transition duration-500 ease-in-out">Scroll Down</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
