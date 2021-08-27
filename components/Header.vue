<template>
  <div class="grid grid-cols-2 pt-4">
    <div class="flex justify-start pl-6 text-black text-2xl">
      <span class="cursor-pointer" @click="movePath()">
        お経ちゃん
      </span>
    </div>
    <div class="flex justify-end pr-6">
      <BaseIcon icon-name="icon-menu-mark" :viewBox="'0 0 512 512'" :iconColor="'#111111'" :height="'25'"
        :width="'25'">
        <MenuIcon />
      </BaseIcon>
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
      MenuIcon,
    },
    methods: {
      movePath(){
        this.$router.replace(`/`)
      }
    }
  }
</script>
