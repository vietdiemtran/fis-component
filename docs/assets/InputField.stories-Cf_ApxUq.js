import{j as t}from"./jsx-runtime-C8_8iAox.js";import{R as o}from"./index-Dkaqzkgy.js";import{F as l}from"./index-cv2u5H8u.js";import{C as n}from"./RequestButtonLoadingIcon-XHoBIMsM.js";import"./styled-components.browser.esm-CcLIA1IU.js";import"./getTheme-atTn6El8.js";import"./index-BYR9mL9u.js";import"./index-CeiIY834.js";import"./index-D_Sj4glS.js";import"./index-CsQR8ihr.js";import"./index-S3W9OvcS.js";import"./index-BUk66RYN.js";import"./index-GuPfvejs.js";const V={title:"components/Input/InputField",component:l,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{placeHolder:"Placeholder...",typeSuffix:"dropdown",iconPrefix:t.jsx(n,{}),iconSuffix:t.jsx(n,{}),labelSuffix:"Lable",sizeInput:"sm",isRequired:!1,readOnly:!1},argTypes:{placeHolder:{control:"text"},sizeInput:{control:{type:"radio"},options:["sm","lg"]},isRequired:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},typeSuffix:{control:{type:"radio"},options:["icon","suffix","dropdown"]},value:{control:"text"},disabled:{},onChange:{},onBlur:{},onEnter:{},onKeyDown:{},className:{}}},m=i=>{const[p,u]=o.useState(),d=o.useCallback(c=>{u(c)},[]);return t.jsx("div",{style:{width:"300px",marginBottom:10},children:t.jsx(l,{...i,value:p,onChange:d})})},e=m.bind({});var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
  const [value, setValue] = React.useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeValue = React.useCallback((value: any) => {
    setValue(value);
  }, []);
  return <div style={{
    width: "300px",
    marginBottom: 10
  }}>
      <InputField {...args} value={value} onChange={handleChangeValue} />
    </div>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,V as default};
