import{I as p,s as E,a3 as I,a0 as R,$ as S}from"./index.3647f7f4.js";import{a as T}from"./paths.5685431e.js";const f=[];function x(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function a(s){if(E(e,s)&&(e=s,n)){const l=!f.length;for(const i of r)i[1](),f.push(i,e);if(l){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function c(s){a(s(e))}function o(s,l=p){const i=[s,l];return r.add(i),r.size===1&&(n=t(a)||p),s(e),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:a,update:c,subscribe:o}}function V(e,t,n){const r=!Array.isArray(e),a=r?[e]:e,c=t.length<2;return x(n,o=>{let s=!1;const l=[];let i=0,_=p;const h=()=>{if(i)return;_();const u=t(r?l[0]:l,o);c?o(u):_=S(u)?u:p},A=a.map((u,g)=>I(u,w=>{l[g]=w,i&=~(1<<g),s&&h()},()=>{i|=1<<g}));return s=!0,h(),function(){R(A),_(),s=!1}})}const O="1688505378317",Y="sveltekit:snapshot",$="sveltekit:scroll",q="sveltekit:index",m={tap:1,hover:2,viewport:3,eager:4,off:-1};function K(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function j(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...m,"":m.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function z(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function C(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||L(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:r,download:c}}function D(e){let t=null,n=null,r=null,a=null,c=null,o=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),o===null&&(o=d(s,"replacestate")),s=v(s);function l(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[a??"off"],keep_focus:l(t),noscroll:l(n),reload:l(c),replace_state:l(o)}}function k(e){const t=b(e);let n=!0;function r(){n=!0,t.update(o=>o)}function a(o){n=!1,t.set(o)}function c(o){let s;return t.subscribe(l=>{(s===void 0||n&&l!==s)&&o(s=l)})}return{notify:r,set:a,subscribe:c}}function U(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${T}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const o=(await a.json()).version!==O;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:r}}function L(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function G(e){e.client}const X={url:k({}),page:k({}),navigating:b(null),updated:U()};export{q as I,m as P,$ as S,Y as a,C as b,D as c,j as d,G as e,z as f,K as g,V as h,L as i,X as s,b as w};
