<template>
  <div class="pt-20 md:pt-28 min-h-screen p-4 md:p-8 bg-[#EEEBE3] overflow-x-hidden">
    <!-- Head Section -->
    <div class="flex flex-col md:flex-row flex-wrap items-start justify-between gap-4">
      <!-- Left Text Section -->
      <div class="flex flex-col md:flex-row min-w-[200px] md:min-w-[300px] p-1 w-full md:w-auto">
        <div class="ml-2 md:ml-7 w-full md:w-auto">
          <span
            class="tracking-widest font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-yellow-950 scale-x-125 ml-0 md:ml-20 scale-y-90 block"
          >
            BEST APPAREL
            <br />
            <span class="flex items-start mt-2 md:mt-3 lg:mt-4"
              >FOR YOU
              <span
                class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl ml-2 md:ml-3 lg:ml-4 scale-y-[290%] text-[#FF7138] font-magnite mt-1 md:mt-2 lg:mt-3 xl:mt-5"
                >Trending</span
              ></span
            >
          </span>
        </div>

        <div class="mt-2 md:mt-3 lg:mt-4 text-yellow-950 ml-0 md:ml-[8rem] lg:ml-[16rem] xl:ml-[26rem] w-full md:w-auto">
          <div>
            <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
              >Adventure-ready apparel</span
            >
            <span class="text-base md:text-xl lg:text-2xl font-medium"> to fuel your</span>
          </div>
          <span class="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            hiking and camping journey!
          </span>
        </div>
      </div>

      <!-- Arrow Button Section -->
      <div
        class="w-full sm:w-auto flex flex-row justify-start sm:justify-end items-center gap-2 sm:gap-3 md:gap-4 pr-0 sm:pr-2 md:pr-5 ml-0 sm:ml-2 mt-4 sm:mt-5 md:mt-6 lg:mt-7"
      >
        <button
          @click="swiper.prev()"
          :class="[
            'rounded-full p-2 sm:p-3 md:p-4',
            swiper.isBeginning.value
              ? 'border-[1px] border-slate-500'
              : 'border-[1px] border-[#000000]',
            swiper.isBeginning.value ? 'cursor-default' : 'cursor-pointer',
            !swiper.isBeginning.value ? 'hover:bg-slate-50' : '',
          ]"
        >
          <img src="/icons/leftPointer.svg" alt="" class="w-4 sm:w-5 md:w-6" />
        </button>

        <button
          @click="swiper.next()"
          :class="[
            'rounded-full p-2 sm:p-3 md:p-4',
            swiper.isEnd.value
              ? 'border-[1px] border-slate-500'
              : 'border-[1px] border-[#000000]',
            swiper.isEnd.value ? 'cursor-default' : 'cursor-pointer',
            !swiper.isEnd.value ? 'hover:bg-slate-50' : '',
          ]"
        >
          <img src="/icons/rightPointer.svg" alt="" class="w-4 sm:w-5 md:w-6" />
        </button>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            986: {
              slidesPerView: 2,
            },
            1617: {
              slidesPerView: 4 ,
            },
           
          }"
         
          space-between="8"
          :free-mode="true"
        >
          <swiper-slide v-for="n in 8" :key="n">
            <Card
              heading="WATERFPROOF JACKET"
              picture="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5Mkyb_tP6gRXLzJ4jmgVX15NpfwmJ8yeumltaOTg40TWPA8-DT_ALh8UsB3fDohFF80wBIFCnOpWdfpys4nBH_52hCMzHYf9QXZ68hhdjt8xq2Ed0mABt4Q"
              :selected="n === 2 ? 'no' : 'yes'"
            />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref<HTMLSwiperElement | null>(null);

const swiper = useSwiper(containerRef);

onMounted(() => {
  const swiperInstance = containerRef.value?.swiper;
});
</script>

<style lang="css">
/* No custom CSS needed; all handled via Tailwind */
</style>