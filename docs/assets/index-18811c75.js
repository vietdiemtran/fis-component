import{j as t}from"./jsx-runtime-50395f49.js";import{r as V}from"./index-9fa1aa67.js";import{c as r}from"./index-668664f1.js";import{d as c}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";import{F as q}from"./index-c7f33007.js";import{b as F,d as _}from"./ResizeIcon-0deac5ef.js";import{F as D}from"./index-1fb00d0c.js";const d=c.input`
  all: unset;
  text-align: center;
  caret-color: ${e("com/typing-cursor/default")};
  ${e("Paragraph/Md")}
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  ::placeholder {
    color: ${e("com/input/field/default/label/color-text/placeholder")};
  }

  &:disabled,
  &:read-only {
    text-align: left;
    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }
  }

  &.negative {
    color: ${e("com/input/field/negative/label/color-text/inputed")};
  }
`,E=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  background-color: ${e("com/input/field/default/background/default")};
  height: ${e("com/input/field/size-md/height")};
  min-width: ${e("com/input/field/size-md/number/min-width")};
  min-height: ${e("com/input/field/size-md/height")};
  max-height: ${e("com/input/field/size-md/height")};
  border-radius: ${e("com/input/field/size-md/corner-radius")};
  border: ${e("com/input/field/stroke-width")} solid
    ${e("com/input/field/default/border/default")};
  padding-right: ${e("com/input/field/right-padding")};
  padding-left: ${e("com/input/field/left-padding")};

  .decrement,
  .increment {
    flex-shrink: 0;
  }

  .disabled-button {
    display: none;
  }

  &.input-text-lg {
    height: ${e("com/input/field/size-lg/height")};
    min-width: ${e("com/input/field/size-lg/number/min-width")};
    min-height: ${e("com/input/field/size-lg/height")};
    max-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }

  &:hover {
    border-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};
  }

  &:has(${d}:focus) {
    border-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${d}:disabled),
  &:has(${d}:read-only) {
    cursor: not-allowed;
    border-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
  }

  &.negative {
    border-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    &:hover {
      border-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};
    }

    &:has(${d}:focus) {
      border-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      outline: ${e("com/actived-mark/gap-spacing")} solid
        ${e("com/actived-mark/color-gap-spacing")};
    }
  }
`,R=c.div`
  display: flex;
  justify-content: space-between;
`,O=c.span`
  ${e("Paragraph/XS")}
  color: ${e("com/input/hint/neutral/label/color-text")};
  padding-top: ${e("com/input/hint/top-padding")};

  &.negative {
    color: ${e("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${e("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${e("com/input/hint/disable/label/color-text")};
  }
`,H=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
`,p=V.forwardRef(h=>{const{min:n,max:l,step:v=1,defaultValue:$,sizeInput:m="md",StartIcon:x,EndIcon:y,negative:f,positive:w,message:I,iconLabel:k,textLabel:S="",onClickIconLabel:z,disabled:u,readOnly:g,onChange:b,...C}=h,[a,s]=V.useState($!==void 0?$:void 0),j=()=>{s(o=>{const i=(o??n??0)+v;return l!==void 0&&i>l?l:i})},N=()=>{s(o=>{const i=(o??n??0)-v;return n!==void 0&&i<n?n:i})},L=o=>{const i=o.target.value?parseInt(o.target.value,10):void 0;isNaN(i)?s(void 0):(s(i),b==null||b(i))};return t.jsxs(H,{children:[(S||k)&&t.jsx(D,{textLabel:S,required:!0,iconLabel:k,onClickIconLabel:z}),t.jsxs(E,{className:r({negative:f,"input-text-lg":m==="lg"}),children:[t.jsx(q,{icon:x||t.jsx(F,{}),size:m==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:N,disabled:n!==void 0&&a!==void 0&&a<=n,className:r("decrement",{"disabled-button":u||g})}),t.jsx(d,{...C,disabled:u,readOnly:g,type:"number",value:a!==void 0?a:"",className:r({negative:f}),onChange:L}),t.jsx(q,{icon:y||t.jsx(_,{}),size:m==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:j,disabled:l!==void 0&&a!==void 0&&a>=l,className:r("increment",{"disabled-button":u||g})})]}),t.jsx(R,{children:t.jsx(O,{className:r({disabled:u,negative:f,positive:w}),children:I||""})})]})});p.displayName="FISInputStepper";const J=p;try{p.displayName="FISInputStepper",p.__docgenInfo={description:"",displayName:"FISInputStepper",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},sizeInput:{defaultValue:null,description:"",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},StartIcon:{defaultValue:null,description:"",name:"StartIcon",required:!1,type:{name:"ReactNode"}},EndIcon:{defaultValue:null,description:"",name:"EndIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{J as F};
