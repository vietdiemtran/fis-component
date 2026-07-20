import{j as a}from"./jsx-runtime-e7d94ccb.js";import{r as T}from"./index-981f9478.js";import{F as L}from"./index-00a7ff96.js";import{a as p,g as e,r as d}from"./getTheme-9564f801.js";import{F as O}from"./index-df9a4235.js";import{i as E,l as K}from"./InfoSolidIcon-78d566e9.js";import{D as A}from"./index-f6fd7562.js";import"./index-66039438.js";import"./Overflow-56aefdd9.js";import"./AntdIcon-4d3cb6de.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./UnstableContext-615a9015.js";import"./roundedArrow-9ac4eb7a.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./useMergedState-281a21e7.js";import"./pickAttrs-838756c7.js";import"./index-690b889d.js";import"./CloseOutlined-adc62a60.js";import"./useCSSVarCls-b5bb18ec.js";const B=p.div`
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

  ${t=>t.$disabled&&d`
      .ant-picker-range {
        background-color: ${e("com/input/field/disable/background-color")};
        border-color: ${e("com/input/field/disable/stroke-color")};

        .ant-picker-suffix svg {
          color: ${e("com/button/disable/icon-color")};
        }
      }
    `}

  ${t=>{if(t.$negative)return d`
        .ant-picker-range {
          border-color: ${e("com/input/field/negative/border/default")};
          background-color: ${e("com/input/field/negative/background/default")};
        }
        .hint-box {
          .hint-text {
            color: ${e("com/input/hint/negative/label/color-text")};
          }
        }
      `;if(t.$positive)return d`
        .ant-picker-range {
          border-color: ${e("com/input/field/default/border/default")};
        }
        .hint-box {
          .hint-text {
            color: ${e("com/input/hint/positive/label/color-text")};
          }
        }
      `}}
`,M=p.div`
  svg {
    color: ${e("com/input/field/default/icon/color-icon/default")};
  }
  ${t=>{if(t.$negative)return d`
        svg {
          color: ${e("com/input/field/negative/icon/color-icon/default")};
        }
      `}}
`,X=p.div`
  svg {
    color: ${e("com/button/tertiary/icon/color-icon/default")};
  }
`,{RangePicker:G}=A,u=({placeholder:t=["dd/mm/yyyy","dd/mm/yyyy"],label:m,required:P,message:g,negative:f,positive:F,disabled:c,..._})=>{const[b,v]=T.useState(!1),z=()=>{v(!b)};return a.jsxs(B,{$negative:f,$positive:F,$disabled:c,children:[m&&a.jsx(L,{textLabel:m,required:P}),a.jsx(G,{open:b,onOpenChange:v,placeholder:t,disabled:c,separator:a.jsx(M,{$negative:f,children:a.jsx(E,{})}),suffixIcon:a.jsx(X,{children:a.jsx(O,{disabled:c,size:"sm",variant:"tertiary-invisible",icon:a.jsx(K,{}),onClick:z})}),..._}),g&&a.jsx("div",{className:"hint-box",children:a.jsx("div",{className:"hint-text",children:g})})]})};u.displayName="FISDateRange";try{DateRange.displayName="DateRange",DateRange.__docgenInfo={description:"",displayName:"DateRange",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"(boolean & (boolean | [boolean, boolean]))"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:'["dd/mm/yyyy", "dd/mm/yyyy"]'},description:"",name:"placeholder",required:!1,type:{name:"[string, string]"}},disabledTime:{defaultValue:null,description:"",name:"disabledTime",required:!1,type:{name:'((date: Dayjs, range: "start" | "end", info: { from?: Dayjs; }) => DisabledTimes)'}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"PickerLocale"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'},{value:'"underlined"'}]}},dropdownClassName:{defaultValue:null,description:"",name:"dropdownClassName",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},popupStyle:{defaultValue:null,description:"",name:"popupStyle",required:!1,type:{name:"CSSProperties"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"PickerStyles"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"PickerClassNames"}}}}}catch{}const ge={title:"Components/Input/DateRange",component:u,tags:["autodocs"],args:{label:"Date pick",disabled:!1,required:!0,message:"Placeholder of hint text to help",negative:!1,positive:!1},argTypes:{label:{control:"text",description:"Label of input"},required:{control:"boolean",description:"Required input"},disabled:{control:"boolean",description:"Disable the range picker"},message:{control:"text",description:"Message"},negative:{control:"boolean",description:"Negative variant"},positive:{control:"boolean",description:"Positive variant"}}},l=t=>a.jsx("div",{style:{width:"400px"},children:a.jsx(u,{...t})}),s=l.bind({}),r=l.bind({});r.args={label:"Date pick (disabled)",disabled:!0,message:""};const i=l.bind({});i.args={label:"Date pick (lỗi)",negative:!0,message:"Khoảng ngày không hợp lệ"};const n=l.bind({});n.args={label:"Date pick (hợp lệ)",positive:!0,message:"Khoảng ngày hợp lệ"};const o=l.bind({});o.args={label:"Khoảng ngày",placeholder:["Từ ngày","Đến ngày"],message:""};var h,y,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISDateRange {...args} />
    </div>;
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,D,k;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISDateRange {...args} />
    </div>;
}`,...(k=(D=r.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var S,q,V;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISDateRange {...args} />
    </div>;
}`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var j,C,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISDateRange {...args} />
    </div>;
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var I,w,R;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISDateRange {...args} />
    </div>;
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const fe=["Default","Disabled","Negative","Positive","CustomPlaceholder"];export{o as CustomPlaceholder,s as Default,r as Disabled,i as Negative,n as Positive,fe as __namedExportsOrder,ge as default};
