(function(t){function e(e){for(var s,o,n=e[0],c=e[1],l=e[2],d=0,_=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&_.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(_.length)_.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={problem:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var p=c;r.push([5,"chunk-vendors","chunk-common"]),a()})({5:function(t,e,a){t.exports=a("a867")},"50df":function(t,e,a){"use strict";var s=a("7a3a"),i=a.n(s);i.a},"6f5f":function(t,e,a){"use strict";(function(t){a("c975"),a("d81d");var s=a("ff6f"),i=a("2cd5"),r=a("2c4b"),o=a("54a1"),n=a("b311"),c=a.n(n);e["a"]={components:{Loadings:o["a"],Footers:r["a"],navbar:s["a"]},name:"problem",data:function(){return{page_belong:"problemset",page_setting:{access_token:"",refresh_token:"",language:"",pid:0,is_login:!1},problem:"",copy:{id:"",ing:!1,type:""},info_color:""}},methods:{format_time:function(t){return i["a"].format_time(t)},handleCopy:function(t,e,a,s){i["a"].handleClipboard(t,e),this.copy.id=a,this.copy.type=s,this.copy.ing=!0;var r=this;setTimeout((function(){r.copy.ing=!1}),500)},test:function(){alert(this.$refs.sample0)},copyLink:function(t){console.log(1);var e=new c.a(".tag");e.on("success",(function(t){alert(2),e.destroy()})),e.on("error",(function(t){alert(5),e.destroy()}))},random_color:function(){var t=new Array("#F44336","#ff9800","#4CAF50","#8bc34a","#00bcd4","#2196F3","#9c27b0","#3f51b5","#009688","#e91e63"),e=Math.floor(Math.random()*t.length);return this.info_color=t[e]}},created:function(){this.page_setting.access_token=i["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token"),this.page_setting.refresh_token=i["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token"),console.log(this.page_setting.access_token);var e=localStorage.getItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang");null!=e&&(this.page_setting.language=e),this.page_setting.pid=i["a"].getUrlKey("pid"),null==this.page_setting.pid&&(window.location.href=this.GLOBAL.OJ_DEFAULT_FRONT_SERVE+"/problemset.html"),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/problem",{language:this.page_setting.language,pid:this.page_setting.pid},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(a){console.log(a);var s=a.body.OJ_ERROR_TYPE;if(s==this.GLOBAL.OJ_ERROR_NO_ERROR){this.page_setting.is_login=!0;var r=a.body.OJ_USER_INFO.saved,o=a.headers.map["oj_access_token"][0],n=a.headers.map["oj_refresh_token"][0];a.body.OJ_USER_INFO.role.indexOf(this.GLOBAL.OJ_ROLE_ADMIN)||a.body.OJ_USER_INFO.role.indexOf(this.GLOBAL.OJ_ROLE_SUPER_ADMIN)||a.body.OJ_USER_INFO.role.indexOf(this.GLOBAL.OJ_ROLE_PROBLEM_ADMIN)?i["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_ADMIN):i["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_USER),r?(i["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",o,7),i["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",n,7)):(i["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",o),i["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",n))}else s==this.GLOBAL.OJ_ERROR_NON_EXISTENT_PROBLEM?window.location.href="/problemset.html":s==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&i["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_VISITOR);this.problem=a.body.OJ_PROBLEM,document.title=this.problem.title+" | CTGUACM",e=a.body.OJ_LANGUAGE_TYPE,localStorage.setItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang",e),this.$i18n.locale=e,t(document).ready((function(){t(".double-card").each((function(){var e,a=t(this).children(".card:first").children(".card-body").height(),s=t(this).children(".card:last").children(".card-body").height();e=a>s?a:s,t(this).children(".card:first").children(".card-body").css("height",e+25+"px"),t(this).children(".card:last").children(".card-body").css("height",e+25+"px")}))}))}))}}}).call(this,a("1157"))},"7a3a":function(t,e,a){},a867:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"problem"}},[a("loadings",{ref:"load"}),a("navbar",{attrs:{isActive:t.page_belong}}),a("div",{staticClass:"container mundb-standard-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-9"},[a("paper-card",{staticClass:"animated fadeInLeft p-5",staticStyle:{"min-height":"643px"}},[a("div",{staticStyle:{"font-family":"'Consolas'","white-space":"pre"}},[a("div",{staticStyle:{"text-align":"center"}},[a("h3",[t._v(t._s(t.problem.problemId+": "+t.problem.title))])]),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[a("span",{attrs:{"data-placement":"left","data-toggle":"tooltip","data-original-title":"Time Limit"}},[a("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),a("span",[a("span",{attrs:{fd:"time_limit",pid:""}},[t._v(t._s(" ")+t._s(t.problem.timeLimit)+" ms"+t._s(" ")+t._s(" ")+t._s(" ")+t._s(" "))])])]),a("span",{attrs:{"data-placement":"left","data-toggle":"tooltip","data-original-title":"Memory Limit"}},[a("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}}),a("span",[t._v(t._s(" ")+t._s((t.problem.memoryLimit/1024).toFixed(0))+" KB"+t._s(" ")+t._s(" ")+t._s(" ")+t._s(" "))])]),a("span",[a("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}}),a("span",[t._v(" Standard I/O")])])]),t.problem.isSpj?a("div",{staticStyle:{"text-align":"center",color:"red","margin-top":"10px"}},[a("span",[t._v("Special Judge")])]):t._e()]),a("div",{staticStyle:{"margin-top":"1rem","font-size":"17px"}},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}}),a("span",[t._v(" Problem Information")])]),a("div",{staticClass:"problem"},[null!=t.problem.problemDescribe&&""!=t.problem.problemDescribe?a("div",{staticClass:"card"},[a("div",{staticClass:"card-header",staticStyle:{color:"black"}},[a("span",[t._v("Problem Description")])]),a("div",{staticClass:"card-body"},[a("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.problemDescribe)}})])]):t._e(),null!=t.problem.inputDescribe&&""!=t.problem.inputDescribe?a("div",{staticClass:"card"},[a("div",{staticClass:"card-header",staticStyle:{color:"black"}},[a("span",[t._v("Input Description")])]),a("div",{staticClass:"card-body"},[a("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.inputDescribe)}})])]):t._e(),null!=t.problem.outputDescribe&&""!=t.problem.outputDescribe?a("div",{staticClass:"card"},[a("div",{staticClass:"card-header",staticStyle:{color:"black"}},[a("span",[t._v("Output Description")])]),a("div",{staticClass:"card-body"},[a("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.outputDescribe)}})])]):t._e(),t._l(t.problem.sampleIO,(function(e,s){return[a("div",{key:t.key,staticClass:"double-card"},[a("div",{staticClass:"card",staticStyle:{width:"48%",float:"left"}},[a("div",{staticClass:"card-header",staticStyle:{color:"black"}},[a("span",[t._v(" Sample Input "+t._s(s+1)+" "),t.copy.id==s&&1==t.copy.ing&&0==t.copy.type?a("a",{attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]):a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCopy(e.sample_I,a,s,0)}}},[a("i",{staticClass:"fa fa-files-o",attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"card-body"},[a("span",{staticClass:"sampledata",staticStyle:{"white-space":"pre"},attrs:{id:"sampleinput"+s}},[t._v(t._s(e.sample_I))])])]),a("div",{staticClass:"card",staticStyle:{width:"48%",float:"right"}},[a("div",{staticClass:"card-header",staticStyle:{color:"black"}},[a("span",[t._v(" Sample Output "+t._s(s+1)+" "),t.copy.id==s&&1==t.copy.ing&&1==t.copy.type?a("a",{attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]):a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCopy(e.sample_O,a,s,1)}}},[a("i",{staticClass:"fa fa-files-o",attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"card-body"},[a("span",{staticClass:"sampledata",staticStyle:{"white-space":"pre"},attrs:{id:"sampleoutput"+s}},[t._v(t._s(e.sample_O))])])]),a("div",{staticStyle:{clear:"both"}})])]})),null!=t.problem.hint&&""!=t.problem.hint?a("div",{staticClass:"card"},[a("div",{staticClass:"card-header",staticStyle:{color:"black"}},[a("span",[t._v("Hint")])]),a("div",{staticClass:"card-body"},[a("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.hint)}})])]):t._e()],2)])],1),a("div",{staticClass:"col-sm-12 col-lg-3 no-print"},[a("paper-card",{staticClass:"animated fadeInRight btn-group-vertical cm-action-group"},[a("button",{staticClass:"btn btn-secondary submit-code",attrs:{type:"button",onclick:"window.location.href='/submitpage.html?pid="+t.problem.problemId+"'"}},[a("i",{staticClass:"fa fa-paper-plane fa-fw",attrs:{"aria-hidden":"true"}}),0==t.page_setting.is_login?[t._v(" login & submit ")]:[t._v(" submit ")]],2),a("separate-line",{staticClass:"ultra-thin"}),a("button",{staticClass:"btn btn-secondary submit-info",attrs:{type:"button",onclick:"window.location.href='/status.html?pid="+t.problem.problemId+"'"}},[a("i",{staticClass:"fa fa-check-square fa-fw",attrs:{"aria-hidden":"true"}}),t._v(" submited info ")]),a("button",{staticClass:"btn btn-secondary data",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-code fa-fw",attrs:{"aria-hidden":"true"}}),t._v(" source data ")])],1),a("paper-card",{staticClass:"animated fadeInRight",attrs:{id:"RightInfoPanel"}},[a("p",[a("span",[t._v("Info"+t._s(" ")+t._s(" "))])]),a("div",[a("a",{attrs:{href:"javascript:void(0)",target:"_blank"}},[a("img",{staticClass:"img-fluid mb-3",attrs:{src:"https://oj.ctguacm.work/image/ojlogo.png",alt:"CTGUACMOJ"}})])]),a("p",[a("span",{attrs:{s:""}},[t._v("Code"+t._s(" ")+t._s(" "))]),a("span",{staticClass:"wemd-black-text"},[t._v("CTGAOJ"+t._s(t.problem.problemId))])]),a("p",{staticClass:"mb-0"},[a("span",[t._v("Provider"+t._s(" ")+t._s(" "))])]),a("div",{attrs:{id:"ProblemCategory"}},t._l(t.problem.category,(function(e){return a("a",{key:t.key,style:{color:t.random_color(),"border-color":t.info_color},attrs:{href:"/problemset.html?category="+encodeURIComponent(e.cateId)}},[t._v(" "+t._s(e.name)+" ")])})),0),a("separate-line",{staticClass:"ultra-thin mb-3 mt-3"}),a("p",{staticClass:"mb-0"},[a("span",[t._v("Tags"+t._s(" ")+t._s(" "))])]),a("div",{attrs:{id:"ProblemSource"}},t._l(t.problem.source,(function(e){return a("a",{key:t.key,style:{color:t.random_color(),"border-color":t.info_color},attrs:{href:"/problemset.html?source="+encodeURIComponent(e.sourceId)}},[t._v(" "+t._s(e.name)+" ")])})),0),a("p"),a("p",[a("span",[t._v("Submitted"+t._s(" ")+t._s(" "))]),a("span",{staticClass:"wemd-black-text"},[t._v(t._s(t.problem.submitStatistics.allSubmitTimes))])]),a("p",[a("span",[t._v("Solved"+t._s(" ")+t._s(" "))]),a("span",{staticClass:"wemd-black-text"},[t._v(t._s(t.problem.submitStatistics.acSubmitTimes))])]),a("p",[a("span",[t._v("AC rate"+t._s(" ")+t._s(" "))]),a("span",{staticClass:"wemd-black-text"},[t._v(t._s(0==t.problem.submitStatistics.allSubmitTimes?"---":(100*t.problem.submitStatistics.acSubmitTimes/t.problem.submitStatistics.allSubmitTimes).toFixed(2)+"%"))])]),a("p",[a("span",[t._v("Date"+t._s(" ")+t._s(" "))]),a("span",{staticClass:"wemd-black-text"},[t._v(t._s(t.format_time(t.problem.createTime)))])])],1)],1)])]),a("footers")],1)},r=[],o=a("6f5f"),n=o["a"],c=(a("50df"),a("2877")),l=Object(c["a"])(n,i,r,!1,null,"29cde1d0",null),p=l.exports,d=a("4eb5"),_=a.n(d),m=a("8c4f");s["a"].use(m["a"]);var u=[{path:"/problem",name:"problem",meta:{title:"client 登录"}}],b=new m["a"]({mode:"history",routes:u}),h=a("a925"),f=a("edad"),g=a("2cd5");a("3495");s["a"].config.productionTip=!1,s["a"].prototype.GLOBAL=f["a"],s["a"].use(h["a"]),s["a"].use(_.a);var v=new h["a"]({locale:f["a"].OJ_DEFAULT_LANG,messages:g["a"].messages});new s["a"]({i18n:v,router:b,render:function(t){return t(p)}}).$mount("#problem")}});
//# sourceMappingURL=problem.29ecf2c6.js.map