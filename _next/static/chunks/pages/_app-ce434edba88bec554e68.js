_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(t,e,a){a("F/Ua"),t.exports=a("vM9k")},"F/Ua":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a("cha2")}])},GLXU:function(t,e,a){"use strict";var n=a("9d5M"),r=a("q22/"),o=a("jDfI"),i=a("IS7G"),c=a("M4IA"),l=a("InAv"),s=a("M2qx");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=l(t);if(e){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return c(this,a)}}var p=a("3O9y");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=b,e.default=void 0;var f=p(a("XwSd")),d=a("gzdk");function h(t){return m.apply(this,arguments)}function m(){return(m=s(n.mark((function t(e){var a,r,o;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.Component,r=e.ctx,t.next=3,(0,d.loadGetInitialProps)(a,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var g=function(t){i(a,t);var e=u(a);function a(){return r(this,a),e.apply(this,arguments)}return o(a,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,a=t.Component,n=t.pageProps,r=t.__N_SSG,o=t.__N_SSP;return f.default.createElement(a,Object.assign({},n,r||o?{}:{url:b(e)}))}}]),a}(f.default.Component);function b(t){var e=t.pathname,a=t.asPath,n=t.query;return{get query(){return n},get pathname(){return e},get asPath(){return a},back:function(){t.back()},push:function(e,a){return t.push(e,a)},pushTo:function(e,a){var n=a?e:"",r=a||e;return t.push(n,r)},replace:function(e,a){return t.replace(e,a)},replaceTo:function(e,a){var n=a?e:"",r=a||e;return t.replace(n,r)}}}e.default=g,g.origGetInitialProps=h,g.getInitialProps=h},cha2:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}a.r(e),a.d(e,"default",(function(){return $}));var s=a("XwSd"),u=a.n(s),p=a("kDMb"),f=a.n(p),d=a("vM9k"),h=a.n(d),m=a("zrx2"),g=(a("K3Gg"),a("nVoR")),b=a("srLY"),y=a("ByNO");var v=function(t){var e=t.children,a=t.theme,n=Object(b.a)(),r=u.a.useMemo((function(){var t=null===n?a:function(t,e){return"function"===typeof e?e(t):Object(m.a)(Object(m.a)({},t),e)}(n,a);return null!=t&&(t[y.a]=null!==n),t}),[a,n]);return u.a.createElement(g.a.Provider,{value:r},e)},k=a("JR8P"),w={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},x=function(t){return Object(m.a)(Object(m.a)({color:t.palette.text.primary},t.typography.body2),{},{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}})};var O=Object(k.a)((function(t){return{"@global":{html:w,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:Object(m.a)(Object(m.a)({margin:0},x(t)),{},{"&::backdrop":{backgroundColor:t.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(t){var e=t.children,a=void 0===e?null:e;return t.classes,s.createElement(s.Fragment,null,a)})),j=a("cmFE"),M=a("mziy"),N=a("H6Ss"),S=a("IzGw"),_=a("AtJy"),C=s.forwardRef((function(t,e){var a=t.classes,n=t.className,r=t.component,o=void 0===r?"div":r,i=t.square,c=void 0!==i&&i,l=t.elevation,u=void 0===l?1:l,p=t.variant,f=void 0===p?"elevation":p,d=Object(N.a)(t,["classes","className","component","square","elevation","variant"]);return s.createElement(o,Object(m.a)({className:Object(S.a)(a.root,n,"outlined"===f?a.outlined:a["elevation".concat(u)],!c&&a.rounded),ref:e},d))})),E=Object(k.a)((function(t){var e={};return t.shadows.forEach((function(t,a){e["elevation".concat(a)]={boxShadow:t}})),Object(m.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(C),P=s.forwardRef((function(t,e){var a=t.classes,n=t.className,r=t.color,o=void 0===r?"primary":r,i=t.position,c=void 0===i?"fixed":i,l=Object(N.a)(t,["classes","className","color","position"]);return s.createElement(E,Object(m.a)({square:!0,component:"header",elevation:4,className:Object(S.a)(a.root,a["position".concat(Object(_.a)(c))],a["color".concat(Object(_.a)(o))],n,"fixed"===c&&"mui-fixed"),ref:e},l))})),R=Object(k.a)((function(t){var e="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:e,color:t.palette.getContrastText(e)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(P),I=a("dQ0v"),T=s.forwardRef((function(t,e){var a=t.classes,n=t.className,r=t.component,o=void 0===r?"div":r,i=t.disableGutters,c=void 0!==i&&i,l=t.variant,u=void 0===l?"regular":l,p=Object(N.a)(t,["classes","className","component","disableGutters","variant"]);return s.createElement(o,Object(m.a)({className:Object(S.a)(a.root,a[u],n,!c&&a.gutters),ref:e},p))})),D=Object(k.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(I.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),regular:t.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(T),q=a("gRv6"),z=u.a.createElement,B=Object(M.a)((function(t){return{appBar:{color:t.palette.common.white},title:{fontSize:24},toolbar:Object(j.a)({justifyContent:"space-between",height:64},t.breakpoints.up("sm"),{height:70}),placeholder:Object(j.a)({height:64},t.breakpoints.up("sm"),{height:70}),rightLink:{fontSize:16,color:t.palette.common.white,marginLeft:t.spacing(3)}}}));var L=function(){var t=B();return z("div",null,z(R,{position:"fixed",classes:{root:t.appBar}},z(D,{classes:{root:t.toolbar}},z("div",null,z(q.a,{variant:"h6",underline:"none",color:"inherit",className:t.title,href:"/",as:"/"},"NOVATalks")),z("div",null,z(q.a,{color:"inherit",variant:"h6",underline:"none",className:t.rightLink,href:"/",as:"/#sobre-nos"},"Sobre n\xf3s"),z(q.a,{variant:"h6",underline:"none",className:t.rightLink,href:"/",as:"/#equipa"},"Equipa"),z(q.a,{variant:"h6",underline:"none",className:t.rightLink,href:"/",as:"/#eventos"},"Eventos")))),z("div",{className:t.placeholder}))},A=a("oYNu"),F=a("gQcw"),G=a("hi9L"),W=u.a.createElement,V=Object(M.a)((function(t){return{root:{display:"flex",backgroundColor:t.palette.secondary.light},container:{marginTop:t.spacing(8),marginBottom:t.spacing(8),display:"flex"},iconsWrapper:{height:120},icons:{display:"flex"},icon:{width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:t.palette.warning.main,marginRight:t.spacing(1),"&:hover":{backgroundColor:t.palette.warning.dark}},list:{margin:0,listStyle:"none",paddingLeft:0},listItem:{paddingTop:t.spacing(.5),paddingBottom:t.spacing(.5)},language:{marginTop:t.spacing(1),width:150}}}));function X(){var t=V();return W(G.a,{component:"footer",className:t.root},W(F.a,{className:t.container},W(A.a,{container:!0,spacing:5},W(A.a,{item:!0,xs:6,sm:4,md:3},W(A.a,{container:!0,direction:"column",justify:"flex-end",className:t.iconsWrapper,spacing:2},W(A.a,{item:!0,className:t.icons},W("a",{href:"https://www.facebook.com/novatalks.fct",target:"_blank",rel:"noopener",className:t.icon},W("img",{src:"".concat("","/images/facebook.png"),alt:"Facebook"}))),W(A.a,{item:!0},"\xa9 NOVATalks | DI @ FCT NOVA ".concat((new Date).getFullYear())))))))}var J=a("64ge"),U=a("KJvM"),Y=Object(J.a)({palette:{primary:{main:"#333333"},secondary:{main:"#6a6a6a"},error:{main:U.a.A400},background:{default:"#fff"}}}),H={"/#gitModal130416":{href:"/talk?year=2016&talk=git",as:"/talk/2016/git"},"/#latexModal040516":{href:"/talk?year=2016&talk=latex",as:"/talk/2016/latex"},"/#pythonModal180516":{href:"/talk?year=2016&talk=python",as:"/talk/2016/python"},"/#rustModal191016":{href:"/talk?year=2016&talk=rust",as:"/talk/2016/rust"},"/#cModal301116":{href:"/talk?year=2016&talk=c",as:"/talk/2016/c"},"/#scalaModal150317":{href:"/talk?year=2017&talk=scala",as:"/talk/2017/scala"},"/#gamificationModal050417":{href:"/talk?year=2017&talk=gamification",as:"/talk/2017/gamification"},"/#dataScienceModal100517":{href:"/talk?year=2017&talk=data-science",as:"/talk/2017/data-science"},"/#outSysModal240517":{href:"/talk?year=2017&talk=domain-specific-languages",as:"/talk/2017/domain-specific-languages"},"/#cModal200917":{href:"/talk?year=2017&talk=c",as:"/talk/2017/c"},"/#gitModal081117":{href:"/talk?year=2017&talk=git",as:"/talk/2017/git"},"/#latexModal221117":{href:"/talk?year=2017&talk=latex",as:"/talk/2017/latex"},"/#cModal201119":{href:"/talk?year=2019&talk=c",as:"/talk/2019/c"},"/#cModal201127":{href:"/talk?year=2019&talk=why3",as:"/talk/2019/why3"},"/#why3Modal271119":{href:"/talk?year=2019&talk=why3",as:"/talk/2019/why3"}},K=u.a.createElement;function Q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=l(t);if(e){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return c(this,a)}}var Z=function(t){var e=function(t){switch(t){case"/#sobre-nos":return document.getElementById("jump-sobre-nos");case"/#equipa":return document.getElementById("jump-equipa");case"/#eventos":case"/#talks":return document.getElementById("jump-eventos");default:return null}}(t);if(e)window.scrollTo(0,e.offsetTop-90);else{var a=H[t];a&&(console.log("Redirecting to ",a),h.a.push(a.href,a.as))}};h.a.events.on("routeChangeComplete",Z),h.a.events.on("hashChangeComplete",Z);var $=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(l,t);var e,a,i,c=Q(l);function l(){return n(this,l),c.apply(this,arguments)}return e=l,(a=[{key:"componentDidMount",value:function(){var t,e=document.querySelector("#jss-server-side");null===e||void 0===e||null===(t=e.parentElement)||void 0===t||t.removeChild(e),Z(location.pathname+location.hash)}},{key:"render",value:function(){var t=this.props,e=t.Component,a=t.pageProps;return K(u.a.Fragment,null,K(v,{theme:Y},K(O,null),K(L,null),K(e,a),K(X,null)))}}])&&r(e.prototype,a),i&&r(e,i),l}(f.a)},kDMb:function(t,e,a){t.exports=a("GLXU")}},[[0,0,1,3,2,4]]]);