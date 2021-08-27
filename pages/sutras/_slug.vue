<template>
  <section>
    <Header class="-mt-2" />
    <hr class="mt-1" />
    <div class="grid md:grid-cols-8 pt-6">
      <div class="flex col-span-4">
        <div class="mantra-column">
          <paginate name="mantras" :list="mantras" :per="perCount">
            <div class="mantra">
              <mantra v-for="(mantra, index) in paginated('mantras')" :key="index" :name="mantra.name"
                :pronounce="mantra.pronounce" :typing="typing" :store="typedMantras" />
            </div>
          </paginate>
        </div>
        <footer>
          <paginate-links class="cursor-pointer" for="mantras" :show-step-links="true" />
        </footer>
      </div>
      <div class="flex col-span-2 pl-12 hidden md:block">
        <input-mantra v-model="typing" :mantras="mantras" v-on:store-typing="storeTyping"></input-mantra>
      </div>
      <div class="flex flex-col col-span-2 justify-start p-16">
        <div class="grid grid-cols-2 mb-3">
          <div class="tag-badge">
        　  日蓮宗
           </div>
        </div>
        <span class="text-3xl">{{this.$nuxt.$route.params.slug}}</span>
        <div class="pt-3">
          【始めに】この感想文は、私の文章力向上の目的で作成しております。この文章を読んだ方は、　感の映画　であり、夏の風物詩として有名ですね。　
        </div>
        <div class="grid grid-cols-2 mt-4 gap-2">
          <div class="twitter-badge mt-4">
            twitter
          </div>
          <div class="facebook-badge mt-4">
            facebook
          </div>
        </div>
        <div class="share-badge mt-4">
          URLでシェア
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

  export default {
    components: {
      Header,
      'Mantra': () => import('@/components/Mantra.vue'),
      'inputMantra': () => import('@/components/inputMantra.vue')
    },
    components: {
      BaseIcon,
      Twitter,
      Facebook,
      LineIcon
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
      }
    }
  }

</script>

<style lang="postcss">
  .header-txt {
    height: auto;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }

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

  .mantra_section {
    font-size: 17px;
    transition-property: font-size;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
  }

  .mantra_section:hover {
    font-size: 20px;
  }

  .type-input {
    outline: none;
    border-radius: 15px;
    height: 30px;
    border: 1px solid #e3e3e3;
    padding: 0 15px 0 15px;
  }

  .tag-badge {
    @apply inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-black;
    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .twitter-badge {
    @apply inline-block bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-white;
    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .facebook-badge {
    @apply inline-block bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white;
    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }

  .share-badge {
    @apply inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-white;
    &:hover {
      @apply bg-indigo-600 text-white;
    }
  }
</style>
