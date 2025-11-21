import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as C}from"./index-981f9478.js";import{c as s}from"./index-f7beeda4.js";import{d,g as e}from"./getTheme-6566e1e9.js";import{F as j}from"./index-ba8cec51.js";import{j as Z,k as ee}from"./LineArrowsUp-2da65544.js";import{F as te}from"./index-e99fd670.js";import"./index-4bd6e544.js";const l=d.input`
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
`,ne=d.div`
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

  &:has(${l}:focus) {
    outline-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${l}:disabled),
  &:has(${l}:read-only) {
    cursor: not-allowed;
    outline-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
  }

  &:has(${l}:disabled) {
    pointer-events: none;
  }

  &.negative {
    outline-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    &:hover {
      outline-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};
    }

    &:has(${l}:focus) {
      outline-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
        ${e("com/actived-mark/color-gap-spacing-negative")};
    }
  }
`,ie=d.div`
  display: flex;
  justify-content: space-between;
`,ae=d.span`
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
`,re=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
`,x=C.forwardRef(p=>{const{min:a,max:c,step:S=1,defaultValue:z,sizeInput:u="md",StartIcon:V,EndIcon:w,negative:y,positive:X,message:$,iconLabel:N,textLabel:q="",onClickIconLabel:A,disabled:m,readOnly:I,onChange:k,...J}=p,[r,g]=C.useState(z!==void 0?z:void 0),Q=()=>{g(o=>{const n=(o??a??0)+S;return c!==void 0&&n>c?c:n})},U=()=>{g(o=>{const n=(o??a??0)-S;return a!==void 0&&n<a?a:n})},Y=o=>{const n=o.target.value?parseInt(o.target.value,10):void 0;isNaN(n)?g(void 0):(g(n),k==null||k(n))};return t.jsxs(re,{children:[(q||N)&&t.jsx(te,{textLabel:q,required:!0,iconLabel:N,onClickIconLabel:A}),t.jsxs(ne,{className:s({negative:y,"input-text-lg":u==="lg"}),children:[t.jsx(j,{icon:V||t.jsx(Z,{}),size:u==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:U,disabled:a!==void 0&&r!==void 0&&r<=a,className:s("decrement",{"disabled-button":m||I})}),t.jsx(l,{...J,disabled:m,readOnly:I,type:"number",value:r!==void 0?r:"",className:s({negative:y,"input-text-lg":u==="lg"}),onChange:Y}),t.jsx(j,{icon:w||t.jsx(ee,{}),size:u==="lg"?"md":"sm",variant:"tertiary-invisible",onClick:Q,disabled:c!==void 0&&r!==void 0&&r>=c,className:s("increment",{"disabled-button":m||I})})]}),$&&t.jsx(ie,{children:t.jsx(ae,{className:s({disabled:m,negative:y,positive:X}),children:$||""})})]})});x.displayName="FISInputStepper";try{x.displayName="FISInputStepper",x.__docgenInfo={description:"",displayName:"FISInputStepper",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},sizeInput:{defaultValue:null,description:"",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},StartIcon:{defaultValue:null,description:"",name:"StartIcon",required:!1,type:{name:"ReactNode"}},EndIcon:{defaultValue:null,description:"",name:"EndIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const ge={title:"components/Input/InputStepper",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"InputStepper là một component cho phép người dùng tăng hoặc giảm giá trị số thông qua các nút + và -, hoặc nhập trực tiếp giá trị vào ô input."}}},decorators:[p=>t.jsx("div",{style:{width:"300px"},children:t.jsx(p,{})})],argTypes:{min:{control:{type:"number"},description:"Giá trị tối thiểu cho phép nhập vào input"},max:{control:{type:"number"},description:"Giá trị tối đa cho phép nhập vào input"},step:{control:{type:"number"},description:"Giá trị tăng/giảm mỗi khi nhấn nút + hoặc -"},value:{control:{type:"number"},description:"Giá trị hiện tại của input"},onChange:{action:"changed",description:"Hàm callback được gọi khi giá trị thay đổi"},sizeInput:{control:{type:"radio"},options:["md","lg"],description:"Kích thước của input stepper (md: trung bình, lg: lớn)"},disabled:{control:"boolean",description:"Vô hiệu hóa input, không cho phép tương tác"},readOnly:{control:"boolean",description:"Chỉ cho phép đọc, không cho phép chỉnh sửa giá trị"},placeholder:{control:"text",description:"Text gợi ý hiển thị khi input trống"},message:{control:"text",description:"Text gợi ý hiển thị bên dưới input"},textLabel:{control:"text",description:"Nhãn hiển thị phía trên input"}}},i={args:{min:0,max:1e4,step:1,defaultValue:0,sizeInput:"md",placeholder:"Nhập số lượng",message:"Placeholder of hint text to help",textLabel:"Số lượng"},parameters:{docs:{description:{story:"InputStepper mặc định với các thuộc tính cơ bản."}}}},h={args:{...i.args,sizeInput:"lg"},parameters:{docs:{description:{story:"InputStepper với kích thước lớn hơn."}}}},f={args:{...i.args,disabled:!0},parameters:{docs:{description:{story:"InputStepper ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},b={args:{...i.args,negative:!0,min:-1e3},parameters:{docs:{description:{story:"InputStepper cho phép nhập giá trị âm, với giá trị tối thiểu là -1000."}}}},v={args:{...i.args,readOnly:!0,value:50},parameters:{docs:{description:{story:"InputStepper ở trạng thái chỉ đọc, hiển thị giá trị 50 và không cho phép chỉnh sửa."}}}};var L,D,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var O,F,R;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var E,G,P;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(G=f.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var T,H,W;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(H=b.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var B,K,M;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: 50
  },
  parameters: {
    docs: {
      description: {
        story: "InputStepper ở trạng thái chỉ đọc, hiển thị giá trị 50 và không cho phép chỉnh sửa."
      }
    }
  }
}`,...(M=(K=v.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const he=["Default","Large","Disabled","WithNegative","ReadOnly"];export{i as Default,f as Disabled,h as Large,v as ReadOnly,b as WithNegative,he as __namedExportsOrder,ge as default};
