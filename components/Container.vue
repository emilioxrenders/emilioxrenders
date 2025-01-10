<script setup lang="ts">
defineProps({
  content: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="`container lg:pb-32 pb-16 mx-auto flex px-10 flex-col gap-10 ${
      content ? 'pt-10 max-w-screen-lg' : 'pt-16 lg:pt-32'
    }`"
  >
    <slot />
  </div>
</template>
