<template>
  <div class="row">
    <div class="column">
      <paginate name="phrases" :list="phrases" :per="perCount">
        <div class="txt mt-5">
          <phrase v-for="(phrase, index) in paginated('phrases')" :key="index" :name="phrase.title" :pronounce="phrase.pronounce" />
        </div>
      </paginate>
    </div>
    <footer>
      <paginate-links class="cursor-pointer" for="phrases" :show-step-links="true" />
    </footer>
    <div class="column2"></div>
    <div class="column3 mt-20">
      <input-phrase v-model="typing" :phrases="phrases" v-on:store-typing="storeTyping"></input-phrase>
    </div>
    <div class="column4 mt-28">
      <span class="txt" style="font-size: 30px;">妙法蓮華経方便品第十六</span>
    </div>
  </div>
</template>

<script>
  const getTestPhrases = () => import('@/static/testPhrase.json').then(j => j.default || j);

  export default {
    components: {
      'Phrase': () => import('@/components/Phrase.vue'),
      'inputPhrase': () => import('@/components/inputPhrase.vue')
    },
    data() {
      return {
        phrases: ['南無妙法蓮華経', '南無妙法蓮華経', '妙法蓮華教', '妙法蓮華教'],
        paginate: ['phrases'],
        perCount: 52,
        typedPhrases: [],
        typing: '',
      }
    },
    async asyncData({
      req
    }) {
      const testJson = await getTestPhrases()
      return {
        testJson
      }
    },
    mounted(){
      this.phrases = this.testJson
    },
    methods: {
      storeTyping(value) {
        if (value !== '') {
          this.typedPhrases.push(value)
          this.typing = ''
        } else {
          return false
        }
      },
    }
  }

</script>

<style lang="postcss">
  #app {
    min-height: 100vh;
    position: relative;
  }

  body {
    background-color: rgb(255, 255, 255);
    font-family: "ヒラギノ明朝 ProN W3", "HiraMinProN-W3", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
  }

  * {
    box-sizing: border-box;
  }

  .column {
    float: left;
    width: 50%;
    padding: 5px;
    word-wrap: break-word;
  }
/* 
  .column2 {
    float: left;
    width: 20%;
    padding: 0px;
    word-wrap: break-word;
  } */

  .column3 {
    float: left;
    width: 35%;
    padding-left: 100px;
    word-wrap: break-word;
  }

  .column4 {
    float: left;
    width: 5%;
    padding-left: 30px;
    word-wrap: break-word;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .row {
    margin-top: -5px;
  }

  .txt {
    width: 100%;
    height: auto;
    font-size: 17px;
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
    margin-right: -10;
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

  .typing {
    width: 100%;
    padding-top: 65px;
    padding-left: 170px;
    height: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  ul.paginate-links.li {
    writing-mode: horizontal-tb;
  }

  .paginate-links.phrases {
    user-select: none;

    a {
      cursor: pointer;
      color: rgb(32, 29, 27);
    }

    li.active a {
      font-weight: bold;
    }

    li.next:before {
      content: ' | ';
      margin-right: 13px;
      color: #ddd;
    }

    li.disabled a {
      color: #ccc;
      cursor: no-drop;
    }
  }

  .phrase_section {
    font-size: 17px;
    transition-property: font-size;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
  }

  .phrase_section:hover {
    font-size: 20px;
  }

  .type-input {
    outline: none;
    border-radius: 15px;
    height: 30px;
    border: 1px solid #e3e3e3;
    padding: 0 15px 0 15px;
  }

  .output_section {
    writing-mode: vertical-rl;
    padding-left: 330px;
    padding-top: 53px;
  }

  .output_section p {
    font-size: 17px;
    padding-left: 15;
  }

</style>
