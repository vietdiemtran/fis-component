import{j as p}from"./jsx-runtime-e7d94ccb.js";import{r as n}from"./index-981f9478.js";import{a as o,g as u,Z as _}from"./getTheme-9564f801.js";import{F as T}from"./index-df0a6e50.js";const j=o.div`
  width: 100%;
  display: flex;
  gap: ${u("com/combo-box/selected-data/horizontal-gap")};
  flex-wrap: wrap;
  box-sizing: border-box;
`,k=o.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  position: ${e=>e.$isVisible?"static":"absolute"};
`,R=o.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
`,B=o.div`
  /* Keep the default full width while letting consumer utility classes win. */
  :where(&) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  gap: ${u("com/input/vertical-gap")};
`,L=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,N=o.div`
  margin-top: ${u("com/select/vertical-gap")};
`,Z=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${u("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${u("com/chips-button/size-xs/height")} +
      ${u("com/combo-box/selected-data/horizontal-gap")}
  );
`,W=({options:e,onRemove:g})=>{const r=n.useRef(null),f=n.useRef(Array(e.length).fill(null)),[v,y]=n.useState([]),[x,z]=n.useState([]),[w,V]=n.useState(0),C=_(),m=n.useCallback(()=>{if(!r.current||e.length===0)return;const a=r.current.clientWidth,s=Number(C["com/combo-box/selected-data/horizontal-gap"].replace("px",""));let h=0;const c=[];for(let i=0;i<e.length;i++){const d=f.current[i];if(!d)continue;const l=d.offsetWidth;if(h+l+s<=a)c.push(e[i]),h+=l+s;else break}let $=0,b=[];if(e.reduce((i,d,l)=>{if(l<c.length)return i;const S=f.current[l];if(!S)return i;const F=S.offsetWidth;return i+F+s},0)>a)for(let i=c.length;i<e.length;i++){const d=f.current[i];if(!d)continue;const l=d.offsetWidth;if($+l+s+40<=a)b.push(e[i]),$+=l+s;else break}else b=e.slice(c.length);z(b),y(c),V(e.length-(c.length+b.length))},[e,C]),D=n.useCallback(t=>{g==null||g(t)},[g]),E=n.useCallback(t=>v.some(a=>a.value===t.value)||x.some(a=>a.value===t.value),[v,x]);return n.useLayoutEffect(()=>{let t=!0,a=requestAnimationFrame(()=>{t&&r.current&&m()});const s=new ResizeObserver(()=>{t&&r.current&&m()});r.current&&s.observe(r.current);const h=()=>{t&&m()};return window.addEventListener("resize",h),()=>{t=!1,cancelAnimationFrame(a),s.disconnect(),window.removeEventListener("resize",h)}},[m,e]),p.jsxs(j,{ref:r,children:[e.map((t,a)=>p.jsx(k,{$isVisible:E(t),children:p.jsx(T,{ref:s=>f.current[a]=s,size:"xs",label:t.label,closeable:!0,onClickClose:()=>D(t)})},`${t.value}-${a}`)),w>0&&p.jsx(R,{$isVisible:!0,children:p.jsx(T,{label:`+${w}`,size:"xs"})})]})};try{W.displayName="MultipleValue",W.__docgenInfo={description:"",displayName:"MultipleValue",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"FISComboboxOption<T>[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((option: FISComboboxOption<T>) => void)"}}}}}catch{}export{B as D,W as M,Z as S,L as a,N as b};
