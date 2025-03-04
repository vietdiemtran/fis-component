import{j as l}from"./jsx-runtime-50395f49.js";import{d as r,l as n}from"./styled-components.browser.esm-6b0ce59b.js";import{g as o}from"./getTheme-fd88fed7.js";import{r as $}from"./index-9fa1aa67.js";const k=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-visible {
    box-shadow:
      0px 0px 0px ${o("sem/dimension/stroke-width/divider/lg")}
        ${o("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${o("com/focus-mark/color-stroke")};
    outline: none;
    border-radius: ${o("sem/dimension/radius/component/md")};
  }

  // size of the button
  ${e=>{switch(e.$size){case"xs":return n`
          gap: ${o("com/link/size-xs/horizontal-gap")};

          .button-icon {
            width: ${o("com/link/size-xs/size-icon")};
            height: ${o("com/link/size-xs/size-icon")};
          }

          ${o("Label/XS")}
        `;case"sm":return n`
          gap: ${o("com/link/size-sm/horizontal-gap")};

          .button-icon {
            width: ${o("com/link/size-sm/size-icon")};
            height: ${o("com/link/size-sm/size-icon")};
          }

          ${o("Label/Sm")}
        `}}}

  // variation
  ${e=>{switch(e.$variant){case"hight-priority":return n`
          color: ${o("com/link/primary/label-color/default")};

          .button-icon {
            color: ${o("com/link/primary/icon-color/default")};
          }

          &:hover {
            color: ${o("com/link/primary/label-color/hover")};

            .button-icon {
              color: ${o("com/link/primary/icon-color/hover")};
            }
          }

          //TODO: update later
          /* &:active {
            color: ${o("com/link/primary/label-color/default")};

            .button-icon {
              color: ${o("com/link/primary/icon-color/default")};;
            }
          }

          &:focus {
            color: ${o("com/link/primary/label-color/default")};

            .button-icon {
              color: ${o("com/link/primary/icon-color/default")};
            }
          } */

          &:disabled {
            color: ${o("com/link/disable/label-color")};

            .button-icon {
              color: ${o("com/link/disable/icon-color")};
            }
          }
        `;case"negative":return n`
          color: ${o("com/link/negative/label-color/default")};

          .button-icon {
            color: ${o("com/link/negative/icon-color/default")};
          }

          &:hover {
            color: ${o("com/link/negative/label-color/hover")};

            .button-icon {
              color: ${o("com/link/negative/icon-color/hover")};
            }
          }

          //TODO: update later
          /* &:active {
              color: ${o("com/link/negative/label-color/default")};
  
              .button-icon {
                color: ${o("com/link/negative/icon-color/default")};;
              }
            }
  
            &:focus {
              color: ${o("com/link/negative/label-color/default")};
  
              .button-icon {
                color: ${o("com/link/negative/icon-color/default")};
              }
            } */

          &:disabled {
            color: ${o("com/link/disable/label-color")};

            .button-icon {
              color: ${o("com/link/disable/icon-color")};
            }
          }
        `;case"white":return n`
          color: ${o("com/link/invert/label-color/default")};

          .button-icon {
            color: ${o("com/link/invert/icon-color/default")};
          }

          &:hover {
            color: ${o("com/link/invert/label-color/hover")};

            .button-icon {
              color: ${o("com/link/invert/icon-color/hover")};
            }
          }

          //TODO: update later
          /* &:active {
                color: ${o("com/link/invert/label-color/default")};
    
                .button-icon {
                  color: ${o("com/link/invert/icon-color/default")};;
                }
              }
    
              &:focus {
                color: ${o("com/link/invert/label-color/default")};
    
                .button-icon {
                  color: ${o("com/link/invert/icon-color/default")};
                }
              } */

          &:disabled {
            color: ${o("com/link/disable-invert/label-color")};

            .button-icon {
              color: ${o("com/link/disable-invert/icon-color")};
            }
          }
        `;default:return n`
          color: ${o("com/link/secondary/label-color/default")};

          .button-icon {
            color: ${o("com/link/secondary/icon-color/default")};
          }

          &:hover {
            color: ${o("com/link/secondary/label-color/hover")};

            .button-icon {
              color: ${o("com/link/primary/icon-color/hover")};
            }
          }

          //TODO: update later
          /* &:active {
                color: ${o("com/link/secondary/label-color/default")};
    
                .button-icon {
                  color: ${o("com/link/secondary/icon-color/default")};;
                }
              }
    
              &:focus {
                color: ${o("com/link/secondary/label-color/default")};
    
                .button-icon {
                  color: ${o("com/link/secondary/icon-color/default")};
                }
              } */

          &:disabled {
            color: ${o("com/link/disable/label-color")};

            .button-icon {
              color: ${o("com/link/disable/icon-color")};
            }
          }
        `}}}

  ${e=>e.$underline&&n`
      text-decoration: underline;
    `}
`,i=r.span`
  display: inline-flex;
  align-items: center;
`,z=$.forwardRef((e,a)=>{const{type:v,children:s,size:u="sm",variant:d="default",underline:m,startIcon:t,endIcon:c,...b}=e,p=t&&l.jsx(i,{className:"button-icon",children:t}),f=c&&l.jsx(i,{className:"button-icon",children:c});return l.jsxs(k,{...b,ref:a,$variant:d,$size:u,$underline:m,children:[p,l.jsx("span",{className:"button-content",children:s}),f]})});try{LinkButton.displayName="LinkButton",LinkButton.__docgenInfo={description:"",displayName:"LinkButton",props:{variant:{defaultValue:null,description:"Change the design of button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"negative"'},{value:'"hight-priority"'},{value:'"white"'}]}},size:{defaultValue:null,description:"Size md for only button icon",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"xs"'}]}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},underline:{defaultValue:null,description:"Defines the type of the button.",name:"underline",required:!1,type:{name:"boolean"}}}}}catch{}export{z as F};
