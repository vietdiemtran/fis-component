import{j as r}from"./jsx-runtime-e7d94ccb.js";import{c as w}from"./index-f7beeda4.js";import{r as I}from"./index-981f9478.js";import{r as o,g as e,a as p}from"./getTheme-9564f801.js";import{F as R}from"./index-b0c2e733.js";const k=()=>r.jsx("svg",{width:"16",height:"8",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14.6668 0.666504L9.42108 5.91226C9.15707 6.17627 9.02506 6.30827 8.87284 6.35773C8.73895 6.40124 8.59471 6.40124 8.46082 6.35773C8.3086 6.30827 8.17659 6.17627 7.91258 5.91226L6.08774 4.08742C5.82373 3.82341 5.69173 3.6914 5.53951 3.64194C5.40561 3.59844 5.26138 3.59844 5.12748 3.64194C4.97527 3.6914 4.84326 3.82341 4.57925 4.08742L1.3335 7.33317M14.6668 0.666504H10.0002M14.6668 0.666504V5.33317",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),b={LEFT:"left",RIGHT:"right",SINGLE_LINE:"single-line"},l={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary",PRIMARY_POSITIVE:"primary-positive",SECONDARY_POSITIVE:"secondary-positive",TERTIARY_POSITIVE:"tertiary-positive",PRIMARY_NEGATIVE:"primary-negative",SECONDARY_NEGATIVE:"secondary-negative",TERTIARY_NEGATIVE:"tertiary-negative"},T=a=>{switch(a){case l.PRIMARY:return o`
        .content {
          color: ${e("com/table/row-cell/default/primary/label/color-text/neutral")};
        }
        .description {
          color: ${e("com/table/row-cell/default/primary/description/color-text/neutral")};
        }
      `;case l.SECONDARY:return o`
        .content {
          color: ${e("com/table/row-cell/default/secondary/label/color-text/neutral")};
        }
        .description {
          color: ${e("com/table/row-cell/default/secondary/description/color-text/neutral")};
        }
      `;case l.TERTIARY:return o`
        .content {
          color: ${e("com/table/row-cell/default/tertiary/label/color-text/neutral")};
        }
        .description {
          color: ${e("com/table/row-cell/default/tertiary/description/color-text/neutral")};
        }
      `;case l.PRIMARY_POSITIVE:return o`
        .content {
          color: ${e("com/table/row-cell/default/primary/label/color-text/positive")};
        }
        .description {
          color: ${e("com/table/row-cell/default/primary/description/color-text/positive")};
        }
      `;case l.SECONDARY_POSITIVE:return o`
        .content {
          color: ${e("com/table/row-cell/default/secondary/label/color-text/positive")};
        }
        .description {
          color: ${e("com/table/row-cell/default/secondary/description/color-text/positive")};
        }
      `;case l.TERTIARY_POSITIVE:return o`
        .content {
          color: ${e("com/table/row-cell/default/tertiary/label/color-text/positive")};
        }
        .description {
          color: ${e("com/table/row-cell/default/tertiary/description/color-text/positive")};
        }
      `;case l.PRIMARY_NEGATIVE:return o`
        .content {
          color: ${e("com/table/row-cell/default/primary/label/color-text/negative")};
        }
        .description {
          color: ${e("com/table/row-cell/default/primary/description/color-text/negative")};
        }
      `;case l.SECONDARY_NEGATIVE:return o`
        .content {
          color: ${e("com/table/row-cell/default/secondary/label/color-text/negative")};
        }
        .description {
          color: ${e("com/table/row-cell/default/secondary/description/color-text/negative")};
        }
      `;case l.TERTIARY_NEGATIVE:return o`
        .content {
          color: ${e("com/table/row-cell/default/tertiary/label/color-text/negative")};
        }
        .description {
          color: ${e("com/table/row-cell/default/tertiary/description/color-text/negative")};
        }
      `}},E=p.div`
  background-color: ${e("com/table/row-cell/background-color-stripped/default")};
  border-bottom: ${e("com/table/title-cell/stroke-width")} solid
    ${e("com/table/row-cell/divider/color-stroke")};
  gap: ${e("com/table/row-cell/horizontal-gap")};

  &:hover {
    background-color: ${e("com/table/row-cell/background-color-stripped/hover")} !important;
  }

  &:active {
    background-color: ${e("com/table/row-cell/background-color-stripped/selected")};
  }

  .single-line-content {
    display: flex;
    justify-content: flex-start;
    gap: ${e("com/table/row-cell/horizontal-gap")};

    .icon-box {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: ${e("com/button/size-xs/height")};
      height: ${e("com/button/size-xs/height")};
      min-width: ${e("com/button/size-xs/height")};
      max-width: ${e("com/button/size-xs/height")};
      min-height: ${e("com/button/size-xs/height")};
      max-height: ${e("com/button/size-xs/height")};
      background-color: ${e("com/button/tertiary/background/invisible")};
    }
    .content-box {
      max-width: calc(100% - ${e("com/button/size-xs/height")});

      gap: ${e("com/table/row-cell/default/vertical-gap")};
      display: flex;
      flex-direction: column;
    }
  }
  .left-right-content {
    gap: ${e("com/table/row-cell/horizontal-gap")};
    padding: ${e("com/table/row-cell/default/vertical-padding")} 0
      ${e("com/table/row-cell/default/vertical-padding")} 0;

    .content-box {
      display: flex;
      justify-content: flex-start;
      gap: ${e("sem/dimension/gap/xs")};
    }
  }
  .content {
    ${e("Label/Sm")};
    display: inline-block;
    width: 100%;
  }
  .description {
    ${e("Paragraph/XS")};
  }

  ${a=>{let t=[];return a.$hasBorder||t.push(o`
        border-bottom: none;
      `),a.$textAlign===b.RIGHT&&t.push(o`
        .left-right-content {
          text-align: right;
          .content-box {
            flex-direction: row-reverse;
          }
        }
      `),a.$variant&&t.push(T(a.$variant)),a.$disabled&&t.push(o`
        &:hover {
          background-color: transparent;
        }
        &:active {
          background-color: transparent;
        }
        background-color: ${e("com/table/row-cell/disable/background-color")};
        pointer-events: none;
        cursor: not-allowed;
        .content {
          color: ${e("com/table/row-cell/disable/label/color-text")};
        }
        .description {
          color: ${e("com/table/row-cell/disable/description/color-text")};
        }
      `),a.$contentWrapText||t.push(o`
        .content {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `),!a.$hasContent&&!a.$hasDescription&&t.push(o`
        .icon-box {
          width: 100%;
        }
        .content-box {
          justify-content: center;
        }
      `),t}}
`,m=p.div`
  width: ${e("com/button/size-xs/icon/size-icon")};
  height: ${e("com/button/size-xs/icon/size-icon")};
  ${a=>{let t=[];switch(!a.$hasContent&&!a.$hasDescription&&t.push(o`
        width: 100%;
        max-width: 100%;
        height: fit-content;
        max-height: fit-content;
      `),a.$variant){case l.PRIMARY:t.push(o`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/neutral")};
        `);break;case l.SECONDARY:t.push(o`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/neutral")};
        `);break;case l.TERTIARY:t.push(o`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/neutral")};
        `);break;case l.PRIMARY_POSITIVE:t.push(o`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/positive")};
        `);break;case l.SECONDARY_POSITIVE:t.push(o`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/positive")};
        `);break;case l.TERTIARY_POSITIVE:t.push(o`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/positive")};
        `);break;case l.PRIMARY_NEGATIVE:t.push(o`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/negative")};
        `);break;case l.SECONDARY_NEGATIVE:t.push(o`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/negative")};
        `);break;case l.TERTIARY_NEGATIVE:t.push(o`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/negative")};
        `);break;default:t.push(o`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/neutral")};
        `);break}return a.$disabled&&t.push(o`
        color: ${e("com/table/row-cell/disable/icon/color-icon")};
      `),t}}
`,u=I.forwardRef(({className:a,textAlign:t,variant:s=l.PRIMARY,content:c,description:i,icon:n,disabled:d,hasBorder:h,onChange:A,contentWrapText:f=!1,tooltip:v=!1,placement:$="top",variantTooltip:g="primary",...x},y)=>r.jsx(R,{variant:g,placement:$,title:v?c||"":void 0,children:r.jsx(E,{$hasBorder:h,$disabled:d,$variant:s,$textAlign:t,$contentWrapText:f,$hasContent:c?"true":void 0,$hasDescription:i,ref:y,className:w("column-cell-container",a),...x,children:t===b.SINGLE_LINE?r.jsxs("div",{className:"single-line-content",children:[n&&r.jsx("div",{className:"icon-box",children:r.jsx(m,{$textAlign:t,$variant:s,$disabled:d,$hasContent:c?"true":void 0,$hasDescription:i,children:n})}),(c||i)&&r.jsxs("div",{className:"content-box",children:[c&&r.jsx("div",{className:"content",children:c}),i&&r.jsx("div",{className:"description",children:i})]})]}):r.jsxs("div",{className:"left-right-content",children:[(n||c)&&r.jsxs("div",{className:"content-box",children:[n&&r.jsx(m,{$textAlign:t,$variant:s,$disabled:d,$hasContent:c?"true":void 0,$hasDescription:i,children:n}),c&&r.jsx("div",{className:"content",children:c})]}),i&&r.jsx("div",{className:"description",children:i})]})})}));u.displayName="FISTableCell";try{u.displayName="FISTableCell",u.__docgenInfo={description:"",displayName:"FISTableCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},contentWrapText:{defaultValue:{value:"false"},description:"",name:"contentWrapText",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"false"},description:"",name:"tooltip",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"leftTop"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"rightBottom"'}]}},variantTooltip:{defaultValue:{value:"primary"},description:"",name:"variantTooltip",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}export{l as C,u as F,k as R,b as a};
