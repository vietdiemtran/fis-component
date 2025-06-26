import{j as s}from"./jsx-runtime-47c18db8.js";import{r as c}from"./index-d806aa85.js";import{C as S}from"./index-baad6b63.js";import{d as t}from"./getTheme-624682de.js";const j=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: ${a=>a.$direction};
`,y=t.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function x({className:a,groupLabel:p,options:u,value:n=[],direction:h="row",disabled:f,classContent:m,size:v,getOptionDisabled:l,onChange:b,onFocus:C,onBlur:k},w){const d="checkbox-group-"+c.useId(),i=c.useRef(null),o=n.filter(e=>u.some(r=>r.value===e)),g=e=>{const r=o.includes(e.value)?o.filter(I=>I!==e.value):[...o,e.value];b(r)};return c.useImperativeHandle(w,()=>({focus:()=>{var r;const e=(r=i.current)==null?void 0:r.querySelector("label>input[type=checkox]~span[id^=checkox]");e&&e.scrollIntoView()}}),[]),s.jsxs(j,{ref:i,role:"group",className:a,$direction:h,"aria-labelledby":d,children:[s.jsx(y,{id:d,children:p}),u.map(e=>s.jsx(S,{size:v,value:e.value,disabled:(l==null?void 0:l(e))??f,checked:n.includes(e.value),className:m,onChange:()=>g(e),onFocus:C,onBlur:k,children:e.label},e.value))]})}const $=c.forwardRef(x);x.displayName="FISCheckboxGroup";export{$ as F};
