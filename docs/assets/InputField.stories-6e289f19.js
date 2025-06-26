import{j as r}from"./jsx-runtime-47c18db8.js";import{b as z}from"./index-a38c623c.js";import{C as t}from"./LineArrowsUp-4acd88f0.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-a60d625b.js";import"./index-6b2c958e.js";import"./context-64a81616.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-b58ea5d4.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-4fe5a7ca.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-6b92031d.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-baad6b63.js";import"./index-ffeb7169.js";import"./index-63636042.js";import"./index-1275b512.js";import"./index-55dfab6c.js";import"./index-28483a77.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-90a26468.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-4280f93c.js";import"./collapse-8e27e3c5.js";import"./index-56009584.js";import"./index-8ba4b829.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-d8d722f1.js";import"./FISSorter-721bb526.js";import"./index-3406f63d.js";import"./index-55d04594.js";import"./index-d2a546a7.js";import"./index-eca51d54.js";const En={title:"Components/Input/InputField",component:z,tags:["autodocs"],parameters:{controls:{expanded:!0},layout:"centered",docs:{description:{component:"Component InputField là một trường nhập liệu tùy chỉnh với nhiều tùy chọn về giao diện và chức năng. Nó hỗ trợ thêm icon, dropdown, và label ở cả đầu và cuối input."}}},argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi input trống"},activeDropdown:{control:"boolean",description:"Xác định trạng thái mở/đóng của dropdown"},sizeInput:{control:"radio",options:["md","lg"],description:"Kích thước của input: md (trung bình) hoặc lg (lớn)"},readOnly:{control:"boolean",description:"Đặt input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa"},typeSuffix:{control:"radio",options:["icon","suffix","dropdown"],description:"Loại phần tử ở cuối input: icon (biểu tượng), suffix (hậu tố), hoặc dropdown (menu thả xuống)"},typePrefix:{control:"radio",options:["prefix","dropdown"],description:"Loại phần tử ở đầu input: prefix (tiền tố) hoặc dropdown (menu thả xuống)"},value:{control:"text",description:"Giá trị hiện tại của input"},iconPrefix:{control:"object",description:"Biểu tượng hiển thị ở đầu input"},iconSuffix:{control:"object",description:"Biểu tượng hiển thị ở cuối input"},labelPrefix:{control:"text",description:"Nhãn hiển thị ở đầu input"},labelSuffix:{control:"text",description:"Nhãn hiển thị ở cuối input"}}},n={args:{placeholder:"Nhập văn bản tại đây...",sizeInput:"md",readOnly:!1},parameters:{docs:{description:{story:"Input cơ bản với kích thước trung bình và chế độ có thể chỉnh sửa."}}}},i={args:{...n.args,iconPrefix:r.jsx(t,{})},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở đầu trường nhập liệu."}}}},o={args:{...n.args,iconPrefix:r.jsx(t,{}),labelPrefix:"prefix",typePrefix:"prefix"},parameters:{docs:{description:{story:"Input với icon và label prefix hiển thị ở đầu trường nhập liệu."}}}},e={args:{...n.args,iconPrefix:r.jsx(t,{}),labelPrefix:"Select",typePrefix:"dropdown"},parameters:{docs:{description:{story:"Input với kiểu dropdown hiển thị ở đầu trường nhập liệu."}}}},p={args:{...n.args,iconSuffix:r.jsx(t,{}),typeSuffix:"icon"},parameters:{docs:{description:{story:"Input với biểu tượng hiển thị ở cuối trường nhập liệu."}}}},s={args:{...n.args,iconSuffix:r.jsx(t,{}),typeSuffix:"suffix",labelSuffix:"suffix"},parameters:{docs:{description:{story:"Input với icon và label suffix  hiển thị ở cuối trường nhập liệu."}}}},c={args:{...n.args,typeSuffix:"dropdown",iconSuffix:r.jsx(t,{}),labelSuffix:"suffix",activeDropdown:!1},parameters:{docs:{description:{story:"Input với menu thả xuống ở cuối. Có thể mở/đóng dropdown bằng cách nhấp vào biểu tượng."}}}},a={args:{...n.args,readOnly:!0,value:"Đây là trường chỉ đọc"},parameters:{docs:{description:{story:"Input ở chế độ chỉ đọc, người dùng không thể chỉnh sửa nội dung."}}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,f,l;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(l=(f=i.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,v,I;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(v=e.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,P,w;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,C,W;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(C=s.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var j,k,O;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,N,F;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(N=a.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const Ln=["Default","WithPrefixIcon","WithTypePrefix","WithTypePrefixDropdown","WithSuffixIcon","WithTypeSuffix","WithDropdown","ReadOnly"];export{n as Default,a as ReadOnly,c as WithDropdown,i as WithPrefixIcon,p as WithSuffixIcon,o as WithTypePrefix,e as WithTypePrefixDropdown,s as WithTypeSuffix,Ln as __namedExportsOrder,En as default};
