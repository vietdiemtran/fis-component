import{j as d}from"./jsx-runtime-e7d94ccb.js";import{r as h}from"./index-981f9478.js";import{a as s,r as a,g as o}from"./getTheme-9564f801.js";const v=s.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: ${t=>t.$layout==="separated"?"visible":"hidden"};

  ${t=>t.$layout==="separated"&&a`
      gap: ${o(`com/button-group/size-${t.$size}/horizontal-gap`)};
    `}
`,y=({$size:t,$onlyIcon:e,$layout:r})=>{const l=r==="separated",c=o(`com/button/size-${t}/horizontal-padding`),n=o(`com/button/size-${t}/corner-radius`),i=o("com/button-group/divider/divider-width");return a`
    height: ${o(`com/button/size-${t}/height`)};
    width: ${e?o(`com/button/size-${t}/height`):"auto"};
    // "attached" buttons overlap the shared divider, so trim the left padding by
    // the divider width; "separated" buttons keep symmetric padding.
    padding-left: ${l?c:a`calc(${c} - ${i})`};
    padding-right: ${c};
    gap: ${o(`com/button/size-${t}/horizontal-gap`)};
    min-width: ${e?"auto":o(`com/button/size-${t}/min-width`)};

    svg {
      width: ${o(`com/button/size-${t}/icon/size-icon`)};
      height: ${o(`com/button/size-${t}/icon/size-icon`)};
    }

    ${t!=="xs"&&a`
        .button-content {
          padding-right: ${o(`com/button/size-${t}/label/sub-spacing`)};
          padding-left: ${o(`com/button/size-${t}/label/sub-spacing`)};
        }
      `}

    ${t==="xs"?o("Label/XS"):o("Label/Sm")}

    ${l?a`
            border-radius: ${n};
          `:a`
            &:first-child {
              border-top-left-radius: ${n};
              border-bottom-left-radius: ${n};
              padding: 0 calc(${c} - ${i});
            }

            &:last-child {
              border-top-right-radius: ${n};
              border-bottom-right-radius: ${n};
            }
          `}
  `},f=s.button`
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

  // In "attached" layout adjacent buttons share a single divider.
  ${t=>t.$layout!=="separated"&&a`
      &:not(:last-child) {
        border-right: none;
      }
    `}

  &:focus-visible {
    box-shadow:
      0px 0px 0px ${o("sem/dimension/stroke-width/divider/lg")}
        ${o("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${o("com/focus-mark/color-stroke")};
    outline: none;
  }

  // size of the button
  ${t=>y(t)}

  ${t=>{switch(t.$variant){case"negative":return a`
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
        `;default:return a`
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
`,b=s.span`
  display: inline-flex;
  align-items: center;
`,j=({className:t,size:e="md",disabled:r=!1,layout:l="attached",options:c,variant:n})=>d.jsx(v,{className:t,$layout:l,$size:e,children:c.map((i,u)=>h.createElement(x,{...i,key:u,disabledContainer:r,size:e,variant:n,layout:l}))}),x=({disabledContainer:t,startIcon:e,endIcon:r,size:l="md",variant:c="default",layout:n="attached",label:i,disabled:u,...m})=>{const p=!!(!i&&(!e&&r||e&&!r)),$=e&&d.jsx(b,{className:"button-icon",children:e}),g=r&&d.jsx(b,{className:"button-icon",children:r});return d.jsxs(f,{...m,disabled:t||u,$onlyIcon:p,$size:l,$variant:c,$layout:n,children:[$,i&&d.jsx("span",{className:"button-content",children:i}),g]})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{className:{defaultValue:null,description:"Additional CSS class names to apply to the group button",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Variant of the buttons. 'default' is typically used for text-only buttons",name:"variant",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"default"'}]}},size:{defaultValue:{value:"md"},description:"Size of the buttons. 'md' is typically used for icon-only buttons",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled state of all buttons in the group",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:"attached"},description:"Visual arrangement of the buttons. Defaults to `attached`.\nWhen `separated`, buttons are spaced apart by the\n`com/button-group/size-{size}/horizontal-gap` design token.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"attached"'},{value:'"separated"'}]}},options:{defaultValue:null,description:"List of button options",name:"options",required:!0,type:{name:"ButtonOption[]"}}}}}catch{}export{j as F};
