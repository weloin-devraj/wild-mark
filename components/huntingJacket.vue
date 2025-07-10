<template>
  <div
    class="min-h-screen overflow-x-hidden oveflow-x-hidden relative overflow-y-hidden bg-[#FFFFFF] "
  >
    <!-- picture center -->
    <div class="  absolute bottom-0 left-40  ">
      <img class="h-[30rem] w-[30rem]" src="/images/deer.png" alt="" />
    </div>
    <div class="image2 absolute  left-[35%] top-[10%]  ">
        <h1 class="text-5xl text-[#FF7138] font-bold font-magnite  mt-5 ml-8">Adventures</h1>
        <div class="h-[23rem] w-[18rem] -rotate-[7deg] mt-2 overflow-hidden rounded-xl outline outline-solid outline-white outline-8">
            <img src="/images/mountainman.jpg" alt="">
        </div>
    </div>

    <div class="h-[28rem] flex justify-between pt-16 ">
      <div class="flag mt-8 ml-14">
        <img class="h-[12rem]" src="/images/redFlag.jpg" alt="" />
        <div class="mt-4 text-lg text-[#321F08]">
          <h1><span class="font-bold">Hunting,Camping & Outdoor</span> Gear</h1>
          <h1>Thats Engineered To Perform</h1>
        </div>
      </div>
      <div class="subtitle text-end mr-16">
        <h1
          class="text-[8rem] font-bold text-[#45280B] font-anton tracking-wider scale-x-120 scale-y-75 leading-tight mb-[-1rem]"
        >
          DESIGNED <br />
          FOR <span class="text-[#B0AA9A]">TOUGH</span> <br />
          CLIMATES
        </h1>
        <span class="text-[#45280B] text-xl mt-[-0.5rem] block">
          Hunting jackets offer
          <span class="font-bold text-2xl">synthetic insulation</span>
        </span>
      </div>
    </div>

    <div >
      <div class="flex justify-between items-center mr-16 mt-8 mb-0 pb-0">
        <h1
          class="text-[16rem] font-bold text-[#81C049] font-anton tracking-widest"
        >
          ELEVATE -
        </h1>
        <PrimaryButton
          class="h-[80px] text-2xl w-[20rem] mr-2 "
          title="EXPLORE JACKETS"
          backgroundColor="#45280B"
          text_color="white"
          fontt="bold"
          icon="/icons/upArrow.svg"
        />
      </div>
      <div>
        <h1
          class="text-[16rem] -mt-[120px] font-bold mr-16 text-[#FF7138] font-anton tracking-widest flex justify-end pt-0"
        >
          HUNTING
        </h1>
      </div>
    </div>
  </div>
</template>
