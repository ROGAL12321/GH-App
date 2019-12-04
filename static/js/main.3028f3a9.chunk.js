(this["webpackJsonpgh-app"]=this["webpackJsonpgh-app"]||[]).push([[0],{122:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(57),i=t(18),c=t(35),l=t(4),u={siteWidth:"680px",colorMain:"#3f51b5",colorSecondary:"#F94983",fontColorMain:"#000",fontColorSecondary:"#fff",fontColorThird:"#666",fontSizeSmall:"14px",fontSizeMedium:"16px",fontSizeLarge:"20px",fontWeightMedium:"500",fontWeightBold:"700"},f=t(5),m=t(58),s=t.n(m);function d(){var n=Object(f.a)(["\n  ",'\n\n  body {\n    font-family: "Roboto", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #EEE;\n    letter-spacing: 0.1px;\n    line-height: 1.6;\n  }\n\n  a {\n    text-decoration: none;\n  }\n']);return d=function(){return n},n}var h=Object(l.createGlobalStyle)(d(),s.a);function p(){var n=Object(f.a)(["\n  max-width: ",";\n  padding: 0 1.25em;\n  margin: 0 auto;\n"]);return p=function(){return n},n}var b=l.default.div(p(),(function(n){return n.theme.siteWidth}));function g(){var n=Object(f.a)(["\n  box-shadow:\n    0 2px 4px -1px rgba(0,0,0,.2),\n    0 4px 5px 0 rgba(0,0,0,.14),\n    0 1px 10px 0 rgba(0,0,0,.12);\n  color: ",";\n  padding: 1.5em;\n  max-width: ",";\n  box-sizing: border-box;\n  margin: 40px auto;\n  background: ",";\n"]);return g=function(){return n},n}var v=l.default.div(g(),(function(n){return n.theme.fontColorMain}),(function(n){return n.theme.siteWidth}),(function(n){return n.theme.fontColorSecondary}));function E(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return E=function(){return n},n}function w(){var n=Object(f.a)(["\n  background: ",";\n  font-size: ",";\n  min-height: 64px;\n  box-sizing: border-box;\n  padding: 1.25em 0;\n"]);return w=function(){return n},n}var x=l.default.header(w(),(function(n){return n.theme.colorMain}),(function(n){return n.theme.fontSizeLarge})),y=l.default.div(E()),O=t(44),j=t.n(O),S=t(60),k=t(25),C=t(61),z=t.n(C),M=t(33),R=t(23),W=function(n){return n?new M.a({uri:"https://api.github.com/graphql",headers:{Authorization:"Bearer ".concat(n)},cache:new R.a}):null},T=function(n,e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(n);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},A=t(45),L=t.n(A),B=function(n,e){return L.a.setItem(n,e)},U=Object(c.createStore)((function(){var n=Object(r.useState)(""),e=Object(k.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(null),i=Object(k.a)(o,2),c=i[0],l=i[1],u=Object(r.useState)({}),f=Object(k.a)(u,2),m=f[0],s=f[1],d=Object(r.useState)(!1),h=Object(k.a)(d,2),p=h[0],b=h[1],g=function(n){var e=n.data,t=T("?".concat(e),"access_token");if(!t)return b(!1);B("GITHUB_TOKEN",t),l(W(t)),b(!1)};return{searchName:t,search:function(){var n=Object(S.a)(j.a.mark((function n(e){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a(e);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),authorize:function(){window.location.href="".concat("https://github.com/login/oauth","/authorize?client_id=").concat("b2f214fbb5b8617ff32f","&scope=user")},apolloClient:c,initApolloClient:function(){var n,e=T(window.location.href,"code"),t=(n="GITHUB_TOKEN",L.a.getItem(n));e&&(t?l(W(t)):function(n){z()({method:"post",url:"".concat("https://github.com/login/oauth","/access_token"),params:{client_id:"b2f214fbb5b8617ff32f",client_secret:"540620733add227ed4cec4723902548779936896",code:n}}).then(g).catch((function(){s({cors:"CORS Error"}),b(!1)}))}(e))},logout:function(){B("GITHUB_TOKEN",""),l(null)},fetching:p,errors:m}}));function F(){var n=Object(f.a)(["\n  margin: 10px 0;\n  color: ",";\n  font-size: 12px;\n"]);return F=function(){return n},n}function G(){var n=Object(f.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return G=function(){return n},n}function q(){var n=Object(f.a)(["\n  font-size: ",";\n  color: ",";\n  word-break: break-all;\n"]);return q=function(){return n},n}function I(){var n=Object(f.a)(["\n  color: ",";\n  text-align: ",";\n  font-size: ",";\n  font-weight: ",";\n  border-bottom: 1px solid #E0E0E0;\n  padding-bottom: 16px;\n  word-break: break-all;\n"]);return I=function(){return n},n}function N(){var n=Object(f.a)(["\n  font-weight: ",";\n  text-decoration: none;\n  color: ",";\n  word-break: break-all;\n"]);return N=function(){return n},n}var _=l.default.h1(N(),(function(n){return n.theme.fontWeightBold}),(function(n){return n.theme.fontColorSecondary})),P=l.default.h2(I(),(function(n){return n.secondary?n.theme.colorSecondary:n.theme.colorMain}),(function(n){return n.centered?"center":"left"}),(function(n){return n.theme.fontSizeLarge}),(function(n){return n.theme.fontWeightMedium})),$=l.default.h3(q(),(function(n){return n.theme.fontSizeLarge}),(function(n){return n.theme.fontColorMain})),H=(l.default.small(G(),(function(n){return n.theme.colorSecondary})),l.default.p(F(),(function(n){return n.theme.colorMain})));function D(){var n=Object(f.a)(["\n  box-shadow:\n    0 2px 2px 0 rgba(0,0,0,.14),\n    0 3px 1px -2px rgba(0,0,0,.2),\n    0 1px 5px 0 rgba(0,0,0,.12);\n  background: ",";\n  color: ",";\n  border: 0;\n  border-radius: 2px;\n  font-size: ",";\n  padding: 6px 1em;\n  font-weight: ",";\n"]);return D=function(){return n},n}function K(){var n=Object(f.a)(["\n  text-align: ",";\n"]);return K=function(){return n},n}var J=l.default.div(K(),(function(n){return n.position||"center"})),Y=l.default.button(D(),(function(n){return n.disabled?"#fff":n.theme.colorSecondary}),(function(n){return n.disabled?n.theme.fontColorThird:n.theme.fontColorSecondary}),(function(n){return n.theme.fontSizeSmall}),(function(n){return n.theme.fontWeightBold})),Q=function(){var n=U(),e=n.apolloClient,t=n.logout;return a.a.createElement(x,null,a.a.createElement(b,null,a.a.createElement(y,null,a.a.createElement(i.b,{to:"/"},a.a.createElement(_,null,"Github App")),e&&a.a.createElement(Y,{onClick:t},"Logout"))))},V=function(n){var e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,null),a.a.createElement(b,null,a.a.createElement(v,null,e)))},X=t(22),Z=t(11),nn=t(68);function en(){var n=Object(f.a)(["\n  color: ",";\n  display: block;\n  font-size: 12px;\n  margin-bottom: .5em;\n  font-weight: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(f.a)(["\n  border: 0;\n  box-shadow: 0;\n  border-bottom: 1px solid ",";\n  outline: none;\n  display: block;\n  width: 100%;\n  transition: border-bottom .3s ease;\n  padding-bottom: 2px;\n\n  &:focus {\n      border-bottom: 2px solid ",";\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(f.a)(["\n  margin: 1em 0;\n"]);return rn=function(){return n},n}var an=l.default.div(rn()),on=l.default.input(tn(),(function(n){return n.theme.fontColorMain}),(function(n){return n.theme.colorMain})),cn=l.default.label(en(),(function(n){return n.theme.colorMain}),(function(n){return n.theme.fontWeightMedium})),ln=function(n){var e=n.history,t=(n.match,U().search),r=Object(nn.a)(),o=Object(k.a)(r,2),i=o[0],c=o[1].text,l=i.values.query;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null," Github Search "),a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t(i.values.query).then((function(){return e.push("/results")}))}},a.a.createElement(an,null,a.a.createElement(cn,null," Repository name "),a.a.createElement(on,Object.assign({},c("query"),{required:!0}))),a.a.createElement(J,null,a.a.createElement(Y,{disabled:!l,type:"submit"}," Search "))))},un=t(30),fn=t(28);function mn(){var n=Object(f.a)(["\n  float: right;\n  color: ",";\n  font-size: ",";\n  text-decoration: none;\n"]);return mn=function(){return n},n}function sn(){var n=Object(f.a)(["\n  padding: 5px 0;\n  margin-left: 2em;\n  width: 80%;\n"]);return sn=function(){return n},n}function dn(){var n=Object(f.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight:  ",";\n"]);return dn=function(){return n},n}function hn(){var n=Object(f.a)(["\n  text-decoration: none;\n  display: flex;\n  padding: 1em 0;\n  border-bottom: 1px solid #E0E0E0;\n"]);return hn=function(){return n},n}var pn=l.default.li(hn()),bn=l.default.p(dn(),(function(n){return n.theme.fontSizeSmall}),(function(n){return n.theme.fontColorThird}),(function(n){return n.theme.fontWeightMedium})),gn=l.default.div(sn());l.default.small(mn(),(function(n){return n.theme.fontColorMain}),(function(n){return n.theme.fontSizeSmall}));function vn(){var n=Object(f.a)(["\n  float: left;\n"]);return vn=function(){return n},n}function En(){var n=Object(f.a)(["\n  display: block;\n  /* margin: auto; */\n  width: 100%;\n  max-width: ",";\n"]);return En=function(){return n},n}l.default.img(En(),(function(n){return n.big?"100px":"50px"}));var wn=l.default.img(vn()),xn=t(39),yn=t.n(xn);function On(){var n=Object(f.a)(["\n  query($owner: String! $name: String!){\n    repository(owner: $owner name: $name) {\n      id\n      name\n      description\n      stargazers {\n        totalCount\n      }\n      owner {\n        login\n        avatarUrl\n      }\n      primaryLanguage {\n        id\n        name\n      }\n      updatedAt\n    }\n  }\n"]);return On=function(){return n},n}function jn(){var n=Object(f.a)(["\n  query($name: String!){\n    search(query: $name, type: REPOSITORY, first: 10) {\n\n      repositoryCount\n      nodes {\n          ... on Repository {\n            id\n            name\n            description\n            stargazers {\n              totalCount\n            }\n            owner {\n              login\n              avatarUrl\n            }\n            primaryLanguage {\n              id\n              name\n            }\n            updatedAt\n          }\n      }\n    }\n  }\n"]);return jn=function(){return n},n}var Sn=Object(M.b)(jn()),kn=Object(M.b)(On()),Cn=t(70),zn=t.n(Cn);function Mn(){var n=Object(f.a)(["\n  text-align: center;\n"]);return Mn=function(){return n},n}var Rn=l.default.div(Mn()),Wn=function(){return a.a.createElement(Rn,null,a.a.createElement(zn.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}))},Tn=function(n){var e=n.history,t=U().searchName,r=Object(un.a)(Sn,{variables:{name:t}}),o=r.loading,c=r.error,l=r.data;if(o)return a.a.createElement(Wn,null);c&&e.push("/");var u=l.search.nodes;return 0===u.length&&e.push("/"),a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{centered:!0},"Github Repos",a.a.createElement(i.b,{to:"/"},a.a.createElement(wn,{src:yn.a,alt:"Back"}))),a.a.createElement("ul",null,u.map((function(n){var e=n.id,t=n.name,r=n.description,o=n.primaryLanguage,c=n.owner,l=n.stargazers;return a.a.createElement(pn,{key:e},a.a.createElement(fn.b,{src:c.avatarUrl,sx:{width:"100px",height:"100px",margin:"auto",borderRadius:50}}),a.a.createElement(gn,null,a.a.createElement($,null,t," (",c.login,") (",l.totalCount," stars)"),a.a.createElement(bn,null,r),o&&a.a.createElement(H,null," #",o.name," "),a.a.createElement(J,{position:"right"},a.a.createElement(i.b,{to:"".concat("/details","/").concat(c.login,"/").concat(t)},a.a.createElement(Y,null," Show more ")))))}))))};function An(){var n=Object(f.a)(["\n  color: ",";\n"]);return An=function(){return n},n}function Ln(){var n=Object(f.a)(["\n  color: ",";\n  margin: .5em 0;\n"]);return Ln=function(){return n},n}var Bn=l.default.li(Ln(),(function(n){return n.theme.fontColorThird})),Un=l.default.span(An(),(function(n){return n.theme.colorMain})),Fn=function(n){var e=n.history,t=n.match,r=Object(un.a)(kn,{variables:{name:t.params.name,owner:t.params.owner}}),o=r.loading,c=r.error,l=r.data;if(!t.params||!t.params.name||!t.params.owner||c)return e.push("/"),null;if(o)return a.a.createElement(Wn,null);var u=l.repository,f=u.owner,m=u.name,s=u.stargazers,d=u.primaryLanguage;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{centered:!0},"Repository Detail",a.a.createElement(i.b,{to:"/results"},a.a.createElement(wn,{src:yn.a,alt:"Back"}))),a.a.createElement(fn.a,{mt:4},a.a.createElement(P,{secondary:!0},"Owner"),a.a.createElement(fn.b,{sx:{width:"100px",height:"100px",margin:"auto"},mt:4,src:f.avatarUrl,alt:"Owner"}),a.a.createElement("ul",null,a.a.createElement(Bn,null," Login: ",a.a.createElement(Un,null,f.login)," "),f.description&&a.a.createElement(Bn,null,"Description: ",a.a.createElement(Un,null,f.description)))),a.a.createElement(fn.a,null,a.a.createElement(P,{secondary:!0},"Repository"),a.a.createElement("ul",null,a.a.createElement(Bn,null," Name: ",a.a.createElement(Un,null,m)," "),a.a.createElement(Bn,null,"Stars: ",a.a.createElement(Un,null,s.totalCount)),d&&a.a.createElement(Bn,null,"Primary language: ",a.a.createElement(Un,null,d.name)))))},Gn=function(){var n=U(),e=n.authorize,t=n.initApolloClient,o=n.apolloClient,i=n.errors,c=n.fetching;return Object(r.useEffect)(t,[]),c?a.a.createElement(Wn,null):o?a.a.createElement(Z.a,{client:o},a.a.createElement(X.c,null,a.a.createElement(X.a,{exact:!0,path:"/",component:ln}),a.a.createElement(X.a,{path:"/results",component:Tn}),a.a.createElement(X.a,{path:"/details/:owner/:name",component:Fn}))):a.a.createElement(a.a.Fragment,null,i.cors&&a.a.createElement(P,{centered:!0},"Make sure you have CORS enabled in your browser"),a.a.createElement(J,null,a.a.createElement(Y,{disabled:i.cors,onClick:e}," Login ")))},qn=function(){return a.a.createElement(i.a,null,a.a.createElement(l.ThemeProvider,{theme:u},a.a.createElement(c.ReusableProvider,null,a.a.createElement(V,null,a.a.createElement(Gn,null)),a.a.createElement(h,null))))},In=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Nn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}t(121);Object(o.render)(a.a.createElement(qn,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/GH-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/GH-App","/service-worker.js");In?(!function(n,e){fetch(n).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Nn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Nn(e,n)}))}}()},39:function(n,e,t){n.exports=t.p+"static/media/arrow.9c0790b9.svg"},72:function(n,e,t){n.exports=t(122)}},[[72,1,2]]]);
//# sourceMappingURL=main.3028f3a9.chunk.js.map