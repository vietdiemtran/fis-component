import{j as r}from"./jsx-runtime-47c18db8.js";import{F as O}from"./index-eca51d54.js";import{C as t}from"./LineArrowsUp-4acd88f0.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./getTheme-624682de.js";const F={title:"Components/SelectItem",component:O,tags:["autodocs"],parameters:{controls:{expanded:!0},layout:"centered",docs:{description:{component:"Component SelectItem là một trường nhập liệu tùy chỉnh với nhiều tùy chọn về giao diện và chức năng. Nó hỗ trợ thêm icon ở cả đầu và cuối input, và có thể tùy chỉnh kích thước."}}},argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi input trống"},size:{control:"radio",options:["xs","sm","md","lg"],description:"Kích thước của input: xs (rất nhỏ), sm (nhỏ), md (trung bình) hoặc lg (lớn)"},disabled:{control:"boolean",description:"Vô hiệu hóa input, người dùng không thể tương tác"},readOnly:{control:"boolean",description:"Đặt input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa"},actived:{control:"boolean",description:"Xác định trạng thái active của input"},value:{control:"text",description:"Giá trị hiện tại của input"},iconPrefix:{control:"object",description:"Biểu tượng hiển thị ở đầu input"},iconSuffix:{control:"object",description:"Biểu tượng hiển thị ở cuối input"}}},n={args:{placeholder:"Nhập văn bản tại đây...",size:"md"},parameters:{docs:{description:{story:"Input cơ bản với kích thước trung bình."}}}},e={args:{...n.args,iconPrefix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở đầu trường nhập liệu."}}}},o={args:{...n.args,iconSuffix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cuối trường nhập liệu."}}}},i={args:{...n.args,iconPrefix:r.jsx(t,{}),iconSuffix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cả đầu và cuối trường nhập liệu."}}}},s={args:{...n.args,readOnly:!0,value:"Đây là trường chỉ đọc"},parameters:{docs:{description:{story:"Input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa nội dung."}}}},c={args:{...n.args,disabled:!0,value:"Đây là trường bị vô hiệu hóa"},parameters:{docs:{description:{story:"Input bị vô hiệu hóa, người dùng không thể tương tác."}}}},a={args:{...n.args,activeDropdown:!0,iconSuffix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với dropdown đang mở."}}}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,g,m;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var l,f,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var I,S,D;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var k,j,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var P,W,w;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(W=a.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const V=["Default","WithPrefixIcon","WithSuffixIcon","WithPrefixAndSuffix","ReadOnly","Disabled","WithActiveDropdown"];export{n as Default,c as Disabled,s as ReadOnly,a as WithActiveDropdown,i as WithPrefixAndSuffix,e as WithPrefixIcon,o as WithSuffixIcon,V as __namedExportsOrder,F as default};
