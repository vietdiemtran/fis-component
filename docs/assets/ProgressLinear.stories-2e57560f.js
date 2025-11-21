import{j as i}from"./jsx-runtime-47c18db8.js";import{d as m,g as n,l as a,m as f}from"./getTheme-c4dbdb94.js";import"./index-d806aa85.js";const h=e=>{switch(e){case"xs":return a`
        width: 100%;
        height: ${n("com/progress-indicator/linear/size-sm/height")};
      `;case"sm":return a`
        width: 100%;
        height: ${n("com/progress-indicator/linear/size-sm/height")};
      `;case"md":return a`
        width: 100%;
        height: ${n("com/progress-indicator/linear/size-md/height")};
      `;default:return a`
        width: 100%;
        height: ${n("com/progress-indicator/linear/size-lg/height")};
      `}},p=m.div`
  position: relative;
  border-radius: ${n("sem/dimension/radius/component/round")};
  overflow: hidden;
  ${({$size:e})=>h(e)}

  ${({$invert:e,$isDeterminate:r})=>r&&(e?a`
          background: ${n("com/progress-indicator/invert/background-color")};
        `:a`
          background: ${n("com/progress-indicator/default/background-color")};
        `)}
`,y=f`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,g=m.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: width 0.35s ease;

  ${({$isDeterminate:e,$invert:r,theme:t})=>{const o=t[r?"com/progress-indicator/invert/indicator/lead-color":"com/progress-indicator/default/indicator/lead-color"],v=t[r?"com/progress-indicator/invert/indicator/trail-color":"com/progress-indicator/default/indicator/trail-color"];return e?a`
        background: ${o};
      `:a`
      background: linear-gradient(90deg, ${o} 0%, ${v} 100%);
      background-size: 200% auto;
      animation: ${y} 1s linear infinite;
    `}}
`;function _({percent:e,size:r="md",invert:t=!1}){return i.jsx(p,{$invert:t,$size:r,$isDeterminate:!0,children:i.jsx(g,{$isDeterminate:!0,$invert:t,style:{width:`${e}%`}})})}try{Determinate.displayName="Determinate",Determinate.__docgenInfo={description:"",displayName:"Determinate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function $({size:e="md",invert:r=!1}){return i.jsx(p,{$invert:r,$size:e,children:i.jsx(g,{$invert:r})})}try{Indeterminate.displayName="Indeterminate",Indeterminate.__docgenInfo={description:"",displayName:"Indeterminate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function s({variant:e,...r}){return e==="determinate"?i.jsx(_,{...r}):i.jsx($,{...r})}s.displayName="FISProgressLinear";try{s.displayName="FISProgressLinear",s.__docgenInfo={description:"",displayName:"FISProgressLinear",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},invert:{defaultValue:null,description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Components/Progress Linear",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["indeterminate","determinate"]},size:{control:"radio",options:["xs","sm","md","lg"]},percent:{control:{type:"range",min:0,max:100}},invert:{control:"boolean"}},args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},l=({variant:e="indeterminate",size:r="md",percent:t=50,invert:o=!1})=>i.jsx(s,{variant:e,size:r,percent:t,invert:o});var d,c,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`({
  variant = "indeterminate",
  size = "md",
  percent = 50,
  invert = false
}) => {
  return <FISProgressLinear variant={variant} size={size} percent={percent} invert={invert} />;
}`,...(u=(c=l.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const q=["Default"];export{l as Default,q as __namedExportsOrder,I as default};
