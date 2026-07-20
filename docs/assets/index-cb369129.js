import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as s}from"./index-981f9478.js";import{a as n,g as e,r as a}from"./getTheme-9564f801.js";const i=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
  transition: all 0.2s ease;
  border: ${e("com/radio/item/stroke-width")} solid
    ${e("com/radio/item/unmarked/color-stroke/default")};
  background-color: ${e("com/radio/item/unmarked/background-color/default")};
  box-sizing: border-box;
  border-radius: ${e("com/radio/item/corner-radius")};

  &:focus-visible {
    outline: 2px solid ${e("com/focus-mark/color-stroke")};
    outline-offset: ${e("sem/dimension/stroke-width/divider/lg")};
  }
`,d=n.span`
  display: inline-flex;
  flex-direction: column;
`,v=n.span``,c=n.span`
  ${e("Paragraph/XS")};
`,b=n.span`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${e("com/radio/item/marked/shape/color-shape/default")};
`,_=n.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,F=n.label`
  display: flex;
  align-items: center;
  gap: ${e("com/radio/horizontal-gap")};
  cursor: pointer;

  &:hover ${i} {
    border-color: ${e("com/radio/item/unmarked/color-stroke/hover")};
    background-color: ${e("com/radio/item/unmarked/background-color/hover")};
  }

  ${o=>{const r=[];return o.$checked&&r.push(a`
        ${i} {
          background-color: ${e("com/radio/item/marked/background-color/default")};
          border: none;
        }

        &:hover {
          ${i} {
            background-color: ${e("com/radio/item/marked/background-color/hover")};
            border: none;
          }
        }
      `),o.$disabled&&(r.push(a`
        cursor: not-allowed;
        ${i} {
          border-color: ${e("com/radio/item/unmarked/color-stroke/disable")} !important;
          background-color: ${e("com/radio/item/unmarked/background-color/disable")} !important;
        }

        ${d} {
          ${v} {
            color: ${e("com/radio/content/disable/label/color-text")};
          }

          ${c} {
            color: ${e("com/radio/content/disable/description/color-text")} !important;
          }
        }
      `),o.$checked&&r.push(a`
          ${i} {
            background-color: ${e("com/radio/item/marked/background-color/disable")} !important;
            border: ${e("com/radio/item/stroke-width")} solid
              ${e("com/radio/item/marked/color-stroke/disable")} !important;

            ${b} {
              background-color: ${e("com/radio/item/marked/shape/color-shape/disable")};
            }
          }
        `)),r}}

  // size of the button
  ${o=>{switch(o.$size){case"sm":return a`
          ${i} {
            width: ${e("com/radio/item/size-sm/width")};
            height: ${e("com/radio/item/size-sm/height")};
            border-width: ${e("com/radio/item/stroke-width")};
          }

          ${d} {
            ${e("Label/XS")};
          }

          ${b} {
            width: 6px;
            height: 6px;
          }
        `;case"md":return a`
          ${i} {
            width: ${e("com/radio/item/size-md/width")};
            height: ${e("com/radio/item/size-md/width")};
            border-width: ${e("com/radio/item/stroke-width")};
          }

          ${d} {
            ${e("Label/Sm")};
          }
        `}}}

  ${o=>{switch(o.$variant){case"primary":return a`
          ${d} {
            color: ${e("com/radio/content/primary/label/color-text")};

            ${c} {
              color: ${e("com/radio/content/primary/description/color-text")};
            }
          }
        `;case"secondary":return a`
          ${d} {
            color: ${e("com/radio/content/secondary/label/color-text")};

            ${c} {
              color: ${e("com/radio/content/secondary/description/color-text")};
            }
          }
        `;case"tertiary":return a`
          ${d} {
            color: ${e("com/radio/content/tertiary/label/color-text")};

            ${c} {
              color: ${e("com/radio/content/tertiary/description/color-text")};
            }
          }
        `}}}
`,f=s.forwardRef(({className:o,children:r,subLabel:m,checked:k,defaultChecked:u,disabled:p=!1,size:w="md",variant:S="primary",inputRef:z,"aria-label":I,onChange:$,...R},C)=>{const x=`radio-${s.useId()}`,[j,g]=s.useState(u),l=k!==void 0,h=l?k:j,L=y=>{l||g(y.target.checked),$==null||$(y)};return s.useEffect(()=>{l||g(u)},[u,l]),t.jsxs(F,{ref:C,className:o,$checked:!!h,$disabled:p,$size:w,$variant:S,children:[t.jsxs(i,{tabIndex:p?-1:0,children:[t.jsx(_,{...R,ref:z,type:"radio",checked:h,disabled:p,"aria-label":I,"aria-labelledby":r?x:void 0,onChange:L}),h&&t.jsx(b,{})]}),(r||m)&&t.jsxs(d,{children:[r&&t.jsx(v,{id:x,children:r}),m&&t.jsx(c,{children:m})]})]})});f.displayName="FISRadio";try{f.displayName="FISRadio",f.__docgenInfo={description:"",displayName:"FISRadio",props:{size:{defaultValue:{value:"md"},description:"Size for radio",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"Type of radio",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:"Defines the string that subLabel the radio element.",name:"subLabel",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{f as F};
