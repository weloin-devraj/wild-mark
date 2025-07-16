<template>
  <div class="pt-20 md:pt-28 min-h-screen primary-padding bg-[#EEEBE3] overflow-x-hidden">
    <!-- Head Section -->
    <div
      class="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center md:justify-between gap-4 text-center md:text-left ml-0"
    >
      <!-- Left Text Section -->
      <div
        class="flex flex-col lg:flex-row w-full md:w-auto items-center justify-center md:justify-start p-1 gap-4"
      >
        <!-- Title and Highlight -->
        <div class="ml-0 md:ml-[100px] w-full md:w-auto">
          <div
            class="tracking-widest font-anton text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-yellow-950 md:scale-x-125 scale-y-90"
          >
            BEST APPAREL
            <br />
            <div class="flex justify-center md:justify-start items-start mt-2 md:mt-3 lg:mt-4">
              FOR YOU
              <span
                class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl ml-2 md:ml-3 lg:ml-4 scale-y-[290%] text-[#FF7138] font-magnite mt-1 md:mt-2 lg:mt-3 xl:mt-5"
              >
                Trending
              </span>
            </div>
          </div>
        </div>

        <!-- Subheading -->
        <div
          class="mt-2 md:mt-3 md:ml-[400px] lg:mt-4 text-yellow-950 w-full md:w-auto text-center md:text-left"
        >
          <div>
            <span
              class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
              >Adventure-ready apparel</span
            >
            <span class="text-base md:text-xl lg:text-2xl font-medium">
              to fuel your
            </span>
          </div>
          <span
            class="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            hiking and camping journey!
          </span>
        </div>
      </div>

      <!-- Arrow Button Section -->
      <div
        class="w-full mr-8 sm:w-auto flex flex-row justify-center md:justify-end items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-[70px]"
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
    <div class="mt-6 sm:mt-8 md:mt-10 lg:mt-12 ml-6">
      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :breakpoints="{
            0: {
              slidesPerView: 'auto',
              spaceBetween: 0,
            },
            768:{
               slidesPerView: 'auto',
              spaceBetween: 18,
               
            },
            986: {
              slidesPerView: 3,
              spaceBetween: 6,
            },
            1617: {
              slidesPerView: 4,
              spaceBetween: 8,
            }
          }"
          :free-mode="true"
          class="!p-0"
        >
          <swiper-slide
            v-for="n in 8"
            :key="n"
            class="!m-0 !p-0 w-auto flex-shrink-0"
          >
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
