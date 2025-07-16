<template>
  <div
    class="min-h-screen overflow-x-hidden pt-[100px]  relative overflow-y-hidden bg-[#FFFFFF] "
  >
    <!-- picture center -->
    <div class="block absolute bottom-0 left-40  z-50 ">
      <img class="md:h-[30rem] md:w-[30rem] h-[12rem] w-[12rem]" src="/images/deer.png" alt="" />
    </div>
    <div class="image2 absolute left-[10%]  md:left-[32%] md:top-[15%] top-0 z-50  ">
        <h1 class="md:text-7xl text-5xl  text-[#FF7138] font-bold font-magnite  mt-6 md:ml-8">Adventures</h1>
        <div class="md:h-[26rem]  md:w-[22rem] h-[9rem] w-[8rem] -rotate-[7deg] mt-2 overflow-hidden rounded-xl outline-white outline outline-[14px] shadow-2xl  ">
            <img src="/images/mountainman.jpg" alt="">
        </div>
    </div>

    <div class="h-[28rem] flex justify-between pt-16 ">
      <div class="flag 2xl:mt-8 mt-28  ml-0 text-center  ">
        <img class="h-[14rem]  " src="/images/redBigFlag.png" alt="" />
        <div class="hidden 2xl:block text-lg text-[#321F08] mt-16">
          <h1><span class="font-bold md:text-2xl text-sm ml-20  ">Hunting,Camping & Outdoor</span> Gear</h1>
          <h1 class="ml-20 text-2xl">Thats Engineered To Perform</h1>
        </div>
      </div>
      <div class="subtitle text-end mr-16">
        <h1
          class="2xl:text-[8rem] text-[3rem] font-bold text-[#412707] font-anton tracking-wider scale-x-120 scale-y-75 leading-tight mb-[-1rem]"
        >
          DESIGNED <br />
          FOR <span class="text-[#B0AA9A]">TOUGH</span> <br />
          CLIMATES
        </h1>
        <span class="text-[#412707] text-xl mt-[-0.5rem] block">
          Hunting jackets offer
          <span class="font-bold text-2xl">synthetic insulation</span>
        </span>
      </div>
    </div>

    <div class=" ">
      <div class="flex justify-between items-center mr-16 mt-8  pb-0">
        <h1
          class="md:text-[18rem] text-[3rem] font-bold text-[#81C049] font-anton xl:-ml-14  2xl:scale-y-75 tracking-widest"
        >
          ELEVATE-
        </h1>
        
        <PrimaryButton
          class="h-[80px] text-2xl w-[21rem] mr-2  "
          title="EXPLORE JACKETS"
          backgroundColor="#321F08"
          text_color="white"
          fontt="bold"
          icon="/icons/upArrow.svg"
        />
      </div>
      <div
       class="scale-y-75    "
      >
        <h1
          class="md:text-[18rem]  text-[3rem]    -mt-[185px] font-bold mr-24   text-[#FF7138] font-anton scale-x-125   tracking-widest flex justify-end pt-0"
         
        >
          HUNTING
        </h1>
      </div>
    </div>
  </div>
</template>
