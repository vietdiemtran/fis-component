import{j as t}from"./jsx-runtime-50395f49.js";import{R as o}from"./index-9fa1aa67.js";import{T as l}from"./index-29b8ced6.js";import{C as a}from"./ResizeIcon-0deac5ef.js";import"./getTheme-fd88fed7.js";import"./index-668664f1.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./index-45fd36eb.js";import"./index-d99fcaf4.js";const T={title:"components/Input/TextArea",component:l,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Input Label",rows:3,size:"md",required:!0,iconLabel:t.jsx(a,{}),placeHolder:"Placeholder...",negative:!1,message:"Error message",positive:!0,showCount:!0,readOnly:!1,disabled:!1,iconSuffix:t.jsx(a,{})},argTypes:{textLabel:{control:"text"},rows:{control:{type:"number"}},placeHolder:{control:"text"},size:{control:{type:"radio"},options:["md","lg"]},required:{control:{type:"radio"},options:[!0,!1]},negative:{control:{type:"radio"},options:[!0,!1]},positive:{control:{type:"radio"},options:[!0,!1]},showCount:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},disabled:{control:{type:"radio"},options:[!0,!1]}}},m=i=>{const[p,u]=o.useState(),d=o.useCallback(c=>{u(c)},[]);return t.jsx("div",{style:{padding:"10px"},children:t.jsx(l,{...i,value:p,onChange:d,style:{width:"394px"}})})},e=m.bind({});var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [inputValue, setInputVal] = React.useState();
  const handleChangeValue = React.useCallback((value: any) => {
    setInputVal(value);
  }, []);
  return <div style={{
    padding: "10px"
  }}>
      <TextArea {...args} value={inputValue} onChange={handleChangeValue} style={{
      width: "394px"
    }} />
    </div>;
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,T as default};
