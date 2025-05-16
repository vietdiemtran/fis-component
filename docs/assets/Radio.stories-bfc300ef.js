import{j as u}from"./jsx-runtime-47c18db8.js";import{F as o}from"./index-b7f7c535.js";import{r as s}from"./index-d806aa85.js";import"./getTheme-624682de.js";const C={title:"Components/Radio",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Visual style variant of the radio button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md"],description:"Size of the radio button",table:{defaultValue:{summary:"md"}}},subLabel:{control:"text",description:"Additional text displayed below the main label"},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Whether the radio button is disabled"}}},t=e=>{const[m,r]=s.useState(e.checked);s.useEffect(()=>{r(e.checked)},[e.checked]);const p=b=>{r(b.target.checked)};return u.jsx(o,{...e,checked:m,onChange:p,children:"Default Radio"})};t.args={checked:!1};const a=e=>u.jsx(o,{...e,children:"Radio with sublabel"});a.args={subLabel:"Additional information here"};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,l,h;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <FISRadio {...args}>Radio with sublabel</FISRadio>;
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const S=["Default","WithSubLabel"];export{t as Default,a as WithSubLabel,S as __namedExportsOrder,C as default};
