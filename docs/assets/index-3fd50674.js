import{j as d}from"./jsx-runtime-47c18db8.js";import{r as e}from"./index-d806aa85.js";import{F as g}from"./index-d21406d2.js";import{d as s,l as n}from"./getTheme-21dde6f8.js";const j=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${o=>o.$direction==="row"?n`
          flex-direction: row;
        `:n`
          flex-direction: column;
        `}
`,y=s.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function c({className:o,groupLabel:p,options:t,name:u,value:m,direction:f="row",disabled:x,size:h="md",classContent:v,getOptionDisabled:a,onChange:w,onFocus:R,onBlur:C},I){const i="radio-group-"+e.useId(),S=e.useRef(null),b=r=>{w(r.value)};return e.useImperativeHandle(I,()=>({focus:()=>{var l;const r=(l=S.current)==null?void 0:l.querySelector("label>input[type=radio]~span[id^=radio]");r&&r.scrollIntoView()}}),[]),d.jsxs(j,{role:"radiogroup",className:o,"aria-labelledby":i,$direction:f,children:[d.jsx(y,{id:i,children:p}),t.map(r=>d.jsx(g,{size:h,value:r.value,name:u,disabled:(a==null?void 0:a(r))??x,checked:r.value===m,className:v,onChange:()=>b(r),onFocus:R,onBlur:C,children:r.label},r.value))]})}const F=e.forwardRef(c),L=F;c.displayName="FISCheckboxGroup";export{L as F};
