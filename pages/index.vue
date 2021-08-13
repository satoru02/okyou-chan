<template>
  <div class="row">
    <!-- <Header /> -->
    <div class="column">
      <div class="txt">
        <div class="px-6 pt-24 text-black cursor-pointer hover:text-lg" v-for="(sect, index) in asects" :key="index">
          {{ sect }} <span class="text-gray-600">・・・　お経の意味を下に書く</span>
        </div>
      </div>
    </div>
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
      asects: ['般若心経']

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
    font-size: 23px;
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
</style>
