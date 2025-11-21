import{j as i}from"./jsx-runtime-e7d94ccb.js";import{r as n}from"./index-981f9478.js";import{F as K}from"./index-4f790279.js";import{d as L,l as S}from"./getTheme-6566e1e9.js";const M=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${o=>o.$direction==="row"?S`
          flex-direction: row;
        `:S`
          flex-direction: column;
        `}
`,P=L.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function N({className:o,groupLabel:d,options:c,name:O,value:_,direction:$="row",disabled:k,size:T="md",classContent:W,getOptionDisabled:p,onChange:q,onFocus:H,onBlur:z},A){const g="radio-group-"+n.useId(),B=n.useRef(null),J=e=>{q(e.value)};return n.useImperativeHandle(A,()=>({focus:()=>{var m;const e=(m=B.current)==null?void 0:m.querySelector("label>input[type=radio]~span[id^=radio]");e&&e.scrollIntoView()}}),[]),i.jsxs(M,{role:"radiogroup",className:o,"aria-labelledby":g,$direction:$,children:[i.jsx(P,{id:g,children:d}),c.map(e=>i.jsx(K,{size:T,value:e.value,name:O,disabled:(p==null?void 0:p(e))??k,checked:e.value===_,className:W,onChange:()=>J(e),onFocus:H,onBlur:z,children:e.label},e.value))]})}const Q=n.forwardRef(N),E=Q;N.displayName="FISCheckboxGroup";const ee={title:"Components/Radio Group",component:E,tags:["autodocs"],argTypes:{direction:{control:{type:"radio"},options:["row","column"],description:"Defines the layout direction of the radio group."},disabled:{control:{type:"boolean"},description:"Disables all radio options if set to true."},value:{control:{type:"text"},description:"Sets the selected radio button value."}}},u=o=>{const[d,c]=n.useState(o.value);return i.jsx(E,{...o,value:d,onChange:c})},a=u.bind({});a.args={groupLabel:"Choose an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1",direction:"row",disabled:!1};const r=u.bind({});r.args={...a.args,disabled:!0};const t=u.bind({});t.args={...a.args,direction:"column"};const s=u.bind({});s.args={...a.args,getOptionDisabled:o=>o.value==="option2"};const l=u.bind({});l.args={...a.args,value:null};var v,b,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,V,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(x=(V=r.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var C,R,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(I=(R=t.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var w,y,G;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(G=(y=s.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var F,D,j;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState<string | null>(args.value);
  return <FISRadioGroup {...args} value={selectedValue} onChange={setSelectedValue} />;
}`,...(j=(D=l.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const ae=["Default","Disabled","ColumnLayout","WithCustomDisabledOptions","NoInitialSelection"];export{t as ColumnLayout,a as Default,r as Disabled,l as NoInitialSelection,s as WithCustomDisabledOptions,ae as __namedExportsOrder,ee as default};
