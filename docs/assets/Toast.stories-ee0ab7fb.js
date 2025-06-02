import{j as o}from"./jsx-runtime-47c18db8.js";import{a as H,F as U,T as M}from"./ToastContext-471072df.js";import{C as D}from"./RemoveIcon-d554efb7.js";import{r as R}from"./index-d806aa85.js";import{F as E}from"./index-bf6eddb1.js";import"./getTheme-624682de.js";import"./index-e72c950e.js";import"./index-8298a7d1.js";import"./index-d16835b1.js";import"./index-5e805f35.js";const K=()=>{const t=R.useContext(H);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},Z={title:"Components/Toast",component:U,tags:["autodocs"],parameters:{docs:{description:{component:`
Toast là một component thông báo tạm thời hiển thị thông tin quan trọng hoặc cập nhật trạng thái cho người dùng.
Component này có thể được sử dụng để hiển thị thông báo thành công, cảnh báo, lỗi hoặc thông tin thông thường.

### Cách sử dụng
\`\`\`jsx
import { useToast } from './useToast';

function ToastDemo() {
  const { showToast } = useToast();
  
  return (
    <FISButton
      onClick={() =>
        showToast({
          iconLeft: <CategoryIcon />,
          title: "This is a toast message",
          actionHref: "https://example.com",
          actionLabel: "Undo",
          theme: "info",
          type: "link",
          actionPosition: "inline",
          duration: 5000,
        })
      }
    >
      Show Toast
    </FISButton>
  );
}
\`\`\`
        `}}},decorators:[t=>o.jsx(M,{children:o.jsx("div",{style:{width:"400px"},children:o.jsx(t,{})})})],argTypes:{theme:{control:"radio",options:["neutral","info","caution","positive","negative"],description:"Theme của toast, thể hiện trạng thái của thông báo. Mỗi theme có màu sắc và icon riêng để phân biệt loại thông báo",table:{defaultValue:{summary:"neutral"},type:{summary:"string"}}},type:{control:"radio",options:["link","button","no-action"],description:"Kiểu hành động trong toast. Có thể là link (chuyển hướng), button (thao tác) hoặc không có hành động",table:{defaultValue:{summary:"no-action"},type:{summary:"string"}}},actionPosition:{control:"radio",options:["inline","bottom"],description:"Vị trí của action. Inline: hiển thị cùng hàng với nội dung, bottom: hiển thị bên dưới nội dung",table:{defaultValue:{summary:"inline"},type:{summary:"string"}}},closable:{control:"boolean",description:"Cho phép đóng toast hay không. Khi true sẽ hiển thị nút đóng ở góc phải",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},iconLeft:{description:"Icon hiển thị bên trái của toast. Mặc định sẽ sử dụng icon tương ứng với theme",table:{type:{summary:"ReactNode"}}},title:{description:"Nội dung chính của toast. Nên viết ngắn gọn, rõ ràng và dễ hiểu",control:"text",table:{type:{summary:"string"}}},actionHref:{description:"URL cho action khi type là link. Khi click vào action sẽ chuyển hướng đến URL này",control:"text",table:{type:{summary:"string"}}},actionLabel:{description:"Label cho action khi type là link hoặc button. Nên viết ngắn gọn và mô tả rõ hành động",control:"text",table:{type:{summary:"string"}}},noIcon:{description:"Ẩn icon bên trái của toast. Mặc định là false",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},n=t=>o.jsx(U,{...t}),e=n.bind({});e.args={iconLeft:o.jsx(D,{}),title:"This is a default toast message",theme:"neutral",type:"button",actionLabel:"Undo",actionHref:"https://example.com",actionPosition:"inline"};e.parameters={docs:{description:{story:"Toast mặc định với theme neutral, không có hành động và có thể đóng được."}}};const m=()=>{const{showToast:t}=K();return o.jsx(E,{onClick:()=>t({iconLeft:o.jsx(D,{}),title:"This is a toast message",actionHref:"https://example.com",actionLabel:"Undo",theme:"info",type:"link",actionPosition:"inline",duration:5e3}),children:"Show Toast"})};m.parameters={docs:{description:{story:`
Demo tương tác của Toast component sử dụng hook useToast. 
Khi click vào nút "Show Toast", một toast sẽ hiển thị với các thuộc tính:
- Icon bên trái (CategoryIcon)
- Nội dung thông báo
- Link action với label "Undo"
- Theme info
- Vị trí action inline
- Thời gian hiển thị 5 giây

Đây là ví dụ về cách tích hợp Toast vào component thực tế.
      `}}};const a=n.bind({});a.args={title:"Click here to view more information",theme:"info",type:"link",actionHref:"https://example.com",actionLabel:"View More"};a.parameters={docs:{description:{story:"Toast với link action, khi click vào 'View More' sẽ chuyển hướng đến URL được chỉ định."}}};const s=n.bind({});s.args={title:"Are you sure you want to proceed?",theme:"caution",type:"button",actionLabel:"Confirm"};s.parameters={docs:{description:{story:"Toast với button action, thường được sử dụng cho các thao tác xác nhận hoặc hủy bỏ."}}};const i=n.bind({});i.args={title:"Are you sure you want to proceed?",theme:"neutral",type:"button",actionLabel:"Confirm",noIcon:!0};i.parameters={docs:{description:{story:"Toast không có icon bên trái, phù hợp khi muốn giao diện đơn giản hơn."}}};const r=n.bind({});r.args={title:"Are you sure you want to proceed?",theme:"info",type:"button",actionLabel:"Confirm",closable:!1};r.parameters={docs:{description:{story:"Toast không có nút đóng, thường được sử dụng cho các thông báo quan trọng cần người dùng xác nhận."}}};const c=n.bind({});c.args={title:"Are you sure you want to proceed?",theme:"info",type:"no-action",closable:!1};c.parameters={docs:{description:{story:"Toast không có action và không thể đóng, thích hợp cho các thông báo đơn giản."}}};const h=n.bind({});h.args={title:"This toast has a bottom action",theme:"info",type:"button",actionLabel:"Take Action",actionPosition:"bottom"};h.parameters={docs:{description:{story:"Toast với action được đặt ở dưới nội dung, phù hợp khi nội dung dài hoặc cần nhấn mạnh action."}}};var p,u,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"args => <FISToast {...args} />",...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,d,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    showToast
  } = useToast();
  return <FISButton onClick={() => showToast({
    iconLeft: <CategoryIcon />,
    title: "This is a toast message",
    actionHref: "https://example.com",
    actionLabel: "Undo",
    theme: "info",
    type: "link",
    actionPosition: "inline",
    duration: 5000
  })}>
      Show Toast
    </FISButton>;
}`,...(y=(d=m.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,T,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <FISToast {...args} />",...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var k,v,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:"args => <FISToast {...args} />",...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,I,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"args => <FISToast {...args} />",...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var C,w,F;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:"args => <FISToast {...args} />",...(F=(w=r.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var B,N,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:"args => <FISToast {...args} />",...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var A,V,P;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:"args => <FISToast {...args} />",...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const $=["Default","ToastDemo","WithLink","WithButton","NoIcon","NoCloseButton","NoAction","BottomAction"];export{h as BottomAction,e as Default,c as NoAction,r as NoCloseButton,i as NoIcon,m as ToastDemo,s as WithButton,a as WithLink,$ as __namedExportsOrder,Z as default};
