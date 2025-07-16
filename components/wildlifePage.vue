<template>
  <div class="X min-h-screen  flex flex-col lg:flex-row overflow-x-hidden">
    <!-- Left Section -->
    <div
      style="
        background: radial-gradient(
          circle,
          rgba(1, 80, 54, 0.45) 9%,
          rgba(1, 80, 54, 1) 77%
        );
      "
      class="left relative primary-padding py-6 sm:py-10 md:py-16 lg:py-24 w-full lg:w-[55.5%] flex-shrink-0"
    >
      <!-- Background Layer -->
      <div class="absolute z-[-10] top-0 bottom-0 left-0 right-0 bg-[#015036]">
        <img
          class="invert w-full h-full mix-blend-screen brightness-[117%] object-cover"
          src="/images/curlyBg.jpg"
          alt=""
        />
      </div>

      <!-- Avatar + Tagline -->
      <div
        class="sec1 flex flex-col sm:flex-row items-center text-center sm:text-left flex-wrap gap-4"
      >
        <div class="flex h-20 w-20 sm:ml-14 justify-center">
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
        <div class="ml-0 sm:ml-14 md:ml-20 lg:ml-40 flex-grow">
          <h1 class="text-[#E8FFF9] text-lg sm:text-2xl">
            Planning adventures with insights <br />
            from overnight
          </h1>
        </div>
      </div>

      <!-- Headline -->
      <div class="ml-0 sm:ml-8 lg:ml-9 relative mt-6 text-center sm:text-left">
        <h1
          class="font-anton font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[9rem] text-white scale-y-[65%] scale-x-110"
        >
          ADVENTURE<br />
          <div class="mt-4">FOR <span class="text-[#E6FF80]">LIFE</span></div>
        </h1>
        <span
          class="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl text-[#FC6936] font-magnite mt-5 absolute bottom-[-2rem] sm:bottom-7 right-1/2 sm:right-52 translate-x-1/2 sm:translate-x-0 -rotate-6"
        >
          Wildlife
        </span>
      </div>

      <!-- Description + Arrows -->
      <div>
        <div
          class="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mt-10 sm:mt-16 md:mt-20 gap-4"
        >
          <h1
            class="text-lg sm:text-xl md:text-2xl text-[#E8FFF9] scale-x-100 lg:scale-x-90"
          >
            Weather Gear, Clothing, Tents, Mats, <br />
            Sleeping Bags
          </h1>
          <div
            class="w-full sm:w-auto flex justify-center sm:justify-end gap-5"
          >
            <button
              @click="swiper.prev()"
              :class="[
                'rounded-full p-4',
                swiper.isBeginning.value
                  ? 'border-[1px] border-slate-400 cursor-default'
                  : 'border-[1px] border-white cursor-pointer',
              ]"
            >
              <img src="/icons/leftPointer2.svg" alt="" />
            </button>
            <button
              @click="swiper.next()"
              :class="[
                'rounded-full p-4',
                swiper.isEnd.value
                  ? 'border-[1px] border-slate-400 cursor-default'
                  : 'border-[1px] border-white cursor-pointer',
              ]"
            >
              <img src="/icons/rightPointer2.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <!-- Swiper Section -->
      <div class="mt-9">
        <ClientOnly>
          <swiper-container
            ref="containerRef"
            :breakpoints="{
              0: {
                slidesPerView: 'auto',
                spaceBetween: 0,
              },
            }"
            :free-mode="true"
          >
            <swiper-slide
              v-for="n in 5"
              :key="n"
              class="!m-0 !p-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[300px] xl:w-[300px] !mr-3"
            >
              <SwiperImg
                image_url="/images/fieldPic2.jpg"
                title="ADVENTURES GEARS"
              />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>

    <!-- Right Image Section -->
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
import { ref, onMounted } from "vue";
import SwiperImg from "./SwiperImg.vue";

const containerRef = ref<HTMLSwiperElement | null>(null);
const swiper = useSwiper(containerRef);

onMounted(() => {
  const swiperInstance = containerRef.value?.swiper;
});
</script>
