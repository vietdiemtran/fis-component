import{j as o}from"./jsx-runtime-C8_8iAox.js";import{g as Z,r as N,R as d}from"./index-Dkaqzkgy.js";import{d as t}from"./styled-components.browser.esm-CcLIA1IU.js";import{g as e}from"./getTheme-atTn6El8.js";import"./index-BYR9mL9u.js";import"./index-CeiIY834.js";import{F as ee}from"./index-D_Sj4glS.js";import"./index-CsQR8ihr.js";import"./index-S3W9OvcS.js";import"./index-BUk66RYN.js";import{F as ie}from"./index-GuPfvejs.js";import{D as oe}from"./RequestButtonLoadingIcon-XHoBIMsM.js";var j={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var B;function ne(){return B||(B=1,function(a){(function(){var m={}.hasOwnProperty;function u(){for(var i="",n=0;n<arguments.length;n++){var r=arguments[n];r&&(i=s(i,g(r)))}return i}function g(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return u.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var n="";for(var r in i)m.call(i,r)&&i[r]&&(n=s(n,r));return n}function s(i,n){return n?i?i+" "+n:i+n:i}a.exports?(u.default=u,a.exports=u):window.classNames=u})()}(j)),j.exports}var re=ne();const f=Z(re),D=t.input`
  width: 100%;
  ${e("Paragraph/Sm")}
  color: ${e("com/input/field/default/label/color-text/inputed")};
  padding-right: ${e("com/input/field/size-md/label/sub-spacing")};
  padding-left: ${e("com/input/field/size-md/label/sub-spacing")};
  border: none;
  background: transparent;
  outline: none;

  &::placeholder {
    color: ${e("com/input/field/default/label/color-text/placeholder")};
  }
  &:disabled {
    cursor: not-allowed;
    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }
  }
  &.is-error {
    color: ${e("com/input/field/negative/label/color-text/inputed")};
  }
`,p=t.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${e("com/input/field/size-md/icon/left-padding")};
  color: ${e("com/input/field/default/icon/color-icon/default")};
`,F=t.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/suffix/icon/color-icon")};
`,P=t.span`
  ${e("Paragraph/XS")};
  color: ${e("com/input/dropdown/label/color-text/default")};
`,L=t.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/dropdown/icon/color-icon/defaul")};
`,te=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e("com/input/dropdown/horizontal-gap")};
  padding-left: ${e("com/input/dropdown/horizontal-padding")};
  padding-right: ${e("com/input/dropdown/horizontal-padding")};
  border-left: ${e("com/input/dropdown/divider/stroke-width")} solid
    ${e("com/input/suffix/divider/color-stroke")};
  border-top-right-radius: ${e("com/input/field/size-md/corner-radius")};
  border-bottom-right-radius: ${e("com/input/field/size-md/corner-radius")};
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${e("com/input/dropdown/background/hover")};
    ${P} {
      color: ${e("com/input/dropdown/label/color-text/hover")};
    }

    ${L} {
      color: ${e("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${e("com/input/dropdown/background/pressed")};

    ${P} {
      color: ${e("com/input/dropdown/label/color-text/hover")};
    }

    ${L} {
      color: ${e("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow: 0 0 0 ${e("com/focus-mark/gap-spacing")}
        ${e("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${e("com/focus-mark/color-stroke")};
    border-radius: ${e("com/input/field/size-md/corner-radius")};
    border-left: none;
  }

  &.is-actived {
    background-color: ${e("com/input/dropdown/background/actived")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};
    border-left: none;
  }
`,le=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e("com/input/suffix/horizontal-padding")};
  padding-left: ${e("com/input/suffix/horizontal-padding")};
  padding-right: ${e("com/input/suffix/horizontal-padding")};
  border-left: ${e("com/input/suffix/divider/stroke-width")} solid
    ${e("com/input/suffix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;
`,H=t.span`
  ${e("Paragraph/XS")};
  color: ${e("com/input/suffix/label/color-text")};
`,ae=t.div`
  height: ${e("com/input/field/size-md/height")};
  min-height: ${e("com/input/field/size-md/height")};
  max-height: ${e("com/input/field/size-md/height")};
  border-radius: ${e("com/input/field/size-md/corner-radius")};
  border: ${e("com/input/field/stroke-width")} solid
    ${e("com/input/field/default/border/default")};
  background-color: ${e("com/input/field/default/background/default")};
  padding-right: ${e("com/input/field/right-padding")};
  padding-left: ${e("com/input/field/left-padding")};

  display: flex;
  align-items: center;

  &.is-dropdown {
    padding-right: 0;
  }
  .icon-suffix {
    flex-shrink: 0;
    color: ${e("com/button/tertiary/icon/color-icon/default")};
  }

  &.is-error {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }

  &.input-text-lg {
    height: ${e("com/input/field/size-lg/height")};
    min-height: ${e("com/input/field/size-lg/height")};
    max-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }

  &:has(${D}:disabled) {
    border-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${p} {
      color: ${e("com/input/field/disable/icon-color")};
    }
    ${F} {
      color: ${e("com/input/field/disable/icon-color")};
    }

    .icon-suffix {
      display: none;
    }

    ${H} {
      color: ${e("com/input/field/disable/label-color")};
    }

    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }
  }

  &:hover {
    border-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};

    ${p} {
      color: ${e("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${D}:focus) {
    border-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};

    ${p} {
      color: ${e("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.is-error {
    border-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    ${p} {
      color: ${e("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover {
      border-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};

      ${p} {
        color: ${e("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &::placeholder {
      color: ${e("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,ce=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
`,ue=t.span`
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
  padding-left: ${e("com/input/character-limit/horizontal-padding")};

  &.is-error {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
`,de=t.div`
  display: flex;
  justify-content: space-between;
`,z=t.span`
  ${e("Paragraph/XS")}
  color: ${e("com/input/hint/neutral/label/color-text")};
  padding-top: ${e("com/input/hint/top-padding")};

  &.is-error {
    color: ${e("com/input/hint/negative/label/color-text")};
  }

  &.is-positive {
    color: ${e("com/input/hint/positive/label/color-text")};
  }

  &.disabled-field {
    color: ${e("com/input/hint/disable/label/color-text")};
  }
`,_=N.forwardRef((a,m)=>{const{typeSuffix:u,textLabel:g="",isLabel:s,iconLabel:i,isRequired:n=!1,iconPrefix:r,sizeInput:h,showCount:b,hintText:$,isHintText:A=!1,errorMessage:K,positiveMessage:M,isNegative:y=!1,isPositive:T=!0,maxLength:S=0,value:k,disabled:E=!1,onChange:w,onEnter:C,onBlur:I,onKeyDown:q,onClickIconLabel:X,onClickSuffix:O,autoFocus:R,...W}=a,[V,x]=d.useState(""),G=d.useRef(!1),c=d.useRef(null),J=d.useCallback(l=>{x(l.target.value),w&&w(l.target.value)},[w]),Q=d.useCallback(l=>{l&&l.key==="Enter"&&C&&C(l.currentTarget.value)},[C]),U=d.useCallback(l=>{q&&q(l)},[q]),Y=d.useCallback(l=>{typeof I=="function"&&I(l.currentTarget.value)},[I]);return d.useEffect(()=>{x(k||""),G.current=!0},[k]),d.useEffect(()=>{R&&c.current&&c.current.focus()},[R]),N.useImperativeHandle(m,()=>({...c.current,focus:()=>{c.current&&c.current.focus()},blur:()=>{c.current&&c.current.blur()},clear:()=>{c.current&&(c.current.value="",x(""))}})),o.jsxs(ce,{children:[s&&o.jsx(ie,{textLabel:g,isRequired:n,iconLabel:i,onClickIconLabel:X}),o.jsx(v,{...W,typeSuffix:u,sizeInput:h,value:V,iconPrefix:r,onChange:J,onKeyPress:Q,onKeyDown:U,onBlur:Y,disabled:E,ref:c,isNegative:y,onClickSuffix:O}),o.jsxs(de,{children:[y?o.jsx(z,{className:f({"is-error":y}),children:K}):T?o.jsx(z,{className:f({"is-positive":T}),children:M}):o.jsx(z,{className:f({"disabled-field":E}),children:A?$:""}),b&&S>0&&o.jsxs(ue,{className:f({"is-error":V.length>S}),children:[V.length,"/",S]})]})]})});_.displayName="FISInputText";try{_.displayName="FISInputText",_.__docgenInfo={description:"",displayName:"FISInputText",props:{isLabel:{defaultValue:null,description:"isLabel for current field",name:"isLabel",required:!0,type:{name:"boolean"}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"Hint text for current field",name:"hintText",required:!1,type:{name:"string"}},isHintText:{defaultValue:null,description:"Boolean to show the hint text",name:"isHintText",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"errorMessage for current field",name:"errorMessage",required:!1,type:{name:"string"}},positiveMessage:{defaultValue:null,description:"positiveMessage for current field",name:"positiveMessage",required:!1,type:{name:"string"}},isPositive:{defaultValue:null,description:"isPositive for current field",name:"isPositive",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"value for current field",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handle onChange action",name:"onChange",required:!1,type:{name:"((value: string | null) => void)"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"any"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"any"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"any"}},isNegative:{defaultValue:null,description:"isNegative for current field",name:"isNegative",required:!1,type:{name:"boolean"}},isActived:{defaultValue:null,description:"isActived for current field",name:"isActived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const v=N.forwardRef(({onClickSuffix:a,...m},u)=>{const{sizeInput:g="md",iconPrefix:s,iconSuffix:i,labelSuffix:n,typeSuffix:r,isNegative:h,isActived:b,...$}=m;return o.jsxs(ae,{className:f({"input-text-lg":g==="lg","is-error":h,"is-dropdown":r==="dropdown"}),children:[s&&o.jsx(p,{children:s}),o.jsx(D,{...$,ref:u,className:f({"is-error":h})}),r==="icon"&&i&&o.jsx(ee,{size:"sm",icon:i,variant:"tertiary-invisible",className:"icon-suffix",onClick:a}),r==="suffix"&&o.jsxs(le,{onClick:a,children:[i&&o.jsx(F,{children:i}),n&&o.jsx(H,{children:n})]}),r==="dropdown"&&o.jsxs(te,{className:f({"is-actived":b}),onClick:a,children:[i&&o.jsx(L,{children:i}),n&&o.jsx(P,{children:n}),o.jsx(F,{children:o.jsx(oe,{})})]})]})});v.displayName="FISInputField";try{v.displayName="FISInputField",v.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"any"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"any"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"any"}},isNegative:{defaultValue:null,description:"isNegative for current field",name:"isNegative",required:!1,type:{name:"boolean"}},isActived:{defaultValue:null,description:"isActived for current field",name:"isActived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}export{v as F,_ as a};
