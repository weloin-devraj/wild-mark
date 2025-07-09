<template>
  <div
    class="min-h-screen overflow-x-hidden overflow-y-hidden relative bg-[#EDECE3] p-16"
  >
    <div class="headingSection flex items-center justify-between">
      <div class="heading font-anton text-8xl scale-y-75 text-[#321D06]">
        HUNTING & <br />
        CAMPING GEARS
      </div>

      <div class="description text-xl text-[#321D06]">
        By <span class="font-bold">hunting and camping</span> gears with <br />
        discounts, earn reward points on every <br />dollar you spend.
      </div>

      <div class="button">
        <button
          class="text-xl m-3 font-bold text-[#321D06] bg-white py-4 px-8 rounded-3xl"
        >
          ON SALE
        </button>
        <button
          class="text-xl m-3 font-bold text-white bg-[#321D06] py-4 px-8 rounded-3xl"
        >
          FEATURED
        </button>
        <button
          class="text-xl m-3 font-bold text-[#321D06] bg-white py-4 px-8 rounded-3xl"
        >
          NEW
        </button>
      </div>
    </div>
    <div class="cardSection grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div v-for="n in 4" :key="n">
        <Card 
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7q2Hay9RIT8P1749cPO7eymoO4BHN8Qdhw&s"
        heading="Demo product" 
        />
      </div>
    </div>
  </div>
</template>
