import Vue from 'vue'

var mixin = {
  data() {
    return {
      sutras: [{
          "name": "般若心経"
        },
        {
          "name": "妙法蓮華経方便品第二"
        },
        {
          "name": "妙法蓮華経如来従量品第三"
        },
        {
          "name": "般若心経"
        },
        {
          "name": "般若心経"
        },
        {
          "name": "般若心経"
        },
        {
          "name": "般若心経"
        },
        {
          "name": "般若心経"
        }
      ]
    }
  }
}

Vue.mixin(mixin)