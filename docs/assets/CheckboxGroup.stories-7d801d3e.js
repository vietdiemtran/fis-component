import{j as a}from"./jsx-runtime-50395f49.js";import{r}from"./index-9fa1aa67.js";import{F as o}from"./index-a6b61344.js";import"./index-d46729db.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";import"./ResizeIcon-0deac5ef.js";const A={title:"Components/Checkbox Group",component:o,tags:["autodocs"],parameters:{docs:{description:{story:"A group of checkboxes that allows users to select multiple options."}}},argTypes:{direction:{control:"radio",options:["row","column"],defaultValue:"row",description:"Defines the layout direction of the checkboxes."},disabled:{control:"boolean",description:"Disables all checkboxes in the group."},groupLabel:{control:"text",description:"Label displayed for the checkbox group."}}},l=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],n={render:e=>{const[s,t]=r.useState([]);return a.jsx(o,{...e,value:s,onChange:t,options:l,groupLabel:"Basic Example"})}},u={render:e=>{const[s,t]=r.useState([]);return a.jsx(o,{...e,value:s,onChange:t,options:l,groupLabel:"Row Direction Example",direction:"row"})}},c={render:e=>{const[s,t]=r.useState([]);return a.jsx(o,{...e,value:s,onChange:t,options:l,groupLabel:"Column Direction Example",direction:"column"})}},i={render:e=>{const[s,t]=r.useState([]);return a.jsx(o,{...e,value:s,onChange:t,options:l,groupLabel:"Disabled Example",disabled:!0})}},d={render:e=>{const[s,t]=r.useState(["1","3"]);return a.jsx(o,{...e,value:s,onChange:t,options:l,groupLabel:"Pre-selected Values Example"})}},p={render:e=>{const[s,t]=r.useState([]);return a.jsx(o,{...e,value:s,onChange:t,options:l,groupLabel:"Individual Disabled Options Example",getOptionDisabled:F=>["2","4"].includes(F.value)})}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Basic Example" />;
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,V,x;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Row Direction Example" direction="row" />;
  }
}`,...(x=(V=u.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var h,C,D;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Column Direction Example" direction="column" />;
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var v,f,O;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Disabled Example" disabled={true} />;
  }
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var E,L,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(["1", "3"]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Pre-selected Values Example" />;
  }
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,I,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return <FISCheckboxGroup {...args} value={selectedValues} onChange={setSelectedValues} options={defaultOptions} groupLabel="Individual Disabled Options Example" getOptionDisabled={option => ["2", "4"].includes(option.value)} />;
  }
}`,...(j=(I=p.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const T=["Default","RowDirection","ColumnDirection","Disabled","WithPreselectedValues","WithDisabledOptions"];export{c as ColumnDirection,n as Default,i as Disabled,u as RowDirection,p as WithDisabledOptions,d as WithPreselectedValues,T as __namedExportsOrder,A as default};
