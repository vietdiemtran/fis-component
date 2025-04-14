import{j as c}from"./jsx-runtime-47c18db8.js";import{r as $}from"./index-d806aa85.js";import{d as u,g as o,l as n}from"./getTheme-21dde6f8.js";const p=u.div`
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`,z=u.button`
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
  ${t=>{switch(t.$size){case"xs":return n`
          height: ${o("com/button/size-xs/height")};
          width: ${t.$onlyIcon?o("com/button/size-xs/height"):"auto"};
          padding-left: calc(
            ${o("com/button/size-xs/horizontal-padding")} -
              ${o("com/button-group/divider/divider-width")}
          );
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

            padding: 0
              calc(
                ${o("com/button/size-xs/horizontal-padding")} -
                  ${o("com/button-group/divider/divider-width")}
              );
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-xs/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-xs/corner-radius")};
          }
        `;case"sm":return n`
          height: ${o("com/button/size-sm/height")};
          width: ${t.$onlyIcon?o("com/button/size-sm/height"):"auto"};
          padding-left: calc(
            ${o("com/button/size-sm/horizontal-padding")} -
              ${o("com/button-group/divider/divider-width")}
          );
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
            padding: 0
              calc(
                ${o("com/button/size-sm/horizontal-padding")} -
                  ${o("com/button-group/divider/divider-width")}
              );
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-sm/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-sm/corner-radius")};
          }
        `;case"md":return n`
          height: ${o("com/button/size-md/height")};
          width: ${t.$onlyIcon?o("com/button/size-md/height"):"auto"};
          padding-left: calc(
            ${o("com/button/size-md/horizontal-padding")} -
              ${o("com/button-group/divider/divider-width")}
          );
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
            padding: 0
              calc(
                ${o("com/button/size-md/horizontal-padding")} -
                  ${o("com/button-group/divider/divider-width")}
              );
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-md/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-md/corner-radius")};
          }
        `;case"lg":return n`
          height: ${o("com/button/size-lg/height")};
          width: ${t.$onlyIcon?o("com/button/size-lg/height"):"auto"};
          padding-left: calc(
            ${o("com/button/size-lg/horizontal-padding")} -
              ${o("com/button-group/divider/divider-width")}
          );
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
            padding: 0
              calc(
                ${o("com/button/size-lg/horizontal-padding")} -
                  ${o("com/button-group/divider/divider-width")}
              );
          }

          &:last-child {
            border-top-right-radius: ${o("com/button/size-lg/corner-radius")};
            border-bottom-right-radius: ${o("com/button/size-lg/corner-radius")};
          }
        `}}}

  ${t=>{switch(t.$variant){case"negative":return n`
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
        `;default:return n`
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
`,l=u.span`
  display: inline-flex;
  align-items: center;
`,w=({className:t,size:i="md",disabled:e=!1,options:a,variant:d})=>c.jsx(p,{className:t,children:a.map((r,s)=>$.createElement(v,{...r,key:s,disabledContainer:e,size:i,variant:d}))}),v=({disabledContainer:t,startIcon:i,endIcon:e,size:a="md",variant:d="default",label:r,disabled:s,...b})=>{const m=!!(!r&&(!i&&e||i&&!e)),g=i&&c.jsx(l,{className:"button-icon",children:i}),h=e&&c.jsx(l,{className:"button-icon",children:e});return c.jsxs(z,{...b,disabled:t||s,$onlyIcon:m,$size:a,$variant:d,children:[g,r&&c.jsx("span",{className:"button-content",children:r}),h]})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{className:{defaultValue:null,description:"Additional CSS class names to apply to the group button",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Variant of the buttons. 'default' is typically used for text-only buttons",name:"variant",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"default"'}]}},size:{defaultValue:{value:"md"},description:"Size of the buttons. 'md' is typically used for icon-only buttons",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled state of all buttons in the group",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"List of button options",name:"options",required:!0,type:{name:"ButtonOption[]"}}}}}catch{}export{w as F};
