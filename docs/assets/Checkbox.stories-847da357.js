import{j as r}from"./jsx-runtime-47c18db8.js";import{C as a}from"./index-baad6b63.js";import{r as f}from"./index-d806aa85.js";import"./LineArrowsUp-4acd88f0.js";import"./getTheme-624682de.js";const E={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the checkbox",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the checkbox",table:{defaultValue:{summary:"sm"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},indeterminate:{control:"boolean",description:"Whether the checkbox is in indeterminate state"}}},t=e=>{const[S,g]=f.useState(!1),y=v=>{g(v.target.checked)};return r.jsx(a,{...e,checked:S,onChange:y,children:"Default Checkbox"})};t.args={checked:!1};const o=e=>r.jsx(a,{...e,children:"Checkbox with sublabel"});o.args={subLabel:"Additional information here"};const s=e=>r.jsxs("div",{children:[r.jsx(a,{...e,size:"sm",children:"Checkbox with sublabel"}),r.jsx(a,{...e,size:"md",children:"Checkbox with sublabel"})]}),c=e=>r.jsxs("div",{children:[r.jsx(a,{...e,variant:"primary",children:"Primary Checkbox"}),r.jsx(a,{...e,variant:"secondary",children:"Secondary Checkbox"}),r.jsx(a,{...e,variant:"tertiary",children:"Tertiary Checkbox"})]});var n,i,h;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISCheckbox {...args} checked={checked} onChange={handleChange}>
      Default Checkbox
    </FISCheckbox>;
}`,...(h=(i=t.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var d,l,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FISCheckbox {...args}>Checkbox with sublabel</FISCheckbox>",...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var x,m,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div>
    <FISCheckbox {...args} size="sm">
      Checkbox with sublabel
    </FISCheckbox>
    <FISCheckbox {...args} size="md">
      Checkbox with sublabel
    </FISCheckbox>
  </div>`,...(k=(m=s.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var C,p,u;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div>
    <FISCheckbox {...args} variant="primary">
      Primary Checkbox
    </FISCheckbox>
    <FISCheckbox {...args} variant="secondary">
      Secondary Checkbox
    </FISCheckbox>
    <FISCheckbox {...args} variant="tertiary">
      Tertiary Checkbox
    </FISCheckbox>
  </div>`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const L=["Default","WithSubLabel","Sizes","Variants"];export{t as Default,s as Sizes,c as Variants,o as WithSubLabel,L as __namedExportsOrder,E as default};
