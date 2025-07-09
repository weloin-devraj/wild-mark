<template>
  <div class="h-auto  px-4 md:px-8 py-10">
    <div class="flex  items-center justify-between gap-4">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img class="h-12" src="/icons/logo.svg" alt="Logo" />
        <div class="text-2xl md:text-5xl text-yellow-950 font-extrabold">WILDMARK</div>
      </div>

      <!-- Navigation -->
      <div class="lg:flex hidden justify-center gap-4 md:gap-8 text-sm md:text-xl font-semibold text-black">
        <a href="#" class="hover:underline">CLOTHING</a>
        <a href="#" class="hover:underline">CAMPING</a>
        <a href="#" class="hover:underline">OUTDOOR GEARS</a>
        <a href="#" class="hover:underline">ACCESSORIES</a>
        <a href="#" class="hover:underline">HUNTING</a>
      </div>

      <!-- Search / Cart / Button -->
      <div class="flex items-center gap-4 md:gap-7">
        <img class="h-6 md:h-8 hover:bg-slate-100 hover:cursor-pointer rounded p-1" src="/icons/search.svg" alt="">
        <img class="h-6 md:h-8 hover:bg-slate-100 hover:cursor-pointer rounded p-1" src="/icons/cart.svg" alt="">

        <PrimaryButton
          class="h-10  md:h-12 w-24 md:w-32 text-sm md:text-base"
          backgroundColor="#FD6A3C"
          title="Shop Now"
          text_color="white"
          fontt="bold"
        />
      </div>
    </div>
  </div>
</template>
