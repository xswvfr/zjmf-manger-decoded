(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generalSettings~1afc0759"],{"650d":function(e,t,n){"use strict";var s=n("f9d1"),a=n.n(s);a.a},ba24:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"generalset"},["finance"!==e.$route.name?n("h2",[e._v(" "+e._s(e.title)+" "),"class"===e.$route.name?n("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[n("span",[e._v(e._s(e.$lang.general_settings_tips))]),n("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1):e._e(),n("router-view")],1)},a=[],i=(n("b0c0"),{metaInfo:function(){return{title:this.title}},data:function(){return{isXscreen:window.document.body.clientWidth>768,activeIndex:"common",route:{common:"/general-settings/general",local:"/general-settings/local",recharge:"/general-settings/recharge",login:"/general-settings/login-setting",finance:"/general-settings/finance",class:"/general-settings/class",api:"/general-settings/source-api",captcha:"/general-settings/captcha"}}},methods:{handleClick:function(e){this.activeIndex=e.name,sessionStorage.setItem("navIndex",e.name),this.$router.push({path:this.route[e.name]})}},created:function(){this.activeIndex=sessionStorage.getItem("navIndex")?sessionStorage.getItem("navIndex"):"common"},computed:{title:function(){return"general"===this.$route.name?this.$lang.general_settings:"local"===this.$route.name?this.$lang.localization:"recharge"===this.$route.name?this.$lang.recharge:"login"===this.$route.name?this.$lang.register_and_login:"finance"===this.$route.name?this.$lang.finance:"sourceApi"===this.$route.name?"API":"class"===this.$route.name?this.$lang.product_classification:"captcha"===this.$route.name?this.$lang.verification_code_setting:"OrderGoods"===this.$route.name?this.$lang.order_goods:this.$lang.general_settings}}}),r=i,o=(n("650d"),n("2877")),c=Object(o["a"])(r,s,a,!1,null,"5b9c07d0",null);t["default"]=c.exports},f9d1:function(e,t,n){}}]);