import{j as t}from"./jsx-runtime-47c18db8.js";import{r as s}from"./index-d806aa85.js";import{d as n,g as e,l as a}from"./getTheme-21dde6f8.js";const i=n.span`
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
`,S=n.span``,c=n.span`
  ${e("Paragraph/XS")};
`,f=n.span`
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
          ${S} {
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

            ${f} {
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

          ${f} {
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
`,m=s.forwardRef(({className:o,children:r,subLabel:u,checked:k,defaultChecked:p,disabled:$=!1,size:v="md",variant:w="primary",inputRef:I,"aria-label":R,onChange:h,...z},C)=>{const x=`radio-${s.useId()}`,[j,g]=s.useState(p),l=k!==void 0,b=l?k:j,L=y=>{l||g(y.target.checked),h==null||h(y)};return s.useEffect(()=>{l||g(p)},[p,l]),t.jsxs(F,{ref:C,className:o,$checked:!!b,$disabled:$,$size:v,$variant:w,children:[t.jsxs(i,{tabIndex:$?-1:0,children:[t.jsx(_,{...z,ref:I,type:"radio",checked:b,disabled:$,"aria-label":R,"aria-labelledby":r?x:void 0,onChange:L}),b&&t.jsx(f,{})]}),(r||u)&&t.jsxs(d,{children:[r&&t.jsx(S,{id:x,children:r}),u&&t.jsx(c,{children:u})]})]})});m.displayName="FISRadio";const N=m;try{m.displayName="FISRadio",m.__docgenInfo={description:"",displayName:"FISRadio",props:{size:{defaultValue:{value:"md"},description:"Size for radio",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"Type of radio",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:"Defines the string that subLabel the radio element.",name:"subLabel",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{N as F};
