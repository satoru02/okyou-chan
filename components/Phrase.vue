<template>
  <div class="font-bold" v-bind="$attrs" v-bind:style="{ color: tweenedCSSColor, transform: tweenedTransform }">
    <ruby>{{ pronounce }}<p>{{ name }}</p></ruby>
  </div>
</template>

<script>
  var TWEEN = require('@tweenjs/tween.js');
  var Color = require('color');

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
    data() {
      return {
        color: Color.rgb(125, 125, 125).object(),
        tweenedColor: {},
        scale: {
          x: 1,
          y: 1
        },
        checkSize: ''
      }
    },
    created: function () {
      this.tweenedColor = Object.assign({}, this.color)
    },
    watch: {
      typing: function () {
        this.changeColor()
      },
      color: function () {
        function animate() {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }
        var TweenA = new TWEEN.Tween(this.tweenedColor)
          .to(this.color, 650)
        var TweenB = new TWEEN.Tween(this.scale)
          .to({
            x: 1,
            y: 1
          }, 750)
          .chain(TweenA)
          .start()
        animate(TweenB)
      }
    },
    computed: {
      tweenedCSSColor: function () {
        return Color(this.tweenedColor).hex()
      },
      tweenedTransform: function () {
        return `scale(${this.scale.x}, ${this.scale.y})`
      }
    },
    methods: {
      changeColor: function () {
        if (this.typing === this.pronounce) {
          this.color = Color.rgb(255, 87, 51).object()
        } else if (this.store.includes(this.pronounce)) {
          this.color = Color.rgb(0, 0, 0).object(),
          this.checkSize = 'done'
        }
      }
    }
  }
</script>
