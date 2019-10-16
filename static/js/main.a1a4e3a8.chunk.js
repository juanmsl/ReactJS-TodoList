(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"register",(function(){return g})),n.d(a,"unregister",(function(){return b}));var o=n(0),c=n.n(o),r=n(4),l=n.n(r),s=n(2),i=n(1);n(10);function u(e){var t=e.text,n=e.tasks,a=e.onClick,o=e.selected;return c.a.createElement("section",{onClick:a,className:"group-list__item ".concat(o?"selected":"")},c.a.createElement("span",null,t),c.a.createElement("span",null,n.filter((function(e){return e.done})).length,"/",n.length))}function d(e){var t=e.title,n=e.description,a=e.groups,o=e.setGroups,r=e.selectedGroup,l=e.setSelectedGroup,d=c.a.useState(""),p=Object(i.a)(d,2),m=p[0],f=p[1],g=m?"":"disabled",v=!m,b=a.length?"":"disabled",h=!a.length,k=a.length&&null!==r?"":"disabled",E=!a.length||null===r,w=function(e){if(e.preventDefault(),m){var t={text:m,tasks:[]};o([].concat(Object(s.a)(a),[t])),l(a.length),f("")}};return c.a.createElement("form",{onSubmit:w,className:"group-list"},c.a.createElement("section",null,c.a.createElement("h1",{className:"main-title"},t),c.a.createElement("p",{className:"description"},n),c.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),f(e.target.value)},value:m,className:"input"}),c.a.createElement("section",{className:"group-list__buttons"},c.a.createElement("button",{onClick:w,className:"button active ".concat(g),disabled:v},"Add"),c.a.createElement("button",{onClick:function(e){e.preventDefault(),o([]),l(null),f("")},className:"button danger ".concat(b),disabled:h},"Delete all"))),c.a.createElement("section",{className:"group-list__items"},a.map((function(e,t){return c.a.createElement(u,Object.assign({key:t,onClick:function(){l(t)},selected:r===t},e))}))),c.a.createElement("button",{type:"button",className:"button danger ".concat(k),disabled:E,onClick:function(e){e.preventDefault(),a.splice(r,1),o(a),l(null)}},"Delete Group"))}function p(e){var t=e.text,n=e.done,a=e.toggleDone;return c.a.createElement("section",{onClick:a,className:"task-list__item ".concat(n?"done":"")},t)}function m(e){var t=e.group,n=e.updateSelectedGroup,a=c.a.useState(""),o=Object(i.a)(a,2),r=o[0],l=o[1],u=function(e){if(e.preventDefault(),r){var a={text:r,done:!1},o=t.tasks;t.tasks=[].concat(Object(s.a)(o),[a]),n(t),l("")}};return t?c.a.createElement("form",{onSubmit:u,className:"task-list"},c.a.createElement("section",null,c.a.createElement("h2",null,t.text),c.a.createElement("section",{className:"task-list__buttons"},c.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),l(e.target.value)},value:r,className:"input"}),c.a.createElement("button",{onClick:u,className:"button"},"Add"),c.a.createElement("button",{onClick:function(e){e.preventDefault(),t.tasks=[],n(t),l("")},className:"button danger"},"Delete all"))),c.a.createElement("section",{className:"task-list__items"},t?t.tasks.map((function(e,a){return c.a.createElement(p,Object.assign({key:a},e,{toggleDone:function(){t.tasks[a].done=!e.done,n(t)}}))})):c.a.createElement("p",null,"No project selected"))):c.a.createElement("section",{className:"task-list"},c.a.createElement("p",null,"No project selected"))}d.defaultProps={groups:[]},m.defaultProps={tasks:[]};var f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){if("serviceWorker"in navigator){if(new URL("/ReactJS-TodoList",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ReactJS-TodoList","/service-worker.js");f?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function b(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}l.a.render(c.a.createElement((function(){var e=c.a.useState([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=c.a.useState(null),r=Object(i.a)(o,2),l=r[0],u=r[1];return c.a.createElement("main",{className:"todolist-app"},c.a.createElement(d,{title:"Todo List",description:"In this list you can add a project to start planning your tasks about it",groups:n,setGroups:a,selectedGroup:l,setSelectedGroup:u}),c.a.createElement(m,{group:n[l],updateSelectedGroup:function(e){var t=Object(s.a)(n);t[l]=e,a(t)}}))}),null),document.getElementById("root")),a.register()},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.a1a4e3a8.chunk.js.map