(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(81)},64:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),u=n.n(c),i=n(3),o=Object(r.createContext)({tree:null,treey:null}),s=n(2),l=n.n(s),m=n(4),f=n(7),p=n.n(f),d=p.a.treey,v=d.init,E=d.read,b=d.createAndAdd,g=d.update,h=d.remove,O=d.move,w=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)(function(){Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}},e)}))()},[]);var c={read:function(){var e=Object(m.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),createAndAdd:function(){var e=Object(m.a)(l.a.mark(function e(t,n){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,n);case 2:r=e.sent,a(r);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(m.a)(l.a.mark(function e(t,n){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:r=e.sent,a(r);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(m.a)(l.a.mark(function e(t,n,r){var c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n,r);case 2:c=e.sent,a(c);case 4:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),move:function(){var e=Object(m.a)(l.a.mark(function e(t,n,r,c,u){var i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,n,r,c,u);case 2:i=e.sent,a(i);case 4:case"end":return e.stop()}},e)}));return function(t,n,r,a,c){return e.apply(this,arguments)}}()};return[n,c]},x=function(e){var t=e.children,n=w(),r=Object(i.a)(n,2),c={tree:r[0],treey:r[1]};return a.a.createElement(o.Provider,{value:c},t)},k=function(){throw new Error("UIContext not implemented")},j={isShownForm:k,setShownForm:k,unsetShownForm:k,itemIsOpen:k,setIsOpen:k,unsetIsOpen:k,isDragging:k,itemIsDragging:k,setIsDragging:k,unsetIsDragging:k},y=Object(r.createContext)(j),D=function(e){Object(r.useEffect)(function(){var t=function(t){27===t.keyCode&&(t.preventDefault(),e())};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}},[e])},C=p.a.utils.createFullName,N=function(e){var t=e.children,n=Object(r.useState)(),c=Object(i.a)(n,2),u=c[0],o=c[1],s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.map(function(e){return C(e)});return(t?n.concat("add"):n).join("/")},l=function(){return o(void 0)};D(l),Object(r.useEffect)(function(){return window.addEventListener("click",l),function(){return window.removeEventListener("click",l)}},[]);var m=Object(r.useState)([]),f=Object(i.a)(m,2),p=f[0],d=f[1],v=function(e){var t=s(e);return p.includes(t)},E=Object(r.useState)(),b=Object(i.a)(E,2),g=b[0],h=b[1],O={isShownForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u===s(e,t)},setShownForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o(s(e,t))},unsetShownForm:l,itemIsOpen:v,setIsOpen:function(e){if(!v(e)){var t=s(e);d(p.concat(t))}},unsetIsOpen:function(e){var t=s(e);d(p.filter(function(e){return e!==t}))},isDragging:function(){return void 0!==g},itemIsDragging:function(e){return g===s(e)},setIsDragging:function(e){return h(s(e))},unsetIsDragging:function(){return h(void 0)}};return a.a.createElement(y.Provider,{value:O},t)},I=n(10),S="gilleswittenberg.github.io"===window.location.host?"/treey-react/":"/",F=(n(64),function(){return a.a.createElement("header",{className:"Header"},a.a.createElement(I.a,{to:S},a.a.createElement("h1",null,a.a.createElement("img",{src:"/treey-react/images/logo_64x64.png",width:"32px",height:"32px",alt:"\u6728"})),a.a.createElement("h2",null,"treey")))}),A=(n(65),function(){return a.a.createElement("p",{className:"Spinner"},"is loading\u2026")}),P=n(9),B=n(6),L=n.n(B),T=function(e){var t=e.data,n=/^https?:\/\//.test(t);return a.a.createElement("span",{className:"ItemData"},n?a.a.createElement("a",{href:t,onClick:function(e){return e.stopPropagation()}},t):t)},H=(n(70),function(e){var t=e.type,n=e.onClick,r="Button "+t,c={backgroundImage:'url("'.concat("/treey-react","/images/").concat(function(e){switch(e){case"ADD":return"add_64x64.png";case"EDIT":return"submit_64x64.png";case"DELETE":return"remove_64x64.png"}}(t),'")')};return a.a.createElement("button",{className:r,style:c,onClick:n,title:t},t)}),J=function(e){return e[e.length-1]},W=p.a.utils.createFullName,_=function(e){return e.state.ids&&e.state.ids[0]},R=function(e){return e.state&&e.state.data},M=function(e,t){return e?t.concat(e):t},V=function(e,t){return M(e,t).map(function(e){return W(e)}).join("/")},q=function(e){return"string"===typeof e?e:JSON.stringify(e,void 0,1)},U=function(e){try{return JSON.parse(e)}catch(t){return e}},$=function(e){window.setTimeout(e,1)},z=function(e){var t=e.path,n=e.index,c=e.item,u=e.isOver,s=e.onClick,f=e.onClickAdd,p=e.onClickEdit,d=e.onClickDelete,v=_(c),E=v,b=t.slice(0,-1),g=V(v,b),h=Object(r.useContext)(y),O=h.isDragging,w=h.setIsDragging,x=h.unsetIsDragging,k=h.setIsOpen,j=Object(r.useContext)(o).treey,D=O(),C=Object(r.useState)(!1),N=Object(i.a)(C,2),F=N[0],A=N[1],B=Object(P.c)({item:{type:"item",parents:b,index:n,id:v,name:g},begin:function(){return $(function(){return w(t)})},end:function(){return x()},collect:function(e){return{isDragging:e.isDragging()}}}),W=Object(i.a)(B,2),M=W[0].isDragging,U=W[1],z=c.relations.length>0,G=!z,K=F&&!M&&!D,Q=R(c),X=q(Q),Y="".concat(S,"item/").concat(c.name),Z=Object(P.d)({accept:"item",drop:function(){var e=Object(m.a)(l.a.mark(function e(n,r){var a,c,u,i,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(a=n).id,u=J(a.parents),i=a.index,null!=(o=E)){e.next=7;break}return e.abrupt("return");case 7:if(null!=j){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,j.move(c,u,o,i);case 11:k(t);case 12:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),collect:function(e){return{isOver:e.isOver({shallow:!0}),canDrop:e.canDrop()}}}),ee=Object(i.a)(Z,2),te=ee[0].isOver,ne=ee[1],re=M,ae=u&&!z||te,ce=te;return a.a.createElement("div",{className:L()("ItemBodyWrap",{isHidden:re})},a.a.createElement("div",{ref:U,className:L()("ItemBody",{showAddButton:G,showButtons:K,showDrop:ae}),onMouseEnter:function(){return A(!0)},onMouseLeave:function(){return A(!1)}},a.a.createElement("span",{onClick:s},a.a.createElement(T,{data:X}),a.a.createElement(I.a,{to:Y,className:"info"},"\u24d8")),ae&&a.a.createElement("div",{ref:ne,className:"ItemAddDrop"},a.a.createElement(H,{type:"ADD"})),G&&a.a.createElement(H,{type:"ADD",onClick:f}),a.a.createElement(H,{type:"EDIT",onClick:p}),a.a.createElement(H,{type:"DELETE",onClick:d})),a.a.createElement("div",{className:L()("dnd-placeholder","dnd-placeholder-child",{isShown:ce})},a.a.createElement("div",null)))},G=(n(71),function(e){var t=e.parents,n=e.path,c=e.index,u=e.item,s=e.onClick,f=e.onClickAdd,p=e.onClickEdit,d=e.onClickDelete,v=_(u),E=V(v,t),b=Object(r.useContext)(o).treey,g=Object(r.useRef)(null),h=Object(r.useState)(),O=Object(i.a)(h,2),w=O[0],x=O[1],k=Object(P.d)({accept:"item",canDrop:function(e,t){return t.getItem().name!==E},hover:function(e,t){var n=t.getClientOffset(),r=g&&g.current&&g.current.getBoundingClientRect();if(r&&n){var a=n.y-r.top;x(a<=28?"top":"bottom")}},drop:function(){var e=Object(m.a)(l.a.mark(function e(n,r){var a,u,i,o,s,m;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.didDrop()){e.next=2;break}return e.abrupt("return");case 2:if(u=(a=n).id,i=J(a.parents),o=a.index,s=J(t),m=c+("bottom"===w?1:0)-(i===s&&o<c?1:0),i!==s||o!==m){e.next=10;break}return e.abrupt("return");case 10:if(null!=b){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,b.move(u,i,s,o,m);case 14:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),collect:function(e){return{isOver:e.isOver({shallow:!0}),canDrop:e.canDrop()}}}),j=Object(i.a)(k,2),y=j[0],D=y.canDrop,C=y.isOver,N=j[1],I=C&&D,S=I&&"top"===w,F=I&&"bottom"===w;return a.a.createElement("div",{ref:g},a.a.createElement("div",{ref:N},a.a.createElement("div",{className:L()("dnd-placeholder",{isShown:S})},a.a.createElement("div",null)),a.a.createElement(z,{path:n,index:c,item:u,isOver:C,onClick:s,onClickAdd:f,onClickEdit:p,onClickDelete:d}),a.a.createElement("div",{className:L()("dnd-placeholder",{isShown:F})},a.a.createElement("div",null))))}),K=function(e){var t=e.submit,n=e.initialValue,c=void 0===n?"":n,u=Object(r.useState)(c),o=Object(i.a)(u,2),s=o[0],f=o[1],p=function(){var e=Object(m.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(s);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:p},a.a.createElement("input",{type:"text",value:s,onChange:function(e){f(e.target.value)},ref:function(e){return e&&e.focus()}}),a.a.createElement(H,{type:"EDIT"}))},Q=n(28),X=(n(73),function(e){var t=e.parents,n=e.index,c=e.item,u=_(c),i=J(t),s=M(u,t),f=R(c),p=q(f),d=c.relations.length>0,v=Object(r.useContext)(o).treey,E=function(){var e=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=v){e.next=2;break}return e.abrupt("return");case 2:if(null!=u){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,v.remove(u,i,n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=Object(r.useContext)(y),g=b.isShownForm,h=b.setShownForm,O=b.unsetShownForm,w=b.itemIsOpen,x=b.setIsOpen,k=b.unsetIsOpen,j=b.itemIsDragging,D=w(s),C=g(s),N=j(s),I=N||!C,S=!N&&C,F=!N&&(D&&d||g(s,!0)),A=function(){var e=Object(m.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(O(),""!==(n=t.trim())){e.next=4;break}return e.abrupt("return",E());case 4:if(r=U(n),!Object(Q.isEqual)(f,r)){e.next=7;break}return e.abrupt("return");case 7:if(null!=v){e.next=9;break}return e.abrupt("return");case 9:if(null!=u){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,v.update(u,r);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:L()("Item"),onClick:function(e){return e.stopPropagation()}},a.a.createElement("div",{className:L()({isHidden:!I})},a.a.createElement(G,{parents:t,path:s,index:n,item:c,onClick:function(){g(s,!0)&&O();var e=window.getSelection();if((!e||""===e.toString())&&d)return D?D?k(s):void 0:x(s)},onClickAdd:function(){h(s,!0),x(s)},onClickEdit:function(){return h(s)},onClickDelete:function(){E(),k(s)}})),a.a.createElement("div",{className:L()("ItemFormWrap",{isHidden:!S})},a.a.createElement(K,{submit:A,initialValue:p})),a.a.createElement("div",{className:L()({isHidden:!F})},a.a.createElement(Z,{parents:s,items:c.relations})))}),Y=(n(74),function(e){var t=e.parents,n=Object(r.useContext)(y),c=n.isShownForm,u=n.setShownForm,i=n.unsetShownForm,s=Object(r.useContext)(o).treey,f=c(t,!0),p=!f,d=function(){var e=Object(m.a)(l.a.mark(function e(n){var r,a,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i(),""!==(r=n.trim())){e.next=4;break}return e.abrupt("return");case 4:if(null!==s){e.next=6;break}return e.abrupt("return");case 6:if(void 0!==(a=J(t))){e.next=9;break}return e.abrupt("return");case 9:return c=U(r),e.next=12,s.createAndAdd(c,a);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"FormAdd",onClick:function(e){return e.stopPropagation()}},p&&a.a.createElement(H,{onClick:function(){u(t,!0)},type:"ADD"}),f&&a.a.createElement(K,{submit:d}))}),Z=(n(75),function(e){var t=e.parents,n=e.items,c=Object(r.useContext)(y).isDragging,u=n.length>0,i=!c();return a.a.createElement("div",{className:"Items"},u&&a.a.createElement("ul",null,n.map(function(e,n){return a.a.createElement("li",{key:e.name},a.a.createElement(X,{parents:t,index:n,item:e}))})),i&&a.a.createElement(Y,{parents:t}))}),ee=n(29),te=(n(76),function(e){var t=e.tree,n=(e.treey,t&&t.relations),r=t&&t.state.ids&&t.state.ids[0],c=[r];return a.a.createElement("div",{className:"Tree"},r&&a.a.createElement(P.b,{backend:ee.a},a.a.createElement(Z,{parents:c,items:n})))}),ne=(n(77),function(){var e=Object(r.useContext)(o),t=e.tree,n=e.treey,c=null==t,u=null!=t&&null!=n,i=null!=t?t.name:"";return a.a.createElement("div",{className:"Page PageHome"},c&&a.a.createElement(A,null),u&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"RootItem"},i),a.a.createElement(te,{tree:t,treey:n})))}),re=(n(78),p.a.utils.parseFullName),ae=function(e){var t=e.fullName,n=Object(r.useState)(),c=Object(i.a)(n,2),u=c[0],s=c[1],f=Object(r.useState)(!1),p=Object(i.a)(f,2),d=p[0],v=p[1],E=Object(r.useState)(!1),b=Object(i.a)(E,2),g=b[0],h=b[1],O=Object(r.useContext)(o).treey;Object(r.useEffect)(function(){if(null!=O){var e=re(t);null!=e?Object(m.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.read(e);case 2:void 0!==(n=t.sent)?s(n):v(!0);case 4:case"end":return t.stop()}},t)}))():h(!0)}},[O,t]);var w=!1===d&&!1===g&&null==u,x=null!=u,k=u&&u.name,j=u&&JSON.stringify(u.state,void 0,2);return a.a.createElement("div",{className:"ItemOverview"},w&&a.a.createElement("p",null,"is loading\u2026"),g&&a.a.createElement("p",null,t," is not valid"),d&&a.a.createElement("p",null,t," not found"),x&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,k),a.a.createElement("h2",null,"state"),a.a.createElement("p",{className:"small pre"},j),a.a.createElement("h2",null,"events"),a.a.createElement("ul",null,u&&u.events.reverse().map(function(e,t){var n=e.payload?JSON.stringify(e.payload,void 0,1):null,r=null!=n,c=String(e.datetime);return a.a.createElement("li",{key:t},a.a.createElement("strong",null,e.type),a.a.createElement("br",null),r&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"small"},n),a.a.createElement("br",null)),c)}))))},ce=function(e){var t=e.fullName;return a.a.createElement("div",{className:"Page PageItem"},a.a.createElement(ae,{fullName:t||""}))},ue=(n(79),function(){return a.a.createElement("div",{className:"Page Page404"},a.a.createElement("p",null,"404"))}),ie=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(F,null),a.a.createElement("main",null,a.a.createElement(x,null,a.a.createElement(N,null,a.a.createElement(I.b,{basepath:S},a.a.createElement(ne,{path:"/"}),a.a.createElement(ce,{path:"/item/:fullName"}),a.a.createElement(ue,{default:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(80);u.a.render(a.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.1f358d87.chunk.js.map