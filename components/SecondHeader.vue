<template>
  <div class="grid md:grid-cols-2 grid-cols-1 pt-4 pl-6 hidden md:block">
    <div class="md:flex md:justify-start md:space-x-7 space-x-8">
      <a class="hover:text-black cursor-pointer text-gray-500" @click="openModal('about')">このサイトについて</a>
      <a class="hover:text-black cursor-pointer text-gray-500" @click="openModal('rule')">利用規約</a>
      <a class="hover:text-black cursor-pointer text-gray-500" @click="openModal('policy')">セキュリティポリシー</a>
      <a class="hover:text-black cursor-pointer text-gray-500" target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLScOAq6o51skDe81OniSUANtxsf9nJKnuityLZNvKeURk17vXQ/viewform?usp=sf_link">お問い合わせ</a>
    </div>
    <HeaderModal :name="modalName" />
  </div>
</template>

<script>
  export default {
    name: "SecondHeader",
    data() {
      return {
        modalName: "",
      }
    },
    components: {
      'HeaderModal': () => import('./HeaderModal.vue'),
    },
    methods: {
      openModal(modal) {
        this.modalName = modal
        this.$modal.show(modal);
      },
    }
  }
</script>
