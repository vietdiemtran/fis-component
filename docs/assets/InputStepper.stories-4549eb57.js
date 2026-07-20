import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as L}from"./index-981f9478.js";import{c as l}from"./index-f7beeda4.js";import{a as d,g as e}from"./getTheme-9564f801.js";import{F as D}from"./index-df9a4235.js";import{n as te,o as ne}from"./InfoSolidIcon-78d566e9.js";import{F as de}from"./index-00a7ff96.js";import"./index-66039438.js";const s=d.input`
  all: unset;
  text-align: center;
  width: 100%;
  caret-color: ${e("com/typing-cursor/default")};
  ${e("Paragraph/Md")};
  padding-right: ${e("com/input/field/size-md/number/sub-spacing")};
  padding-left: ${e("com/input/field/size-md/number/sub-spacing")};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  ::placeholder {
    color: ${e("com/input/field/default/label/color-text/placeholder")};
  }

  &.input-text-lg {
    padding-right: ${e("com/input/field/size-lg/number/sub-spacing")};
    padding-left: ${e("com/input/field/size-lg/number/sub-spacing")};
  }

  &:disabled,
  &:read-only {
    text-align: left;
    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }
  }

  &.negative {
    color: ${e("com/input/field/negative/label/color-text/inputed")};
    caret-color: ${e("com/typing-cursor/negative")};
  }
`,pe=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${e("com/input/field/default/background/default")};
  height: ${e("com/input/field/size-md/height")};
  height: ${e("com/input/field/size-md/height")};
  min-width: ${e("com/input/field/size-md/number/min-width")};
  min-height: ${e("com/input/field/size-md/height")};
  max-height: ${e("com/input/field/size-md/height")};
  border-radius: ${e("com/input/field/size-md/corner-radius")};
  outline: ${e("com/input/field/stroke-width")} solid
    ${e("com/input/field/default/border/default")};
  outline-offset: -${e("com/input/field/stroke-width")};
  padding-right: ${e("com/input/field/right-padding")};
  padding-left: ${e("com/input/field/left-padding")};

  .decrement,
  .increment {
    flex-shrink: 0;
  }

  .disabled-button {
    display: none;
  }

  &.input-text-lg {
    height: ${e("com/input/field/size-lg/height")};
    min-width: ${e("com/input/field/size-lg/number/min-width")};
    min-height: ${e("com/input/field/size-lg/height")};
    max-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }

  &:hover {
    outline-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};
  }

  &:has(${s}:focus) {
    outline-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${s}:disabled),
  &:has(${s}:read-only) {
    cursor: not-allowed;
    outline-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
  }

  &:has(${s}:disabled) {
    pointer-events: none;
  }

  &.negative {
    outline-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    &:hover {
      outline-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};
    }

    &:has(${s}:focus) {
      outline-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
        ${e("com/actived-mark/color-gap-spacing-negative")};
    }
  }
`,ue=d.div`
  display: flex;
  justify-content: space-between;
`,me=d.span`
  ${e("Paragraph/XS")}
  color: ${e("com/input/hint/neutral/label/color-text")};
  padding-top: ${e("com/input/hint/top-padding")};

  &.negative {
    color: ${e("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${e("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${e("com/input/hint/disable/label/color-text")};
  }
`,ge=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
`,x=L.forwardRef((p,ie)=>{const{min:a,max:c,step:z=1,defaultValue:q,sizeInput:u="md",StartIcon:w,EndIcon:C,negative:$,positive:ae,message:S,iconLabel:N,textLabel:j="",onClickIconLabel:re,disabled:m,readOnly:k,onChange:V,...oe}=p,[r,g]=L.useState(q!==void 0?q:void 0),se=()=>{g(o=>{const i=(o??a??0)+z;return c!==void 0&&i>c?c:i})},ce=()=>{g(o=>{const i=(o??a??0)-z;return a!==void 0&&i<a?a:i})},le=o=>{const i=o.target.value?parseInt(o.target.value,10):void 0;isNaN(i)?g(void 0):(g(i),V==null||V(i))};return t.jsxs(ge,{children:[(j||N)&&t.jsx(de,{textLabel:j,required:!0,iconLabel:N,onClickIconLabel:re}),t.jsxs(pe,{className:l({negative:$,"input-text-lg":u==="lg"}),children:[t.jsx(D,{icon:w||t.jsx(te,{}),size:u==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:ce,disabled:a!==void 0&&r!==void 0&&r<=a,className:l("decrement",{"disabled-button":m||k})}),t.jsx(s,{...oe,ref:ie,disabled:m,readOnly:k,type:"number",value:r!==void 0?r:"",className:l({negative:$,"input-text-lg":u==="lg"}),onChange:le}),t.jsx(D,{icon:C||t.jsx(ne,{}),size:u==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:se,disabled:c!==void 0&&r!==void 0&&r>=c,className:l("increment",{"disabled-button":m||k})})]}),S&&t.jsx(ue,{children:t.jsx(me,{className:l({disabled:m,negative:$,positive:ae}),children:S||""})})]})});x.displayName="FISInputStepper";try{x.displayName="FISInputStepper",x.__docgenInfo={description:"",displayName:"FISInputStepper",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},sizeInput:{defaultValue:null,description:"",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},StartIcon:{defaultValue:null,description:"",name:"StartIcon",required:!1,type:{name:"ReactNode"}},EndIcon:{defaultValue:null,description:"",name:"EndIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Se={title:"components/Input/InputStepper",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"InputStepper là một component cho phép người dùng tăng hoặc giảm giá trị số thông qua các nút + và -, hoặc nhập trực tiếp giá trị vào ô input."}}},decorators:[p=>t.jsx("div",{style:{width:"300px"},children:t.jsx(p,{})})],argTypes:{min:{control:{type:"number"},description:"Giá trị tối thiểu cho phép nhập vào input"},max:{control:{type:"number"},description:"Giá trị tối đa cho phép nhập vào input"},step:{control:{type:"number"},description:"Giá trị tăng/giảm mỗi khi nhấn nút + hoặc -"},defaultValue:{control:{type:"number"},description:"Giá trị khởi tạo (uncontrolled). Component quản lý giá trị nội bộ nên prop `value` không điều khiển được."},negative:{control:"boolean",description:"Hiển thị trạng thái lỗi với viền đỏ"},positive:{control:"boolean",description:"Hiển thị trạng thái hợp lệ"},StartIcon:{control:!1,description:"Icon tùy chỉnh cho nút giảm"},EndIcon:{control:!1,description:"Icon tùy chỉnh cho nút tăng"},onChange:{action:"changed",description:"Hàm callback được gọi khi giá trị thay đổi"},sizeInput:{control:{type:"radio"},options:["md","lg"],description:"Kích thước của input stepper (md: trung bình, lg: lớn)"},disabled:{control:"boolean",description:"Vô hiệu hóa input, không cho phép tương tác"},readOnly:{control:"boolean",description:"Chỉ cho phép đọc, không cho phép chỉnh sửa giá trị"},placeholder:{control:"text",description:"Text gợi ý hiển thị khi input trống"},message:{control:"text",description:"Text gợi ý hiển thị bên dưới input"},textLabel:{control:"text",description:"Nhãn hiển thị phía trên input"}}},n={args:{min:0,max:1e4,step:1,defaultValue:0,sizeInput:"md",placeholder:"Nhập số lượng",message:"Placeholder of hint text to help",textLabel:"Số lượng"},parameters:{docs:{description:{story:"InputStepper mặc định với các thuộc tính cơ bản."}}}},h={args:{...n.args,sizeInput:"lg"},parameters:{docs:{description:{story:"InputStepper với kích thước lớn hơn."}}}},f={args:{...n.args,disabled:!0},parameters:{docs:{description:{story:"InputStepper ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},b={args:{...n.args,negative:!0,min:-1e3},parameters:{docs:{description:{story:"InputStepper cho phép nhập giá trị âm, với giá trị tối thiểu là -1000."}}}},v={args:{...n.args,readOnly:!0,defaultValue:50},parameters:{docs:{description:{story:"InputStepper ở trạng thái chỉ đọc, hiển thị giá trị 50 (qua `defaultValue`) và không cho phép chỉnh sửa."}}}},I={args:{...n.args,positive:!0,message:"Giá trị hợp lệ"},parameters:{docs:{description:{story:"InputStepper ở trạng thái hợp lệ (message xanh)."}}}},y={args:{...n.args,StartIcon:t.jsx(te,{}),EndIcon:t.jsx(ne,{})},parameters:{docs:{description:{story:"Tùy chỉnh icon cho nút tăng/giảm qua `StartIcon` và `EndIcon`."}}}};var E,_,O;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10000,
    step: 1,
    defaultValue: 0,
    sizeInput: "md",
    placeholder: "Nhập số lượng",
    message: "Placeholder of hint text to help",
    textLabel: "Số lượng"
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper mặc định với các thuộc tính cơ bản."
      }
    }
  }
}`,...(O=(_=n.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var F,R,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeInput: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper với kích thước lớn hơn."
      }
    }
  }
}`,...(G=(R=h.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var P,T,H;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper ở trạng thái vô hiệu hóa, không cho phép tương tác."
      }
    }
  }
}`,...(H=(T=f.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var W,B,K;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    negative: true,
    min: -1000
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper cho phép nhập giá trị âm, với giá trị tối thiểu là -1000."
      }
    }
  }
}`,...(K=(B=b.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var M,X,A;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    defaultValue: 50
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper ở trạng thái chỉ đọc, hiển thị giá trị 50 (qua \`defaultValue\`) và không cho phép chỉnh sửa."
      }
    }
  }
}`,...(A=(X=v.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};var J,Q,U;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    positive: true,
    message: "Giá trị hợp lệ"
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper ở trạng thái hợp lệ (message xanh)."
      }
    }
  }
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    StartIcon: <DecreIcon />,
    EndIcon: <IncreIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Tùy chỉnh icon cho nút tăng/giảm qua \`StartIcon\` và \`EndIcon\`."
      }
    }
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ke=["Default","Large","Disabled","WithNegative","ReadOnly","WithPositive","CustomIcons"];export{y as CustomIcons,n as Default,f as Disabled,h as Large,v as ReadOnly,b as WithNegative,I as WithPositive,ke as __namedExportsOrder,Se as default};
