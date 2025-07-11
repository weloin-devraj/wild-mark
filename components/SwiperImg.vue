<template>
  <div class="flex-1 min-w-0">
    <img
      class="w-auto h-[180px] sm:h-[200px] md:h-[250px] object-cover rounded-xl shadow-lg"
      :src="image_url"
      alt=""
    />

    <div class="items-center justify-end mt-5">
      <button
        class="text-xl  text-[#EADE49] font-bold flex uppercase gap-32"
      >
        {{ title ? title : "send props"
        }}<svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="  "
        >
          <path
            fill="#EADE49"
            d="M12.525 18.025q-.5.325-1.012.038T11 17.175V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.475.3.475.85t-.475.85z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  image_url?: string;
}>();
</script>
