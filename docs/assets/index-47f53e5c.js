import{j as o}from"./jsx-runtime-47c18db8.js";import{r as b}from"./index-d806aa85.js";import{d as s,l as t}from"./styled-components.browser.esm-c9db8114.js";import{g as e}from"./getTheme-fd88fed7.js";const f=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/switch/content/vertical-gap")};
`,h=s.span`
  color: ${e("com/switch/content/primary/label/color-text")};

  ${i=>{switch(i.$size){case"sm":return t`
          ${e("Label/XS")}
        `;case"md":return t`
          ${e("Label/Sm")}
        `}}}
`,u=s.span`
  color: ${e("com/switch/content/primary/description/color-text")};
  ${e("Paragraph/XS")}
  cursor: inherit;
`,r=s.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${i=>i.$isOn?e("com/switch/item/on/background-color/default"):e("com/switch/item/off/background-color/default")};
  border-radius: ${e("com/switch/item/corner-radius")};
  transition: background-color 0.3s ease;
  border: ${e("com/switch/item/stroke-width")} solid
    ${e("com/switch/item/off/color-stroke/default")};
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    background-color: ${i=>i.$isOn?e("com/switch/item/on/background-color/hover"):e("com/switch/item/off/background-color/hover")};
    border-color: ${e("sem/color/stroke/neutral/sub")};
  }

  ${i=>i.$isOn&&t`
      border: none;
    `}
`,n=s.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${e("com/switch/item/corner-radius")};
  background-color: ${e("com/switch/item/off/shape/color-shape")};
  box-shadow: 0px 1px 0px ${e("com/switch/item/off/shape/color-stroke")};

  ${i=>i.$isOn?t`
          right: ${e("com/switch/item/size-md/left-padding")};
        `:t`
          left: ${e("com/switch/item/size-md/left-padding")};
        `}
`,v=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${e("com/switch/horizontal-gap")};
  cursor: pointer;

  ${i=>i.$disabled&&t`
      ${n} {
        background-color: ${e("com/switch/disable/shape/color-shape")};
        box-shadow: none;
      }
    `}

  ${i=>{switch(i.$size){case"sm":return t`
          ${r} {
            width: ${e("sem/dimension/size/component/xs")};
            height: ${e("sem/dimension/size/icon/xs")};
          }

          ${n} {
            width: ${i.$isOn?e("com/switch/item/size-sm/on/shape/width"):e("com/switch/item/size-sm/off/shape/width")};
            height: ${i.$isOn?e("com/switch/item/size-sm/on/shape/width"):e("com/switch/item/size-sm/off/shape/width")};
          }
        `;case"md":return t`
          ${r} {
            width: ${e("com/switch/item/size-md/width")};
            height: ${e("com/switch/item/size-md/height")};
          }

          ${n} {
            width: ${e("com/switch/item/size-md/shape/width")};
            height: ${e("com/switch/item/size-md/shape/width")};
          }
        `}}}

  ${i=>i.$disabled&&t`
      cursor: not-allowed;

      ${r} {
        background-color: ${e("com/switch/disable/background-color")} !important;
        border: ${e("com/switch/item/stroke-width")} solid
          ${e("com/switch/disable/color-stroke")} !important;
      }

      ${h} {
        color: ${e("com/switch/disable/label/color-text")};
      }

      ${u} {
        color: ${e("com/switch/disable/description/color-text")};
      }
    `}
`,d=b.forwardRef(({isOn:i,disabled:m=!1,size:a="md",label:l,subLabel:c,onToggle:p,...w},g)=>{const $=l||c?o.jsxs(f,{children:[l&&o.jsx(h,{$size:a,children:l}),c&&o.jsx(u,{$size:a,children:c})]}):null;return o.jsxs(v,{ref:g,$size:a,$isOn:i,$disabled:m,onClick:()=>!m&&p(),...w,children:[o.jsx(r,{$isOn:i,children:o.jsx(n,{$isOn:i,$size:a})}),$]})});d.displayName="FISSwitch";try{d.displayName="FISSwitch",d.__docgenInfo={description:"",displayName:"FISSwitch",props:{isOn:{defaultValue:null,description:"The toggle state.\n- `true`: The toggle is ON.\n- `false`: The toggle is OFF.",name:"isOn",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the toggle is disabled.\n- `true`: The toggle is disabled and cannot be interacted with.\n- `false` or not provided: The toggle is enabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:'The size of the toggle.\n- Possible values are defined in `SwitchSize`.\n- Example: `"small" | "medium" | "large"`',name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:null,description:`The main label displayed next to the toggle.
- If not provided, the toggle will be displayed without a label.`,name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:'The toggle\'s visual variant (styling type).\n- Possible values are defined in `SwitchVariant`.\n- Example: `"primary" | "secondary" | "outline"`',name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:`A secondary label displayed below the toggle.
- Typically used for additional descriptions or extra information.`,name:"subLabel",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"Callback function triggered when the toggle is clicked.\n- Takes no parameters.\n- Used to update the `isOn` state.",name:"onToggle",required:!0,type:{name:"() => void"}}}}}catch{}export{d as F};
