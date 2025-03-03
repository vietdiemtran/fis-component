import{j as o}from"./jsx-runtime-50395f49.js";import{g as Y,r as N,R as d}from"./index-9fa1aa67.js";import{d as r}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";import"./index-1655f439.js";import"./index-51e99633.js";import{F as Z}from"./index-45fd36eb.js";import"./index-870a9257.js";import"./index-5708f3ff.js";import"./index-0d60e0f4.js";import{I as ee}from"./index-d96aba1a.js";import{D as ie}from"./RequestButtonLoadingIcon-fb8566b0.js";var R={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var m={}.hasOwnProperty;function u(){for(var i="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(i=s(i,g(t)))}return i}function g(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return u.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var n="";for(var t in i)m.call(i,t)&&i[t]&&(n=s(n,t));return n}function s(i,n){return n?i?i+" "+n:i+n:i}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(R);var oe=R.exports;const f=Y(oe),D=r.input`
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
`,p=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${e("com/input/field/size-md/icon/left-padding")};
  color: ${e("com/input/field/default/icon/color-icon/default")};
`,E=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/suffix/icon/color-icon")};
`,P=r.span`
  ${e("Paragraph/XS")};
  color: ${e("com/input/dropdown/label/color-text/default")};
`,F=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/dropdown/icon/color-icon/defaul")};
`,ne=r.div`
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

    ${F} {
      color: ${e("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${e("com/input/dropdown/background/pressed")};

    ${P} {
      color: ${e("com/input/dropdown/label/color-text/hover")};
    }

    ${F} {
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
`,te=r.div`
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
`,B=r.span`
  ${e("Paragraph/XS")};
  color: ${e("com/input/suffix/label/color-text")};
`,re=r.div`
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
    ${E} {
      color: ${e("com/input/field/disable/icon-color")};
    }

    .icon-suffix {
      display: none;
    }

    ${B} {
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
`,le=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
`,ae=r.span`
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
  padding-left: ${e("com/input/character-limit/horizontal-padding")};

  &.is-error {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
`,ce=r.div`
  display: flex;
  justify-content: space-between;
`,z=r.span`
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
`,v=N.forwardRef((a,m)=>{const{typeSuffix:u,textLabel:g="",isLabel:s,iconLabel:i,isRequired:n=!1,iconPrefix:t,sizeInput:h,showCount:$,hintText:y,isHintText:H=!1,errorMessage:A,positiveMessage:K,isNegative:S=!1,isPositive:L=!0,maxLength:k=0,value:w,disabled:T=!1,onChange:C,onEnter:I,onBlur:q,onKeyDown:V,onClickIconLabel:M,onClickSuffix:X,autoFocus:_,...O}=a,[j,x]=d.useState(""),W=d.useRef(!1),c=d.useRef(null),G=d.useCallback(l=>{x(l.target.value),C&&C(l.target.value)},[C]),J=d.useCallback(l=>{l&&l.key==="Enter"&&I&&I(l.currentTarget.value)},[I]),Q=d.useCallback(l=>{V&&V(l)},[V]),U=d.useCallback(l=>{typeof q=="function"&&q(l.currentTarget.value)},[q]);return d.useEffect(()=>{x(w||""),W.current=!0},[w]),d.useEffect(()=>{_&&c.current&&c.current.focus()},[_]),N.useImperativeHandle(m,()=>({...c.current,focus:()=>{c.current&&c.current.focus()},blur:()=>{c.current&&c.current.blur()},clear:()=>{c.current&&(c.current.value="",x(""))}})),o.jsxs(le,{children:[s&&o.jsx(ee,{textLabel:g,isRequired:n,iconLabel:i,onClickIconLabel:M}),o.jsx(ue,{...O,typeSuffix:u,sizeInput:h,value:j,iconPrefix:t,onChange:G,onKeyPress:J,onKeyDown:Q,onBlur:U,disabled:T,ref:c,isNegative:S,onClickSuffix:X}),o.jsxs(ce,{children:[S?o.jsx(z,{className:f({"is-error":S}),children:A}):L?o.jsx(z,{className:f({"is-positive":L}),children:K}):o.jsx(z,{className:f({"disabled-field":T}),children:H?y:""}),$&&k>0&&o.jsxs(ae,{className:f({"is-error":j.length>k}),children:[j.length,"/",k]})]})]})});v.displayName="FISInputText";const Se=v;try{v.displayName="FISInputText",v.__docgenInfo={description:"",displayName:"FISInputText",props:{isLabel:{defaultValue:null,description:"isLabel for current field",name:"isLabel",required:!0,type:{name:"boolean"}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"Hint text for current field",name:"hintText",required:!1,type:{name:"string"}},isHintText:{defaultValue:null,description:"Boolean to show the hint text",name:"isHintText",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"errorMessage for current field",name:"errorMessage",required:!1,type:{name:"string"}},positiveMessage:{defaultValue:null,description:"positiveMessage for current field",name:"positiveMessage",required:!1,type:{name:"string"}},isPositive:{defaultValue:null,description:"isPositive for current field",name:"isPositive",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"value for current field",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handle onChange action",name:"onChange",required:!1,type:{name:"((value: string | null) => void)"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},isNegative:{defaultValue:null,description:"isNegative for current field",name:"isNegative",required:!1,type:{name:"boolean"}},isActived:{defaultValue:null,description:"isActived for current field",name:"isActived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const b=N.forwardRef(({onClickSuffix:a,...m},u)=>{const{sizeInput:g="md",iconPrefix:s,iconSuffix:i,labelSuffix:n,typeSuffix:t,isNegative:h,isActived:$,...y}=m;return o.jsxs(re,{className:f({"input-text-lg":g==="lg","is-error":h,"is-dropdown":t==="dropdown"}),children:[s&&o.jsx(p,{children:s}),o.jsx(D,{...y,ref:u,className:f({"is-error":h})}),t==="icon"&&i&&o.jsx(Z,{size:"sm",icon:i,variant:"tertiary-invisible",className:"icon-suffix",onClick:a}),t==="suffix"&&o.jsxs(te,{onClick:a,children:[i&&o.jsx(E,{children:i}),n&&o.jsx(B,{children:n})]}),t==="dropdown"&&o.jsxs(ne,{className:f({"is-actived":$}),onClick:a,children:[i&&o.jsx(F,{children:i}),n&&o.jsx(P,{children:n}),o.jsx(E,{children:o.jsx(ie,{})})]})]})});b.displayName="FISInputField";const ue=b;try{b.displayName="FISInputField",b.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},isNegative:{defaultValue:null,description:"isNegative for current field",name:"isNegative",required:!1,type:{name:"boolean"}},isActived:{defaultValue:null,description:"isActived for current field",name:"isActived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}export{ue as I,Se as a};
