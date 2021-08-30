<template>
  <section>
    <SecondHeader />

    <div class="grid grid-cols-3">
      <div class="pt-64 flex justify-start pl-6">
        <div class="cursor-pointer hover:text-black text-2xl text-gray-600" @click="plusSlide(-1)">
          前
        </div>
      </div>
      <div class="flex justify-center items-center pt-10">
        <div @click="movePath(sutra)" class="txt slides text-black cursor-pointer hover:text-lg" v-for="(sutra, index) in sutras" :key="index">
          {{ sutra["name"] }} <span class="text-gray-600">・・・ お経の意味を下に書く</span>
        </div>
      </div>
      <div class="pt-64 flex justify-end pr-6">
        <div class="cursor-pointer hover:text-black text-2xl text-gray-600" @click="plusSlide(+1)">
          次
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 absolute inset-x-0 bottom-0">
      <div class="hidden md:block text-base pt-2 md:pl-6 text-gray-600 flex justify-center md:justify-start">
        ©2021 打ち込み写経
      </div>
      <ul class="pagination flex justify-center mb-6 md:mb-0">
        <li v-for="(n,index) in this.sutras.length" :key="index">
          <a href="#">
            <span :style="changeColor(n)"></span>
          </a>
        </li>
      </ul>
      <ul class="sns-link flex flex-row-reverse md:pr-3 flex justify-center md:justify-start">
        <li class="px-3">
          <a target="_blank" :href="`https://twitter.com/intent/tweet?&text=お経ちゃん - 心を鎮める写経アプリ&hashtags=お経ちゃん&url=https://okyou-chan.com`">
            <BaseIcon class="cursor-pointer" icon-name="icon-theater-mark" :viewBox="'0 0 112.197 112.197'" :height="'40'" :width="'40'">
              <Twitter />
            </BaseIcon>
          </a>
        </li>
        <li class="px-3">
          <a target="_blank" :href="'https://www.facebook.com/sharer.php?u=https://okyou-chan.com&t=お経ちゃん'">
            <BaseIcon class="cursor-pointer" icon-name="icon-theater-mark" :viewBox="'0 0 112.196 112.196'" :height="'40'" :width="'40'">
              <Facebook />
            </BaseIcon>
          </a>
        </li>
        <li class="px-3">
          <a target="_blank" :href="''">
            <BaseIcon class="cursor-pointer" icon-name="icon-theater-mark" :viewBox="'0 0 512 512'" :height="'40'" :width="'40'">
              <LineIcon />
            </BaseIcon>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import SecondHeader from '@/components/SecondHeader.vue'
  import BaseIcon from '@/components/svg/BaseIcon.vue'
  import Twitter from '@/components/svg/Twitter.vue'
  import Facebook from '@/components/svg/Facebook.vue'
  import LineIcon from '@/components/svg/Line.vue'
  import anime from 'animejs';

  export default {
    components: {
      SecondHeader,
      BaseIcon,
      Twitter,
      Facebook,
      LineIcon
    },
    data() {
      return {
        slideIndex: 1,
        uniqueKey: 0,
      }
    },
    mounted() {
      this.showSlide(this.slideIndex)
      this.animateText()
    },
    methods: {
      animateText() {
        var textWrapper = document.querySelector('.selection');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({
            loop: true
          })
          .add({
            targets: '.selection .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 100 * i
          }).add({
            targets: '.selection',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1200
          });
      },
      plusSlide(n) {
        this.showSlide(this.slideIndex += n)
      },
      showSlide(n) {
        var textWrapper = document.querySelector('.selection');
        if (textWrapper != null) {
          textWrapper.classList.remove("selection")
        }

        var i;
        var x = document.getElementsByClassName("slides");

        if (n > x.length) {
          this.slideIndex = 1
        } else if (n < 1) {
          this.slideIndex = x.length
        };

        for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none"
        };

        x[this.slideIndex - 1].style.display = "block"
        x[this.slideIndex - 1].classList.add("selection")
        this.animateText()
      },
      changeColor(slideNumber) {
        if (slideNumber === this.slideIndex) {
          return {
            backgroundColor: '#000000',
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      movePath(sutra) {
        this.$router.push(`/sutras/${sutra["name"]}`)
      }
    }
  }
</script>

<style lang="postcss">
  .txt {
    height: auto;
    font-size: 26px;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }

  .pagination span {
    display: block;
    width: 15px;
    height: 15px;
    background-color: #111;
    border-radius: 100%;
    opacity: 0.2;
    pointer-events: none;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }

  li {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  .pagination a {
    display: block;
    opacity: 0.6;
    padding: 15px 7px;
  }

  .sns-link li:hover {
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
