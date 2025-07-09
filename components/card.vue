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
        <span>
          <svg
            class=" w-7 h-7 outline-none rounded-full  hover:outline-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
            />
          </svg>
        </span>
      </div>

      <div class="images flex items-center justify-center mt-4">
        <div>
          <img
            class="h-[450px]  object-contain"
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5Mkyb_tP6gRXLzJ4jmgVX15NpfwmJ8yeumltaOTg40TWPA8-DT_ALh8UsB3fDohFF80wBIFCnOpWdfpys4nBH_52hCMzHYf9QXZ68hhdjt8xq2Ed0mABt4Q"
            alt="Waterproof Jacket"
          />
        </div>
      </div>
    </div>

    <div class="tail p-2">
      <h1 class="text-3xl font-bold w-[400px] mt-4 text-[#351910]"> {{ heading?heading:'prdouct title' }}</h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
        <span class="text-xl text-[#6F6D58] opacity-85  font-bold">($194.99) </span>
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

        <span class="flex items-center text-sm">(42 reviews)</span>
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