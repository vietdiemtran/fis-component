import{j as i}from"./jsx-runtime-3dc6859f.js";import{r as m}from"./index-d4014758.js";import{d as l,g as t,l as e}from"./getTheme-1aacf7d7.js";import{F as k}from"./index-35e06132.js";import{E as y,l as T,P as w,W as I,m as j}from"./LineArrowsUp-143aac49.js";import{F as S}from"./index-88ba15c8.js";import{c as _}from"./index-01b5a1be.js";import{F as C}from"./index-68a7459e.js";const P=l.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-radius: ${t("com/toast/corner-radius")};
  outline: ${t("com/toast/theme/border/stroke-width")} solid
    ${t("com/toast/theme/border/color-stroke/neutral")};
  outline-offset: -${t("com/toast/theme/border/stroke-width")};
  padding-top: ${t("com/toast/vertical-padding")};
  padding-bottom: ${t("com/toast/vertical-padding")};
  padding-left: ${t("com/toast/left-padding")};
  padding-right: ${t("com/toast/right-padding")};
  gap: ${t("com/toast/horizontal-gap")};
  box-shadow: ${t("Elevation/Level-2")};

  &.hidden {
    display: none;
  }

  ${o=>{switch(o.$theme){case"neutral":return e`
          outline-color: ${t("com/toast/theme/border/color-stroke/neutral")};
          background-color: ${t("com/toast/theme/background-color/neutral")};
        `;case"info":return e`
          outline-color: ${t("com/toast/theme/border/color-stroke/info")};
          background-color: ${t("com/toast/theme/background-color/info")};
        `;case"positive":return e`
          outline-color: ${t("com/toast/theme/border/color-stroke/positive")};
          background-color: ${t("com/toast/theme/background-color/positive")};
        `;case"caution":return e`
          outline-color: ${t("com/toast/theme/border/color-stroke/caution")};
          background-color: ${t("com/toast/theme/background-color/caution")};
        `;case"negative":return e`
          outline-color: ${t("com/toast/theme/border/color-stroke/negative")};
          background-color: ${t("com/toast/theme/background-color/negative")};
        `}}}
`,q=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 24px;
  color: ${t("com/toast/theme/icon/color-icon/neutral")};
`,V=l.p`
  ${t("Paragraph/XS")};
  margin: 0;

  ${o=>{switch(o.$theme){case"neutral":return e`
          color: ${t("com/toast/theme/label/color-text/neutral")};
        `;case"info":return e`
          color: ${t("com/toast/theme/label/color-text/info")};
        `;case"positive":return e`
          color: ${t("com/toast/theme/label/color-text/positive")};
        `;case"caution":return e`
          color: ${t("com/toast/theme/label/color-text/caution")};
        `;case"negative":return e`
          color: ${t("com/toast/theme/label/color-text/negative")};
        `}}}
  ${o=>{switch(o.$actionPosition){case"inline":return e`
          padding-top: ${t("com/toast/theme/label/vertical-padding")};
          padding-bottom: ${t("com/toast/theme/label/vertical-padding")};
        `;case"bottom":return e`
          padding-top: 0px;
          padding-bottom: 0px;
        `}}}
`,F=l.a`
  ${t("Label/XS")};
  color: ${t("com/link/secondary/label-color/default")};
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
`,N=l.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  ${o=>o.$actionPosition==="inline"&&e`
      flex-direction: row;
      align-items: center;
      gap: ${t("com/toast/horizontal-gap")};
    `}
  ${o=>o.$actionPosition==="bottom"&&e`
      align-items: flex-start;
      padding-top: ${t("com/toast/theme/label/vertical-padding")};
      padding-bottom: ${t("com/toast/theme/label/vertical-padding")};
      gap: ${t("com/toast/theme/label/vertical-gap")};
    `}
`,z=l.div`
  position: fixed;
  z-index: 1050; /* Cao hơn bootstrap modal (1040) và các component khác */
  display: flex;
  flex-direction: column;
  gap: 12px; /* Tăng gap để toast không quá sát nhau */
  max-width: 420px; /* Tăng một chút cho nội dung dài */
  min-width: 320px; /* Tăng min-width cho đẹp hơn */
  pointer-events: none; /* Tránh chặn click vào các element phía sau */

  /* Cho phép click vào các toast con */
  > * {
    pointer-events: auto;
  }

  ${o=>{switch(o.$position){case"top-center":return e`
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom-center":return e`
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: column-reverse; /* Toast mới xuất hiện từ dưới lên */
        `;case"top-right":return e`
          top: 24px;
          right: 24px;
        `;case"bottom-right":return e`
          bottom: 24px;
          right: 24px;
          flex-direction: column-reverse;
        `;case"top-left":return e`
          top: 24px;
          left: 24px;
        `;case"bottom-left":return e`
          bottom: 24px;
          left: 24px;
          flex-direction: column-reverse;
        `;default:return e`
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
        `}}}

  /* Animation cho toast xuất hiện */
  > div {
    animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes toastSlideIn {
    from {
      opacity: 0;
      transform: translateY(-12px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* Animation cho bottom positions */
  ${o=>{var a;return((a=o.$position)==null?void 0:a.includes("bottom"))&&e`
      > div {
        animation: toastSlideInBottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes toastSlideInBottom {
        from {
          opacity: 0;
          transform: translateY(12px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `}}

  /* Responsive cho mobile */
  @media (max-width: 768px) {
    max-width: calc(100vw - 32px);
    min-width: calc(100vw - 32px);

    ${o=>{var a,n,r;if((a=o.$position)!=null&&a.includes("center"))return e`
          left: 16px;
          right: 16px;
          transform: none;
        `;if((n=o.$position)!=null&&n.includes("left"))return e`
          left: 16px;
        `;if((r=o.$position)!=null&&r.includes("right"))return e`
          right: 16px;
        `}}

    ${o=>{var a;return(a=o.$position)!=null&&a.includes("top")?e`
            top: 16px;
          `:e`
            bottom: 16px;
          `}}
  }

  /* Tablet breakpoint */
  @media (max-width: 1024px) and (min-width: 769px) {
    max-width: 380px;
    min-width: 300px;
  }
`,E={info:i.jsx(T,{}),positive:i.jsx(w,{}),caution:i.jsx(I,{}),negative:i.jsx(j,{})},L={neutral:"com/toast/theme/divider/color-stroke/neutral",info:"com/toast/theme/divider/color-stroke/info",positive:"com/toast/theme/divider/color-stroke/positive",caution:"com/toast/theme/divider/color-stroke/caution",negative:"com/toast/theme/divider/color-stroke/negative"},f=({className:o,theme:a="neutral",type:n="link",actionPosition:r="inline",iconLeft:s,noIcon:c=!1,title:d,actionHref:p,actionLabel:u,closable:x=!0,onClickAction:v})=>{const[g,b]=m.useState(!0),$=m.useMemo(()=>a==="neutral"?s:E[a],[a,s]);return i.jsxs(P,{className:_(o,{hidden:!g}),$theme:a,children:[!c&&i.jsx(q,{children:$}),i.jsxs(N,{$actionPosition:r,$type:n,children:[i.jsx(V,{$theme:a,$actionPosition:r,children:d}),n==="link"&&p&&i.jsx(F,{href:p,target:"_blank",children:u}),n==="button"&&u&&i.jsx(S,{variant:"tertiary",size:"xs",onClick:v,children:u})]}),x&&i.jsxs(i.Fragment,{children:[i.jsx(C,{direction:"vertical",headpointOffset:"tiny",color:L[a]}),i.jsx(k,{size:"xs",icon:i.jsx(y,{}),variant:"tertiary-invisible",onClick:()=>b(!1)})]})]})};f.displayName="FISToast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"neutral"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"positive"'},{value:'"negative"'},{value:'"caution"'}]}},type:{defaultValue:{value:"link"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"no-action"'}]}},actionPosition:{defaultValue:{value:"inline"},description:"",name:"actionPosition",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"bottom"'}]}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactNode"}},noIcon:{defaultValue:{value:"false"},description:"",name:"noIcon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},actionHref:{defaultValue:null,description:"",name:"actionHref",required:!1,type:{name:"string"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClickAction:{defaultValue:null,description:"",name:"onClickAction",required:!1,type:{name:"(() => void)"}}}}}catch{}const X=m.createContext(void 0),h=({children:o})=>{const[a,n]=m.useState([]),r=m.useCallback(s=>{const c=s.duration||3e3;n(d=>[...d,s]),setTimeout(()=>{n(d=>d.slice(1))},c)},[]);return i.jsxs(X.Provider,{value:{showToast:r},children:[o,a.length>0&&i.jsx(z,{$position:a[0].position||"top-right",children:a.map((s,c)=>i.jsx(f,{...s},c))})]})};try{h.displayName="ToastProvider",h.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}export{f as F,X as T,h as a};
