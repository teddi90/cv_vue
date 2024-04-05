import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import works from "@/works.js";
import {useDark, useToggle} from "@vueuse/core";
const exportWorks=works;
export const useSVStore = defineStore('cv', () => {
  const works=ref(exportWorks.works);
  const work=ref(null);
  const isDark = useDark({
    selector: 'body',
    attribute: 'class',
  });
  const toggleTheme = useToggle(isDark);
  const getFrontendWorks=()=>{
    return works.value.filter(work=>{
      return work.type==='frontend';
    });
  };
  const getFullstackWorks=()=>{
    return works.value.filter(work=>{
      return work.type==='fullstack';
    });
  };
  const getPetProjectWorks=()=>{
    return works.value.filter(work=>{
      return work.type==='pet_project';
    });
  };
  const getWorkById=(id)=>{
    work.value= works.value.find(work=>work.id===id);
  }
  return { works,work, isDark, getFrontendWorks, getFullstackWorks,getPetProjectWorks,toggleTheme, getWorkById }
},{
  persist: true
})
