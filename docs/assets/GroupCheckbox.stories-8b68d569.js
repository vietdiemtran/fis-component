import{j as r}from"./jsx-runtime-50395f49.js";import{r as l}from"./index-9fa1aa67.js";import{F as H}from"./index-ad83f7f1.js";import{d as T}from"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";import"./RequestButtonLoadingIcon-c839309c.js";const J=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: ${e=>e.$direction};
`,K=T.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function o({className:e,groupLabel:s,options:a,value:u=[],direction:B="row",disabled:N,getOptionDisabled:b,onChange:P,onFocus:W,onBlur:$}){const x="checkbox-group-"+l.useId(),V=u.filter(t=>a.some(h=>h.value===t)),A=t=>{const h=V.includes(t.value)?V.filter(z=>z!==t.value):[...V,t.value];P(h)};return r.jsxs(J,{role:"group",className:e,$direction:B,"aria-labelledby":x,children:[r.jsx(K,{id:x,children:s}),a.map(t=>r.jsx(H,{value:t.value,disabled:(b==null?void 0:b(t))??N,checked:u.includes(t.value),onChange:()=>A(t),onFocus:W,onBlur:$,children:t.label},t.value))]})}try{o.displayName="FISCheckboxGroup",o.__docgenInfo={description:"",displayName:"FISCheckboxGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<T>[] | readonly Option<T>[]"}},value:{defaultValue:{value:"[]"},description:"",name:"value",required:!1,type:{name:"T[]"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"((option: Option<T>) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(nextValue: T[]) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}}}catch{}const ee={title:"Components/CheckboxGroup",component:o,tags:["autodocs"],parameters:{docs:{description:{story:"A group of checkboxes that allows users to select multiple options."}}},argTypes:{direction:{control:"radio",options:["row","column"],defaultValue:"row",description:"Defines the layout direction of the checkboxes."},disabled:{control:"boolean",description:"Disables all checkboxes in the group."},groupLabel:{control:"text",description:"Label displayed for the checkbox group."}}},n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],i={render:e=>{const[s,a]=l.useState([]);return r.jsx(o,{...e,value:s,onChange:a,options:n,groupLabel:"Basic Example"})}},c={render:e=>{const[s,a]=l.useState([]);return r.jsx(o,{...e,value:s,onChange:a,options:n,groupLabel:"Row Direction Example",direction:"row"})}},d={render:e=>{const[s,a]=l.useState([]);return r.jsx(o,{...e,value:s,onChange:a,options:n,groupLabel:"Column Direction Example",direction:"column"})}},p={render:e=>{const[s,a]=l.useState([]);return r.jsx(o,{...e,value:s,onChange:a,options:n,groupLabel:"Disabled Example",disabled:!0})}},m={render:e=>{const[s,a]=l.useState(["1","3"]);return r.jsx(o,{...e,value:s,onChange:a,options:n,groupLabel:"Pre-selected Values Example"})}},g={render:e=>{const[s,a]=l.useState([]);return r.jsx(o,{...e,value:s,onChange:a,options:n,groupLabel:"Individual Disabled Options Example",getOptionDisabled:u=>["2","4"].includes(u.value)})}};var S,f,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Basic Example" />;
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,D,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Row Direction Example" direction="row" />;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var O,w,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Column Direction Example" direction="column" />;
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var L,E,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Disabled Example" disabled={true} />;
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var F,j,G;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(["1", "3"]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Pre-selected Values Example" />;
  }
}`,...(G=(j=m.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var q,_,R;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Individual Disabled Options Example" getOptionDisabled={option => ["2", "4"].includes(option.value)} />;
  }
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ae=["Default","RowDirection","ColumnDirection","Disabled","WithPreselectedValues","WithDisabledOptions"];export{d as ColumnDirection,i as Default,p as Disabled,c as RowDirection,g as WithDisabledOptions,m as WithPreselectedValues,ae as __namedExportsOrder,ee as default};
