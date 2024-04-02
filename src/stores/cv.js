import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import works from "@/works.js";
import {useDark, useToggle} from "@vueuse/core";
const exportWorks=works;
export const useSVStore = defineStore('cv', () => {
  const works=exportWorks.works;
  const isDark = useDark({
    selector: 'body',
    attribute: 'class',
  });
  const toggleTheme = useToggle(isDark);
  const getFrontendWorks=()=>{
    return works.filter(work=>{
      return work.type==='frontend';
    });
  };
  const getFullstackWorks=()=>{
    return works.filter(work=>{
      return work.type==='fullstack';
    });
  };
  return { works, isDark, getFrontendWorks, getFullstackWorks,toggleTheme }
})
