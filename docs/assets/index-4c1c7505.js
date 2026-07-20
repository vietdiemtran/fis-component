import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as p}from"./index-981f9478.js";import{c as g}from"./index-f7beeda4.js";import{e as I,f as j}from"./InfoSolidIcon-78d566e9.js";import{C as X}from"./index-b8aa03b0.js";import{a as d,g as e,r as c}from"./getTheme-9564f801.js";import{F as q}from"./index-6b29b51e.js";import{F as N}from"./index-b0c2e733.js";const V=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${e("com/menu/item/vertical-gap")};
  min-width: 0;
`,i=d.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${o=>{switch(o.$size){case"md":return c`
          width: ${e("com/menu/item/size-md/icon/size-icon")};
          height: ${e("com/menu/item/size-md/icon/size-icon")};
        `;case"lg":return c`
          width: ${e("com/menu/item/size-md/icon/size-icon")};
          height: ${e("com/menu/item/size-md/icon/size-icon")};
        `}}}

  ${o=>{switch(o.$type){case"action":return c`
          color: ${e("com/menu/item/action/icon/color-icon/default")};

          &.negative {
            color: ${e("com/menu/item/action-negative/icon/color-icon/default")};
          }
        `;case"leveling":return c`
          color: ${e("com/menu/item/leveling/icon/color-icon/default")};

          ${o.$selected&&c`
            color: ${e("com/menu/item/leveling/icon/color-icon/selected")};
          `}
        `;case"select":case"checkbox":return c`
          color: ${e("com/menu/item/select-able/icon/color-icon/default")};

          ${o.$selected&&c`
            color: ${e("com/menu/item/select-able/icon/color-icon/selected")};
          `}
        `}}}

   ${o=>o.$disable&&c`
      color: ${e("com/menu/item/disable/icon/color-icon")};
    `}
`,l=d.p`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  ${o=>{switch(o.$type){case"action":return c`
          ${e("Paragraph/Sm")}
          color: ${e("com/menu/item/action/label/color-text/default")};

          &.negative {
            ${e("Paragraph/Sm")}
            color: ${e("com/menu/item/action-negative/label/color-text/default")};
          }
        `;case"leveling":return c`
          ${e("Paragraph/Sm")}
          color: ${e("com/menu/item/leveling/label/color-text/default")};

          ${o.$selected&&c`
            ${e("Label/Sm")}
            color: ${e("com/menu/item/leveling/label/color-text/selected")};
          `}
        `;case"select":case"checkbox":return c`
          ${e("Paragraph/Sm")}
          color: ${e("com/menu/item/select-able/label/color-text/default")};

          ${o.$selected&&c`
            ${e("Label/Sm")}
            color: ${e("com/menu/item/select-able/label/color-text/selected")};
          `}

          &.negative {
            ${e("Paragraph/Sm")}
            color: ${e("com/menu/item/action-negative/label/color-text/default")};
          }
        `}}}

  ${o=>o.$disable&&c`
      ${e("Paragraph/Sm")}
      color: ${e("com/menu/item/disable/label/color-text")};
    `}
`,r=d.p`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  ${o=>{switch(o.$type){case"action":return c`
          ${e("Paragraph/XS")}
          color: ${e("com/menu/item/action/description/color-text/default")};

          &.negative {
            ${e("Paragraph/XS")}
            color: ${e("com/menu/item/action-negative/description/color-text/default")};
          }
        `;case"leveling":return c`
          ${e("Paragraph/XS")}
          color: ${e("com/menu/item/leveling/description/color-text/default")};

          ${o.$selected&&c`
            ${e("Paragraph/XS")}
            color: ${e("com/menu/item/leveling/description/color-text/selected")};
          `}
        `;case"select":case"checkbox":return c`
          ${e("Paragraph/XS")}
          color: ${e("com/menu/item/select-able/description/color-text/default")};

          ${o.$selected&&c`
            ${e("Paragraph/XS")}
            color: ${e("com/menu/item/select-able/description/color-text/selected")};
          `}
        `}}}

  ${o=>o.$disable&&c`
      ${e("Paragraph/XS")}
      color: ${e("com/menu/item/disable/description/color-text")};
  `}
`,C=d.div`
  transition: opacity 0.2s;
  display: none;
  height: 20px;

  ${o=>o.$selected&&c`
      display: block;
      color: ${e("com/menu/item/select-able/icon/color-icon/selected")};
    `}
`,L=d.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  box-sizing: border-box;
  gap: ${e("com/menu/item/horizontal-gap")};
  border-radius: ${e("com/menu/item/corner-radius")};
  /* min-width: ${e("com/menu/item/min-width")}; */

  ${o=>{switch(o.$size){case"md":return c`
          padding-top: ${e("com/menu/item/size-md/vertical-padding")};
          padding-right: ${e("com/menu/item/size-md/horizontal-padding")};
          padding-bottom: ${e("com/menu/item/size-md/vertical-padding")};
          padding-left: ${e("com/menu/item/size-md/horizontal-padding")};
          min-height: ${e("com/menu/item/size-md/min-height")};
        `;case"lg":return c`
          padding-top: ${e("com/menu/item/size-lg/vertical-padding")};
          padding-right: ${e("com/menu/item/size-lg/horizontal-padding")};
          padding-bottom: ${e("com/menu/item/size-lg/vertical-padding")};
          padding-left: ${e("com/menu/item/size-lg/horizontal-padding")};
          min-height: ${e("com/menu/item/size-lg/min-height")};
        `}}}

  ${o=>{switch(o.$type){case"action":return c`
          background-color: ${e("com/menu/item/action/background-color/default")};

          &:hover {
            background-color: ${e("com/menu/item/action/background-color/hover")};

            ${i} {
              color: ${e("com/menu/item/action/icon/color-icon/hover")};
            }

            ${l} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/action/label/color-text/hover")};
            }

            ${r} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/action/description/color-text/hover")};
            }
          }

          ${o.$hovered&&c`
            background-color: ${e("com/menu/item/action/background-color/hover")};

            ${i} {
              color: ${e("com/menu/item/action/icon/color-icon/hover")};
            }

            ${l} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/action/label/color-text/hover")};
            }

            ${r} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/action/description/color-text/hover")};
            }
          `}

          &.negative {
            background-color: ${e("com/menu/item/action-negative/background-color/default")};

            &:hover {
              background-color: ${e("com/menu/item/action-negative/background-color/hover")};

              ${i} {
                color: ${e("com/menu/item/action-negative/icon/color-icon/hover")};
              }

              ${l} {
                ${e("Label/Sm")}
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }

              ${r} {
                ${e("Paragraph/XS")}
                color: ${e("com/menu/item/action-negative/description/color-text/hover")};
              }
            }

            ${o.$hovered&&c`
              background-color: ${e("com/menu/item/action-negative/background-color/hover")};

              ${i} {
                color: ${e("com/menu/item/action-negative/icon/color-icon/hover")};
              }

              ${l} {
                ${e("Label/Sm")}
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }

              ${r} {
                ${e("Paragraph/XS")}
                color: ${e("com/menu/item/action-negative/description/color-text/hover")};
              }
            `}
          }
        `;case"leveling":return c`
          background-color: ${e("com/menu/item/leveling/background-color/default")};     

          &:hover {
            background-color: ${e("com/menu/item/leveling/background-color/hover")};

            ${i} {
              color: ${e("com/menu/item/leveling/icon/color-icon/hover")};
            }

            ${l} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/leveling/label/color-text/hover")};
            }

            ${r} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/leveling/description/color-text/hover")};
            }
          }

          ${o.$hovered&&c`
            background-color: ${e("com/menu/item/leveling/background-color/hover")} !important;

            ${i} {
              color: ${e("com/menu/item/leveling/icon/color-icon/hover")};
            }

            ${l} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/leveling/label/color-text/hover")};
            }

            ${r} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/leveling/description/color-text/hover")};
            }
          `}
        `;case"select":case"checkbox":return c`
          background-color: ${e("com/menu/item/select-able/background-color/default")};

          &:hover {
            background-color: ${e("com/menu/item/select-able/background-color/hover")};

            ${i} {
              color: ${e("com/menu/item/select-able/icon/color-icon/hover")};
            }

            ${l} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/select-able/label/color-text/hover")};

              &.negative {
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }
            }

            ${r} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/select-able/description/color-text/hover")};
            }
          }

          ${o.$hovered&&c`
            background-color: ${e("com/menu/item/select-able/background-color/hover")};

            ${i} {
              color: ${e("com/menu/item/select-able/icon/color-icon/hover")};
            }

            ${l} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/select-able/label/color-text/hover")};

              &.negative {
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }
            }

            ${r} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/select-able/description/color-text/hover")};
            }
          `}
        `}}}

  ${o=>o.$selected&&c`
      background-color: ${e("com/menu/item/leveling/background-color/selected")};
    `}
  ${o=>o.$disable&&c`
      cursor: not-allowed;
      background-color: ${e("com/menu/item/disable/background/background-color")};
    `}
`,F=d.div`
  color: ${e("com/menu/item/leveling/icon/color-icon/default")};

  &:hover {
    color: ${e("com/menu/item/leveling/icon/color-icon/hover")};
  }

  ${o=>o.$selected&&c`
      color: ${e("com/menu/item/leveling/icon/color-icon/selected")};
    `}

  ${o=>o.$disable&&c`
      color: ${e("com/menu/item/disable/icon/color-icon")};
    `}
`,b=({title:o,description:f,iconPrefix:x,className:y,type:a="action",size:S="md",selected:n=!1,hovered:u=!1,negative:$=!1,disable:m,shortcut:k="⌘ K",onClickMenu:h})=>{const v=p.useRef(null),[z,P]=p.useState(!1);p.useEffect(()=>{const s=v.current;s&&P(s.scrollWidth>s.clientWidth)},[o]);const w=()=>{switch(a){case"action":return k?t.jsx(q,{size:"sm",label:k,color:"neutral-light",disabled:m,rounded:!1}):null;case"leveling":return t.jsx(F,{$selected:n,$hovered:u,$disable:m,children:t.jsx(j,{})});case"select":return t.jsx(C,{$selected:n,children:t.jsx(I,{})});case"checkbox":return null;default:return null}};return t.jsxs(L,{className:g(y,{negative:$}),$size:S,$selected:n,$hovered:u,$type:a,$disable:m,onClick:h,children:[x&&a!=="checkbox"&&t.jsx(i,{className:g({negative:$}),$size:S,$type:a,$selected:n,$hovered:u,$disable:m,children:x}),a==="checkbox"&&t.jsx(X,{checked:n,disabled:m,readOnly:!0,size:"sm",variant:"primary",containerStyle:{margin:4},onClick:s=>s.stopPropagation(),onChange:s=>{s.stopPropagation(),h==null||h()}}),t.jsxs(V,{children:[o&&(z?t.jsx(N,{title:o,variant:"primary",smartPlacement:!0,children:t.jsx(l,{ref:v,className:g({negative:$}),$selected:n,$hovered:u,$type:a,$disable:m,children:o})}):t.jsx(l,{ref:v,className:g({negative:$}),$selected:n,$hovered:u,$type:a,$disable:m,children:o})),f&&t.jsx(r,{className:g({negative:$}),$type:a,$selected:n,$hovered:u,$disable:m,children:f})]}),w()]})};b.displayName="FISMenuItem";try{b.displayName="FISMenuItem",b.__docgenInfo={description:"",displayName:"FISMenuItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},iconPrefix:{defaultValue:null,description:"",name:"iconPrefix",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"action"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"checkbox"'},{value:'"action"'},{value:'"leveling"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:{value:"false"},description:"",name:"hovered",required:!1,type:{name:"boolean"}},negative:{defaultValue:{value:"false"},description:"",name:"negative",required:!1,type:{name:"boolean"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},shortcut:{defaultValue:{value:"⌘ K"},description:"",name:"shortcut",required:!1,type:{name:"string"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}}}}}catch{}export{b as F};
