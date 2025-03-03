import{j as p}from"./jsx-runtime-C8_8iAox.js";import{F as c}from"./index-S3W9OvcS.js";import{r as g}from"./index-Dkaqzkgy.js";import"./styled-components.browser.esm-CcLIA1IU.js";import"./getTheme-atTn6El8.js";const S={title:"Components/Radio",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the radio button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the radio button",table:{defaultValue:{summary:"md"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Whether the radio button is disabled"}}},e=a=>{const[n,o]=g.useState(!1),s=r=>{o(r.target.checked)};return p.jsx(c,{...a,checked:n,onChange:s,children:"Default Radio"})};e.args={checked:!1};const t=a=>{const[n,o]=g.useState(!1),s=r=>{o(r.target.checked)};return p.jsx(c,{...a,checked:n,onChange:s,children:"Radio with sublabel"})};t.args={subLabel:"Additional information here"};var d,i,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISRadio {...args} checked={checked} onChange={handleChange}>
      Default Radio
    </FISRadio>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var h,u,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISRadio {...args} checked={checked} onChange={handleChange}>
      Radio with sublabel
    </FISRadio>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Default","WithSubLabel"];export{e as Default,t as WithSubLabel,x as __namedExportsOrder,S as default};
