import{j as l}from"./jsx-runtime-50395f49.js";import{r as x}from"./index-9fa1aa67.js";import{F as h}from"./index-fcd6afa8.js";import{d as u,l as i}from"./styled-components.browser.esm-6b0ce59b.js";const V=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${a=>a.$direction==="row"?i`
          flex-direction: row;
        `:i`
          flex-direction: column;
        `}
`,b=u.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function o({className:a,groupLabel:d,options:t,name:p,value:s,direction:c="row",disabled:m,getOptionDisabled:r,onChange:f,onFocus:v,onBlur:y}){const n="radio-group-"+x.useId(),g=e=>{f(e.value)};return l.jsxs(V,{role:"radiogroup",className:a,"aria-labelledby":n,$direction:c,children:[l.jsx(b,{id:n,children:d}),t.map(e=>l.jsx(h,{value:e.value,name:p,disabled:(r==null?void 0:r(e))??m,checked:e.value===s,onChange:()=>g(e),onFocus:v,onBlur:y,children:e.label},e.value))]})}try{o.displayName="FISRadioGroup",o.__docgenInfo={description:"",displayName:"FISRadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<T>[] | readonly Option<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Value | null"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"((option: Option<T>) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(nextValue: T) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}}}catch{}export{o as F};
