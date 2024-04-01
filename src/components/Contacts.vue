<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <section class="dark:bg-black py-[120px]" id="contact">
    <span class="subtitle">Get in touch</span>
    <h2 class="title">Conatct Me</h2>
    <div class="container mx-auto">
      <div class="flex">
        <div class="flex-1 flex justify-center">
          <div class="flex flex-col">
            <h3 class="text-lg font-semibold text-center mb-5 dark:text-white">Have questions or propositions?</h3>
            <div class="flex space-x-5">
              <a href="mailto:slobodyanoleg5@gmail.com" target="_blank"
                  class="flex group flex-col justify-center w-[150px] items-center p-5 shadow-xl rounded-lg hover:shadow-black transition ease-in duration-300 dark:bg-darkBG">
                <font-awesome-icon :icon="['fas', 'at']" class="w-7 h-7 mb-1 dark:text-white group-hover:text-orange-600 transition ease-in duration-300" />
                <h3 class="font-semibold dark:text-white mb-1">Gmail</h3>
                <span class="text-xs dark:text-white">
                  Write me
                </span>
              </a>
              <a href="http://m.me/oleg510bodyan" target="_blank"
                 class="flex group flex-col justify-center w-[150px] items-center p-5 shadow-xl rounded-lg hover:shadow-black transition ease-in duration-300 dark:bg-darkBG">
                <font-awesome-icon :icon="['fab', 'facebook-messenger']" class="w-7 h-7 mb-1 dark:text-white group-hover:text-[#006AFF] transition ease-in duration-300" />
                <h3 class="font-semibold dark:text-white mb-1">Messenger</h3>
                <span class="text-xs dark:text-white">
                  Write me
                </span>
              </a>
              <a href="https://t.me/teddi90" target="_blank"
                 class="flex group flex-col justify-center w-[150px] items-center p-5 shadow-xl rounded-lg hover:shadow-black transition ease-in duration-300 dark:bg-darkBG">
                <font-awesome-icon :icon="['fab', 'telegram']" class="w-7 h-7 mb-1 dark:text-white group-hover:text-[#0088cc] transition ease-in duration-300" />
                <h3 class="font-semibold dark:text-white mb-1">Telegram</h3>
                <span class="text-xs dark:text-white">
                  Write me
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="contact__content">
            <h3 class="contact__title">Write me your project</h3>
            <form action="https://formspree.io/f/xqknyzpo" method="POST" class="contact__form">
              <div class="contact__form-div">
                <label for="name" class="contact__form-tag">Name</label>
                <input type="text" name="name" placeholder="Your name" class="contact__form-input"
                       required>
              </div>
              <div class="contact__form-div">
                <label for="email" class="contact__form-tag">Mail</label>
                <input type="email" name="email" placeholder="Your email"
                       class="contact__form-input" required>
              </div>
              <div class="contact__form-div contact__form-area">
                <label class="contact__form-tag">Project</label>
                <textarea class="contact__form-input" placeholder="Write about your project"
                          required></textarea>
              </div>
              <button type="submit" class="btn">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>