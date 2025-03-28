import{j as I}from"./jsx-runtime-47c18db8.js";import{r as x}from"./index-d806aa85.js";import{F as D}from"./index-71f019c0.js";import"./index-2657b34d.js";import"./styled-components.browser.esm-c9db8114.js";import"./getTheme-fd88fed7.js";const _={title:"Components/Radio Group",component:D,tags:["autodocs"],argTypes:{direction:{control:{type:"radio"},options:["row","column"],description:"Defines the layout direction of the radio group."},disabled:{control:{type:"boolean"},description:"Disables all radio options if set to true."},value:{control:{type:"text"},description:"Sets the selected radio button value."}}},r=l=>{const[R,G]=x.useState(l.value);return I.jsx(D,{...l,value:R,onChange:G})},e=r.bind({});e.args={groupLabel:"Choose an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1",direction:"row",disabled:!1};const a=r.bind({});a.args={...e.args,disabled:!0};const t=r.bind({});t.args={...e.args,direction:"column"};const o=r.bind({});o.args={...e.args,getOptionDisabled:l=>l.value==="option2"};const s=r.bind({});s.args={...e.args,value:null};var n,u,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,m,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(S=(m=t.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var V,b,v;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,C,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const w=["Default","Disabled","ColumnLayout","WithCustomDisabledOptions","NoInitialSelection"];export{t as ColumnLayout,e as Default,a as Disabled,s as NoInitialSelection,o as WithCustomDisabledOptions,w as __namedExportsOrder,_ as default};
