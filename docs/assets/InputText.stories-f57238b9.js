import{j as e}from"./jsx-runtime-50395f49.js";import{R as a}from"./index-9fa1aa67.js";import{a as i}from"./index-ed097999.js";import{C as o}from"./RequestButtonLoadingIcon-fb8566b0.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";import"./index-359b10dc.js";import"./index-e7ff2084.js";import"./index-94aafcdd.js";import"./index-dbfa4e63.js";import"./index-5708f3ff.js";import"./index-0d60e0f4.js";import"./index-d316b2a1.js";const R={title:"components/Input/InputText",component:i,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Input Label",placeholder:"Placeholder...",iconPrefix:e.jsx(o,{}),iconLabel:e.jsx(o,{}),iconSuffix:e.jsx(o,{}),typeSuffix:"dropdown",labelSuffix:"suffix",sizeInput:"md",showCount:!0,isRequired:!1,disabled:!1,type:"text",isLabel:!0,hintText:"Placeholder of hint text to help",errorMessage:"Error message",positiveMessage:"Positive message",isHintText:!0,readOnly:!1,isNegative:!1,isPositive:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},showCount:{control:{type:"radio"},options:[!0,!1]},sizeInput:{control:{type:"radio"},options:["md","lg"]},typeSuffix:{control:{type:"radio"},options:["icon","suffix","dropdown"]},hintText:{control:"text"},errorMessage:{control:"text"},isHintText:{control:{type:"radio"},options:[!0,!1]},isRequired:{control:{type:"radio"},options:[!0,!1]},disabled:{control:{type:"radio"},options:[!0,!1]},isLabel:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},isNegative:{control:{type:"radio"},options:[!0,!1]},isPositive:{control:{type:"radio"},options:[!0,!1]},value:{control:"text"},prefix:{control:"text"},onChange:{},onBlur:{},onEnter:{},onKeyDown:{},className:{}}},x=l=>{const[p,u]=a.useState(),c=a.useCallback(d=>{u(d)},[]);return e.jsx("div",{style:{width:"300px",marginBottom:10},children:e.jsx(i,{...l,value:p,onChange:c,maxLength:5})})},t=x.bind({});var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeValue = React.useCallback((value: any) => {
    setValue(value);
  }, []);
  return <div style={{
    width: "300px",
    marginBottom: 10
  }}>
      <InputText {...args} value={value} onChange={handleChangeValue} maxLength={5} />
    </div>;
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,R as default};
