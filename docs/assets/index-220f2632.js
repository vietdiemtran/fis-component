import{j as t}from"./jsx-runtime-3dc6859f.js";import{d as u,g as e,l as p,n as j}from"./getTheme-1aacf7d7.js";import{r as f}from"./index-d4014758.js";import{T as k}from"./index-1625a42e.js";import{B as T}from"./button-ae057576.js";function C(o){return typeof o=="object"&&o!==null&&"label"in o}const x=u.div`
  display: flex;
  flex-direction: column;
`,L=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e("sem/dimension/gap/xs")};
`,c=u.div`
  white-space: normal;
`,s=u.div`
  white-space: normal;
`,m=u.a``,S=u.div`
  ${({$size:o,$variant:l})=>{switch(o){case"md":return p`
          .ant-tooltip {
            .ant-tooltip-inner {
              border-radius: ${e("com/tooltip/size-md/corner-radius")};
              padding: ${e("com/tooltip/size-md/vertical-padding")}
                ${e("com/tooltip/size-md/horizontal-padding")};
            }
          }
          ${x} {
            gap: ${e("com/tooltip/size-md/vertical-gap")};

            ${c} {
              ${e("Label/XS")}
            }

            ${m} {
              ${e("Label/Sm")}
            }

            ${s} {
              ${e("Paragraph/XS")}
            }

            ${()=>l==="primary"?p`
                  ${c} {
                    color: ${e("com/tooltip/size-md/theme-black/label/color-text")};
                  }

                  ${m} {
                    color: ${e("com/link/invert/label-color/default")};
                    text-decoration: underline;
                  }

                  ${s} {
                    color: ${e("com/tooltip/size-md/theme-black/label/color-text")};
                  }
                `:p`
                  ${c} {
                    color: ${e("com/tooltip/size-md/theme-white/label/color-text")};
                  }

                  ${m} {
                    color: ${e("com/link/primary/label-color/default")};
                    text-decoration: none;
                  }

                  ${s} {
                    color: ${e("com/tooltip/size-lg/theme-white/description/color-text")};
                  }
                `}
          }
        `;case"lg":return p`
          .ant-tooltip {
            .ant-tooltip-inner {
              border-radius: ${e("com/tooltip/size-lg/corner-radius")};
              padding: ${e("com/tooltip/size-lg/vertical-padding")}
                ${e("com/tooltip/size-lg/horizontal-padding")};
            }
          }
          ${x} {
            gap: ${e("com/tooltip/size-lg/vertical-gap")};

            ${c} {
              ${e("Label/Sm")}
            }

            ${m} {
              ${e("Label/Sm")}
            }

            ${s} {
              ${e("Paragraph/XS")}
            }

            ${()=>l==="primary"?p`
                  ${c} {
                    color: ${e("com/tooltip/size-md/theme-black/label/color-text")};
                  }

                  ${m} {
                    color: ${e("com/link/invert/label-color/default")};
                    text-decoration: underline;
                  }

                  ${s} {
                    color: ${e("com/tooltip/size-md/theme-black/label/color-text")};
                  }
                `:p`
                  ${c} {
                    color: ${e("com/tooltip/size-md/theme-white/label/color-text")};
                  }

                  ${m} {
                    color: ${e("com/link/primary/label-color/default")};
                    text-decoration: none;
                  }

                  ${s} {
                    color: ${e("com/tooltip/size-lg/theme-white/description/color-text")};
                  }
                `}
          }
        `;default:return""}}}

  .ant-tooltip {
    .ant-tooltip-inner {
      box-shadow: ${e("Elevation/Level-2")};

      color: ${o=>o.$variant==="primary"?e("com/tooltip/size-md/theme-black/label/color-text"):e("com/tooltip/size-md/theme-white/label/color-text")};
    }

    .ant-tooltip-arrow-content {
      background-color: ${o=>o.$variant==="primary"?o.theme["com/tooltip/size-md/theme-black/background-color"]:o.theme["com/tooltip/size-md/theme-white/background-color"]};
    }
  }
`,R=()=>{const[o,l]=f.useState("right"),$=f.useCallback(i=>{if(!i)return;const h=i.getBoundingClientRect(),r=window.innerWidth,d=h.left,a=r-h.right;a>d?l("right"):d>a?l("left"):l("right")},[]);return{placement:o,calculatePlacement:$}},v=({className:o,variant:l="primary",size:$="md",title:i,children:h,smartPlacement:r=!1,...d})=>{const a=j(),b=f.useRef(null),{placement:w,calculatePlacement:g}=R();f.useEffect(()=>{if(!r)return;const n=b.current;if(!n)return;const y=()=>g(n);return n.addEventListener("mouseenter",y),g(n),()=>{n.removeEventListener("mouseenter",y)}},[r,g]);const z=r?w:d.placement||"right";if(C(i)){const n=t.jsxs(x,{children:[t.jsxs(L,{children:[t.jsx(c,{children:i.label}),i.description&&t.jsx(s,{children:i.description})]}),i.link&&t.jsx(m,{href:i.linkUrl,target:"_blank",rel:"noopener noreferrer",children:i.link})]});return t.jsx(S,{className:o,$size:$,$variant:l,children:t.jsx("span",{ref:r?b:void 0,children:t.jsx(k,{color:l==="primary"?a["com/tooltip/size-md/theme-black/background-color"]:a["com/tooltip/size-md/theme-white/background-color"],title:n,getTooltipContainer:()=>document.body,placement:z,...d,children:h||t.jsx(T,{children:"RT"})})})})}return t.jsx(S,{className:o,$size:$,$variant:l,children:t.jsx("span",{ref:r?b:void 0,children:t.jsx(k,{color:l==="primary"?a["com/tooltip/size-md/theme-black/background-color"]:a["com/tooltip/size-md/theme-white/background-color"],title:i,getTooltipContainer:()=>document.body,placement:z,...d,children:h||t.jsx(T,{children:"RT"})})})})};v.displayName="FISTooltip";try{v.displayName="FISTooltip",v.__docgenInfo={description:"",displayName:"FISTooltip",props:{className:{defaultValue:null,description:"Additional class names to apply to the tooltip",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"The color of the tooltip",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},title:{defaultValue:null,description:"The tooltip title, which can be a custom object or a React node",name:"title",required:!0,type:{name:"ReactNode | TooltipTitleCustom"}},size:{defaultValue:{value:"md"},description:"The size of the tooltip (optional)",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},children:{defaultValue:null,description:"Child elements that the tooltip wraps (optional)",name:"children",required:!1,type:{name:"ReactNode"}},smartPlacement:{defaultValue:{value:"false"},description:"Enable smart placement (auto left/right)",name:"smartPlacement",required:!1,type:{name:"boolean"}}}}}catch{}export{v as F};
