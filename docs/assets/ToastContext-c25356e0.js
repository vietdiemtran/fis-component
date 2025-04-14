import{j as t}from"./jsx-runtime-47c18db8.js";import{r as d}from"./index-d806aa85.js";import{d as s,g as e,l as a}from"./getTheme-21dde6f8.js";import{F as $}from"./index-1a7e3c5d.js";import{E as k,h as y,i as j,W as I,j as _}from"./ArrowRightIcon-bbccecc9.js";import{F as T}from"./index-89102280.js";import{c as S}from"./index-d16835b1.js";import{F as C}from"./index-b93fec4e.js";const P=s.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  border-radius: ${e("com/toast/corner-radius")};
  outline: ${e("com/toast/theme/border/stroke-width")} solid
    ${e("com/toast/theme/border/color-stroke/neutral")};
  outline-offset: -${e("com/toast/theme/border/stroke-width")};
  padding-top: ${e("com/toast/vertical-padding")};
  padding-bottom: ${e("com/toast/vertical-padding")};
  padding-left: ${e("com/toast/left-padding")};
  padding-right: ${e("com/toast/right-padding")};
  gap: ${e("com/toast/horizontal-gap")};
  box-shadow: ${e("Elevation/Level-2")};

  &.hidden {
    display: none;
  }

  ${o=>{switch(o.$theme){case"neutral":return a`
          outline-color: ${e("com/toast/theme/border/color-stroke/neutral")};
          background-color: ${e("com/toast/theme/background-color/neutral")};
        `;case"info":return a`
          outline-color: ${e("com/toast/theme/border/color-stroke/info")};
          background-color: ${e("com/toast/theme/background-color/info")};
        `;case"positive":return a`
          outline-color: ${e("com/toast/theme/border/color-stroke/positive")};
          background-color: ${e("com/toast/theme/background-color/positive")};
        `;case"caution":return a`
          outline-color: ${e("com/toast/theme/border/color-stroke/caution")};
          background-color: ${e("com/toast/theme/background-color/caution")};
        `;case"negative":return a`
          outline-color: ${e("com/toast/theme/border/color-stroke/negative")};
          background-color: ${e("com/toast/theme/background-color/negative")};
        `}}}
`,F=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 24px;
  color: ${e("com/toast/theme/icon/color-icon/neutral")};
`,V=s.p`
  ${e("Paragraph/XS")};
  margin: 0;

  ${o=>{switch(o.$theme){case"neutral":return a`
          color: ${e("com/toast/theme/label/color-text/neutral")};
        `;case"info":return a`
          color: ${e("com/toast/theme/label/color-text/info")};
        `;case"positive":return a`
          color: ${e("com/toast/theme/label/color-text/positive")};
        `;case"caution":return a`
          color: ${e("com/toast/theme/label/color-text/caution")};
        `;case"negative":return a`
          color: ${e("com/toast/theme/label/color-text/negative")};
        `}}}
  ${o=>{switch(o.$actionPosition){case"inline":return a`
          padding-top: ${e("com/toast/theme/label/vertical-padding")};
          padding-bottom: ${e("com/toast/theme/label/vertical-padding")};
        `;case"bottom":return a`
          padding-top: 0px;
          padding-bottom: 0px;
        `}}}
`,q=s.a`
  ${e("Label/XS")};
  color: ${e("com/link/secondary/label-color/default")};
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
`,w=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  ${o=>o.$actionPosition==="inline"&&a`
      flex-direction: row;
      align-items: center;
      gap: ${e("com/toast/horizontal-gap")};
    `}
  ${o=>o.$actionPosition==="bottom"&&a`
      align-items: flex-start;
      padding-top: ${e("com/toast/theme/label/vertical-padding")};
      padding-bottom: ${e("com/toast/theme/label/vertical-padding")};
      gap: ${e("com/toast/theme/label/vertical-gap")};
    `}
`,N=s.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,E={info:t.jsx(y,{}),positive:t.jsx(j,{}),caution:t.jsx(I,{}),negative:t.jsx(_,{})},z={neutral:"com/toast/theme/divider/color-stroke/neutral",info:"com/toast/theme/divider/color-stroke/info",positive:"com/toast/theme/divider/color-stroke/positive",caution:"com/toast/theme/divider/color-stroke/caution",negative:"com/toast/theme/divider/color-stroke/negative"},u=({className:o,theme:i="neutral",type:n="link",actionPosition:m="inline",iconLeft:r,title:c,actionHref:l,actionLabel:p,closable:f=!0,onClickAction:g})=>{const[h,x]=d.useState(!0),b=d.useMemo(()=>i==="neutral"?r:E[i],[i,r]);return t.jsxs(P,{className:S(o,{hidden:!h}),$theme:i,children:[t.jsx(F,{children:b}),t.jsxs(w,{$actionPosition:m,$type:n,children:[t.jsx(V,{$theme:i,$actionPosition:m,children:c}),n==="link"&&l&&t.jsx(q,{href:l,target:"_blank",children:p}),n==="button"&&p&&t.jsx(T,{variant:"tertiary",size:"xs",onClick:g,children:p})]}),t.jsx(C,{direction:"vertical",headpointOffset:"tiny",color:z[i]}),f&&t.jsx($,{size:"xs",icon:t.jsx(k,{}),variant:"tertiary-invisible",onClick:()=>x(!1)})]})};u.displayName="FISToast";try{u.displayName="FISToast",u.__docgenInfo={description:"",displayName:"FISToast",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"neutral"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"positive"'},{value:'"negative"'},{value:'"caution"'}]}},type:{defaultValue:{value:"link"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"no-action"'}]}},actionPosition:{defaultValue:{value:"inline"},description:"",name:"actionPosition",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"bottom"'}]}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},actionHref:{defaultValue:null,description:"",name:"actionHref",required:!1,type:{name:"string"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClickAction:{defaultValue:null,description:"",name:"onClickAction",required:!1,type:{name:"(() => void)"}}}}}catch{}const L=d.createContext(void 0),v=({children:o})=>{const[i,n]=d.useState([]),m=d.useCallback(r=>{const c=r.duration||3e3;n(l=>[...l,r]),setTimeout(()=>{n(l=>l.slice(1))},c)},[]);return t.jsxs(L.Provider,{value:{showToast:m},children:[o,i.length>0&&t.jsx(N,{children:i.map((r,c)=>t.jsx(u,{...r},c))})]})};try{v.displayName="ToastProvider",v.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}export{u as F,v as T,L as a};
