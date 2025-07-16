<template>
  <div>
    <div class="topTab primary-padding py-28 ">
      <div class="flex gap-10  flex-col lg:flex-row items-center ">
        <div
          class="left relative h-[435px] lg:w-[1000px] sm:w-[600px]   rounded-2xl px-12 py-16 bg-[#C6E9FF]"
        >
          <!-- writing part of left blue tab  -->
          <div class="writingPart flex flex-col gap-2 w-[70%] h-full text-[#163F58]">
            <h1 class=" text-xl font-semibold">HUNTING GEARS</h1>
            <h1
              class="font-anton text-2xl sm:text-4xl 2xl:text-6xl scale-y-90 scale-x-125 ml-16"
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
            <button class="font-bold md:text-xl text-sm md:ml-0 -ml-5 flex md:items-center gap-3">
              SHOP NOW
              <span>
                <img class="h-[25px]" src="/icons/blueArrowRight.svg" alt="" />
              </span>
            </button>
        </div>
        <!-- image part of left blue tab  -->
        <img
          class="absolute top-0 right-12 hidden sm:block     bottom-0 mt-2"
          src="/images/girl1.png"
          alt=""
        />
         <img
          class="absolute top-0 right-12 h-[50px ] w-[50px] top-[220px] sm:hidden bottom-0 md:mt-0 mt-[120px]"
          src="/images/girl1.png"
          alt=""
        />
        <img
          class="absolute bottom-0 hidden xl:block md:left-96"
          src="/images/shoes.png"
          alt=""
        />

        </div>

        <div
          class="right h-[435px] lg:w-[700px] sm:w-[600px]  rounded-2xl px-12 py-16 relative bg-[#E7FF83]"
        >

           <div class="writingPart  flex flex-col gap-8 md:gap-10">

               <h1 class="font-anton text-sm sm:text-4xl lg:text-5xl xl:text-6xl scale-y-90 text-[#3B440D] scale-x-125 ml-6 md:ml-16">JACKETS & <br> VESTS</h1>
               <div>
                <h1 class="sm:text-2xl">The Bushbuck Polar X: <br> <span class=" font-bold">a warm, durable puffer jacket <br></span>perfect for adventures.</h1>
               </div>
               <div>
                <button class="md:flex items-center gap-3 font-bold  text-xs md:text-xl">SHOP JACKETS <img src="/icons/greenRightPointer.svg" alt=""></button>
               </div>
           </div>
           <img class=" absolute  hidden sm:block bottom-0 right-3" src="/images/girl2.png" alt="">
           <img class=" absolute md:h-[100px ] md:w-[100px] h-[80px] w-[80px] sm:hidden  bottom-0 right-3" src="/images/girl2.png" alt="">

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
    <div class="imageSection 2xl:h-screen overflow-hidden">
      <img class="w-full" src="/images/mountain.png" alt="" />
    </div>
  </div>
</template>
