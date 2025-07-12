<template>
  <div class="pt-28 min-h-screen p-8 bg-[#EEEBE3] overflow-x-hidden">
    <!-- Head Section -->
    <div class="flex flex-wrap items-start justify-between gap-4">
      <!-- Left Text Section -->
      <div class="flex min-w-[300px] p-1">
        <div class="ml-7">
          <span
            class="tracking-widest font-anton text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-950 scale-x-125 ml-20 scale-y-90 block"
          >
            BEST APPAREL
            <br />
            <span class="flex items-start mt-4"
              >FOR YOU
              <span
                class="text-3xl ml-4 scale-y-[290%] text-[#FF7138] font-magnite mt-5"
                >Trending</span
              ></span
            >
          </span>
        </div>

        <div class="mt-4 text-yellow-950 ml-[26rem] scale-y-">
          <div>
            <span class="text-xl md:text-2xl font-bold"
              >Adventure-ready apparel</span
            >
            <span class="text-2xl font-medium"> to fuel your</span>
          </div>
          <span class="block text-base md:text-2xl">
            hiking and camping journey!
          </span>
        </div>
      </div>

      <!-- Arrow Button Section -->
      <div
        class="w-full sm:w-auto flex justify-start sm:justify-end items-center gap-4 pr-5 ml-2 mt-7"
      >
        <button
          @click="swiper.prev()"
          :class="[
            '  rounded-full p-4',
            swiper.isBeginning.value == true
              ? 'outline outline-1 outline-slate-500'
              : 'outline outline-1 outline-[#000000]',
            swiper.isBeginning.value == true
              ? 'cursor-default'
              : 'cursor-pointer',
            swiper.isBeginning.value == false ? 'hover:bg-slate-50' : '',
          ]"
        >
          <img src="/icons/leftPointer.svg" alt="" />
        </button>
        {{ console.log(activeIndex) }}
        <button
          @click="swiper.next()"
          :class="[
            '  rounded-full p-4',
            swiper.isEnd.value == true
              ? 'outline outline-1 outline-slate-500'
              : 'outline outline-1 outline-[#000000]',
            swiper.isEnd.value == true ? 'cursor-default' : 'cursor-pointer',
            swiper.isEnd.value == false ? 'hover:bg-slate-50' : '',
          ]"
        >
          <img src="/icons/rightPointer.svg" alt="" />
        </button>
      </div>
    </div>

    <!-- Cards Section -->

    <div>
      <ClientOnly>
        <swiper-container
          ref="containerRef"
          slides-per-view="4"
          space-between="2"
        >
          <swiper-slide v-for="n in 8" :key="n">
            <Card
              heading="WATERFPROOF JACKET"
              picture="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5Mkyb_tP6gRXLzJ4jmgVX15NpfwmJ8yeumltaOTg40TWPA8-DT_ALh8UsB3fDohFF80wBIFCnOpWdfpys4nBH_52hCMzHYf9QXZ68hhdjt8xq2Ed0mABt4Q"
              n
              :selected="n === 2 ? 'no' : 'yes'"
            />
            <!-- Slide {{ idx + 1 }} -->
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

<style lang="css"></style>
