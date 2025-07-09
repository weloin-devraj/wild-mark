<template>
  <div class="bg-red-500 min-h-screen flex flex-col lg:flex-row overflow-x-hidden">
    <div class="left bg-[#015036] p-6 sm:p-10 md:p-16 lg:p-24 w-full lg:w-[60%] flex-shrink-0">
      <div class="sec1 flex items-center flex-wrap">
        <div class="flex h-20 w-20 flex-shrink-0">
          <img
            class="rounded-full outline outline-[#015036] outline-4"
            src="/images/roboOrange.webp"
            alt=""
          />
          <img
            class="rounded-full outline outline-[#015036] outline-4 -ml-3"
            src="/images/roboYello.avif"
            alt=""
          />

          <img
            class="rounded-full outline outline-[#015036] outline-4 -ml-3"
            src="/images/roboOrange.webp"
            alt=""
          />
        </div>
        <div class="ml-4 sm:ml-10 md:ml-20 lg:ml-40 flex-grow">
          <h1 class="text-white text-lg sm:text-xl font-semibold">
            Planning adventures with insights <br />
            from overnight
          </h1>
        </div>
      </div>

      <div class="ml-0 sm:ml-4 md:ml-8 lg:ml-9 relative mt-8">
        <h1
          class="font-anton tracking-widest font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white
          scale-y-75 scale-x-100 lg:scale-x-110
          "
        >
          ADVENTURE <br />
          FOR <span class="text-[#E6FF80]">LIFE</span>
        </h1>
        <span
          class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-orange-700 font-bold font-cedarville mt-5
          ml-4 absolute bottom-1  right-52           -rotate-6
          "
          >Wildlife</span
        >
      </div>

      <div>
        <div class="flex justify-between items-start mt-10 sm:mt-16 md:mt-20 flex-wrap">
          <h1 class="text-lg sm:text-xl md:text-2xl font-bold -ml-0 sm:-ml-2 md:-ml-4 lg:-ml-6 scale-x-100 lg:scale-x-90 text-white flex-shrink-0">
            Weather Gear, Clothing, Tents, Mats, <br />
            Sleeping Bags
          </h1>
          <div class="w-full sm:w-auto flex justify-start sm:justify-end gap-4 mt-4 sm:mt-0">
            <button
              class="outline outline-slate-300 outline-1 hover:outline-2 hover:cursor-default rounded-full p-3 m-[4px]"
            >
              <img src="/icons/leftPointer.svg" alt="" />
            </button>
            <button
              class="outline outline-slate-300 outline-1 hover:outline-2 hover:cursor-default rounded-full p-3 m-[4px]"
            >
              <img src="/icons/rightPointer.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-14 mt-9">
        <div class="flex-1 min-w-0">
          <img
            class="w-full h-[180px] sm:h-[200px] md:h-[250px] object-cover rounded-xl shadow-sm"
            src="/images/fieldPic1.jpg"
            alt=""
          />

          <div class="flex items-center mt-2">
            <span class="text-xl sm:text-2xl text-[#EADE49] font-bold w-auto">Adventures Gears</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="ml-auto"
            >
              <path
                fill="#EADE49"
                d="M12.525 18.025q-.5.325-1.012.038T11 17.175V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.475.3.475.85t-.475.85z"
              />
            </svg>
          </div>
        </div>
        <div class="flex-1 min-w-0">
          <img
            class="w-full h-[180px] sm:h-[200px] md:h-[250px] object-cover rounded-xl shadow-sm"
            src="/images/fieldPic2.jpg"
            alt=""
          />

          <div class="flex items-center mt-2">
            <h1 class="text-xl sm:text-2xl text-[#EADE49] font-bold">Travel Gears</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="ml-auto"
            >
              <path
                fill="#EADE49"
                d="M12.525 18.025q-.5.325-1.012.038T11 17.175V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.475.3.475.85t-.475.85z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class="right w-full lg:w-[40%] h-64 lg:h-auto"
      style="
        background-image: url('/images/fieldMan.avif');
        background-size: cover;
        background-position: center;
      "
    ></div>
  </div>
</template>