(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},30:function(e,t,a){e.exports=a(67)},35:function(e,t,a){},36:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),r=a.n(l),i=a(1),u=a(29),o=a(12),m=a(26),s=a.n(m);a(35);var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"})))},p=(a(36),function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"navigation"},c.a.createElement(o.a,{to:"/",activeClassName:"lien-active",className:"lien"},"Accueil"),c.a.createElement(o.a,{to:"/about",activeClassName:"lien-active",className:"lien"},"About"),c.a.createElement(o.a,{to:"/news",activeClassName:"lien-active",className:"lien"},"News")))}),E=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("h1",null,"\xc0 propos"),c.a.createElement("br",null),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos deleniti tempore ad quis, accusamus fugiat maiores recusandae dignissimos? Obcaecati recusandae minima, repellendus laudantium officiis optio temporibus eaque tempore perferendis, ut earum adipisci expedita vel, illo eligendi architecto iusto aspernatur similique!"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos deleniti tempore ad quis, accusamus fugiat maiores recusandae dignissimos? Obcaecati recusandae minima, repellendus laudantium officiis optio temporibus eaque tempore perferendis, ut earum adipisci expedita vel, illo eligendi architecto iusto aspernatur similique!"))},f=a(5),v=a(8),b=a.n(v);a(63);var g=function(e){var t=e.country;return c.a.createElement("li",{className:"card"},c.a.createElement("img",{src:t.flags.svg,alt:t.name.common}),c.a.createElement("div",{className:"datacontener"},c.a.createElement("ul",null,c.a.createElement("li",null,t.name.common),c.a.createElement("li",null,t.capital),c.a.createElement("li",null,"".concat(t.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")," Hbts")))))},h=(a(64),function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!0),i=Object(f.a)(r,2),u=i[0],o=i[1],m=Object(n.useState)(30),s=Object(f.a)(m,2),d=s[0],p=s[1],E=Object(n.useState)([]),v=Object(f.a)(E,2),h=v[0],O=v[1],j=Object(n.useState)(""),w=Object(f.a)(j,2),N=w[0],y=w[1];return Object(n.useEffect)(function(){u&&(b.a.get("https://restcountries.com/v3.1/all?fields=flags,name,population,capital,region").then(function(e){return l(e.data)}),o(!1)),function(){var e=Object.keys(a).map(function(e){return a[e]}).sort(function(e,t){return t.population-e.population});e.length=d,O(e)}()},[a,u,d]),c.a.createElement("div",{className:"countries"},c.a.createElement("div",{className:"sorcontener"},c.a.createElement("input",{type:"range",value:d,min:"1",max:"250",onChange:function(e){return p(e.target.value)}}),c.a.createElement("ul",null,["Africa","America","Asia","Europe","Oceania"].map(function(e){return c.a.createElement("li",{key:e},c.a.createElement("input",{type:"radio",id:e,value:e,checked:e===N,onChange:function(e){return y(e.target.value)}}),c.a.createElement("label",{htmlFor:e},e))}))),c.a.createElement("div",{className:"annuler"},N&&c.a.createElement("h5",{onClick:function(){return y("")}},"Retour \xe0 l'Accueil")),c.a.createElement("ul",{className:"listcountries"},h.filter(function(e){return e.region.includes(N)}).map(function(e){return c.a.createElement(g,{key:e.name.official,country:e})})))}),O=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("h1",null,"Accueil"),c.a.createElement(h,null))},j=(a(65),function(e){var t=e.id;return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){window.confirm("Voulez-vous vraiment supprimer?")&&function(){var e="http://localhost:3003/articles/".concat(t);b.a.delete(e),window.location.reload()}()}},"Supprimer"))}),w=function(e){var t=e.article,a=Object(n.useState)(!1),l=Object(f.a)(a,2),r=l[0],i=l[1],u=Object(n.useState)(""),o=Object(f.a)(u,2),m=o[0],s=o[1];return c.a.createElement("div",{className:"article-container",style:{background:r?"#f3feff":"white"}},c.a.createElement("div",{className:"container-auth-post"},c.a.createElement("h3",null,t.author),c.a.createElement("em",null,"Post\xe9 le  ".concat((t.date,(new Date).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}))))),r?c.a.createElement("textarea",{autoFocus:!0,defaultValue:m||t.content,style:{width:"100%"},onChange:function(e){return s(e.target.value)}}):c.a.createElement("p",null,m||t.content),c.a.createElement("div",{className:"container-btns"},r?c.a.createElement("button",{onClick:function(){i(!1);var e=t.id,a={author:t.author,content:m||t.content,date:Date.now()},n="http://localhost:3003/articles/".concat(e);b.a.put(n,a)}},"Valider"):c.a.createElement("button",{onClick:function(){return i(!0)}},"Edit"),c.a.createElement(j,{id:t.id})))},N=(a(66),function(){var e="http://localhost:3003/articles",t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(""),u=Object(f.a)(i,2),o=u[0],m=u[1],s=Object(n.useState)(""),d=Object(f.a)(s,2),E=d[0],v=d[1],g=Object(n.useState)(!1),h=Object(f.a)(g,2),O=h[0],j=h[1],N=function(){b.a.get(e).then(function(e){return r(e.data)})};Object(n.useEffect)(function(){N()},[]);return c.a.createElement("div",{className:"contener-news"},c.a.createElement(p,null),c.a.createElement("h1",null,"News"),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),E.length<120?j(!0):b.a.post(e,{author:o,content:E,date:Date.now()}).then(function(){j(!1),N(),m(""),v("")})}},c.a.createElement("input",{placeholder:"nom",onChange:function(e){return m(e.target.value)},value:o}),c.a.createElement("textarea",{placeholder:"message",onChange:function(e){return v(e.target.value)},value:E,style:O?{border:"1px solid red"}:{border:"1px solid green"}}),O?c.a.createElement("em",{style:{color:"red"}},"Veuillez saisir un texte de 140 mots "):c.a.createElement("em",{style:{color:"green"}},"Formulaire envoy\xe9 "),c.a.createElement("input",{type:"submit",value:"Envoyer"})),c.a.createElement("ul",null,l.sort(function(e,t){return t.date-e.date}).map(function(e){return c.a.createElement(w,{key:e.id,article:e})})))});var y=function(){return c.a.createElement("div",null,c.a.createElement(u.BrowserRouter,{basename:"/"},c.a.createElement(i.Switch,null,c.a.createElement(i.Route,{exact:!0,path:"/",component:O}),c.a.createElement(i.Route,{path:"/about",component:E}),c.a.createElement(i.Route,{path:"/news",component:N}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f0ec7296.chunk.js.map