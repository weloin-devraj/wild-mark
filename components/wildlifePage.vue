<template>
  <div class="X min-h-screen flex flex-col lg:flex-row overflow-x-hidden">
    <div
      style="
        background: radial-gradient(
          circle,
          rgba(1, 80, 54, 0.45) 9%,
          rgba(1, 80, 54, 1) 77%
        );
      "
      class="left relative p-6 sm:p-10 md:p-16 lg:p-24 w-full lg:w-[55.5%] flex-shrink-0"
    >
      <div class="absolute z-[-10] top-0 bottom-0 left-0 bg-[#015036]">
        <img
          class="invert w-full h-full mix-blend-screen brightness-[117%]"
          src="/images/curlyBg.jpg"
          alt=""
        />
      </div>
      <div class="sec1 flex items-center flex-wrap">
        <div class="flex h-20 w-20 flex-shrink-0">
          <img
            class="rounded-full outline outline-[#015036] outline-4 object-cover"
            src="/images/roboOrange.webp"
            alt=""
          />
          <img
            class="rounded-full outline outline-[#015036] outline-4 -ml-3 object-cover"
            src="/images/roboYello.avif"
            alt=""
          />

          <img
            class="rounded-full outline outline-[#015036] outline-4 -ml-3 object-cover"
            src="/images/roboOrange.webp"
            alt=""
          />
        </div>
        <div class="ml-4 sm:ml-10 md:ml-20 lg:ml-40 flex-grow">
          <h1 class="text-[#E8FFF9] text-lg sm:text-2xl">
            Planning adventures with insights <br />
            from overnight
          </h1>
        </div>
      </div>

      <div class="ml-0 sm:ml-4 md:ml-8 lg:ml-9 relative mt-6">
        <h1
          class="font-anton font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] text-white scale-y-[65%] scale-x-110 lg:scale-x-110"
        >
          ADVENTURE<br />
          <div class="mt-4">FOR <span class="text-[#E6FF80]">LIFE</span></div>
        </h1>
        <span
          class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#FC6936] font-magnite mt-5 ml-4 absolute bottom-7 right-52 -rotate-6"
          >Wildlife</span
        >
      </div>

      <div>
        <div
          class="flex justify-between items-start mt-10 sm:mt-16 md:mt-20 flex-wrap"
        >
          <h1
            class="text-lg sm:text-xl md:text-2xl -ml-0 sm:-ml-2 md:-ml-4 lg:-ml-6 scale-x-100 lg:scale-x-90 text-[#E8FFF9] flex-shrink-0"
          >
            Weather Gear, Clothing, Tents, Mats, <br />
            Sleeping Bags
          </h1>
          <div
            class="w-full gap-5 mr-14 sm:w-auto flex justify-start sm:justify-end mt-4 sm:mt-0"
          >
            
            <button
              @click="swiper.prev()"
              :class="[
                'rounded-full p-4',
                swiper.isBeginning.value
                  ? ' border-[1px] border-slate-400'
                  : ' border-[1px] border-white',
                swiper.isBeginning.value ? 'cursor-default' : 'cursor-pointer',
                
              ]"
            >
              <img src="/icons/leftPointer2.svg" alt="" />
            </button>
            <button
              @click="swiper.next()"
              :class="[
                'rounded-full p-4',
                swiper.isEnd.value
                  ? ' border-[1px] border-slate-400'
                  : ' border-[1px] border-white',
                swiper.isEnd.value ? 'cursor-default' : 'cursor-pointer',
                
              ]"
            >
              <img class="" src="/icons/rightPointer2.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div class="sm:flex-row gap-6 sm:gap-10 md:gap-14 mt-9">
        <div>
          <div>
            <ClientOnly>
              <swiper-container
                ref="containerRef"
                slides-per-view="2"
                space-between="2"
                   :free-mode="true"
                  
              >
                <swiper-slide v-for="n in 5" :key="n">
                  <SwiperImg
                    image_url="/images/fieldPic2.jpg"
                    title="ADVENTURES GEARS"
                  />

                  <!-- Slide {{ idx + 1 }} -->
                </swiper-slide>
              </swiper-container>
            </ClientOnly>
          </div>
        </div>

        <!-- <SwiperImg image_url="/images/fieldPic2.jpg" title="ADVENTURES GEARS" /> -->
      </div>
    </div>
    <div
      class="right w-full lg:w-[44.5%] h-64 lg:h-auto"
      style="
        background-image: url('/images/fieldMan.avif');
        background-size: cover;
        background-position: center;
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import SwiperImg from "./SwiperImg.vue";

const containerRef = ref<HTMLSwiperElement | null>(null);

const swiper = useSwiper(containerRef);

onMounted(() => {
  const swiperInstance = containerRef.value?.swiper;
});
</script>
