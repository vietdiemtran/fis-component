import{j as t}from"./jsx-runtime-47c18db8.js";import{c as L,I as V}from"./RemoveIcon-d554efb7.js";import{r as m}from"./index-d806aa85.js";import{d as n,g as e,l as r}from"./getTheme-624682de.js";const i=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
  transition: all 0.2s ease;
  border: ${e("com/checkbox/item/stroke-width")} solid
    ${e("com/checkbox/item/unmarked/color-stroke/default")};
  background-color: ${e("com/checkbox/item/unmarked/background-color/default")};
  box-sizing: border-box;

  &:focus-visible {
    box-shadow:
      0px 0px 0px ${e("sem/dimension/stroke-width/divider/lg")}
        ${e("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${e("com/focus-mark/color-stroke")};
    outline: none;
  }
`,a=n.span`
  display: inline-flex;
  flex-direction: column;
`,v=n.span``,l=n.span`
  ${e("Paragraph/XS")};
`,q=n.input`
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,R=n.label`
  display: flex;
  align-items: center;
  gap: ${e("com/checkbox/horizontal-gap")};
  cursor: pointer;
  width: fit-content;

  &:hover ${i} {
    border-color: ${e("com/checkbox/item/unmarked/color-stroke/hover")};
    background-color: ${e("com/checkbox/item/unmarked/background-color/hover")};
  }

  ${o=>{const c=[];return(o.$checked||o.$indeterminate)&&c.push(r`
        ${i} {
          background-color: ${e("com/checkbox/item/marked/background-color/default")};
          border: none;

          svg {
            color: ${e("com/checkbox/item/marked/shape/color-shape/default")};
          }
        }

        &:hover {
          ${i} {
            background-color: ${e("com/checkbox/item/marked/background-color/hover")};
            border: none;
          }
        }
      `),o.$disabled&&(c.push(r`
        cursor: not-allowed;
        ${i} {
          border-color: ${e("com/checkbox/item/unmarked/color-stroke/disable")} !important;
          background-color: ${e("com/checkbox/item/unmarked/background-color/disable")} !important;
        }

        ${a} {
          ${v} {
            color: ${e("com/checkbox/content/disable/label/color-text")};
          }

          ${l} {
            color: ${e("com/checkbox/content/disable/description/color-text")} !important;
          }
        }
      `),(o.$checked||o.$indeterminate)&&c.push(r`
          ${i} {
            background-color: ${e("com/checkbox/item/marked/background-color/disable")} !important;
            border: ${e("com/checkbox/item/stroke-width")} solid
              ${e("com/checkbox/item/marked/color-stroke/disable")} !important;

            svg {
              color: ${e("com/checkbox/item/marked/shape/color-shape/disable")};
            }
          }
        `)),c}}

  // size of the button
  ${o=>{switch(o.$size){case"sm":return r`
          ${i} {
            width: ${e("com/checkbox/item/size-sm/width")};
            height: ${e("com/checkbox/item/size-sm/height")};
            border-width: ${e("com/checkbox/item/stroke-width")};
            border-radius: ${e("com/checkbox/item/size-sm/corner-radius")};

            // fixed size icon checked
            svg {
              width: ${o.$checked,"10px"};
              height: ${o.$checked?"7.5px":"2px"};
            }
          }

          ${a} {
            ${e("Label/XS")};
          }
        `;case"md":return r`
          ${i} {
            width: ${e("com/checkbox/item/size-md/width")};
            height: ${e("com/checkbox/item/size-md/height")};
            border-radius: ${e("com/checkbox/item/size-md/corner-radius")};
            border-width: ${e("com/checkbox/item/stroke-width")};

            // fixed size icon checked
            svg {
              width: ${o.$checked?"12.67px":"11.33px"};
              height: ${o.$checked?"9.33px":"2px"};
            }
          }

          ${a} {
            ${e("Label/Sm")};
          }
        `}}}

  ${o=>{switch(o.$variant){case"primary":return r`
          ${a} {
            color: ${e("com/checkbox/content/primary/label/color-text")};

            ${l} {
              color: ${e("com/checkbox/content/primary/description/color-text")};
            }
          }
        `;case"secondary":return r`
          ${a} {
            color: ${e("com/checkbox/content/secondary/label/color-text")};

            ${l} {
              color: ${e("com/checkbox/content/secondary/description/color-text")};
            }
          }
        `;case"tertiary":return r`
          ${a} {
            color: ${e("com/checkbox/content/tertiary/label/color-text")};

            ${l} {
              color: ${e("com/checkbox/content/tertiary/description/color-text")};
            }
          }
        `}}}
`,h=m.forwardRef(({className:o,children:c,subLabel:b,checked:$,defaultChecked:k=!1,indeterminate:p=!1,disabled:x=!1,size:w="md",variant:z="primary",inputRef:I,onChange:u,...S},C)=>{const f=`checkbox-${m.useId()}`,[j,g]=m.useState(k),s=$!==void 0,d=s?$:j,_=y=>{s||g(y.target.checked),u==null||u(y)};return m.useEffect(()=>{s||g(k)},[k,s]),t.jsxs(R,{ref:C,className:o,$checked:d,$indeterminate:p,$disabled:x,$size:w,$variant:z,children:[t.jsxs(i,{tabIndex:x?-1:0,children:[t.jsx(q,{...S,ref:I,type:"checkbox",checked:d,disabled:x,"aria-labelledby":c?f:void 0,onChange:_}),d?t.jsx(L,{}):null,!d&&p?t.jsx(V,{}):null]}),(c||b)&&t.jsxs(a,{children:[c&&t.jsx(v,{id:f,children:c}),b&&t.jsx(l,{children:b})]})]})});h.displayName="FISCheckbox";const H=h;try{h.displayName="FISCheckbox",h.__docgenInfo={description:"",displayName:"FISCheckbox",props:{size:{defaultValue:{value:"md"},description:"Size for checkbox",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"Type of checkbox",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:"Defines the string that subLabel the checkbox element.",name:"subLabel",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the checkbox will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled).",name:"indeterminate",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:{value:"false"},description:"If `true`, the checkbox will be disabled.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{H as C};
