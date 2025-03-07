import{j as u}from"./jsx-runtime-50395f49.js";import{r as b}from"./index-9fa1aa67.js";import{F as g}from"./index-d46729db.js";import{d as s}from"./styled-components.browser.esm-6b0ce59b.js";const V=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: ${a=>a.$direction};
`,C=s.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function t({className:a,groupLabel:p,options:i,value:o=[],direction:c="row",disabled:m,getOptionDisabled:l,onChange:f,onFocus:v,onBlur:x}){const d="checkbox-group-"+b.useId(),r=o.filter(e=>i.some(n=>n.value===e)),h=e=>{const n=r.includes(e.value)?r.filter(y=>y!==e.value):[...r,e.value];f(n)};return u.jsxs(V,{role:"group",className:a,$direction:c,"aria-labelledby":d,children:[u.jsx(C,{id:d,children:p}),i.map(e=>u.jsx(g,{value:e.value,disabled:(l==null?void 0:l(e))??m,checked:o.includes(e.value),onChange:()=>h(e),onFocus:v,onBlur:x,children:e.label},e.value))]})}try{t.displayName="FISCheckboxGroup",t.__docgenInfo={description:"",displayName:"FISCheckboxGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<T>[] | readonly Option<T>[]"}},value:{defaultValue:{value:"[]"},description:"",name:"value",required:!1,type:{name:"T[]"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"((option: Option<T>) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(nextValue: T[]) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}}}catch{}export{t as F};
