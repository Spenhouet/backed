function E(){}function ft(t,e){for(const n in e)t[n]=e[n];return t}function dt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function nt(t){return t()}function X(){return Object.create(null)}function v(t){t.forEach(nt)}function G(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Wt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function _t(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Gt(t,e,n,i){if(t){const s=it(t,e,n,i);return t[0](s)}}function it(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Rt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function Ft(t,e,n,i,s,c){if(s){const r=it(e,n,i,c);t.p(r,s)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Qt(t,e,n){return t.set(n),e}function Ut(t){return t&&G(t.destroy)?t.destroy:E}let L=!1;function mt(){L=!0}function pt(){L=!1}function yt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,d=(s>0&&e[n[s]].claim_order<=l?s+1:yt(1,s,u=>e[n[u]].claim_order,l))-1;i[o]=n[d]+1;const _=d+1;n[_]=o,s=Math.max(_,s)}const c=[],r=[];let a=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const d=l<c.length?c[l]:null;t.insertBefore(r[o],d)}}function bt(t,e){t.appendChild(e)}function xt(t,e){if(L){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){t.insertBefore(e,n||null)}function $t(t,e,n){L&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Xt(){return F(" ")}function Yt(){return F("")}function Y(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Zt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function te(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const kt=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&kt.indexOf(i)===-1?t[i]=e[i]:I(t,i,e[i])}function ee(t,e){for(const n in e)I(t,n,e[n])}function Et(t,e){Object.keys(e).forEach(n=>{Tt(t,n,e[n])})}function Tt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:I(t,e,n)}function ne(t){return/-/.test(t)?Et:vt}function At(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){rt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ot(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ie(t,e,n){return ot(t,e,n,R)}function se(t,e,n){return ot(t,e,n,st)}function Nt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function re(t){return Nt(t," ")}function Z(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ce(t,e){const n=Z(t,"HTML_TAG_START",0),i=Z(t,"HTML_TAG_END",n);if(n===i)return new tt(void 0,e);rt(t);const s=t.splice(n,i-n+1);T(s[0]),T(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new tt(c,e)}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function le(t,e){t.value=e??""}function ae(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let C;function Mt(){if(C===void 0){C=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{C=!0}}return C}function ue(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=R("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Mt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=Y(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=Y(i.contentWindow,"resize",e),e()}),bt(t,i),()=>{(s||c&&i.contentWindow)&&c(),T(i)}}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=R(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)wt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}class tt extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)$t(this.t,this.n[n],e)}}function _e(t,e){return new t(e)}let A;function g(t){A=t}function x(){if(!A)throw new Error("Function called outside component initialization");return A}function he(t){x().$$.on_mount.push(t)}function me(t){x().$$.after_update.push(t)}function pe(t){x().$$.on_destroy.push(t)}function ye(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=St(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ge(t,e){return x().$$.context.set(t,e),e}function be(t){return x().$$.context.get(t)}function xe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],et=[];let k=[];const B=[],lt=Promise.resolve();let W=!1;function at(){W||(W=!0,lt.then(J))}function we(){return at(),lt}function q(t){k.push(t)}function $e(t){B.push(t)}const z=new Set;let w=0;function J(){if(w!==0)return;const t=A;do{try{for(;w<$.length;){const e=$[w];w++,g(e),jt(e.$$)}}catch(e){throw $.length=0,w=0,e}for(g(null),$.length=0,w=0;et.length;)et.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];z.has(n)||(z.add(n),n())}k.length=0}while($.length);for(;B.length;)B.pop()();W=!1,z.clear(),g(t)}function jt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function Lt(t){const e=[],n=[];k.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),k=e}const j=new Set;let b;function Dt(){b={r:0,c:[],p:b}}function Ht(){b.r||v(b.c),b=b.p}function K(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ut(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ke(t,e){const n=e.token={};function i(s,c,r,a){if(e.token!==n)return;e.resolved=a;let o=e.ctx;r!==void 0&&(o=o.slice(),o[r]=a);const l=s&&(e.current=s)(o);let d=!1;e.block&&(e.blocks?e.blocks.forEach((_,u)=>{u!==c&&_&&(Dt(),ut(_,1,1,()=>{e.blocks[u]===_&&(e.blocks[u]=null)}),Ht())}):e.block.d(1),l.c(),K(l,1),l.m(e.mount(),e.anchor),d=!0),e.block=l,e.blocks&&(e.blocks[c]=l),d&&J()}if(dt(t)){const s=x();if(t.then(c=>{g(s),i(e.then,1,e.value,c),g(null)},c=>{if(g(s),i(e.catch,2,e.error,c),g(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ve(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Ee(t,e){ut(t,1,1,()=>{e.delete(t.key)})}function Te(t,e,n,i,s,c,r,a,o,l,d,_){let u=t.length,m=c.length,h=u;const D={};for(;h--;)D[t[h].key]=h;const N=[],H=new Map,P=new Map,Q=[];for(h=m;h--;){const f=_(s,c,h),p=n(f);let y=r.get(p);y?i&&Q.push(()=>y.p(f,e)):(y=l(p,f),y.c()),H.set(p,N[h]=y),p in D&&P.set(p,Math.abs(h-D[p]))}const U=new Set,V=new Set;function O(f){K(f,1),f.m(a,d),r.set(f.key,f),d=f.first,m--}for(;u&&m;){const f=N[m-1],p=t[u-1],y=f.key,M=p.key;f===p?(d=f.first,u--,m--):H.has(M)?!r.has(y)||U.has(y)?O(f):V.has(M)?u--:P.get(y)>P.get(M)?(V.add(y),O(f)):(U.add(M),u--):(o(p,r),u--)}for(;u--;){const f=t[u];H.has(f.key)||o(f,r)}for(;m;)O(N[m-1]);return v(Q),N}function Ae(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],a=e[c];if(a){for(const o in r)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[c]=a}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ne(t){return typeof t=="object"&&t!==null?t:{}}function Me(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Se(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||q(()=>{const r=t.$$.on_mount.map(nt).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),c.forEach(q)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(Lt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&($.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,c,r,a=[-1]){const o=A;g(t);const l=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:X(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(_,u,...m)=>{const h=m.length?m[0]:u;return l.ctx&&s(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),d&&zt(t,_)),u}):[],l.update(),d=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){mt();const _=At(e.target);l.fragment&&l.fragment.l(_),_.forEach(T)}else l.fragment&&l.fragment.c();e.intro&&K(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),J()}g(o)}class Le{$destroy(){Ot(this,1),this.$destroy=E}$on(e,n){if(!G(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{G as $,Pt as A,Ot as B,Gt as C,Ft as D,It as E,Rt as F,Wt as G,xt as H,E as I,Vt as J,ge as K,be as L,Y as M,xe as N,Zt as O,te as P,Kt as Q,x as R,Le as S,ft as T,Jt as U,Me as V,Ae as W,Ne as X,$e as Y,vt as Z,Ut as _,Xt as a,v as a0,qt as a1,Qt as a2,ht as a3,ye as a4,pe as a5,st as a6,se as a7,ee as a8,ke as a9,ve as aa,ne as ab,fe as ac,le as ad,Te as ae,Ee as af,q as ag,ue as ah,tt as ai,ce as aj,de as ak,$t as b,re as c,ut as d,Yt as e,Ht as f,K as g,T as h,je as i,me as j,R as k,ie as l,At as m,I as n,he as o,ae as p,F as q,Nt as r,Bt as s,we as t,oe as u,Dt as v,et as w,_e as x,Se as y,Ce as z};
