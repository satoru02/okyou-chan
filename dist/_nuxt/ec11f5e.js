(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{296:function(n,t,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(40).default)("5fa3e6ba",content,!0,{sourceMap:!1})},298:function(n,t,e){"use strict";e(296)},299:function(n,t,e){var r=e(39)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\ninput{\n  width:100%;\n  display:inline-block;\n  border:.5px solid #111;\n  border-radius:4px;\n  box-sizing:border-box\n}\n.display-meaning-enter-active{\n  transition:all 1s ease\n}\n.display-meaning-leave-active{\n  transition:all .2s cubic-bezier(1,.5,.8,1)\n}\n.display-meaning-enter,.display-meaning-leave-to{\n  transform:translateX(10px);\n  opacity:0\n}\ni{\n  margin-left:0\n}\n.meaning{\n  -ms-writing-mode:tb-rl;\n      writing-mode:vertical-rl;\n  max-height:70%;\n  font-size:24px;\n  padding-top:58px;\n  padding-left:30px;\n  position:absolute\n}\n.meaning.h3{\n  padding-left:250px\n}\n.output_section{\n  -ms-writing-mode:tb-rl;\n      writing-mode:vertical-rl\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},310:function(n,t,e){"use strict";e.r(t);e(41);var r={name:"inputMantra",props:{mantras:{type:Array,required:!0},value:{type:String,required:!0,default:""}},data:function(){return{meaning:""}},methods:{checkTyping:function(n){this.mantras.filter((function(t){return n===t.title||n===t.pronounce})).length>1&&(this.meaning="妙法蓮華経に帰依します。妙法蓮華経に帰依します。妙法蓮華経に")},reinput:function(){this.meaning=""}}},l=(e(298),e(19)),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("div",{staticClass:"flex flex-col"},[e("div",[e("input",n._b({attrs:{placeholder:"お経をなぞる"},domProps:{value:n.value},on:{input:function(t){n.$emit("input",t.target.value),n.reinput()},keyup:function(t){if(!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter"))return null;n.$emit("store-typing",n.value),n.checkTyping(n.value)}}},"input",n.$attrs,!1))]),n._v(" "),e("div",{staticClass:"grid justify-end pt-4"},[e("p",{staticClass:"output_section text-xl text-gray-700"},[n._v("このお経の意味は・・")]),n._v(" "),e("transition",{attrs:{name:"display-meaning"}},[""!=n.meaning?e("div",{staticClass:"meaning"},[e("h3",[n._v(n._s(this.meaning))])]):n._e()])],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);