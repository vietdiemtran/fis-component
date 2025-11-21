import{j as l}from"./jsx-runtime-47c18db8.js";import{d as a,g as o,l as n}from"./getTheme-624682de.js";import{r as v}from"./index-d806aa85.js";const h=a.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;

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

  ${e=>e.$singleLine&&n`
      .button-content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
`,r=a.span`
  display: inline-flex;
  align-items: center;
`,i=v.forwardRef((e,s)=>{const{children:d,size:u="sm",variant:m="default",underline:b,startIcon:t,endIcon:c,singleLine:p=!1,...f}=e,$=t&&l.jsx(r,{className:"button-icon",children:t}),k=c&&l.jsx(r,{className:"button-icon",children:c});return l.jsxs(h,{...f,ref:s,$variant:m,$size:u,$underline:b,$singleLine:p,children:[$,l.jsx("span",{className:"button-content",children:d}),k]})});i.displayName="FISLinkButton";try{i.displayName="FISLinkButton",i.__docgenInfo={description:"",displayName:"FISLinkButton",props:{variant:{defaultValue:null,description:"Change the design of button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"default"'},{value:'"hight-priority"'},{value:'"white"'}]}},size:{defaultValue:null,description:"Size md for only button icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'}]}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},underline:{defaultValue:null,description:"Defines the type of the button.",name:"underline",required:!1,type:{name:"boolean"}},singleLine:{defaultValue:null,description:"If true, text will be truncated with ellipsis on single line",name:"singleLine",required:!1,type:{name:"boolean"}}}}}catch{}export{i as F};
