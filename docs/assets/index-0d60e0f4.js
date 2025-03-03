import{j as t}from"./jsx-runtime-50395f49.js";import{r as x}from"./index-9fa1aa67.js";import{d as n,l as r}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";import{c as y,I as v}from"./RequestButtonLoadingIcon-fb8566b0.js";const i=n.span`
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
`,k=n.span``,l=n.span`
  ${e("Paragraph/XS")};
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
`,z=n.label`
  display: flex;
  align-items: center;
  gap: ${e("com/checkbox/horizontal-gap")};
  cursor: pointer;

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
          ${k} {
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
`,I=x.forwardRef(({className:o,children:c,subLabel:d,checked:s=!1,indeterminate:h=!1,disabled:m=!1,size:u="md",variant:$="primary",inputRef:p,...f},g)=>{const b=`checkbox-${x.useId()}`;return t.jsxs(z,{ref:g,className:o,$checked:s,$indeterminate:h,$disabled:m,$size:u,$variant:$,children:[t.jsxs(i,{tabIndex:m?-1:0,children:[t.jsx(w,{...f,ref:p,type:"checkbox",checked:s,disabled:m,"aria-labelledby":c?b:void 0}),s?t.jsx(y,{}):null,!s&&h?t.jsx(v,{}):null]}),(c||d)&&t.jsxs(a,{children:[c&&t.jsx(k,{id:b,children:c}),d&&t.jsx(l,{children:d})]})]})}),R=I;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{variant:{defaultValue:{value:"primary"},description:"Type of checkbox",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:"Defines the string that subLabel the checkbox element.",name:"subLabel",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the checkbox will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled).",name:"indeterminate",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:{value:"false"},description:"If `true`, the checkbox will be disabled.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{R as F};
