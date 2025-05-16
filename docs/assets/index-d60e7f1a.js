import{j as i}from"./jsx-runtime-47c18db8.js";import{r as z}from"./index-d806aa85.js";import{c as r}from"./index-d16835b1.js";import{d as c,g as e}from"./getTheme-624682de.js";import{F as S}from"./index-e72c950e.js";import{d as F,e as _}from"./ArrowRightIcon-2d46fdf7.js";import{F as D}from"./index-29f02deb.js";const o=c.input`
  all: unset;
  text-align: center;
  width: 100%;
  caret-color: ${e("com/typing-cursor/default")};
  ${e("Paragraph/Md")};
  padding-right: ${e("com/input/field/size-md/number/sub-spacing")};
  padding-left: ${e("com/input/field/size-md/number/sub-spacing")};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  ::placeholder {
    color: ${e("com/input/field/default/label/color-text/placeholder")};
  }

  &.input-text-lg {
    padding-right: ${e("com/input/field/size-lg/number/sub-spacing")};
    padding-left: ${e("com/input/field/size-lg/number/sub-spacing")};
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
    caret-color: ${e("com/typing-cursor/negative")};
  }
`,E=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  background-color: ${e("com/input/field/default/background/default")};
  height: ${e("com/input/field/size-md/height")};
  height: ${e("com/input/field/size-md/height")};
  min-width: ${e("com/input/field/size-md/number/min-width")};
  min-height: ${e("com/input/field/size-md/height")};
  max-height: ${e("com/input/field/size-md/height")};
  border-radius: ${e("com/input/field/size-md/corner-radius")};
  outline: ${e("com/input/field/stroke-width")} solid
    ${e("com/input/field/default/border/default")};
  outline-offset: -${e("com/input/field/stroke-width")};
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
    outline-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};
  }

  &:has(${o}:focus) {
    outline-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${o}:disabled),
  &:has(${o}:read-only) {
    cursor: not-allowed;
    outline-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
  }

  &:has(${o}:disabled) {
    pointer-events: none;
  }

  &.negative {
    outline-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    &:hover {
      outline-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};
    }

    &:has(${o}:focus) {
      outline-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
        ${e("com/actived-mark/color-gap-spacing-negative")};
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
`,h=z.forwardRef(v=>{const{min:n,max:d,step:$=1,defaultValue:x,sizeInput:u="md",StartIcon:y,EndIcon:I,negative:m,positive:w,message:f,iconLabel:k,textLabel:V="",onClickIconLabel:q,disabled:s,readOnly:g,onChange:b,...C}=v,[a,p]=z.useState(x!==void 0?x:void 0),j=()=>{p(l=>{const t=(l??n??0)+$;return d!==void 0&&t>d?d:t})},N=()=>{p(l=>{const t=(l??n??0)-$;return n!==void 0&&t<n?n:t})},L=l=>{const t=l.target.value?parseInt(l.target.value,10):void 0;isNaN(t)?p(void 0):(p(t),b==null||b(t))};return i.jsxs(H,{children:[(V||k)&&i.jsx(D,{textLabel:V,required:!0,iconLabel:k,onClickIconLabel:q}),i.jsxs(E,{className:r({negative:m,"input-text-lg":u==="lg"}),children:[i.jsx(S,{icon:y||i.jsx(F,{}),size:u==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:N,disabled:n!==void 0&&a!==void 0&&a<=n,className:r("decrement",{"disabled-button":s||g})}),i.jsx(o,{...C,disabled:s,readOnly:g,type:"number",value:a!==void 0?a:"",className:r({negative:m,"input-text-lg":u==="lg"}),onChange:L}),i.jsx(S,{icon:I||i.jsx(_,{}),size:u==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:j,disabled:d!==void 0&&a!==void 0&&a>=d,className:r("increment",{"disabled-button":s||g})})]}),f&&i.jsx(R,{children:i.jsx(O,{className:r({disabled:s,negative:m,positive:w}),children:f||""})})]})});h.displayName="FISInputStepper";try{h.displayName="FISInputStepper",h.__docgenInfo={description:"",displayName:"FISInputStepper",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},sizeInput:{defaultValue:null,description:"",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},StartIcon:{defaultValue:null,description:"",name:"StartIcon",required:!1,type:{name:"ReactNode"}},EndIcon:{defaultValue:null,description:"",name:"EndIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{h as F};
