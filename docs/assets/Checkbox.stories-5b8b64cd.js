import{j as r}from"./jsx-runtime-e7d94ccb.js";import{C as a}from"./index-b8aa03b0.js";import{r as _}from"./index-981f9478.js";import"./InfoSolidIcon-78d566e9.js";import"./getTheme-9564f801.js";const O={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the checkbox",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the checkbox",table:{defaultValue:{summary:"sm"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state for uncontrolled usage"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},indeterminate:{control:"boolean",description:"Whether the checkbox is in indeterminate state"}}},t=e=>{const[L,T]=_.useState(!1),V=W=>{T(W.target.checked)};return r.jsx(a,{...e,checked:L,onChange:V,children:"Default Checkbox"})};t.args={checked:!1};const c=e=>r.jsx(a,{...e,children:"Checkbox with sublabel"});c.args={subLabel:"Additional information here"};const o=e=>r.jsxs("div",{children:[r.jsx(a,{...e,size:"sm",children:"Checkbox with sublabel"}),r.jsx(a,{...e,size:"md",children:"Checkbox with sublabel"})]}),n=e=>r.jsxs("div",{children:[r.jsx(a,{...e,variant:"primary",children:"Primary Checkbox"}),r.jsx(a,{...e,variant:"secondary",children:"Secondary Checkbox"}),r.jsx(a,{...e,variant:"tertiary",children:"Tertiary Checkbox"})]}),i=e=>r.jsx(a,{...e,defaultChecked:!0,children:"Checked Checkbox"}),s=e=>r.jsx(a,{...e,indeterminate:!0,children:"Indeterminate Checkbox"});s.parameters={docs:{description:{story:"Trạng thái indeterminate — thường dùng cho checkbox 'chọn tất cả' khi chỉ một phần được chọn."}}};const d=e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx(a,{...e,disabled:!0,children:"Disabled unchecked"}),r.jsx(a,{...e,disabled:!0,defaultChecked:!0,children:"Disabled checked"}),r.jsx(a,{...e,disabled:!0,indeterminate:!0,children:"Disabled indeterminate"})]});var h,l,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISCheckbox {...args} checked={checked} onChange={handleChange}>
      Default Checkbox
    </FISCheckbox>;
}`,...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var k,m,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"args => <FISCheckbox {...args}>Checkbox with sublabel</FISCheckbox>",...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,C,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div>
    <FISCheckbox {...args} size="sm">
      Checkbox with sublabel
    </FISCheckbox>
    <FISCheckbox {...args} size="md">
      Checkbox with sublabel
    </FISCheckbox>
  </div>`,...(p=(C=o.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};var S,g,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div>
    <FISCheckbox {...args} variant="primary">
      Primary Checkbox
    </FISCheckbox>
    <FISCheckbox {...args} variant="secondary">
      Secondary Checkbox
    </FISCheckbox>
    <FISCheckbox {...args} variant="tertiary">
      Tertiary Checkbox
    </FISCheckbox>
  </div>`,...(I=(g=n.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,y,F;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <FISCheckbox {...args} defaultChecked>
    Checked Checkbox
  </FISCheckbox>`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var v,j,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => <FISCheckbox {...args} indeterminate>
    Indeterminate Checkbox
  </FISCheckbox>`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var z,w,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 8
}}>
    <FISCheckbox {...args} disabled>
      Disabled unchecked
    </FISCheckbox>
    <FISCheckbox {...args} disabled defaultChecked>
      Disabled checked
    </FISCheckbox>
    <FISCheckbox {...args} disabled indeterminate>
      Disabled indeterminate
    </FISCheckbox>
  </div>`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const q=["Default","WithSubLabel","Sizes","Variants","Checked","Indeterminate","Disabled"];export{i as Checked,t as Default,d as Disabled,s as Indeterminate,o as Sizes,n as Variants,c as WithSubLabel,q as __namedExportsOrder,O as default};
