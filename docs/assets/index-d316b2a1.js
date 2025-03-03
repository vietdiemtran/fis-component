import{j as e}from"./jsx-runtime-50395f49.js";import{F as c}from"./index-94aafcdd.js";import{d as t}from"./styled-components.browser.esm-6b0ce59b.js";import{g as l}from"./getTheme-fd88fed7.js";import{R as s}from"./index-9fa1aa67.js";const d=t.div`
  width: 100%;
  display: flex;
  align-items: center;
`,u=t.label`
  ${l("Label/Sm")}
  color: ${l("com/input/label/label/color-text")};
`,p=t.span`
  ${l("Label/Sm")}
  color: ${l("com/input/label/required-mark/color-text")};
`,m=s.forwardRef(a=>{const{textLabel:n,isRequired:o,iconLabel:r,onClickIconLabel:i}=a;return e.jsxs(d,{children:[e.jsxs(u,{children:[n,o&&e.jsx(p,{children:" *"})]}),r&&e.jsx(c,{size:"xs",variant:"tertiary-invisible",icon:r,onClick:i})]})}),y=m;try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!0,type:{name:"string"}},isRequired:{defaultValue:null,description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{y as I};
