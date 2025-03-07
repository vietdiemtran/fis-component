import{j as k}from"./jsx-runtime-50395f49.js";import{F as d}from"./index-fcd6afa8.js";import{r}from"./index-9fa1aa67.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";const S={title:"Components/Radio",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the radio button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the radio button",table:{defaultValue:{summary:"md"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Whether the radio button is disabled"}}},t=e=>{const[o,n]=r.useState(e.checked);r.useEffect(()=>{n(e.checked)},[e.checked]);const c=s=>{n(s.target.checked)};return k.jsx(d,{...e,checked:o,onChange:c,children:"Default Radio"})};t.args={checked:!1};const a=e=>{const[o,n]=r.useState(!1),c=s=>{n(s.target.checked)};return k.jsx(d,{...e,checked:o,onChange:c,children:"Radio with sublabel"})};a.args={subLabel:"Additional information here"};var i,h,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISRadio {...args} checked={checked} onChange={handleChange}>
      Default Radio
    </FISRadio>;
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FISRadio {...args} checked={checked} onChange={handleChange}>
      Radio with sublabel
    </FISRadio>;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Default","WithSubLabel"];export{t as Default,a as WithSubLabel,x as __namedExportsOrder,S as default};
