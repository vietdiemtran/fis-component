import{j as o}from"./jsx-runtime-50395f49.js";import{c as f}from"./index-9d73bdd1.js";import{r as F,R as l}from"./index-9fa1aa67.js";import{d as i}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";import"./index-070353eb.js";import"./index-10bd0ab5.js";import"./index-e7ff2084.js";import{F as G}from"./index-94aafcdd.js";import"./index-dbfa4e63.js";import"./index-dab9e772.js";import"./index-5708f3ff.js";import"./index-ad83f7f1.js";import{F as J}from"./index-3a3497fa.js";import{b as M}from"./RequestButtonLoadingIcon-c839309c.js";const b=i.input`
  width: 100%;
  ${e("Paragraph/Sm")}
  color: ${e("com/input/field/default/label/color-text/inputed")};
  padding-right: ${e("com/input/field/size-md/label/sub-spacing")};
  padding-left: ${e("com/input/field/size-md/label/sub-spacing")};
  caret-color: ${e("com/typing-cursor/default")};
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
  &.negative {
    color: ${e("com/input/field/negative/label/color-text/inputed")};
  }
`,c=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${e("com/input/field/size-md/icon/left-padding")};
  color: ${e("com/input/field/default/icon/color-icon/default")};
`,D=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/suffix/icon/color-icon")};
`,E=i.span`
  ${e("Paragraph/XS")};
  color: ${e("com/input/dropdown/label/color-text/default")};
`,_=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/dropdown/icon/color-icon/defaul")};
`,O=i.div`
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
    ${E} {
      color: ${e("com/input/dropdown/label/color-text/hover")};
    }

    ${_} {
      color: ${e("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${e("com/input/dropdown/background/pressed")};

    ${E} {
      color: ${e("com/input/dropdown/label/color-text/hover")};
    }

    ${_} {
      color: ${e("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${e("com/focus-mark/gap-spacing")}
        ${e("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${e("com/focus-mark/color-stroke")};
    border-radius: ${e("com/input/field/size-md/corner-radius")};
    border-left: none;
  }

  &.actived {
    background-color: ${e("com/input/dropdown/background/actived")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};
    border-left: none;
  }

  &.disabled {
    cursor: not-allowed;
  }
`,Q=i.div`
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

  &.disabled {
    cursor: not-allowed;
  }
`,L=i.span`
  ${e("Paragraph/XS")};
  color: ${e("com/input/suffix/label/color-text")};
`,U=i.div`
  width: fit-content;
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

  &.dropdown {
    padding-right: 0;
  }
  .icon-suffix {
    flex-shrink: 0;
    color: ${e("com/button/tertiary/icon/color-icon/default")};
  }

  &.negative {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }

  &.input-text-lg {
    height: ${e("com/input/field/size-lg/height")};
    min-height: ${e("com/input/field/size-lg/height")};
    max-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }

  &:has(${b}:disabled) {
    border-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${c} {
      color: ${e("com/input/field/disable/icon-color")};
    }
    ${D} {
      color: ${e("com/input/field/disable/icon-color")};
    }

    .icon-suffix {
      display: none;
    }

    ${L} {
      color: ${e("com/input/field/disable/label-color")};
    }

    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }
  }

  &:hover {
    border-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};

    ${c} {
      color: ${e("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${b}:focus) {
    border-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};

    ${c} {
      color: ${e("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.negative {
    border-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    ${c} {
      color: ${e("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover {
      border-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};

      ${c} {
        color: ${e("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &:has(${b}:focus) {
      border-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      outline: ${e("com/actived-mark/gap-spacing")} solid
        ${e("com/actived-mark/color-gap-spacing")};

      ${c} {
        color: ${e("com/input/field/negative/icon/color-icon/active")};
      }
    }

    &::placeholder {
      color: ${e("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,Y=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
  width: fit-content;
`,Z=i.span`
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
  padding-left: ${e("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
`,ee=i.div`
  display: flex;
  justify-content: space-between;
`,oe=i.span`
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
`,x=F.forwardRef((a,y)=>{const{typeSuffix:S,textLabel:g="",iconLabel:p,required:r,iconPrefix:d,sizeInput:u,showCount:s,message:m,negative:h,positive:k,maxLength:w=500,value:C,disabled:N,onChange:I,onEnter:z,onBlur:V,onKeyDown:q,onClickIconLabel:B,onClickSuffix:T,autoFocus:P,...R}=a,[j,v]=l.useState(""),H=l.useRef(!1),t=l.useRef(null),K=l.useCallback(n=>{v(n.target.value),I&&I(n.target.value)},[I]),X=l.useCallback(n=>{n&&n.key==="Enter"&&z&&z(n.currentTarget.value)},[z]),W=l.useCallback(n=>{q&&q(n)},[q]),A=l.useCallback(n=>{typeof V=="function"&&V(n.currentTarget.value)},[V]);return l.useEffect(()=>{v(C||""),H.current=!0},[C]),l.useEffect(()=>{P&&t.current&&t.current.focus()},[P]),F.useImperativeHandle(y,()=>({...t.current,focus:()=>{t.current&&t.current.focus()},blur:()=>{t.current&&t.current.blur()},clear:()=>{t.current&&(t.current.value="",v(""))}})),o.jsxs(Y,{children:[(g||p)&&o.jsx(J,{textLabel:g,required:r,iconLabel:p,onClickIconLabel:B}),o.jsx(ie,{...R,typeSuffix:S,sizeInput:u,value:j,iconPrefix:d,onChange:K,onKeyPress:X,onKeyDown:W,onBlur:A,disabled:N,ref:t,negative:h,onClickSuffix:T}),o.jsxs(ee,{children:[o.jsx(oe,{className:f({disabled:N,negative:h,positive:k}),children:m||""}),s&&w>0&&o.jsxs(Z,{className:f({negative:j.length>w}),children:[j.length,"/",w]})]})]})});x.displayName="FISInputText";const be=x;try{x.displayName="FISInputText",x.__docgenInfo={description:"",displayName:"FISInputText",props:{showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"value for current field",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handle onChange action",name:"onChange",required:!1,type:{name:"((value: string | null) => void)"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const $=F.forwardRef(({onClickSuffix:a,...y},S)=>{const{sizeInput:g="md",iconPrefix:p,iconSuffix:r,labelSuffix:d,typeSuffix:u,disabled:s=!0,negative:m,actived:h,...k}=y;return o.jsxs(U,{className:f({"input-text-lg":g==="lg",negative:m,dropdown:u==="dropdown"}),children:[p&&o.jsx(c,{children:p}),o.jsx(b,{...k,ref:S,disabled:s,className:f({negative:m})}),u==="icon"&&r&&o.jsx(G,{size:"sm",icon:r,variant:"tertiary-invisible",className:"icon-suffix",onClick:a,disabled:s}),u==="suffix"&&o.jsxs(Q,{onClick:a,className:f({disabled:s}),children:[r&&o.jsx(D,{children:r}),d&&o.jsx(L,{children:d})]}),u==="dropdown"&&o.jsxs(O,{className:f({actived:h,disabled:s}),onClick:a,children:[r&&o.jsx(_,{children:r}),d&&o.jsx(E,{children:d}),o.jsx(D,{children:o.jsx(M,{})})]})]})});$.displayName="FISInputField";const ie=$;try{$.displayName="FISInputField",$.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}export{ie as F,be as a};
