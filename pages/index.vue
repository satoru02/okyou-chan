<template>
  <section>
    <Header />
    <button id="prev" class="prev-drawer text-2xl text-gray-600" @click="plusSlide(-1)">前</button>
    <div class="column">
      <div class="txt">
        <div @click="movePath(sutra)" class="slides -mt-5 text-black cursor-pointer hover:text-lg" v-for="(sutra, index) in sutras" :key="index">
          {{ sutra["name"] }} <span class="text-gray-600">・・・ お経の意味を下に書く</span>
        </div>
      </div>
    </div>
    <button id="next" class="next-drawer text-2xl text-gray-600" @click="plusSlide(+1)">次</button>
    <div class="profile-link text-sm text-gray-600">Copyright ©2021 打ち込み写経</div>
    <ul class="pagination">
      <li v-for="(n,index) in this.sutras.length" :key="index">
        <a href="#">
          <span :style="changeColor(n)"></span>
        </a>
      </li>
    </ul>
    <div class="sns-link text-sm text-gray-600">
      <ul>
        <li>
          <BaseIcon icon-name="icon-theater-mark" :viewBox="'0 0 112.197 112.197'" :height="'40'" :width="'40'">
            <Twitter />
          </BaseIcon>
        </li>
        <li>
          <BaseIcon icon-name="icon-theater-mark" :viewBox="'0 0 112.196 112.196'" :height="'40'" :width="'40'">
            <Facebook />
          </BaseIcon>
        </li>
        <li>
          <BaseIcon icon-name="icon-theater-mark" :viewBox="'0 0 512 512'" :height="'40'" :width="'40'">
            <LineIcon />
          </BaseIcon>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import BaseIcon from '@/components/svg/BaseIcon.vue'
  import Twitter from '@/components/svg/Twitter.vue'
  import Facebook from '@/components/svg/Facebook.vue'
  import LineIcon from '@/components/svg/Line.vue'
  import anime from 'animejs';

  const getSutras = () => import('../static/sutras.json').then(j => j.default || j);

  export default {
    components: {
      Header,
      Footer,
      BaseIcon,
      Twitter,
      Facebook,
      LineIcon
    },
    async asyncData({req}){
      const sutras = await getSutras()
      return {
        sutras
      }
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
  .column {
    width: 50%;
    padding: 10px;
    word-wrap: break-word;
  }

  .txt {
    width: 100%;
    height: auto;
    font-size: 26px;
    color: #333;
    position: relative;
    letter-spacing: .1em;
    line-height: 1.5em;
    padding-top: 53px;
    padding-bottom: 5%;
    margin-right: -30px;
    float: right;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    columns: 10px 1;
  }

  #prev {
    left: 10px;
  }

  .prev-drawer {
    position: absolute;
    top: 0;
    bottom: 70px;
    width: 38px;
    height: 70px;
    margin: auto 0;
    cursor: pointer;
    padding: 20px 10px;
  }

  #next {
    right: 10px;
  }

  .next-drawer {
    position: absolute;
    top: 0;
    bottom: 70px;
    width: 51px;
    height: 70px;
    margin: auto 0;
    cursor: pointer;
    padding: 20px 10px;
  }

  .pagination {
    width: 100%;
    bottom: 7px;
    left: 0;
    right: 0;
    padding: 0;
    margin: auto;
    position: absolute;
    height: 60px;
    text-align: center;
  }

  ul {
    width: 100%;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
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

  .profile-link {
    position: absolute;
    left: 15px;
    bottom: 7px;
    height: 45px;
    background-size: 50px 50px;
  }

  .sns-link {
    position: absolute;
    right: 5px;
    bottom: 10px;
    height: 75px;
    padding-right: 25px;
    background-size: 50px 50px;
  }

  .sns-link li {
    padding-left: 35px;
  }

</style>
