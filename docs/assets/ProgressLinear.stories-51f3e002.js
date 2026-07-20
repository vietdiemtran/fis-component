import{j as n}from"./jsx-runtime-e7d94ccb.js";import{a as $,g as t,r as a,l as D}from"./getTheme-9564f801.js";import"./index-981f9478.js";const I=e=>{switch(e){case"xs":return a`
        width: 100%;
        height: ${t("com/progress-indicator/linear/size-sm/height")};
      `;case"sm":return a`
        width: 100%;
        height: ${t("com/progress-indicator/linear/size-sm/height")};
      `;case"md":return a`
        width: 100%;
        height: ${t("com/progress-indicator/linear/size-md/height")};
      `;default:return a`
        width: 100%;
        height: ${t("com/progress-indicator/linear/size-lg/height")};
      `}},z=$.div`
  position: relative;
  border-radius: ${t("sem/dimension/radius/component/round")};
  overflow: hidden;
  ${({$size:e})=>I(e)}

  ${({$invert:e,$isDeterminate:r})=>r&&(e?a`
          background: ${t("com/progress-indicator/invert/background-color")};
        `:a`
          background: ${t("com/progress-indicator/default/background-color")};
        `)}
`,q=D`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,b=$.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: width 0.35s ease;
  border-radius: 99px;

  ${({$isDeterminate:e,$invert:r,theme:i})=>{const c=i[r?"com/progress-indicator/invert/indicator/lead-color":"com/progress-indicator/default/indicator/lead-color"],x=i[r?"com/progress-indicator/invert/indicator/trail-color":"com/progress-indicator/default/indicator/trail-color"];return e?a`
        background: ${c};
      `:a`
      background: linear-gradient(90deg, ${c} 0%, ${x} 100%);
      background-size: 200% auto;
      animation: ${q} 1s linear infinite;
    `}}
`;function V({percent:e,size:r="md",invert:i=!1}){return n.jsx(z,{$invert:i,$size:r,$isDeterminate:!0,children:n.jsx(b,{$isDeterminate:!0,$invert:i,style:{width:`${e}%`}})})}try{Determinate.displayName="Determinate",Determinate.__docgenInfo={description:"",displayName:"Determinate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function N({size:e="md",invert:r=!1}){return n.jsx(z,{$invert:r,$size:e,children:n.jsx(b,{$invert:r})})}try{Indeterminate.displayName="Indeterminate",Indeterminate.__docgenInfo={description:"",displayName:"Indeterminate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function l({variant:e,...r}){return e==="determinate"?n.jsx(V,{...r}):n.jsx(N,{...r})}l.displayName="FISProgressLinear";try{l.displayName="FISProgressLinear",l.__docgenInfo={description:"",displayName:"FISProgressLinear",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},invert:{defaultValue:null,description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Progress Linear",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"ProgressLinear hiển thị tiến trình theo hai chế độ: indeterminate cho trạng thái đang xử lý và determinate cho phần trăm tiến độ cụ thể."}}},argTypes:{variant:{control:"select",options:["indeterminate","determinate"]},size:{control:"radio",options:["xs","sm","md","lg"]},percent:{control:{type:"range",min:0,max:100}},invert:{control:"boolean"}},args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},s={args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},o={args:{variant:"determinate",size:"md",percent:68,invert:!1}},d={args:{variant:"determinate",size:"lg",percent:34,invert:!0}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "indeterminate",
    size: "md",
    percent: 50,
    invert: false
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "determinate",
    size: "md",
    percent: 68,
    invert: false
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,y,_;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "determinate",
    size: "lg",
    percent: 34,
    invert: true
  }
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const w=["Default","Determinate","Inverted"];export{s as Default,o as Determinate,d as Inverted,w as __namedExportsOrder,k as default};
