<template>
  <div class="h-auto  px-4 md:px-8 py-8">
    <div class="flex  items-center justify-between gap-4">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img class="h-12" src="/icons/logo.svg" alt="Logo" />
        <div class="text-2xl md:text-4xl text-yellow-950 font-extrabold">WILDMARK</div>
      </div>

      <!-- Navigation -->
      <div class="lg:flex hidden justify-center gap-4 md:gap-8 text-sm md:text-[21px] font-semibold text-black">
        <a href="#" class="hover:underline hover:underline-offset-4">CLOTHING</a>
        <a href="#" class="hover:underline hover:underline-offset-4">CAMPING</a>
        <a href="#" class="hover:underline hover:underline-offset-4">OUTDOOR GEARS</a>
        <a href="#" class="hover:underline hover:underline-offset-4">ACCESSORIES</a>
        <a href="#" class="hover:underline hover:underline-offset-4">HUNTING</a>
      </div>

      <!-- Search / Cart / Button -->
      <div class="flex items-center gap-4 md:gap-7">
        <img class="h-6 md:h-12 hover:bg-slate-100 hover:cursor-pointer rounded p-1" src="/icons/search.svg" alt="">
        <img class="h-6 md:h-12 hover:bg-slate-100 hover:cursor-pointer rounded p-1" src="/icons/cart.svg" alt="">

        <PrimaryButton
          class="h-10  md:h-16  w-24 md:w-44   text-sm md:text-xl"
          backgroundColor="#FD6A3C"
          title="Shop Now"
          text_color="white"
          fontt="bold"
        />
      </div>
    </div>
  </div>
</template>
