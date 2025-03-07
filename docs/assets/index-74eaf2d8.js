import{j as o}from"./jsx-runtime-50395f49.js";import{c as f}from"./index-668664f1.js";import{r as F,R as r}from"./index-9fa1aa67.js";import{d as i}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";import"./index-070353eb.js";import"./index-fdd0a3fa.js";import"./index-bd582fb1.js";import{F as J}from"./index-45fd36eb.js";import"./index-c25bbc7c.js";import"./index-c53f7bcf.js";import"./index-fcd6afa8.js";import"./index-d46729db.js";import{F as M}from"./index-d99fcaf4.js";import"./index-9bca6080.js";import"./index-29b8ced6.js";import"./index-3955abd2.js";import{f as O}from"./ResizeIcon-0deac5ef.js";const b=i.input`
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
`,N=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/input/dropdown/icon/color-icon/defaul")};
`,Q=i.div`
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

    ${N} {
      color: ${e("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${e("com/input/dropdown/background/pressed")};

    ${E} {
      color: ${e("com/input/dropdown/label/color-text/hover")};
    }

    ${N} {
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
`,U=i.div`
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
`,Y=i.div`
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
`,Z=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
  width: fit-content;
`,ee=i.span`
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
  padding-left: ${e("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
`,oe=i.div`
  display: flex;
  justify-content: space-between;
`,ie=i.span`
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
`,x=F.forwardRef((a,y)=>{const{className:S,typeSuffix:k,textLabel:p="",iconLabel:l,required:d,iconPrefix:u,sizeInput:s,showCount:m,message:g,negative:h,positive:B,maxLength:w=500,value:C,disabled:_,onChange:I,onEnter:z,onBlur:V,onKeyDown:q,onClickIconLabel:T,onClickSuffix:R,autoFocus:P,...H}=a,[j,v]=r.useState(""),K=r.useRef(!1),t=r.useRef(null),X=r.useCallback(n=>{v(n.target.value),I&&I(n.target.value)},[I]),W=r.useCallback(n=>{n&&n.key==="Enter"&&z&&z(n.currentTarget.value)},[z]),A=r.useCallback(n=>{q&&q(n)},[q]),G=r.useCallback(n=>{typeof V=="function"&&V(n.currentTarget.value)},[V]);return r.useEffect(()=>{v(C||""),K.current=!0},[C]),r.useEffect(()=>{P&&t.current&&t.current.focus()},[P]),F.useImperativeHandle(y,()=>({...t.current,focus:()=>{t.current&&t.current.focus()},blur:()=>{t.current&&t.current.blur()},clear:()=>{t.current&&(t.current.value="",v(""))}})),o.jsxs(Z,{className:S,children:[(p||l)&&o.jsx(M,{textLabel:p,required:d,iconLabel:l,onClickIconLabel:T}),o.jsx(ne,{...H,typeSuffix:k,sizeInput:s,value:j,iconPrefix:u,onChange:X,onKeyPress:W,onKeyDown:A,onBlur:G,disabled:_,ref:t,negative:h,onClickSuffix:R}),o.jsxs(oe,{children:[o.jsx(ie,{className:f({disabled:_,negative:h,positive:B}),children:g||""}),m&&w>0&&o.jsxs(ee,{className:f({negative:j.length>w}),children:[j.length,"/",w]})]})]})});x.displayName="FISInputText";const Se=x;try{x.displayName="FISInputText",x.__docgenInfo={description:"",displayName:"FISInputText",props:{showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"value for current field",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handle onChange action",name:"onChange",required:!1,type:{name:"((value: string | null) => void)"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const $=F.forwardRef(({onClickSuffix:a,...y},S)=>{const{sizeInput:k="md",iconPrefix:p,iconSuffix:l,labelSuffix:d,typeSuffix:u,disabled:s=!0,negative:m,actived:g,...h}=y;return o.jsxs(Y,{className:f({"input-text-lg":k==="lg",negative:m,dropdown:u==="dropdown"}),children:[p&&o.jsx(c,{children:p}),o.jsx(b,{...h,ref:S,disabled:s,className:f({negative:m})}),u==="icon"&&l&&o.jsx(J,{size:"sm",icon:l,variant:"tertiary-invisible",className:"icon-suffix",onClick:a,disabled:s}),u==="suffix"&&o.jsxs(U,{onClick:a,className:f({disabled:s}),children:[l&&o.jsx(D,{children:l}),d&&o.jsx(L,{children:d})]}),u==="dropdown"&&o.jsxs(Q,{className:f({actived:g,disabled:s}),onClick:a,children:[l&&o.jsx(N,{children:l}),d&&o.jsx(E,{children:d}),o.jsx(D,{children:o.jsx(O,{})})]})]})});$.displayName="FISInputField";const ne=$;try{$.displayName="FISInputField",$.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClick for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}}}}}catch{}export{ne as F,Se as a};
