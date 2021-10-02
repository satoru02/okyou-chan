import Vue from 'vue'

var mixin = {
  data() {
    return {
      sutras: [{
          "name": "般若心経",
          "meaning": "般若経典の核心を説いた仏典"
        },
        {
          "name": "如来従量品第十六",
          "meaning": "大乗仏教の初期経典"
        },
        {
          "name": "仏説阿弥陀経",
          "meaning": "大乗仏教の代表的な経典"
        },
        {
          "name": "方便品第二",
          "meaning": "大乗仏教の代表的な経典"
        },
        {
          "name": "陀羅尼品第二十六",
          "meaning": "大乗仏教の代表的な経典"
        },
        {
          "name": "法師功徳品第十九",
          "meaning": "般若経典の核心を説いた仏典"
        },
        {
          "name": "常不軽菩薩品第二十",
          "meaning": "法華経菩薩の仏典"
        },
        {
          "name": "妙荘厳王本事品第二十七",
          "meaning": "大乗仏教の経典"
        }
      ]
    }
  }
}

Vue.mixin(mixin)