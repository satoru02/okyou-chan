<template>
  <div class="header">
    <div class="cursor-pointer pt-3">
      <span @click="movePath()" class="logo">打ち込み写経
      </span>
      <div class="flex space-x-8 text-sm pt-3" v-if="this.$route.path === '/'">
        <a class="text-gray-500">このサイトについて</a>
        <a class="text-gray-500">利用規約</a>
        <a class="text-gray-500">セキュリティポリシー</a>
        <a class="text-gray-500">お問い合わせ</a>
        <a class="sns-logo pt-4">
        <BaseIcon icon-name="icon-menu-mark" :viewBox="'0 0 512 512'" :iconColor="'#111111'" :height="'25'"
          :width="'25'">
          <MenuIcon />
        </BaseIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseIcon from '../components/svg/BaseIcon.vue';
  import MenuIcon from '../components/svg/MenuIcon.vue';

  export default {
    name: "Header",
    components: {
      BaseIcon,
      MenuIcon
    },
    methods: {
      movePath() {
        this.$router.replace(`/`)
      }
    }
  }

</script>

<style lang="postcss">
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "YakuHanMP_Noto", "Noto Serif JP", serif;
  }

  .header {
    overflow: hidden;
    /* padding: 10px 10px; */
    padding-left: 20px;
  }

  .header .logo {
    font-size: 23px;
    /* font-weight: bold; */
  }

  .sns-logo {
    position: absolute;
    line-height: 60px;
    right: 25px;
    top: 0;
    height: 60px;
    z-index: 100;
  }

  .header-right {
    float: right;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }

    .header-right {
      float: none;
    }
  }

</style>
