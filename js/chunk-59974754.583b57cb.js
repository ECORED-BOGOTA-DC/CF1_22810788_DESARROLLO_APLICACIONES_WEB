(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59974754"],{"03ad":function(n,e,t){"use strict";t("10d5")},"10d5":function(n,e,t){},"51bc":function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("aside",[t("transition",{attrs:{name:"main-menu",duration:"295"}},[n.menuOpen?t("div",{staticClass:"aside-menu"},[t("div",{staticClass:"aside-menu__black-background",on:{click:function(e){return n.toggleMenu(!1)}}}),t("nav",{staticClass:"aside-menu__content"},[t("div",{staticClass:"aside-menu__header"},[t("h4",[n._v("Desarrollo de contenidos")])]),t("ul",{staticClass:"aside-menu__menu"},[n._l(n.menuData,(function(e,s){return[t("li",{key:"menu-item-"+s,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":n.$route.name==e.nombreRuta}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:e.nombreRuta}},nativeOn:{click:function(e){return n.toggleMenu(!1)}}},[e.hasOwnProperty("numero")?t("span",{domProps:{innerHTML:n._s(e.numero)}}):n._e(),e.icono?t("i",{class:e.icono}):n._e(),t("span",{domProps:{innerHTML:n._s(e.titulo)}})])],1),e.hasOwnProperty("subMenu")&&e.subMenu.length?n._l(e.subMenu,(function(i,u){return t("li",{key:"submenu-item-"+s+"-"+u,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":n.$route.hash=="#"+i.hash}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:e.nombreRuta,hash:"#"+i.hash}},nativeOn:{click:function(e){return n.toggleMenu(!1)}}},[i.icono?t("i",{class:i.icono}):n._e(),i.numero?t("span",{domProps:{innerHTML:n._s(i.numero)}}):n._e(),t("span",{domProps:{innerHTML:n._s(i.titulo)}})])],1)})):n._e()]}))],2),t("ul",{staticClass:"aside-menu__sec-menu"},[n._l(n.subMenuData,(function(e,s){return[t("li",{key:"secMenu-item-"+s,staticClass:"aside-menu__sec-menu__item",class:{"d-none":e.titulo.includes("material")&&n.isLocal()}},[e.hasOwnProperty("download")?t("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:n.obtenerLink(e.download),target:"_blank"}},[e.icono?t("i",{class:e.icono}):n._e(),t("span",{domProps:{innerHTML:n._s(e.titulo)}})]):t("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:e.nombreRuta}},nativeOn:{click:function(e){return n.toggleMenu(!1)}}},[e.icono?t("i",{class:e.icono}):n._e(),t("span",{domProps:{innerHTML:n._s(e.titulo)}})])],1)]}))],2)])]):n._e()])],1)},i=[],u=(t("b0c0"),{name:"AsideMenu",computed:{menuData:function(){return this.$config.menuPrincipal.menu},subMenuData:function(){return this.$config.menuPrincipal.subMenu},menuOpen:function(){return this.$store.getters.isMenuOpen}},watch:{$route:function(n){("inicio"===n.name||window.innerWidth<=991)&&this.toggleMenu(!1)}},methods:{toggleMenu:function(n){this.$store.dispatch("toggleMenu",n)},isLocal:function(){return"file:"===window.location.protocol}}}),a=u,o=(t("03ad"),t("2877")),r=Object(o["a"])(a,s,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-59974754.583b57cb.js.map