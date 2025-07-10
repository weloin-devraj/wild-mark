<template>
  <div class="p-8  mt-4 max-w-sm   ">
    <div class="head bg-white rounded-xl w-[420px] p-4 shadow-sm">
      <div class="flex gap-2 items-center">
        <span class="headdot flex gap-2">
          <svg
            class="fill-slate-500  w-4 h-4 outline-none rounded-full  hover:outline-slate-300 "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg
            class="fill-green-700 w-4 h-4 outline-none rounded-full  hover:outline-slate-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg
            class="fill-yellow-800 w-4 h-4 outline-none rounded-full  hover:outline-slate-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg
            class="fill-red-600 w-4 h-4 outline-none rounded-full  hover:outline-slate-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>
        <span class="text-md flex-grow hover:cursor-default hover:text-slate-700"> <h1>+More options</h1> </span>
        <span class="hover:outline hover:outline-slate-400   hover:outline-1  p-2 rounded-full" >
         <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="" d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"/></svg>
        </span>
      </div>

      <div class="images flex items-center justify-center mt-4">
        <div>
          <img
            class="h-[450px]  object-contain"
            :src="picture"
            alt="Waterproof Jacket"
          />
        </div>
      </div>
    </div>

    <div class="tail p-2">
      <h1 class="text-3xl font-bold w-[400px] mt-4 text-[#351910]"> {{ heading?heading:'prdouct title' }}</h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
        <span class="text-2xl text-[#69664E] opacity-85  font-bold">($194.99) </span>
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

        <span class="flex items-center text-md text-[#69664E]">(42 reviews)</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  heading?: string;
  price?: number;
  picture?: string;
}>();
</script>