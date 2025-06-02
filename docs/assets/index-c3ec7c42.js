import{j as o}from"./jsx-runtime-47c18db8.js";import{a as x}from"./RemoveIcon-d554efb7.js";import{F as k}from"./index-bf6eddb1.js";import{F as y}from"./index-e72c950e.js";import{F as C}from"./index-0fbbfa15.js";import{d as r,g as e,l as t}from"./getTheme-624682de.js";const S=r.div`
  display: flex;
  align-items: stretch;
  gap: ${e("com/alert-banner/horizontal-gap")};
  padding-top: ${e("com/alert-banner/top-padding")};
  padding-bottom: calc(
    ${e("com/alert-banner/bottom-padding")} -
      ${e("com/alert-banner/stroke-width")}
  );
  padding-right: ${e("com/alert-banner/right-padding")};
  padding-left: ${e("com/alert-banner/left-padding")};
  border-bottom: ${e("com/alert-banner/stroke-width")} solid
    ${e("com/alert-banner/theme/border/color-stroke/info")};
  box-shadow: ${e("Elevation/Level-1")};

  ${n=>{switch(n.$variant){case"neutral":return t`
          background-color: ${e("com/alert-banner/theme/background-color/neutral")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/neutral")};

          ${a} {
            color: ${e("com/alert-banner/theme/icon/color-icon/neutral")};
          }

          ${c} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/neutral")};
          }

          ${l} {
            color: ${e("com/alert-banner/theme/title/color-text/neutral")};
          }

          ${i} {
            color: ${e("com/alert-banner/theme/description/color-text/neutral")};
          }
        `;case"info":return t`
          background-color: ${e("com/alert-banner/theme/background-color/info")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/info")};

          ${a} {
            color: ${e("com/alert-banner/theme/icon/color-icon/info")};
          }

          ${c} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/info")};
          }

          ${l} {
            color: ${e("com/alert-banner/theme/title/color-text/info")};
          }

          ${i} {
            color: ${e("com/alert-banner/theme/description/color-text/info")};
          }
        `;case"positive":return t`
          background-color: ${e("com/alert-banner/theme/background-color/positive")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/positive")};

          ${a} {
            color: ${e("com/alert-banner/theme/icon/color-icon/positive")};
          }

          ${c} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/positive")};
          }

          ${l} {
            color: ${e("com/alert-banner/theme/title/color-text/positive")};
          }

          ${i} {
            color: ${e("com/alert-banner/theme/description/color-text/positive")};
          }
        `;case"negative":return t`
          background-color: ${e("com/alert-banner/theme/background-color/negative")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/negative")};

          ${a} {
            color: ${e("com/alert-banner/theme/icon/color-icon/negative")};
          }

          ${c} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/negative")};
          }

          ${l} {
            color: ${e("com/alert-banner/theme/title/color-text/negative")};
          }

          ${i} {
            color: ${e("com/alert-banner/theme/description/color-text/negative")};
          }
        `;case"caution":return t`
          background-color: ${e("com/alert-banner/theme/background-color/caution")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/caution")};

          ${a} {
            color: ${e("com/alert-banner/theme/icon/color-icon/caution")};
          }

          ${c} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/caution")};
          }

          ${l} {
            color: ${e("com/alert-banner/theme/title/color-text/caution")};
          }

          ${i} {
            color: ${e("com/alert-banner/theme/description/color-text/caution")};
          }
        `}}}
`,j=r.div`
  display: flex;
  align-items: center;
  flex: 1;

  flex-direction: ${({$direction:n})=>n};
  ${n=>n.$direction==="column"?t`
          flex-direction: column;
          align-items: flex-start;
          gap: ${e("com/alert-banner/horizontal-gap")};
        `:t`
          justify-content: space-between;
          gap: ${e("com/alert-banner/horizontal-gap")};
        `}
`,B=r.div`
  display: flex;
  align-items: center;
  gap: ${e("com/alert-banner/label/horizonal-gap")};
`,a=r.span`
  display: inline-flex;
  align-items: center;
`,l=r.div`
  ${e("Label/Sm")}
  color: ${e("com/alert-banner/theme/title/color-text/info")};
`,i=r.div`
  ${e("Label/XS")}
  color: ${e("com/alert-banner/theme/description/color-text/info")};
`,I=r.div`
  display: flex;
  align-items: center;
  gap: ${e("com/alert-banner/action/horizontal-gap")};
`;r.div`
  display: inline-flex;
  align-items: center;
`;const c=r.div`
  width: 1px;
`,A=r.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;function m({title:n,description:u,variant:p,icon:b,actionText:d,actionIcon:h,linkText:s,direction:$="row",onClickButton:v,onClickLink:g,onClose:f}){return o.jsxs(S,{$direction:$,$variant:p,children:[b&&o.jsxs(a,{children:[" ",b]}),o.jsxs(j,{$direction:$,$variant:p,children:[o.jsxs(B,{children:[o.jsx(l,{children:n}),u&&o.jsx(i,{children:u})]}),(d||s)&&o.jsxs(I,{children:[d&&o.jsx(k,{size:"sm",variant:"tertiary",endIcon:h,onClick:v,children:d}),s&&o.jsx(C,{size:"sm",underline:!0,onClick:g,children:s})]})]}),o.jsx(c,{}),o.jsx(A,{children:o.jsx(y,{size:"sm",variant:"tertiary-invisible",icon:o.jsx(x,{}),onClick:f})})]})}m.displayName="FISAlertBanner";try{m.displayName="FISAlertBanner",m.__docgenInfo={description:"",displayName:"FISAlertBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"positive"'},{value:'"negative"'},{value:'"caution"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string"}},actionIcon:{defaultValue:null,description:"",name:"actionIcon",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"(() => void)"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}export{m as F};
