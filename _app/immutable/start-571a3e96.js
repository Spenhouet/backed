var He=Object.defineProperty;var We=(n,e,t)=>e in n?He(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ge=(n,e,t)=>(We(n,typeof e!="symbol"?e+"":e,t),t);import{S as Me,i as Xe,s as Ye,a as Qe,e as J,c as Ze,b as W,g as ie,t as K,d as le,f as x,h as F,j as et,o as be,k as tt,l as rt,m as nt,n as we,p as C,q as at,r as st,u as ot,v as M,w as Re,x as X,y as Y,z as Ce}from"./chunks/index-4a6ca82f.js";import{g as qe,f as Be,s as H,a as ve,i as it}from"./chunks/singletons-188eb9f5.js";import{s as lt}from"./chunks/paths-6cd3a76e.js";const ct=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ft=function(n,e){return new URL(n,e).href},ze={},T=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ft(o,l),o in ze)return;ze[o]=!0;const u=o.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":ct,u||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),u)return new Promise((w,m)=>{c.addEventListener("load",w),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class se{constructor(e,t){ge(this,"name","HttpError");ge(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Je{constructor(e,t){this.status=e,this.location=t}}function ut(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function dt(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const pt=["href","pathname","search","searchParams","toString","toJSON"];function ht(n,e){const t=new URL(n);for(const l of pt){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,u)=>u(n,o),mt(t),t}function mt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}const Le=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;oe.delete(l)}return Le(n,e)};const oe=new Map;function gt(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${_t(t.body)}"]`);const u=document.querySelector(o);if(u!=null&&u.textContent){const{body:r,...c}=JSON.parse(u.textContent),w=u.getAttribute("data-ttl");return w&&oe.set(e,{body:r,init:c,ttl:1e3*Number(w)}),Promise.resolve(new Response(r,c))}return Le(n,t)}function wt(n,e){const t=oe.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(n)}return Le(n,e)}const yt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(n){const e=[],t=[];let l=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(vt).map((u,r,c)=>{const w=decodeURIComponent(u),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const v=r===c.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((S,L)=>{if(L%2){const D=yt.exec(S);if(!D)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,V,q]=D;return e.push(V),t.push(q),A?"(.*?)":"([^/]+?)"}return v&&S.includes(".")&&(l=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function vt(n){return!/^\([^)]+\)$/.test(n)}function Et(n,e,t,l){const o={};for(let u=0;u<e.length;u+=1){const r=e[u],c=t[u],w=n[u+1]||"";if(c){const m=l[c];if(!m)throw new Error(`Missing "${c}" param matcher`);if(!m(w))return}o[r]=w}return o}function kt(n,e,t,l){const o=new Set(e);return Object.entries(t).map(([c,[w,m,v]])=>{const{pattern:S,names:L,types:D}=bt(c),A={id:c,exec:V=>{const q=S.exec(V);if(q)return Et(q,L,D,l)},errors:[1,...v||[]].map(V=>n[V]),layouts:[0,...m||[]].map(r),leaf:u(w)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function u(c){const w=c<0;return w&&(c=~c),[w,n[c]]}function r(c){return c===void 0?c:[o.has(c),n[c]]}}function Rt(n,e){return new se(n,e)}function Lt(n){let e,t,l;var o=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return o&&(e=new o(u(n))),{c(){e&&M(e.$$.fragment),t=J()},l(r){e&&Re(e.$$.fragment,r),t=J()},m(r,c){e&&X(e,r,c),W(r,t,c),l=!0},p(r,c){const w={};if(c&4&&(w.data=r[2]),c&2&&(w.form=r[1]),o!==(o=r[0][0])){if(e){ie();const m=e;K(m.$$.fragment,1,0,()=>{Y(m,1)}),le()}o?(e=new o(u(r)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){l||(e&&x(e.$$.fragment,r),l=!0)},o(r){e&&K(e.$$.fragment,r),l=!1},d(r){r&&F(t),e&&Y(e,r)}}}function St(n){let e,t,l;var o=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[$t]},$$scope:{ctx:r}}}}return o&&(e=new o(u(n))),{c(){e&&M(e.$$.fragment),t=J()},l(r){e&&Re(e.$$.fragment,r),t=J()},m(r,c){e&&X(e,r,c),W(r,t,c),l=!0},p(r,c){const w={};if(c&4&&(w.data=r[2]),c&523&&(w.$$scope={dirty:c,ctx:r}),o!==(o=r[0][0])){if(e){ie();const m=e;K(m.$$.fragment,1,0,()=>{Y(m,1)}),le()}o?(e=new o(u(r)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){l||(e&&x(e.$$.fragment,r),l=!0)},o(r){e&&K(e.$$.fragment,r),l=!1},d(r){r&&F(t),e&&Y(e,r)}}}function $t(n){let e,t,l;var o=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return o&&(e=new o(u(n))),{c(){e&&M(e.$$.fragment),t=J()},l(r){e&&Re(e.$$.fragment,r),t=J()},m(r,c){e&&X(e,r,c),W(r,t,c),l=!0},p(r,c){const w={};if(c&8&&(w.data=r[3]),c&2&&(w.form=r[1]),o!==(o=r[0][1])){if(e){ie();const m=e;K(m.$$.fragment,1,0,()=>{Y(m,1)}),le()}o?(e=new o(u(r)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){l||(e&&x(e.$$.fragment,r),l=!0)},o(r){e&&K(e.$$.fragment,r),l=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Ke(n){let e,t=n[5]&&xe(n);return{c(){e=tt("div"),t&&t.c(),this.h()},l(l){e=rt(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);t&&t.l(o),o.forEach(F),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(l,o){W(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=xe(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&F(e),t&&t.d()}}}function xe(n){let e;return{c(){e=at(n[6])},l(t){e=st(t,n[6])},m(t,l){W(t,e,l)},p(t,l){l&64&&ot(e,t[6])},d(t){t&&F(e)}}}function Pt(n){let e,t,l,o,u;const r=[St,Lt],c=[];function w(v,S){return v[0][1]?0:1}e=w(n),t=c[e]=r[e](n);let m=n[4]&&Ke(n);return{c(){t.c(),l=Qe(),m&&m.c(),o=J()},l(v){t.l(v),l=Ze(v),m&&m.l(v),o=J()},m(v,S){c[e].m(v,S),W(v,l,S),m&&m.m(v,S),W(v,o,S),u=!0},p(v,[S]){let L=e;e=w(v),e===L?c[e].p(v,S):(ie(),K(c[L],1,1,()=>{c[L]=null}),le(),t=c[e],t?t.p(v,S):(t=c[e]=r[e](v),t.c()),x(t,1),t.m(l.parentNode,l)),v[4]?m?m.p(v,S):(m=Ke(v),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(v){u||(x(t),u=!0)},o(v){K(t),u=!1},d(v){c[e].d(v),v&&F(l),m&&m.d(v),v&&F(o)}}}function Ot(n,e,t){let{stores:l}=e,{page:o}=e,{components:u}=e,{form:r}=e,{data_0:c=null}=e,{data_1:w=null}=e;et(l.page.notify);let m=!1,v=!1,S=null;return be(()=>{const L=l.page.subscribe(()=>{m&&(t(5,v=!0),t(6,S=document.title||"untitled page"))});return t(4,m=!0),L}),n.$$set=L=>{"stores"in L&&t(7,l=L.stores),"page"in L&&t(8,o=L.page),"components"in L&&t(0,u=L.components),"form"in L&&t(1,r=L.form),"data_0"in L&&t(2,c=L.data_0),"data_1"in L&&t(3,w=L.data_1)},n.$$.update=()=>{n.$$.dirty&384&&l.page.set(o)},[u,r,c,w,m,v,S,l,o]}class At extends Me{constructor(e){super(),Xe(this,e,Ot,Pt,Ye,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const It={},ce=[()=>T(()=>import("./chunks/0-1b44cf66.js"),["chunks/0-1b44cf66.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-0ee26895.js","assets/_layout-83da0318.css","chunks/index-4a6ca82f.js","chunks/stores-2784113d.js","chunks/singletons-188eb9f5.js","chunks/index-bc5f15b8.js","chunks/paths-6cd3a76e.js","chunks/search-62fae62b.js","assets/search-4c825759.css","chunks/Cash-dd149671.js","chunks/github-f2450794.js"],import.meta.url),()=>T(()=>import("./chunks/1-4873f36d.js"),["chunks/1-4873f36d.js","components/pages/_error.svelte-03cec30b.js","chunks/index-4a6ca82f.js","chunks/404-0d255c91.js","chunks/paths-6cd3a76e.js","chunks/github-f2450794.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/2-2e0bff9e.js"),["chunks/2-2e0bff9e.js","components/pages/assets/_error.svelte-7f1cc055.js","chunks/index-4a6ca82f.js","chunks/stores-2784113d.js","chunks/singletons-188eb9f5.js","chunks/index-bc5f15b8.js","chunks/paths-6cd3a76e.js","chunks/404-0d255c91.js","chunks/github-f2450794.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/3-47d0932c.js"),["chunks/3-47d0932c.js","components/pages/tokens/_error.svelte-6d9f44f7.js","chunks/index-4a6ca82f.js","chunks/404-0d255c91.js","chunks/paths-6cd3a76e.js","chunks/github-f2450794.js","chunks/SvelteSeo-cb098a8c.js","chunks/stores-2784113d.js","chunks/singletons-188eb9f5.js","chunks/index-bc5f15b8.js"],import.meta.url),()=>T(()=>import("./chunks/4-4787635b.js"),["chunks/4-4787635b.js","components/pages/_page.svelte-5393880c.js","chunks/index-4a6ca82f.js","chunks/paths-6cd3a76e.js","chunks/ChevronRight-655e244d.js","chunks/search-62fae62b.js","assets/search-4c825759.css","chunks/stores-2784113d.js","chunks/singletons-188eb9f5.js","chunks/index-bc5f15b8.js","chunks/Cash-dd149671.js","chunks/table-43bdb322.js","chunks/string-formatting-d95b22dc.js","chunks/transform-b981a1ae.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/5-dce2ee4a.js"),["chunks/5-dce2ee4a.js","components/pages/about/_page.svelte-fdc107b4.js","chunks/index-4a6ca82f.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/6-2c9ae214.js"),["chunks/6-2c9ae214.js","components/pages/api/_page.svelte-74f2092e.js","chunks/index-4a6ca82f.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/7-eadfb256.js"),["chunks/7-eadfb256.js","components/pages/assets/_page.svelte-ee95a80c.js","chunks/index-4a6ca82f.js","chunks/string-formatting-d95b22dc.js","chunks/paths-6cd3a76e.js","chunks/ChevronRight-655e244d.js","chunks/Cash-dd149671.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/8-874dfb83.js"),["chunks/8-874dfb83.js","components/pages/assets/_id_/_page.svelte-1a1793ae.js","assets/_page-99054db6.css","chunks/index-4a6ca82f.js","chunks/index-bc5f15b8.js","chunks/transform-b981a1ae.js","chunks/table-43bdb322.js","chunks/paths-6cd3a76e.js","chunks/string-formatting-d95b22dc.js","chunks/Cash-dd149671.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/9-d12d5ed9.js"),["chunks/9-d12d5ed9.js","components/pages/faq/_page.svelte-3b01ffc9.js","chunks/index-4a6ca82f.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/10-cece1c4d.js"),["chunks/10-cece1c4d.js","components/pages/ranking/_page.svelte-b9841bc6.js","chunks/index-4a6ca82f.js","chunks/table-43bdb322.js","chunks/paths-6cd3a76e.js","chunks/string-formatting-d95b22dc.js","chunks/Cash-dd149671.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url),()=>T(()=>import("./chunks/11-aa190f38.js"),["chunks/11-aa190f38.js","components/pages/widgets/_page.svelte-416f3c12.js","chunks/index-4a6ca82f.js","chunks/SvelteSeo-cb098a8c.js"],import.meta.url)],jt=[],Ut={"":[-5],about:[-6],api:[6],assets:[-8,[],[2]],faq:[-10],ranking:[-11],widgets:[11],"assets/[id]":[-9,[],[2]]},Tt="/__data.js",Ge="sveltekit:scroll",z="sveltekit:index",re=kt(ce,jt,Ut,It),Ee=ce[0],ke=ce[1];Ee();ke();let ee={};try{ee=JSON.parse(sessionStorage[Ge])}catch{}function ye(n){ee[n]=ve()}function Dt({target:n,base:e,trailing_slash:t}){var Te;const l=[],o={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,session_id:0,url:null},c=!1,w=!0,m=!1,v=1,S=null,L=!1,D,A=(Te=history.state)==null?void 0:Te[z];A||(A=Date.now(),history.replaceState({...history.state,[z]:A},"",location.href));const V=ee[A];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let q=!1,B,Se;function $e(){if(!S){const a=new URL(location.href);S=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),S=null,L=!1})}return S}async function fe(a,{noscroll:i=!1,replaceState:d=!1,keepfocus:s=!1,state:f={}},p){return typeof a=="string"&&(a=new URL(a,qe(document))),he({url:a,scroll:i?ve():null,keepfocus:s,redirect_chain:p,details:{state:f,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=je(i),o.id=i.id,o.promise}async function Oe(a,i,d,s,f){var E,k;const p=Se={};let h=a&&await je(a);if(!h&&i.origin===location.origin&&i.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!h)return await Z(i),!1;if(i=(a==null?void 0:a.url)||i,Se!==p)return!1;if(l.length=0,h.type==="redirect")if(d.length>10||d.includes(i.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(h.location,i).href,{},[...d,i.pathname]),!1;else((k=(E=h.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await H.updated.check()&&await Z(i);if(m=!0,s&&s.details){const{details:b}=s,_=b.replaceState?0:1;b.state[z]=A+=_,history[b.replaceState?"replaceState":"pushState"](b.state,"",i)}if(c){r=h.state,h.props.page&&(h.props.page.url=i);const b=ae();D.$set(h.props),b()}else Ae(h);if(s){const{scroll:b,keepfocus:_}=s;if(!_){const R=document.body,U=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),U!==null?R.setAttribute("tabindex",U):R.removeAttribute("tabindex")}if(await Ce(),w){const R=i.hash&&document.getElementById(i.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();o.promise=null,o.id=null,w=!0,h.props.page&&(B=h.props.page),f&&f(),m=!1}function Ae(a){var f,p;r=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),B=a.props.page;const d=ae();D=new At({target:n,props:{...a.props,stores:H},hydrate:!0}),d();const s={from:null,to:ne("to",{params:r.params,routeId:(p=(f=r.route)==null?void 0:f.id)!=null?p:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(h=>h(s)),c=!0}async function Q({url:a,params:i,branch:d,status:s,error:f,route:p,form:h}){var U;const E=d.filter(Boolean),k={type:"loaded",state:{url:a,params:i,branch:d,error:f,route:p,session_id:v},props:{components:E.map($=>$.node.component)}};h!==void 0&&(k.props.form=h);let b={},_=!B;for(let $=0;$<E.length;$+=1){const I=E[$];b={...b,...I.data},(_||!r.branch.some(j=>j===I))&&(k.props[`data_${$}`]=b,_=_||Object.keys((U=I.data)!=null?U:{}).length>0)}if(_||(_=Object.keys(B.data).length!==Object.keys(b).length),!r.url||a.href!==r.url.href||r.error!==f||_){k.props.page={error:f,params:i,routeId:p&&p.id,status:s,url:a,data:_?b:B.data};const $=(I,j)=>{Object.defineProperty(k.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${j}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return k}async function ue({loader:a,parent:i,url:d,params:s,routeId:f,server_data_node:p}){var b,_,R,U,$;let h=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let I=function(...g){for(const O of g){const{href:P}=new URL(O,d);E.dependencies.add(P)}};const j={};for(const g in s)Object.defineProperty(j,g,{get(){return E.params.add(g),s[g]},enumerable:!0});const y={routeId:f,params:j,data:(_=p==null?void 0:p.data)!=null?_:null,url:ht(d,()=>{E.url=!0}),async fetch(g,O){let P;typeof g=="string"?P=g:(P=g.url,O={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...O});const N=new URL(P,d).href;return I(N),c?wt(N,O):gt(P,N,O)},setHeaders:()=>{},depends:I,parent(){return E.parent=!0,i()}};Object.defineProperties(y,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(R=await k.shared.load.call(null,y))!=null?R:null}return{node:k,loader:a,server:p,shared:(U=k.shared)!=null&&U.load?{type:"data",data:h,uses:E}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function Ie(a,i,d){if(L)return!0;if(!d)return!1;if(d.parent&&i||a.url&&d.url)return!0;for(const s of a.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(l.some(f=>f(new URL(s))))return!0;return!1}function de(a,i){var d,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function je({id:a,invalidating:i,url:d,params:s,route:f}){if(o.id===a&&o.promise)return o.promise;const{errors:p,layouts:h,leaf:E}=f,k=r.url&&{url:a!==r.url.pathname+r.url.search,params:Object.keys(s).filter(y=>r.params[y]!==s[y])},b=[...h,E];p.forEach(y=>y==null?void 0:y().catch(()=>{})),b.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let _=null;const R=b.reduce((y,g,O)=>{var G;const P=r.branch[O],N=!!(g!=null&&g[0])&&((P==null?void 0:P.loader)!==g[1]||Ie(k,y.some(Boolean),(G=P.server)==null?void 0:G.uses));return y.push(N),y},[]);if(R.some(Boolean)){try{_=await Fe(d,R)}catch(y){return te({status:500,error:y,url:d,routeId:f.id})}if(_.type==="redirect")return _}const U=_==null?void 0:_.nodes;let $=!1;const I=b.map(async(y,g)=>{var me,De;if(!y)return;const O=r.branch[g],P=(me=U==null?void 0:U[g])!=null?me:null;if((!P||P.type==="skip")&&y[1]===(O==null?void 0:O.loader)&&!Ie(k,$,(De=O.shared)==null?void 0:De.uses))return O;if($=!0,(P==null?void 0:P.type)==="error")throw P.httperror?Rt(P.httperror.status,P.httperror.message):P.error;return ue({loader:y[1],url:d,params:s,routeId:f.id,parent:async()=>{var Ne;const Ve={};for(let _e=0;_e<g;_e+=1)Object.assign(Ve,(Ne=await I[_e])==null?void 0:Ne.data);return Ve},server_data_node:de(P,O==null?void 0:O.server)})});for(const y of I)y.catch(()=>{});const j=[];for(let y=0;y<b.length;y+=1)if(b[y])try{j.push(await I[y])}catch(g){const O=g;if(O instanceof Je)return{type:"redirect",location:O.location};const P=g instanceof se?g.status:500;for(;y--;)if(p[y]){let N,G=y;for(;!j[G];)G-=1;try{return N={node:await p[y](),loader:p[y],data:{},server:null,shared:null},await Q({url:d,params:s,branch:j.slice(0,G+1).concat(N),status:P,error:O,route:f})}catch{continue}}await Z(d);return}else j.push(void 0);return await Q({url:d,params:s,branch:j,status:200,error:null,route:f,form:i?void 0:null})}async function te({status:a,error:i,url:d,routeId:s}){var b;const f={},p=await Ee();let h=null;if(p.server)try{const _=await Fe(d,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;h=(b=_.nodes[0])!=null?b:null}catch{await Z(d);return}const E=await ue({loader:Ee,url:d,params:f,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(h)}),k={node:await ke(),loader:ke,shared:null,server:null,data:null};return await Q({url:d,params:f,branch:[E,k],status:a,error:i,route:null})}function pe(a,i){if(Ue(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const s of re){const f=s.exec(d);if(f){const p=new URL(a.origin+ut(a.pathname,t)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:i,route:s,params:dt(f),url:p}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:d,redirect_chain:s,details:f,type:p,delta:h,accepted:E,blocked:k}){var $,I,j,y;let b=!1;const _=pe(a,!1),R={from:ne("from",{params:r.params,routeId:(I=($=r.route)==null?void 0:$.id)!=null?I:null,url:r.url}),to:ne("to",{params:(j=_==null?void 0:_.params)!=null?j:null,routeId:(y=_==null?void 0:_.route.id)!=null?y:null,url:a}),type:p};h!==void 0&&(R.delta=h);const U={...R,cancel:()=>{b=!0}};if(u.before_navigate.forEach(g=>g(U)),b){k();return}ye(A),E(),c&&H.navigating.set(R),await Oe(_,a,s,{scroll:i,keepfocus:d,details:f},()=>{u.after_navigate.forEach(g=>g(R)),H.navigating.set(null)})}function Z(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(m||!c)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")l.push(a);else{const{href:i}=new URL(a,location.href);l.push(d=>d.href===i)}return $e()},invalidateAll:()=>(L=!0,$e()),prefetch:async a=>{const i=new URL(a,qe(document));await Pe(i)},prefetch_routes:async a=>{const d=(a?re.filter(s=>a.some(f=>s.exec(f))):re).map(s=>Promise.all([...s.layouts,s.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:d,route:s}=r;if(!s)return;let f=r.branch.length;for(;f--;)if(s.errors[f]){let p,h=f;for(;!d[h];)h-=1;try{p={node:await s.errors[f](),loader:s.errors[f],data:{},server:null,shared:null};const E=await Q({url:i,params:r.params,branch:d.slice(0,h+1).concat(p),status:500,error:a.error,route:s});r=E.state;const k=ae();D.$set(E.props),k();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==B.status&&(i.page={...B,status:a.status});const d=ae();D.$set(i),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,E;let f=!1;const p={from:ne("from",{params:r.params,routeId:(E=(h=r.route)==null?void 0:h.id)!=null?E:null,url:r.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(k=>k(p)),f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(A);try{sessionStorage[Ge]=JSON.stringify(ee)}catch{}}});const a=s=>{const{url:f,options:p}=Be(s);if(f&&p.prefetch){if(Ue(f))return;Pe(f)}};let i;const d=s=>{clearTimeout(i),i=setTimeout(()=>{var f;(f=s.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:f,url:p,options:h}=Be(s);if(!f||!p)return;const E=f instanceof SVGAElement;if(!E&&!(p.protocol==="https:"||p.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||h.reload||(E?f.target.baseVal:f.target))return;const[b,_]=p.href.split("#");if(_!==void 0&&b===location.href.split("#")[0]){q=!0,ye(A),H.page.set({...B,url:p}),H.page.notify();return}he({url:p,scroll:h.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[z]===A)return;const f=s.state[z]-A;he({url:new URL(location.href),scroll:ee[s.state[z]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=s.state[z]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[z]:++A},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&H.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:d,params:s,routeId:f,data:p,form:h})=>{var b;const E=new URL(location.href);let k;try{const _=d.map(async(R,U)=>{const $=p[U];return ue({loader:ce[R],url:E,params:s,routeId:f,parent:async()=>{const I={};for(let j=0;j<U;j+=1)Object.assign(I,(await _[j]).data);return I},server_data_node:de($)})});k=await Q({url:E,params:s,branch:await Promise.all(_),status:a,error:i!=null&&i.__is_http_error?new se(i.status,i.message):i,form:h,route:(b=re.find(R=>R.id===f))!=null?b:null})}catch(_){const R=_;if(R instanceof Je){await Z(new URL(_.location,location.href));return}k=await te({status:R instanceof se?R.status:500,error:R,url:E,routeId:f})}Ae(k)}}}let Vt=1;async function Fe(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Tt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Vt++)),await T(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}const Nt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ne(n,e){for(const t of Nt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)}});return e}function ae(){return()=>{}}async function Jt({env:n,hydrate:e,paths:t,target:l,trailing_slash:o}){lt(t);const u=Dt({target:l,base:t.base,trailing_slash:o});it({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Jt as start};
