import{j as t}from"./jsx-runtime-47c18db8.js";import{r as d}from"./index-d806aa85.js";import{d as l,g as e,l as a}from"./getTheme-624682de.js";import{F as k}from"./index-e72c950e.js";import{f as y,g as j,h as I,W as _,i as T}from"./ArrowRightIcon-2d46fdf7.js";import{F as S}from"./index-bf6eddb1.js";import{c as C}from"./index-d16835b1.js";import{F}from"./index-6b56abf2.js";const P=l.div`
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
`,V=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 24px;
  color: ${e("com/toast/theme/icon/color-icon/neutral")};
`,q=l.p`
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
`,w=l.a`
  ${e("Label/XS")};
  color: ${e("com/link/secondary/label-color/default")};
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
`,N=l.div`
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
`,z=l.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,E={info:t.jsx(j,{}),positive:t.jsx(I,{}),caution:t.jsx(_,{}),negative:t.jsx(T,{})},L={neutral:"com/toast/theme/divider/color-stroke/neutral",info:"com/toast/theme/divider/color-stroke/info",positive:"com/toast/theme/divider/color-stroke/positive",caution:"com/toast/theme/divider/color-stroke/caution",negative:"com/toast/theme/divider/color-stroke/negative"},u=({className:o,theme:i="neutral",type:n="link",actionPosition:m="inline",iconLeft:r,noIcon:s=!1,title:c,actionHref:f,actionLabel:p,closable:g=!0,onClickAction:h})=>{const[x,b]=d.useState(!0),$=d.useMemo(()=>i==="neutral"?r:E[i],[i,r]);return t.jsxs(P,{className:C(o,{hidden:!x}),$theme:i,children:[!s&&t.jsx(V,{children:$}),t.jsxs(N,{$actionPosition:m,$type:n,children:[t.jsx(q,{$theme:i,$actionPosition:m,children:c}),n==="link"&&f&&t.jsx(w,{href:f,target:"_blank",children:p}),n==="button"&&p&&t.jsx(S,{variant:"tertiary",size:"xs",onClick:h,children:p})]}),g&&t.jsxs(t.Fragment,{children:[t.jsx(F,{direction:"vertical",headpointOffset:"tiny",color:L[i]}),t.jsx(k,{size:"xs",icon:t.jsx(y,{}),variant:"tertiary-invisible",onClick:()=>b(!1)})]})]})};u.displayName="FISToast";try{u.displayName="FISToast",u.__docgenInfo={description:"",displayName:"FISToast",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"neutral"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"positive"'},{value:'"negative"'},{value:'"caution"'}]}},type:{defaultValue:{value:"link"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"no-action"'}]}},actionPosition:{defaultValue:{value:"inline"},description:"",name:"actionPosition",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"bottom"'}]}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactNode"}},noIcon:{defaultValue:{value:"false"},description:"",name:"noIcon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},actionHref:{defaultValue:null,description:"",name:"actionHref",required:!1,type:{name:"string"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClickAction:{defaultValue:null,description:"",name:"onClickAction",required:!1,type:{name:"(() => void)"}}}}}catch{}const D=d.createContext(void 0),v=({children:o})=>{const[i,n]=d.useState([]),m=d.useCallback(r=>{const s=r.duration||3e3;n(c=>[...c,r]),setTimeout(()=>{n(c=>c.slice(1))},s)},[]);return t.jsxs(D.Provider,{value:{showToast:m},children:[o,i.length>0&&t.jsx(z,{children:i.map((r,s)=>t.jsx(u,{...r},s))})]})};try{v.displayName="ToastProvider",v.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}export{u as F,v as T,D as a};
