(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d441df4","view-QuizDetailSelectCard-vue"],{3989:function(t,i,e){"use strict";var n=e("c0f0"),o=e.n(n);o.a},"446b":function(t,i,e){"use strict";var n=e("672c"),o=e.n(n);o.a},"672c":function(t,i,e){},"8d29":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{attrs:{raised:""}},[e("v-card-title",[t._v("Soal")]),e("v-list-item",[e("v-container",{staticClass:"pt-0"},[e("v-row",{staticClass:"px-2"},t._l(t.gridContents,(function(i,n){return e("v-col",{key:i.id,staticClass:"pa-2",attrs:{cols:"3"}},[e("v-btn",{class:[i.filled?"filled":"normal","pa-0",i.id===t.active?"white--text":""],staticStyle:{"min-width":"0"},attrs:{outlined:!(i.id===t.active),color:i.id===t.active?"#00563D":"",block:""},on:{click:function(e){return t.changeActive(i.id)}}},[t._v(t._s(n+1))])],1)})),1)],1)],1),e("v-card-actions",[e("v-btn",{staticClass:"mx-auto white--text",attrs:{color:"#00563D",block:""}},[t._v("Selesai")])],1)],1)},o=[],a=(e("a9e3"),{props:{gridContents:{type:Array,required:!0},active:{type:Number,required:!0}},methods:{changeActive:function(t){this.$emit("changeActive",t)}}}),s=a,r=(e("446b"),e("2877")),c=e("6544"),d=e.n(c),l=e("8336"),p=e("b0af"),u=e("99d9"),v=e("62ad"),f=e("a523"),m=e("da13"),g=e("0fd9"),C=Object(r["a"])(s,n,o,!1,null,"b752a8c2",null);i["default"]=C.exports;d()(C,{VBtn:l["a"],VCard:p["a"],VCardActions:u["a"],VCardTitle:u["b"],VCol:v["a"],VContainer:f["a"],VListItem:m["a"],VRow:g["a"]})},"9f2b":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{staticClass:"pb-2",attrs:{raised:""}},[e("v-card-title",{staticClass:"mx-auto"},[t._v(t._s(t.title))]),e("v-divider"),e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-content",[t._v("Jumlah Soal")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(t.problemCount))])],1),e("v-list-item",[e("v-list-item-content",[t._v("Sisa Waktu")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(t.timeToFinish))])],1)],1),e("v-card-actions",[e("v-btn",{staticClass:"mx-auto",attrs:{block:"",outlined:"",color:"#00573D"}},[t._v("Lihat Dokumen")])],1)],1)},o=[],a=(e("a9e3"),{props:{title:{type:String,required:!0},problemCount:{type:Number,required:!0},timeToFinish:{type:String,required:!0},policyId:{type:Number,required:!0}}}),s=a,r=e("2877"),c=e("6544"),d=e.n(c),l=e("8336"),p=e("b0af"),u=e("99d9"),v=e("ce7e"),f=e("8860"),m=e("da13"),g=e("5d23"),C=Object(r["a"])(s,n,o,!1,null,"9d88eb0e",null);i["default"]=C.exports;d()(C,{VBtn:l["a"],VCard:p["a"],VCardActions:u["a"],VCardTitle:u["b"],VDivider:v["a"],VList:f["a"],VListItem:m["a"],VListItemContent:g["a"]})},c0f0:function(t,i,e){},e614:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",[e("v-row",[e("v-col",[e("v-row",[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("QuizDetailOverviewCard",{attrs:{title:t.item.name,problemCount:t.item.quizz.question_count,timeToFinish:t.item.quizz.endTime,policyId:t.item.quizz.policy.id}})],1),e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("QuizDetailSelectCard",{attrs:{gridContents:t.gridContents,active:t.active},on:{changeActive:t.changeActive}})],1)],1)],1),e("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[e("v-card",{attrs:{raised:""}},[e("v-container",[e("v-data-iterator",{attrs:{items:t.gridContents,"items-per-page":1,options:t.options,"hide-default-footer":""},on:{"update:options":function(i){t.options=i},pagination:t.updatePagination},scopedSlots:t._u([{key:"default",fn:function(i){return[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e(t.forward?"v-scroll-x-transition":"v-scroll-x-reverse-transition",{tag:"component",attrs:{"leave-absolute":""}},t._l(i.items,(function(i){return e("div",{key:i.id},[e("v-card",{attrs:{raised:""}},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h1",[t._v(t._s(i.id))]),e("p",[t._v(t._s(i.description))])])],1),t._l(i.options,(function(i,n){return e("v-row",{key:n,attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-btn",{staticClass:"mx-auto text-none text-left",attrs:{outlined:!i.correct,color:"primary",block:""}},[t._v(t._s(i.name))])],1)],1)}))],2)],1),e("v-card",{staticClass:"mt-4",attrs:{raised:""}},[e("v-card-title",[t._v("Penjelasan")]),e("p",{staticClass:"pa-3"},[t._v(' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ')])],1)],1)})),0)],1)],1)]}},{key:"header",fn:function(){return[e("v-data-footer",{attrs:{pagination:t.pagination,options:t.options,"disable-items-per-page":""},on:{"update:pagination":function(i){t.pagination=i},"update:options":function(i){t.options=i}},scopedSlots:t._u([{key:"page-text",fn:function(i){return[t._v(t._s(i.pageStart)+" of "+t._s(i.itemsLength))]}}])})]},proxy:!0},{key:"footer",fn:function(){return[e("v-data-footer",{attrs:{pagination:t.pagination,options:t.options,"disable-items-per-page":""},on:{"update:pagination":function(i){t.pagination=i},"update:options":function(i){t.options=i}},scopedSlots:t._u([{key:"page-text",fn:function(i){return[t._v(t._s(i.pageStart)+" of "+t._s(i.itemsLength))]}}])})]},proxy:!0}])})],1)],1)],1)],1)],1)},o=[],a=(e("7db0"),e("9f2b")),s=e("8d29"),r=e("0789"),c="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi ut   aliquip ex ea commodo consequat.",d=[{name:"Option A",correct:!1},{name:"Option B",correct:!0,reason:c},{name:"Option C",correct:!1},{name:"Option D",correct:!1}],l={components:{QuizDetailOverviewCard:a["default"],QuizDetailSelectCard:s["default"],VScrollXTransition:r["e"],VScrollXReverseTransition:r["d"]},props:{item:{type:Object,default:function(){return{name:"Kebijakan Dana Keuangan",quizz:{question_count:20,endTime:"19:30",policy:{id:1}}}}}},data:function(){return{pagination:{page:1,itemsPerPage:1,pageStart:1},options:{page:1,itemsPerPage:1},gridContents:[{id:1,description:c,options:d,filled:!0},{id:2,description:c,options:d,filled:!0},{id:3,description:c,options:d,filled:!0},{id:4,description:c,options:d,filled:!0},{id:5,description:c,options:d,filled:!0},{id:6,description:c,options:d,filled:!0},{id:7,description:c,options:d,filled:!0},{id:8,description:c,options:d,filled:!0},{id:9,description:c,options:d,filled:!0},{id:10,description:c,options:d,filled:!0},{id:11,description:c,options:d,filled:!0},{id:12,description:c,options:d,filled:!0},{id:13,description:c,options:d,filled:!0},{id:14,description:c,options:d,filled:!0},{id:15,description:c,options:d,filled:!0},{id:16,description:c,options:d,filled:!0},{id:17,description:c,options:d,filled:!0},{id:18,description:c,options:d,filled:!0},{id:19,description:c,options:d,filled:!0},{id:20,description:c,options:d,filled:!0},{id:21,description:c,options:d,filled:!0}],forward:!0}},computed:{activeProblem:function(){var t=this;return this.gridContents.find((function(i){return i.id===t.active}))},active:function(){return this.pagination.page}},watch:{pagination:function(t,i){i.page<=t.page?this.forward=!0:this.forward=!1}},methods:{updatePagination:function(t){this.pagination=t},changeActive:function(t){var i=this;this.forward=!!(this.pagination.page<=t),this.$nextTick().then((function(){i.pagination.page=t,i.options.page=t}))}}},p=l,u=(e("3989"),e("2877")),v=e("6544"),f=e.n(v),m=e("8336"),g=e("b0af"),C=e("99d9"),b=e("62ad"),_=e("a523"),h=e("f41f"),w=e("c377"),V=e("0fd9"),y=Object(u["a"])(p,n,o,!1,null,null,null);i["default"]=y.exports;f()(y,{VBtn:m["a"],VCard:g["a"],VCardTitle:C["b"],VCol:b["a"],VContainer:_["a"],VDataFooter:h["a"],VDataIterator:w["a"],VRow:V["a"]})}}]);
//# sourceMappingURL=chunk-6d441df4.4daaf6c8.js.map