(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(e,t,a){a("1VBK"),e.exports=a("gFyL")},"1VBK":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a("cha2")}])},Nhk1:function(e,t,a){e.exports=a("uEZo")},cha2:function(e,t,a){"use strict";a.r(t);var n=a("EEJi"),o=a.n(n);function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),o()(e,n.key,n)}}var i=a("Knuh"),l=a.n(i),c=a("Lwfp"),s=a.n(c);function u(e){return(u="function"===typeof s.a&&"symbol"===typeof l.a?function(e){return typeof e}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e})(e)}function p(e){return(p="function"===typeof s.a&&"symbol"===u(l.a)?function(e){return u(e)}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":u(e)})(e)}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=a("30YM"),h=a.n(d),m=a("cO86"),g=a.n(m);function b(e){return(b=g.a?h.a:function(e){return e.__proto__||h()(e)})(e)}var k=a("a2ko"),y=a.n(k);function v(e,t){return(v=g.a||function(e,t){return e.__proto__=t,e})(e,t)}var w=a("o/f9"),x=a.n(w),j=a("Nhk1"),O=a.n(j),C=a("gFyL"),E=a.n(C),N=a("zH5T"),M=(a("XJbj"),a("qR35")),T=a("/gZ2"),S=a("f2zL");var _=function(e){var t=e.children,a=e.theme,n=Object(T.a)(),o=x.a.useMemo((function(){var e=null===n?a:function(e,t){return"function"===typeof t?t(e):Object(N.a)({},e,{},t)}(n,a);return null!=e&&(e[S.a]=null!==n),e}),[a,n]);return x.a.createElement(M.a.Provider,{value:o},t)},P=a("zUPw"),I={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},L=function(e){return Object(N.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var R=Object(P.a)((function(e){return{"@global":{html:I,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(N.a)({margin:0},L(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,w.createElement(w.Fragment,null,a)})),B=a("k+aD"),q=a("OrhE"),z=a("rdsU"),F=a("Rs5V"),A=a("1c2w"),D=w.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,r=void 0===o?"div":o,i=e.square,l=void 0!==i&&i,c=e.elevation,s=void 0===c?1:c,u=e.variant,p=void 0===u?"elevation":u,f=Object(z.a)(e,["classes","className","component","square","elevation","variant"]);return w.createElement(r,Object(N.a)({className:Object(F.a)(a.root,n,"outlined"===p?a.outlined:a["elevation".concat(s)],!l&&a.rounded),ref:t},f))})),W=Object(P.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(N.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(D),G=w.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.color,r=void 0===o?"primary":o,i=e.position,l=void 0===i?"fixed":i,c=Object(z.a)(e,["classes","className","color","position"]);return w.createElement(W,Object(N.a)({square:!0,component:"header",elevation:4,className:Object(F.a)(a.root,a["position".concat(Object(A.a)(l))],a["color".concat(Object(A.a)(r))],n,"fixed"===l&&"mui-fixed"),ref:t},c))})),V=Object(P.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(G),K=a("oKPy"),H=w.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,r=void 0===o?"div":o,i=e.disableGutters,l=void 0!==i&&i,c=e.variant,s=void 0===c?"regular":c,u=Object(z.a)(e,["classes","className","component","disableGutters","variant"]);return w.createElement(r,Object(N.a)({className:Object(F.a)(a.root,a[s],n,!l&&a.gutters),ref:t},u))})),J=Object(P.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(K.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(H),X=a("gRv6"),Z=x.a.createElement,U=Object(q.a)((function(e){return{appBar:{color:e.palette.common.white},title:{fontSize:24},toolbar:Object(B.a)({justifyContent:"space-between",height:64},e.breakpoints.up("sm"),{height:70}),placeholder:Object(B.a)({height:64},e.breakpoints.up("sm"),{height:70}),rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:e.spacing(3)}}}));var Y=function(){var e=U();return Z("div",null,Z(V,{position:"fixed",classes:{root:e.appBar}},Z(J,{classes:{root:e.toolbar}},Z("div",null,Z(X.a,{variant:"h6",underline:"none",color:"inherit",className:e.title,href:"/",as:"/"},"NOVATalks")),Z("div",null,Z(X.a,{color:"inherit",variant:"h6",underline:"none",className:e.rightLink,href:"/",as:"/#sobre-nos"},"Sobre n\xf3s"),Z(X.a,{variant:"h6",underline:"none",className:e.rightLink,href:"/",as:"/#equipa"},"Equipa"),Z(X.a,{variant:"h6",underline:"none",className:e.rightLink,href:"/",as:"/#talks"},"Talks")))),Z("div",{className:e.placeholder}))},Q=a("fOfT"),$=a("6vmm"),ee=a("tTls"),te=x.a.createElement,ae="",ne=Object(q.a)((function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light},container:{marginTop:e.spacing(8),marginBottom:e.spacing(8),display:"flex"},iconsWrapper:{height:120},icons:{display:"flex"},icon:{width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.warning.main,marginRight:e.spacing(1),"&:hover":{backgroundColor:e.palette.warning.dark}},list:{margin:0,listStyle:"none",paddingLeft:0},listItem:{paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5)},language:{marginTop:e.spacing(1),width:150}}}));function oe(){var e=ne();return te(ee.a,{component:"footer",className:e.root},te($.a,{className:e.container},te(Q.a,{container:!0,spacing:5},te(Q.a,{item:!0,xs:6,sm:4,md:3},te(Q.a,{container:!0,direction:"column",justify:"flex-end",className:e.iconsWrapper,spacing:2},te(Q.a,{item:!0,className:e.icons},te("a",{href:"https://www.facebook.com/novatalks.fct",target:"_blank",rel:"noopener",className:e.icon},te("img",{src:"".concat(ae,"/images/facebook.png"),alt:"Facebook"}))),te(Q.a,{item:!0},"\xa9 NOVATalks | DI @ FCT NOVA ".concat((new Date).getFullYear())))))))}var re=a("1qXG"),ie=a("LSaH"),le=Object(re.a)({palette:{primary:{main:"#333333"},secondary:{main:"#6a6a6a"},error:{main:ie.a.A400},background:{default:"#fff"}}}),ce={"/#gitModal130416":{href:"/talk?year=2016&talk=git",as:"/talk/2016/git"},"/#latexModal040516":{href:"/talk?year=2016&talk=latex",as:"/talk/2016/latex"},"/#pythonModal180516":{href:"/talk?year=2016&talk=python",as:"/talk/2016/python"},"/#rustModal191016":{href:"/talk?year=2016&talk=rust",as:"/talk/2016/rust"},"/#cModal301116":{href:"/talk?year=2016&talk=c",as:"/talk/2016/c"},"/#scalaModal150317":{href:"/talk?year=2017&talk=scala",as:"/talk/2017/scala"},"/#gamificationModal050417":{href:"/talk?year=2017&talk=gamification",as:"/talk/2017/gamification"},"/#dataScienceModal100517":{href:"/talk?year=2017&talk=data-science",as:"/talk/2017/data-science"},"/#outSysModal240517":{href:"/talk?year=2017&talk=domain-specific-languages",as:"/talk/2017/domain-specific-languages"},"/#cModal200917":{href:"/talk?year=2017&talk=c",as:"/talk/2017/c"},"/#gitModal081117":{href:"/talk?year=2017&talk=git",as:"/talk/2017/git"},"/#latexModal221117":{href:"/talk?year=2017&talk=latex",as:"/talk/2017/latex"},"/#cModal201119":{href:"/talk?year=2019&talk=c",as:"/talk/2019/c"},"/#cModal201127":{href:"/talk?year=2019&talk=why3",as:"/talk/2019/why3"},"/#why3Modal271119":{href:"/talk?year=2019&talk=why3",as:"/talk/2019/why3"}};a.d(t,"default",(function(){return pe}));var se=x.a.createElement,ue=function(e){var t=function(e){switch(e){case"/#sobre-nos":return document.getElementById("jump-sobre-nos");case"/#equipa":return document.getElementById("jump-equipa");case"/#talks":return document.getElementById("jump-talks");default:return null}}(e);if(t)window.scrollTo(0,t.offsetTop-90);else{var a=ce[e];a&&(console.log("Redirecting to ",a),E.a.push(a.href,a.as))}};E.a.events.on("routeChangeComplete",ue),E.a.events.on("hashChangeComplete",ue);var pe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,b(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=y()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){var e,t=document.querySelector("#jss-server-side");null===t||void 0===t||null===(e=t.parentElement)||void 0===e||e.removeChild(t),ue(location.pathname+location.hash)}},{key:"render",value:function(){var e=this.props,t=e.Component,a=e.pageProps;return se(x.a.Fragment,null,se(_,{theme:le},se(R,null),se(Y,null),se(t,a),se(oe,null)))}}])&&r(a.prototype,n),o&&r(a,o),t}(O.a)},uEZo:function(e,t,a){"use strict";var n=a("ne5w"),o=a("ch4j"),r=a("5Ge6"),i=a("bK6F"),l=a("9LHW"),c=a("Exlf"),s=a("Le8Y"),u=a("bmAt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var p=u(a("o/f9")),f=a("5Wtn");function d(e){var t,a,n;return s.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,a=e.ctx,o.next=3,s.awrap((0,f.loadGetInitialProps)(t,a));case 3:return n=o.sent,o.abrupt("return",{pageProps:n});case 5:case"end":return o.stop()}}))}t.AppInitialProps=f.AppInitialProps;var h=function(e){function t(){return o(this,t),i(this,l(t).apply(this,arguments))}return c(t,e),r(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,a=e.Component,o=e.pageProps,r=m(t);return p.default.createElement(a,n({},o,{url:r}))}}]),t}(p.default.Component);function m(e){var t=e.pathname,a=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return a},back:function(){e.back()},push:function(t,a){return e.push(t,a)},pushTo:function(t,a){var n=a?t:"",o=a||t;return e.push(n,o)},replace:function(t,a){return e.replace(t,a)},replaceTo:function(t,a){var n=a?t:"",o=a||t;return e.replace(n,o)}}}t.default=h,h.origGetInitialProps=d,h.getInitialProps=d}},[[0,1,2,0,3,4,5]]]);