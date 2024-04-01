import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import works from "@/works.js";
const exportWorks=works;
export const useSVStore = defineStore('cv', () => {
  const works=exportWorks.works;

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
  return { works,getFrontendWorks,getFullstackWorks }
})
