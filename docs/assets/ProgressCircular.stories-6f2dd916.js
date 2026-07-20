import{F as l}from"./index-66039438.js";import"./jsx-runtime-e7d94ccb.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";const h={title:"Components/Progress Circular",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"ProgressCircular hiển thị trạng thái tải theo 2 chế độ: indeterminate để báo đang xử lý và determinate để thể hiện tiến trình cụ thể."}}},argTypes:{variant:{control:"select",options:["indeterminate","determinate"]},size:{control:"radio",options:["xs","sm","md","lg"]},percent:{control:{type:"range",min:0,max:100}},invert:{control:"boolean"}},args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},e={args:{variant:"indeterminate",size:"md",percent:50,invert:!1}},r={args:{variant:"determinate",size:"md",percent:72,invert:!1}},t={args:{variant:"determinate",size:"lg",percent:42,invert:!0}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "indeterminate",
    size: "md",
    percent: 50,
    invert: false
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "determinate",
    size: "md",
    percent: 72,
    invert: false
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "determinate",
    size: "lg",
    percent: 42,
    invert: true
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const z=["Default","Determinate","Inverted"];export{e as Default,r as Determinate,t as Inverted,z as __namedExportsOrder,h as default};
