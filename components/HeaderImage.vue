<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtImg
    :src="`/images/${image}`"
    class="w-full h-52 lg:h-72 object-center object-cover shadow rounded-sm"
    :alt="alt"
  />
</template>
