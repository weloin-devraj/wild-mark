<template>
  <div class="pt-28  min-h-screen p-8 bg-[#EEEBE3] overflow-x-hidden">
    <!-- Head Section -->
    <div class="flex flex-wrap items-start justify-between gap-4">
      <!-- Left Text Section -->
      <div class="flex min-w-[300px] p-1">
        <div class="ml-7">
          <span
            class="tracking-widest font-anton text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-950 block"
          >
            BEST APPAREL
            <br />
            <span class="flex items-start"
              >FOR YOU
              <span
                class="text-2xl text-orange-700 font-bold font-cedarville mt-5"
                >TRENDING</span
              ></span
            >
          </span>
        </div>

        <div class="mt-4 text-yellow-950 ml-[12rem]">
          <div>
            <span class="text-xl md:text-2xl font-bold"
              >Adventure-ready apparel</span
            >
            <span> to fuel your life</span>
          </div>
          <span class="block text-base md:text-lg">
            hiking and camping journey!
          </span>
        </div>
      </div>

      <!-- Arrow Button Section -->
      <div
        class="w-full sm:w-auto flex justify-start sm:justify-end items-center gap-4 pr-5 ml-2 mt-7"
      >
        <button
          class="outline outline-1 hover:bg-slate-50 hover:cursor-default  rounded-full p-3"
        >
          <img src="/icons/leftPointer.svg" alt="" />
        </button>
        <button
          class="outline outline-1 hover:bg-slate-50 hover:cursor-default  rounded-full p-3"
        >
          <img src="/icons/rightPointer.svg" alt="" />
        </button>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="p-6  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
      <div v-for="n in 4" :key="n">
        <Card heading="WATERFPROOF JACKET" />
      </div>
    </div>
  </div>
</template>
