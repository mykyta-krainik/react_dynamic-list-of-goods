(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,n,o){},11:function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),r=o(4),i=o(1);function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var u=o(0),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},d=(o(10),function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=function(t){e(t)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return s().then(c)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then(c)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(c)},children:"Load red goods"}),Object(u.jsx)(a,{goods:o})]})});c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.29c5d850.chunk.js.map