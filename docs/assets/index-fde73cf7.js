import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as h}from"./index-981f9478.js";import{c as s}from"./index-f7beeda4.js";import{d as k,L as w}from"./LineArrowsUp-2da65544.js";import{d as n,g as e,l as c}from"./getTheme-6566e1e9.js";import{F as P}from"./index-db4650f3.js";import{F as I}from"./index-825e8a07.js";const j=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${e("com/menu/item/vertical-gap")};
  min-width: 0;
`,d=n.div`
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
        `;case"select":return c`
          color: ${e("com/menu/item/select-able/icon/color-icon/default")};

          ${o.$selected&&c`
            color: ${e("com/menu/item/select-able/icon/color-icon/selected")};
          `}
        `}}}

   ${o=>o.$disable&&c`
      color: ${e("com/menu/item/disable/icon/color-icon")};
    `}
`,r=n.p`
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
        `;case"select":return c`
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
`,u=n.p`
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
        `;case"select":return c`
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
`,C=n.div`
  transition: opacity 0.2s;
  display: none;
  height: 20px;

  ${o=>o.$selected&&c`
      display: block;
      color: ${e("com/menu/item/select-able/icon/color-icon/selected")};
    `}
`,N=n.div`
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

            ${d} {
              color: ${e("com/menu/item/action/icon/color-icon/hover")};
            }

            ${r} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/action/label/color-text/hover")};
            }

            ${u} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/action/description/color-text/hover")};
            }
          }

          &.negative {
            background-color: ${e("com/menu/item/action-negative/background-color/default")};

            &:hover {
              background-color: ${e("com/menu/item/action-negative/background-color/hover")};

              ${d} {
                color: ${e("com/menu/item/action-negative/icon/color-icon/hover")};
              }

              ${r} {
                ${e("Label/Sm")}
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }

              ${u} {
                ${e("Paragraph/XS")}
                color: ${e("com/menu/item/action-negative/description/color-text/hover")};
              }
            }
          }
        `;case"leveling":return c`
          background-color: ${e("com/menu/item/leveling/background-color/default")};

          &:hover {
            background-color: ${e("com/menu/item/leveling/background-color/hover")};

            ${d} {
              color: ${e("com/menu/item/leveling/icon/color-icon/hover")};
            }

            ${r} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/leveling/label/color-text/hover")};
            }

            ${u} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/leveling/description/color-text/hover")};
            }
          }
        `;case"select":return c`
          background-color: ${e("com/menu/item/select-able/background-color/default")};

          &:hover {
            background-color: ${e("com/menu/item/select-able/background-color/hover")};

            ${d} {
              color: ${e("com/menu/item/select-able/icon/color-icon/hover")};
            }

            ${r} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/select-able/label/color-text/hover")};

              &.negative {
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }
            }

            ${u} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/select-able/description/color-text/hover")};
            }
          }
        `}}}

  ${o=>o.$selected&&c`
      background-color: ${e("com/menu/item/leveling/background-color/selected")};
    `}
  ${o=>o.$disable&&c`
      cursor: not-allowed;
      background-color: ${e("com/menu/item/disable/background/background-color")};
    `}
`,X=n.div`
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
`,$=({title:o,description:v,iconPrefix:f,type:a="action",size:b="md",selected:i=!1,negative:m=!1,disable:l,onClickMenu:x})=>{const g=h.useRef(null),[S,z]=h.useState(!1);h.useEffect(()=>{const p=g.current;p&&z(p.scrollWidth>p.clientWidth)},[o]);const y=()=>{switch(a){case"action":return t.jsx(P,{size:"sm",label:"New",color:"neutral-light",disabled:l});case"leveling":return t.jsx(X,{$selected:i,$disable:l,children:t.jsx(w,{})});case"select":return t.jsx(C,{$selected:i,children:t.jsx(k,{})});default:return null}};return t.jsxs(N,{className:s({negative:m}),$size:b,$selected:i,$type:a,$disable:l,onClick:x,children:[f&&t.jsx(d,{className:s({negative:m}),$size:b,$type:a,$selected:i,$disable:l,children:f}),t.jsxs(j,{children:[o&&(S?t.jsx(I,{title:o,variant:"primary",smartPlacement:!0,children:t.jsx(r,{ref:g,className:s({negative:m}),$selected:i,$type:a,$disable:l,children:o})}):t.jsx(r,{ref:g,className:s({negative:m}),$selected:i,$type:a,$disable:l,children:o})),v&&t.jsx(u,{className:s({negative:m}),$type:a,$selected:i,$disable:l,children:v})]}),y()]})};$.displayName="FISMenuItem";const T=$;try{$.displayName="FISMenuItem",$.__docgenInfo={description:"",displayName:"FISMenuItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},iconPrefix:{defaultValue:null,description:"",name:"iconPrefix",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"action"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"action"'},{value:'"leveling"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},negative:{defaultValue:{value:"false"},description:"",name:"negative",required:!1,type:{name:"boolean"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}}}}}catch{}export{T as M};
