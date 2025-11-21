import{j as c}from"./jsx-runtime-3dc6859f.js";import{c as $}from"./index-01b5a1be.js";import{r as b}from"./index-d4014758.js";import{d as a,g as e,l as i}from"./getTheme-1aacf7d7.js";const o=a.input`
  width: 100%;
  cursor: pointer;
  color: ${e("com/select/field/default/label/color-text/inputed")};
  caret-color: ${e("com/typing-cursor/default")};
  border: none;
  background: transparent;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  ${l=>{switch(l.$size){case"xs":return i`
          height: calc(
            ${e("com/select/field/size-xs/height")} - 2 *
              ${e("com/select/field/stroke-width")}
          );
          ${e("Paragraph/XS")};
          padding-right: ${e("com/select/field/size-xs/label/sub-spacing")};
          padding-left: ${e("com/select/field/size-xs/label/sub-spacing")};
        `;case"sm":return i`
          height: calc(
            ${e("com/select/field/size-sm/height")} - 2 *
              ${e("com/select/field/stroke-width")}
          );
          ${e("Paragraph/XS")};
          padding-right: ${e("com/select/field/size-sm/label/sub-spacing")};
          padding-left: ${e("com/select/field/size-sm/label/sub-spacing")};
        `;case"md":return i`
          height: calc(
            ${e("com/select/field/size-md/height")} - 2 *
              ${e("com/select/field/stroke-width")}
          );
          ${e("Paragraph/Sm")};
          padding-right: ${e("com/select/field/size-md/label/sub-spacing")};
          padding-left: ${e("com/select/field/size-md/label/sub-spacing")};
        `;case"lg":return i`
          height: calc(
            ${e("com/select/field/size-lg/height")} - 2 *
              ${e("com/select/field/stroke-width")}
          );
          ${e("Paragraph/Sm")};
          padding-right: ${e("com/select/field/size-lg/label/sub-spacing")};
          padding-left: ${e("com/select/field/size-lg/label/sub-spacing")};
        `}}}

  &::placeholder {
    color: ${e("com/select/field/default/label/color-text/placeholder")};
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    &::placeholder {
      color: ${e("com/select/field/disable/label-color")};
    }
  }

  &:read-only {
    cursor: default;
    &::placeholder {
      color: ${e("com/select/field/disable/label-color")};
    }
  }
`,v=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${e("com/select/field/right-padding")};
  padding-left: ${e("com/select/field/left-padding")};
  min-width: 0;
`,t=a.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${e("com/select/field/default/icon/color-icon/default")};

  ${l=>{switch(l.$size){case"xs":return i`
          margin-left: ${e("com/select/field/size-xs/icon/left-padding")};
        `;case"sm":return i`
          margin-left: ${e("com/select/field/size-sm/icon/left-padding")};
        `;case"md":return i`
          margin-left: ${e("com/select/field/size-md/icon/left-padding")};
        `;case"lg":return i`
          margin-left: ${e("com/select/field/size-lg/icon/left-padding")};
        `}}}
`,u=a.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  cursor: ${l=>l.$disabled?"not-allowed":"pointer"};
  color: ${e("com/select/field/right-icon/color-icon")};

  ${l=>{switch(l.$size){case"xs":return i`
          width: 24px;
          height: 24px;
        `;case"sm":return i`
          width: 24px;
          height: 24px;
        `;case"md":return i`
          width: 28px;
          height: 28px;
        `;case"lg":return i`
          width: 36px;
          height: 36px;
        `}}}

  .icon-suffix {
    pointer-events: auto;
  }
`,x=a.div`
  display: flex;
  align-items: center;
  background-color: ${e("com/select/field/default/background/default")};
  outline: ${e("com/select/field/stroke-width")} solid
    ${e("com/select/field/default/border/default")};
  outline-offset: -${e("com/select/field/stroke-width")};

  ${l=>{switch(l.$size){case"xs":return i`
          height: ${e("com/select/field/size-xs/height")};
          min-height: ${e("com/select/field/size-xs/height")};
          max-height: ${e("com/select/field/size-xs/height")};
          border-radius: ${e("com/select/field/size-xs/corner-radius")};
        `;case"sm":return i`
          height: ${e("com/select/field/size-sm/height")};
          min-height: ${e("com/select/field/size-sm/height")};
          max-height: ${e("com/select/field/size-sm/height")};
          border-radius: ${e("com/select/field/size-sm/corner-radius")};
        `;case"md":return i`
          height: ${e("com/select/field/size-md/height")};
          min-height: ${e("com/select/field/size-md/height")};
          max-height: ${e("com/select/field/size-md/height")};
          border-radius: ${e("com/select/field/size-md/corner-radius")};
        `;case"lg":return i`
          height: ${e("com/select/field/size-lg/height")};
          min-height: ${e("com/select/field/size-lg/height")};
          max-height: ${e("com/select/field/size-lg/height")};
          border-radius: ${e("com/select/field/size-lg/corner-radius")};
        `}}}
  &:has(${o}:read-only) {
    cursor: default;
  }
  &:has(${o}:disabled) {
    cursor: not-allowed;
  }

  &:has(${o}:disabled),
  &:has(${o}:read-only) {
    outline-color: ${e("com/select/field/disable/stroke-color")};
    background-color: ${e("com/select/field/disable/background-color")};

    ${t} {
      color: ${e("com/select/field/disable/color-icon")};
    }
    ${u} {
      color: ${e("com/select/field/disable/color-icon")};
    }

    &::placeholder {
      color: ${e("com/select/field/disable/label-color")};
    }
  }

  &:hover:not(:has(.icon-suffix:hover)):not(:has(${o}:disabled)) {
    outline-color: ${e("com/select/field/default/border/hover")};
    background-color: ${e("com/select/field/default/background/hover")};

    ${t} {
      color: ${e("com/select/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${o}:focus) {
    outline-color: ${e("com/select/field/default/border/active")};
    background-color: ${e("com/select/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};

    ${t} {
      color: ${e("com/select/field/default/icon/color-icon/active")};
    }
  }

  &.activeDropdown {
    outline-color: ${e("com/select/field/default/border/active")};
    background-color: ${e("com/select/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};

    ${t} {
      color: ${e("com/select/field/default/icon/color-icon/active")};
    }
  }

  // Design chưa có negative
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

    &.activeDropdown {
      outline-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
        ${e("com/actived-mark/color-gap-spacing-negative")};
    }

    &::placeholder {
      color: ${e("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,d=b.forwardRef((l,g)=>{const{size:r="md",iconPrefix:s,iconSuffix:n,disabled:f,activeDropdown:m,negative:h,...p}=l;return c.jsx(x,{className:$({iconPrefix:s,negative:h,activeDropdown:m}),$size:r,$activeDropdown:m,children:c.jsxs(v,{children:[s&&c.jsx(t,{$size:r,children:s}),c.jsx(o,{...p,ref:g,disabled:f,$size:r}),n&&c.jsx(u,{$size:r,$disabled:f,children:n})]})})});d.displayName="FISSelectItem";try{d.displayName="FISSelectItem",d.__docgenInfo={description:"",displayName:"FISSelectItem",props:{size:{defaultValue:null,description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}}}}}catch{}export{d as F};
