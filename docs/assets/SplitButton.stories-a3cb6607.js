import{j as a}from"./jsx-runtime-e7d94ccb.js";import{r as s}from"./index-981f9478.js";import{u as _o,P as qo}from"./index-96b2cdcf.js";import{F as Mo}from"./index-1cbf047b.js";import{a as p,g as o,r as t}from"./getTheme-9564f801.js";import{F as Lo}from"./index-66039438.js";import{D as Ao,t as Do,v as Eo,C as Fo}from"./InfoSolidIcon-78d566e9.js";import"./index-05569730.js";import"./styles-22914ca6.js";import"./index-26cd4491.js";import"./index-f7beeda4.js";import"./styles-eb3881e5.js";import"./index-00a7ff96.js";import"./index-df9a4235.js";import"./index-0687b645.js";import"./mergeRefs-3d2b51f8.js";import"./index-4c1c7505.js";import"./index-b8aa03b0.js";import"./index-6b29b51e.js";import"./index-b885ca0b.js";import"./index-b0c2e733.js";import"./index-5e910af4.js";import"./AntdIcon-4d3cb6de.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./useMergedState-281a21e7.js";import"./motion-99a9a6da.js";import"./index-4e469fe9.js";import"./index-dc16328d.js";const No=p.div`
  display: inline-flex;
`,To=p.div`
  margin-top: ${o("com/select/vertical-gap")};
`,Oo=p.button`
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

          ${r.$active&&t`
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

          ${r.$loading&&t`
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
        `;case"secondary":return t`
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

          ${r.$active&&t`
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

          ${r.$loading&&t`
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
        `;case"tertiary":return t`
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

          ${r.$active&&t`
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

          ${r.$loading&&t`
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
        `;case"primary-white":return t`
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

          ${r.$active&&t`
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

          ${r.$loading&&t`
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

          ${r.$active&&t`
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

          ${r.$loading&&t`
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

${r=>{if(r.$active)return t`
        z-index: 1;
      `}}
`,Ro=p.button`
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

            ${n} {
              color: ${o("com/button/primary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary/background/pressed")};

            ${n} {
              color: ${o("com/button/primary/icon/color-icon/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/primary/background/active")};

            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${n} {
              color: ${o("com/button/primary/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};

            ${n} {
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

            ${n} {
              color: ${o("com/button/secondary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            border-top-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-right-width: ${o("com/button/secondary/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary/border/pressed")};

            ${n} {
              color: ${o("com/button/secondary/icon/color-icon/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/secondary/background/active")};
            border-width: ${o("com/button/secondary/border/stroke-width/hover")}
            border-color: ${o("com/button/secondary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

              ${n} {
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

            ${n} {
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

            ${n} {
              color: ${o("com/button/tertiary/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            border-top-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-right-width: ${o("com/button/tertiary/border/stroke-width/hover")};
            border-color: ${o("com/button/tertiary/border/pressed")};

            ${n} {
              color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/tertiary/background/active")};
            border-width: ${o("com/button/tertiary/border/stroke-width/active")}
            border-color: ${o("com/button/tertiary/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing")} !important;

            ${n} {
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

            ${n} {
              color: ${o("com/button/disable/icon-color")};
            }
          }
        `;case"primary-white":return t`
          background-color: ${o("com/button/primary-invert/background/default")};

          &:hover {
            background-color: ${o("com/button/primary-invert/background/hover")};

            ${n} {
              color: ${o("com/button/primary-invert/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/primary-invert/background/pressed")};

            ${n} {
              color: ${o("com/button/primary-invert/icon/color-icon/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/primary-invert/background/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")} !important;

            ${n} {
              color: ${o("com/button/primary-invert/icon/color-icon/active")};
            }
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/solid-background-color")};
            box-shadow: none;

            ${n} {
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

            ${n} {
              color: ${o("com/button/secondary-invert/icon/color-icon/hover")};
            }
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            border-top-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-bottom-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-right-width: ${o("com/button/secondary-invert/border/stroke-width/hover")};
            border-color: ${o("com/button/secondary-invert/border/pressed")};

            ${n} {
              color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
            }
          }

          ${r.$active&&t`
            background-color: ${o("com/button/secondary-invert/background/active")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
            outline: ${o("com/actived-mark/gap-spacing")} solid
              ${o("com/actived-mark/color-gap-spacing-on-white")} !important;

            ${n} {
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

            ${n} {
              color: ${o("com/button/disable-invert/icon-color")};
            }
          }
        `}}}
`,n=p.div`
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
`,c=p.span`
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
`,i=p.span`
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
`,Wo=p(Lo)`
  position: absolute;
`,T=({icon:r,label:l,size:u,variant:b,onButtonClick:f,disabled:$=!1,activeButton:z=!1,loading:m=!1,...F})=>a.jsxs(Oo,{type:"button",...F,onClick:f,$size:u,disabled:$,$variant:b,$active:z,$loading:m,children:[m&&a.jsx(Wo,{size:u,variant:"indeterminate",invert:b==="primary-white"||b==="secondary-white","aria-label":"Loading"}),r&&u!=="xs"&&a.jsx(i,{$size:u,$variant:b,$loading:m,children:r}),l&&a.jsx(c,{$size:u,$variant:b,$loading:m,children:l})]}),Ho=s.memo(T);try{T.displayName="SplitButtonItem",T.__docgenInfo={description:"",displayName:"SplitButtonItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeButton:{defaultValue:{value:"false"},description:"",name:"activeButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const O=({size:r,variant:l,onIconClick:u,disabled:b=!1,activeIcon:f=!1,...$})=>a.jsx(Ro,{...$,onClick:u,$size:r,disabled:b,$active:f,$variant:l,children:a.jsx(n,{$size:r,$variant:l,children:a.jsx(Ao,{"aria-hidden":"true"})})}),Ko=s.memo(O);try{O.displayName="SplitButtonIcon",O.__docgenInfo={description:"",displayName:"SplitButtonIcon",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeIcon:{defaultValue:{value:"false"},description:"",name:"activeIcon",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const x=s.forwardRef((r,l)=>{const{className:u,label:b,icon:f,size:$="md",variant:z="primary",disabled:m=!1,activeButton:F=!1,activeIcon:ho,loading:w=!1,onButtonClick:S,onIconClick:I,menuProps:e,portal:po}=r,[go,k]=s.useState(!1),[v,$o]=s.useState(null),[B,vo]=s.useState(null),h=!!(e!=null&&e.groups),y=h&&go,yo=y||F,ko=y||!!ho,fo=(e==null?void 0:e.size)??($==="lg"?"lg":"md"),wo=!!(e!=null&&e.onMenuItemClick),xo=s.useMemo(()=>({modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}},{name:"offset",options:{offset:[0,4]}}],placement:"bottom-start",strategy:"fixed"}),[]),{styles:zo,attributes:So}=_o(v,B,xo),Io=s.useCallback(d=>{if($o(d),typeof l=="function"){l(d);return}l&&(l.current=d)},[l]),Bo=s.useCallback(()=>{h&&k(d=>!d),I==null||I()},[h,I]),Co=s.useCallback(()=>{if(h){k(!0);return}S==null||S()},[h,S]),Vo=s.useCallback(()=>{var d;e!=null&&e.multi||k(!1),(d=e==null?void 0:e.onClickMenu)==null||d.call(e)},[e]),jo=s.useCallback(d=>{var C;if(e!=null&&e.onMenuItemClick){const V=d[d.length-1],R=e.groups.flatMap(N=>N.items).find(N=>N.value===V);R&&(e.onMenuItemClick(R),k(!1));return}(C=e==null?void 0:e.onChangeSelected)==null||C.call(e,d)},[e]);return s.useEffect(()=>{if(!y)return;const d=C=>{const V=C.target;v&&!v.contains(V)&&B&&!B.contains(V)&&k(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[y,B,v]),s.useEffect(()=>{(m||w||!h)&&k(!1)},[m,h,w]),a.jsxs(a.Fragment,{children:[a.jsxs(No,{ref:Io,className:u,role:"group","aria-label":`${b} split button`,children:[a.jsx(Ho,{icon:f,label:b,size:$,variant:z,disabled:m||w,activeButton:yo,loading:w,onButtonClick:Co,"aria-label":`${b} main action`,"aria-haspopup":h?"menu":void 0,"aria-expanded":h?y:void 0}),a.jsx(Ko,{size:$,variant:z,disabled:m||w,activeIcon:ko,onIconClick:Bo,"aria-label":"Toggle dropdown","aria-expanded":y})]}),y&&e&&a.jsx(qo,{portal:po,children:a.jsx(To,{ref:vo,style:{...zo.popper,width:v==null?void 0:v.offsetWidth,zIndex:9999},...So.popper,children:a.jsx(Mo,{...e,size:fo,selectedValues:wo?[]:e.selectedValues,focusSearchInput:e.focusSearchInput??!1,onChangeSelected:jo,onClickMenu:Vo})})})]})});x.displayName="FISSplitButton";try{x.displayName="FISSplitButton",x.__docgenInfo={description:"",displayName:"FISSplitButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-white"'},{value:'"secondary-white"'}]}},activeButton:{defaultValue:null,description:"",name:"activeButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}},activeIcon:{defaultValue:null,description:"",name:"activeIcon",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}},menuProps:{defaultValue:null,description:"",name:"menuProps",required:!1,type:{name:"SplitButtonMenuProps"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"boolean"}}}}}catch{}const St={title:"Components/Button & Link/SplitButton",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"SplitButton là một component kết hợp giữa button chính và một button phụ để mở dropdown menu. Component này thường được sử dụng khi cần hiển thị một hành động chính và một số hành động phụ liên quan."}}},argTypes:{label:{control:"text",description:"Nội dung text hiển thị trên button chính.",table:{type:{summary:"string"},defaultValue:{summary:"Create"}}},size:{control:"radio",options:["xs","sm","md","lg"],description:"Kích thước của button. xs: nhỏ nhất, sm: nhỏ, md: vừa, lg: lớn.",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}}},icon:{control:"object",description:"Icon hiển thị bên cạnh text trên button chính."},variant:{control:"radio",options:["primary","secondary","tertiary","primary-white","secondary-white"],description:"Kiểu hiển thị của button. primary: màu chính, secondary: màu phụ, tertiary: màu thứ ba, primary-white: màu chính nền trắng, secondary-white: màu phụ nền trắng.",table:{type:{summary:"primary | secondary | tertiary | primary-white | secondary-white"},defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Vô hiệu hóa toàn bộ button, không cho phép tương tác.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeButton:{control:"boolean",description:"Trạng thái active của button chính, thường được sử dụng khi button đang được chọn hoặc đang thực hiện một hành động.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeIcon:{control:"boolean",description:"Trạng thái active của button dropdown, thường được sử dụng khi menu dropdown đang mở.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Hiển thị trạng thái loading trên button, thường được sử dụng khi đang thực hiện một hành động bất đồng bộ.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onButtonClick:{description:"Hàm callback được gọi khi người dùng click vào button chính.",action:"clicked"},onIconClick:{description:"Hàm callback được gọi khi người dùng click vào button dropdown để mở/đóng menu.",action:"toggled"},menuProps:{control:"object",description:"Cấu hình truyền xuống FISMenuSelect để hiển thị dropdown menu."}}},g={label:"Create",icon:a.jsx(Fo,{}),size:"md",variant:"primary",disabled:!1,active:!1,activeIcon:!1,loading:!1},j={args:g,parameters:{docs:{description:{story:"SplitButton mặc định với kích thước vừa (md) và màu chính (primary)."}}}},_={args:{...g,size:"sm",label:"Add",icon:a.jsx(Do,{})},parameters:{docs:{description:{story:"SplitButton với kích thước nhỏ (sm), phù hợp cho các không gian hạn chế."}}}},q={args:{...g,size:"lg",label:"Submit"},parameters:{docs:{description:{story:"SplitButton với kích thước lớn (lg), nổi bật và dễ nhìn thấy."}}}},M={args:{...g,variant:"secondary",label:"Cancel"},parameters:{docs:{description:{story:"SplitButton với màu phụ (secondary), thường được sử dụng cho các hành động thứ yếu."}}}},L={args:{...g,disabled:!0,label:"Disabled"},parameters:{docs:{description:{story:"SplitButton ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},A={args:{...g,loading:!0,label:"Loading"},parameters:{docs:{description:{story:"SplitButton ở trạng thái loading, hiển thị khi đang thực hiện một hành động."}}}},D={args:{...g,activeButton:!0,activeIcon:!0,label:"Active"},parameters:{docs:{description:{story:"SplitButton ở trạng thái active, với cả button chính và dropdown đều được kích hoạt."}}}},Go=[{items:[{label:"Tải tệp word",value:"word"},{label:"Tải tệp PDF",value:"pdf"},{label:"Tải tệp HTML",value:"html"}]}],Xo=r=>{const l=u=>{console.log("Download format:",u.value)};return a.jsx(x,{...r,menuProps:{groups:Go,onMenuItemClick:l}})},E={args:{...g,label:"Tải kết quả",icon:a.jsx(Eo,{}),size:"lg"},render:r=>a.jsx(Xo,{...r}),parameters:{docs:{description:{story:"SplitButton có dropdown menu sử dụng FISMenuSelect để hiển thị danh sách hành động phụ."}}}};var W,H,K;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: "SplitButton mặc định với kích thước vừa (md) và màu chính (primary)."
      }
    }
  }
}`,...(K=(H=j.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,X,J;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(X=_.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,U,Y;q.parameters={...q.parameters,docs:{...(Q=q.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(U=q.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,P,oo;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(oo=(P=M.parameters)==null?void 0:P.docs)==null?void 0:oo.source}}};var to,ro,eo;L.parameters={...L.parameters,docs:{...(to=L.parameters)==null?void 0:to.docs,source:{originalSource:`{
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
}`,...(eo=(ro=L.parameters)==null?void 0:ro.docs)==null?void 0:eo.source}}};var no,co,io;A.parameters={...A.parameters,docs:{...(no=A.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(io=(co=A.parameters)==null?void 0:co.docs)==null?void 0:io.source}}};var ao,so,lo;D.parameters={...D.parameters,docs:{...(ao=D.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(lo=(so=D.parameters)==null?void 0:so.docs)==null?void 0:lo.source}}};var uo,bo,mo;E.parameters={...E.parameters,docs:{...(uo=E.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: "Tải kết quả",
    icon: <DownloadIcon />,
    size: "lg"
  },
  render: args => <SplitButtonWithMenu {...args} />,
  parameters: {
    docs: {
      description: {
        story: "SplitButton có dropdown menu sử dụng FISMenuSelect để hiển thị danh sách hành động phụ."
      }
    }
  }
}`,...(mo=(bo=E.parameters)==null?void 0:bo.docs)==null?void 0:mo.source}}};const It=["Default","Small","Large","Secondary","Disabled","Loading","Active","WithMenu"];export{D as Active,j as Default,L as Disabled,q as Large,A as Loading,M as Secondary,_ as Small,E as WithMenu,It as __namedExportsOrder,St as default};
