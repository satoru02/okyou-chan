<template>
  <div>
    <input v-bind="$attrs" v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)" placeholder="お経をなぞる" v-on:keyup.enter="$emit('store-typing', value)"
      autocomplete="off">

    <div class="output_section">
      <p>このお経の意味は・・</p>
      <transition name="display-meaning">
        <div v-show="checkTyping(value)" class="meaning">
          <h3>{{ this.meaning }}</h3>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inputPhrase',
    props: {
      phrases: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        meaning: ''
      }
    },
    methods: {
      checkTyping: function (phrase) {
        for (let i = 0; i < this.phrases.length; i++) {
          if (phrase === this.phrases[i].pronounce || phrase === this.phrases[i].name) {
            this.meaning = this.phrases[i].meaning
            return true;
          } else {
            return false
          }
        }
      },
    },
  }

</script>

<style lang="postcss">
  input {
    width: 88%;
    padding: 5px 10px;
    /* margin: -20px 0; */
    display: inline-block;
    border: 0.5px solid #111;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>
