import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as c}from"./index-981f9478.js";import{F as R}from"./index-cb369129.js";import"./getTheme-9564f801.js";const L={title:"Components/Radio",component:R,tags:["autodocs"],parameters:{docs:{description:{component:"Radio cho phép chọn một trong các lựa chọn độc lập, hỗ trợ nhiều variant và size nhỏ/gọn cho form."}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the radio button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the radio button",table:{defaultValue:{summary:"md"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Whether the radio button is disabled"}},args:{checked:!1,disabled:!1,size:"md",variant:"primary"}},s=e=>{const[S,n]=c.useState(!!e.checked);c.useEffect(()=>{n(!!e.checked)},[e.checked]);const x=d=>{var i;n(d.target.checked),(i=e.onChange)==null||i.call(e,d)};return t.jsx(R,{...e,checked:S,onChange:x})},r={render:e=>t.jsx(s,{...e}),args:{children:"Default Radio"}},o={render:e=>t.jsx(s,{...e}),args:{children:"Radio with sublabel",subLabel:"Additional information here"}},a={render:e=>t.jsx(s,{...e}),args:{children:"Disabled Radio",disabled:!0}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <ControlledRadioStory {...args} />,
  args: {
    children: "Default Radio"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ControlledRadioStory {...args} />,
  args: {
    children: "Radio with sublabel",
    subLabel: "Additional information here"
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ControlledRadioStory {...args} />,
  args: {
    children: "Disabled Radio",
    disabled: true
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const v=["Default","WithSubLabel","Disabled"];export{r as Default,a as Disabled,o as WithSubLabel,v as __namedExportsOrder,L as default};
