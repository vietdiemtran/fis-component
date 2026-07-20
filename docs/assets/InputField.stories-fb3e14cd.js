import{j as r}from"./jsx-runtime-e7d94ccb.js";import{F as A}from"./index-0687b645.js";import{C as t}from"./InfoSolidIcon-78d566e9.js";import"./index-981f9478.js";import"./index-f7beeda4.js";import"./getTheme-9564f801.js";import"./index-df9a4235.js";import"./index-66039438.js";const rn={title:"Components/Input/InputField",component:A,tags:["autodocs"],parameters:{controls:{expanded:!0},layout:"centered",docs:{description:{component:"Component InputField là một trường nhập liệu tùy chỉnh với nhiều tùy chọn về giao diện và chức năng. Nó hỗ trợ thêm icon, dropdown, và label ở cả đầu và cuối input."}}},argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi input trống"},activeDropdown:{control:"boolean",description:"Xác định trạng thái mở/đóng của dropdown"},sizeInput:{control:"radio",options:["md","lg"],description:"Kích thước của input: md (trung bình) hoặc lg (lớn)"},readOnly:{control:"boolean",description:"Đặt input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa"},typeSuffix:{control:"radio",options:["icon","suffix","dropdown"],description:"Loại phần tử ở cuối input: icon (biểu tượng), suffix (hậu tố), hoặc dropdown (menu thả xuống)"},typePrefix:{control:"radio",options:["prefix","dropdown"],description:"Loại phần tử ở đầu input: prefix (tiền tố) hoặc dropdown (menu thả xuống)"},value:{control:"text",description:"Giá trị hiện tại của input"},iconPrefix:{control:"object",description:"Biểu tượng hiển thị ở đầu input"},iconSuffix:{control:"object",description:"Biểu tượng hiển thị ở cuối input"},labelPrefix:{control:"text",description:"Nhãn hiển thị ở đầu input"},labelSuffix:{control:"text",description:"Nhãn hiển thị ở cuối input"},disabled:{control:"boolean",description:"Vô hiệu hóa input, người dùng không thể tương tác"},negative:{control:"boolean",description:"Hiển thị trạng thái lỗi với viền đỏ"}}},n={args:{placeholder:"Nhập văn bản tại đây...",sizeInput:"md",readOnly:!1},parameters:{docs:{description:{story:"Input cơ bản với kích thước trung bình và chế độ có thể chỉnh sửa."}}}},e={args:{...n.args,iconPrefix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở đầu trường nhập liệu."}}}},i={args:{...n.args,iconPrefix:r.jsx(t,{}),labelPrefix:"prefix",typePrefix:"prefix"},parameters:{docs:{description:{story:"Input với icon và label prefix hiển thị ở đầu trường nhập liệu."}}}},o={args:{...n.args,iconPrefix:r.jsx(t,{}),labelPrefix:"Select",typePrefix:"dropdown"},parameters:{docs:{description:{story:"Input với kiểu dropdown hiển thị ở đầu trường nhập liệu."}}}},s={args:{...n.args,iconSuffix:r.jsx(t,{}),typeSuffix:"icon"},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cuối trường nhập liệu."}}}},a={args:{...n.args,iconSuffix:r.jsx(t,{}),typeSuffix:"suffix",labelSuffix:"suffix"},parameters:{docs:{description:{story:"Input với icon và label suffix  hiển thị ở cuối trường nhập liệu."}}}},c={args:{...n.args,typeSuffix:"dropdown",iconSuffix:r.jsx(t,{}),labelSuffix:"suffix",activeDropdown:!1},parameters:{docs:{description:{story:"Input với menu thả xuống ở cuối. Có thể mở/đóng dropdown bằng cách nhấp vào biểu tượng."}}}},p={args:{...n.args,readOnly:!0,value:"Đây là trường chỉ đọc"},parameters:{docs:{description:{story:"Input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa nội dung."}}}},u={args:{...n.args,disabled:!0,value:"Không thể chỉnh sửa"},parameters:{docs:{description:{story:"Input bị vô hiệu hóa, không thể tương tác."}}}},d={args:{...n.args,negative:!0,value:"Giá trị không hợp lệ"},parameters:{docs:{description:{story:"Input ở trạng thái lỗi với viền đỏ."}}}},h={args:{...n.args,sizeInput:"lg",iconPrefix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với kích thước lớn (`lg`)."}}}};var g,l,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var m,x,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,b,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var S,P,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(P=o.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,k,C;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var W,j,O;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(j=a.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var z,N,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var F,L,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(L=p.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var K,R,B;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: "Không thể chỉnh sửa"
  },
  parameters: {
    docs: {
      description: {
        story: "Input bị vô hiệu hóa, không thể tương tác."
      }
    }
  }
}`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var E,V,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    negative: true,
    value: "Giá trị không hợp lệ"
  },
  parameters: {
    docs: {
      description: {
        story: "Input ở trạng thái lỗi với viền đỏ."
      }
    }
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,X,q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeInput: "lg",
    iconPrefix: <CategoryIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Input với kích thước lớn (\`lg\`)."
      }
    }
  }
}`,...(q=(X=h.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const tn=["Default","WithPrefixIcon","WithTypePrefix","WithTypePrefixDropdown","WithSuffixIcon","WithTypeSuffix","WithDropdown","ReadOnly","Disabled","Negative","LargeSize"];export{n as Default,u as Disabled,h as LargeSize,d as Negative,p as ReadOnly,c as WithDropdown,e as WithPrefixIcon,s as WithSuffixIcon,i as WithTypePrefix,o as WithTypePrefixDropdown,a as WithTypeSuffix,tn as __namedExportsOrder,rn as default};
