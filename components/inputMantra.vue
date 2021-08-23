<template>
  <section>
    <input v-bind="$attrs" v-bind:value="value" v-on:input="$emit('input', $event.target.value), reinput()"
      placeholder="お経をなぞる" v-on:keyup.enter="$emit('store-typing', value), checkTyping(value)">
    <div class="output_section">
      <p>このお経の意味は・・</p>
      <transition name="display-meaning">
        <div v-if="meaning != ''" class="meaning">
          <h3>{{ this.meaning }}</h3>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'inputMantra',
    props: {
      mantras: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        required: true,
        default: '',
      },
    },
    data() {
      return {
        meaning: ''
      }
    },
    methods: {
      checkTyping: function (mantra) {
        let output = this.mantras.filter(aMantra => ((mantra === aMantra.title) || (mantra === aMantra.pronounce)))
        if (output.length > 1) {
          this.meaning = "妙法蓮華経に帰依します。妙法蓮華経に帰依します。妙法蓮華経に"
        }
      },
      reinput() {
        this.meaning = ''
      }
    },
  }

</script>

<style lang="postcss">
  input {
    width: 88%;
    padding: 5px 10px;
    display: inline-block;
    border: 0.5px solid #111;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .display-meaning-enter-active {
    transition: all 1s ease;
  }

  .display-meaning-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .display-meaning-enter,
  .display-meaning-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  i {
    margin-left: 0;
  }

  .meaning {
    writing-mode: vertical-rl;
    max-height: 70%;
    font-size: 24px;
    padding-top: 58px;
    padding-left: 30px;
    position: absolute;
  }

  .meaning.h3 {
    padding-left: 250px;
  }

</style>
