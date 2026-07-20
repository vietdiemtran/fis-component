import{j as t}from"./jsx-runtime-e7d94ccb.js";import{F as m}from"./index-26cd4491.js";import{C as n}from"./InfoSolidIcon-78d566e9.js";import"./index-981f9478.js";import"./index-f7beeda4.js";import"./styles-eb3881e5.js";import"./getTheme-9564f801.js";import"./index-00a7ff96.js";import"./index-df9a4235.js";import"./index-66039438.js";import"./index-0687b645.js";import"./mergeRefs-3d2b51f8.js";const ut={title:"components/Input/InputText",component:m,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:`
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
        `}}},argTypes:{textLabel:{control:"text",description:"Label hiển thị cho trường input"},placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi trường input trống"},showCount:{control:"boolean",description:"Bật/tắt hiển thị đếm số ký tự"},sizeInput:{control:"radio",options:["md","lg"],description:"Kích thước của trường input (md: trung bình, lg: lớn)"},typeSuffix:{control:"radio",options:["icon","suffix","dropdown"],description:"Loại hậu tố hiển thị (icon: biểu tượng, suffix: văn bản, dropdown: menu thả xuống)"},message:{control:"text",description:"Thông báo gợi ý hiển thị bên dưới trường input"},required:{control:"boolean",description:"Đánh dấu trường input là bắt buộc"},disabled:{control:"boolean",description:"Vô hiệu hóa trường input (không thể tương tác)"},readOnly:{control:"boolean",description:"Chỉ cho phép đọc, không cho phép chỉnh sửa"},negative:{control:"boolean",description:"Hiển thị trạng thái tiêu cực (thường dùng cho thông báo lỗi)"},positive:{control:"boolean",description:"Hiển thị trạng thái tích cực (thường dùng cho thông báo thành công)"},value:{control:"text",description:"Giá trị hiện tại của trường input"},maxLength:{control:"number",description:"Số ký tự tối đa cho phép nhập"},typePrefix:{control:"radio",options:["prefix","dropdown"],description:"Loại phần tử ở đầu input (prefix hoặc dropdown)"},labelPrefix:{control:"text",description:"Nhãn hiển thị ở đầu input"},labelSuffix:{control:"text",description:"Nhãn hiển thị ở cuối input"},isTrimValue:{control:"boolean",description:"Tự động cắt khoảng trắng đầu/cuối khi blur"},type:{control:"text",description:"Kiểu input HTML (text, password, number...)"},iconPrefix:{control:!1,description:"Icon ở đầu input"},iconLabel:{control:!1,description:"Icon cạnh label"},iconSuffix:{control:!1,description:"Icon ở cuối input"},onEnter:{action:"enter",description:"Callback khi nhấn Enter"}}},e=Z=>t.jsx(m,{...Z}),i=e.bind({});i.args={textLabel:"Default Input",placeholder:"Type something...",iconPrefix:t.jsx(n,{}),iconLabel:t.jsx(n,{}),iconSuffix:t.jsx(n,{}),typeSuffix:"dropdown",labelSuffix:"suffix",sizeInput:"md",showCount:!0,required:!0,disabled:!1,type:"text",message:"Placeholder of hint text to help",readOnly:!1,negative:!1,positive:!1,maxLength:5};i.parameters={docs:{description:{story:`
### Input mặc định
Đây là ví dụ về input mặc định với đầy đủ các tính năng:
- Có label và placeholder
- Có icon ở prefix, label và suffix
- Có dropdown suffix
- Hiển thị đếm ký tự
- Là trường bắt buộc (required)
- Có thông báo gợi ý
- Giới hạn 100 ký tự
      `}}};const r=e.bind({});r.args={textLabel:"With Character Count",placeholder:"Type something...",showCount:!0,maxLength:50};r.parameters={docs:{description:{story:`
### Input với đếm ký tự
Ví dụ này minh họa cách sử dụng tính năng đếm ký tự:
- Hiển thị số ký tự đã nhập
- Giới hạn tối đa 50 ký tự
- Hiển thị cả số ký tự đã nhập và giới hạn tối đa
- Khi vượt quá giới hạn, số ký tự sẽ chuyển sang màu đỏ
      `}}};const o=e.bind({});o.args={textLabel:"With Hint Message",placeholder:"Type something...",message:"This is a helpful hint message"};o.parameters={docs:{description:{story:`
### Input với thông báo gợi ý
Ví dụ này minh họa cách thêm thông báo gợi ý:
- Hiển thị thông báo gợi ý bên dưới input
- Thông báo có thể giúp người dùng hiểu rõ hơn về trường input
- Có thể sử dụng cho các trường hợp validation hoặc hướng dẫn
      `}}};const s=e.bind({});s.args={textLabel:"Required Input",placeholder:"This field is required",required:!0};s.parameters={docs:{description:{story:`
### Input bắt buộc
Ví dụ này minh họa input bắt buộc:
- Hiển thị dấu * bên cạnh label để chỉ ra đây là trường bắt buộc
- Thường được sử dụng cho các trường thông tin quan trọng
- Có thể kết hợp với validation để đảm bảo người dùng nhập thông tin
      `}}};const a=e.bind({});a.args={textLabel:"Disabled Input",placeholder:"This input is disabled",disabled:!0,value:"Disabled value"};a.parameters={docs:{description:{story:`
### Input bị vô hiệu hóa
Ví dụ này minh họa input bị vô hiệu hóa:
- Input không thể tương tác (không thể nhập, xóa, focus)
- Có style riêng để chỉ ra trạng thái bị vô hiệu hóa
- Thường được sử dụng khi input phụ thuộc vào điều kiện khác
      `}}};const c=e.bind({});c.args={textLabel:"With Icon Prefix",placeholder:"Input with icon prefix",iconPrefix:t.jsx(n,{})};c.parameters={docs:{description:{story:`
### Input với icon prefix
Ví dụ này minh họa cách sử dụng icon prefix:
- Có thể thêm icon ở prefix (trước input)
- Icon có thể được sử dụng để cung cấp gợi ý trực quan
      `}}};const h=e.bind({});h.args={textLabel:"With Icon Suffix",placeholder:"Input with icon suffix",iconPrefix:t.jsx(n,{}),iconSuffix:t.jsx(n,{}),typeSuffix:"icon"};h.parameters={docs:{description:{story:`
### Input với icon suffix
Ví dụ này minh họa cách sử dụng icon:
- Có thể thêm icon ở prefix (trước input)
- Có thể thêm icon ở suffix (sau input)
- Icon có thể được sử dụng để cung cấp gợi ý trực quan
- IconSuffix có thể được click để thực hiện hành động
      `}}};const p=e.bind({});p.args={textLabel:"With Dropdown Suffix",placeholder:"Select an option",iconSuffix:t.jsx(n,{}),typeSuffix:"dropdown",labelSuffix:"Select"};p.parameters={docs:{description:{story:`
### Input với dropdown suffix
Ví dụ này minh họa cách sử dụng dropdown suffix:
- Có nút dropdown ở cuối input
- Có thể thêm icon ở suffix (sau input)
- Có thể thêm văn bản gợi ý ở suffix (sau input)
- Có thể kết hợp với các component select/dropdown khác
- Thường được sử dụng cho các trường có danh sách lựa chọn
- Có thể tùy chỉnh label của nút dropdown
      `}}};const u=e.bind({});u.args={textLabel:"With typeSuffix Suffix",placeholder:"Placeholder...",typeSuffix:"suffix",labelSuffix:"suffix",iconSuffix:t.jsx(n,{})};u.parameters={docs:{description:{story:`
### Input với typeSuffix suffix
Ví dụ này minh họa cách sử dụng typeSuffix suffix:
- Có thể thêm icon ở suffix (sau input)
- Có thể thêm văn bản gợi ý ở suffix (sau input)
      `}}};const d=e.bind({});d.args={textLabel:"Positive State",placeholder:"Valid input",positive:!0,message:"This is a valid input"};d.parameters={docs:{description:{story:`
### Input trạng thái tích cực
Ví dụ này minh họa input ở trạng thái tích cực:
- Thông báo gợi ý có màu xanh lá
- Thường được sử dụng để chỉ ra input hợp lệ
- Có thể kết hợp với validation để hiển thị kết quả tích cực
      `}}};const g=()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsx(m,{textLabel:"Medium (md)",placeholder:"md",sizeInput:"md"}),t.jsx(m,{textLabel:"Large (lg)",placeholder:"lg",sizeInput:"lg"})]});g.parameters={docs:{description:{story:"Hai kích thước của input: `md` (trung bình) và `lg` (lớn)."}}};const l=e.bind({});l.args={textLabel:"Negative State",placeholder:"Invalid input",negative:!0,message:"This input has an error"};l.parameters={docs:{description:{story:`
### Input trạng thái tiêu cực
Ví dụ này minh họa input ở trạng thái tiêu cực:
- Thông báo gợi ý có màu đỏ
- Thường được sử dụng để chỉ ra input không hợp lệ
- Có thể kết hợp với validation để hiển thị lỗi
- Viền input cũng có thể chuyển sang màu đỏ
      `}}};var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <FISInputText {...args} />",...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var I,S,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:"args => <FISInputText {...args} />",...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,T,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"args => <FISInputText {...args} />",...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var k,L,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:"args => <FISInputText {...args} />",...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var W,H,F;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:"args => <FISInputText {...args} />",...(F=(H=a.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var V,j,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"args => <FISInputText {...args} />",...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var P,D,z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:"args => <FISInputText {...args} />",...(z=(D=h.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var M,N,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"args => <FISInputText {...args} />",...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var O,R,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:"args => <FISInputText {...args} />",...(G=(R=u.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var K,_,B;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:"args => <FISInputText {...args} />",...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var A,J,Q;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 16
}}>
    <FISInputText textLabel="Medium (md)" placeholder="md" sizeInput="md" />
    <FISInputText textLabel="Large (lg)" placeholder="lg" sizeInput="lg" />
  </div>`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:"args => <FISInputText {...args} />",...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const dt=["Default","WithCharacterCount","WithHintMessage","Required","Disabled","WithIconPrefix","WithIconSuffix","WithDropdownSuffix","WithTypeSuffix","PositiveState","Sizes","NegativeState"];export{i as Default,a as Disabled,l as NegativeState,d as PositiveState,s as Required,g as Sizes,r as WithCharacterCount,p as WithDropdownSuffix,o as WithHintMessage,c as WithIconPrefix,h as WithIconSuffix,u as WithTypeSuffix,dt as __namedExportsOrder,ut as default};
