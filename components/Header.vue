<template>
  <div class="grid grid-cols-2 pt-1">
    <div class="flex justify-start pl-6 text-black text-2xl">
      <span class="cursor-pointer" @click="movePath()">
        お経ちゃん
      </span>
    </div>

    <ul class="menu flex justify-end mt-1">
      <li class="grid grid-cols-1"
       @click="dropMenu = true"
       @mouseover="dropMenu = true"
       @mouseleave="dropMenu = false">
        <a class="flex justify-end">
          <BaseIcon class="cursor-pointer" icon-name="icon-menu-mark" :viewBox="'0 0 512 512'" :iconColor="'#111111'" :height="'25'"
            :width="'25'">
            <MenuIcon />
          </BaseIcon></a>
        <transition name="fade" class="rounded">
          <ul v-if="dropMenu" @click="dropMenu = false">
            <li v-for="(menu, index) in this.sutras" :key="index">
              <a @click="sutraPage(menu.name)" class="cursor-pointer">
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </transition>
      </li>
    </ul>

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
    data() {
      return {
        dropMenu: false
      }
    },
    methods: {
      movePath() {
        this.$router.replace(`/`)
      },
      sutraPage(sutra) {
        this.$router.push(`/sutras/${sutra}`)
      }
    }
  }

</script>

<style lang="postcss">
  .menu {
    font: 14px/1.5 'Open Sans', sans-serif;
    font-weight: 600;
    margin-right: 24px;
    padding: 0;
    list-style: none;
  }

   .menu li ul li a {
    display: block;
    padding: 20px;
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .menu li {
    display: block;
    float: left;
    position: relative;
    background: rgb(255, 255, 255);
    color: #fff;
    min-width: 180px;
  }

  .menu li ul {
    position: absolute;
    left: 0;
    top: 25px;
    margin: 0;
    padding: 0;
  }

  .menu li ul li {
    background: rgb(0, 0, 0);
    transition: background .2s;
  }

  .menu li ul li:hover {
    background: rgb(185, 185, 185);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

</style>
