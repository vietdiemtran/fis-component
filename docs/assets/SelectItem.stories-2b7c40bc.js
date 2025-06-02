import{j as r}from"./jsx-runtime-47c18db8.js";import{F as O}from"./index-bf676f14.js";import{C as t}from"./RemoveIcon-d554efb7.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./getTheme-624682de.js";const F={title:"Components/SelectItem",component:O,tags:["autodocs"],parameters:{controls:{expanded:!0},layout:"centered",docs:{description:{component:"Component SelectItem là một trường nhập liệu tùy chỉnh với nhiều tùy chọn về giao diện và chức năng. Nó hỗ trợ thêm icon ở cả đầu và cuối input, và có thể tùy chỉnh kích thước."}}},argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi input trống"},size:{control:"radio",options:["xs","sm","md","lg"],description:"Kích thước của input: xs (rất nhỏ), sm (nhỏ), md (trung bình) hoặc lg (lớn)"},disabled:{control:"boolean",description:"Vô hiệu hóa input, người dùng không thể tương tác"},readOnly:{control:"boolean",description:"Đặt input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa"},actived:{control:"boolean",description:"Xác định trạng thái active của input"},value:{control:"text",description:"Giá trị hiện tại của input"},iconPrefix:{control:"object",description:"Biểu tượng hiển thị ở đầu input"},iconSuffix:{control:"object",description:"Biểu tượng hiển thị ở cuối input"},onClickPrefix:{action:"clicked prefix",description:"Callback khi click vào icon prefix"},onClickSuffix:{action:"clicked suffix",description:"Callback khi click vào icon suffix"}}},n={args:{placeholder:"Nhập văn bản tại đây...",size:"md"},parameters:{docs:{description:{story:"Input cơ bản với kích thước trung bình."}}}},e={args:{...n.args,iconPrefix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở đầu trường nhập liệu."}}}},i={args:{...n.args,iconSuffix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cuối trường nhập liệu."}}}},o={args:{...n.args,iconPrefix:r.jsx(t,{}),iconSuffix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cả đầu và cuối trường nhập liệu."}}}},c={args:{...n.args,readOnly:!0,value:"Đây là trường chỉ đọc"},parameters:{docs:{description:{story:"Input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa nội dung."}}}},s={args:{...n.args,disabled:!0,value:"Đây là trường bị vô hiệu hóa"},parameters:{docs:{description:{story:"Input bị vô hiệu hóa, người dùng không thể tương tác."}}}},a={args:{...n.args,activeDropdown:!0,iconSuffix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với dropdown đang mở."}}}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Nhập văn bản tại đây...",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Input cơ bản với kích thước trung bình."
      }
    }
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,g,l;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconPrefix: <CategoryIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Input với biểu tượng hiển thị ở đầu trường nhập liệu."
      }
    }
  }
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var m,f,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconSuffix: <CategoryIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Input với biểu tượng hiển thị ở cuối trường nhập liệu."
      }
    }
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,y,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconPrefix: <CategoryIcon />,
    iconSuffix: <CategoryIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Input với biểu tượng hiển thị ở cả đầu và cuối trường nhập liệu."
      }
    }
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,S,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: "Đây là trường chỉ đọc"
  },
  parameters: {
    docs: {
      description: {
        story: "Input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa nội dung."
      }
    }
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,C,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: "Đây là trường bị vô hiệu hóa"
  },
  parameters: {
    docs: {
      description: {
        story: "Input bị vô hiệu hóa, người dùng không thể tương tác."
      }
    }
  }
}`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,W,w;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    activeDropdown: true,
    iconSuffix: <CategoryIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Input với dropdown đang mở."
      }
    }
  }
}`,...(w=(W=a.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const V=["Default","WithPrefixIcon","WithSuffixIcon","WithPrefixAndSuffix","ReadOnly","Disabled","WithActiveDropdown"];export{n as Default,s as Disabled,c as ReadOnly,a as WithActiveDropdown,o as WithPrefixAndSuffix,e as WithPrefixIcon,i as WithSuffixIcon,V as __namedExportsOrder,F as default};
