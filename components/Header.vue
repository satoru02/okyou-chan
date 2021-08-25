<template>
  <div class="header">
    <div class="cursor-pointer pt-3">
      <span class="logo" @click="movePath()">
        打ち込み写経
      </span>
      <div class="flex space-x-8 text-sm pt-3 text-gray-500" v-if="this.$route.path === '/'">
        <a class="hover:text-black" @click="openModal('about')">このサイトについて</a>
        <a class="hover:text-black" @click="openModal('rule')">利用規約</a>
        <a class="hover:text-black" @click="openModal('policy')">セキュリティポリシー</a>
        <a class="hover:text-black">お問い合わせ</a>
        <a class="menu-bar pt-4">
          <BaseIcon icon-name="icon-menu-mark" :viewBox="'0 0 512 512'" :iconColor="'#111111'" :height="'25'"
            :width="'25'">
            <MenuIcon />
          </BaseIcon>
        </a>
      </div>
      <HeaderModal :name="modalName" />
    </div>
  </div>
</template>

<script>
  import BaseIcon from '../components/svg/BaseIcon.vue';
  import MenuIcon from '../components/svg/MenuIcon.vue';

  export default {
    name: "Header",
    data() {
      return {
        modalName: ""
      }
    },
    components: {
      BaseIcon,
      MenuIcon,
      'HeaderModal': () => import('./HeaderModal.vue'),
    },
    methods: {
      movePath(){
        this.$router.replace(`/`)
      },
      openModal(modal){
         this.modalName = modal
         this.$modal.show(modal);
      }
    }
  }

</script>

<style lang="postcss">
  .header {
    padding-left: 20px;
  }

  .header .logo {
    font-size: 23px;
  }

  .menu-bar {
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
