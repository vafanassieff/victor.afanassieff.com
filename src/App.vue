<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="text-6xl">Victor AFANASSIEFF</h1>
    <div class="flex flex-row">
      <a href="https://github.com/vafanassieff" target="_blank" rel="noopener">
        <FontAwesome :icon="['fab', 'github']" class="logo" />
      </a>
      <a href="https://gitlab.com/vafanass" target="_blank" rel="noopener">
        <FontAwesome :icon="['fab', 'gitlab']" class="logo" />
      </a>
      <a href="https://twitter.com/afalol" target="_blank" rel="noopener">
        <FontAwesome :icon="['fab', 'twitter']" class="logo" />
      </a>
      <a href="mailto:victor@afanassieff.com">
        <FontAwesome icon="envelope" class="logo" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.logo {
  @apply text-4xl mx-4;
  @apply hover:text-blue-500;
}
</style>
