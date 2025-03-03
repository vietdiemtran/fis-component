import{j as t}from"./jsx-runtime-C8_8iAox.js";import{r as $}from"./index-Dkaqzkgy.js";import{l as a,d as n}from"./styled-components.browser.esm-CcLIA1IU.js";import{g as o}from"./getTheme-atTn6El8.js";const i=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
  transition: all 0.2s ease;
  border: ${o("com/radio/item/stroke-width")} solid
    ${o("com/radio/item/unmarked/color-stroke/default")};
  background-color: ${o("com/radio/item/unmarked/background-color/default")};
  box-sizing: border-box;
  border-radius: ${o("com/radio/item/corner-radius")};

  &:focus-visible {
    outline: 2px solid ${o("com/focus-mark/color-stroke")};
    outline-offset: ${o("sem/dimension/stroke-width/divider/lg")};
  }
`,d=n.span`
  display: inline-flex;
  flex-direction: column;
`,b=n.span``,c=n.span`
  ${o("Paragraph/XS")};
`,u=n.span`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${o("com/radio/item/marked/shape/color-shape/default")};
`,v=n.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,w=n.label`
  display: flex;
  align-items: center;
  gap: ${o("com/radio/horizontal-gap")};
  cursor: pointer;

  &:hover ${i} {
    border-color: ${o("com/radio/item/unmarked/color-stroke/hover")};
    background-color: ${o("com/radio/item/unmarked/background-color/hover")};
  }

  ${e=>{const r=[];return e.$checked&&r.push(a`
        ${i} {
          background-color: ${o("com/radio/item/marked/background-color/default")};
          border: none;
        }

        &:hover {
          ${i} {
            background-color: ${o("com/radio/item/marked/background-color/hover")};
            border: none;
          }
        }
      `),e.$disabled&&(r.push(a`
        cursor: not-allowed;
        ${i} {
          border-color: ${o("com/radio/item/unmarked/color-stroke/disable")} !important;
          background-color: ${o("com/radio/item/unmarked/background-color/disable")} !important;
        }

        ${d} {
          ${b} {
            color: ${o("com/radio/content/disable/label/color-text")};
          }

          ${c} {
            color: ${o("com/radio/content/disable/description/color-text")} !important;
          }
        }
      `),e.$checked&&r.push(a`
          ${i} {
            background-color: ${o("com/radio/item/marked/background-color/disable")} !important;
            border: ${o("com/radio/item/stroke-width")} solid
              ${o("com/radio/item/marked/color-stroke/disable")} !important;

            ${u} {
              background-color: ${o("com/radio/item/marked/shape/color-shape/disable")};
            }
          }
        `)),r}}

  // size of the button
  ${e=>{switch(e.$size){case"sm":return a`
          ${i} {
            width: ${o("com/radio/item/size-sm/width")};
            height: ${o("com/radio/item/size-sm/height")};
            border-width: ${o("com/radio/item/stroke-width")};
          }

          ${d} {
            ${o("Label/XS")};
          }

          ${u} {
            width: 6px;
            height: 6px;
          }
        `;case"md":return a`
          ${i} {
            width: ${o("com/radio/item/size-md/width")};
            height: ${o("com/radio/item/size-md/width")};
            border-width: ${o("com/radio/item/stroke-width")};
          }

          ${d} {
            ${o("Label/Sm")};
          }
        `}}}

  ${e=>{switch(e.$variant){case"primary":return a`
          ${d} {
            color: ${o("com/radio/content/primary/label/color-text")};

            ${c} {
              color: ${o("com/radio/content/primary/description/color-text")};
            }
          }
        `;case"secondary":return a`
          ${d} {
            color: ${o("com/radio/content/secondary/label/color-text")};

            ${c} {
              color: ${o("com/radio/content/secondary/description/color-text")};
            }
          }
        `;case"tertiary":return a`
          ${d} {
            color: ${o("com/radio/content/tertiary/label/color-text")};

            ${c} {
              color: ${o("com/radio/content/tertiary/description/color-text")};
            }
          }
        `}}}
`,j=$.forwardRef(({className:e,children:r,subLabel:l,checked:s=!1,disabled:m=!1,size:h="md",variant:f="primary",inputRef:k,"aria-label":g,...x},y)=>{const p=`radio-${$.useId()}`;return t.jsxs(w,{ref:y,className:e,$checked:s,$disabled:m,$size:h,$variant:f,children:[t.jsxs(i,{tabIndex:m?-1:0,children:[t.jsx(v,{...x,ref:k,type:"radio",checked:s,disabled:m,"aria-label":g,"aria-labelledby":r?p:void 0}),s&&t.jsx(u,{})]}),(r||l)&&t.jsxs(d,{children:[r&&t.jsx(b,{id:p,children:r}),l&&t.jsx(c,{children:l})]})]})});try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{size:{defaultValue:{value:"md"},description:"Size for radio",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"Type of radio",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:"Defines the string that subLabel the radio element.",name:"subLabel",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{j as F};
