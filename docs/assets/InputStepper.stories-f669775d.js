import{F as b}from"./index-d60e7f1a.js";import"./jsx-runtime-47c18db8.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./getTheme-624682de.js";import"./index-e72c950e.js";import"./index-8298a7d1.js";import"./ArrowRightIcon-2d46fdf7.js";import"./index-29f02deb.js";const T={title:"components/Input/InputStepper",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"InputStepper là một component cho phép người dùng tăng hoặc giảm giá trị số thông qua các nút + và -, hoặc nhập trực tiếp giá trị vào ô input."}}},argTypes:{min:{control:{type:"number"},description:"Giá trị tối thiểu cho phép nhập vào input"},max:{control:{type:"number"},description:"Giá trị tối đa cho phép nhập vào input"},step:{control:{type:"number"},description:"Giá trị tăng/giảm mỗi khi nhấn nút + hoặc -"},value:{control:{type:"number"},description:"Giá trị hiện tại của input"},onChange:{action:"changed",description:"Hàm callback được gọi khi giá trị thay đổi"},sizeInput:{control:{type:"radio"},options:["md","lg"],description:"Kích thước của input stepper (md: trung bình, lg: lớn)"},disabled:{control:"boolean",description:"Vô hiệu hóa input, không cho phép tương tác"},readOnly:{control:"boolean",description:"Chỉ cho phép đọc, không cho phép chỉnh sửa giá trị"},placeholder:{control:"text",description:"Text gợi ý hiển thị khi input trống"},message:{control:"text",description:"Text gợi ý hiển thị bên dưới input"},textLabel:{control:"text",description:"Nhãn hiển thị phía trên input"}}},t={args:{min:0,max:1e4,step:1,defaultValue:0,sizeInput:"md",placeholder:"Nhập số lượng",message:"Placeholder of hint text to help",textLabel:"Số lượng"},parameters:{docs:{description:{story:"InputStepper mặc định với các thuộc tính cơ bản."}}}},e={args:{...t.args,sizeInput:"lg"},parameters:{docs:{description:{story:"InputStepper với kích thước lớn hơn."}}}},n={args:{...t.args,disabled:!0},parameters:{docs:{description:{story:"InputStepper ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},r={args:{...t.args,negative:!0,min:-1e3},parameters:{docs:{description:{story:"InputStepper cho phép nhập giá trị âm, với giá trị tối thiểu là -1000."}}}},p={args:{...t.args,readOnly:!0,value:50},parameters:{docs:{description:{story:"InputStepper ở trạng thái chỉ đọc, hiển thị giá trị 50 và không cho phép chỉnh sửa."}}}};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,c,h;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(h=(c=e.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,l,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var v,S,I;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const V=["Default","Large","Disabled","WithNegative","ReadOnly"];export{t as Default,n as Disabled,e as Large,p as ReadOnly,r as WithNegative,V as __namedExportsOrder,T as default};
