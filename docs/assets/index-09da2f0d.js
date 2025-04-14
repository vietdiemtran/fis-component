import{j as a}from"./jsx-runtime-47c18db8.js";import{r as w}from"./index-d806aa85.js";import{d as h,g as e,l as t}from"./getTheme-21dde6f8.js";import{a as b,g as v,C as n}from"./helper-1a95255c.js";const y=h.div`
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

  ${l=>{let o=[];return l.$showBorder||o.push(t`
        border-bottom: none;
      `),l.$textAlign===b.RIGHT&&o.push(t`
        .left-right-content {
          text-align: right;
          .content-box {
            flex-direction: row-reverse;
          }
        }
      `),l.$variant&&o.push(v(l.$variant)),l.$disabled&&o.push(t`
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
      `),l.$contentWrapText||o.push(t`
        .content {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `),!l.$hasContent&&!l.$hasDescription&&o.push(t`
        .icon-box {
          width: 100%;
        }
        .content-box {
          justify-content: center;
        }
      `),o}}
`,m=h.div`
  width: ${e("com/button/size-xs/icon/size-icon")};
  height: ${e("com/button/size-xs/icon/size-icon")};
  ${l=>{let o=[];switch(!l.$hasContent&&!l.$hasDescription&&o.push(t`
        width: 100%;
        max-width: 100%;
        height: fit-content;
        max-height: fit-content;
      `),l.$variant){case n.PRIMARY:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/neutral")};
        `);break;case n.SECONDARY:o.push(t`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/neutral")};
        `);break;case n.TERTIARY:o.push(t`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/neutral")};
        `);break;case n.PRIMARY_POSITIVE:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/positive")};
        `);break;case n.SECONDARY_POSITIVE:o.push(t`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/positive")};
        `);break;case n.TERTIARY_POSITIVE:o.push(t`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/positive")};
        `);break;case n.PRIMARY_NEGATIVE:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/negative")};
        `);break;case n.SECONDARY_NEGATIVE:o.push(t`
          color: ${e("com/table/row-cell/default/secondary/icon/color-icon/negative")};
        `);break;case n.TERTIARY_NEGATIVE:o.push(t`
          color: ${e("com/table/row-cell/default/tertiary/icon/color-icon/negative")};
        `);break;default:o.push(t`
          color: ${e("com/table/row-cell/default/primary/icon/color-icon/neutral")};
        `);break}return l.$disabled&&o.push(t`
        color: ${e("com/table/row-cell/disable/icon/color-icon")};
      `),o}}
`,u=w.forwardRef(({className:l,textAlign:o,variant:s=n.PRIMARY,content:i,description:r,icon:c,disabled:d,showBorder:p,onChange:C,contentWrapText:g=!1,onIconClick:$,...f},x)=>a.jsx(y,{$showBorder:p,$disabled:d,$variant:s,$textAlign:o,$contentWrapText:g,$hasContent:i,$hasDescription:r,ref:x,className:`column-cell-container ${l}`,...f,children:o===b.SINGLE_LINE?a.jsxs("div",{className:"single-line-content",children:[c&&a.jsx("div",{className:"icon-box",onClick:$,children:a.jsx(m,{$textAlign:o,$variant:s,$disabled:d,$hasContent:i,$hasDescription:r,children:c})}),(i||r)&&a.jsxs("div",{className:"content-box",children:[i&&a.jsx("div",{className:"content",children:i}),r&&a.jsx("div",{className:"description",children:r})]})]}):a.jsxs("div",{className:"left-right-content",children:[(c||i)&&a.jsxs("div",{className:"content-box",children:[c&&a.jsx(m,{$textAlign:o,$variant:s,$disabled:d,$hasContent:i,$hasDescription:r,children:c}),i&&a.jsx("div",{className:"content",children:i})]}),r&&a.jsx("div",{className:"description",children:r})]})}));u.displayName="FISColumnCell";try{u.displayName="FISColumnCell",u.__docgenInfo={description:"",displayName:"FISColumnCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},contentWrapText:{defaultValue:{value:"false"},description:"",name:"contentWrapText",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},showBorder:{defaultValue:null,description:"",name:"showBorder",required:!1,type:{name:"boolean"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{u as F};
