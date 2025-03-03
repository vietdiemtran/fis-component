import{j as e}from"./jsx-runtime-C8_8iAox.js";import{F as c}from"./index-D_Sj4glS.js";import{d as a}from"./styled-components.browser.esm-CcLIA1IU.js";import{g as l}from"./getTheme-atTn6El8.js";import{R as s}from"./index-Dkaqzkgy.js";const d=a.div`
  width: 100%;
  display: flex;
  align-items: center;
`,u=a.label`
  ${l("Label/Sm")}
  color: ${l("com/input/label/label/color-text")};
`,p=a.span`
  ${l("Label/Sm")}
  color: ${l("com/input/label/required-mark/color-text")};
`,I=s.forwardRef(t=>{const{textLabel:i,isRequired:n,iconLabel:r,onClickIconLabel:o}=t;return e.jsxs(d,{children:[e.jsxs(u,{children:[i,n&&e.jsx(p,{children:" *"})]}),r&&e.jsx(c,{size:"xs",variant:"tertiary-invisible",icon:r,onClick:o})]})});try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!0,type:{name:"string"}},isRequired:{defaultValue:null,description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{I as F};
