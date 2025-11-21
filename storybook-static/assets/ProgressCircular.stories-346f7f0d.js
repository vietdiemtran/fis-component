import{j as c}from"./jsx-runtime-3dc6859f.js";import{F as a}from"./index-ac9297cf.js";import"./index-d4014758.js";import"./getTheme-1aacf7d7.js";const v={title:"Components/Progress Circular",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["indeterminate","determinate"]},size:{control:"radio",options:["xs","sm","md","lg"]},percent:{control:{type:"range",min:0,max:100}},invert:{control:"boolean"}},args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},e=({variant:o="indeterminate",size:s="md",percent:i=50,invert:m=!1})=>c.jsx(a,{variant:o,size:s,percent:i,invert:m});var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  variant = "indeterminate",
  size = "md",
  percent = 50,
  invert = false
}) => {
  return <FISProgressCircular variant={variant} size={size} percent={percent} invert={invert} />;
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,v as default};
