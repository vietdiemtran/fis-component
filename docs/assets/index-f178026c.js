import{j as c}from"./jsx-runtime-50395f49.js";import{r as $}from"./index-9fa1aa67.js";import{d as l,l as i}from"./styled-components.browser.esm-6b0ce59b.js";import{g as o}from"./getTheme-fd88fed7.js";const p=l.div`
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`,z=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
  border: ${o("com/button-group/divider/divider-width")} solid
    ${o("com/button-group/divider/divider-color/default")};

  &:not(:last-child) {
    border-right: none;
  }

  &:focus-visible {
    box-shadow:
      0px 0px 0px ${o("sem/dimension/stroke-width/divider/lg")}
        ${o("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${o("com/focus-mark/color-stroke")};
    outline: none;
  }

  // size of the button
  ${t=>{switch(t.$size){case"xs":return i`
          height: ${o("com/button/size-xs/height")};
          width: ${t.$onlyIcon?o("com/button/size-xs/height"):"auto"};
          padding-left: ${o("com/button/size-xs/horizontal-padding")};
          padding-right: ${o("com/button/size-xs/horizontal-padding")};
          gap: ${o("com/button/size-xs/horizontal-gap")};
          min-width: ${t.$onlyIcon?"auto":o("com/button/size-xs/min-width")};

          svg {
            width: ${o("com/button/size-xs/icon/size-icon")};
            height: ${o("com/button/size-xs/icon/size-icon")};
          }
          ${o("Label/XS")}

          &:first-child {
            border-top-left-radius: ${o("com/button/size-xs/corner-radius")};
            border-bottom-left-radius: ${o("com/button/size-xs/corner-radius")};
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-xs/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-xs/corner-radius")};
          }
        `;case"sm":return i`
          height: ${o("com/button/size-sm/height")};
          width: ${t.$onlyIcon?o("com/button/size-sm/height"):"auto"};
          padding-left: ${o("com/button/size-sm/horizontal-padding")};
          padding-right: ${o("com/button/size-sm/horizontal-padding")};
          gap: ${o("com/button/size-sm/horizontal-gap")};
          min-width: ${t.$onlyIcon?"auto":o("com/button/size-sm/min-width")};

          svg {
            width: ${o("com/button/size-sm/icon/size-icon")};
            height: ${o("com/button/size-sm/icon/size-icon")};
          }

          .button-content {
            padding-right: ${o("com/button/size-sm/label/sub-spacing")};
            padding-left: ${o("com/button/size-sm/label/sub-spacing")};
          }

          ${o("Label/Sm")}

          &:first-child {
            border-top-left-radius: ${o("com/button/size-sm/corner-radius")};
            border-bottom-left-radius: ${o("com/button/size-sm/corner-radius")};
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-sm/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-sm/corner-radius")};
          }
        `;case"md":return i`
          height: ${o("com/button/size-md/height")};
          width: ${t.$onlyIcon?o("com/button/size-md/height"):"auto"};
          padding-left: ${o("com/button/size-md/horizontal-padding")};
          padding-right: ${o("com/button/size-md/horizontal-padding")};
          gap: ${o("com/button/size-md/horizontal-gap")};
          min-width: ${t.$onlyIcon?"auto":o("com/button/size-md/min-width")};

          svg {
            width: ${o("com/button/size-md/icon/size-icon")};
            height: ${o("com/button/size-md/icon/size-icon")};
          }

          .button-content {
            padding-right: ${o("com/button/size-md/label/sub-spacing")};
            padding-left: ${o("com/button/size-md/label/sub-spacing")};
          }

          ${o("Label/Sm")}

          &:first-child {
            border-top-left-radius: ${o("com/button/size-md/corner-radius")};
            border-bottom-left-radius: ${o("com/button/size-md/corner-radius")};
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-md/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-md/corner-radius")};
          }
        `;case"lg":return i`
          height: ${o("com/button/size-lg/height")};
          width: ${t.$onlyIcon?o("com/button/size-lg/height"):"auto"};
          padding-left: ${o("com/button/size-lg/horizontal-padding")};
          padding-right: ${o("com/button/size-lg/horizontal-padding")};
          gap: ${o("com/button/size-lg/horizontal-gap")};
          min-width: ${t.$onlyIcon?"auto":o("com/button/size-lg/min-width")};

          svg {
            width: ${o("com/button/size-lg/icon/size-icon")};
            height: ${o("com/button/size-lg/icon/size-icon")};
          }

          .button-content {
            padding-right: ${o("com/button/size-lg/label/sub-spacing")};
            padding-left: ${o("com/button/size-lg/label/sub-spacing")};
          }

          ${o("Label/Sm")}

          &:first-child {
            border-top-left-radius: ${o("com/button/size-lg/corner-radius")};
            border-bottom-left-radius: ${o("com/button/size-lg/corner-radius")};
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-lg/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-lg/corner-radius")};
          }
        `}}}

  ${t=>{switch(t.$variant){case"negative":return i`
          color: ${o("com/button/secondary-negative/label/color-text/default")};

          .button-icon {
            color: ${o("com/button/secondary-negative/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/secondary-negative/background/hover")};
            color: ${o("com/button/secondary-negative/label/color-text/hover")};

            .button-icon {
              color: ${o("com/button/secondary-negative/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-negative/background/pressed")};
            color: ${o("com/button/secondary-negative/label/color-text/pressed")};

            .button-icon {
              color: ${o("com/button/secondary-negative/icon/color-icon/pressed")};
            }
          }

          &:focus {
            background-color: ${o("com/button/secondary-negative/background/active")};
            color: ${o("com/button/secondary-negative/label/color-text/active")};

            .button-icon {
              color: ${o("com/button/secondary-negative/icon/color-icon/active")};
            }
          }

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            color: ${o("com/button/disable/label-color")} !important;

            .button-icon {
              color: ${o("com/button/disable/icon-color")};
            }
          }
        `;default:return i`
          color: ${o("com/button/tertiary/label/color-text/default")};

          .button-icon {
            color: ${o("com/button/tertiary/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            color: ${o("com/button/tertiary/label/color-text/hover")};

            .button-icon {
              color: ${o("com/button/tertiary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            color: ${o("com/button/tertiary/label/color-text/pressed")};

            .button-icon {
              color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            }
          }

          &:focus {
            background-color: ${o("com/button/tertiary/background/active")};
            color: ${o("com/button/tertiary/label/color-text/active")};

            .button-icon {
              color: ${o("com/button/tertiary/icon/color-icon/active")};
            }
          }

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            color: ${o("com/button/disable/label-color")} !important;

            .button-icon {
              color: ${o("com/button/disable/icon-color")};
            }
          }
        `}}}
`,u=l.span`
  display: inline-flex;
  align-items: center;
`,k=({className:t,size:e="md",disabled:n=!1,options:a,variant:s})=>c.jsx(p,{className:t,children:a.map((r,d)=>$.createElement(f,{...r,key:d,disabledContainer:n,size:e,variant:s}))}),f=({disabledContainer:t,startIcon:e,endIcon:n,size:a="md",variant:s="default",label:r,disabled:d,...b})=>{const m=!!(!r&&(!e&&n||e&&!n)),g=e&&c.jsx(u,{className:"button-icon",children:e}),h=n&&c.jsx(u,{className:"button-icon",children:n});return c.jsxs(z,{...b,disabled:t||d,$onlyIcon:m,$size:a,$variant:s,children:[g,r&&c.jsx("span",{className:"button-content",children:r}),h]})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{className:{defaultValue:null,description:"Additional CSS class names to apply to the group button",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Variant of the buttons. 'default' is typically used for text-only buttons",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"negative"'}]}},size:{defaultValue:{value:"md"},description:"Size of the buttons. 'md' is typically used for icon-only buttons",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"xs"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled state of all buttons in the group",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"List of button options",name:"options",required:!0,type:{name:"ButtonOption[]"}}}}}catch{}export{k as F};
