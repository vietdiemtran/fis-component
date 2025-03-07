import{j as e}from"./jsx-runtime-50395f49.js";import{F as s}from"./index-b3650d7f.js";import{d as r}from"./styled-components.browser.esm-6b0ce59b.js";import{g as l}from"./getTheme-fd88fed7.js";import{R as d}from"./index-9fa1aa67.js";const u=r.div`
  width: 100%;
  display: flex;
  align-items: center;
`,p=r.label`
  ${l("Label/Sm")}
  color: ${l("com/input/label/label/color-text")};
`,m=r.span`
  ${l("Label/Sm")}
  color: ${l("com/input/label/required-mark/color-text")};
`,a=d.forwardRef(t=>{const{textLabel:o,required:i,iconLabel:n,onClickIconLabel:c}=t;return e.jsxs(u,{children:[e.jsxs(p,{children:[o,i&&e.jsx(m,{children:" *"})]}),n&&e.jsx(s,{size:"xs",variant:"tertiary-invisible",icon:n,onClick:c})]})});a.displayName="FISInputLabel";const S=a;try{a.displayName="FISInputLabel",a.__docgenInfo={description:"",displayName:"FISInputLabel",props:{textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"Show symbol * as required field",name:"required",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{S as F};
