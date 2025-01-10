<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="bg-white shadow rounded-sm hover:shadow-2xl transition-all duration-200 ease-in-out hover:scale-105"
  >
    <NuxtLink
      :to="link"
      class="h-full flex flex-col justify-between text-center"
      :target="blank ? '_blank' : '_self'"
    >
      <NuxtImg
        :src="`/images/${image}`"
        class="aspect-[4/3] w-full object-center object-cover rounded-t-sm"
        :alt="alt"
      />
      <div class="h-full flex justify-center items-center">
        <h2 class="p-8 text-lg"><slot /></h2>
      </div>
    </NuxtLink>
  </div>
</template>
