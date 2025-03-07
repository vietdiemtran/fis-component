import{j as c}from"./jsx-runtime-50395f49.js";import{d as n,l as r,m as k}from"./styled-components.browser.esm-6b0ce59b.js";import{g as o}from"./getTheme-fd88fed7.js";import{R as f,a as x}from"./ResizeIcon-0deac5ef.js";import{r as z}from"./index-9fa1aa67.js";const w=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow:
      0px 0px 0px ${o("sem/dimension/stroke-width/divider/lg")}
        ${o("com/focus-mark/color-gap-spacing")},
      0px 0px 0px ${o("com/focus-mark/corner-radius-default")}
        ${o("com/focus-mark/color-stroke")} !important;
    outline: none;
  }

  .button-content {
    visibility: ${e=>e.$loading?"hidden":"visible"};
  }

  // size of the button
  ${e=>{switch(e.$size){case"xs":return r`
          height: ${o("com/button/size-xs/height")};
          min-width: ${o("com/button/size-xs/min-width")};
          border-radius: ${o("com/button/size-xs/corner-radius")};
          padding-right: ${o("com/button/size-xs/horizontal-padding")};
          padding-left: ${o("com/button/size-xs/horizontal-padding")};
          gap: ${o("com/button/size-xs/horizontal-gap")};
          ${o("Label/XS")}

          ${t} svg {
            width: ${o("com/button/size-sm/icon/size-icon")};
            height: ${o("com/button/size-sm/icon/size-icon")};
          }
        `;case"sm":return r`
          height: ${o("com/button/size-sm/height")};
          min-width: ${o("com/button/size-sm/min-width")};
          border-radius: ${o("com/button/size-xs/corner-radius")};
          padding-right: ${o("com/button/size-sm/horizontal-padding")};
          padding-left: ${o("com/button/size-sm/horizontal-padding")};
          gap: ${o("com/button/size-sm/horizontal-gap")};
          ${o("Label/Sm")}

          .button-content {
            padding-right: ${o("com/button/size-sm/label/sub-spacing")};
            padding-left: ${o("com/button/size-sm/label/sub-spacing")};
          }

          ${t} svg {
            width: ${o("com/button/size-sm/icon/size-icon")};
            height: ${o("com/button/size-sm/icon/size-icon")};
          }
        `;case"md":return r`
          height: ${o("com/button/size-md/height")};
          min-width: ${o("com/button/size-md/min-width")};
          border-radius: ${o("com/button/size-md/corner-radius")};
          padding-right: ${o("com/button/size-md/horizontal-padding")};
          padding-left: ${o("com/button/size-md/horizontal-padding")};
          gap: ${o("com/button/size-md/horizontal-gap")};
          ${o("Label/Sm")}

          .button-content {
            padding-right: ${o("com/button/size-md/label/sub-spacing")};
            padding-left: ${o("com/button/size-md/label/sub-spacing")};
          }

          ${t} svg {
            width: ${o("com/button/size-md/icon/size-icon")};
            height: ${o("com/button/size-md/icon/size-icon")};
          }
        `;case"lg":return r`
          height: ${o("com/button/size-lg/height")};
          min-width: ${o("com/button/size-lg/min-width")};
          border-radius: ${o("com/button/size-lg/corner-radius")};
          padding-right: ${o("com/button/size-lg/horizontal-padding")};
          padding-left: ${o("com/button/size-lg/horizontal-padding")};
          gap: ${o("com/button/size-lg/horizontal-gap")};
          ${o("Label/Sm")}

          .button-content {
            padding-right: ${o("com/button/size-lg/label/sub-spacing")};
            padding-left: ${o("com/button/size-lg/label/sub-spacing")};
          }

          ${t} svg {
            width: ${o("com/button/size-lg/icon/size-icon")};
            height: ${o("com/button/size-lg/icon/size-icon")};
          }
        `}}}

  // variation
  ${e=>{switch(e.$variant){case"primary":return r`
          background-color: ${o("com/button/primary/background/default")};
          color: ${o("com/button/primary/label/color-text/default")};

          ${t} {
            color: ${o("com/button/primary/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/primary/background/hover")};
            color: ${o("com/button/primary/label/color-text/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/primary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary/background/pressed")};
            color: ${o("com/button/primary/label/color-text/pressed")};

            ${t} {
              color: ${o("com/button/primary/icon/color-icon/pressed")};
            }
          }

          ${e.$active&&r`
            background-color: ${o("com/button/primary/background/active")};
            color: ${o("com/button/primary/label/color-text/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;

            ${t} {
              color: ${o("com/button/primary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            color: ${o("com/button/disable/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
          `}
        `;case"secondary":return r`
          background-color: ${o("com/button/secondary/background/default")};
          color: ${o("com/button/secondary/label/color-text/default")};
          border: ${o("com/button/secondary/border/stroke-width/default")}
            solid ${o("com/button/secondary/border/default")};

          ${t} {
            color: ${o("com/button/secondary/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/secondary/background/hover")};
            color: ${o("com/button/secondary/label/color-text/hover")};
            border: ${o("com/button/secondary/border/stroke-width/default")}
              solid ${o("com/button/secondary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/secondary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            color: ${o("com/button/secondary/label/color-text/pressed")};
            border-color: ${o("com/button/secondary/border/pressed")};

            ${t} {
              color: ${o("com/button/secondary/icon/color-icon/pressed")};
            }
          }

          ${e.$active&&r`
            background-color: ${o("com/button/secondary/background/active")};
            color: ${o("com/button/secondary/label/color-text/active")};
            border-color: ${o("com/button/secondary/border/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;

            ${t} {
              color: ${o("com/button/secondary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")} !important;
          `}
        `;case"tertiary":return r`
          background-color: ${o("com/button/tertiary/background/default")};
          color: ${o("com/button/tertiary/label/color-text/default")};
          border: ${o("com/button/tertiary/border/stroke-width/default")}
            solid ${o("com/button/tertiary/border/default")};

          ${t} {
            color: ${o("com/button/tertiary/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            color: ${o("com/button/tertiary/label/color-text/hover")};
            border: ${o("com/button/tertiary/border/stroke-width/default")}
              solid ${o("com/button/tertiary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/tertiary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            color: ${o("com/button/tertiary/label/color-text/pressed")};
            border-color: ${o("com/button/tertiary/border/pressed")};

            ${t} {
              color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            }
          }

          ${e.$active&&r`
            background-color: ${o("com/button/tertiary/background/active")};
            color: ${o("com/button/tertiary/label/color-text/active")};
            border-color: ${o("com/button/tertiary/border/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;

            ${t} {
              color: ${o("com/button/tertiary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")} !important;
          `}
        `;case"primary-negative":return r`
          background-color: ${o("com/button/primary-negative/background/default")};
          color: ${o("com/button/primary-negative/label/color-text/default")};

          ${t} {
            color: ${o("com/button/primary/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/primary-negative/background/hover")};
            color: ${o("com/button/primary-negative/label/color-text/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/primary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary-negative/background/pressed")};
            color: ${o("com/button/primary-negative/label/color-text/pressed")};

            ${t} {
              color: ${o("com/button/primary/icon/color-icon/pressed")};
            }
          }

          ${e.$active&&r`
            background-color: ${o("com/button/primary-negative/background/active")};
            color: ${o("com/button/primary-negative/label/color-text/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;

            ${t} {
              color: ${o("com/button/primary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            color: ${o("com/button/disable/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
          `}
        `;case"secondary-negative":return r`
          background-color: ${o("com/button/secondary-negative/background/default")};
          color: ${o("com/button/secondary-negative/label/color-text/default")};
          border: ${o("com/button/secondary/border/stroke-width/default")}
            solid ${o("com/button/secondary-negative/border/default")};

          ${t} {
            color: ${o("com/button/secondary-negative/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/secondary-negative/background/hover")};
            color: ${o("com/button/secondary-negative/label/color-text/hover")};
            border: ${o("com/button/secondary/border/stroke-width/default")}
              solid ${o("com/button/secondary-negative/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/secondary-negative/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-negative/background/pressed")};
            color: ${o("com/button/secondary-negative/label/color-text/pressed")};
            border-color: ${o("com/button/secondary-negative/border/pressed")};

            ${t} {
              color: ${o("com/button/secondary-negative/icon/color-icon/pressed")};
            }
          }

          ${e.$active&&r`
            background-color: ${o("com/button/secondary-negative/background/active")};
            color: ${o("com/button/secondary-negative/label/color-text/active")};
            border-color: ${o("com/button/secondary-negative/border/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;

            ${t} {
              color: ${o("com/button/secondary-negative/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")};
          `}
        `;case"primary-white":return r`
          background-color: ${o("com/button/primary-invert/background/default")};
          color: ${o("com/button/primary-invert/label/color-text/default")};

          ${t} {
            color: ${o("com/button/primary-invert/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/primary-invert/background/hover")};
            color: ${o("com/button/primary-invert/label/color-text/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/primary-invert/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary-invert/background/pressed")};
            color: ${o("com/button/primary-invert/label/color-text/pressed")};

            ${t} {
              color: ${o("com/button/primary-invert/icon/color-icon/pressed")};
            }
          }
          ${e.$active&&r`
            background-color: ${o("com/button/primary-invert/background/active")};
            color: ${o("com/button/primary-invert/label/color-text/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};

            ${t} {
              color: ${o("com/button/primary-invert/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/solid-background-color")};
            color: ${o("com/button/disable-invert/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable-invert/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/loading-invert/solid-background-color")} !important;
          `}
        `;case"secondary-white":return r`
          background-color: ${o("com/button/secondary-invert/background/default")};
          color: ${o("com/button/secondary-invert/label/color-text/default")};
          border: ${o("com/button/secondary-invert/border/stroke-width/default")}
            solid ${o("com/button/secondary-invert/border/default")};

          ${t} {
            color: ${o("com/button/secondary-invert/icon/color-icon/default")};
          }

          &:hover {
            background-color: ${o("com/button/secondary-invert/background/hover")};
            color: ${o("com/button/secondary-invert/label/color-text/hover")};
            border: ${o("com/button/secondary-invert/border/stroke-width/default")}
              solid ${o("com/button/secondary-invert/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${t} {
              color: ${o("com/button/secondary-invert/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            color: ${o("com/button/secondary-invert/label/color-text/pressed")};
            border-color: ${o("com/button/secondary-invert/border/pressed")};

            ${t} {
              color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
            }
          }

          ${e.$active&&r`
            background-color: ${o("com/button/secondary-invert/background/active")};
            color: ${o("com/button/secondary-invert/label/color-text/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
            border-width: 2px;
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};

            ${t} {
              color: ${o("com/button/secondary-invert/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/label-color")} !important;

            ${t} {
              color: ${o("com/button/disable-invert/icon-color")};
            }
          }

          ${e.$loading&&r`
            background-color: ${o("com/button/disable-invert/background-color-transparent")} !important;
            border-color: ${o("com/button/disable-invert/stroke-color")} !important;
          `}
        `;default:return r`
          background-color: white;
          color: black;
        `}}}
`,t=n.span`
  display: inline-flex;
  align-items: center;
`,u=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=n(f)`
  position: absolute;
  animation: ${u} 0.9s linear infinite;
`,S=n(x)`
  position: absolute;
  animation: ${u} 0.9s linear infinite;
`,l=z.forwardRef((e,s)=>{const{active:m,type:L,children:$,size:g="md",variant:a="primary",loading:i,disabled:v=!1,startIcon:d,endIcon:b,...p}=e,h=d&&c.jsx(t,{children:d}),y=b&&c.jsx(t,{children:b});return c.jsxs(w,{...p,ref:s,$variant:a,$size:g,$active:m,$loading:i,disabled:v||i,children:[i&&(a==="primary-white"||a==="secondary-white"?c.jsx(I,{}):c.jsx(S,{})),h,c.jsx("span",{className:"button-content",children:$}),y]})});l.displayName="FISButton";try{l.displayName="FISButton",l.__docgenInfo={description:"",displayName:"FISButton",props:{active:{defaultValue:null,description:"whether the button should be active",name:"active",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Change the design of button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-negative"'},{value:'"secondary-negative"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},size:{defaultValue:null,description:"Size md for only button icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"xs"'},{value:'"lg"'}]}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Defines if the button is currently being requested.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{l as F};
