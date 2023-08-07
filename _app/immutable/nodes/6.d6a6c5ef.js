import{S as y,i as h,s as x,y as O,a as ee,k as ae,z as V,c as te,l as ie,m as ne,h as d,n as se,A as F,b as H,g as Q,d as W,B as X}from"../chunks/index.3647f7f4.js";import{b as f}from"../chunks/paths.5e455d1d.js";import{T as le,f as re}from"../chunks/index.0d5acd7b.js";import{P as Y}from"../chunks/public.d1f81b30.js";import{f as k,a as Z}from"../chunks/string-formatting.ca7775a2.js";import{S as me}from"../chunks/index.816323cb.js";function ue(t){let n,s,m,l,r;return n=new me({props:{title:t[2].title,description:t[2].description,openGraph:{title:t[2].title,description:t[2].description,url:t[2].url,type:"website",images:[t[2].image]},twitter:{site:"@bcked_com",title:t[2].title,description:t[2].description,image:t[2].image.url,imageAlt:t[2].image.alt}}}),l=new le({props:{data:t[0],columns:[{id:"rank",title:"#",class:""},{id:"name",title:"Name",class:"font-medium",link:!0},{id:"backing-usd",title:"Backing in USD",class:""},{id:"backing-ratio",title:"Backing Ratio",class:""},{id:"backing-assets",title:"Backing Assets",class:""},{id:"backing-uniformity",title:"Backing Uniformity",class:""},{id:"mcap",title:"Market Cap",class:""}],rows:t[1],sort:[{by:"mcap"},{by:"backing-usd"}],class:""}}),{c(){O(n.$$.fragment),s=ee(),m=ae("div"),O(l.$$.fragment),this.h()},l(e){V(n.$$.fragment,e),s=te(e),m=ie(e,"DIV",{class:!0});var i=ne(m);V(l.$$.fragment,i),i.forEach(d),this.h()},h(){se(m,"class","w-full pt-8")},m(e,i){F(n,e,i),H(e,s,i),H(e,m,i),F(l,m,null),r=!0},p(e,[i]){const u={};i&4&&(u.title=e[2].title),i&4&&(u.description=e[2].description),i&4&&(u.openGraph={title:e[2].title,description:e[2].description,url:e[2].url,type:"website",images:[e[2].image]}),i&4&&(u.twitter={site:"@bcked_com",title:e[2].title,description:e[2].description,image:e[2].image.url,imageAlt:e[2].image.alt}),n.$set(u);const g={};i&1&&(g.data=e[0]),i&2&&(g.rows=e[1]),l.$set(g)},i(e){r||(Q(n.$$.fragment,e),Q(l.$$.fragment,e),r=!0)},o(e){W(n.$$.fragment,e),W(l.$$.fragment,e),r=!1},d(e){X(n,e),e&&d(s),e&&d(m),X(l)}}}function oe(t,n,s){let m,l,r,e,i,{data:u}=n,g;return t.$$set=o=>{"data"in o&&s(0,u=o.data)},t.$$.update=()=>{t.$$.dirty&1&&s(4,{assetsPrice:m,assetsBacking:l,graphData:r}=u,r),t.$$.dirty&16&&s(3,g=re(r)),t.$$.dirty&24&&s(1,e=r.nodes.filter(({id:o,data:{details:c}})=>{var a,p;return((a=g.getLinks(o))==null?void 0:a.length)&&!((p=c==null?void 0:c.tags)!=null&&p.includes("lp"))}).map(({id:o,data:{details:c,history:a}},p)=>{var b,v,_,$,w,N,S,U,A,B,P,K,C,D,I,R,q,G,L,M,T,j,z,E,J;return{rank:{text:(p+1).toString(),value:p},name:{text:c.name,value:c.name,icon:`${f}/assets/${o}/icon.svg`},price:{text:(v=(b=a==null?void 0:a.at(-1))==null?void 0:b.price)!=null&&v.usd?k(a.at(-1).price.usd):"UNK",value:($=(_=a==null?void 0:a.at(-1))==null?void 0:_.price)==null?void 0:$.usd},"backing-assets":{text:(N=(w=a.at(-1))==null?void 0:w.underlying)!=null&&N.count?a.at(-1).underlying.count.toString():"UNK",value:(U=(S=a.at(-1))==null?void 0:S.underlying)==null?void 0:U.count},"backing-ratio":{text:(B=(A=a.at(-1))==null?void 0:A.underlying)!=null&&B.ratio?Z(a.at(-1).underlying.ratio.value):"UNK",value:(C=(K=(P=a.at(-1))==null?void 0:P.underlying)==null?void 0:K.ratio)==null?void 0:C.value},"backing-usd":{text:(I=(D=a.at(-1))==null?void 0:D.underlying)!=null&&I.usd?k(a.at(-1).underlying.usd):"UNK",value:(q=(R=a.at(-1))==null?void 0:R.underlying)==null?void 0:q.usd},mcap:{text:(G=a.at(-1))!=null&&G.mcap?k(a.at(-1).mcap.value):"UNK",value:(M=(L=a.at(-1))==null?void 0:L.mcap)==null?void 0:M.value},"backing-uniformity":{text:(((z=(j=(T=a.at(-1))==null?void 0:T.underlying)==null?void 0:j.ratio)==null?void 0:z.value)??0)>0?Z(a.at(-1).underlying.uniformity):"N/A",value:(J=(E=a.at(-1))==null?void 0:E.underlying)==null?void 0:J.uniformity},"name-path":{text:`${f}/assets/${o}`,value:`${f}/assets/${o}`}}})),t.$$.dirty&2&&s(2,i={title:"bcked: Asset Ranking",description:`Ranking of ${e.length} unique assets based on their backing. See all ...`,url:`${Y}/assets`,image:{url:`${Y}/assets/preview.jpg`,width:1200,height:630,alt:"Preview of asset ranking."}})},[u,e,i,g,r]}class be extends y{constructor(n){super(),h(this,n,oe,ue,x,{data:0})}}export{be as component};
