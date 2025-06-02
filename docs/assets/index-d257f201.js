import{j as a}from"./jsx-runtime-47c18db8.js";import{r as k}from"./index-d806aa85.js";import{d as b,g as o,l as r}from"./getTheme-624682de.js";import{F as x}from"./index-8298a7d1.js";import{j as I}from"./RemoveIcon-d554efb7.js";const S=b.div`
  display: inline-flex;
`,B=b.button`
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
    z-index: 1;
  }

  ${t=>{switch(t.$size){case"xs":return r`
          ${o("Label/XS")};
          height: ${o("com/button/size-xs/height")};
          min-width: ${o("com/button/size-xs/min-width")};
          min-height: ${o("com/button/size-xs/height")};
          max-height: ${o("com/button/size-xs/height")};
          border-top-left-radius: ${o("com/button/size-xs/corner-radius")};
          border-bottom-left-radius: ${o("com/button/size-xs/corner-radius")};
          padding-right: ${o("com/button/size-xs/horizontal-padding")};
          padding-left: ${o("com/button/size-xs/horizontal-padding")};
          gap: ${o("com/button/size-xs/horizontal-gap")};
        `;case"sm":return r`
          ${o("Label/Sm")};
          height: ${o("com/button/size-sm/height")};
          min-width: ${o("com/button/size-sm/min-width")};
          min-height: ${o("com/button/size-sm/height")};
          max-height: ${o("com/button/size-sm/height")};
          border-top-left-radius: ${o("com/button/size-sm/corner-radius")};
          border-bottom-left-radius: ${o("com/button/size-sm/corner-radius")};
          padding-right: ${o("com/button/size-sm/horizontal-padding")};
          padding-left: ${o("com/button/size-sm/horizontal-padding")};
          gap: ${o("com/button/size-sm/horizontal-gap")};
        `;case"md":return r`
          ${o("Label/Sm")};
          height: ${o("com/button/size-md/height")};
          min-width: ${o("com/button/size-md/min-width")};
          min-height: ${o("com/button/size-md/height")};
          max-height: ${o("com/button/size-md/height")};
          border-top-left-radius: ${o("com/button/size-md/corner-radius")};
          border-bottom-left-radius: ${o("com/button/size-md/corner-radius")};
          padding-right: ${o("com/button/size-md/horizontal-padding")};
          padding-left: ${o("com/button/size-md/horizontal-padding")};
          gap: ${o("com/button/size-md/horizontal-gap")};
        `;case"lg":return r`
          ${o("Label/Sm")};
          height: ${o("com/button/size-lg/height")};
          min-width: ${o("com/button/size-lg/min-width")};
          min-height: ${o("com/button/size-lg/height")};
          max-height: ${o("com/button/size-lg/height")};
          border-top-left-radius: ${o("com/button/size-lg/corner-radius")};
          border-bottom-left-radius: ${o("com/button/size-lg/corner-radius")};
          padding-right: ${o("com/button/size-lg/horizontal-padding")};
          padding-left: ${o("com/button/size-lg/horizontal-padding")};
          gap: ${o("com/button/size-lg/horizontal-gap")};
        `}}}

  ${t=>{switch(t.$variant){case"primary":return r`
          background-color: ${o("com/button/primary/background/default")};
          border-right-style: solid;
          border-right-width: ${o("com/split-button/primary/divider/stroke-width")};
          border-right-color: ${o("com/split-button/primary/divider/color-stroke")};

          &:hover {
            background-color: ${o("com/button/primary/background/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${i} {
              color: ${o("com/button/primary/icon/color-icon/hover")};
            }

            ${c} {
              color: ${o("com/button/primary/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary/background/pressed")};

            ${i} {
              color: ${o("com/button/primary/icon/color-icon/pressed")};
            }

            ${c} {
              color: ${o("com/button/primary/label/color-text/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/primary/background/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${i} {
              color: ${o("com/button/primary/icon/color-icon/active")};
            }

            ${c} {
              color: ${o("com/button/primary/label/color-text/active")};
            }
          `}

          ${t.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            box-shadow: none;

            ${i} {
              color: ${o("com/button/disable/icon-color")};
            }

            ${c} {
              color: ${o("com/button/disable/label-color")};
            }
          }
        `;case"secondary":return r`
          background-color: ${o("com/button/secondary/background/default")};
          border-style: solid;
          border-width: ${o("com/button/secondary/border/stroke-width/default")};
          border-color: ${o("com/button/secondary/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary/background/hover")};
            border-color: ${o("com/button/secondary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${i} {
              color: ${o("com/button/secondary/icon/color-icon/hover")};
            }

            ${c} {
              color: ${o("com/button/secondary/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            border-color: ${o("com/button/secondary/border/pressed")};

            ${i} {
              color: ${o("com/button/secondary/icon/color-icon/pressed")};
            }

            ${c} {
              color: ${o("com/button/secondary/label/color-text/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/secondary/background/active")};
            border-color: ${o("com/button/secondary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${i} {
              color: ${o("com/button/secondary/icon/color-icon/active")};
            }

            ${c} {
              color: ${o("com/button/secondary/label/color-text/active")};
            }
          `}

          ${t.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            box-shadow: none;

            ${i} {
              color: ${o("com/button/disable/icon-color")};
            }

            ${c} {
              color: ${o("com/button/disable/label-color")};
            }
          }
        `;case"tertiary":return r`
          background-color: ${o("com/button/tertiary/background/default")};
          border-style: solid;
          border-width: ${o("com/button/tertiary/border/stroke-width/default")};
          border-color: ${o("com/button/tertiary/border/default")};

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            border-color: ${o("com/button/tertiary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${i} {
              color: ${o("com/button/tertiary/icon/color-icon/hover")};
            }

            ${c} {
              color: ${o("com/button/tertiary/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            border-color: ${o("com/button/tertiary/border/pressed")};

            ${i} {
              color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            }

            ${c} {
              color: ${o("com/button/tertiary/label/color-text/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/tertiary/background/active")};
            border-color: ${o("com/button/tertiary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")};

            ${i} {
              color: ${o("com/button/tertiary/icon/color-icon/active")};
            }

            ${c} {
              color: ${o("com/button/tertiary/label/color-text/active")};
            }
          `}

          ${t.$loading&&r`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            box-shadow: none;

            ${i} {
              color: ${o("com/button/disable/icon-color")};
            }

            ${c} {
              color: ${o("com/button/disable/label-color")};
            }
          }
        `;case"primary-white":return r`
          background-color: ${o("com/button/primary-invert/background/default")};
          border-right-style: solid;
          border-right-width: ${o("com/split-button/primary-invert/divider/stroke-width")};
          border-right-color: ${o("com/split-button/primary-invert/divider/color-stroke")};

          &:hover {
            background-color: ${o("com/button/primary-invert/background/hover")};

            ${i} {
              color: ${o("com/button/primary-invert/icon/color-icon/hover")};
            }

            ${c} {
              color: ${o("com/button/primary-invert/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary-invert/background/pressed")};

            ${i} {
              color: ${o("com/button/primary-invert/icon/color-icon/pressed")};
            }

            ${c} {
              color: ${o("com/button/primary-invert/label/color-text/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/primary-invert/background/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};

            ${i} {
              color: ${o("com/button/primary-invert/icon/color-icon/active")};
            }

            ${c} {
              color: ${o("com/button/primary-invert/label/color-text/active")};
            }
          `}

          ${t.$loading&&r`
            background-color: ${o("com/button/loading-invert/solid-background-color")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/solid-background-color")};
            border-right-color: ${o("com/split-button/disable-invert/divider/color-stroke")};
            box-shadow: none;

            ${i} {
              color: ${o("com/button/disable-invert/icon-color")};
            }

            ${c} {
              color: ${o("com/button/disable-invert/label-color")};
            }
          }
        `;case"secondary-white":return r`
          background-color: ${o("com/button/secondary-invert/background/default")};
          border-style: solid;
          border-width: ${o("sem/dimension/stroke-width/divider/md")};
          border-color: ${o("com/button/secondary-invert/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary-invert/background/hover")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/hover")};
            box-shadow: none;

            ${i} {
              color: ${o("com/button/secondary-invert/icon/color-icon/hover")};
            }

            ${c} {
              color: ${o("com/button/secondary-invert/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/pressed")};

            ${i} {
              color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
            }

            ${c} {
              color: ${o("com/button/secondary-invert/label/color-text/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/secondary-invert/background/active")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")} !important;

            ${i} {
              color: ${o("com/button/secondary-invert/icon/color-icon/active")};
            }

            ${c} {
              color: ${o("com/button/secondary-invert/label/color-text/active")};
            }
          `}

          ${t.$loading&&r`
            background-color: ${o("com/button/disable-invert/background-color-transparent")} !important;
            border: ${o("com/button/secondary-invert/border/stroke-width/default")}
              solid ${o("com/button/loading-invert/stroke-color")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/background-color-transparent")};
            border: ${o("com/button/secondary-invert/border/stroke-width/default")}
              solid ${o("com/button/disable-invert/stroke-color")};

            ${i} {
              color: ${o("com/button/disable-invert/icon-color")};
            }

            ${c} {
              color: ${o("com/button/disable-invert/label-color")};
            }
          }
        `}}}

${t=>{if(t.$active)return r`
        z-index: 1;
      `}}
`,_=b.button`
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;

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

  ${t=>{switch(t.$size){case"xs":return r`
          width: ${o("com/split-button/size-xs/width")};
          height: ${o("com/button/size-xs/height")};
          min-height: ${o("com/button/size-xs/height")};
          max-height: ${o("com/button/size-xs/height")};
          border-top-right-radius: ${o("com/button/size-xs/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-xs/corner-radius")};
        `;case"sm":return r`
          width: ${o("com/split-button/size-sm/width")};
          height: ${o("com/button/size-sm/height")};
          min-height: ${o("com/button/size-sm/height")};
          max-height: ${o("com/button/size-sm/height")};
          border-top-right-radius: ${o("com/button/size-sm/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-sm/corner-radius")};
        `;case"md":return r`
          width: ${o("com/split-button/size-md/width")};
          height: ${o("com/button/size-md/height")};
          min-height: ${o("com/button/size-md/height")};
          max-height: ${o("com/button/size-md/height")};
          border-top-right-radius: ${o("com/button/size-md/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-md/corner-radius")};
        `;case"lg":return r`
          width: ${o("com/split-button/size-lg/width")};
          height: ${o("com/button/size-lg/height")};
          min-height: ${o("com/button/size-lg/height")};
          max-height: ${o("com/button/size-lg/height")};
          border-top-right-radius: ${o("com/button/size-lg/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-lg/corner-radius")};
        `}}}

  ${t=>{switch(t.$variant){case"primary":return r`
          background-color: ${o("com/button/primary/background/default")};

          &:hover {
            background-color: ${o("com/button/primary/background/hover")};

            ${e} {
              color: ${o("com/button/primary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary/background/pressed")};

            ${e} {
              color: ${o("com/button/primary/icon/color-icon/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/primary/background/active")};

            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${e} {
              color: ${o("com/button/primary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};

            ${e} {
              color: ${o("com/button/disable/icon-color")};
            }
          }
        `;case"secondary":return r`
          background-color: ${o("com/button/secondary/background/default")};
          border-top-width: ${o("com/button/secondary/border/stroke-width/default")};
          border-bottom-width: ${o("com/button/secondary/border/stroke-width/default")};
          border-right-width: ${o("com/button/secondary/border/stroke-width/default")};
          border-left-width: 0px;
          border-color: ${o("com/button/secondary/border/default")};
          border-style: solid;

          &:hover {
            background-color: ${o("com/button/secondary/background/hover")};
            border-top-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-right-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${e} {
              color: ${o("com/button/secondary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            border-top-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-right-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary/border/pressed")};

            ${e} {
              color: ${o("com/button/secondary/icon/color-icon/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/secondary/background/active")};
            border-width: ${o("com/button/secondary/border/stroke-width/hover")}
            border-color: ${o("com/button/secondary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

              ${e} {
              color: ${o("com/button/secondary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-top-width: ${o("com/button/secondary/border/stroke-width/default")};
            border-bottom-width: ${o("com/button/secondary/border/stroke-width/default")};
            border-right-width: ${o("com/button/secondary/border/stroke-width/default")};
            border-color: ${o("com/button/disable/stroke-color")};
            box-shadow: none;

            ${e} {
              color: ${o("com/button/disable/icon-color")};
            }
          }
        `;case"tertiary":return r`
          background-color: ${o("com/button/tertiary/background/default")};
          border-top-width: ${o("com/button/tertiary/border/stroke-width/default")};
          border-bottom-width: ${o("com/button/tertiary/border/stroke-width/default")};
          border-right-width: ${o("com/button/tertiary/border/stroke-width/default")};
          border-left-width: 0px;
          border-color: ${o("com/button/tertiary/border/default")};
          border-style: solid;

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            border-top-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-right-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-color: ${o("com/button/tertiary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${e} {
              color: ${o("com/button/tertiary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            border-top-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-right-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-color: ${o("com/button/tertiary/border/pressed")};

            ${e} {
              color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/tertiary/background/active")};
            border-width: ${o("com/button/tertiary/border/stroke-width/active")}
            border-color: ${o("com/button/tertiary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${e} {
              color: ${o("com/button/tertiary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-top-width: ${o("com/button/tertiary/border/stroke-width/default")};
            border-bottom-width: ${o("com/button/tertiary/border/stroke-width/default")};
            border-right-width: ${o("com/button/tertiary/border/stroke-width/default")};
            border-color: ${o("com/button/disable/stroke-color")};
            box-shadow: none;

            ${e} {
              color: ${o("com/button/disable/icon-color")};
            }
          }
        `;case"primary-white":return r`
          background-color: ${o("com/button/primary-invert/background/default")};

          &:hover {
            background-color: ${o("com/button/primary-invert/background/hover")};

            ${e} {
              color: ${o("com/button/primary-invert/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary-invert/background/pressed")};

            ${e} {
              color: ${o("com/button/primary-invert/icon/color-icon/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/primary-invert/background/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")} !important;

            ${e} {
              color: ${o("com/button/primary-invert/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/solid-background-color")};
            box-shadow: none;

            ${e} {
              color: ${o("com/button/disable-invert/icon-color")};
            }
          }
        `;case"secondary-white":return r`
          background-color: ${o("com/button/secondary-invert/background/default")};
          border-top-width: ${o("com/button/secondary-invert/border/stroke-width/default")};
          border-bottom-width: ${o("com/button/secondary-invert/border/stroke-width/default")};
          border-right-width: ${o("com/button/secondary-invert/border/stroke-width/default")};
          border-left-width: 0px;
          border-color: ${o("com/button/secondary-invert/border/default")};
          border-style: solid;

          &:hover {
            background-color: ${o("com/button/secondary-invert/background/hover")};
            border-top-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-right-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/hover")};

            ${e} {
              color: ${o("com/button/secondary-invert/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            border-top-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-right-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/pressed")};

            ${e} {
              color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
            }
          }

          ${t.$active&&r`
            background-color: ${o("com/button/secondary-invert/background/active")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")} !important;

            ${e} {
              color: ${o("com/button/secondary-invert/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/background-color-transparent")};
            border-top-width: ${o("com/button/secondary/border/stroke-width/default")};
            border-bottom-width: ${o("com/button/secondary/border/stroke-width/default")};
            border-right-width: ${o("com/button/secondary/border/stroke-width/default")};
            border-color: ${o("com/button/disable-invert/stroke-color")};
            box-shadow: none;

            ${e} {
              color: ${o("com/button/disable-invert/icon-color")};
            }
          }
        `}}}
`,e=b.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>{switch(t.$size){case"xs":return r`
          width: ${o("com/split-button/size-xs/icon/width")};
          height: ${o("com/split-button/size-xs/icon/width")};
        `;case"sm":return r`
          width: ${o("com/split-button/size-sm/icon/width")};
          height: ${o("com/split-button/size-sm/icon/width")};
        `;case"md":return r`
          width: ${o("com/split-button/size-md/icon/width")};
          height: ${o("com/split-button/size-md/icon/width")};
        `;case"lg":return r`
          width: ${o("com/split-button/size-lg/icon/width")};
          height: ${o("com/split-button/size-lg/icon/width")};
        `}}}

  ${t=>{switch(t.$variant){case"primary":return r`
          color: ${o("com/button/primary/icon/color-icon/default")};
        `;case"secondary":return r`
          color: ${o("com/button/secondary/icon/color-icon/default")};
        `;case"tertiary":return r`
          color: ${o("com/button/tertiary/icon/color-icon/default")};
        `;case"primary-white":return r`
          color: ${o("com/button/primary-invert/icon/color-icon/default")};
        `;case"secondary-white":return r`
          color: ${o("com/button/secondary-invert/icon/color-icon/default")};
        `}}}
`,c=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${o("Label/Sm")};

  ${t=>{switch(t.$size){case"sm":return r`
          padding-right: ${o("com/button/size-sm/label/sub-spacing")};
          padding-left: ${o("com/button/size-sm/label/sub-spacing")};
        `;case"md":return r`
          padding-right: ${o("com/button/size-md/label/sub-spacing")};
          padding-left: ${o("com/button/size-md/label/sub-spacing")};
        `;case"lg":return r`
          padding-right: ${o("com/button/size-lg/label/sub-spacing")};
          padding-left: ${o("com/button/size-lg/label/sub-spacing")};
        `}}}

  ${t=>{switch(t.$variant){case"primary":return r`
          color: ${o("com/button/primary/label/color-text/default")};
        `;case"secondary":return r`
          color: ${o("com/button/secondary/label/color-text/default")};
        `;case"tertiary":return r`
          color: ${o("com/button/tertiary/label/color-text/default")};
        `;case"primary-white":return r`
          color: ${o("com/button/primary-invert/label/color-text/default")};
        `;case"secondary-white":return r`
          color: ${o("com/button/secondary-invert/label/color-text/default")};
        `}}}

${t=>{if(t.$loading)return r`
        visibility: hidden;
      `}}
`,i=b.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>{switch(t.$size){case"sm":return r`
          width: ${o("com/button/size-sm/icon/size-icon")};
          height: ${o("com/button/size-sm/icon/size-icon")};
        `;case"md":return r`
          width: ${o("com/button/size-md/icon/size-icon")};
          height: ${o("com/button/size-md/icon/size-icon")};
        `;case"lg":return r`
          width: ${o("com/button/size-lg/icon/size-icon")};
          height: ${o("com/button/size-lg/icon/size-icon")};
        `}}}

  ${t=>{switch(t.$variant){case"primary":return r`
          color: ${o("com/button/primary/icon/color-icon/default")};
        `;case"secondary":return r`
          color: ${o("com/button/secondary/icon/color-icon/default")};
        `;case"tertiary":return r`
          color: ${o("com/button/tertiary/icon/color-icon/default")};
        `;case"primary-white":return r`
          color: ${o("com/button/primary-invert/icon/color-icon/default")};
        `;case"secondary-white":return r`
          color: ${o("com/button/secondary-invert/icon/color-icon/default")};
        `}}}

  ${t=>{if(t.$loading)return r`
        visibility: hidden;
      `}}
`,q=b(x)`
  position: absolute;
`,p=({icon:t,label:l,size:d,variant:n,onButtonClick:m,disabled:u=!1,activeButton:$=!1,loading:s=!1,...h})=>a.jsxs(B,{...h,onClick:m,$size:d,disabled:u,$variant:n,$active:$,$loading:s,children:[s&&a.jsx(q,{size:d,variant:"indeterminate",invert:n==="primary-white"||n==="secondary-white","aria-label":"Loading"}),t&&d!=="xs"&&a.jsx(i,{$size:d,$variant:n,$loading:s,children:t}),l&&a.jsx(c,{$size:d,$variant:n,$loading:s,children:l})]}),V=k.memo(p);try{p.displayName="SplitButtonItem",p.__docgenInfo={description:"",displayName:"SplitButtonItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeButton:{defaultValue:{value:"false"},description:"",name:"activeButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const v=({size:t,variant:l,onIconClick:d,disabled:n=!1,activeIcon:m=!1,...u})=>a.jsx(_,{...u,onClick:d,$size:t,disabled:n,$active:m,$variant:l,children:a.jsx(e,{$size:t,$variant:l,children:a.jsx(I,{"aria-hidden":"true"})})}),j=k.memo(v);try{v.displayName="SplitButtonIcon",v.__docgenInfo={description:"",displayName:"SplitButtonIcon",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeIcon:{defaultValue:{value:"false"},description:"",name:"activeIcon",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const y=k.forwardRef((t,l)=>{const{className:d,label:n,icon:m,size:u="md",variant:$="primary",disabled:s=!1,activeButton:h=!1,activeIcon:w=!1,loading:g=!1,onButtonClick:f,onIconClick:z}=t;return a.jsxs(S,{ref:l,className:d,role:"group","aria-label":`${n} split button`,children:[a.jsx(V,{icon:m,label:n,size:u,variant:$,disabled:s||g,activeButton:h,loading:g,onButtonClick:f,"aria-label":`${n} main action`}),a.jsx(j,{size:u,variant:$,disabled:s||g,activeIcon:w,onIconClick:z,"aria-label":"Toggle dropdown","aria-expanded":w})]})});y.displayName="FISSplitButton";try{y.displayName="FISSplitButton",y.__docgenInfo={description:"",displayName:"FISSplitButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeButton:{defaultValue:null,description:"",name:"activeButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}},activeIcon:{defaultValue:null,description:"",name:"activeIcon",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{y as F};
