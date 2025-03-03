import{j as e}from"./jsx-runtime-C8_8iAox.js";import{R as a}from"./index-Dkaqzkgy.js";import{a as i}from"./index-cv2u5H8u.js";import{C as o}from"./RequestButtonLoadingIcon-XHoBIMsM.js";import"./styled-components.browser.esm-CcLIA1IU.js";import"./getTheme-atTn6El8.js";import"./index-BYR9mL9u.js";import"./index-CeiIY834.js";import"./index-D_Sj4glS.js";import"./index-CsQR8ihr.js";import"./index-S3W9OvcS.js";import"./index-BUk66RYN.js";import"./index-GuPfvejs.js";const L={title:"components/Input/InputText",component:i,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Input Label",placeholder:"Placeholder...",iconPrefix:e.jsx(o,{}),iconLabel:e.jsx(o,{}),iconSuffix:e.jsx(o,{}),typeSuffix:"dropdown",labelSuffix:"suffix",sizeInput:"md",showCount:!0,isRequired:!1,disabled:!1,type:"text",isLabel:!0,hintText:"Placeholder of hint text to help",errorMessage:"Error message",positiveMessage:"Positive message",isHintText:!0,readOnly:!1,isNegative:!1,isPositive:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},showCount:{control:{type:"radio"},options:[!0,!1]},sizeInput:{control:{type:"radio"},options:["md","lg"]},typeSuffix:{control:{type:"radio"},options:["icon","suffix","dropdown"]},hintText:{control:"text"},errorMessage:{control:"text"},isHintText:{control:{type:"radio"},options:[!0,!1]},isRequired:{control:{type:"radio"},options:[!0,!1]},disabled:{control:{type:"radio"},options:[!0,!1]},isLabel:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},isNegative:{control:{type:"radio"},options:[!0,!1]},isPositive:{control:{type:"radio"},options:[!0,!1]},value:{control:"text"},prefix:{control:"text"},onChange:{},onBlur:{},onEnter:{},onKeyDown:{},className:{}}},x=l=>{const[p,u]=a.useState(),c=a.useCallback(d=>{u(d)},[]);return e.jsx("div",{style:{width:"300px",marginBottom:10},children:e.jsx(i,{...l,value:p,onChange:c,maxLength:5})})},t=x.bind({});var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,L as default};
