"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{221:function(e,n,t){var r=t(689),i=t(87),o=t(184);n.Z=function(e){var n=e.movies,t=(e.isHome,(0,r.TH)());return(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}},415:function(e,n,t){t.r(n);var r=t(433),i=t(861),o=t(439),c=t(757),u=t.n(c),a=t(791),s=t(221),f=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,o.Z)(e,2),t=n[0],c=n[1];(0,a.useEffect)((function(){v()}),[]);var v=function(){var e=(0,i.Z)(u().mark((function e(){var n,t,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=72798596a23321893a7ef47e798d0f72");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i=(0,r.Z)(t.results),c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(s.Z,{isHome:!0,movies:t})]})}},861:function(e,n,t){function r(e,n,t,r,i,o,c){try{var u=e[o](c),a=u.value}catch(s){return void t(s)}u.done?n(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var c=e.apply(n,t);function u(e){r(c,i,o,u,a,"next",e)}function a(e){r(c,i,o,u,a,"throw",e)}u(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=415.cf1fb179.chunk.js.map