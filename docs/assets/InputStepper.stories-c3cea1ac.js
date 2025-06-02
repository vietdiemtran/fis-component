import{j as o}from"./jsx-runtime-47c18db8.js";import{F as f}from"./index-03667518.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./getTheme-624682de.js";import"./index-e72c950e.js";import"./index-8298a7d1.js";import"./RemoveIcon-d554efb7.js";import"./index-29f02deb.js";const T={title:"components/Input/InputStepper",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"InputStepper là một component cho phép người dùng tăng hoặc giảm giá trị số thông qua các nút + và -, hoặc nhập trực tiếp giá trị vào ô input."}}},decorators:[b=>o.jsx("div",{style:{width:"300px"},children:o.jsx(b,{})})],argTypes:{min:{control:{type:"number"},description:"Giá trị tối thiểu cho phép nhập vào input"},max:{control:{type:"number"},description:"Giá trị tối đa cho phép nhập vào input"},step:{control:{type:"number"},description:"Giá trị tăng/giảm mỗi khi nhấn nút + hoặc -"},value:{control:{type:"number"},description:"Giá trị hiện tại của input"},onChange:{action:"changed",description:"Hàm callback được gọi khi giá trị thay đổi"},sizeInput:{control:{type:"radio"},options:["md","lg"],description:"Kích thước của input stepper (md: trung bình, lg: lớn)"},disabled:{control:"boolean",description:"Vô hiệu hóa input, không cho phép tương tác"},readOnly:{control:"boolean",description:"Chỉ cho phép đọc, không cho phép chỉnh sửa giá trị"},placeholder:{control:"text",description:"Text gợi ý hiển thị khi input trống"},message:{control:"text",description:"Text gợi ý hiển thị bên dưới input"},textLabel:{control:"text",description:"Nhãn hiển thị phía trên input"}}},t={args:{min:0,max:1e4,step:1,defaultValue:0,sizeInput:"md",placeholder:"Nhập số lượng",message:"Placeholder of hint text to help",textLabel:"Số lượng"},parameters:{docs:{description:{story:"InputStepper mặc định với các thuộc tính cơ bản."}}}},e={args:{...t.args,sizeInput:"lg"},parameters:{docs:{description:{story:"InputStepper với kích thước lớn hơn."}}}},n={args:{...t.args,disabled:!0},parameters:{docs:{description:{story:"InputStepper ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},r={args:{...t.args,negative:!0,min:-1e3},parameters:{docs:{description:{story:"InputStepper cho phép nhập giá trị âm, với giá trị tối thiểu là -1000."}}}},p={args:{...t.args,readOnly:!0,value:50},parameters:{docs:{description:{story:"InputStepper ở trạng thái chỉ đọc, hiển thị giá trị 50 và không cho phép chỉnh sửa."}}}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,h,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(h=e.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,y,v;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,x,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(x=p.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const V=["Default","Large","Disabled","WithNegative","ReadOnly"];export{t as Default,n as Disabled,e as Large,p as ReadOnly,r as WithNegative,V as __namedExportsOrder,T as default};
