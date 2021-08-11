<template>
  <div class="phrase">
    <ruby>{{ pronounce }}<p>{{ name }}</p></ruby>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    typing: {
      type: String,
    },
    pronounce: {
      type: String,
    },
    store: {
      type: Array,
    },
  },
}
</script>