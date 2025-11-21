import{j as i}from"./jsx-runtime-3dc6859f.js";import{r as C}from"./index-d4014758.js";import{d as u,g as o,l as t}from"./getTheme-1aacf7d7.js";import{F as Z}from"./index-ac9297cf.js";import{D as oo,s as to,C as ro}from"./LineArrowsUp-143aac49.js";const eo=u.div`
  display: inline-flex;
`,no=u.button`
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

  ${r=>{switch(r.$size){case"xs":return t`
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
        `;case"sm":return t`
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
        `;case"md":return t`
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
        `;case"lg":return t`
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

  ${r=>{switch(r.$variant){case"primary":return t`
          background-color: ${o("com/button/primary/background/default")};
          border-right-style: solid;
          border-right-width: ${o("com/split-button/primary/divider/stroke-width")};
          border-right-color: ${o("com/split-button/primary/divider/color-stroke")};

          &:hover {
            background-color: ${o("com/button/primary/background/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${c} {
              color: ${o("com/button/primary/icon/color-icon/hover")};
            }

            ${n} {
              color: ${o("com/button/primary/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary/background/pressed")};

            ${c} {
              color: ${o("com/button/primary/icon/color-icon/pressed")};
            }

            ${n} {
              color: ${o("com/button/primary/label/color-text/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/primary/background/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${c} {
              color: ${o("com/button/primary/icon/color-icon/active")};
            }

            ${n} {
              color: ${o("com/button/primary/label/color-text/active")};
            }
          `}

          ${r.$loading&&t`
            background-color: ${o("com/button/loading/background-color")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            box-shadow: none;

            ${c} {
              color: ${o("com/button/disable/icon-color")};
            }

            ${n} {
              color: ${o("com/button/disable/label-color")};
            }
          }
        `;case"secondary":return t`
          background-color: ${o("com/button/secondary/background/default")};
          border-style: solid;
          border-width: ${o("com/button/secondary/border/stroke-width/default")};
          border-color: ${o("com/button/secondary/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary/background/hover")};
            border-color: ${o("com/button/secondary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${c} {
              color: ${o("com/button/secondary/icon/color-icon/hover")};
            }

            ${n} {
              color: ${o("com/button/secondary/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            border-color: ${o("com/button/secondary/border/pressed")};

            ${c} {
              color: ${o("com/button/secondary/icon/color-icon/pressed")};
            }

            ${n} {
              color: ${o("com/button/secondary/label/color-text/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/secondary/background/active")};
            border-color: ${o("com/button/secondary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${c} {
              color: ${o("com/button/secondary/icon/color-icon/active")};
            }

            ${n} {
              color: ${o("com/button/secondary/label/color-text/active")};
            }
          `}

          ${r.$loading&&t`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            box-shadow: none;

            ${c} {
              color: ${o("com/button/disable/icon-color")};
            }

            ${n} {
              color: ${o("com/button/disable/label-color")};
            }
          }
        `;case"tertiary":return t`
          background-color: ${o("com/button/tertiary/background/default")};
          border-style: solid;
          border-width: ${o("com/button/tertiary/border/stroke-width/default")};
          border-color: ${o("com/button/tertiary/border/default")};

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            border-color: ${o("com/button/tertiary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};

            ${c} {
              color: ${o("com/button/tertiary/icon/color-icon/hover")};
            }

            ${n} {
              color: ${o("com/button/tertiary/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            border-color: ${o("com/button/tertiary/border/pressed")};

            ${c} {
              color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            }

            ${n} {
              color: ${o("com/button/tertiary/label/color-text/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/tertiary/background/active")};
            border-color: ${o("com/button/tertiary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")};

            ${c} {
              color: ${o("com/button/tertiary/icon/color-icon/active")};
            }

            ${n} {
              color: ${o("com/button/tertiary/label/color-text/active")};
            }
          `}

          ${r.$loading&&t`
            background-color: ${o("com/button/loading/background-color")} !important;
            border-color: ${o("com/button/loading/stroke-color")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            box-shadow: none;

            ${c} {
              color: ${o("com/button/disable/icon-color")};
            }

            ${n} {
              color: ${o("com/button/disable/label-color")};
            }
          }
        `;case"primary-white":return t`
          background-color: ${o("com/button/primary-invert/background/default")};
          border-right-style: solid;
          border-right-width: ${o("com/split-button/primary-invert/divider/stroke-width")};
          border-right-color: ${o("com/split-button/primary-invert/divider/color-stroke")};

          &:hover {
            background-color: ${o("com/button/primary-invert/background/hover")};

            ${c} {
              color: ${o("com/button/primary-invert/icon/color-icon/hover")};
            }

            ${n} {
              color: ${o("com/button/primary-invert/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary-invert/background/pressed")};

            ${c} {
              color: ${o("com/button/primary-invert/icon/color-icon/pressed")};
            }

            ${n} {
              color: ${o("com/button/primary-invert/label/color-text/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/primary-invert/background/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};

            ${c} {
              color: ${o("com/button/primary-invert/icon/color-icon/active")};
            }

            ${n} {
              color: ${o("com/button/primary-invert/label/color-text/active")};
            }
          `}

          ${r.$loading&&t`
            background-color: ${o("com/button/loading-invert/solid-background-color")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/solid-background-color")};
            border-right-color: ${o("com/split-button/disable-invert/divider/color-stroke")};
            box-shadow: none;

            ${c} {
              color: ${o("com/button/disable-invert/icon-color")};
            }

            ${n} {
              color: ${o("com/button/disable-invert/label-color")};
            }
          }
        `;case"secondary-white":return t`
          background-color: ${o("com/button/secondary-invert/background/default")};
          border-style: solid;
          border-width: ${o("sem/dimension/stroke-width/divider/md")};
          border-color: ${o("com/button/secondary-invert/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary-invert/background/hover")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/hover")};
            box-shadow: none;

            ${c} {
              color: ${o("com/button/secondary-invert/icon/color-icon/hover")};
            }

            ${n} {
              color: ${o("com/button/secondary-invert/label/color-text/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/pressed")};

            ${c} {
              color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
            }

            ${n} {
              color: ${o("com/button/secondary-invert/label/color-text/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/secondary-invert/background/active")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")} !important;

            ${c} {
              color: ${o("com/button/secondary-invert/icon/color-icon/active")};
            }

            ${n} {
              color: ${o("com/button/secondary-invert/label/color-text/active")};
            }
          `}

          ${r.$loading&&t`
            background-color: ${o("com/button/disable-invert/background-color-transparent")} !important;
            border: ${o("com/button/secondary-invert/border/stroke-width/default")}
              solid ${o("com/button/loading-invert/stroke-color")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/background-color-transparent")};
            border: ${o("com/button/secondary-invert/border/stroke-width/default")}
              solid ${o("com/button/disable-invert/stroke-color")};

            ${c} {
              color: ${o("com/button/disable-invert/icon-color")};
            }

            ${n} {
              color: ${o("com/button/disable-invert/label-color")};
            }
          }
        `}}}

${r=>{if(r.$active)return t`
        z-index: 1;
      `}}
`,co=u.button`
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

  ${r=>{switch(r.$size){case"xs":return t`
          width: ${o("com/split-button/size-xs/width")};
          height: ${o("com/button/size-xs/height")};
          min-height: ${o("com/button/size-xs/height")};
          max-height: ${o("com/button/size-xs/height")};
          border-top-right-radius: ${o("com/button/size-xs/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-xs/corner-radius")};
        `;case"sm":return t`
          width: ${o("com/split-button/size-sm/width")};
          height: ${o("com/button/size-sm/height")};
          min-height: ${o("com/button/size-sm/height")};
          max-height: ${o("com/button/size-sm/height")};
          border-top-right-radius: ${o("com/button/size-sm/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-sm/corner-radius")};
        `;case"md":return t`
          width: ${o("com/split-button/size-md/width")};
          height: ${o("com/button/size-md/height")};
          min-height: ${o("com/button/size-md/height")};
          max-height: ${o("com/button/size-md/height")};
          border-top-right-radius: ${o("com/button/size-md/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-md/corner-radius")};
        `;case"lg":return t`
          width: ${o("com/split-button/size-lg/width")};
          height: ${o("com/button/size-lg/height")};
          min-height: ${o("com/button/size-lg/height")};
          max-height: ${o("com/button/size-lg/height")};
          border-top-right-radius: ${o("com/button/size-lg/corner-radius")};
          border-bottom-right-radius: ${o("com/button/size-lg/corner-radius")};
        `}}}

  ${r=>{switch(r.$variant){case"primary":return t`
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

          ${r.$active&&t`
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
        `;case"secondary":return t`
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

          ${r.$active&&t`
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
        `;case"tertiary":return t`
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

          ${r.$active&&t`
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
        `;case"primary-white":return t`
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

          ${r.$active&&t`
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
        `;case"secondary-white":return t`
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

          ${r.$active&&t`
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
`,e=u.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${r=>{switch(r.$size){case"xs":return t`
          width: ${o("com/split-button/size-xs/icon/width")};
          height: ${o("com/split-button/size-xs/icon/width")};
        `;case"sm":return t`
          width: ${o("com/split-button/size-sm/icon/width")};
          height: ${o("com/split-button/size-sm/icon/width")};
        `;case"md":return t`
          width: ${o("com/split-button/size-md/icon/width")};
          height: ${o("com/split-button/size-md/icon/width")};
        `;case"lg":return t`
          width: ${o("com/split-button/size-lg/icon/width")};
          height: ${o("com/split-button/size-lg/icon/width")};
        `}}}

  ${r=>{switch(r.$variant){case"primary":return t`
          color: ${o("com/button/primary/icon/color-icon/default")};
        `;case"secondary":return t`
          color: ${o("com/button/secondary/icon/color-icon/default")};
        `;case"tertiary":return t`
          color: ${o("com/button/tertiary/icon/color-icon/default")};
        `;case"primary-white":return t`
          color: ${o("com/button/primary-invert/icon/color-icon/default")};
        `;case"secondary-white":return t`
          color: ${o("com/button/secondary-invert/icon/color-icon/default")};
        `}}}
`,n=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${o("Label/Sm")};

  ${r=>{switch(r.$size){case"sm":return t`
          padding-right: ${o("com/button/size-sm/label/sub-spacing")};
          padding-left: ${o("com/button/size-sm/label/sub-spacing")};
        `;case"md":return t`
          padding-right: ${o("com/button/size-md/label/sub-spacing")};
          padding-left: ${o("com/button/size-md/label/sub-spacing")};
        `;case"lg":return t`
          padding-right: ${o("com/button/size-lg/label/sub-spacing")};
          padding-left: ${o("com/button/size-lg/label/sub-spacing")};
        `}}}

  ${r=>{switch(r.$variant){case"primary":return t`
          color: ${o("com/button/primary/label/color-text/default")};
        `;case"secondary":return t`
          color: ${o("com/button/secondary/label/color-text/default")};
        `;case"tertiary":return t`
          color: ${o("com/button/tertiary/label/color-text/default")};
        `;case"primary-white":return t`
          color: ${o("com/button/primary-invert/label/color-text/default")};
        `;case"secondary-white":return t`
          color: ${o("com/button/secondary-invert/label/color-text/default")};
        `}}}

${r=>{if(r.$loading)return t`
        visibility: hidden;
      `}}
`,c=u.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${r=>{switch(r.$size){case"sm":return t`
          width: ${o("com/button/size-sm/icon/size-icon")};
          height: ${o("com/button/size-sm/icon/size-icon")};
        `;case"md":return t`
          width: ${o("com/button/size-md/icon/size-icon")};
          height: ${o("com/button/size-md/icon/size-icon")};
        `;case"lg":return t`
          width: ${o("com/button/size-lg/icon/size-icon")};
          height: ${o("com/button/size-lg/icon/size-icon")};
        `}}}

  ${r=>{switch(r.$variant){case"primary":return t`
          color: ${o("com/button/primary/icon/color-icon/default")};
        `;case"secondary":return t`
          color: ${o("com/button/secondary/icon/color-icon/default")};
        `;case"tertiary":return t`
          color: ${o("com/button/tertiary/icon/color-icon/default")};
        `;case"primary-white":return t`
          color: ${o("com/button/primary-invert/icon/color-icon/default")};
        `;case"secondary-white":return t`
          color: ${o("com/button/secondary-invert/icon/color-icon/default")};
        `}}}

  ${r=>{if(r.$loading)return t`
        visibility: hidden;
      `}}
`,io=u(Z)`
  position: absolute;
`,B=({icon:r,label:s,size:d,variant:a,onButtonClick:h,disabled:m=!1,activeButton:$=!1,loading:l=!1,...z})=>i.jsxs(no,{type:"button",...z,onClick:h,$size:d,disabled:m,$variant:a,$active:$,$loading:l,children:[l&&i.jsx(io,{size:d,variant:"indeterminate",invert:a==="primary-white"||a==="secondary-white","aria-label":"Loading"}),r&&d!=="xs"&&i.jsx(c,{$size:d,$variant:a,$loading:l,children:r}),s&&i.jsx(n,{$size:d,$variant:a,$loading:l,children:s})]}),ao=C.memo(B);try{B.displayName="SplitButtonItem",B.__docgenInfo={description:"",displayName:"SplitButtonItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeButton:{defaultValue:{value:"false"},description:"",name:"activeButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const I=({size:r,variant:s,onIconClick:d,disabled:a=!1,activeIcon:h=!1,...m})=>i.jsx(co,{...m,onClick:d,$size:r,disabled:a,$active:h,$variant:s,children:i.jsx(e,{$size:r,$variant:s,children:i.jsx(oo,{"aria-hidden":"true"})})}),so=C.memo(I);try{I.displayName="SplitButtonIcon",I.__docgenInfo={description:"",displayName:"SplitButtonIcon",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeIcon:{defaultValue:{value:"false"},description:"",name:"activeIcon",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const x=C.forwardRef((r,s)=>{const{className:d,label:a,icon:h,size:m="md",variant:$="primary",disabled:l=!1,activeButton:z=!1,activeIcon:V=!1,loading:S=!1,onButtonClick:W,onIconClick:Y}=r;return i.jsxs(eo,{ref:s,className:d,role:"group","aria-label":`${a} split button`,children:[i.jsx(ao,{icon:h,label:a,size:m,variant:$,disabled:l||S,activeButton:z,loading:S,onButtonClick:W,"aria-label":`${a} main action`}),i.jsx(so,{size:m,variant:$,disabled:l||S,activeIcon:V,onIconClick:Y,"aria-label":"Toggle dropdown","aria-expanded":V})]})});x.displayName="FISSplitButton";try{x.displayName="FISSplitButton",x.__docgenInfo={description:"",displayName:"FISSplitButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeButton:{defaultValue:null,description:"",name:"activeButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}},activeIcon:{defaultValue:null,description:"",name:"activeIcon",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const $o={title:"Components/Button & Link/SplitButton",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"SplitButton là một component kết hợp giữa button chính và một button phụ để mở dropdown menu. Component này thường được sử dụng khi cần hiển thị một hành động chính và một số hành động phụ liên quan."}}},argTypes:{label:{control:"text",description:"Nội dung text hiển thị trên button chính.",table:{type:{summary:"string"},defaultValue:{summary:"Create"}}},size:{control:"radio",options:["xs","sm","md","lg"],description:"Kích thước của button. xs: nhỏ nhất, sm: nhỏ, md: vừa, lg: lớn.",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}}},icon:{control:"object",description:"Icon hiển thị bên cạnh text trên button chính."},variant:{control:"radio",options:["primary","secondary","tertiary","primary-white","secondary-white"],description:"Kiểu hiển thị của button. primary: màu chính, secondary: màu phụ, tertiary: màu thứ ba, primary-white: màu chính nền trắng, secondary-white: màu phụ nền trắng.",table:{type:{summary:"primary | secondary | tertiary | primary-white | secondary-white"},defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Vô hiệu hóa toàn bộ button, không cho phép tương tác.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeButton:{control:"boolean",description:"Trạng thái active của button chính, thường được sử dụng khi button đang được chọn hoặc đang thực hiện một hành động.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeIcon:{control:"boolean",description:"Trạng thái active của button dropdown, thường được sử dụng khi menu dropdown đang mở.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Hiển thị trạng thái loading trên button, thường được sử dụng khi đang thực hiện một hành động bất đồng bộ.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onButtonClick:{description:"Hàm callback được gọi khi người dùng click vào button chính.",action:"clicked"},onIconClick:{description:"Hàm callback được gọi khi người dùng click vào button dropdown để mở/đóng menu.",action:"toggled"}}},b={label:"Create",icon:i.jsx(ro,{}),size:"md",variant:"primary",disabled:!1,active:!1,activeIcon:!1,loading:!1},g={args:b,parameters:{docs:{description:{story:"SplitButton mặc định với kích thước vừa (md) và màu chính (primary)."}}}},p={args:{...b,size:"sm",label:"Add",icon:i.jsx(to,{})},parameters:{docs:{description:{story:"SplitButton với kích thước nhỏ (sm), phù hợp cho các không gian hạn chế."}}}},v={args:{...b,size:"lg",label:"Submit"},parameters:{docs:{description:{story:"SplitButton với kích thước lớn (lg), nổi bật và dễ nhìn thấy."}}}},y={args:{...b,variant:"secondary",label:"Cancel"},parameters:{docs:{description:{story:"SplitButton với màu phụ (secondary), thường được sử dụng cho các hành động thứ yếu."}}}},k={args:{...b,disabled:!0,label:"Disabled"},parameters:{docs:{description:{story:"SplitButton ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},w={args:{...b,loading:!0,label:"Loading"},parameters:{docs:{description:{story:"SplitButton ở trạng thái loading, hiển thị khi đang thực hiện một hành động."}}}},f={args:{...b,activeButton:!0,activeIcon:!0,label:"Active"},parameters:{docs:{description:{story:"SplitButton ở trạng thái active, với cả button chính và dropdown đều được kích hoạt."}}}};var _,q,j;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: "SplitButton mặc định với kích thước vừa (md) và màu chính (primary)."
      }
    }
  }
}`,...(j=(q=g.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var L,A,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: "sm",
    label: "Add",
    icon: <EditIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton với kích thước nhỏ (sm), phù hợp cho các không gian hạn chế."
      }
    }
  }
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,E,F;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: "lg",
    label: "Submit"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton với kích thước lớn (lg), nổi bật và dễ nhìn thấy."
      }
    }
  }
}`,...(F=(E=v.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,R,H;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "secondary",
    label: "Cancel"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton với màu phụ (secondary), thường được sử dụng cho các hành động thứ yếu."
      }
    }
  }
}`,...(H=(R=y.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var K,P,O;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    label: "Disabled"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton ở trạng thái vô hiệu hóa, không cho phép tương tác."
      }
    }
  }
}`,...(O=(P=k.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var X,G,J;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    loading: true,
    label: "Loading"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton ở trạng thái loading, hiển thị khi đang thực hiện một hành động."
      }
    }
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var M,Q,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    activeButton: true,
    activeIcon: true,
    label: "Active"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton ở trạng thái active, với cả button chính và dropdown đều được kích hoạt."
      }
    }
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const go=["Default","Small","Large","Secondary","Disabled","Loading","Active"];export{f as Active,g as Default,k as Disabled,v as Large,w as Loading,y as Secondary,p as Small,go as __namedExportsOrder,$o as default};
