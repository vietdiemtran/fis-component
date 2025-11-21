import{j as i}from"./jsx-runtime-47c18db8.js";import{c as a}from"./index-d16835b1.js";import{r as I}from"./index-d806aa85.js";import{d as e,g as o}from"./getTheme-c4dbdb94.js";import{D as j}from"./LineArrowsUp-e7620e4c.js";import{F as D}from"./index-8f5d9190.js";const n=e.input`
  height: calc(
    ${o("com/input/field/size-md/height")} - 2 *
      ${o("com/input/field/stroke-width")}
  );
  width: 100%;
  ${o("Paragraph/Sm")}
  color: ${o("com/input/field/default/label/color-text/inputed")};
  caret-color: ${o("com/typing-cursor/default")};
  border: none;
  background: transparent;
  outline: none;
  cursor: ${u=>u.$isPointer?"pointer":"text"};
  padding-right: calc(
    ${o("com/input/field/size-md/label/sub-spacing")} +
      ${o("com/input/field/right-padding")}
  );
  padding-left: calc(
    ${o("com/input/field/size-md/label/sub-spacing")} +
      ${o("com/input/field/left-padding")}
  );
  border-radius: ${o("com/input/field/size-md/corner-radius")};

  &.prefix {
    padding-right: ${o("com/input/field/size-md/label/sub-spacing")};
    padding-left: ${o("com/input/field/size-md/label/sub-spacing")};
    border-radius: 0 ${o("com/input/field/size-md/corner-radius")}
      ${o("com/input/field/size-md/corner-radius")} 0;
  }

  &.suffix {
    padding-right: ${o("com/input/field/size-md/label/sub-spacing")};
    padding-left: ${o("com/input/field/size-md/label/sub-spacing")};
    border-radius: 0;
  }

  &.input-text-lg {
    height: calc(
      ${o("com/input/field/size-lg/height")} - 2 *
        ${o("com/input/field/stroke-width")}
    );
    padding-right: calc(
      ${o("com/input/field/size-lg/label/sub-spacing")} +
        ${o("com/input/field/right-padding")}
    );
    padding-left: calc(
      ${o("com/input/field/size-lg/label/sub-spacing")} +
        ${o("com/input/field/left-padding")}
    );
    border-radius: ${o("com/input/field/size-lg/corner-radius")};

    &.prefix {
      padding-right: ${o("com/input/field/size-lg/label/sub-spacing")};
      padding-left: ${o("com/input/field/size-lg/label/sub-spacing")};
      border-radius: 0 ${o("com/input/field/size-lg/corner-radius")}
        ${o("com/input/field/size-lg/corner-radius")} 0;
    }

    &.suffix {
      padding-right: ${o("com/input/field/size-lg/label/sub-spacing")};
      padding-left: ${o("com/input/field/size-lg/label/sub-spacing")};
      border-radius: 0;
    }
  }

  &::placeholder {
    color: ${o("com/input/field/default/label/color-text/placeholder")};
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    &::placeholder {
      color: ${o("com/input/field/disable/label-color")};
    }
  }

  &:read-only {
    cursor: default;
    &::placeholder {
      color: ${o("com/input/field/disable/label-color")};
    }
  }

  &.negative {
    color: ${o("com/input/field/negative/label/color-text/inputed")};
    caret-color: ${o("com/typing-cursor/negative")};
  }
`,d=e.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${o("com/input/field/size-md/icon/left-padding")};
  color: ${o("com/input/field/default/icon/color-icon/default")};

  &.input-text-lg {
    margin-left: ${o("com/input/field/size-lg/icon/left-padding")};
  }
`,h=e.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${o("com/input/suffix/icon/color-icon")};
  width: ${o("com/input/suffix/icon/size-icon")};
  height: ${o("com/input/suffix/icon/size-icon")};
`,x=e.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${o("com/input/prefix/icon/color-icon")};
  width: ${o("com/input/prefix/icon/size-icon")};
  height: ${o("com/input/prefix/icon/size-icon")};
`,s=e.span`
  ${o("Paragraph/XS")};
  color: ${o("com/input/dropdown/label/color-text/default")};
`,f=e.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${o("com/input/dropdown/icon/color-icon/default")};
`,q=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${o("com/input/dropdown/horizontal-gap")};
  padding-left: calc(
    ${o("com/input/dropdown/horizontal-padding")} -
      ${o("com/input/dropdown/divider/stroke-width")}
  );
  padding-right: ${o("com/input/dropdown/horizontal-padding")};
  border-left: ${o("com/input/dropdown/divider/stroke-width")} solid
    ${o("com/input/suffix/divider/color-stroke")};
  border-top-right-radius: ${o("com/input/field/size-md/corner-radius")};
  border-bottom-right-radius: ${o("com/input/field/size-md/corner-radius")};
  background-color: ${o("com/input/dropdown/background/default")};
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &.input-text-lg {
    border-top-right-radius: ${o("com/input/field/size-lg/corner-radius")};
    border-bottom-right-radius: ${o("com/input/field/size-lg/corner-radius")};

    &:focus {
      border-radius: ${o("com/input/field/size-lg/corner-radius")};
    }
  }

  &:hover {
    background-color: ${o("com/input/dropdown/background/hover")};
    ${s} {
      color: ${o("com/input/dropdown/label/color-text/hover")};
    }

    ${f} {
      color: ${o("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${o("com/input/dropdown/background/pressed")};

    ${s} {
      color: ${o("com/input/dropdown/label/color-text/hover")};
    }

    ${f} {
      color: ${o("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${o("com/focus-mark/gap-spacing")}
        ${o("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${o("com/focus-mark/color-stroke")};
  }

  &.active-dropdown {
    background-color: ${o("com/input/dropdown/background/actived")};
    outline: ${o("com/actived-mark/gap-spacing")} solid
      ${o("com/actived-mark/color-gap-spacing")};
  }

  &.disabled {
    cursor: not-allowed;
  }
`,V=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${o("com/input/dropdown/horizontal-gap")};
  padding-left: calc(
    ${o("com/input/dropdown/horizontal-padding")} -
      ${o("com/input/dropdown/divider/stroke-width")}
  );
  padding-right: ${o("com/input/dropdown/horizontal-padding")};
  border-right: ${o("com/input/dropdown/divider/stroke-width")} solid
    ${o("com/input/suffix/divider/color-stroke")};
  border-top-left-radius: ${o("com/input/field/size-md/corner-radius")};
  border-bottom-left-radius: ${o("com/input/field/size-md/corner-radius")};
  background-color: ${o("com/input/dropdown/background/default")};
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &.input-text-lg {
    border-top-left-radius: ${o("com/input/field/size-lg/corner-radius")};
    border-bottom-left-radius: ${o("com/input/field/size-lg/corner-radius")};

    &:focus {
      border-radius: ${o("com/input/field/size-lg/corner-radius")};
    }
  }

  &:hover {
    background-color: ${o("com/input/dropdown/background/hover")};
    ${s} {
      color: ${o("com/input/dropdown/label/color-text/hover")};
    }

    ${f} {
      color: ${o("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${o("com/input/dropdown/background/pressed")};

    ${s} {
      color: ${o("com/input/dropdown/label/color-text/hover")};
    }

    ${f} {
      color: ${o("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${o("com/focus-mark/gap-spacing")}
        ${o("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${o("com/focus-mark/color-stroke")};
  }

  &.active-dropdown {
    background-color: ${o("com/input/dropdown/background/actived")};
    outline: ${o("com/actived-mark/gap-spacing")} solid
      ${o("com/actived-mark/color-gap-spacing")};
  }

  &.disabled {
    cursor: not-allowed;
  }
`,F=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${o("com/input/suffix/horizontal-gap")};
  padding-left: ${o("com/input/suffix/left-padding")};
  padding-right: ${o("com/input/suffix/right-padding")};
  border-left: ${o("com/input/suffix/divider/stroke-width")} solid
    ${o("com/input/suffix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
`,N=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${o("com/input/prefix/horizontal-gap")};
  padding-left: ${o("com/input/prefix/left-padding")};
  padding-right: ${o("com/input/prefix/right-padding")};
  border-right: ${o("com/input/prefix/divider/stroke-width")} solid
    ${o("com/input/prefix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
`,b=e.span`
  ${o("Paragraph/Sm")};
  color: ${o("com/input/suffix/label/color-text")};
`,v=e.span`
  ${o("Paragraph/Sm")};
  color: ${o("com/input/prefix/label/color-text")};
`,_=e.div`
  height: ${o("com/input/field/size-md/height")};
  min-height: ${o("com/input/field/size-md/height")};
  max-height: ${o("com/input/field/size-md/height")};
  border-radius: ${o("com/input/field/size-md/corner-radius")};
  outline: ${o("com/input/field/stroke-width")} solid
    ${o("com/input/field/default/border/default")};
  outline-offset: -${o("com/input/field/stroke-width")};
  background-color: ${o("com/input/field/default/background/default")};
  padding-right: 0;
  padding-left: 0;

  display: flex;
  align-items: center;

  &.iconPrefix {
    padding-right: ${o("com/input/field/right-padding")};
    padding-left: ${o("com/input/field/left-padding")};
  }

  &.suffix {
    padding-right: ${o("com/input/field/right-padding")};
    padding-left: ${o("com/input/field/left-padding")};
  }

  &.prefix {
    padding-right: ${o("com/input/field/right-padding")};
    padding-left: ${o("com/input/field/left-padding")};
  }

  &.iconSuffix {
    padding-right: 0;
    padding-left: ${o("com/input/field/left-padding")};
  }

  &.dropdownSuffix {
    padding-right: 0;
  }

  &.dropdownPrefix {
    padding-left: 0;
  }

  .icon-suffix {
    flex-shrink: 0;
    color: ${o("com/button/tertiary/icon/color-icon/default")};
  }

  &.negative {
    color: ${o("com/input/character-limit/label/over-limit/color-text")};
  }

  &.input-text-lg {
    height: ${o("com/input/field/size-lg/height")};
    min-height: ${o("com/input/field/size-lg/height")};
    max-height: ${o("com/input/field/size-lg/height")};
    border-radius: ${o("com/input/field/size-lg/corner-radius")};
  }

  &.icon-suffix {
    pointer-events: auto;
  }

  &:has(${n}:disabled) {
    outline-color: ${o("com/input/field/disable/stroke-color")};
    background-color: ${o("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${n} {
      cursor: not-allowed;
    }

    ${d} {
      color: ${o("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }
    ${h} {
      color: ${o("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }
    ${x} {
      color: ${o("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }

    .icon-suffix {
      pointer-events: none;
      color: ${o("com/button/disable/icon-color")};
      cursor: not-allowed;
    }

    ${v} {
      color: ${o("com/input/field/disable/label-color")};
      cursor: not-allowed;
    }
    ${b} {
      color: ${o("com/input/field/disable/label-color")};
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${o("com/input/field/disable/label-color")};
    }
  }

  &:has(${n}:read-only):not(:has(${n}:disabled)) {
    cursor: default;
    outline-color: ${o("com/input/field/disable/stroke-color")};
    background-color: ${o("com/input/field/disable/background-color")};

    ${n} {
      cursor: default;
    }

    ${d} {
      color: ${o("com/input/field/disable/icon-color")};
      cursor: default;
    }
    ${h} {
      color: ${o("com/input/field/disable/icon-color")};
      cursor: default;
    }
    ${x} {
      color: ${o("com/input/field/disable/icon-color")};
      cursor: default;
    }

    .icon-suffix {
      pointer-events: none;
      color: ${o("com/button/disable/icon-color")};
      cursor: default;
    }

    ${v} {
      color: ${o("com/input/field/disable/label-color")};
      cursor: default;
    }
    ${b} {
      color: ${o("com/input/field/disable/label-color")};
      cursor: default;
    }

    &::placeholder {
      color: ${o("com/input/field/disable/label-color")};
    }
  }

  &:hover:not(:has(${n}:disabled)):not(:has(.icon-suffix:hover)) {
    outline-color: ${o("com/input/field/default/border/hover")};
    background-color: ${o("com/input/field/default/background/hover")};

    ${d} {
      color: ${o("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${n}:focus) {
    outline-color: ${o("com/input/field/default/border/active")};
    background-color: ${o("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${o("com/actived-mark/gap-spacing")}
      ${o("com/actived-mark/color-gap-spacing")};

    ${d} {
      color: ${o("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.negative {
    outline-color: ${o("com/input/field/negative/border/default")};
    background-color: ${o("com/input/field/negative/background/default")};

    ${d} {
      color: ${o("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover:not(:has(${n}:disabled)):not(:has(.icon-suffix:hover)) {
      outline-color: ${o("com/input/field/negative/border/hover")};
      background-color: ${o("com/input/field/negative/background/hover")};

      ${d} {
        color: ${o("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &:has(${n}:focus) {
      outline-color: ${o("com/input/field/negative/border/active")};
      background-color: ${o("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${o("com/actived-mark/gap-spacing")}
        ${o("com/actived-mark/color-gap-spacing-negative")};

      ${d} {
        color: ${o("com/input/field/negative/icon/color-icon/active")};
      }
    }

    &::placeholder {
      color: ${o("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,w=I.forwardRef(({onClickSuffix:u,onClickPrefix:k,...z},P)=>{const{sizeInput:m="md",iconPrefix:l,iconSuffix:p,labelSuffix:g,labelPrefix:$,typeSuffix:r,typePrefix:t,disabled:c,negative:y,activeDropdown:S,...C}=z;return i.jsxs(_,{className:a({"input-text-lg":m==="lg",negative:y,dropdownSuffix:r==="dropdown",dropdownPrefix:t==="dropdown",iconPrefix:l,prefix:t==="prefix"||t==="dropdown",suffix:r==="suffix"||r==="dropdown",iconSuffix:r==="icon",disabled:c}),children:[l&&t!=="prefix"&&t!=="dropdown"&&i.jsx(d,{className:a({"input-text-lg":m==="lg"}),children:l}),t==="prefix"&&i.jsxs(N,{onClick:k,className:a({disabled:c}),children:[l&&i.jsx(x,{children:l}),$&&i.jsx(v,{children:$})]}),t==="dropdown"&&i.jsxs(V,{className:a({"active-dropdown":S,disabled:c,"input-text-lg":m==="lg"}),onClick:k,children:[l&&i.jsx(f,{children:l}),$&&i.jsx(s,{children:$}),i.jsx(x,{children:i.jsx(j,{})})]}),i.jsx(n,{...C,ref:P,disabled:c,$isPointer:z.$isPointer,className:a({negative:y,"input-text-lg":m==="lg",prefix:l,suffix:r==="icon"||r==="suffix"||r==="dropdown"})}),r==="icon"&&p&&i.jsx(D,{size:"md",icon:p,variant:"tertiary-invisible",className:"icon-suffix",onClick:u,disabled:c}),r==="suffix"&&i.jsxs(F,{onClick:u,className:a({disabled:c}),children:[p&&i.jsx(h,{children:p}),g&&i.jsx(b,{children:g})]}),r==="dropdown"&&i.jsxs(q,{className:a({"active-dropdown":S,disabled:c,"input-text-lg":m==="lg"}),onClick:u,children:[p&&i.jsx(f,{children:p}),g&&i.jsx(s,{children:g}),i.jsx(h,{children:i.jsx(j,{})})]})]})});w.displayName="FISInputField";try{w.displayName="FISInputField",w.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}}}}}catch{}export{w as F};
