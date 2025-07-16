<template>
  <div class=" primary-padding  bg-white mb-2 h-[89vh] overflow-x-hidden overflow-y-hidden">
    <div
      class="h-full w-full rounded-[32px] relative "
      style="
        background-image: url('/images/hero5.jpg');
        background-size: cover;
        background-position: center;
      "
    >
      <div class="
        flex flex-col justify-center items-center text-center
        h-full w-full
        p-4 sm:p-6 md:p-8 lg:hidden
      ">
        <div
          class="text-white font-bold font-anton
         text-5xl
          leading-tight
          mb-4
          transform scale-x-100 scale-y-100
        ">
          <div>ADVENTURE</div>
          <div class="mt-2">BEGINS WITH</div>
          <div class="mt-2">RIGHT GEAR</div>
        </div>

        <div class="mb-4">
          <PrimaryButton
            class="h-[40px] sm:h-[60px] text-lg sm:text-xl  sm:w-48"
            title="EXPLORE ALL"
            backgroundColor="white"
            text_color="#422006"
            fontt="bold"
            icon="/icons/upArrow.svg"
          />
        </div>

        <div class="
          text-base md:text-lg
          text-white font-semibold
          max-w-xs sm:max-w-sm md:max-w-md
          mt-8
        ">
          <span>Range of Accessories, Hunting- Camping Gears,</span><br />
          <span>Tents, Outdoor Clothing, Sleeping Bags etc.</span>
        </div>
      </div>

      <div
        class="hidden lg:block
        p-8 w-full max-w-[800px] text-white font-bold font-anton
        scale-x-150 scale-y-90
        absolute top-12 left-[13rem]
        text-5xl md:text-6xl lg:text-8xl
      ">
        <div>ADVENTURE</div>
        <div class="mt-3">BEGINS WITH</div>
        <div class="mt-3">RIGHT GEAR</div>
      </div>

      <div class="hidden lg:block absolute top-[27rem] left-16">
        <PrimaryButton
          class="h-[70px] text-2xl w-50"
          title="EXPLORE ALL"
          backgroundColor="white"
          text_color="#422006"
          fontt="bold"
          icon="/icons/upArrow.svg"
        />
      </div>

      <div class="hidden lg:block absolute text-xl xl:top-[44rem]  lg:top-[40rem] top-[27rem] left-16 w-full max-w-[800px] text-white font-semibold ">
        <span>Range of Accessories, Hunting- Camping Gears,</span><br />
        <span>Tents, Outdoor Clothing, Sleeping Bags etc.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Assuming PrimaryButton is a global component or imported elsewhere
// import PrimaryButton from './PrimaryButton.vue'; // Uncomment and adjust path if PrimaryButton is a local component
</script>

<style scoped>
/* No specific scoped styles needed as Tailwind handles everything */
</style>