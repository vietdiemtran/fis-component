import{j as i}from"./jsx-runtime-47c18db8.js";import{c as u}from"./index-d16835b1.js";import{f,g as x}from"./LineArrowsUp-4acd88f0.js";import{d as t,g as e,l as c}from"./getTheme-624682de.js";import{F as S}from"./index-1c88f37d.js";const z=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${e("com/menu/item/vertical-gap")};
  min-width: 0;
`,r=t.div`
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
`,m=t.p`
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
`,d=t.p`
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
`,y=t.div`
  transition: opacity 0.2s;
  display: none;
  height: 20px;

  ${o=>o.$selected&&c`
      display: block;
      color: ${e("com/menu/item/select-able/icon/color-icon/selected")};
    `}
`,k=t.div`
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

            ${r} {
              color: ${e("com/menu/item/action/icon/color-icon/hover")};
            }

            ${m} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/action/label/color-text/hover")};
            }

            ${d} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/action/description/color-text/hover")};
            }
          }

          &.negative {
            background-color: ${e("com/menu/item/action-negative/background-color/default")};

            &:hover {
              background-color: ${e("com/menu/item/action-negative/background-color/hover")};

              ${r} {
                color: ${e("com/menu/item/action-negative/icon/color-icon/hover")};
              }

              ${m} {
                ${e("Label/Sm")}
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }

              ${d} {
                ${e("Paragraph/XS")}
                color: ${e("com/menu/item/action-negative/description/color-text/hover")};
              }
            }
          }
        `;case"leveling":return c`
          background-color: ${e("com/menu/item/leveling/background-color/default")};

          &:hover {
            background-color: ${e("com/menu/item/leveling/background-color/hover")};

            ${r} {
              color: ${e("com/menu/item/leveling/icon/color-icon/hover")};
            }

            ${m} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/leveling/label/color-text/hover")};
            }

            ${d} {
              ${e("Paragraph/XS")}
              color: ${e("com/menu/item/leveling/description/color-text/hover")};
            }
          }
        `;case"select":return c`
          background-color: ${e("com/menu/item/select-able/background-color/default")};

          &:hover {
            background-color: ${e("com/menu/item/select-able/background-color/hover")};

            ${r} {
              color: ${e("com/menu/item/select-able/icon/color-icon/hover")};
            }

            ${m} {
              ${e("Label/Sm")}
              color: ${e("com/menu/item/select-able/label/color-text/hover")};

              &.negative {
                color: ${e("com/menu/item/action-negative/label/color-text/hover")};
              }
            }

            ${d} {
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
`,w=t.div`
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
`,$=({title:o,description:g,iconPrefix:p,type:a="action",size:v="md",selected:l=!1,negative:s=!1,disable:n,onClickMenu:h})=>{const b=()=>{switch(a){case"action":return i.jsx(S,{size:"sm",label:"New",color:"neutral-light",disabled:n});case"leveling":return i.jsx(w,{$selected:l,$disable:n,children:i.jsx(x,{})});case"select":return i.jsx(y,{$selected:l,children:i.jsx(f,{})});default:return null}};return i.jsxs(k,{className:u({negative:s}),$size:v,$selected:l,$type:a,$disable:n,onClick:h,children:[p&&i.jsx(r,{className:u({negative:s}),$size:v,$type:a,$selected:l,$disable:n,children:p}),i.jsxs(z,{children:[o&&i.jsx(m,{className:u({negative:s}),$selected:l,$type:a,$disable:n,children:o}),g&&i.jsx(d,{className:u({negative:s}),$type:a,$selected:l,$disable:n,children:g})]}),b()]})};$.displayName="FISMenuItem";const N=$;try{$.displayName="FISMenuItem",$.__docgenInfo={description:"",displayName:"FISMenuItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},iconPrefix:{defaultValue:null,description:"",name:"iconPrefix",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"action"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"action"'},{value:'"leveling"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},negative:{defaultValue:{value:"false"},description:"",name:"negative",required:!1,type:{name:"boolean"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}}}}}catch{}export{N as M};
