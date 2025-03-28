import{j as i}from"./jsx-runtime-47c18db8.js";import{r as f}from"./index-d806aa85.js";import{d as c,l as o}from"./styled-components.browser.esm-c9db8114.js";import{g as e}from"./getTheme-fd88fed7.js";const x=c.div`
  position: relative;
  min-height: ${e("com/table/title-cell/min-height")};
  height: 100%;
  background-color: ${e("com/table/title-cell/default/background-color")};
  border-top: ${e("com/table/row-cell/divider/stroke-width")} solid
    ${e("com/table/title-cell/divider/color-stroke")};
  border-bottom: ${e("com/table/row-cell/divider/stroke-width")} solid
    ${e("com/table/title-cell/divider/color-stroke")};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: ${e("com/table/title-cell/vertical-padding")};
  padding-bottom: ${e("com/table/title-cell/vertical-padding")};
  padding-left: ${e("com/table/title-cell/horizontal-padding")};
  padding-right: ${e("com/table/title-cell/horizontal-padding")};
  gap: ${e("com/table/title-cell/vertical-gap")};
  .title-box {
    display: flex;
    flex-direction: column;
    gap: ${e("com/table/title-cell/vertical-gap")};
    flex: 1;
    .title {
      ${e("Label/XS")};
      display: inline-block;
      color: ${e("com/table/title-cell/default/label/color-text")};
      width: 100%;
      white-space: pre-wrap;
    }
    .description {
      ${e("Paragraph/XS")};
      color: ${e("com/table/title-cell/default/description/color-text")};
    }
  }

  .divider {
    position: absolute;
    right: 0;
    width: 1px;
    background-color: ${e("com/table/title-cell/divider/color-stroke")};
    top: 12px;
    bottom: 12px;
  }

  ${t=>{const l=[];return t.$textAlign==="right"&&l.push(o`
        .description {
          text-align: right;
        }
        .title-box {
          .title {
            text-align: right;
          }
        }
      `),t.$disabled&&l.push(o`
        .title-box {
          .title {
            color: ${e("com/table/title-cell/disable/label/color-text")};
          }

          .description {
            color: ${e("com/table/title-cell/disable/description/color-text")};
          }
        }

        button {
          color: ${e("com/button/disable/icon-color")};
        }
      `),t.$showBorder||l.push(o`
        border-top: none;
        border-bottom: none;
      `),t.$contentWrapText||l.push(o`
        .title-box {
          .title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `),t.$hasIcon&&l.push(o`
        .title-box {
          max-width: calc(100% - ${e("com/button/size-xs/height")});
        }

        .icon-box {
          min-width: ${e("com/button/size-xs/height")};
        }
      `),l}}
`,g=c.div`
  margin-top: -2px;

  ${t=>{if(t.$disabled)return o`
        color: ${e("com/button/disable/icon-color")};

        button {
          color: ${e("com/button/disable/icon-color")};
          pointer-events: none;
        }
      `}}
`;c.div``;const n=f.forwardRef(({className:t,textAlign:l,title:a,description:r,icon:d,disabled:s,showBorder:p=!0,showDivider:m=!0,contentWrapText:u=!1,onClick:$,...b},h)=>i.jsxs(x,{ref:h,className:`header-cell-container ${t}`,$textAlign:l,$disabled:s,$showBorder:p,$contentWrapText:u,$hasIcon:d,...b,children:[(a||r)&&i.jsxs("div",{className:"title-box",children:[a&&i.jsx("div",{className:"title",children:a}),r&&i.jsx("div",{className:"description",children:r})]}),d&&i.jsx(g,{className:"icon-box",$disabled:s,children:d}),m&&i.jsx("div",{className:"divider"})]}));n.displayName="FISHeaderCell";try{n.displayName="FISHeaderCell",n.__docgenInfo={description:"",displayName:"FISHeaderCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},showBorder:{defaultValue:{value:"true"},description:"",name:"showBorder",required:!1,type:{name:"boolean"}},showDivider:{defaultValue:{value:"true"},description:"",name:"showDivider",required:!1,type:{name:"boolean"}},contentWrapText:{defaultValue:{value:"false"},description:"",name:"contentWrapText",required:!1,type:{name:"boolean"}}}}}catch{}export{n as F};
