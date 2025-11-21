import{j as r}from"./jsx-runtime-e7d94ccb.js";import{e as B,F as S}from"./LineArrowsUp-2da65544.js";import{F as j}from"./index-d70c9a74.js";import{F as A}from"./index-ba8cec51.js";import{F as I}from"./index-d503b2ac.js";import{d as n,g as e,l as t}from"./getTheme-6566e1e9.js";import"./index-981f9478.js";import"./index-4bd6e544.js";const F=n.div`
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

  ${o=>{switch(o.$variant){case"neutral":return t`
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
`,D=n.div`
  display: flex;
  align-items: center;
  flex: 1;

  flex-direction: ${({$direction:o})=>o};
  ${o=>o.$direction==="column"?t`
          flex-direction: column;
          align-items: flex-start;
          gap: ${e("com/alert-banner/horizontal-gap")};
        `:t`
          justify-content: space-between;
          gap: ${e("com/alert-banner/horizontal-gap")};
        `}
`,q=n.div`
  display: flex;
  align-items: center;
  gap: ${e("com/alert-banner/label/horizonal-gap")};
`,a=n.span`
  display: inline-flex;
  align-items: center;
`,l=n.div`
  ${e("Label/Sm")}
  color: ${e("com/alert-banner/theme/title/color-text/info")};
`,i=n.div`
  ${e("Label/XS")}
  color: ${e("com/alert-banner/theme/description/color-text/info")};
`,V=n.div`
  display: flex;
  align-items: center;
  gap: ${e("com/alert-banner/action/horizontal-gap")};
`;n.div`
  display: inline-flex;
  align-items: center;
`;const c=n.div`
  width: 1px;
`,_=n.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;function d({title:o,description:p,variant:b,icon:$,actionText:m,actionIcon:x,linkText:u,direction:g="row",onClickButton:k,onClickLink:y,onClose:C}){return r.jsxs(F,{$direction:g,$variant:b,children:[$&&r.jsxs(a,{children:[" ",$]}),r.jsxs(D,{$direction:g,$variant:b,children:[r.jsxs(q,{children:[r.jsx(l,{children:o}),p&&r.jsx(i,{children:p})]}),(m||u)&&r.jsxs(V,{children:[m&&r.jsx(j,{size:"sm",variant:"tertiary",endIcon:x,onClick:k,children:m}),u&&r.jsx(I,{size:"sm",underline:!0,onClick:y,children:u})]})]}),r.jsx(c,{}),r.jsx(_,{children:r.jsx(A,{size:"sm",variant:"tertiary-invisible",icon:r.jsx(B,{}),onClick:C})})]})}d.displayName="FISAlertBanner";try{d.displayName="FISAlertBanner",d.__docgenInfo={description:"",displayName:"FISAlertBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"caution"'},{value:'"positive"'},{value:'"negative"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string"}},actionIcon:{defaultValue:null,description:"",name:"actionIcon",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"(() => void)"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const X={title:"Components/Alert-Banner",component:d,tags:["autodocs"],argTypes:{title:{control:"text"},variant:{control:"select",options:["neutral","info","positive","negative","caution"]}}},w=o=>r.jsx(d,{icon:r.jsx(S,{}),...o}),s=w.bind({});s.args={variant:"neutral",title:"Thông báo mặc định"};var v,h,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const G=["Default"];export{s as Default,G as __namedExportsOrder,X as default};
