<template>
  <Header />
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,
    'Footer': () => import('@/components/Phrase.vue'),
  }
}
</script>
