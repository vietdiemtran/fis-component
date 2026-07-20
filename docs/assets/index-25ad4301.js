import{j as a}from"./jsx-runtime-e7d94ccb.js";import{r as h}from"./index-981f9478.js";import{a as g,r as t,g as l}from"./getTheme-9564f801.js";import{c as x}from"./index-f7beeda4.js";const $=g.div`
  ${e=>{if(e.$hasRightDivider)return t`
        &:before {
          content: "";
          z-index: 1;
          position: absolute;
          width: ${l("com/table/row-cell/divider/stroke-width")};
          background-color: ${l("com/table/title-cell/divider/color-stroke")};
          top: 12px;
          right: 0;
          bottom: 12px;
        }
      `}}

  .header-cell-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: ${l("com/table/title-cell/vertical-gap")};
    ${e=>{if(e.$onlyIcon)return t`
          align-items: center;
          justify-content: center;
        `}}

    .title {
      padding: ${l("com/table/title-cell/default/label/vertical-padding")}
        0 ${l("com/table/title-cell/default/label/vertical-padding")} 0;
    }

    .cell-content {
      display: flex;
      justify-content: ${e=>e.$textAlign==="right"?"flex-end":"space-between"};
      // width: 100%;
      gap: ${l("com/table/title-cell/default/label/vertical-gap")};
      .label-container {
        display: flex;
        gap: 4px;

        .label {
          ${l("Label/XS")};
          width: 100%;
          display: inline-block;
          ${e=>e.$textAlign==="right"?"text-align: end":""};
          color: ${e=>l(`com/table/title-cell/${e!=null&&e.$disabled?"disable":"default"}/label/color-text`)};

          ${e=>e.$hasTruncateLabel?t`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              `:t`
                white-space: pre-wrap;
              `};
        }
        .required-asterisk {
          ${l("Label/XS")};
          color: ${l("com/table/title-cell/default/required-mark/color-text")};
        }
      }

      .right-component-father {
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${l("com/button/size-xs/icon/size-icon")};
        height: ${l("com/button/size-xs/icon/size-icon")};
      }

      ${e=>{if(e.$disabled)return t`
            button {
              color: ${l("com/button/disable/icon-color")};
              pointer-events: none !important;
            }
          `}}
    }

    .description {
      ${l("Paragraph/XS")};
      color: ${e=>l(`com/table/title-cell/${e!=null&&e.$disabled?"disable":"default"}/description/color-text`)};

      & + span {
        visibility: hidden;
      }
    }
  }
`,i=h.forwardRef(({className:e,label:n,description:r,rightComponent:d,disabled:o,hasRightDivider:s=!0,hasTruncateLabel:c=!1,onlyIcon:u=!1,textAlign:m="left",required:f,...b},p)=>a.jsx($,{ref:p,className:x("header-cell-container",e),$textAlign:m,$disabled:o,$hasTruncateLabel:c,$hasRightDivider:s,$onlyIcon:u,...b,children:a.jsxs("div",{className:"header-cell-content",children:[a.jsxs("div",{className:"cell-content title",children:[n&&a.jsxs("div",{className:"label-container",children:[a.jsx("div",{className:"label",children:n}),f&&a.jsx("div",{className:"required-asterisk",children:"*"})]}),d&&a.jsx("div",{className:"right-component-father",children:d})]}),r&&a.jsx("div",{className:"cell-content",children:a.jsx("div",{className:"description",children:r})})]})}));i.displayName="FISTableHeaderCell";try{i.displayName="FISTableHeaderCell",i.__docgenInfo={description:"",displayName:"FISTableHeaderCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textAlign:{defaultValue:{value:"left"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | null | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rightComponent:{defaultValue:null,description:"",name:"rightComponent",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hasRightDivider:{defaultValue:{value:"true"},description:"",name:"hasRightDivider",required:!1,type:{name:"boolean"}},hasTruncateLabel:{defaultValue:{value:"false"},description:"",name:"hasTruncateLabel",required:!1,type:{name:"boolean"}},onlyIcon:{defaultValue:{value:"false"},description:"",name:"onlyIcon",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}export{i as F};
