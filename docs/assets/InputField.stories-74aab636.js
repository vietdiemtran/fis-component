import{j as t}from"./jsx-runtime-50395f49.js";import{R as o}from"./index-9fa1aa67.js";import{I as l}from"./index-ed097999.js";import{C as n}from"./RequestButtonLoadingIcon-fb8566b0.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";import"./index-359b10dc.js";import"./index-e7ff2084.js";import"./index-94aafcdd.js";import"./index-dbfa4e63.js";import"./index-5708f3ff.js";import"./index-0d60e0f4.js";import"./index-d316b2a1.js";const w={title:"components/Input/InputField",component:l,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{placeHolder:"Placeholder...",typeSuffix:"dropdown",iconPrefix:t.jsx(n,{}),iconSuffix:t.jsx(n,{}),labelSuffix:"Lable",sizeInput:"sm",isRequired:!1,readOnly:!1},argTypes:{placeHolder:{control:"text"},sizeInput:{control:{type:"radio"},options:["sm","lg"]},isRequired:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},typeSuffix:{control:{type:"radio"},options:["icon","suffix","dropdown"]},value:{control:"text"},disabled:{},onChange:{},onBlur:{},onEnter:{},onKeyDown:{},className:{}}},m=i=>{const[p,u]=o.useState(),d=o.useCallback(c=>{u(c)},[]);return t.jsx("div",{style:{width:"300px",marginBottom:10},children:t.jsx(l,{...i,value:p,onChange:d})})},e=m.bind({});var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,w as default};
