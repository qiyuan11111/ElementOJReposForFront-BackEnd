(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],_=0,p=[];_<o.length;_++)n=o[_],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);g&&g(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={problemset:0},r=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var g=l;r.push([5,"chunk-vendors","chunk-common"]),a()})({"31d3":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("a026"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"problemset"}},[a("loadings",{ref:"load"}),a("navbar",{attrs:{isActive:e.page_belong}}),a("div",{staticClass:"container mundb-standard-container",staticStyle:{"min-height":"70vh"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-9"},[a("paper-card",{staticClass:"animated bounceInLeft",staticStyle:{"min-height":"292px"}},[a("div",{staticClass:"table-responsive"},[e.page_setting.beforeload?a("div",{staticStyle:{"text-align":"center","margin-top":"90px","font-size":"25px",height:"150px",color:"#dcdcdc"}},[a("i",{staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"}),a("span",{staticClass:"sr-only"},[e._v("Loading...")])]):[a("table",{staticClass:"table table-borderless",attrs:{id:"problems"}},[a("thead",[a("tr",[a("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[a("form",{staticClass:"form-inline",staticStyle:{"margin-bottom":"0px"},on:{submit:function(t){return t.preventDefault(),e.choose_problem_id()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.problem_id,expression:"search.problem_id"}],staticClass:"form-control search-query",staticStyle:{width:"100%","text-align":"center"},attrs:{type:"text",name:"pid",placeholder:"ID"},domProps:{value:e.search.problem_id},on:{input:function(t){t.target.composing||e.$set(e.search,"problem_id",t.target.value)}}})])]),a("th",{attrs:{scope:"col"}},[a("form",{staticClass:"form-inline",staticStyle:{"margin-bottom":"0px"},on:{submit:function(t){return t.preventDefault(),e.choose_title()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.title,expression:"search.title"}],staticClass:"form-control search-query",staticStyle:{width:"100%","text-align":"center"},attrs:{type:"text",placeholder:"Problems"},domProps:{value:e.search.title},on:{input:function(t){t.target.composing||e.$set(e.search,"title",t.target.value)}}})])]),a("th",{staticClass:"cm-fw",staticStyle:{"padding-bottom":"20px"},attrs:{scope:"col"}},[e._v(" Solved ")]),a("th",{staticClass:"cm-fw",staticStyle:{"padding-bottom":"20px"},attrs:{scope:"col"}},[e._v(" Submit ")]),a("th",{staticClass:"cm-fw",staticStyle:{"padding-bottom":"20px"},attrs:{scope:"col"}},[e._v(" AC rate ")])])]),a("tbody",e._l(e.problems,(function(t){return a("tr",{key:e.key},[a("th",{attrs:{scope:"row"}},[e._v(" CTGAOJ"+e._s(t.problemId))]),a("td",[0==t.hasPass?[a("i",{staticClass:"fa fa-circle-o",staticStyle:{color:"lightgrey"},attrs:{"aria-hidden":"true"}})]:2==t.hasPass?[a("i",{staticClass:"fa fa-adjust",staticStyle:{color:"orange"},attrs:{"aria-hidden":"true"}})]:[a("i",{staticClass:"fa fa-circle",staticStyle:{color:"lightseagreen"},attrs:{"aria-hidden":"true"}})],a("span",[e._v(e._s(" "))]),a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"problem.html?pid="+t.problemId}},[e._v(e._s(t.title))])],2),a("td",[e._v(" "+e._s(t.submitStatistics.allSubmitTimes))]),a("td",[e._v(" "+e._s(t.submitStatistics.acSubmitTimes))]),a("td",[e._v(" "+e._s(0==t.submitStatistics.allSubmitTimes?"---":parseFloat(100*t.submitStatistics.acSubmitTimes/t.submitStatistics.allSubmitTimes).toFixed(2)+"%")+" ")])])})),0)]),null!=e.problems&&e.problems.length<=0?a("empty-container",[a("svg",{staticClass:"icon",attrs:{t:"1605936727818",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3621",width:"100",height:"100"}},[a("path",{attrs:{d:"M576 928c-6 0-11.9-1.7-17.1-5-9.3-5.9-14.9-16.1-14.9-27V554.3c0-12.4 7.1-23.6 18.3-28.9l288-136.1c9.9-4.7 21.5-4 30.8 1.9s14.9 16.1 14.9 27v341.7c0 12.4-7.1 23.6-18.3 28.9l-288 136.1c-4.4 2.1-9 3.1-13.7 3.1z m32-353.5v271l224-105.8v-271L608 574.5zM448 928c-4.7 0-9.3-1-13.7-3.1l-288-136.1c-11.2-5.3-18.3-16.6-18.3-28.9V418.2c0-11 5.6-21.2 14.9-27 9.3-5.9 20.9-6.6 30.8-1.9l288 136.1c11.2 5.3 18.3 16.6 18.3 28.9V896c0 11-5.6 21.2-14.9 27-5.2 3.3-11.1 5-17.1 5zM192 739.7l224 105.8v-271L192 468.7v271zM512 501.1c-4.7 0-9.4-1-13.8-3.1l-352-168.1c-11.2-5.4-18.3-16.7-18.2-29.2 0.1-12.4 7.4-23.7 18.8-28.8l352-159.9c8.4-3.8 18.1-3.8 26.5 0l352 159.9c11.3 5.1 18.6 16.4 18.8 28.8 0.1 12.4-7 23.8-18.2 29.2L525.8 498c-4.4 2-9.1 3.1-13.8 3.1zM235.8 301.7L512 433.6l276.2-131.9L512 176.2 235.8 301.7z","p-id":"3622",fill:"#7a8e97"}})]),a("p",[e._v("Nothing matches.")])]):e._e()]],2)]),a("nav",{staticClass:"animated bounceInLeft",staticStyle:{"min-height":"36px"},attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{class:{"page-item":!0,disable:e.page<=1}},[a("a",{staticClass:"page-link cm-navi",attrs:{href:e.page>1?e.switch_page(e.page-1):"javascript:void(0)"}},[a("i",{staticClass:"material-icons prefix",staticStyle:{"line-height":"18px"},style:{color:e.page<=1?"grey":""}},[e._v("chevron_left")])])]),e.max_page<=14?[e._l(e.page_index_range(1,e.page-1),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),a("li",{staticClass:"page-item active",attrs:{"aria-current":"page"}},[a("span",{staticClass:"page-link"},[e._v(e._s(e.page))])]),e._l(e.page_index_range(e.page+1,e.max_page),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])}))]:[e.page<7?[e._l(e.page_index_range(1,e.page-1),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),a("li",{staticClass:"page-item active",attrs:{"aria-current":"page"}},[a("span",{staticClass:"page-link"},[e._v(e._s(e.page))])]),e._l(e.page_index_range(e.page+1,e.page+3),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),e._m(0),e._l(e.page_index_range(e.max_page-2,e.max_page),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])}))]:e.page>=e.max_page-5?[e._l(3,(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),e._m(1),e._l(e.page_index_range(e.page-3,e.page-1),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),a("li",{staticClass:"page-item active",attrs:{"aria-current":"page"}},[a("span",{staticClass:"page-link"},[e._v(e._s(e.page))])]),e._l(e.page_index_range(e.page+1,e.max_page),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])}))]:[e._l(3,(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),e._m(2),e._l(e.page_index_range(e.page-3,e.page-1),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),a("li",{staticClass:"page-item active",attrs:{"aria-current":"page"}},[a("span",{staticClass:"page-link"},[e._v(e._s(e.page))])]),e._l(e.page_index_range(e.page+1,e.page+3),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])})),e._m(3),e._l(e.page_index_range(e.max_page-2,e.max_page),(function(t){return a("li",{key:e.key,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:e.switch_page(t)}},[e._v(e._s(t))])])}))]],a("li",{class:{"page-item":!0,disable:e.page>=e.max_page}},[a("a",{staticClass:"page-link cm-navi",attrs:{href:e.page<e.max_page?e.switch_page(e.page+1):"javascript:void(0)"}},[a("i",{staticClass:"material-icons prefix",staticStyle:{"line-height":"18px"},style:{color:e.page>=e.max_page?"grey":""}},[e._v("chevron_right")])])])],2)])],1),a("div",{staticClass:"col-sm-12 col-lg-3"},[a("paper-card",{staticClass:"animated bounceInRight",attrs:{id:"category-pannel"}},[a("div",[a("p",{staticStyle:{display:"inline-block","white-space":"pre"}},[e._v("Category"+e._s(" "))]),a("a",{staticStyle:{cursor:"pointer"},attrs:{role:"button",id:"categoryContent","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"dropdown-menu",staticStyle:{"max-height":"350px","overflow-y":"scroll"},attrs:{id:"category-menu","aria-labelledby":"categoryContent"}},e._l(e.category,(function(t,s){return a("a",{key:s,staticClass:"dropdown-item",on:{click:function(t){return e.switch_category(s)}}},[e._v(e._s(t.main.name))])})),0)]),e._l(e.category,(function(t,s){return[e.page_setting.category_page==s?a("div",{key:s},[t.root.length>=1?[a("span",{staticClass:"badge badge-title badge-tag selected "},[e._v("基本")]),a("div",{staticStyle:{clear:"both"}}),e._l(t.root,(function(t){return a("span",{key:s,class:{badge:!0,"badge-tag":!0,selected:e.getUrlKey("category")==t.cateId},on:{click:function(a){return e.choose_parm("category",e.page_setting.category==t.cateId?null:t.cateId)}}},[e._v(e._s(t.name))])})),a("div",{staticStyle:{clear:"both"}})]:e._e(),t.noroot.length>=1?[e._l(t.noroot,(function(t){return[a("span",{key:s,staticClass:"badge badge-tag badge-title selected "},[e._v(e._s(t.main.name))]),a("div",{key:s,staticStyle:{clear:"both"}}),e._l(t.root,(function(t){return a("span",{key:e.key1,class:{badge:!0,"badge-tag":!0,selected:e.getUrlKey("category")==t.cateId},on:{click:function(a){return e.choose_parm("category",e.page_setting.category==t.cateId?null:t.cateId)}}},[e._v(e._s(t.name))])})),a("div",{key:s,staticStyle:{clear:"both"}})]}))]:e._e()],2):e._e()]}))],2),a("paper-card",{staticClass:"animated bounceInRight",attrs:{id:"source-pannel"}},[a("div",[a("p",{staticStyle:{display:"inline-block","white-space":"pre"}},[e._v("Source"+e._s(" "))]),a("a",{staticStyle:{cursor:"pointer"},attrs:{role:"button",id:"sourceContent","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"dropdown-menu",staticStyle:{"max-height":"350px","overflow-y":"scroll"},attrs:{id:"source-menu","aria-labelledby":"sourceContent"}},e._l(e.source,(function(t,s){return a("a",{key:s,staticClass:"dropdown-item",on:{click:function(t){return e.switch_source(s)}}},[e._v(e._s(t.main.name))])})),0)]),e._l(e.source,(function(t,s){return[e.page_setting.source_page==s?a("div",{key:s},[t.root.length>=1?[a("span",{staticClass:"badge badge-title badge-tag selected "},[e._v("基本")]),a("div",{staticStyle:{clear:"both"}}),e._l(t.root,(function(t){return a("span",{key:s,class:{badge:!0,"badge-tag":!0,selected:e.getUrlKey("source")==t.sourceId},on:{click:function(a){return e.choose_parm("source",e.page_setting.source==t.sourceId?null:t.sourceId)}}},[e._v(e._s(t.name))])})),a("div",{staticStyle:{clear:"both"}})]:e._e(),t.noroot.length>=1?[e._l(t.noroot,(function(t){return[a("span",{key:s,staticClass:"badge badge-tag badge-title selected "},[e._v(e._s(t.main.name))]),a("div",{key:s,staticStyle:{clear:"both"}}),e._l(t.root,(function(t){return a("span",{key:e.key1,class:{badge:!0,"badge-tag":!0,selected:e.getUrlKey("source")==t.sourceId},on:{click:function(a){return e.choose_parm("source",e.page_setting.source==t.sourceId?null:t.sourceId)}}},[e._v(e._s(t.name))])})),a("div",{key:s,staticStyle:{clear:"both"}})]}))]:e._e()],2):e._e()]}))],2)],1)])]),a("footers")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"page-item disabled",attrs:{"aria-disabled":"true"}},[a("span",{staticClass:"page-link"},[e._v("...")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"page-item disabled",attrs:{"aria-disabled":"true"}},[a("span",{staticClass:"page-link"},[e._v("...")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"page-item disabled",attrs:{"aria-disabled":"true"}},[a("span",{staticClass:"page-link"},[e._v("...")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"page-item disabled",attrs:{"aria-disabled":"true"}},[a("span",{staticClass:"page-link"},[e._v("...")])])}],n=(a("c975"),a("d81d"),a("ac1f"),a("5319"),a("841c"),a("ff6f")),o=a("2cd5"),l=a("2c4b"),c=a("54a1"),g={components:{Loadings:c["a"],Footers:l["a"],navbar:n["a"]},name:"problemset",data:function(){return{page_belong:"problemset",page_setting:{access_token:"",refresh_token:"",language:"",page:null,category_page:0,source_page:0,source:[],category:[],title:null,beforeload:!0},max_page:0,page:0,problems:[],category:"",source:"",search:{problem_id:null,title:null}}},methods:{page_index_range:function(e,t){for(var a=[],s=e;s<=t;s++)a.push(s);return a},switch_page:function(e){this.addUrlParm("page",e);var t="/problemset.html"+this.getUrlString();return t},choose_problem_id:function(){var e=this.search.problem_id;window.location.href="/problem.html?pid="+encodeURIComponent(e)},choose_title:function(e){this.addUrlParm("title",this.search.title);var t="/problemset.html"+this.getUrlString();window.location.href=t,e.preventDefault()},getUrlKey:function(e){return o["a"].getUrlKey(e)},addUrlParm:function(e,t){null!=o["a"].getUrlKey("source")&&(this.page_setting.source=o["a"].getUrlKey("source")),null!=o["a"].getUrlKey("category")&&(this.page_setting.category=o["a"].getUrlKey("category")),null!=o["a"].getUrlKey("title")&&(this.page_setting.title=o["a"].getUrlKey("title")),null!=o["a"].getUrlKey("page")&&(this.page_setting.page=o["a"].getUrlKey("page")),"source"==e&&(this.page_setting.source=null!=t?t:null),"category"==e&&(this.page_setting.category=null!=t?t:null),"title"==e&&(this.page_setting.title=null!=t&&""!=t?t:null),"page"==e&&(this.page_setting.page=null!=t&&""!=t?t:null)},getUrlString:function(){var e="";return null!=this.page_setting.page&&(e+="&page="+encodeURIComponent(this.page_setting.page)),null!=this.page_setting.source&&(e+="&source="+encodeURIComponent(this.page_setting.source)),null!=this.page_setting.category&&(e+="&category="+encodeURIComponent(this.page_setting.category)),null!=this.page_setting.title&&(e+="&title="+encodeURIComponent(this.page_setting.title)),e.replace("&","?")},switch_category:function(e){this.page_setting.category_page=e},switch_source:function(e){this.page_setting.source_page=e},choose_parm:function(e,t){this.$refs.load.loading_show(),this.addUrlParm(e,t);var a="/problemset.html"+this.getUrlString();window.location.href=a}},created:function(){this.page_setting.access_token=o["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token"),this.page_setting.refresh_token=o["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token");var e=localStorage.getItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang");null!=e&&(this.page_setting.language=e),this.page_setting.page=o["a"].getUrlKey("page"),this.page_setting.source=o["a"].getUrlKey("source"),this.page_setting.category=o["a"].getUrlKey("category"),this.page_setting.title=this.search.title=o["a"].getUrlKey("title"),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/problemset",{language:this.page_setting.language,page:this.page_setting.page,source:this.page_setting.source,category:this.page_setting.category,title:this.page_setting.title},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(t){console.log(t),this.problems=t.body.OJ_PROBLEM,this.page=t.body.OJ_PAGE_INDEX,this.max_page=t.body.OJ_MAX_PAGE_INDEX;var a=t.body.OJ_ERROR_TYPE;if(a==this.GLOBAL.OJ_ERROR_NO_ERROR){var s=t.body.OJ_USER_INFO.saved,i=t.headers.map["oj_access_token"][0],r=t.headers.map["oj_refresh_token"][0];t.body.OJ_USER_INFO.role.indexOf(this.GLOBAL.OJ_ROLE_ADMIN)||t.body.OJ_USER_INFO.role.indexOf(this.GLOBAL.OJ_ROLE_SUPER_ADMIN)||t.body.OJ_USER_INFO.role.indexOf(this.GLOBAL.OJ_ROLE_PROBLEM_ADMIN)?o["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_ADMIN):o["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_USER),s?(o["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",i,7),o["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",r,7)):(o["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",i),o["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",r))}else a==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&o["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_VISITOR);e=t.body.OJ_LANGUAGE_TYPE,localStorage.setItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang",e),this.$i18n.locale=e,this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/source",{},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(e){console.log(e);var t=e.body.OJ_ERROR_TYPE;if(this.source=e.body.OJ_SOURCE,t==this.GLOBAL.OJ_ERROR_NO_ERROR){var a=e.body.OJ_USER_INFO.saved,s=e.headers.map["oj_access_token"][0],i=e.headers.map["oj_refresh_token"][0];a?(o["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",s,7),o["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",i,7)):(o["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",s),o["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",i))}})),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/category",{},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(e){console.log(e);var t=e.body.OJ_ERROR_TYPE;if(this.category=e.body.OJ_CATEGORY,t==this.GLOBAL.OJ_ERROR_NO_ERROR){var a=e.body.OJ_USER_INFO.saved,s=e.headers.map["oj_access_token"][0],i=e.headers.map["oj_refresh_token"][0];a?(o["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",s,7),o["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",i,7)):(o["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",s),o["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",i))}})),this.page_setting.beforeload=!1}))}},_=g,p=(a("3db4"),a("2877")),u=Object(p["a"])(_,i,r,!1,null,"53884987",null),d=u.exports,h=a("8c4f");s["a"].use(h["a"]);var m=[{path:"/problemset",name:"problemset",meta:{title:"client 登录"}}],f=new h["a"]({mode:"history",routes:m}),y=a("a925"),b=a("edad");a("3495");s["a"].config.productionTip=!1,s["a"].prototype.GLOBAL=b["a"],s["a"].use(y["a"]);var v=new y["a"]({locale:b["a"].OJ_DEFAULT_LANG,messages:o["a"].messages});new s["a"]({i18n:v,router:f,render:function(e){return e(d)}}).$mount("#problemset")},"3db4":function(e,t,a){"use strict";var s=a("83be"),i=a.n(s);i.a},5:function(e,t,a){e.exports=a("31d3")},"83be":function(e,t,a){}});
//# sourceMappingURL=problemset.8001b19e.js.map