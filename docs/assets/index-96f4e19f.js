import{j as i}from"./jsx-runtime-47c18db8.js";import{d as m,g as o,l as r}from"./getTheme-624682de.js";import{r as v}from"./index-d806aa85.js";import{F as $}from"./index-8298a7d1.js";const g=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-visible {
    box-shadow:
      0px 0px 0px ${o("sem/dimension/stroke-width/divider/lg")}
        ${o("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${o("com/focus-mark/color-stroke")} !important;
    outline: none;
  }

  // size of the button
  ${c=>{switch(c.$size){case"xs":return r`
          height: ${o("com/button/size-xs/height")};
          width: ${o("com/button/size-xs/height")};
          border-radius: ${o("com/button/size-xs/corner-radius")};

          svg {
            width: ${o("com/button/size-xs/icon/size-icon")};
            height: ${o("com/button/size-xs/icon/size-icon")};
          }
        `;case"sm":return r`
          height: ${o("com/button/size-sm/height")};
          width: ${o("com/button/size-sm/height")};
          border-radius: ${o("com/button/size-xs/corner-radius")};

          svg {
            width: ${o("com/button/size-sm/icon/size-icon")};
            height: ${o("com/button/size-sm/icon/size-icon")};
          }
        `;case"md":return r`
          height: ${o("com/button/size-md/height")};
          width: ${o("com/button/size-md/height")};
          border-radius: ${o("com/button/size-md/corner-radius")};

          svg {
            width: ${o("com/button/size-md/icon/size-icon")};
            height: ${o("com/button/size-md/icon/size-icon")};
          }
        `;case"lg":return r`
          height: ${o("com/button/size-lg/height")};
          width: ${o("com/button/size-lg/height")};
          border-radius: ${o("com/button/size-lg/corner-radius")};

          svg {
            width: ${o("com/button/size-lg/icon/size-icon")};
            height: ${o("com/button/size-lg/icon/size-icon")};
          }
        `}}}

  // variation
  ${c=>{switch(c.$variant){case"primary":return r`
          background-color: ${o("com/button/primary/background/default")};
          color: ${o("com/button/primary/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/primary/background/hover")};
            color: ${o("com/button/primary/icon/color-icon/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/primary/background/pressed")};
            color: ${o("com/button/primary/icon/color-icon/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/primary/background/active")};
            color: ${o("com/button/primary/icon/color-icon/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            color: ${o("com/button/disable/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable/background-color")} !important;
          `}
        `;case"secondary":return r`
          background-color: ${o("com/button/secondary/background/default")};
          color: ${o("com/button/secondary/icon/color-icon/default")};
          border: ${o("com/button/secondary/border/stroke-width/default")}
            solid ${o("com/button/secondary/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary/background/hover")};
            color: ${o("com/button/secondary/icon/color-icon/hover")};
            border: ${o("com/button/secondary/border/stroke-width/default")}
              solid ${o("com/button/secondary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            color: ${o("com/button/secondary/icon/color-icon/pressed")};
            border-color: ${o("com/button/secondary/border/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/secondary/background/active")};
            color: ${o("com/button/secondary/icon/color-icon/active")};
            border-color: ${o("com/button/secondary/border/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable/background-color")} !important;
            border-color: ${o("com/button/disable/stroke-color")} !important;
          `}
        `;case"secondary-invisible":return r`
          background-color: ${o("com/button/secondary/background/invisible")};
          color: ${o("com/button/secondary/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/secondary/background/hover")};
            color: ${o("com/button/secondary/icon/color-icon/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/secondary/background/pressed")};
            color: ${o("com/button/secondary/icon/color-icon/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/secondary/background/active")};
            color: ${o("com/button/secondary/icon/color-icon/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            color: ${o("com/button/disable/icon-color")} !important;
          }
        `;case"tertiary":return r`
          background-color: ${o("com/button/tertiary/background/default")};
          color: ${o("com/button/tertiary/icon/color-icon/default")};
          border: ${o("com/button/secondary/border/stroke-width/default")}
            solid ${o("com/button/tertiary/border/default")};

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            color: ${o("com/button/tertiary/icon/color-icon/hover")};
            border: ${o("com/button/secondary/border/stroke-width/default")}
              solid ${o("com/button/tertiary/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            color: ${o("com/button/tertiary/icon/color-icon/pressed")};
            border-color: ${o("com/button/tertiary/border/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/tertiary/background/active")};
            color: ${o("com/button/tertiary/icon/color-icon/active")};
            border-color: ${o("com/button/tertiary/border/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable/background-color")} !important;
            border-color: ${o("com/button/disable/stroke-color")} !important;
          `}
        `;case"tertiary-invisible":return r`
          background-color: ${o("com/button/tertiary/background/invisible")};
          color: ${o("com/button/tertiary/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/tertiary/background/hover")};
            color: ${o("com/button/tertiary/icon/color-icon/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/tertiary/background/pressed")};
            color: ${o("com/button/tertiary/icon/color-icon/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/tertiary/background/active")};
            color: ${o("com/button/tertiary/icon/color-icon/active")};
            outline: 3px solid ${o("com/actived-mark/color-gap-spacing")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            color: ${o("com/button/disable/icon-color")} !important;
          }
        `;case"primary-negative":return r`
          background-color: ${o("com/button/primary-negative/background/default")};
          color: ${o("com/button/primary/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/primary-negative/background/hover")};
            color: ${o("com/button/primary/icon/color-icon/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/primary-negative/background/pressed")};
            color: ${o("com/button/primary/icon/color-icon/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/primary-negative/background/active")};
            color: ${o("com/button/primary/icon/color-icon/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-negative")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color")};
            color: ${o("com/button/disable/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable/background-color")} !important;
          `}
        `;case"secondary-negative":return r`
          background-color: ${o("com/button/secondary/background/default")};
          color: ${o("com/button/secondary-negative/icon/color-icon/default")};
          border: ${o("com/button/secondary/border/stroke-width/default")}
            solid ${o("com/button/secondary-negative/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary-negative/background/hover")};
            color: ${o("com/button/secondary-negative/icon/color-icon/hover")};
            border: ${o("com/button/secondary/border/stroke-width/default")}
              solid ${o("com/button/secondary-negative/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/secondary-negative/background/pressed")};
            color: ${o("com/button/secondary-negative/icon/color-icon/pressed")};
            border-color: ${o("com/button/secondary-negative/border/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/secondary-negative/background/active")};
            color: ${o("com/button/secondary-negative/icon/color-icon/active")};
            border-color: ${o("com/button/secondary-negative/border/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-negative")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            border-color: ${o("com/button/disable/stroke-color")};
            color: ${o("com/button/disable/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable/background-color")} !important;
            border-color: ${o("com/button/disable/stroke-color")} !important;
          `}
        `;case"secondary-invisible-negative":return r`
          background-color: ${o("com/button/secondary-negative/background/invisible")};
          color: ${o("com/button/secondary-negative/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/secondary-negative/background/hover")};
            color: ${o("com/button/secondary-negative/icon/color-icon/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/secondary-negative/background/pressed")};
            color: ${o("com/button/secondary-negative/icon/color-icon/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/secondary-negative/background/active")};
            color: ${o("com/button/secondary-negative/icon/color-icon/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-negative")} !important;
          `}

          &:disabled {
            background-color: ${o("com/button/disable/background-color-transparent")};
            color: ${o("com/button/disable/icon-color")} !important;
          }
        `;case"primary-white":return r`
          background-color: ${o("com/button/primary-invert/background/default")};
          color: ${o("com/button/primary-invert/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/primary-invert/background/hover")};
            color: ${o("com/button/primary-invert/icon/color-icon/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/primary-invert/background/pressed")};
            color: ${o("com/button/primary-invert/label/color-text/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/primary-invert/background/active")};
            color: ${o("com/button/primary-invert/icon/color-icon/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/solid-background-color")};
            color: ${o("com/button/disable-invert/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable-invert/solid-background-color")} !important;
          `}
        `;case"secondary-white":return r`
          background-color: ${o("com/button/secondary-invert/background/default")};
          color: ${o("com/button/secondary-invert/icon/color-icon/default")};
          border: ${o("com/button/secondary/border/stroke-width/default")}
            solid ${o("com/button/secondary-invert/border/default")};

          &:hover {
            background-color: ${o("com/button/secondary-invert/background/hover")};
            color: ${o("com/button/secondary-invert/icon/color-icon/hover")};
            border: ${o("com/button/secondary/border/stroke-width/default")}
              solid ${o("com/button/secondary-invert/border/hover")};
            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
            border-color: ${o("com/button/secondary-invert/border/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/secondary-invert/background/active")};
            color: ${o("com/button/secondary-invert/icon/color-icon/active")};
            border-color: ${o("com/button/secondary-invert/border/active")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/background-color-transparent")};
            border-color: ${o("com/button/disable-invert/stroke-color")};
            color: ${o("com/button/disable-invert/icon-color")} !important;
          }

          ${c.$loading&&r`
            background-color: ${o("com/button/disable-invert/background-color-transparent")} !important;
            border-color: ${o("com/button/disable-invert/stroke-color")} !important;
          `}
        `;case"secondary-invisible-white":return r`
          background-color: ${o("com/button/secondary-invert/background/default")};
          color: ${o("com/button/secondary-invert/icon/color-icon/default")};

          &:hover {
            background-color: ${o("com/button/secondary-invert/background/hover")};
            color: ${o("com/button/secondary-invert/icon/color-icon/hover")};

            box-shadow: ${o("Elevation/Level-1")};
          }

          &:active {
            background-color: ${o("com/button/secondary-invert/background/pressed")};
            color: ${o("com/button/secondary-invert/icon/color-icon/pressed")};
          }

          ${c.$active&&r`
            background-color: ${o("com/button/secondary-invert/background/active")};
            color: ${o("com/button/secondary-invert/icon/color-icon/active")};
            border-width: ${o("com/button/secondary-invert/border/stroke-width/active")};
            outline: 3px solid
              ${o("com/actived-mark/color-gap-spacing-on-white")};
          `}

          &:disabled {
            background-color: ${o("com/button/disable-invert/background-color-transparent")};
            color: ${o("com/button/disable-invert/icon-color")} !important;
          }
        `;default:return r`
          background-color: white;
          color: black;
        `}}}
`,n=v.forwardRef((c,d)=>{const{children:k,active:l=!1,size:a="md",variant:t="primary",icon:b,loading:e=!1,disabled:u=!1,...s}=c;return i.jsx(g,{type:"button",...s,ref:d,$variant:t,$size:a,$active:l,$loading:e,disabled:u||e,children:e?i.jsx($,{size:a,variant:"indeterminate",invert:t==="primary-white"||t==="secondary-white"||t==="secondary-invisible-white"}):b})});n.displayName="FISIconButton";try{n.displayName="FISIconButton",n.__docgenInfo={description:"",displayName:"FISIconButton",props:{variant:{defaultValue:null,description:"Change the design of button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-negative"'},{value:'"secondary-negative"'},{value:'"primary-white"'},{value:'"secondary-white"'},{value:'"secondary-invisible"'},{value:'"tertiary-invisible"'},{value:'"secondary-invisible-negative"'},{value:'"secondary-invisible-white"'}]}},size:{defaultValue:null,description:"Size md for only button icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"Defines the icon element.",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"whether the button should be active",name:"active",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Defines if the button is currently being requested.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{n as F};
