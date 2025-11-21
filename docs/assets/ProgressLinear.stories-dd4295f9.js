import{j as p}from"./jsx-runtime-47c18db8.js";import{F as a}from"./index-55d04594.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";const v={title:"Components/Progress Linear",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["indeterminate","determinate"]},size:{control:"radio",options:["xs","sm","md","lg"]},percent:{control:{type:"range",min:0,max:100}},invert:{control:"boolean"}},args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},e=({variant:o="indeterminate",size:s="md",percent:i=50,invert:m=!1})=>p.jsx(a,{variant:o,size:s,percent:i,invert:m});var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  variant = "indeterminate",
  size = "md",
  percent = 50,
  invert = false
}) => {
  return <FISProgressLinear variant={variant} size={size} percent={percent} invert={invert} />;
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,v as default};
