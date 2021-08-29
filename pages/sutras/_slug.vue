<template>
  <section>
    <Header class="-mt-2" />
    <hr class="mt-1" />
    <div class="grid md:grid-cols-8 pt-6">

      <div class="flex col-span-4">
        <div class="mantra-column hidden md:block">
          <paginate name="mantras" :list="mantras" :per="perCount">
            <div class="mantra">
              <mantra v-for="(mantra, index) in paginated('mantras')" :key="index" :name="mantra.name"
                :pronounce="mantra.pronounce" :typing="typing" :store="typedMantras" />
            </div>
          </paginate>
        </div>
        <footer class="hidden md:block">
          <paginate-links class="cursor-pointer" for="mantras" :show-step-links="true" />
        </footer>
      </div>

      <div class="flex col-span-2 pl-12 hidden md:block">
        <input-mantra v-model="typing" :mantras="mantras" v-on:store-typing="storeTyping"></input-mantra>
      </div>

      <div class="flex flex-col col-span-2 justify-start px-10">
        <div class="mb-4">
          <button class="tag-badge">
            日蓮宗
          </button>
        </div>
        <span class="text-xl font-semibold md:text-3xl">{{this.$nuxt.$route.params.slug}}</span>
        <div class="pt-3 text-sm md:text-base">
          『般若波羅蜜多心経』（はんにゃはらみったしんぎょう、梵: Prajñā-pāramitā-hṛdaya、
          プラジュニャーパーラミター・フリダヤ）は、大乗仏教に分類される般若経典群の思想の核心を簡潔に説いた仏典[1]。『般若心経』（はんにゃしんぎょう）は略称[1]。
          仏教の全経典の中でも最も短いもののひとつ[1]。古くから日本の在家信者に愛唱される経典であり[2]、複数の宗派において読誦経典の一つとして広く用いられている。
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button class="cursor-pointer twitter-badge mt-4"
            @click="share(`https://twitter.com/intent/tweet?&text=お経ちゃん - 心を鎮める写経アプリ&hashtags=お経ちゃん&url=https://okyou-chan.com`)">
            <client-only>
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
            </client-only>
            ツイート
          </button>
          <button class="cursor-pointer facebook-badge mt-4"
            @click="share(`https://www.facebook.com/sharer.php?u=https://okyou-chan.com&t=お経ちゃん`)">
            <client-only>
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
            </client-only>
            シェア
          </button>
        </div>
        <button class="cursor-pointer share-badge mt-4 mb-4" @click="share()">
          <client-only>
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'share' }" style="font-size: 15px" />
          </client-only>
          URLでシェア
        </button>
      </div>

      <div v-if="this.windowWidth < 594"
        class="rounded-3xl flex col-span-4 grid grid-cols-4 h-full pt-8 pl-28 bg-gray-100">
        <div class="flex col-span-2 mobile-meaning text-base">
          心経』（はんにゃはらみったしんぎょう、梵: Prajñā-pāramitā-hṛdaya、
          プラジュニャーパーラミター・フリダヤ）は、大乗仏教に分類される般若経典群の思想の核心を簡潔に説いた仏典[1]。『般若心経』（はんにゃしんぎょう）は略称[1]。
          仏教の全経典の中でも最も短いもののひとつ[1]。古
        </div>
        <div class="flex col-span-1 mobile-mantra-column flex justify-end">
          <paginate name="mantras" :list="mantras" :per="perCount">
            <div class="mobile-mantra">
              <mantra v-for="(mantra, index) in paginated('mantras')" :key="index" :name="mantra.name"
                :pronounce="mantra.pronounce" :typing="typing" :store="typedMantras" />
            </div>
          </paginate>
        </div>
        <div class="flex col-span-1">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import BaseIcon from '@/components/svg/BaseIcon.vue'
  import Twitter from '@/components/svg/Twitter.vue'
  import Facebook from '@/components/svg/Facebook.vue'
  import LineIcon from '@/components/svg/Line.vue'
  import {
    useWindowSize
  } from 'vue-window-size';

  export default {
    components: {
      'Mantra': () => import('@/components/Mantra.vue'),
      'inputMantra': () => import('@/components/InputMantra.vue'),
      Header,
      BaseIcon,
      Twitter,
      Facebook,
      LineIcon,
    },
    setup() {
      const {
        width,
        height
      } = useWindowSize();
      return {
        windowWidth: width,
        windowHeight: height,
      };
    },
    data() {
      return {
        endpoint: process.env.API_GATEWAY,
        mantras: [],
        paginate: ['mantras'],
        perCount: 52,
        typedMantras: [],
        typing: '',
      }
    },
    mounted() {
      this.getSutras()
    },
    watch: {
      windowWidth() {
        if (this.windowWidth < 594) {
          this.perCount = 1
        } else {
          this.perCount = 52
        }
      }
    },
    methods: {
      async getSutras() {
        let config = {
          headers: {
            authorizationToken: "allow"
          }
        }
        await this.$axios.get(this.endpoint + `${this.$nuxt.$route.params.slug}`, config)
          .then(res => this.fetchSuccessful(res))
          .catch(err => console.log(err))
      },
      fetchSuccessful(res) {
        this.mantras = res.data.mantras
      },
      storeTyping(value) {
        if (value !== '') {
          this.typedMantras.push(value)
          this.typing = ''
        } else {
          return false
        }
      },
      share(link) {
        window.open(
          link,
          '_blank'
        );
      },
    }
  }

</script>

<style lang="postcss">
  .mantra-column {
    float: left;
    width: 100%;
    padding: 5px;
    word-wrap: break-word;
  }

  .mantra {
    width: 100%;
    height: auto;
    letter-spacing: .1em;
    line-height: 1.5em;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    columns: 10px 1;
  }

  .mantra::before {
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

  .mantra::after {
    content: '';
    display: block;
    clear: both;
  }

  .mantra p {
    margin: 0;
    margin-top: 0em;
    font-size: 11px;
    margin-right: -1;
    font-size: 17px;
    margin-right: -10;
  }

  .mantra ruby {
    ruby-align: left;
    font-size: 1px;
  }

  .mantra ruby>rt {
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

  .paginate-links.mantras {
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

  .type-input {
    outline: none;
    border-radius: 15px;
    height: 30px;
    border: 1px solid #e3e3e3;
    padding: 0 15px 0 15px;
  }

  .tag-badge {
    @apply inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white;
    font-family: "Roboto", "Arial", "sans-serif";

    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .twitter-badge {
    @apply inline-block rounded-md px-3 py-1 text-sm font-semibold text-white;
    background-color: #1d9bf0;
    font-family: "Roboto", "Arial", "sans-serif";

    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .facebook-badge {
    @apply inline-block bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white;
    font-family: "Roboto", "Arial", "sans-serif";

    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .share-badge {
    @apply inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-600;
    font-family: "Roboto", "Arial", "sans-serif";

    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .mobile-mantra-column {
    width: 100%;
    word-wrap: break-word;
  }

  .mobile-mantra {
    width: 100%;
    height: 330px;
    letter-spacing: .1em;
    line-height: 1.5em;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    word-wrap: break-word;
  }

  .mobile-meaning {
    width: 100%;
    height: 300px;
    letter-spacing: .1em;
    line-height: 1.5em;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    word-wrap: break-word;
  }

  .mobile-mantra p {
    margin: 0;
    margin-top: 0em;
    margin-right: -1;
    font-size: 27px;
    margin-right: -10;
  }

  .mobile-mantra ruby>rt {
    font-size: 10px;
    letter-spacing: 0;
    text-align: justify;
    line-height: 1em;
    transform: translateX(.8em);
    margin-left: .8em;
  }

</style>
