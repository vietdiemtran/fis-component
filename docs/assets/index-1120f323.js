import{j as a}from"./jsx-runtime-47c18db8.js";import{c as x}from"./index-d16835b1.js";import{r as y}from"./index-d806aa85.js";import{l as t,g as e,d as p}from"./getTheme-624682de.js";const b={LEFT:"left",RIGHT:"right",SINGLE_LINE:"single-line"},l={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary",PRIMARY_POSITIVE:"primary-positive",SECONDARY_POSITIVE:"secondary-positive",TERTIARY_POSITIVE:"tertiary-positive",PRIMARY_NEGATIVE:"primary-negative",SECONDARY_NEGATIVE:"secondary-negative",TERTIARY_NEGATIVE:"tertiary-negative"},w=r=>{switch(r){case l.PRIMARY:return t`
        .content {
          color: ${e("com/table/row-cell/default/primary/label/color-text/neutral")};
        }
        .description {
          color: ${e("com/table/row-cell/default/primary/description/color-text/neutral")};
        }
      `;case l.SECONDARY:return t`
        .content {
          color: ${e("com/table/row-cell/default/secondary/label/color-text/neutral")};
        }
        .description {
          color: ${e("com/table/row-cell/default/secondary/description/color-text/neutral")};
        }
      `;case l.TERTIARY:return t`
        .content {
          color: ${e("com/table/row-cell/default/tertiary/label/color-text/neutral")};
        }
        .description {
          color: ${e("com/table/row-cell/default/tertiary/description/color-text/neutral")};
        }
      `;case l.PRIMARY_POSITIVE:return t`
        .content {
          color: ${e("com/table/row-cell/default/primary/label/color-text/positive")};
        }
        .description {
          color: ${e("com/table/row-cell/default/primary/description/color-text/positive")};
        }
      `;case l.SECONDARY_POSITIVE:return t`
        .content {
          color: ${e("com/table/row-cell/default/secondary/label/color-text/positive")};
        }
        .description {
          color: ${e("com/table/row-cell/default/secondary/description/color-text/positive")};
        }
      `;case l.TERTIARY_POSITIVE:return t`
        .content {
          color: ${e("com/table/row-cell/default/tertiary/label/color-text/positive")};
        }
        .description {
          color: ${e("com/table/row-cell/default/tertiary/description/color-text/positive")};
        }
      `;case l.PRIMARY_NEGATIVE:return t`
        .content {
          color: ${e("com/table/row-cell/default/primary/label/color-text/negative")};
        }
        .description {
          color: ${e("com/table/row-cell/default/primary/description/color-text/negative")};
        }
      `;case l.SECONDARY_NEGATIVE:return t`
        .content {
          color: ${e("com/table/row-cell/default/secondary/label/color-text/negative")};
        }
        .description {
          color: ${e("com/table/row-cell/default/secondary/description/color-text/negative")};
        }
      `;case l.TERTIARY_NEGATIVE:return t`
        .content {
          color: ${e("com/table/row-cell/default/tertiary/label/color-text/negative")};
        }
        .description {
          color: ${e("com/table/row-cell/default/tertiary/description/color-text/negative")};
        }
      `}},I=p.div`
  background-color: ${e("com/table/row-cell/background-color/default")};
  border-bottom: ${e("com/table/title-cell/stroke-width")} solid
    ${e("com/table/row-cell/divider/color-stroke")};
  gap: ${e("com/table/row-cell/horizontal-gap")};
  padding-top: ${e("com/table/row-cell/vertical-padding")};
  padding-bottom: ${e("com/table/row-cell/vertical-padding")};
  padding-left: ${e("com/table/row-cell/horizontal-padding")};
  padding-right: ${e("com/table/row-cell/horizontal-padding")};

  &:hover {
    background-color: ${e("com/table/row-cell/background-color/hover")} !important;
  }

  &:active {
    background-color: ${e("com/table/row-cell/background-color/selected")};
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

  ${r=>{let o=[];return r.$hasBorder||o.push(t`
        border-bottom: none;
      `),r.$textAlign===b.RIGHT&&o.push(t`
        .left-right-content {
          text-align: right;
          .content-box {
            flex-direction: row-reverse;
          }
        }
      `),r.$variant&&o.push(w(r.$variant)),r.$disabled&&o.push(t`
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
      `),r.$contentWrapText||o.push(t`
        .content {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `),!r.$hasContent&&!r.$hasDescription&&o.push(t`
        .icon-box {
          width: 100%;
        }
        .content-box {
          justify-content: center;
        }
      `),o}}
`,m=p.div`
  width: ${e("com/button/size-xs/icon/size-icon")};
  height: ${e("com/button/size-xs/icon/size-icon")};
  ${r=>{let o=[];switch(!r.$hasContent&&!r.$hasDescription&&o.push(t`
        width: 100%;
        max-width: 100%;
        height: fit-content;
        max-height: fit-content;
      `),r.$variant){case l.PRIMARY:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/neutral")};
        `);break;case l.SECONDARY:o.push(t`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/neutral")};
        `);break;case l.TERTIARY:o.push(t`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/neutral")};
        `);break;case l.PRIMARY_POSITIVE:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/positive")};
        `);break;case l.SECONDARY_POSITIVE:o.push(t`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/positive")};
        `);break;case l.TERTIARY_POSITIVE:o.push(t`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/positive")};
        `);break;case l.PRIMARY_NEGATIVE:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/negative")};
        `);break;case l.SECONDARY_NEGATIVE:o.push(t`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/negative")};
        `);break;case l.TERTIARY_NEGATIVE:o.push(t`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/negative")};
        `);break;default:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/neutral")};
        `);break}return r.$disabled&&o.push(t`
        color: ${e("com/table/row-cell/disable/icon/color-icon")};
      `),o}}
`,u=y.forwardRef(({className:r,textAlign:o,variant:s=l.PRIMARY,content:c,description:i,icon:n,disabled:d,hasBorder:h,onChange:v,contentWrapText:$=!1,...f},g)=>a.jsx(I,{$hasBorder:h,$disabled:d,$variant:s,$textAlign:o,$contentWrapText:$,$hasContent:c,$hasDescription:i,ref:g,className:x("column-cell-container",r),...f,children:o===b.SINGLE_LINE?a.jsxs("div",{className:"single-line-content",children:[n&&a.jsx("div",{className:"icon-box",children:a.jsx(m,{$textAlign:o,$variant:s,$disabled:d,$hasContent:c,$hasDescription:i,children:n})}),(c||i)&&a.jsxs("div",{className:"content-box",children:[c&&a.jsx("div",{className:"content",children:c}),i&&a.jsx("div",{className:"description",children:i})]})]}):a.jsxs("div",{className:"left-right-content",children:[(n||c)&&a.jsxs("div",{className:"content-box",children:[n&&a.jsx(m,{$textAlign:o,$variant:s,$disabled:d,$hasContent:c,$hasDescription:i,children:n}),c&&a.jsx("div",{className:"content",children:c})]}),i&&a.jsx("div",{className:"description",children:i})]})}));u.displayName="FISColumnCell";try{u.displayName="FISColumnCell",u.__docgenInfo={description:"",displayName:"FISColumnCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},contentWrapText:{defaultValue:{value:"false"},description:"",name:"contentWrapText",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}export{l as C,u as F,b as a};
