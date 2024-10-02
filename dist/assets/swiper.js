import{g as P,c as V,a as Y,r as o,j as n,S as N,N as R,P as z,b as q,d as G}from"./index.js";const W="_swiperContainer_1j7j7_3",X="_mySwiper_1j7j7_13",K="_dark_1j7j7_25",Z="_swiperSlide_1j7j7_33",m={swiperContainer:W,mySwiper:X,dark:K,swiperSlide:Z};function J(i){const{effect:r,swiper:s,on:a,setTranslate:h,setTransition:d,overwriteParams:w,perspective:e,recreateShadows:t,getEffectParams:l}=i;a("beforeInit",()=>{if(s.params.effect!==r)return;s.classNames.push(`${s.params.containerModifierClass}${r}`),e&&e()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const f=w?w():{};Object.assign(s.params,f),Object.assign(s.originalParams,f)}),a("setTranslate",()=>{s.params.effect===r&&h()}),a("setTransition",(f,S)=>{s.params.effect===r&&d(S)}),a("transitionEnd",()=>{if(s.params.effect===r&&t){if(!l||!l().slideShadows)return;s.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(S=>S.remove())}),t()}});let c;a("virtualUpdate",()=>{s.params.effect===r&&(s.slides.length||(c=!0),requestAnimationFrame(()=>{c&&s.slides&&s.slides.length&&(h(),c=!1)}))})}function Q(i,r){const s=P(r);return s!==r&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function T(i,r,s){const a=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${i}`}`,h=P(r);let d=h.querySelector(`.${a.split(" ").join(".")}`);return d||(d=V("div",a.split(" ")),h.append(d)),d}function ee(i){let{swiper:r,extendParams:s,on:a}=i;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),J({effect:"coverflow",swiper:r,on:a,setTranslate:()=>{const{width:w,height:e,slides:t,slidesSizesGrid:l}=r,c=r.params.coverflowEffect,f=r.isHorizontal(),S=r.translate,O=f?-S+w/2:-S+e/2,_=f?c.rotate:-c.rotate,D=c.depth,C=Y(r);for(let v=0,F=t.length;v<F;v+=1){const p=t[v],y=l[v],A=p.swiperSlideOffset,L=(O-A-y/2)/y,u=typeof c.modifier=="function"?c.modifier(L):L*c.modifier;let x=f?_*u:0,j=f?0:_*u,$=-D*Math.abs(u),g=c.stretch;typeof g=="string"&&g.indexOf("%")!==-1&&(g=parseFloat(c.stretch)/100*y);let I=f?0:g*u,M=f?g*u:0,k=1-(1-c.scale)*Math.abs(u);Math.abs(M)<.001&&(M=0),Math.abs(I)<.001&&(I=0),Math.abs($)<.001&&($=0),Math.abs(x)<.001&&(x=0),Math.abs(j)<.001&&(j=0),Math.abs(k)<.001&&(k=0);const U=`translate3d(${M}px,${I}px,${$}px)  rotateX(${C(j)}deg) rotateY(${C(x)}deg) scale(${k})`,B=Q(c,p);if(B.style.transform=U,p.style.zIndex=-Math.abs(Math.round(u))+1,c.slideShadows){let b=f?p.querySelector(".swiper-slide-shadow-left"):p.querySelector(".swiper-slide-shadow-top"),E=f?p.querySelector(".swiper-slide-shadow-right"):p.querySelector(".swiper-slide-shadow-bottom");b||(b=T("coverflow",p,f?"left":"top")),E||(E=T("coverflow",p,f?"right":"bottom")),b&&(b.style.opacity=u>0?u:0),E&&(E.style.opacity=-u>0?-u:0)}}},setTransition:w=>{r.slides.map(t=>P(t)).forEach(t=>{t.style.transitionDuration=`${w}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l=>{l.style.transitionDuration=`${w}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const H=()=>{document.querySelectorAll(".swiperSlide iframe").forEach(i=>{i.addEventListener("mouseenter",()=>{i.style.pointerEvents="auto"}),i.addEventListener("mouseleave",()=>{i.style.pointerEvents="none"})})};function te({images:i}){const[r,s]=o.useState(0),a=o.useRef(null),[h,d]=o.useState(!1);o.useEffect(()=>{const e=()=>{d(window.parent.document.body.classList.contains("dark"))};e();const t=new MutationObserver(e);return t.observe(window.parent.document.body,{attributes:!0,attributeFilter:["class"]}),()=>t.disconnect()},[]),o.useEffect(()=>{(()=>{const t=new URLSearchParams(window.location.hash.substring(1)),l=t.get("feed"),c=parseInt(t.get("scene"),10);console.log(`Initial hash params - feed: ${l}, scene: ${c}`),window.history.replaceState(null,null,"#feed=nasa&scene=1"),s(1)})()},[]),o.useEffect(()=>{const e=()=>{const t=new URLSearchParams(window.location.hash.substring(1)),l=parseInt(t.get("scene"),10);!isNaN(l)&&l>0&&l<11&&a.current?a.current.swiper.slideToLoop(l-1):a.current.swiper.slideToLoop(0)};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]);const w=e=>{const t=e.realIndex+1;s(t),window.history.replaceState(null,null,`#feed=nasa&scene=${t}`)};return o.useEffect(()=>{console.log(`activeIndex updated: ${r}`)},[r]),o.useEffect(()=>{H()},[i]),n.jsx("div",{className:`${m.swiperContainer} ${h?m.dark:""}`,children:n.jsx(N,{effect:"coverflow",grabCursor:!0,loop:i.length>3,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:40,stretch:0,depth:100,modifier:1,slideShadows:!1},modules:[ee,R,z],spaceBetween:50,navigation:!0,pagination:{clickable:!0},onSlideChange:w,className:m.mySwiper,slidesPerGroup:1,ref:a,children:i.map((e,t)=>n.jsx(q,{className:m.swiperSlide,children:n.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[e.media_type==="video"?n.jsx("iframe",{src:e.url,title:e.title,allowFullScreen:!0}):n.jsx("img",{src:e.url,alt:e.title||"Slide Image"}),n.jsx("p",{children:e.title})]})},t))})})}function se({images:i}){const[r,s]=o.useState(0),a=o.useRef(null),[h,d]=o.useState(!1);o.useEffect(()=>{const e=()=>{d(window.parent.document.body.classList.contains("dark"))};e();const t=new MutationObserver(e);return t.observe(window.parent.document.body,{attributes:!0,attributeFilter:["class"]}),()=>t.disconnect()},[]),o.useEffect(()=>{(()=>{const t=new URLSearchParams(window.location.hash.substring(1)),l=t.get("feed"),c=parseInt(t.get("scene"),10);console.log(`Initial hash params - feed: ${l}, scene: ${c}`),window.history.replaceState(null,null,"#feed=nasa&scene=1"),s(1)})()},[]),o.useEffect(()=>{const e=()=>{const t=new URLSearchParams(window.location.hash.substring(1)),l=parseInt(t.get("scene"),10);!isNaN(l)&&l>0&&l<11&&a.current?a.current.swiper.slideToLoop(l-1):a.current.swiper.slideToLoop(0)};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]);const w=e=>{const t=e.realIndex+1;s(t),window.history.replaceState(null,null,`#feed=nasa&scene=${t}`)};return o.useEffect(()=>{console.log(`activeIndex updated: ${r}`)},[r]),o.useEffect(()=>{H()},[i]),n.jsx("div",{className:`${m.swiperContainer} ${h?m.dark:""}`,children:n.jsx(N,{effect:"slide",grabCursor:!0,loop:i.length>3,centeredSlides:!0,slidesPerView:"auto",modules:[R,z],spaceBetween:0,navigation:!0,pagination:{clickable:!0},onSlideChange:w,className:m.mySwiper,slidesPerGroup:1,ref:a,children:i.map((e,t)=>n.jsx(q,{className:m.swiperSlide,children:n.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[e.media_type==="video"?n.jsx("iframe",{src:e.url,title:e.title,allowFullScreen:!0}):n.jsx("img",{src:e.url,alt:e.title||"Slide Image"}),n.jsx("p",{children:e.title})]})},t))})})}function re(){const[i,r]=o.useState(window.innerWidth<800),[s,a]=o.useState([]);return o.useEffect(()=>{const h=()=>{r(window.innerWidth<800)};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),o.useEffect(()=>{(async()=>{try{const d=await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=True&count=10");if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const w=await d.json();a(w)}catch(d){console.error("Failed to fetch images: "+d)}})()},[]),n.jsx("div",{children:i?n.jsx(se,{images:s}):n.jsx(te,{images:s})})}function ae(){return n.jsx(n.Fragment,{children:n.jsx(re,{})})}G(document.getElementById("root")).render(n.jsx(o.StrictMode,{children:n.jsx(ae,{})}));