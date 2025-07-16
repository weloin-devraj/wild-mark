<template>
  <div class="p-8 mt-4 max-w-sm">
    <div class="head bg-white rounded-xl 2xl:w-[420px] p-4 shadow-sm">
      <div
        class="images flex items-center flex-col relative justify-center mt-4"
      >
        <div>
          <svg
            v-if="selected == 'yes'"
            class="absolute p-3 rounded-full right-0 outline outline-1 outline-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
            <path
              fill="#E33927"
              d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
            />
          </svg>
          <svg
            v-else
            class="absolute p-3 rounded-full right-0 hover:outline outline-1 hover:outline-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
            <path
              fill="currentColor"
              d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
            />
          </svg>
        </div>
        <img
          class="2xl:h-[450px] object-contain"
          :src="picture"
          alt="Waterproof Jacket"
        />
      </div>
    </div>

    <div class="tail 2xl:p-2 ">
      <h1 class="text-3xl font-bold w-[400px] 2xl:mt-4 text-[#120400]">
        {{ heading ? heading : "prdouct title" }}
      </h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
        <span class="text-2xl text-[#63614F] opacity-85 font-bold"
          >($194.99)
        </span>
        <span class="flex items-center gap-1 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="Goldenrod"
              d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="Goldenrod"
              d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="Goldenrod"
              d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="Goldenrod"
              d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
            />
          </svg>
        </span>

        <span class="flex items-center text-md text-[#69664E]"
          >(42 reviews)</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  heading?: string;
  price?: number;
  picture?: string;
  selected?: string;
}>();
</script>
