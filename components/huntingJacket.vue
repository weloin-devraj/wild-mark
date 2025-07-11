<template>
  <div
    class="min-h-screen overflow-x-hidden pt-[100px]  relative overflow-y-hidden bg-[#FFFFFF] "
  >
    <!-- picture center -->
    <div class="  absolute bottom-0 left-40  z-50 ">
      <img class="h-[30rem] w-[30rem] " src="/images/deer.png" alt="" />
    </div>
    <div class="image2 absolute  left-[32%] top-[15%] z-50  ">
        <h1 class="text-7xl text-[#FF7138] font-bold font-magnite  mt-6 ml-8">Adventures</h1>
        <div class="h-[26rem] w-[22rem] -rotate-[7deg] mt-2 overflow-hidden rounded-xl outline-white outline outline-[14px] shadow-2xl  ">
            <img src="/images/mountainman.jpg" alt="">
        </div>
    </div>

    <div class="h-[28rem] flex justify-between pt-16 ">
      <div class="flag mt-8 ml-0">
        <img class="h-[14rem]  " src="/images/redBigFlag.png" alt="" />
        <div class=" text-lg text-[#321F08] mt-16">
          <h1><span class="font-bold text-2xl ml-20 ">Hunting,Camping & Outdoor</span> Gear</h1>
          <h1 class="ml-20 text-2xl">Thats Engineered To Perform</h1>
        </div>
      </div>
      <div class="subtitle text-end mr-16">
        <h1
          class="text-[8rem] font-bold text-[#412707] font-anton tracking-wider scale-x-120 scale-y-75 leading-tight mb-[-1rem]"
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

    <div >
      <div class="flex justify-between items-center mr-16 mt-8 mb-0 pb-0">
        <h1
          class="text-[18rem] font-bold text-[#81C049] font-anton -ml-14  scale-y-75 tracking-widest"
        >
          ELEVATE-
        </h1>
        <PrimaryButton
          class="h-[80px] text-2xl w-[20rem] mr-2  "
          title="EXPLORE JACKETS"
          backgroundColor="#412707"
          text_color="white"
          fontt="bold"
          icon="/icons/upArrow.svg"
        />
      </div>
      <div>
        <h1
          class="text-[18rem] -mt-[185px] font-bold mr-24   text-[#FF7138] font-anton scale-x-125  scale-y-75 tracking-widest flex justify-end pt-0"
        >
          HUNTING
        </h1>
      </div>
    </div>
  </div>
</template>
