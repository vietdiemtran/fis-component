import{j as c}from"./jsx-runtime-47c18db8.js";import{c as p}from"./index-d16835b1.js";import{r as $}from"./index-d806aa85.js";import{d as o,g as e,l as i}from"./getTheme-624682de.js";const t=o.input`
  width: 100%;
  color: ${e("com/select/field/default/label/color-text/inputed")};
  caret-color: ${e("com/typing-cursor/default")};
  border: none;
  background: transparent;
  outline: none;

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
`,x=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${e("com/select/field/right-padding")};
  padding-left: ${e("com/select/field/left-padding")};
`,r=o.div`
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
`,f=o.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
`,b=o.div`
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

  &:has(${t}:disabled),
  &:has(${t}:read-only) {
    outline-color: ${e("com/select/field/disable/stroke-color")};
    background-color: ${e("com/select/field/disable/background-color")};
    cursor: not-allowed;

    ${r} {
      color: ${e("com/select/field/disable/color-icon")};
    }
    ${f} {
      color: ${e("com/select/field/disable/color-icon")};
    }

    &::placeholder {
      color: ${e("com/select/field/disable/label-color")};
    }
  }

  &:has(${t}:read-only) {
    cursor: default;
  }

  &:hover:not(:has(.icon-suffix:hover)) {
    outline-color: ${e("com/select/field/default/border/hover")};
    background-color: ${e("com/select/field/default/background/hover")};

    ${r} {
      color: ${e("com/select/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${t}:focus) {
    outline-color: ${e("com/select/field/default/border/active")};
    background-color: ${e("com/select/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};

    ${r} {
      color: ${e("com/select/field/default/icon/color-icon/active")};
    }
  }
`,a=$.forwardRef(({onClickSuffix:l,onClickPrefix:z,...m},u)=>{const{size:s="md",iconPrefix:d,iconSuffix:n,disabled:h,activeDropdown:v,...g}=m;return c.jsx(b,{className:p({iconPrefix:d}),$size:s,children:c.jsxs(x,{children:[d&&c.jsx(r,{$size:s,children:d}),c.jsx(t,{...g,ref:u,disabled:h,$size:s}),n&&c.jsx(f,{$size:s,onClick:l,children:n})]})})});a.displayName="FISSelectItem";try{a.displayName="FISSelectItem",a.__docgenInfo={description:"",displayName:"FISSelectItem",props:{size:{defaultValue:null,description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}export{a as F};
