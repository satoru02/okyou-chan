<template>
  <div class="row">
    <!-- <Header /> -->
    <button id="prev" class="prev-drawer text-3xl" v-on:click="plusSlide(-1)">前</button>
    <div class="column">
      <div class="txt">
        <div class="mySlides pt-16 text-black cursor-pointer hover:text-lg" v-for="(sect, index) in sects" :key="index">
          {{ sect }} <span class="text-gray-600">・・・　お経の意味を下に書く</span>
        </div>
      </div>
    </div>
     <button id="next" class="next-drawer text-3xl" v-on:click="plusSlide(+1)">次</button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data(){
    return{
      sects: ['般若心経','方便品','自我夏','南無妙法蓮華経','妙法蓮華経','般若心経','方便品','自我夏','南無妙法蓮華経','妙法蓮華経'],
      slideIndex: 1,
    }
  },
  mounted(){
    this.showSlide(this.slideIndex)
  },
  methods: {
    plusSlide(n){
      this.showSlide(this.slideIndex += n)
    },
    showSlide(n){
      var i;
      var x = document.getElementsByClassName("mySlides");

      if(n > x.length) {
        this.slideIndex = 1
      } else if (n < 1) {
        this.slideIndex = x.length
      };

      for(let i = 0; i < x.length; i++){
        x[i].style.display = "none"
      };

      x[this.slideIndex-1].style.display = "block"
    }
  }
}
</script>

<style lang="postcss">
  .column {
    /* float: left; */
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

  .txt::before {
    content: '';
    position: sticky;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to left, rgba(0, 0, 0, .2) 1px, transparent 0),
      linear-gradient(to bottom, rgba(0, 0, 0, .2) 1px, transparent 0),
      linear-gradient(to left, transparent 11px, rgba(0, 0, 0, .2) 12px, transparent 0);
    background-size: 2em 1.5em;
    background-position: top right;
    background-origin: padding-box;
    margin-right: -5px;
    z-index: -1;
  }

  .txt::after {
    content: '';
    display: block;
    clear: both;
  }

  .txt p {
    margin: 0;
    margin-top: 0em;
    font-size: 17px;
    margin-right: 10;
  }

  .txt ruby {
    ruby-align: left;
    font-size: 1px;
  }

  .txt ruby>rt {
    font-size: 10px;
    letter-spacing: 0;
    text-align: justify;
    line-height: 1em;
    transform: translateX(.8em);
    margin-left: .8em;
  }

  #prev {
    left: 10px;
  }

  .prev-drawer {
    position: absolute;
    top: 0;
    bottom: 70px;
    width: 28px;
    height: 70px;
    margin: auto 0;
    z-index: 1000;
    cursor: pointer;
    padding: 20px 10px;
    -webkit-transition: all 0.25s ease-in-out 0s;
    transition: all 0.25s ease-in-out 0s;
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
    z-index: 1000;
    cursor: pointer;
    padding: 20px 10px;
    -webkit-transition: all 0.25s ease-in-out 0s;
    transition: all 0.25s ease-in-out 0s;
  }
</style>
