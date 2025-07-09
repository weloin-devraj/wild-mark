<template>
  <div class="px-4 bg-white mb-2 h-[89vh] overflow-x-hidden">
    <div
      class="h-full w-full rounded-2xl  relative"
      style="
        background-image: url('/images/hero5.jpg');
        background-size: cover;
        background-position: center;
      "
    >
      <!-- Hero Text -->
      <div
        class="p-8 w-full max-w-[700px] text-white font-bold font-sans absolute top-12 left-8 text-5xl md:text-6xl lg:text-7xl"
      >
        <div>ADVENTURE</div>
        <div>BEGINS WITH</div>
        <div>RIGHT GEAR</div>
      </div>

      <!-- Button -->
      <div class="absolute top-[21rem] left-16">
        <PrimaryButton
          class="h-[60px] text-2xl w-50"
          title="EXPLORE ALL"
          backgroundColor="white"
          text_color="#422006"
          fontt="bold"
          icon="/icons/upArrow.svg"
        />
      </div>

      <!-- Subtext -->
      <div class="absolute text-md xl:top-[43rem] lg:top-[28rem] top-[27rem] left-16 w-full max-w-[400px] text-white font-semibold ">
        <span>Range of Accessories, Hunting- Camping Gears,</span><br />
        <span>Tents, Outdoor Clothing, Sleeping Bags etc.</span>
      </div>
    </div>
  </div>
</template>
