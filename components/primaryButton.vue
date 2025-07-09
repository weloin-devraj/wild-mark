<template>
   <button
    
    class="flex items-center  justify-center hover:scale-105 transition-transform duration-200  gap-2  px-4 py-2 rounded-lg shadow-sm "
   :style="{backgroundColor, color:text_color, fontWeight: fontt}"
   >
   <span>{{ title }}</span> 
   <img v-if="icon" :src="icon" alt="">


   </button>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  backgroundColor?: string
  title?: string
  text_color:string
  fontt?:string
  icon?:any
}>(), {
  title: 'hello'
})
</script>