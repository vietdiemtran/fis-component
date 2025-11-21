import{j as r}from"./jsx-runtime-47c18db8.js";import{F as z}from"./index-71384274.js";import{C as t}from"./LineArrowsUp-e7620e4c.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./getTheme-c4dbdb94.js";import"./index-8f5d9190.js";import"./index-84c6d358.js";const X={title:"Components/Input/InputField",component:z,tags:["autodocs"],parameters:{controls:{expanded:!0},layout:"centered",docs:{description:{component:"Component InputField là một trường nhập liệu tùy chỉnh với nhiều tùy chọn về giao diện và chức năng. Nó hỗ trợ thêm icon, dropdown, và label ở cả đầu và cuối input."}}},argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi input trống"},activeDropdown:{control:"boolean",description:"Xác định trạng thái mở/đóng của dropdown"},sizeInput:{control:"radio",options:["md","lg"],description:"Kích thước của input: md (trung bình) hoặc lg (lớn)"},readOnly:{control:"boolean",description:"Đặt input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa"},typeSuffix:{control:"radio",options:["icon","suffix","dropdown"],description:"Loại phần tử ở cuối input: icon (biểu tượng), suffix (hậu tố), hoặc dropdown (menu thả xuống)"},typePrefix:{control:"radio",options:["prefix","dropdown"],description:"Loại phần tử ở đầu input: prefix (tiền tố) hoặc dropdown (menu thả xuống)"},value:{control:"text",description:"Giá trị hiện tại của input"},iconPrefix:{control:"object",description:"Biểu tượng hiển thị ở đầu input"},iconSuffix:{control:"object",description:"Biểu tượng hiển thị ở cuối input"},labelPrefix:{control:"text",description:"Nhãn hiển thị ở đầu input"},labelSuffix:{control:"text",description:"Nhãn hiển thị ở cuối input"}}},n={args:{placeholder:"Nhập văn bản tại đây...",sizeInput:"md",readOnly:!1},parameters:{docs:{description:{story:"Input cơ bản với kích thước trung bình và chế độ có thể chỉnh sửa."}}}},e={args:{...n.args,iconPrefix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở đầu trường nhập liệu."}}}},i={args:{...n.args,iconPrefix:r.jsx(t,{}),labelPrefix:"prefix",typePrefix:"prefix"},parameters:{docs:{description:{story:"Input với icon và label prefix hiển thị ở đầu trường nhập liệu."}}}},o={args:{...n.args,iconPrefix:r.jsx(t,{}),labelPrefix:"Select",typePrefix:"dropdown"},parameters:{docs:{description:{story:"Input với kiểu dropdown hiển thị ở đầu trường nhập liệu."}}}},s={args:{...n.args,iconSuffix:r.jsx(t,{}),typeSuffix:"icon"},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cuối trường nhập liệu."}}}},c={args:{...n.args,iconSuffix:r.jsx(t,{}),typeSuffix:"suffix",labelSuffix:"suffix"},parameters:{docs:{description:{story:"Input với icon và label suffix  hiển thị ở cuối trường nhập liệu."}}}},a={args:{...n.args,typeSuffix:"dropdown",iconSuffix:r.jsx(t,{}),labelSuffix:"suffix",activeDropdown:!1},parameters:{docs:{description:{story:"Input với menu thả xuống ở cuối. Có thể mở/đóng dropdown bằng cách nhấp vào biểu tượng."}}}},p={args:{...n.args,readOnly:!0,value:"Đây là trường chỉ đọc"},parameters:{docs:{description:{story:"Input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa nội dung."}}}};var u,d,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Nhập văn bản tại đây...",
    sizeInput: "md",
    readOnly: false
  },
  parameters: {
    docs: {
      description: {
        story: "Input cơ bản với kích thước trung bình và chế độ có thể chỉnh sửa."
      }
    }
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,l,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,m,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconPrefix: <CategoryIcon />,
    labelPrefix: "prefix",
    typePrefix: "prefix"
  },
  parameters: {
    docs: {
      description: {
        story: "Input với icon và label prefix hiển thị ở đầu trường nhập liệu."
      }
    }
  }
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var b,v,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconPrefix: <CategoryIcon />,
    labelPrefix: "Select",
    typePrefix: "dropdown"
  },
  parameters: {
    docs: {
      description: {
        story: "Input với kiểu dropdown hiển thị ở đầu trường nhập liệu."
      }
    }
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,P,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconSuffix: <CategoryIcon />,
    typeSuffix: "icon"
  },
  parameters: {
    docs: {
      description: {
        story: "Input với biểu tượng hiển thị ở cuối trường nhập liệu."
      }
    }
  }
}`,...(w=(P=s.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,C,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconSuffix: <CategoryIcon />,
    typeSuffix: "suffix",
    labelSuffix: "suffix"
  },
  parameters: {
    docs: {
      description: {
        story: "Input với icon và label suffix  hiển thị ở cuối trường nhập liệu."
      }
    }
  }
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var j,k,O;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    typeSuffix: "dropdown",
    iconSuffix: <CategoryIcon />,
    labelSuffix: "suffix",
    activeDropdown: false
  },
  parameters: {
    docs: {
      description: {
        story: "Input với menu thả xuống ở cuối. Có thể mở/đóng dropdown bằng cách nhấp vào biểu tượng."
      }
    }
  }
}`,...(O=(k=a.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,F,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const q=["Default","WithPrefixIcon","WithTypePrefix","WithTypePrefixDropdown","WithSuffixIcon","WithTypeSuffix","WithDropdown","ReadOnly"];export{n as Default,p as ReadOnly,a as WithDropdown,e as WithPrefixIcon,s as WithSuffixIcon,i as WithTypePrefix,o as WithTypePrefixDropdown,c as WithTypeSuffix,q as __namedExportsOrder,X as default};
