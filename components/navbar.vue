<template>
  <div class="h-auto primary-padding py-8">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <img class="h-12" src="/icons/logo.svg" alt="Logo" />
        <div class="text-xl md:text-4xl text-yellow-950 font-bold">
          WILDMARK
        </div>
      </div>

      <div
        class="hidden 2xl:flex justify-center gap-4 md:gap-8 text-sm md:text-[21px] font-semibold text-black"
      >
        <a href="#" class="flex hover:underline hover:underline-offset-4"
          >CLOTHING
          <img class="-mt-1.5" src="/icons/downPointer.svg" alt="" />
        </a>
        <a href="#" class="hover:underline hover:underline-offset-4">CAMPING</a>
        <a href="#" class="hover:underline hover:underline-offset-4"
          >OUTDOOR GEARS</a
        >
        <a href="#" class="hover:underline hover:underline-offset-4"
          >ACCESSORIES</a
        >
        <a href="#" class="hover:underline hover:underline-offset-4">HUNTING</a>
      </div>

      <div class="flex items-center gap-4 md:gap-8">
        <img
          class="h-4 md:h-8 rounded hidden md:block"
          src="/icons/search.svg"
          alt=""
        />
        <img
          class="h-4 md:h-8 rounded hidden md:block"
          src="/icons/cart.svg"
          alt=""
        />

        <PrimaryButton
          class="h-9 sm:h-10 md:h-16 w-20 sm:w-24 md:w-44 text-sm md:text-2xl"
          backgroundColor="#FD6A3C"
          title="Shop Now"
          text_color="white"
          fontt="bold"
        />

        <button @click="toggleMenu" class="2xl:hidden block">
          <svg
            class="h-6 w-8 scale-x-150 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="menuOpen"
      class="lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg py-4 px-8 z-50"
    >
      <div
        @click.stop
        class="flex flex-col gap-4 text-lg font-semibold text-black"
      >
        <div class="flex items-end justify-center gap-2">
          <img class="h-4 md:h-8 rounded" src="/icons/search.svg" alt="" />
          <img class="h-4 md:h-8 rounded" src="/icons/cart.svg" alt="" />
        </div>
        <div class="flex justify-between">
          <a href="#" class="hover:underline hover:underline-offset-4"
            >CLOTHING
          </a>
          <button @click="menuOpen = false" class="text-slate-600 rounded-full">
            X
          </button>
        </div>
        <div v-for="i in 4" :key="i">
          <a href="#" class="hover:underline hover:underline-offset-4 b"
            >CAMPING</a
          >
        </div>
      </div>
    </div>
    <div
      v-if="menuOpen"
      @click.prevent="menuOpen = false"
      class="left-0 right-0 top-0 bottom-0 fixed z-30"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Assuming PrimaryButton is a global component or imported elsewhere
// import PrimaryButton from './PrimaryButton.vue'; // Uncomment and adjust path if PrimaryButton is a local component

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Any specific scoped styles can go here if needed */
</style>
