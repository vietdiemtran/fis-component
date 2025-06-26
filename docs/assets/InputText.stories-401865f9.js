import{j as i}from"./jsx-runtime-47c18db8.js";import{c as J}from"./index-a38c623c.js";import{C as n}from"./LineArrowsUp-4acd88f0.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-a60d625b.js";import"./index-6b2c958e.js";import"./context-64a81616.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-b58ea5d4.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-4fe5a7ca.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-6b92031d.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-baad6b63.js";import"./index-ffeb7169.js";import"./index-63636042.js";import"./index-1275b512.js";import"./index-55dfab6c.js";import"./index-28483a77.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-90a26468.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-4280f93c.js";import"./collapse-8e27e3c5.js";import"./index-56009584.js";import"./index-8ba4b829.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-d8d722f1.js";import"./FISSorter-721bb526.js";import"./index-3406f63d.js";import"./index-55d04594.js";import"./index-d2a546a7.js";import"./index-eca51d54.js";const Xt={title:"components/Input/InputText",component:J,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:`
# InputText Component

InputText là một component input text đa năng với nhiều tính năng và tùy chọn tùy chỉnh.

## Tính năng chính:
- Hỗ trợ label và placeholder
- Có thể thêm icon ở prefix, suffix hoặc labelSuffix
- Hỗ trợ hiển thị đếm ký tự (character count)
- Có thể hiển thị thông báo gợi ý (hint message)
- Hỗ trợ các trạng thái: required, disabled, readOnly
- Có thể hiển thị trạng thái positive/negative
- Hỗ trợ dropdown suffix
- Có thể tùy chỉnh kích thước (md/lg)
        `}}},argTypes:{textLabel:{control:"text",description:"Label hiển thị cho trường input"},placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi trường input trống"},showCount:{control:"boolean",description:"Bật/tắt hiển thị đếm số ký tự"},sizeInput:{control:"radio",options:["md","lg"],description:"Kích thước của trường input (md: trung bình, lg: lớn)"},typeSuffix:{control:"radio",options:["icon","suffix","dropdown"],description:"Loại hậu tố hiển thị (icon: biểu tượng, suffix: văn bản, dropdown: menu thả xuống)"},message:{control:"text",description:"Thông báo gợi ý hiển thị bên dưới trường input"},required:{control:"boolean",description:"Đánh dấu trường input là bắt buộc"},disabled:{control:"boolean",description:"Vô hiệu hóa trường input (không thể tương tác)"},readOnly:{control:"boolean",description:"Chỉ cho phép đọc, không cho phép chỉnh sửa"},negative:{control:"boolean",description:"Hiển thị trạng thái tiêu cực (thường dùng cho thông báo lỗi)"},positive:{control:"boolean",description:"Hiển thị trạng thái tích cực (thường dùng cho thông báo thành công)"},value:{control:"text",description:"Giá trị hiện tại của trường input"},maxLength:{control:"number",description:"Số ký tự tối đa cho phép nhập"}}},t=Q=>i.jsx(J,{...Q}),e=t.bind({});e.args={textLabel:"Default Input",placeholder:"Type something...",iconPrefix:i.jsx(n,{}),iconLabel:i.jsx(n,{}),iconSuffix:i.jsx(n,{}),typeSuffix:"dropdown",labelSuffix:"suffix",sizeInput:"md",showCount:!0,required:!0,disabled:!1,type:"text",message:"Placeholder of hint text to help",readOnly:!1,negative:!1,positive:!1,maxLength:5};e.parameters={docs:{description:{story:`
### Input mặc định
Đây là ví dụ về input mặc định với đầy đủ các tính năng:
- Có label và placeholder
- Có icon ở prefix, label và suffix
- Có dropdown suffix
- Hiển thị đếm ký tự
- Là trường bắt buộc (required)
- Có thông báo gợi ý
- Giới hạn 100 ký tự
      `}}};const r=t.bind({});r.args={textLabel:"With Character Count",placeholder:"Type something...",showCount:!0,maxLength:50};r.parameters={docs:{description:{story:`
### Input với đếm ký tự
Ví dụ này minh họa cách sử dụng tính năng đếm ký tự:
- Hiển thị số ký tự đã nhập
- Giới hạn tối đa 50 ký tự
- Hiển thị cả số ký tự đã nhập và giới hạn tối đa
- Khi vượt quá giới hạn, số ký tự sẽ chuyển sang màu đỏ
      `}}};const o=t.bind({});o.args={textLabel:"With Hint Message",placeholder:"Type something...",message:"This is a helpful hint message"};o.parameters={docs:{description:{story:`
### Input với thông báo gợi ý
Ví dụ này minh họa cách thêm thông báo gợi ý:
- Hiển thị thông báo gợi ý bên dưới input
- Thông báo có thể giúp người dùng hiểu rõ hơn về trường input
- Có thể sử dụng cho các trường hợp validation hoặc hướng dẫn
      `}}};const s=t.bind({});s.args={textLabel:"Required Input",placeholder:"This field is required",required:!0};s.parameters={docs:{description:{story:`
### Input bắt buộc
Ví dụ này minh họa input bắt buộc:
- Hiển thị dấu * bên cạnh label để chỉ ra đây là trường bắt buộc
- Thường được sử dụng cho các trường thông tin quan trọng
- Có thể kết hợp với validation để đảm bảo người dùng nhập thông tin
      `}}};const a=t.bind({});a.args={textLabel:"Disabled Input",placeholder:"This input is disabled",disabled:!0,value:"Disabled value"};a.parameters={docs:{description:{story:`
### Input bị vô hiệu hóa
Ví dụ này minh họa input bị vô hiệu hóa:
- Input không thể tương tác (không thể nhập, xóa, focus)
- Có style riêng để chỉ ra trạng thái bị vô hiệu hóa
- Thường được sử dụng khi input phụ thuộc vào điều kiện khác
      `}}};const c=t.bind({});c.args={textLabel:"With Icon Prefix",placeholder:"Input with icon prefix",iconPrefix:i.jsx(n,{})};c.parameters={docs:{description:{story:`
### Input với icon prefix
Ví dụ này minh họa cách sử dụng icon prefix:
- Có thể thêm icon ở prefix (trước input)
- Icon có thể được sử dụng để cung cấp gợi ý trực quan
      `}}};const p=t.bind({});p.args={textLabel:"With Icon Suffix",placeholder:"Input with icon suffix",iconPrefix:i.jsx(n,{}),iconSuffix:i.jsx(n,{}),typeSuffix:"icon"};p.parameters={docs:{description:{story:`
### Input với icon suffix
Ví dụ này minh họa cách sử dụng icon:
- Có thể thêm icon ở prefix (trước input)
- Có thể thêm icon ở suffix (sau input)
- Icon có thể được sử dụng để cung cấp gợi ý trực quan
- IconSuffix có thể được click để thực hiện hành động
      `}}};const h=t.bind({});h.args={textLabel:"With Dropdown Suffix",placeholder:"Select an option",iconSuffix:i.jsx(n,{}),typeSuffix:"dropdown",labelSuffix:"Select"};h.parameters={docs:{description:{story:`
### Input với dropdown suffix
Ví dụ này minh họa cách sử dụng dropdown suffix:
- Có nút dropdown ở cuối input
- Có thể thêm icon ở suffix (sau input)
- Có thể thêm văn bản gợi ý ở suffix (sau input)
- Có thể kết hợp với các component select/dropdown khác
- Thường được sử dụng cho các trường có danh sách lựa chọn
- Có thể tùy chỉnh label của nút dropdown
      `}}};const u=t.bind({});u.args={textLabel:"With typeSuffix Suffix",placeholder:"Placeholder...",typeSuffix:"suffix",labelSuffix:"suffix",iconSuffix:i.jsx(n,{})};u.parameters={docs:{description:{story:`
### Input với typeSuffix suffix
Ví dụ này minh họa cách sử dụng typeSuffix suffix:
- Có thể thêm icon ở suffix (sau input)
- Có thể thêm văn bản gợi ý ở suffix (sau input)
      `}}};const d=t.bind({});d.args={textLabel:"Positive State",placeholder:"Valid input",positive:!0,message:"This is a valid input"};d.parameters={docs:{description:{story:`
### Input trạng thái tích cực
Ví dụ này minh họa input ở trạng thái tích cực:
- Thông báo gợi ý có màu xanh lá
- Thường được sử dụng để chỉ ra input hợp lệ
- Có thể kết hợp với validation để hiển thị kết quả tích cực
      `}}};const g=t.bind({});g.args={textLabel:"Negative State",placeholder:"Invalid input",negative:!0,message:"This input has an error"};g.parameters={docs:{description:{story:`
### Input trạng thái tiêu cực
Ví dụ này minh họa input ở trạng thái tiêu cực:
- Thông báo gợi ý có màu đỏ
- Thường được sử dụng để chỉ ra input không hợp lệ
- Có thể kết hợp với validation để hiển thị lỗi
- Viền input cũng có thể chuyển sang màu đỏ
      `}}};var m,l,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"args => <FISInputText {...args} />",...(f=(l=e.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var x,b,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"args => <FISInputText {...args} />",...(I=(b=r.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var S,v,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"args => <FISInputText {...args} />",...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,C,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"args => <FISInputText {...args} />",...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,L,W;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:"args => <FISInputText {...args} />",...(W=(L=a.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,H,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"args => <FISInputText {...args} />",...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var F,j,P;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:"args => <FISInputText {...args} />",...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var D,O,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:"args => <FISInputText {...args} />",...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var G,M,N;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:"args => <FISInputText {...args} />",...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var _,z,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:"args => <FISInputText {...args} />",...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var K,B,A;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:"args => <FISInputText {...args} />",...(A=(B=g.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const Yt=["Default","WithCharacterCount","WithHintMessage","Required","Disabled","WithIconPrefix","WithIconSuffix","WithDropdownSuffix","WithTypeSuffix","PositiveState","NegativeState"];export{e as Default,a as Disabled,g as NegativeState,d as PositiveState,s as Required,r as WithCharacterCount,h as WithDropdownSuffix,o as WithHintMessage,c as WithIconPrefix,p as WithIconSuffix,u as WithTypeSuffix,Yt as __namedExportsOrder,Xt as default};
