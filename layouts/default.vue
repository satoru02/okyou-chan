<template>
  <div id=app class="top">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="postcss">
  .top {
    font-family: "YakuHanMP_Noto", "Noto Serif JP", serif;
  }
</style>