(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(64)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),o=n(2),l=Object(a.createContext)({tree:null,treey:null}),i=n(1),s=n.n(i),m=n(3),f=n(4),p=n.n(f),v=p.a.treey,d=v.init,E=v.read,h=v.createAndAdd,w=v.update,b=v.remove,g=v.move,x=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(function(){Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}},e)}))()},[]);var c={read:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),createAndAdd:function(){var e=Object(m.a)(s.a.mark(function e(t,n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n);case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(m.a)(s.a.mark(function e(t,n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,n);case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(m.a)(s.a.mark(function e(t,n,a){var c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,n,a);case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),move:function(){var e=Object(m.a)(s.a.mark(function e(t,n,a,c,u){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n,a,c,u);case 2:o=e.sent,r(o);case 4:case"end":return e.stop()}},e)}));return function(t,n,a,r,c){return e.apply(this,arguments)}}()};return[n,c]},y=function(e){var t=e.children,n=x(),a=Object(o.a)(n,2),c={tree:a[0],treey:a[1]};return r.a.createElement(l.Provider,{value:c},t)},O=function(){throw new Error("UIContext not implemented")},j={isShownForm:O,setShownForm:O,unsetShownForm:O},k=Object(a.createContext)(j),S=function(e){Object(a.useEffect)(function(){var t=function(t){27===t.keyCode&&(t.preventDefault(),e())};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}},[e])},N=p.a.utils.createFullName,C=function(e){var t=e.children,n=Object(a.useState)(),c=Object(o.a)(n,2),u=c[0],l=c[1],i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.map(function(e){return N(e)});return(t?n.concat("add"):n).join("/")},s=function(){return l(void 0)};S(s),Object(a.useEffect)(function(){return window.addEventListener("click",s),function(){return window.removeEventListener("click",s)}},[]);var m={isShownForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u===i(e,t)},setShownForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l(i(e,t))},unsetShownForm:s};return r.a.createElement(k.Provider,{value:m},t)},F=n(5),D=(n(53),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement(F.a,{to:"/"},r.a.createElement("h1",null,r.a.createElement("img",{src:"/treey-react/images/logo_64x64.png",width:"32px",height:"32px",alt:"\u6728"})),r.a.createElement("h2",null,"treey")))}),I=(n(54),function(){return r.a.createElement("p",{className:"spinner"},"is loading\u2026")}),A=(n(55),function(e){var t=e.type,n=e.onClick,a="Button "+t,c={backgroundImage:'url("'.concat("/treey-react","/images/").concat(function(e){switch(e){case"ADD":return"add_64x64.png";case"EDIT":return"submit_64x64.png";case"DELETE":return"remove_64x64.png"}}(t),'")')};return r.a.createElement("button",{className:a,style:c,onClick:n,title:t},t)}),P=function(e){var t=e.data,n=/^https?:\/\//.test(t);return r.a.createElement("span",{className:"ItemData"},n?r.a.createElement("a",{href:t,onClick:function(e){return e.stopPropagation()}},t):t)},L=function(e){return e[e.length-1]},T=(n(56),function(e){var t=e.parents,n=e.index,c=e.item,u=function(e){return e.state.ids&&e.state.ids[0]}(c),i=L(t),f=u?t.concat(u):t,p=function(e){return e.state&&e.state.data}(c),v=(/^https?:\/\//.test(p),Object(a.useState)(p)),d=Object(o.a)(v,2),E=d[0],h=d[1],w=Object(a.useState)(!1),b=Object(o.a)(w,2),g=b[0],x=b[1],y=Object(a.useContext)(l).treey,O=Object(a.useContext)(k),j=O.isShownForm,S=O.setShownForm,N=O.unsetShownForm,C=j(f),D=!C,I=C,T=u&&g,B="/item/".concat(c.name),_=function(){var e=Object(m.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=y){e.next=2;break}return e.abrupt("return");case 2:if(null!=u){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,y.remove(u,i,n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null!=y){e.next=3;break}return e.abrupt("return");case 3:if(null!=u){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,y.update(u,E);case 7:N();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Item",onClick:function(e){return e.stopPropagation()}},D&&r.a.createElement("div",{className:"ItemBody"},r.a.createElement("span",{onClick:function(){var e=window.getSelection();e&&""!==e.toString()||x(!g)}},r.a.createElement(P,{data:p}),r.a.createElement(F.a,{to:B,className:"info"},"\u24d8")),r.a.createElement(A,{type:"EDIT",onClick:function(){return S(f)}}),r.a.createElement(A,{type:"DELETE",onClick:_})),I&&r.a.createElement("form",{onSubmit:H},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;h(t)},value:E,autoFocus:!0}),r.a.createElement(A,{type:"EDIT"})),u&&f&&T&&r.a.createElement(J,{parents:f,items:c.relations}))}),B=(n(57),function(e){var t=e.parents,n=L(t),c=Object(a.useState)(""),u=Object(o.a)(c,2),i=u[0],f=u[1],p=Object(a.useContext)(l).treey,v=Object(a.useContext)(k),d=v.isShownForm,E=v.setShownForm,h=v.unsetShownForm,w=d(t,!0),b=!w,g=function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null!=p){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,p.createAndAdd(i,n);case 5:h(),f("");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"FormAdd"},b&&r.a.createElement(A,{onClick:function(){return E(t,!0)},type:"ADD"}),w&&r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;f(t)},value:i,autoFocus:!0}),r.a.createElement(A,{type:"ADD"})))}),J=(n(58),function(e){var t=e.parents,n=e.items,a=n.length>0;return r.a.createElement("div",{className:"Items"},a&&r.a.createElement("ul",null,n.map(function(e,n){return r.a.createElement("li",{key:e.name},r.a.createElement(T,{parents:t,index:n,item:e}))})),r.a.createElement(B,{parents:t}))}),_=(n(59),function(e){var t=e.tree,n=(e.treey,t&&t.relations),a=t&&t.state.ids&&t.state.ids[0],c=[a];return r.a.createElement("div",{className:"Tree"},a&&r.a.createElement(J,{parents:c,items:n}))}),H=(n(60),function(){var e=Object(a.useContext)(l),t=e.tree,n=e.treey,c=null==t,u=null!=t&&null!=n,o=null!=t?t.name:"";return r.a.createElement("div",{className:"Page PageHome"},c&&r.a.createElement(I,null),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"RootItem"},o),r.a.createElement(_,{tree:t,treey:n})))}),W=(n(61),p.a.utils.parseFullName),R=function(e){var t=e.fullName,n=Object(a.useState)(),c=Object(o.a)(n,2),u=c[0],i=c[1],f=Object(a.useState)(!1),p=Object(o.a)(f,2),v=p[0],d=p[1],E=Object(a.useState)(!1),h=Object(o.a)(E,2),w=h[0],b=h[1],g=Object(a.useContext)(l).treey;Object(a.useEffect)(function(){if(null!=g){var e=W(t);null!=e?Object(m.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.read(e);case 2:void 0!==(n=t.sent)?i(n):d(!0);case 4:case"end":return t.stop()}},t)}))():b(!0)}},[g,t]);var x=!1===v&&!1===w&&null==u,y=null!=u,O=u&&u.name,j=u&&JSON.stringify(u.state);return r.a.createElement("div",{className:"ItemOverview"},x&&r.a.createElement("p",null,"is loading\u2026"),w&&r.a.createElement("p",null,t," is not valid"),v&&r.a.createElement("p",null,t," not found"),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,O),r.a.createElement("h2",null,"state"),r.a.createElement("p",{className:"small"},j),r.a.createElement("h2",null,"events"),r.a.createElement("ul",null,u&&u.events.map(function(e,t){var n=e.payload?JSON.stringify(e.payload):null,a=null!=n,c=String(e.datetime);return r.a.createElement("li",{key:t},r.a.createElement("strong",null,e.type),r.a.createElement("br",null),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"small"},n),r.a.createElement("br",null)),c)}))))},U=function(e){var t=e.fullName;return r.a.createElement("div",{className:"Page PageItem"},r.a.createElement(R,{fullName:t||""}))},$=(n(62),function(){return r.a.createElement("div",{className:"Page Page404"},r.a.createElement("p",null,"404"))}),q=function(){var e="gilleswittenberg.github.io"===window.location.host?"/treey-react":"/";return r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement("main",null,r.a.createElement(y,null,r.a.createElement(C,null,r.a.createElement(F.b,{basepath:e},r.a.createElement(H,{path:"/"}),r.a.createElement(U,{path:"item/:fullName"}),r.a.createElement($,{default:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(63);u.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.a47a9d42.chunk.js.map