<template>
    <div class="row">
    <div class="column">
        <div class="txt">
          <div class="phrase_section" v-for="(t,index) in 150" :key="index">
            <ruby>なむみょうほうれんげきょう<p>南無妙法蓮華経</p></ruby>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
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
    padding: 10px;
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

  .meaning {
    writing-mode: vertical-rl;
    font-size: 20px;
    padding-left: 180px;
    position: absolute;
  }

  .meaning.h3 {
    padding-left: 250px;
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

  .display-meaning-enter-active {
    transition: all 3s ease;
  }

  .display-meaning-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .display-meaning-enter,
  .display-meaning-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  i {
    margin-left: -30;
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