<script setup>
import {Form, Field} from "vee-validate";
import * as yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import axios from "axios";
import {computed, ref} from "vue";
import { toast } from "vue3-toastify";
import {useSVStore} from "@/stores/cv.js";

const store=useSVStore();
const userName=ref('');
const userEmail=ref('');
const userMessage=ref('');
const currentTheme=computed(()=>{
  return  store.isDark ? "dark" : 'light';
})
const sendMessageSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required().min(8),
});
const sendMessage = (values, action) => {
  axios.post('https://formspree.io/f/xqknyzpo', values)
      .then(resp => {
        action.resetForm();
        toast("Your message was successfully sent",{
          theme: currentTheme.value,
          type: "success",
          position: "bottom-right",
          dangerouslyHTMLString: true
        });
      })
      .catch(error => {
        console.log(error)
      })
}
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
                <font-awesome-icon :icon="['fas', 'at']"
                                   class="w-7 h-7 mb-1 dark:text-white group-hover:text-orange-600 transition ease-in duration-300"/>
                <h3 class="font-semibold dark:text-white mb-1">Gmail</h3>
                <span class="text-xs dark:text-white">
                  Write me
                </span>
              </a>
              <a href="http://m.me/oleg510bodyan" target="_blank"
                 class="flex group flex-col justify-center w-[150px] items-center p-5 shadow-xl rounded-lg hover:shadow-black transition ease-in duration-300 dark:bg-darkBG">
                <font-awesome-icon :icon="['fab', 'facebook-messenger']"
                                   class="w-7 h-7 mb-1 dark:text-white group-hover:text-[#006AFF] transition ease-in duration-300"/>
                <h3 class="font-semibold dark:text-white mb-1">Messenger</h3>
                <span class="text-xs dark:text-white">
                  Write me
                </span>
              </a>
              <a href="https://t.me/teddi90" target="_blank"
                 class="flex group flex-col justify-center w-[150px] items-center p-5 shadow-xl rounded-lg hover:shadow-black transition ease-in duration-300 dark:bg-darkBG">
                <font-awesome-icon :icon="['fab', 'telegram']"
                                   class="w-7 h-7 mb-1 dark:text-white group-hover:text-[#0088cc] transition ease-in duration-300"/>
                <h3 class="font-semibold dark:text-white mb-1">Telegram</h3>
                <span class="text-xs dark:text-white">
                  Write me
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="rounded-xl shadow-xl py-[30px] px-[20px] hover:shadow-black transition ease-in duration-300 dark:bg-darkBG">
            <h3 class="text-lg font-semibold text-center mb-5 dark:text-white">Write me about your Project</h3>
            <Form @submit="sendMessage"
                  :validation-schema="sendMessageSchema"
                  v-slot="{errors}"
                  class="px-4">
              <div class="flex justify-between mb-5 gap-5">
                <div class="relative mb-6">
                  <Field  v-model="userName"
                      name="name" type="text"
                         class="input"/>
                  <label v-if="!userName" class="label">Name</label>
                  <span class="focus-border"/>
                  <span class="absolute -bottom-5 left-0 text-xs text-red-700">{{ errors.name }}</span>
                </div>
                <div class="relative mb-6">
                  <Field v-model="userEmail" name="email" type="email"
                         class="input"/>
                  <label v-if="!userEmail" class="label">Email</label>
                  <span class="focus-border"/>
                  <span class="absolute -bottom-5 left-0 text-xs text-red-700">{{ errors.email }}</span>
                </div>
              </div>
              <div class="relative mb-10">
                <Field v-model="userMessage" as="textarea" name="message" cols="30" rows="5"
                       class="textarea"/>
                <label v-if="!userMessage" class="label">Message</label>
                <span class="focus-border">
            	    <i></i>
                </span>
                <span class="absolute -bottom-5 left-0 text-xs text-red-700">{{ errors.message }}</span>
              </div>
              <button type="submit" class="btn">Send message</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>