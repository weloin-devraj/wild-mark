<script setup lang="ts">
// import Card2 from './Card2.vue';

</script>

<template>
  <div
    class="min-h-screen overflow-x-hidden overflow-y-hidden relative bg-[#EDECE3] primary-padding py-16"
  >
    <div class="headingSection flex flex-col lg:flex-row items-center justify-between">
      <div class="heading font-anton text-8xl scale-y-[65%] text-[#47290A] text-center md:text-start md:trxt-start">
        HUNTING & <br />
        CAMPING GEARS
      </div>

      <div class="description scale-x-90 text-xl text-[#321D06] text-center md:text-start">
        By <span class="font-bold">hunting and camping</span> gears with <br />
        discounts, earn reward points on every <br />dollar you spend.
      </div>

      <div class="button">
        <button
          class="md:text-xl md:m-3 m-1 font-bold text-[#321D06] bg-white py-1 text-xs md:py-4 md:px-8 px-1 rounded-full"
        >
          ON SALE
        </button>
        <button
          class="md:text-xl md:m-3 m-1 font-bold text-white bg-[#321D06] py-1 text-xs md:py-4 md:px-8 px-1 rounded-full"
        >
          FEATURED
        </button>
        <button
          class="md:text-xl md:m-3 m-1 font-bold text-[#321D06] bg-white py-1 text-xs md:py-4 md:px-8 px-1 rounded-full"
        >
          NEW
        </button>
      </div>
    </div>
    <div class="cardSection grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div v-for="n in 4" :key="n">
        <Card2 
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7q2Hay9RIT8P1749cPO7eymoO4BHN8Qdhw&s"
        heading="Demo product" 
        :selected="n==2?'yes':'no'"
         
        />
      </div>
    </div>
  </div>
</template>
