(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),s=n(3),r=n(5),a=n(1),u=(n(12),n(0)),i=function(t){var e=t.goods;return Object(u.jsx)("ul",{className:"List",children:e.map((function(t){return Object(u.jsx)("li",{className:"List__item",children:t},t)}))})},l=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=[1,2,3,4,5,6,7,8,9,10],j=function(){var t=Object(a.useState)([].concat(l)),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),j=Object(r.a)(o,2),h=j[0],d=j[1],O=Object(a.useState)(1),f=Object(r.a)(O,2),p=f[0],m=f[1],g=Object(s.a)(n).filter((function(t){return t.length>=p}));return!0===h?Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Goods"}),Object(u.jsx)(i,{goods:g}),Object(u.jsx)("select",{name:"good",value:p,onChange:function(t){m(+t.target.value)},children:b.map((function(t){return Object(u.jsx)("option",{value:t,children:t},t)}))}),Object(u.jsx)("button",{className:"sort__button",type:"button",onClick:function(){c((function(t){return Object(s.a)(t).reverse()}))},children:"reverse"}),Object(u.jsx)("button",{className:"sort__button",type:"button",onClick:function(){c((function(t){return Object(s.a)(t).sort((function(t,e){return t.length-e.length}))}))},children:"Sort by length"}),Object(u.jsx)("button",{className:"sort__button",type:"button",onClick:function(){c((function(t){return Object(s.a)(t).sort((function(t,e){return t.localeCompare(e)}))}))},children:"Sort by Alphabet"}),Object(u.jsx)("button",{className:"sort__button",type:"button",onClick:function(){c([].concat(l)),m(1)},children:"Reset"})]}):Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)("button",{className:"start",type:"button",onClick:function(){d(!0)},children:"Start"})})};o.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cc8ef028.chunk.js.map