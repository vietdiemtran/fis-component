import{j as u}from"./jsx-runtime-50395f49.js";import{r as O}from"./index-9fa1aa67.js";import{F as W}from"./index-5708f3ff.js";import{d as j,l as g}from"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";const k=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${e=>e.$direction==="row"?g`
          flex-direction: row;
        `:g`
          flex-direction: column;
        `}
`,z=j.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function i({className:e,groupLabel:d,options:c,name:I,value:L,direction:N="row",disabled:T,getOptionDisabled:p,onChange:F,onFocus:E,onBlur:$}){const m="radio-group-"+O.useId(),B=r=>{F(r.value)};return u.jsxs(k,{role:"radiogroup",className:e,"aria-labelledby":m,$direction:N,children:[u.jsx(z,{id:m,children:d}),c.map(r=>u.jsx(W,{value:r.value,name:I,disabled:(p==null?void 0:p(r))??T,checked:r.value===L,onChange:()=>B(r),onFocus:E,onBlur:$,children:r.label},r.value))]})}try{i.displayName="RadioGroup",i.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<T>[] | readonly Option<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Value | null"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"((option: Option<T>) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(nextValue: T) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}}}catch{}const P={title:"Components/Radio group",component:i,argTypes:{direction:{control:{type:"radio"},options:["row","column"],description:"Defines the layout direction of the radio group."},disabled:{control:{type:"boolean"},description:"Disables all radio options if set to true."},value:{control:{type:"text"},description:"Sets the selected radio button value."}}},s=e=>{const[d,c]=O.useState(e.value);return u.jsx(i,{...e,value:d,onChange:c})},a=s.bind({});a.args={groupLabel:"Choose an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1",direction:"row",disabled:!1};const t=s.bind({});t.args={...a.args,disabled:!0};const o=s.bind({});o.args={...a.args,direction:"column"};const l=s.bind({});l.args={...a.args,getOptionDisabled:e=>e.value==="option2"};const n=s.bind({});n.args={...a.args,value:null};var v,f,V;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <RadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(V=(f=a.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var b,S,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <RadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,x,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <RadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,R,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <RadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var _,D,G;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <RadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(G=(D=n.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const Q=["Default","Disabled","ColumnLayout","WithCustomDisabledOptions","NoInitialSelection"];export{o as ColumnLayout,a as Default,t as Disabled,n as NoInitialSelection,l as WithCustomDisabledOptions,Q as __namedExportsOrder,P as default};
