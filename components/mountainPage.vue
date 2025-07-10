<template>
  <div>
    <div class="topTab px-24 py-28 ">
      <div class="flex gap-10  flex-col lg:flex-row items-center ">
        <div
          class="left relative h-[435px] w-[1000px] shadow-lg rounded-2xl px-12 py-16 bg-[#C6E9FF]"
        >
          <!-- writing part of left blue tab  -->
          <div class="writingPart flex flex-col gap-2 w-[70%] h-full text-[#163F58]">
            <h1 class="text-xl font-semibold">HUNTING GEARS</h1>
            <h1
              class="font-anton lg:text-5xl xl:text-6xl scale-y-90 scale-x-125 ml-16"
            >
              HIGH-END
              <span
                class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-700 font-bold font-cedarville mt-5 ml-4"
                >Hunters</span
              >
              <br />
              APPAREL ONLY <br />
              DESIGNED FOR <br />
              HUNTERS
            </h1>
            <h1 class="font-bold text-xl flex items-center gap-3">
              SHOP NOW
              <span>
                <img class="h-[25px]" src="/icons/blueArrowRight.svg" alt="" />
              </span>
            </h1>
        </div>
        <!-- image part of left blue tab  -->
        <img
          class="absolute top-0 right-12 bottom-0 mt-2"
          src="/images/girl1.png"
          alt=""
        />
        <img
          class="absolute bottom-0 left-96"
          src="/images/shoes.png"
          alt=""
        />

        </div>

        <div
          class="right h-[435px] w-[700px] shadow-lg rounded-2xl px-12 py-16 relative bg-[#E7FF83]"
        >

           <div class="writingPart  flex flex-col gap-10">

               <h1 class="font-anton lg:text-5xl xl:text-6xl scale-y-90 text-[#3B440D] scale-x-125 ml-16">JACKETS & <br> VESTS</h1>
               <div>
                <h1 class="text-xl">The Bushbuck Polar X: <br> <span class=" font-bold">a warm, durable puffer jacket <br></span>perfect for adventures.</h1>
               </div>
               <div>
                <h1 class="flex items-center gap-3 font-bold text-xl">SHOP JACKETS <img src="/icons/greenRightPointer.svg" alt=""></h1>
               </div>
           </div>
           <img class=" absolute  bottom-0 right-3" src="/images/girl2.png" alt="">
        </div>
      </div>
      <div class="text-center mt-48">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-700 font-bold font-magnite  mt-5 ml-4 bottom-1 right-52"
        >
          MOUNTAINS
        </h1>
      </div>
    </div>
    <div class="imageSection h-screen overflow-hidden">
      <img class="w-full" src="/images/mountain.png" alt="" />
    </div>
  </div>
</template>
