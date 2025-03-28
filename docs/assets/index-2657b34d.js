import{j as t}from"./jsx-runtime-47c18db8.js";import{r as b}from"./index-d806aa85.js";import{d as n,l as a}from"./styled-components.browser.esm-c9db8114.js";import{g as o}from"./getTheme-fd88fed7.js";const i=n.span`
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
`,h=n.span``,c=n.span`
  ${o("Paragraph/XS")};
`,p=n.span`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${o("com/radio/item/marked/shape/color-shape/default")};
`,w=n.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,S=n.label`
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
          ${h} {
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

            ${p} {
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

          ${p} {
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
`,l=b.forwardRef(({className:e,children:r,subLabel:s,checked:m=!1,disabled:u=!1,size:f="md",variant:k="primary",inputRef:g,"aria-label":x,...y},v)=>{const $=`radio-${b.useId()}`;return t.jsxs(S,{ref:v,className:e,$checked:m,$disabled:u,$size:f,$variant:k,children:[t.jsxs(i,{tabIndex:u?-1:0,children:[t.jsx(w,{...y,ref:g,type:"radio",checked:m,disabled:u,"aria-label":x,"aria-labelledby":r?$:void 0}),m&&t.jsx(p,{})]}),(r||s)&&t.jsxs(d,{children:[r&&t.jsx(h,{id:$,children:r}),s&&t.jsx(c,{children:s})]})]})});l.displayName="FISRadio";const j=l;try{l.displayName="FISRadio",l.__docgenInfo={description:"",displayName:"FISRadio",props:{size:{defaultValue:{value:"md"},description:"Size for radio",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"Type of radio",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:"Defines the string that subLabel the radio element.",name:"subLabel",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{j as F};
