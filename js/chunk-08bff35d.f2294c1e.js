(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08bff35d","view-QuizDetailCard-vue","view-QuizHistory-vue","view-QuizPolicy-vue","view-QuizPolicyListCard-vue"],{"0359":function(t,e,a){},"0ba2":function(t,e,a){},"17a6":function(t,e,a){},"1c21":function(t,e,a){},"1dff":function(t,e,a){"use strict";var i=a("690a"),n=a.n(i);n.a},"1f4f":function(t,e,a){"use strict";a("a4d3"),a("4de4"),a("4160"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("159b");var i=a("ade3"),n=(a("8b37"),a("80d2")),o=a("7560"),s=a("58df");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(s["a"])(o["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return c({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},2480:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{class:[t.selected?"selected":"normal"],attrs:{fluid:""},on:{click:t.handleClick}},[a("v-row",{staticClass:"d-flex",attrs:{dense:""}},[a("v-col",[a("v-row",{attrs:{fluid:"",dense:""}},[a("v-col",[a("h2",[t._v(t._s(t.title))])])],1),a("v-row",{attrs:{fluid:"",dense:""}},[a("v-col",{staticClass:"card-section-left-bottom"},[a("v-icon",[t._v("mdi-document-outline")]),t._v(" Skor: "+t._s(t.score)+" ")],1)],1)],1),a("v-col",{staticClass:"d-flex flex-align-center",attrs:{cols:"2"}},[a("v-chip",{staticClass:"align-self-center",staticStyle:{color:"white","min-width":"75px"},attrs:{color:"#3ea48f"}},[t._v(t._s(t.status))])],1)],1)],1)},n=[],o=(a("a9e3"),{props:{title:String,score:String,status:String,selectedCard:String,id:Number},computed:{selected:function(){return this.title===this.selectedCard}},methods:{handleClick:function(){this.$emit("cardSelect",this.title)}}}),s=o,r=(a("295a"),a("2877")),c=a("6544"),l=a.n(c),u=a("cc20"),d=a("62ad"),f=a("a523"),p=a("132d"),v=a("0fd9"),m=Object(r["a"])(s,i,n,!1,null,"e5c32e2a",null);e["default"]=m.exports;l()(m,{VChip:u["a"],VCol:d["a"],VContainer:f["a"],VIcon:p["a"],VRow:v["a"]})},"295a":function(t,e,a){"use strict";var i=a("3636"),n=a.n(i);n.a},"2a29":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"#f1f1f1",flat:"",tile:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"quiz-history-list"},[a("v-container",[a("v-row",[a("v-data-iterator",{attrs:{items:t.quizList,options:t.options,"hide-default-footer":""},on:{"update:options":function(e){t.options=e},pagination:t.updatePagination},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.items,(function(e){return a("v-col",{key:e.title,attrs:{cols:"12"}},[a("v-card",{key:e.title,staticStyle:{"border-radius":"15px"},attrs:{raised:""}},[a("QuizHistoryListCard",{attrs:{title:e.name,score:e.score?e.score:"0",status:e.status,selectedCard:t.selectedCard?t.selectedCard.name:"",id:e.id},on:{cardSelect:t.cardSelect}})],1)],1)}))}},{key:"header",fn:function(){return[a("v-data-footer",{attrs:{pagination:t.pagination,options:t.options},on:{"update:pagination":function(e){t.pagination=e},"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"page-text",fn:function(){return[t._v(t._s(t.options.page)+" of "+t._s(t.numberOfPages))]},proxy:!0}])})]},proxy:!0},{key:"footer",fn:function(){return[a("v-data-footer",{attrs:{pagination:t.pagination,options:t.options},on:{"update:pagination":function(e){t.pagination=e},"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"page-text",fn:function(){return[t._v(t._s(t.options.page)+" of "+t._s(t.numberOfPages))]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1),a("v-col",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticStyle:{"border-radius":"15px","padding-left":"0.5em"},attrs:{raised:""}},[t.selectedCard?a("QuizDetailCard",{attrs:{item:t.selectedCard,type:"quizHistory"}}):t._e()],1)],1)],1)],1)],1)],1)],1)],1)},n=[],o=(a("7db0"),a("b0c0"),a("cfc6")),s=a("2480"),r=a("3b5e"),c={components:{QuizDetailCard:o["default"],QuizHistoryListCard:s["default"]},methods:{cardSelect:function(t){var e=!!this.selectedCard&&!(this.selectedCard.name!==t);this.selectedCard=e?null:this.quizList.find((function(e){return e.name===t}))},loadUserQuizz:function(){var t=this;r["a"].quizzHistory(this.options.page).then((function(e){t.quizList=e.data,t.totalItems=e.total,t.pagination.itemsLength=e.total}))},updatePagination:function(t){this.pagination=t}},watch:{options:{handler:function(){this.loadUserQuizz()}}},computed:{numberOfPages:function(){return Math.ceil(this.pagination.itemsLength/this.pagination.itemsPerPage)}},data:function(){return{selectedCard:null,quizList:[],totalItems:0,pagination:{page:1,itemsPerPage:10,pageStart:1,itemsLength:0,pageCount:1,pageStop:10},options:{page:1,itemsPerPage:10}}},mounted:function(){this.loadUserQuizz()}},l=c,u=(a("e124"),a("2877")),d=a("6544"),f=a.n(d),p=a("b0af"),v=a("62ad"),m=a("a523"),h=a("f41f"),g=a("c377"),b=a("0fd9"),_=Object(u["a"])(l,i,n,!1,null,"fbf41e42",null);e["default"]=_.exports;f()(_,{VCard:p["a"],VCol:v["a"],VContainer:m["a"],VDataFooter:h["a"],VDataIterator:g["a"],VRow:b["a"]})},"2e44":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{staticClass:"elevation-3",attrs:{id:"quiz-tab","background-color":"#f1f1f1"}},[a("v-tabs-slider"),a("v-tab",{key:"policy",staticClass:"text-none",attrs:{href:"#tab-policy"}},[t._v("Kuis Ketentuan")]),a("v-tab-item",{key:"policy",attrs:{value:"tab-policy"}},[a("QuizPolicy")],1),a("v-tab",{key:"history",staticClass:"text-none",attrs:{href:"#tab-history"}},[t._v("Histori Kuis")]),a("v-tab-item",{key:"history",attrs:{value:"tab-history"}},[a("QuizHistory")],1)],1)},n=[],o=a("7ad6"),s=a("2a29"),r={components:{QuizPolicy:o["default"],QuizHistory:s["default"]}},c=r,l=(a("7c59"),a("3702"),a("2877")),u=a("6544"),d=a.n(u),f=a("71a3"),p=a("c671"),v=a("fe57"),m=a("9a96"),h=Object(l["a"])(c,i,n,!1,null,"71e012e4",null);e["default"]=h.exports;d()(h,{VTab:f["a"],VTabItem:p["a"],VTabs:v["a"],VTabsSlider:m["a"]})},3636:function(t,e,a){},3702:function(t,e,a){"use strict";var i=a("dcd1"),n=a.n(i);n.a},"66ef":function(t,e,a){t.exports=a.p+"img/arrow_link_right_63px.2e88f1fd.svg"},"690a":function(t,e,a){},7245:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{class:[t.selected?"selected":"normal"],attrs:{fluid:""},on:{click:t.handleClick}},[i("v-row",{staticClass:"d-flex",attrs:{dense:""}},[i("v-col",[i("v-row",{attrs:{fluid:"",dense:""}},[i("v-col",[i("h2",[t._v(t._s(t.title))])])],1),i("v-row",{attrs:{fluid:"",dense:""}},[i("v-col",{staticClass:"card-section-left-bottom"},[i("v-icon",[t._v("mdi-calendar-range")]),t._v(" Berakhir dalam: "+t._s(t.endTimeString)+" ")],1),i("v-col",{staticClass:"card-section-left-bottom"},[i("v-icon",[t._v("mdi-clock-outline")]),t._v(" Waktu Pengerjaan: "+t._s(t.workingTime)+" menit ")],1)],1)],1),i("v-col",{staticClass:"d-flex flex-align-center",attrs:{cols:"2"}},[i("img",{staticClass:"align-self-center card-link",attrs:{src:a("66ef"),alt:""}})])],1)],1)},n=[],o=(a("a9e3"),a("f817")),s={moment:o["a"],props:{title:String,endTime:String,workingTime:Number,selectedCard:String,id:Number},computed:{selected:function(){return this.title===this.selectedCard},endTimeString:function(){var t=Object(o["a"])(),e=Object(o["a"])(this.endTime),a=o["a"].duration(e.diff(t));return a.months()>0?"".concat(a.months()," bulan"):a.days()>0?"".concat(a.days()," hari"):a.hours()>0?"".concat(a.hours()," jam"):"".concat(a.minutes()," menit")}},methods:{handleClick:function(){this.$emit("cardSelect",this.title,1)}}},r=s,c=(a("afc6"),a("2877")),l=a("6544"),u=a.n(l),d=a("62ad"),f=a("a523"),p=a("132d"),v=a("0fd9"),m=Object(c["a"])(r,i,n,!1,null,"257d0a55",null);e["default"]=m.exports;u()(m,{VCol:d["a"],VContainer:f["a"],VIcon:p["a"],VRow:v["a"]})},"7ad6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"#f1f1f1",flat:"",tile:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"quiz-policy-list"},[a("v-container",[a("v-row",[a("v-data-iterator",{attrs:{items:t.quizList,options:t.options,"hide-default-footer":""},on:{"update:options":function(e){t.options=e},pagination:t.updatePagination},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.items,(function(e){return a("v-col",{key:e.title,attrs:{cols:"12"}},[a("v-card",{key:e.title,staticStyle:{"border-radius":"15px"},attrs:{raised:""}},[a("QuizPolicyListCard",{attrs:{title:e.name,endTime:e.end_date?e.end_date:"Belum ada waktu akhir",workingTime:e.duration?e.duration:"Belum ada workingTime",selectedCard:t.selectedCard?t.selectedCard.name:"",id:e.id},on:{cardSelect:t.cardSelect}})],1)],1)}))}},{key:"header",fn:function(){return[a("v-data-footer",{attrs:{pagination:t.pagination,options:t.options},on:{"update:pagination":function(e){t.pagination=e},"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"page-text",fn:function(){return[t._v(t._s(t.options.page)+" of "+t._s(t.numberOfPages))]},proxy:!0}])})]},proxy:!0},{key:"footer",fn:function(){return[a("v-data-footer",{attrs:{pagination:t.pagination,options:t.options},on:{"update:pagination":function(e){t.pagination=e},"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"page-text",fn:function(){return[t._v(t._s(t.options.page)+" of "+t._s(t.numberOfPages))]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1),a("v-col",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticStyle:{"border-radius":"15px","padding-left":"0.5em"},attrs:{raised:""}},[t.selectedCard?a("QuizDetailCard",{attrs:{item:t.selectedCard,type:"quizPolicy"}}):t._e()],1)],1)],1)],1)],1)],1)],1)],1)},n=[],o=(a("7db0"),a("b0c0"),a("cfc6")),s=a("7245"),r=a("3b5e"),c={components:{QuizDetailCard:o["default"],QuizPolicyListCard:s["default"]},methods:{cardSelect:function(t){var e=!!this.selectedCard&&!(this.selectedCard.name!==t);this.selectedCard=e?null:this.quizList.find((function(e){return e.name===t}))},loadQuizz:function(){var t=this;r["a"].quizzAll(this.options.page).then((function(e){t.quizList=e.data,t.totalItems=e.total,t.pagination.itemsLength=e.total}))},updatePagination:function(t){this.pagination=t}},computed:{numberOfPages:function(){return Math.ceil(this.pagination.itemsLength/this.pagination.itemsPerPage)}},data:function(){return{selectedCard:null,quizList:[],pagination:{page:1,itemsPerPage:10,pageStart:1},options:{page:1,itemsPerPage:10},totalItems:0}},watch:{options:{handler:function(){this.loadQuizz()}}},mounted:function(){this.loadQuizz()}},l=c,u=(a("97fc"),a("1dff"),a("2877")),d=a("6544"),f=a.n(d),p=a("b0af"),v=a("62ad"),m=a("a523"),h=a("f41f"),g=a("c377"),b=a("0fd9"),_=Object(u["a"])(l,i,n,!1,null,"64dc2b82",null);e["default"]=_.exports;f()(_,{VCard:p["a"],VCol:v["a"],VContainer:m["a"],VDataFooter:h["a"],VDataIterator:g["a"],VRow:b["a"]})},"7c59":function(t,e,a){"use strict";var i=a("1c21"),n=a.n(i);n.a},"850c":function(t,e,a){"use strict";var i=a("dd5a"),n=a.n(i);n.a},"8b37":function(t,e,a){},"97fc":function(t,e,a){"use strict";var i=a("17a6"),n=a.n(i);n.a},afc6:function(t,e,a){"use strict";var i=a("0ba2"),n=a.n(i);n.a},cfc6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("h1",[t._v(t._s(t.item.name))])]),a("v-col",{staticStyle:{color:"#666"},attrs:{cols:"12"}},[a("p",[t._v(t._s(t.item.overview))])]),a("v-col",{attrs:{cols:"12"}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{attrs:{width:"30%"}},[a("v-icon",[t._v("mdi-file-outline")]),t._v("Tipe Soal ")],1),a("td",[t._v(t._s(t.item.problem_type||"Pilihan Ganda"))])]),a("tr",[a("td",[a("v-icon",[t._v("mdi-format-list-numbered")]),t._v("Jumlah Soal ")],1),a("td",[t._v(t._s(t.item.quizz.question_count)+" Soal")])]),a("tr",[a("td",[a("v-icon",[t._v("mdi-clock-outline")]),t._v("Durasi Pengerjaan ")],1),a("td",[t._v(t._s(t.item.quizz.duration))])]),a("tr",[a("td",[t._v("Cakupan Materi")]),a("td",[t._v(t._s(t.item.quizz.policy.name))])]),a("tr",[a("td",[t._v("KKM")]),a("td",[t._v(t._s(t.item.quizz.passing_grade))])])])]},proxy:!0}])})],1),a("v-col",{staticClass:"bottom-section",attrs:{cols:"12"}},[a("div",{staticClass:"score-panel"},[a("p",{staticClass:"score-panel-title"},[t._v("Skor")]),a("h1",{staticClass:"score-panel-score"},[t._v(t._s(t.item.score?t.item.score:"-"))])]),"quizPolicy"===t.type?a("div",[a("router-link",{attrs:{to:{name:"quiz-detail",props:{item:t.item}}}},[a("v-btn",{staticClass:"quiz-button",attrs:{outlined:"","x-large":"",color:"#00573D"}},[t._v("Kerjakan")])],1)],1):t._e(),"quizHistory"===t.type?a("div",[a("router-link",{attrs:{to:{name:"quiz-solution",props:{item:t.item}}}},[a("v-btn",{staticClass:"quiz-button-top white--text",attrs:{"x-large":"",color:"#00573D"}},[t._v("Lihat Solusi")])],1),a("router-link",{attrs:{to:{name:"quiz-detail",props:{item:t.item}}}},[a("v-btn",{staticClass:"quiz-button",attrs:{outlined:"","x-large":"",color:"#00573D"}},[t._v("Kerjakan Lagi")])],1)],1):t._e()])],1)],1)},n=[],o=(a("c975"),{props:{item:{type:Object,required:!0},type:{type:String,required:!0,validator:function(t){return-1!==["quizPolicy","quizHistory"].indexOf(t)}}}}),s=o,r=(a("850c"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("62ad"),f=a("a523"),p=a("132d"),v=a("0fd9"),m=a("1f4f"),h=Object(r["a"])(s,i,n,!1,null,"0ffecbda",null);e["default"]=h.exports;l()(h,{VBtn:u["a"],VCol:d["a"],VContainer:f["a"],VIcon:p["a"],VRow:v["a"],VSimpleTable:m["a"]})},dcd1:function(t,e,a){},dd5a:function(t,e,a){},e124:function(t,e,a){"use strict";var i=a("0359"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-08bff35d.f2294c1e.js.map