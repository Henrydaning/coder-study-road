import{_ as u,p as g,h as d}from"./hooks.module.ae4b1a91.js";import{o as n}from"./jsxRuntime.module.71c5ef3d.js";import{p as v}from"./preact.module.fd86da4c.js";const{replace:w}="",b=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,O={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},k=t=>O[t],C=t=>w.call(t,b,k),A=({headings:t=[]})=>{const o=u(),l="on-this-page-heading",h=u([]),[p,a]=g("overview");d(()=>{const e=()=>{const s=document.querySelectorAll("article :is(h1, h2, h3, h4)");h.current=Array.from(s).map(r=>({id:r.id,topOffset:r.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),d(()=>{if(!o.current)return;const e=c=>{for(const i of c)if(i.isIntersecting){const{id:m}=i.target;if(m===l)continue;a(i.target.id);break}},s={rootMargin:"-100px 0% -66%",threshold:1},r=new IntersectionObserver(e,s);return document.querySelectorAll("article :is(h1,h2,h3)").forEach(c=>r.observe(c)),()=>r.disconnect()},[o.current]);const f=e=>{a(e.target.getAttribute("href").replace("#",""))};return n(v,{children:[n("h2",{id:l,className:"heading",children:"目录"}),n("ul",{ref:o,children:t.filter(({depth:e})=>e>1&&e<4).map(e=>n("li",{className:`header-link depth-${e.depth} ${p===e.slug?"current-header-link":""}`.trim(),children:n("a",{href:`#${e.slug}`,onClick:f,children:C(e.text)})}))})]})};export{A as default};
