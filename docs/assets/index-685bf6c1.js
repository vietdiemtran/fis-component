import{j as e}from"./jsx-runtime-47c18db8.js";import{F as s}from"./index-218a7fe1.js";import{d as t}from"./styled-components.browser.esm-c9db8114.js";import{g as l}from"./getTheme-fd88fed7.js";const d=t.div`
  width: 100%;
  display: flex;
  align-items: center;
`,u=t.label`
  ${l("Label/Sm")}
  color: ${l("com/input/label/label/color-text")};
`,p=t.span`
  ${l("Label/Sm")}
  color: ${l("com/input/label/required-mark/color-text")};
`,a=r=>{const{textLabel:o,required:i,iconLabel:n,onClickIconLabel:c}=r;return e.jsxs(d,{children:[e.jsxs(u,{children:[o,i&&e.jsx(p,{children:" *"})]}),n&&e.jsx(s,{size:"xs",variant:"tertiary-invisible",icon:n,onClick:c})]})};a.displayName="FISInputLabel";const I=a;try{a.displayName="FISInputLabel",a.__docgenInfo={description:"",displayName:"FISInputLabel",props:{textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"Show symbol * as required field",name:"required",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{I as F};
