import{j as o}from"./jsx-runtime-e7d94ccb.js";import{r}from"./index-981f9478.js";import{C as U}from"./index-853c5723.js";import{d as B}from"./getTheme-6566e1e9.js";import"./LineArrowsUp-2da65544.js";const X=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: ${e=>e.$direction};
`,Y=B.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function N({className:e,groupLabel:a,options:t,value:u=[],direction:_="row",disabled:q,classContent:A,size:H,getOptionDisabled:x,onChange:T,onFocus:z,onBlur:J},K){const S="checkbox-group-"+r.useId(),V=r.useRef(null),h=u.filter(s=>t.some(n=>n.value===s)),M=s=>{const n=h.includes(s.value)?h.filter(Q=>Q!==s.value):[...h,s.value];T(n)};return r.useImperativeHandle(K,()=>({focus:()=>{var n;const s=(n=V.current)==null?void 0:n.querySelector("label>input[type=checkox]~span[id^=checkox]");s&&s.scrollIntoView()}}),[]),o.jsxs(X,{ref:V,role:"group",className:e,$direction:_,"aria-labelledby":S,children:[o.jsx(Y,{id:S,children:a}),t.map(s=>o.jsx(U,{size:H,value:s.value,disabled:(x==null?void 0:x(s))??q,checked:u.includes(s.value),className:A,onChange:()=>M(s),onFocus:z,onBlur:J,children:s.label},s.value))]})}const l=r.forwardRef(N);N.displayName="FISCheckboxGroup";const re={title:"Components/Checkbox Group",component:l,tags:["autodocs"],parameters:{docs:{description:{story:"A group of checkboxes that allows users to select multiple options."}}},argTypes:{direction:{control:"radio",options:["row","column"],defaultValue:"row",description:"Defines the layout direction of the checkboxes."},disabled:{control:"boolean",description:"Disables all checkboxes in the group."},groupLabel:{control:"text",description:"Label displayed for the checkbox group."}}},c=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],i={render:e=>{const[a,t]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:t,options:c,groupLabel:"Basic Example"})}},d={render:e=>{const[a,t]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:t,options:c,groupLabel:"Row Direction Example",direction:"row"})}},p={render:e=>{const[a,t]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:t,options:c,groupLabel:"Column Direction Example",direction:"column"})}},m={render:e=>{const[a,t]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:t,options:c,groupLabel:"Disabled Example",disabled:!0})}},g={render:e=>{const[a,t]=r.useState(["1","3"]);return o.jsx(l,{...e,value:a,onChange:t,options:c,groupLabel:"Pre-selected Values Example"})}},b={render:e=>{const[a,t]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:t,options:c,groupLabel:"Individual Disabled Options Example",getOptionDisabled:u=>["2","4"].includes(u.value)})}};var C,v,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Basic Example" />;
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,D,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Row Direction Example" direction="row" />;
  }
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var L,E,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Column Direction Example" direction="column" />;
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,j,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Disabled Example" disabled={true} />;
  }
}`,...(G=(j=m.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var y,R,F;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(["1", "3"]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Pre-selected Values Example" />;
  }
}`,...(F=(R=g.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var P,W,$;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Individual Disabled Options Example" getOptionDisabled={option => ["2", "4"].includes(option.value)} />;
  }
}`,...($=(W=b.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const oe=["Default","RowDirection","ColumnDirection","Disabled","WithPreselectedValues","WithDisabledOptions"];export{p as ColumnDirection,i as Default,m as Disabled,d as RowDirection,b as WithDisabledOptions,g as WithPreselectedValues,oe as __namedExportsOrder,re as default};
