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
    :class="`container lg:pb-32 pb-16 mx-auto flex px-6 lg:px-8 flex-col gap-8 ${
      content ? 'pt-8 max-w-4xl' : 'pt-16 lg:pt-32'
    }`"
  >
    <slot />
  </div>
</template>
