(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddNews~31ecd969"],{"4de4":function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").filter,i=r("1dde"),s=r("ae40"),o=i("filter"),l=s("filter");a({target:"Array",proto:!0,forced:!o||!l},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("ade3");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},7100:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addNew"},[r("h2",[e._v(e._s(e.id?e.$lang.edit_journalism:e.$lang.add_journalism))]),r("el-divider"),r("el-row",{staticClass:"topform_wrap"},[r("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,"label-width":e.labelWidth}},[r("el-form-item",{attrs:{label:e.$lang.journalism_title,prop:"title"}},[r("el-input",{style:{width:"300px"},attrs:{size:"small",placeholder:e.$lang.enter_journalism_title,clearable:""},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),r("el-form-item",{attrs:{label:e.$lang.classify,prop:"parent_id"}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v(" "+e._s(e.$lang.classify)+" "),r("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[r("el-row",[r("el-col",{attrs:{span:24}},[e._v(e._s(e.$lang.add_news_hint))]),r("el-col",{staticClass:"tar",attrs:{span:24}},[r("router-link",{attrs:{to:{path:"news-category"},target:"_blank"}},[r("el-link",{attrs:{type:"primary"}},[e._v(e._s(e.$lang.set_classify))])],1)],1)],1),r("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1),r("el-select",{style:{width:"300px"},attrs:{size:"small",placeholder:e.$lang.please_choose,clearable:""},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}},e._l(e.parent_idOptions[0]?e.parent_idOptions[0].list:[],(function(e,t){return r("el-option",{key:t,attrs:{label:e.title,value:e.id,disabled:e.disabled}})})),1)],1),r("el-form-item",{attrs:{label:e.$lang.whether_to_hide,prop:"hidden",required:""}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.formData.hidden,callback:function(t){e.$set(e.formData,"hidden",t)},expression:"formData.hidden"}})],1),r("el-form-item",{attrs:{label:e.$lang.date_selection,prop:"push_time"}},[r("el-date-picker",{style:{width:"300px"},attrs:{size:"small","value-format":"timestamp",placeholder:e.$lang.select_date_selection,clearable:"",type:"datetime"},model:{value:e.formData.push_time,callback:function(t){e.$set(e.formData,"push_time",t)},expression:"formData.push_time"}})],1),r("el-form-item",{attrs:{label:e.$lang.tag,prop:""}},[r("el-input",{style:{width:"300px"},attrs:{size:"small",placeholder:e.$lang.multi_tag,clearable:""},model:{value:e.formData.label,callback:function(t){e.$set(e.formData,"label",t)},expression:"formData.label"}})],1),r("el-form-item",{attrs:{label:e.$lang.describe,prop:""}},[r("el-input",{style:{width:"300px"},attrs:{size:"small",placeholder:e.$lang.enter_news_describe,clearable:""},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),r("el-form-item",{attrs:{label:e.$lang.contents_article,prop:"push_time"}},[r("el-row",{attrs:{gutter:0}},[r("el-col",{staticStyle:{padding:"0"},attrs:{span:24}},[r("tinymce-editor",{directives:[{name:"loading",rawName:"v-loading",value:e.editoreLoading,expression:"editoreLoading"}],ref:"myQuillEditor",staticStyle:{width:"90%"},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1)],1)],1)],1)],1),r("div",{staticClass:"bottomOperationAdd"},[r("el-button",{attrs:{size:"small",type:"primary",loading:e.btnLoading},on:{click:e.submitForm}},[e._v(e._s(e.$lang.submit))]),r("el-button",{attrs:{size:"small"},on:{click:e.goBack}},[e._v(e._s(e.$lang.get_back))]),r("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v(e._s(e.$lang.reset))])],1)],1)},n=[],i=(r("a4d3"),r("e01a"),r("4de4"),r("a9e3"),r("5530")),s=(r("96cf"),r("1da1")),o=r("94ca2"),l={metaInfo:{title:window.zjmf_cw_lang.edit_journalism},data:function(){return{id:Number(this.$route.query.id),formData:{id:void 0,title:void 0,parent_id:void 0,hidden:!1,push_time:Date.parse(new Date),content:"",label:"",description:""},rules:{title:[{required:!0,message:this.$lang.enter_journalism_title,trigger:"blur"}],parent_id:[{required:!0,message:this.$lang.select_classify_id,trigger:"change"}],push_time:[{required:!0,message:this.$lang.select_date_selection,trigger:"change"}]},parent_idOptions:[{list:[]}],labelWidth:window.document.body.clientWidth>768?"120px":null,btnLoading:!1,editoreLoading:!0}},methods:{submitForm:function(){var e=this;this.id?this.id&&this.$refs.elForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return e.formData.id=e.id,a=Object(i["a"])({},e.formData),e.btnLoading=!0,t.next=7,Object(o["b"])(a);case 7:n=t.sent,s=n.data,200!==s.status?e.$message.error(s.msg):(e.$message.success(s.msg),e.$router.push({name:"newsList"})),e.btnLoading=!1;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.elForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return e.btnLoading=!0,t.next=5,Object(o["b"])(e.formData);case 5:a=t.sent,n=a.data,200!==n.status?e.$message.error(n.msg):(e.$message.success(n.msg),e.$router.push({name:"newsList"})),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetForm:function(){this.$refs.elForm.resetFields(),this.formData.content=""},goBack:function(){this.$router.go(-1)},getCategory:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["g"])();case 2:r=t.sent,a=r.data,200!==a.status?e.$message.error(a.msg):e.parent_idOptions=a.data.filter((function(e){return 1===e.id}));case 5:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=6;break}return t.next=3,Object(o["f"])(e.id);case 3:r=t.sent,a=r.data,200!==a.status?e.$message.error(a.msg):(e.formData.title=a.data.title,e.formData.parent_id=a.data.parent_id,e.formData.push_time=1e3*a.data.push_time,e.formData.content=e.HTMLDecode(a.data.content),e.formData.hidden=a.data.hidden,e.formData.label=a.data.label,e.formData.description=a.data.description);case 6:case"end":return t.stop()}}),t)})))()},HTMLDecode:function(e){var t=document.createElement("div");t.innerHTML=e;var r=t.innerText||t.textContent;return t=null,r}},created:function(){var e=this;this.getCategory(),setTimeout((function(){e.getData()}),500)},mounted:function(){var e=this;setTimeout((function(){e.editoreLoading=!1;for(var t=document.body.getElementsByTagName("iframe")[0],r=t.contentWindow.document,a=r.getElementsByTagName("pre"),n=0;n<a.length;n++)a[n].style.maxWidth="100%",a[n].style.whiteSpace="pre-wrap"}),800)}},c=l,u=r("2877"),d=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=d.exports},8418:function(e,t,r){"use strict";var a=r("c04e"),n=r("9bf2"),i=r("5c6c");e.exports=function(e,t,r){var s=a(t);s in e?n.f(e,s,i(0,r)):e[s]=r}},"94ca2":function(e,t,r){"use strict";r.d(t,"i",(function(){return n})),r.d(t,"h",(function(){return i})),r.d(t,"g",(function(){return s})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"c",(function(){return m}));var a=r("a27e");function n(e,t,r,n,i){return Object(a["a"])({url:"news/list",params:{page:e,limit:t,parent_id:r,orderby:n,sorting:i}})}function i(e){return Object(a["a"])({url:"news/catspage",params:e})}function s(e){return Object(a["a"])({url:"news/catelist",params:e})}function o(e){return Object(a["a"])({url:"news/editcat",method:"post",data:e})}function l(e){return Object(a["a"])({url:"news/cat",method:"delete",params:{id:e}})}function c(e){return Object(a["a"])({url:"news/editcontent",method:"post",data:e})}function u(e){return Object(a["a"])({url:"news/content",params:{id:e}})}function d(e){return Object(a["a"])({url:"news/content",method:"delete",params:{id:e}})}function m(e){return Object(a["a"])({url:"news/checkalias",method:"get",params:e})}},ade3:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},b64b:function(e,t,r){var a=r("23e7"),n=r("7b0b"),i=r("df75"),s=r("d039"),o=s((function(){i(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(e){return i(n(e))}})},dbb4:function(e,t,r){var a=r("23e7"),n=r("83ab"),i=r("56ef"),s=r("fc6a"),o=r("06cf"),l=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,a=s(e),n=o.f,c=i(a),u={},d=0;while(c.length>d)r=n(a,t=c[d++]),void 0!==r&&l(u,t,r);return u}})},e439:function(e,t,r){var a=r("23e7"),n=r("d039"),i=r("fc6a"),s=r("06cf").f,o=r("83ab"),l=n((function(){s(1)})),c=!o||l;a({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(e,t){return s(i(e),t)}})}}]);