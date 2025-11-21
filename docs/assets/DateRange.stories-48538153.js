import{j as a}from"./jsx-runtime-e7d94ccb.js";import{r as x}from"./index-981f9478.js";import{F as $}from"./index-e99fd670.js";import{d as r,g as e,l as n}from"./getTheme-6566e1e9.js";import{F as q}from"./index-ba8cec51.js";import{g as k,h as D}from"./LineArrowsUp-2da65544.js";import{D as V}from"./index-b234deda.js";import"./index-4bd6e544.js";import"./index-986bc053.js";import"./AntdIcon-f4bdc331.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./UnstableContext-9c4aba24.js";import"./roundedArrow-00f1ad08.js";import"./useSize-2f261900.js";import"./button-35abb69e.js";import"./useMergedState-af1da16a.js";import"./useCSSVarCls-3d3c191f.js";import"./pickAttrs-397aa285.js";const j=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${e("com/input/vertical-gap")};
  width: 100%;
  .ant-picker-range {
    width: 100%;
    border: none;
    box-shadow: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${e("com/input/field/size-md/height")};
    min-height: ${e("com/input/field/size-md/height")};
    max-height: ${e("com/input/field/size-md/height")};
    border-radius: ${e("com/input/field/size-md/corner-radius")};
    border-width: ${e("com/input/field/stroke-width")};
    border-color: ${e("com/input/field/default/border/default")};
    border-style: solid;
    background-color: ${e("com/input/field/default/background/default")};
    padding: 0;
    padding-right: ${e("com/input/field/right-padding")};
    padding-left: ${e("com/input/field/left-padding")};
    .ant-picker-input {
      input {
        ${e("Paragraph/Sm")};
        color: ${e("com/input/field/default/label/color-text/inputed")};

        &::placeholder {
          color: ${e("com/input/field/default/label/color-text/placeholder")};
        }
        padding: 0 ${e("com/input/field/size-md/label/sub-spacing")};
      }
    }
    .ant-picker-active-bar {
      display: none;
    }
    .ant-picker-suffix {
      cursor: pointer;
      pointer-events: unset;
    }
  }
  .hint-box {
    padding-top: ${e("com/input/hint/top-padding")};
    .hint-text {
      ${e("Paragraph/XS")};
      color: ${e("com/input/hint/neutral/label/color-text")};
    }
  }

  .ant-picker-range-separator {
    padding: 0 4px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${t=>t.$disabled&&n`
      .ant-picker-range {
        background-color: ${e("com/input/field/disable/background-color")};
        border-color: ${e("com/input/field/disable/stroke-color")};

        .ant-picker-suffix svg {
          color: ${e("com/button/disable/icon-color")};
        }
      }
    `}

  ${t=>{if(t.$negative)return n`
        .ant-picker-range {
          border-color: ${e("com/input/field/negative/border/default")};
          background-color: ${e("com/input/field/negative/background/default")};
        }
        .hint-box {
          .hint-text {
            color: ${e("com/input/hint/negative/label/color-text")};
          }
        }
      `;if(t.$positive)return n`
        .ant-picker-range {
          border-color: ${e("com/input/field/default/border/default")};
        }
        .hint-box {
          .hint-text {
            color: ${e("com/input/hint/positive/label/color-text")};
          }
        }
      `}}
`,S=r.div`
  svg {
    color: ${e("com/input/field/default/icon/color-icon/default")};
  }
  ${t=>{if(t.$negative)return n`
        svg {
          color: ${e("com/input/field/negative/icon/color-icon/default")};
        }
      `}}
`,C=r.div`
  svg {
    color: ${e("com/button/tertiary/icon/color-icon/default")};
  }
`,{RangePicker:N}=V,o=({placeholder:t=["dd/mm/yyyy","dd/mm/yyyy"],label:d,required:b,message:s,negative:u,positive:y,disabled:l,...v})=>{const[p,c]=x.useState(!1),h=()=>{c(!p)};return a.jsxs(j,{$negative:u,$positive:y,$disabled:l,children:[d&&a.jsx($,{textLabel:d,required:b}),a.jsx(N,{open:p,onOpenChange:c,placeholder:t,disabled:l,separator:a.jsx(S,{$negative:u,children:a.jsx(k,{})}),suffixIcon:a.jsx(C,{children:a.jsx(q,{disabled:l,size:"sm",variant:"tertiary-invisible",icon:a.jsx(D,{}),onClick:h})}),...v}),s&&a.jsx("div",{className:"hint-box",children:a.jsx("div",{className:"hint-text",children:s})})]})};o.displayName="FISDateRange";try{DateRange.displayName="DateRange",DateRange.__docgenInfo={description:"",displayName:"DateRange",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"(boolean & (boolean | [boolean, boolean]))"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:'["dd/mm/yyyy", "dd/mm/yyyy"]'},description:"",name:"placeholder",required:!1,type:{name:"[string, string]"}},disabledTime:{defaultValue:null,description:"",name:"disabledTime",required:!1,type:{name:'((date: Dayjs, range: "start" | "end", info: { from?: Dayjs; }) => DisabledTimes)'}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"PickerLocale"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'},{value:'"underlined"'}]}},dropdownClassName:{defaultValue:null,description:"",name:"dropdownClassName",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},popupStyle:{defaultValue:null,description:"",name:"popupStyle",required:!1,type:{name:"CSSProperties"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"PickerStyles"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"PickerClassNames"}}}}}catch{}const U={title:"Components/Input/DateRange",component:o,tags:["autodocs"],args:{label:"Date pick",disabled:!1,required:!0,message:"Placeholder of hint text to help",negative:!1,positive:!1},argTypes:{label:{control:"text",description:"Label of input"},required:{control:"boolean",description:"Required input"},message:{control:"text",description:"Message"},negative:{control:"boolean",description:"Negative variant"},positive:{control:"boolean",description:"Positive variant"}}},I=t=>a.jsx("div",{style:{width:"400px"},children:a.jsx(o,{...t})}),i=I.bind({});var m,f,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: DateRangeProps) => {
  return <div style={{
    width: "400px"
  }}>
      <FISDateRange {...args} />
    </div>;
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,U as default};
