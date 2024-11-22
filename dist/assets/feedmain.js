import{r as n,h as u,j as t,S as w,N as p,P as f,a as h,b as m,c as v}from"./index.js";import{s as c,E as g}from"./effect-coverflow.js";function x({images:l}){const i=n.useRef(null);n.useEffect(()=>{const e=s=>{if(m.includes(s.origin)){const{action:a,scene:r}=s.data;if(a==="changeSlide"&&!isNaN(r)){const o=i.current.swiper;console.log("Scene: "+r),r>0&&r<=18&&i.current?o.slideToLoop(r-1):o.slideToLoop(0)}}};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const d=e=>{const s=e+1;console.log("Slide clicked, real index:",s),i.current.swiper&&i.current.swiper.slideToLoop(e),window.parent.postMessage({index:s,source:"loop"},"*")};return n.useEffect(()=>{u()},[l]),t.jsx("div",{className:c.swiperContainer,children:t.jsx(w,{effect:"slide",grabCursor:!0,loop:l.length>3,centeredSlides:!0,slidesPerView:"auto",modules:[p,f],spaceBetween:0,navigation:!0,pagination:{clickable:!0},className:c.mySwiper,slidesPerGroup:1,ref:i,children:l.map((e,s)=>t.jsx(h,{className:c.swiperSlide,onClick:()=>d(s),children:t.jsxs("a",{href:"#",onClick:a=>a.preventDefault(),children:[e.media_type==="video"?t.jsx("iframe",{src:e.url,title:e.title,allowFullScreen:!0}):t.jsx("img",{src:e.url,alt:e.title||"Slide Image"}),t.jsx("p",{children:e.title})]})},s))})})}function j({images:l}){const i=n.useRef(null);n.useEffect(()=>{const e=s=>{if(m.includes(s.origin)){const{action:a,scene:r}=s.data;if(a==="changeSlide"&&!isNaN(r)){const o=i.current.swiper;console.log("Scene: "+r),r>0&&r<=18&&i.current?o.slideToLoop(r-1):o.slideToLoop(0)}}};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const d=e=>{const s=e+1;console.log("Slide clicked, real index:",s),i.current.swiper&&i.current.swiper.slideToLoop(e),window.parent.postMessage({index:s,source:"loop"},"*")};return n.useEffect(()=>{u()},[l]),t.jsx("div",{className:c.swiperContainer,children:t.jsx(w,{effect:"coverflow",grabCursor:!0,loop:l.length>3,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:40,stretch:0,depth:100,modifier:1,slideShadows:!1},modules:[g,p,f],spaceBetween:50,navigation:!0,pagination:{clickable:!0},className:c.mySwiper,slidesPerGroup:1,ref:i,children:l.map((e,s)=>t.jsx(h,{className:c.swiperSlide,onClick:()=>d(s),children:t.jsxs("a",{href:"#",onClick:a=>a.preventDefault(),children:[e.media_type==="video"?t.jsx("iframe",{src:e.url,title:e.title,allowFullScreen:!0}):t.jsx("img",{src:e.url,alt:e.title||"Slide Image"}),t.jsx("p",{children:e.title})]})},s))})})}function E(){const[l,i]=n.useState(window.innerWidth<800),[d,e]=n.useState([]),[s,a]=n.useState(!1);return n.useEffect(()=>{const r=()=>a(window.parent.document.body.classList.contains("dark"));r();const o=new MutationObserver(r);return o.observe(window.parent.document.body,{attributes:!0,attributeFilter:["class"]}),()=>o.disconnect()},[]),n.useEffect(()=>{const r=()=>i(window.innerWidth<800);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),n.useEffect(()=>{(async()=>{try{const o=await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=True&count=18");if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const S=await o.json();e(S)}catch(o){console.error("Failed to fetch images: "+o)}})()},[]),t.jsx("div",{className:`${s?c.dark:""}`,children:l?t.jsx(x,{images:d}):t.jsx(j,{images:d})})}v(document.getElementById("root")).render(t.jsx(n.StrictMode,{children:t.jsx(E,{})}));
