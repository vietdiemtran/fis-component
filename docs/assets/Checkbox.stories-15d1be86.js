import{j as r}from"./jsx-runtime-50395f49.js";import{F as a}from"./index-0d60e0f4.js";import{r as f}from"./index-9fa1aa67.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";import"./RequestButtonLoadingIcon-fb8566b0.js";const L={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the checkbox",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the checkbox",table:{defaultValue:{summary:"sm"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},indeterminate:{control:"boolean",description:"Whether the checkbox is in indeterminate state"}}},t=e=>{const[S,g]=f.useState(!1),y=v=>{g(v.target.checked)};return r.jsx(a,{...e,checked:S,onChange:y,children:"Default Checkbox"})};t.args={checked:!1};const o=e=>r.jsx(a,{...e,children:"Checkbox with sublabel"});o.args={subLabel:"Additional information here"};const s=e=>r.jsxs("div",{children:[r.jsx(a,{...e,size:"sm",children:"Checkbox with sublabel"}),r.jsx(a,{...e,size:"md",children:"Checkbox with sublabel"})]}),c=e=>r.jsxs("div",{children:[r.jsx(a,{...e,variant:"primary",children:"Primary Checkbox"}),r.jsx(a,{...e,variant:"secondary",children:"Secondary Checkbox"}),r.jsx(a,{...e,variant:"tertiary",children:"Tertiary Checkbox"})]});var n,i,h;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISCheckbox {...args} checked={checked} onChange={handleChange}>
      Default Checkbox
    </FISCheckbox>;
}`,...(h=(i=t.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var d,l,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FISCheckbox {...args}>Checkbox with sublabel</FISCheckbox>",...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var m,x,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div>
    <FISCheckbox {...args} size="sm">
      Checkbox with sublabel
    </FISCheckbox>
    <FISCheckbox {...args} size="md">
      Checkbox with sublabel
    </FISCheckbox>
  </div>`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var p,C,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div>
    <FISCheckbox {...args} variant="primary">
      Primary Checkbox
    </FISCheckbox>
    <FISCheckbox {...args} variant="secondary">
      Secondary Checkbox
    </FISCheckbox>
    <FISCheckbox {...args} variant="tertiary">
      Tertiary Checkbox
    </FISCheckbox>
  </div>`,...(u=(C=c.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const V=["Default","WithSubLabel","Sizes","Variants"];export{t as Default,s as Sizes,c as Variants,o as WithSubLabel,V as __namedExportsOrder,L as default};
