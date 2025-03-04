import{j as a}from"./jsx-runtime-50395f49.js";import{g as _,r as V}from"./index-9fa1aa67.js";import{d as f}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";import{F as w}from"./index-94aafcdd.js";import{d as E,e as D}from"./RequestButtonLoadingIcon-c839309c.js";import{F as O}from"./index-3a3497fa.js";var j={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(u){(function(){var o={}.hasOwnProperty;function i(){for(var t="",n=0;n<arguments.length;n++){var l=arguments[n];l&&(t=s(t,b(l)))}return t}function b(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var l in t)o.call(t,l)&&t[l]&&(n=s(n,l));return n}function s(t,n){return n?t?t+" "+n:t+n:t}u.exports?(i.default=i,u.exports=i):window.classNames=i})()})(j);var R=j.exports;const p=_(R),m=f.input`
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
`,P=f.div`
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

  &:has(${m}:focus) {
    border-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${m}:disabled),
  &:has(${m}:read-only) {
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

    &:has(${m}:focus) {
      border-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      outline: ${e("com/actived-mark/gap-spacing")} solid
        ${e("com/actived-mark/color-gap-spacing")};
    }
  }
`,A=f.div`
  display: flex;
  justify-content: space-between;
`,H=f.span`
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
`,B=f.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
`,h=V.forwardRef(u=>{const{min:o,max:i,step:b=1,defaultValue:s,sizeInput:t="md",StartIcon:n,EndIcon:l,negative:$,positive:q,message:I,iconLabel:k,textLabel:S="",onClickIconLabel:z,disabled:g,readOnly:x,onChange:y,...C}=u,[d,v]=V.useState(s!==void 0?s:void 0),N=()=>{v(c=>{const r=(c??o??0)+b;return i!==void 0&&r>i?i:r})},L=()=>{v(c=>{const r=(c??o??0)-b;return o!==void 0&&r<o?o:r})},F=c=>{const r=c.target.value?parseInt(c.target.value,10):void 0;isNaN(r)?v(void 0):(v(r),y==null||y(r))};return a.jsxs(B,{children:[(S||k)&&a.jsx(O,{textLabel:S,required:!0,iconLabel:k,onClickIconLabel:z}),a.jsxs(P,{className:p({negative:$,"input-text-lg":t==="lg"}),children:[a.jsx(w,{icon:n||a.jsx(E,{}),size:t==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:L,disabled:o!==void 0&&d!==void 0&&d<=o,className:p("decrement",{"disabled-button":g||x})}),a.jsx(m,{...C,disabled:g,readOnly:x,type:"number",value:d!==void 0?d:"",className:p({negative:$}),onChange:F}),a.jsx(w,{icon:l||a.jsx(D,{}),size:t==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:N,disabled:i!==void 0&&d!==void 0&&d>=i,className:p("increment",{"disabled-button":g||x})})]}),a.jsx(A,{children:a.jsx(H,{className:p({disabled:g,negative:$,positive:q}),children:I||""})})]})});h.displayName="FISInputStepper";const Q=h;try{h.displayName="FISInputStepper",h.__docgenInfo={description:"",displayName:"FISInputStepper",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},sizeInput:{defaultValue:null,description:"",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},StartIcon:{defaultValue:null,description:"",name:"StartIcon",required:!1,type:{name:"ReactNode"}},EndIcon:{defaultValue:null,description:"",name:"EndIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{Q as F,p as c};
