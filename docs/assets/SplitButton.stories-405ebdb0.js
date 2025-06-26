import{j as L}from"./jsx-runtime-47c18db8.js";import{F as z}from"./index-d2a546a7.js";import{E as D,C as j}from"./LineArrowsUp-4acd88f0.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";const q={title:"Components/Button & Link/SplitButton",component:z,tags:["autodocs"],parameters:{docs:{description:{component:"SplitButton là một component kết hợp giữa button chính và một button phụ để mở dropdown menu. Component này thường được sử dụng khi cần hiển thị một hành động chính và một số hành động phụ liên quan."}}},argTypes:{label:{control:"text",description:"Nội dung text hiển thị trên button chính.",table:{type:{summary:"string"},defaultValue:{summary:"Create"}}},size:{control:"radio",options:["xs","sm","md","lg"],description:"Kích thước của button. xs: nhỏ nhất, sm: nhỏ, md: vừa, lg: lớn.",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}}},icon:{control:"object",description:"Icon hiển thị bên cạnh text trên button chính."},variant:{control:"radio",options:["primary","secondary","tertiary","primary-white","secondary-white"],description:"Kiểu hiển thị của button. primary: màu chính, secondary: màu phụ, tertiary: màu thứ ba, primary-white: màu chính nền trắng, secondary-white: màu phụ nền trắng.",table:{type:{summary:"primary | secondary | tertiary | primary-white | secondary-white"},defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Vô hiệu hóa toàn bộ button, không cho phép tương tác.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeButton:{control:"boolean",description:"Trạng thái active của button chính, thường được sử dụng khi button đang được chọn hoặc đang thực hiện một hành động.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeIcon:{control:"boolean",description:"Trạng thái active của button dropdown, thường được sử dụng khi menu dropdown đang mở.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Hiển thị trạng thái loading trên button, thường được sử dụng khi đang thực hiện một hành động bất đồng bộ.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onButtonClick:{description:"Hàm callback được gọi khi người dùng click vào button chính.",action:"clicked"},onIconClick:{description:"Hàm callback được gọi khi người dùng click vào button dropdown để mở/đóng menu.",action:"toggled"}}},t={label:"Create",icon:L.jsx(j,{}),size:"md",variant:"primary",disabled:!1,active:!1,activeIcon:!1,loading:!1},n={args:t,parameters:{docs:{description:{story:"SplitButton mặc định với kích thước vừa (md) và màu chính (primary)."}}}},a={args:{...t,size:"sm",label:"Add",icon:L.jsx(D,{})},parameters:{docs:{description:{story:"SplitButton với kích thước nhỏ (sm), phù hợp cho các không gian hạn chế."}}}},e={args:{...t,size:"lg",label:"Submit"},parameters:{docs:{description:{story:"SplitButton với kích thước lớn (lg), nổi bật và dễ nhìn thấy."}}}},r={args:{...t,variant:"secondary",label:"Cancel"},parameters:{docs:{description:{story:"SplitButton với màu phụ (secondary), thường được sử dụng cho các hành động thứ yếu."}}}},o={args:{...t,disabled:!0,label:"Disabled"},parameters:{docs:{description:{story:"SplitButton ở trạng thái vô hiệu hóa, không cho phép tương tác."}}}},s={args:{...t,loading:!0,label:"Loading"},parameters:{docs:{description:{story:"SplitButton ở trạng thái loading, hiển thị khi đang thực hiện một hành động."}}}},c={args:{...t,activeButton:!0,activeIcon:!0,label:"Active"},parameters:{docs:{description:{story:"SplitButton ở trạng thái active, với cả button chính và dropdown đều được kích hoạt."}}}};var i,h,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: "SplitButton mặc định với kích thước vừa (md) và màu chính (primary)."
      }
    }
  }
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: "sm",
    label: "Add",
    icon: <EditIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton với kích thước nhỏ (sm), phù hợp cho các không gian hạn chế."
      }
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: "lg",
    label: "Submit"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton với kích thước lớn (lg), nổi bật và dễ nhìn thấy."
      }
    }
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "secondary",
    label: "Cancel"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton với màu phụ (secondary), thường được sử dụng cho các hành động thứ yếu."
      }
    }
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var k,f,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    label: "Disabled"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton ở trạng thái vô hiệu hóa, không cho phép tương tác."
      }
    }
  }
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var A,w,x;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    loading: true,
    label: "Loading"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton ở trạng thái loading, hiển thị khi đang thực hiện một hành động."
      }
    }
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,I,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    activeButton: true,
    activeIcon: true,
    label: "Active"
  },
  parameters: {
    docs: {
      description: {
        story: "SplitButton ở trạng thái active, với cả button chính và dropdown đều được kích hoạt."
      }
    }
  }
}`,...(V=(I=c.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const N=["Default","Small","Large","Secondary","Disabled","Loading","Active"];export{c as Active,n as Default,o as Disabled,e as Large,s as Loading,r as Secondary,a as Small,N as __namedExportsOrder,q as default};
