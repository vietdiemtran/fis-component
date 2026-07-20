import{j as o}from"./jsx-runtime-e7d94ccb.js";import{r}from"./index-981f9478.js";import{C as ee}from"./index-b8aa03b0.js";import{a as q}from"./getTheme-9564f801.js";import"./InfoSolidIcon-78d566e9.js";const se=q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: ${e=>e.$direction};
`,ae=q.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function A({className:e,groupLabel:a,options:s,value:u=[],direction:S="row",disabled:H,classContent:T,size:J,getOptionDisabled:h,onChange:K,onFocus:Q,onBlur:U},X){const v="checkbox-group-"+r.useId(),C=r.useRef(null),V=u.filter(t=>s.some(c=>c.value===t)),Y=t=>{const c=V.includes(t.value)?V.filter(Z=>Z!==t.value):[...V,t.value];K(c)};return r.useImperativeHandle(X,()=>({focus:()=>{var c;const t=(c=C.current)==null?void 0:c.querySelector("label>input[type=checkox]~span[id^=checkox]");t&&t.scrollIntoView()}}),[]),o.jsxs(se,{ref:C,role:"group",className:e,$direction:S,"aria-labelledby":v,children:[o.jsx(ae,{id:v,children:a}),s.map(t=>o.jsx(ee,{size:J,value:t.value,disabled:(h==null?void 0:h(t))??H,checked:u.includes(t.value),className:T,onChange:()=>Y(t),onFocus:Q,onBlur:U,children:t.label},t.value))]})}const l=r.forwardRef(A);A.displayName="FISCheckboxGroup";const ue={title:"Components/Checkbox Group",component:l,tags:["autodocs"],parameters:{docs:{description:{story:"A group of checkboxes that allows users to select multiple options."}}},argTypes:{direction:{control:"radio",options:["row","column"],defaultValue:"row",description:"Defines the layout direction of the checkboxes."},disabled:{control:"boolean",description:"Disables all checkboxes in the group."},groupLabel:{control:"text",description:"Label displayed for the checkbox group."},size:{control:"radio",options:["sm","md"],description:"Size applied to every checkbox in the group."}}},n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],i={render:e=>{const[a,s]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:s,options:n,groupLabel:"Basic Example"})}},d={render:e=>{const[a,s]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:s,options:n,groupLabel:"Row Direction Example",direction:"row"})}},p={render:e=>{const[a,s]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:s,options:n,groupLabel:"Column Direction Example",direction:"column"})}},m={render:e=>{const[a,s]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:s,options:n,groupLabel:"Disabled Example",disabled:!0})}},g={render:e=>{const[a,s]=r.useState(["1","3"]);return o.jsx(l,{...e,value:a,onChange:s,options:n,groupLabel:"Pre-selected Values Example"})}},x={render:e=>{const[a,s]=r.useState([]),[u,S]=r.useState([]);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[o.jsx(l,{...e,size:"sm",value:a,onChange:s,options:n,groupLabel:"Small"}),o.jsx(l,{...e,size:"md",value:u,onChange:S,options:n,groupLabel:"Medium"})]})}},b={render:e=>{const[a,s]=r.useState([]);return o.jsx(l,{...e,value:a,onChange:s,options:n,groupLabel:"Individual Disabled Options Example",getOptionDisabled:u=>["2","4"].includes(u.value)})}};var f,k,D;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Basic Example" />;
  }
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var L,w,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Row Direction Example" direction="row" />;
  }
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,E,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Column Direction Example" direction="column" />;
  }
}`,...(j=(E=p.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var y,G,F;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Disabled Example" disabled={true} />;
  }
}`,...(F=(G=m.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var R,z,M;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(["1", "3"]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Pre-selected Values Example" />;
  }
}`,...(M=(z=g.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var P,W,$;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [smValues, setSmValues] = useState<string[]>([]);
    const [mdValues, setMdValues] = useState<string[]>([]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <FISCheckboxGroup {...args} size="sm" value={smValues} onChange={setSmValues} options={defaultOptions} groupLabel="Small" />
        <FISCheckboxGroup {...args} size="md" value={mdValues} onChange={setMdValues} options={defaultOptions} groupLabel="Medium" />
      </div>;
  }
}`,...($=(W=x.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var B,N,_;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Individual Disabled Options Example" getOptionDisabled={option => ["2", "4"].includes(option.value)} />;
  }
}`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const ce=["Default","RowDirection","ColumnDirection","Disabled","WithPreselectedValues","Sizes","WithDisabledOptions"];export{p as ColumnDirection,i as Default,m as Disabled,d as RowDirection,x as Sizes,b as WithDisabledOptions,g as WithPreselectedValues,ce as __namedExportsOrder,ue as default};
