import{j as c}from"./jsx-runtime-47c18db8.js";import{d as u,g as o,l as e}from"./getTheme-624682de.js";import{F as f}from"./index-8298a7d1.js";import{r as z}from"./index-d806aa85.js";const n=(r,a)=>{const i=o(`com/button/size-${r}/horizontal-padding`),s=o(a);return e`
    padding: 0 calc(${i} - ${s});
  `},x=u.button`
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
    visibility: ${r=>r.$loading?"hidden":"visible"};
  }

  // size of the button
  ${r=>{switch(r.$size){case"xs":return e`
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
        `;case"sm":return e`
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
        `;case"md":return e`
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
        `;case"lg":return e`
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
  ${r=>{switch(r.$variant){case"primary":return e`
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

          ${r.$active&&e`
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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable/background-color")} !important;
          `}
        `;case"secondary":return e`
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

          ${r.$active&&e`
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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable/background-color")} !important;
            border-color: ${o("com/button/disable/stroke-color")} !important;
          `}

          ${()=>["xs","sm","md","lg"].includes(r.$size)?n(r.$size,"com/button/secondary/border/stroke-width/default"):""}
        `;case"tertiary":return e`
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

          ${r.$active&&e`
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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable/background-color")} !important;
            border-color: ${o("com/button/disable/stroke-color")} !important;
          `}

          ${()=>["xs","sm","md","lg"].includes(r.$size)?n(r.$size,"com/button/tertiary/border/stroke-width/default"):""}
        `;case"primary-negative":return e`
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

          ${r.$active&&e`
            background-color: ${o("com/button/primary-negative/background/active")};
            color: ${o("com/button/primary-negative/label/color-text/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-negative")} !important;

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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable/background-color")} !important;
          `}
        `;case"secondary-negative":return e`
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

          ${r.$active&&e`
            background-color: ${o("com/button/secondary-negative/background/active")};
            color: ${o("com/button/secondary-negative/label/color-text/active")};
            border-color: ${o("com/button/secondary-negative/border/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-negative")} !important;

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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable/background-color")} !important;
            border-color: ${o("com/button/disable/stroke-color")};
          `}

          ${()=>["xs","sm","md","lg"].includes(r.$size)?n(r.$size,"com/button/secondary/border/stroke-width/default"):""}
        `;case"primary-white":return e`
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
          ${r.$active&&e`
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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable-invert/solid-background-color")} !important;
          `}
        `;case"secondary-white":return e`
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

          ${r.$active&&e`
            background-color: ${o("com/button/secondary-invert/background/active")};
            color: ${o("com/button/secondary-invert/label/color-text/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
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

          ${r.$loading&&e`
            background-color: ${o("com/button/disable-invert/background-color-transparent")} !important;
            border-color: ${o("com/button/disable-invert/stroke-color")} !important;
          `}

          ${()=>["xs","sm","md","lg"].includes(r.$size)?n(r.$size,"com/button/secondary-invert/border/stroke-width/default"):""}
        `;default:return e`
          background-color: white;
          color: black;
        `}}}
`,t=u.span`
  display: inline-flex;
  align-items: center;
`,w=u(f)`
  position: absolute;
`,b=z.forwardRef((r,a)=>{const{active:i,type:s,children:v,size:m="md",variant:l="primary",loading:d,disabled:p=!1,startIcon:$,endIcon:g,...y}=r,h=$&&c.jsx(t,{children:$}),k=g&&c.jsx(t,{children:g});return c.jsxs(x,{...y,ref:a,$variant:l,$size:m,$active:i,$loading:d,disabled:p||d,children:[d&&c.jsx(w,{size:m,variant:"indeterminate",invert:l==="primary-white"||l==="secondary-white"}),h,c.jsx("span",{className:"button-content",children:v}),k]})});b.displayName="FISButton";try{b.displayName="FISButton",b.__docgenInfo={description:"",displayName:"FISButton",props:{active:{defaultValue:null,description:"whether the button should be active",name:"active",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Change the design of button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-negative"'},{value:'"secondary-negative"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},size:{defaultValue:null,description:"Size md for only button icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Defines if the button is currently being requested.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{b as F};
