import{j as t}from"./jsx-runtime-47c18db8.js";import{d as m,g as o,l as c,n as v}from"./getTheme-21dde6f8.js";import{T as g}from"./index-d01a95be.js";import{B as x}from"./roundedArrow-65672d62.js";function y(e){return typeof e=="object"&&e!==null&&"label"in e}const p=m.div`
  display: flex;
  flex-direction: column;
`,k=m.div`
  display: flex;
  flex-direction: column;
  gap: ${o("sem/dimension/gap/xs")};
`,r=m.div`
  white-space: normal;
`,a=m.div`
  white-space: normal;
`,n=m.a``,f=m.div`
  ${({$size:e,$variant:i})=>{switch(e){case"md":return c`
          .ant-tooltip {
            .ant-tooltip-inner {
              border-radius: ${o("com/tooltip/size-md/corner-radius")};
              padding: ${o("com/tooltip/size-md/vertical-padding")}
                ${o("com/tooltip/size-md/horizontal-padding")};
            }
          }
          ${p} {
            gap: ${o("sem/dimension/gap/xs")};

            ${r} {
              ${o("Label/XS")}
            }

            ${n} {
              ${o("Label/Sm")}
            }

            ${a} {
              ${o("Paragraph/XS")}
            }

            ${()=>i==="primary"?c`
                  ${r} {
                    color: ${o("com/tooltip/size-md/theme-black/label/color-text")};
                  }

                  ${n} {
                    color: ${o("com/link/invert/label-color/default")};
                    text-decoration: underline;
                  }

                  ${a} {
                    color: ${o("com/tooltip/size-md/theme-black/label/color-text")};
                  }
                `:c`
                  ${r} {
                    color: ${o("com/tooltip/size-md/theme-white/label/color-text")};
                  }

                  ${n} {
                    color: ${o("com/link/primary/label-color/default")};
                    text-decoration: none;
                  }

                  ${a} {
                    color: ${o("com/tooltip/size-lg/theme-white/description/color-text")};
                  }
                `}
          }
        `;case"lg":return c`
          .ant-tooltip {
            .ant-tooltip-inner {
              border-radius: ${o("com/tooltip/size-lg/corner-radius")};
              padding: ${o("com/tooltip/size-lg/vertical-padding")}
                ${o("com/tooltip/size-lg/horizontal-padding")};
            }
          }
          ${p} {
            gap: ${o("com/tooltip/size-lg/vertical-gap")};

            ${r} {
              ${o("Label/Sm")}
            }

            ${n} {
              ${o("Label/Sm")}
            }

            ${a} {
              ${o("Paragraph/XS")}
            }

            ${()=>i==="primary"?c`
                  ${r} {
                    color: ${o("com/tooltip/size-md/theme-black/label/color-text")};
                  }

                  ${n} {
                    color: ${o("com/link/invert/label-color/default")};
                    text-decoration: underline;
                  }

                  ${a} {
                    color: ${o("com/tooltip/size-md/theme-black/label/color-text")};
                  }
                `:c`
                  ${r} {
                    color: ${o("com/tooltip/size-md/theme-white/label/color-text")};
                  }

                  ${n} {
                    color: ${o("com/link/primary/label-color/default")};
                    text-decoration: none;
                  }

                  ${a} {
                    color: ${o("com/tooltip/size-lg/theme-white/description/color-text")};
                  }
                `}
          }
        `;default:return""}}}

  .ant-tooltip {
    .ant-tooltip-inner {
      box-shadow: ${o("Elevation/Level-2")};

      color: ${e=>e.$variant==="primary"?o("com/tooltip/size-md/theme-black/label/color-text"):o("com/tooltip/size-md/theme-white/label/color-text")};
    }

    .ant-tooltip-arrow-content {
      background-color: ${e=>e.$variant==="primary"?e.theme["com/tooltip/size-md/theme-black/background-color"]:e.theme["com/tooltip/size-md/theme-white/background-color"]};
    }
  }
`,u=({className:e,variant:i="primary",size:h="md",title:l,children:$,...b})=>{const d=v();if(y(l)){const s=t.jsxs(p,{children:[t.jsxs(k,{children:[t.jsx(r,{children:l.label}),l.description&&t.jsx(a,{children:l.description})]}),l.link&&t.jsx(n,{href:l.linkUrl,target:"_blank",rel:"noopener noreferrer",children:l.link})]});return t.jsx(f,{className:e,$size:h,$variant:i,children:t.jsx(g,{color:i==="primary"?d["com/tooltip/size-md/theme-black/background-color"]:d["com/tooltip/size-md/theme-white/background-color"],title:s,getTooltipContainer:z=>z,...b,children:$||t.jsx(x,{children:"RT"})})})}return t.jsx(f,{className:e,$size:h,$variant:i,children:t.jsx(g,{color:i==="primary"?d["com/tooltip/size-md/theme-black/background-color"]:d["com/tooltip/size-md/theme-white/background-color"],title:l,getTooltipContainer:s=>s,...b,children:$||t.jsx(x,{children:"RT"})})})};u.displayName="FISTooltip";try{u.displayName="FISTooltip",u.__docgenInfo={description:"",displayName:"FISTooltip",props:{className:{defaultValue:null,description:"Additional class names to apply to the tooltip",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"The color of the tooltip",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},title:{defaultValue:null,description:"The tooltip title, which can be a custom object or a React node",name:"title",required:!0,type:{name:"ReactNode | TooltipTitleCustom"}},size:{defaultValue:{value:"md"},description:"The size of the tooltip (optional)",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},children:{defaultValue:null,description:"Child elements that the tooltip wraps (optional)",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{u as F};
