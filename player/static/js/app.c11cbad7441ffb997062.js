webpackJsonp([1],{"1uuo":function(t,e){},CJNA:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),object;object=window.isConnected?window.frame1=window.frames[0]:window,window.JSON2=JSON;var COMMANDS={getList:function(){var t=[];plus.io.resolveLocalFileSystemURL("/storage/emulated/0/netease/cloudmusic/music",function(e){e.createReader().readEntries(function(e){for(var n=0;n<e.length;n++)t.push(e[n]);try{object.postMessage({data:t,type:"list",name:"getList"},"*")}catch(t){alert(t)}})})},pause:function(t){try{var e=window;e.player&&e.player.pause()}catch(t){alert(t)}},resume:function(t){try{var e=window;e.player&&e.player.resume()}catch(t){alert(t)}},play:function(t,e){try{var n=window;n.player&&n.player.stop(),window.player=n.player=plus.audio.createPlayer(t),window.player.addEventListener("canplay",function(){var t=n.player.getDuration();if(!e){var i=Math.random()*(t-15);n.player.seekTo(i)}n.player.play()})}catch(t){alert(t)}},saveFavorite:function(t){localStorage.setItem("favoriteList",JSON2.stringify(t)),object.postMessage({data:[],name:"saveFavorite"},"*")},getFavorite:function(){var t=localStorage.getItem("favoriteList")||"";t&&(t=JSON.parse(t)),t=t||[],object.postMessage({data:t,name:"getFavorite"},"*")},isPaused:function(){try{frame1.postMessage({data:result},"*")}catch(t){alert(t)}},quit:function(){location="./index.html"}};window.isConnected=!1;var host="http://192.168.3.102:8080";setTimeout(function(){$.ajax({url:host,async:!1,success:function(t){(self!=top||location.host)&&(isConnected=!0)}})},500),window.successCallback={},window.callplus=function(command,params,success){var paramsStr=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(params);try{var str="var params = "+paramsStr+";var "+command+" = "+COMMANDS[command].toString()+" ;"+command+".apply(null, params)",parent=isConnected?window.parent:window;window.successCallback[command]=success,isConnected?parent.postMessage(str,"*"):parent.postMessage(eval(str),"*")}catch(t){alert(t)}},window.addEventListener("message",function(t){try{var e=t.data;if(!e)return;if("webpackWarnings"==e.type)return;if("list"==e.type){var n=e.data.sort(function(){return Math.random()-.5});$Mp3List.list=n.slice(0,50)}window.successCallback[e.name]&&window.successCallback[e.name](e)}catch(t){alert(t)}})},E51W:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={name:"App",data:function(){return{docked:!1,open:!1,icon:"star",isStar:!1}},watch:{"$route.path":function(t,e){"/star"!==t?(this.icon="star_outline",this.isStar=!1):(this.icon="star",this.isStar=!0)}},methods:{toggle:function(){this.open=!this.open},playMusic:function(){"tv"==this.icon?(this.icon="android",window.Hub.$emit("play-music")):(this.icon="tv",window.Hub.$emit("stop-music"))},goStar:function(){this.$router.push("/star"==this.$route.path?"/":"/star")},refresh:function(){window.Hub.$emit("refresh")},quit:function(){callplus("quit")}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mu-appbar",{attrs:{title:"首页"}},[n("mu-icon-button",{attrs:{slot:"left",icon:"menu"},nativeOn:{click:function(e){t.open=!0}},slot:"left"}),t._v(" "),n("mu-icon-button",{directives:[{name:"show",rawName:"v-show",value:!t.isStar,expression:"!isStar"}],attrs:{slot:"right",icon:"refresh"},on:{click:t.refresh},slot:"right"}),t._v(" "),n("mu-icon-button",{attrs:{slot:"right",icon:t.icon},on:{click:t.goStar},slot:"right"}),t._v(" "),n("mu-icon-menu",{attrs:{slot:"right",icon:"more_vert"},slot:"right"},[n("mu-menu-item",{attrs:{title:"菜单 1"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 2"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 3"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 4"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"退出"},nativeOn:{click:function(e){return t.quit(e)}}})],1)],1),t._v(" "),n("div",{staticClass:"main-slot"},[n("keep-alive",[n("router-view")],1)],1),t._v(" "),n("mu-drawer",{attrs:{open:t.open,docked:t.docked},on:{close:function(e){return t.toggle()}}},[n("mu-list",{on:{itemClick:function(e){!t.docked&&t.toggle()}}},[n("mu-list-item",{attrs:{title:"Menu Item 1"}}),t._v(" "),n("mu-list-item",{attrs:{title:"Menu Item 2"}}),t._v(" "),n("mu-list-item",{attrs:{title:"Menu Item 3"}}),t._v(" "),t.docked?n("mu-list-item",{attrs:{title:"Close"},nativeOn:{click:function(e){t.open=!1}}}):t._e()],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(a,s,!1,function(t){n("khOP")},null,null).exports,o=n("/ocq"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports;var c=n("mvHQ"),l=n.n(c),m={data:function(){return{list:[],musicDirectory:"/storage/emulated/0/netease/cloudmusic/music/",curIndex:-1,menuOpen:!1,favoriteList:[],cover:""}},mounted:function(){window.Hub.$on("refresh",function(){t.refreshList()}),window.Hub.$on("play-music",function(){t.refreshList()}),window.player&&player.stop();var t=this;window.$Mp3List=t,setTimeout(function(){t.refreshList(),callplus("getFavorite",[],function(e){t.favoriteList=e.data})},1e3)},methods:{favorite:function(t){this.favoriteList.push(t.name),this.saveFavorite()},saveFavorite:function(){callplus("saveFavorite",[this.favoriteList],function(){window.Hub.$emit("star-getFavorite")})},refreshList:function(){callplus("getList",{url:self.musicDirectory},function(t){self.list=t;for(var e=0;e<self.list.length;e++){var n=self.list[e];-1!==this.favoriteList.indexOf(n)&&(n.favorited=!0)}})},onOpen:function(t){this.menuOpen=!1},onClick:function(t){this.curIndex=t},play:function(t,e,n){var i=this;if(e!=this.curIndex){callplus("play",[i.musicDirectory+t,n],function(t){}),i.isPlay=!0,this.curIndex=e;var a=i.musicDirectory+t;plus.io.resolveLocalFileSystemURL(a,function(t){t.file(function(t){try{var e=function(t){alert(l()(t))};plus.io.requestFileSystem(plus.io.PRIVATE_WWW,function(t){t.root.getFile(a,{create:!1},function(t){try{t.file(function(t){plus.console.log("Read success");try{var e=new plus.io.FileReader;e.onloadend=function(e){for(var n=e.target.result.split(","),a=window.atob(n[1]),s=n[0].match(/:(.*?);/)[1],r=new Uint8Array(a.length),o=0;o<a.length;o++)r[o]=a.charCodeAt(o);var u=new Blob([r],{type:s});try{var c=t.urn||t.name;ID3.loadTags(c,function(){var t=ID3.getAllTags(c).picture;if(t){for(var e="",n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);var a="data:"+t.format+";base64,"+window.btoa(e);i.cover=a}},{tags:["title","artist","album","picture"],dataReader:ID3.FileAPIReader(new window.File([u],t.name,{type:t.type}))})}catch(e){alert(e)}},e.readAsDataURL(t)}catch(t){alert(t)}})}catch(t){alert(t)}},e)},function(t){alert("Request file system failed: "+t.message)})}catch(t){alert(t)}})},function(t){alert("Resolve file URL failed: "+t.message)})}else this.isPause?(callplus("resume",[],function(t){}),this.isPause=!1):(callplus("pause",[],function(t){}),this.isPause=!0)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("mu-list",t._l(t.list,function(e,i){return n("mu-list-item",{class:{active:t.curIndex==i}},[n("span",{staticClass:"title",on:{click:function(n){return t.play(e.name,i)}}},[t._v(t._s(e.name)+"\n        ")]),t._v(" "),n("mu-icon",{directives:[{name:"show",rawName:"v-show",value:e.favorited,expression:"i.favorited"}],staticClass:"star",attrs:{value:"star",color:"yellow"}}),t._v(" "),n("mu-icon-menu",{attrs:{slot:"right",icon:"more_vert",open:t.menuOpen},nativeOn:{click:function(e){return t.onOpen(e)}},slot:"right"},[n("mu-menu-item",{attrs:{title:"收藏"},nativeOn:{click:function(n){return t.favorite(e)}}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 2"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 3"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 4"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 5"}})],1)],1)}),1),t._v(" "),n("div",{staticClass:"cover-box"},[n("img",{attrs:{src:t.cover,alt:""}})])],1)},staticRenderFns:[]};var f=n("VU/8")(m,v,!1,function(t){n("a7ky")},null,null).exports,p={data:function(){return{list:[],musicDirectory:"/storage/emulated/0/netease/cloudmusic/music/",curIndex:-1,menuOpen:!1,favoriteList:[]}},mounted:function(){var t=this;window.Hub.$on("star-getFavorite",function(){e.getFavorite()}),window.Hub.$on("play-music",function(){e.refreshList()}),window.player&&player.stop();var e=this;window.$StarList=e,setTimeout(function(){t.getFavorite()},1e3)},methods:{unfavorite:function(t){var e=this.favoriteList.indexOf(t);this.favoriteList.splice(e,1),this.saveFavorite()},getFavorite:function(){var t=this;callplus("getFavorite",[],function(e){t.favoriteList=t.list=e.data})},saveFavorite:function(){var t=this;callplus("saveFavorite",[this.favoriteList],function(){t.getFavorite()})},onOpen:function(t){this.menuOpen=!1},onClick:function(t){this.curIndex=t},play:function(t,e,n){e!=this.curIndex?(callplus("play",[this.musicDirectory+t,n],function(t){}),this.isPlay=!0,this.curIndex=e):this.isPause?(callplus("resume",[],function(t){}),this.isPause=!1):(callplus("pause",[],function(t){}),this.isPause=!0)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-list",t._l(t.list,function(e,i){return n("mu-list-item",{class:{active:t.curIndex==i}},[n("span",{staticClass:"title",on:{click:function(n){return t.play(e,i)}}},[t._v(t._s(e)+"\n      ")]),t._v(" "),n("mu-icon",{directives:[{name:"show",rawName:"v-show",value:e.favorited,expression:"i.favorited"}],staticClass:"star",attrs:{value:"star",color:"yellow"}}),t._v(" "),n("mu-icon-menu",{attrs:{slot:"right",icon:"more_vert",open:t.menuOpen},nativeOn:{click:function(e){return t.onOpen(e)}},slot:"right"},[n("mu-menu-item",{attrs:{title:"取消收藏"},nativeOn:{click:function(n){return t.unfavorite(e)}}}),t._v(" "),n("mu-menu-item",{attrs:{title:"菜单 2"}})],1)],1)}),1)},staticRenderFns:[]};var _=n("VU/8")(p,d,!1,function(t){n("xOt7")},null,null).exports;i.default.use(o.a);var h=new o.a({routes:[{path:"/",name:"Mp3List",component:f},{path:"/mp3-list",name:"Mp3List",component:f},{path:"/star",name:"star",component:_},{path:"*",name:"Mp3List",component:f}]}),w=n("u64Q"),g=n.n(w);n("E51W"),n("CJNA");i.default.use(g.a),i.default.config.productionTip=!1,window.Hub=new i.default,new i.default({el:"#app",router:h,components:{App:r},template:"<App/>"})},a7ky:function(t,e){},khOP:function(t,e){},xOt7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c11cbad7441ffb997062.js.map