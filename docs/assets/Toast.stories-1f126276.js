import{j as t}from"./jsx-runtime-e7d94ccb.js";import{F as Y,a as tt}from"./ToastContext-505d0515.js";import{C as Z,P as ot,E as $,W as et}from"./InfoSolidIcon-78d566e9.js";import{F as nt}from"./index-3ff5a592.js";import{u as at}from"./useToast-b83de691.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";import"./index-df9a4235.js";import"./index-66039438.js";import"./index-f7beeda4.js";import"./index-dc16328d.js";const bt={title:"Components/Toast",component:Y,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[u=>t.jsx(tt,{children:t.jsx("div",{style:{width:"400px"},children:t.jsx(u,{})})})],argTypes:{theme:{control:"radio",options:["neutral","info","caution","positive","negative"],description:"Theme của toast, thể hiện trạng thái của thông báo. Mỗi theme có màu sắc và icon riêng để phân biệt loại thông báo",table:{defaultValue:{summary:"neutral"},type:{summary:"string"}}},type:{control:"radio",options:["link","button","no-action"],description:"Kiểu hành động trong toast. Có thể là link (chuyển hướng), button (thao tác) hoặc không có hành động",table:{defaultValue:{summary:"no-action"},type:{summary:"string"}}},actionPosition:{control:"radio",options:["inline","bottom"],description:"Vị trí của action. Inline: hiển thị cùng hàng với nội dung, bottom: hiển thị bên dưới nội dung",table:{defaultValue:{summary:"inline"},type:{summary:"string"}}},closable:{control:"boolean",description:"Cho phép đóng toast hay không. Khi true sẽ hiển thị nút đóng ở góc phải",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},iconLeft:{description:"Icon hiển thị bên trái của toast. Mặc định sẽ sử dụng icon tương ứng với theme",table:{type:{summary:"ReactNode"}}},title:{description:"Nội dung chính của toast. Nên viết ngắn gọn, rõ ràng và dễ hiểu",control:"text",table:{type:{summary:"string"}}},actionHref:{description:"URL cho action khi type là link. Khi click vào action sẽ chuyển hướng đến URL này",control:"text",table:{type:{summary:"string"}}},actionLabel:{description:"Label cho action khi type là link hoặc button. Nên viết ngắn gọn và mô tả rõ hành động",control:"text",table:{type:{summary:"string"}}},noIcon:{description:"Ẩn icon bên trái của toast. Mặc định là false",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},o=u=>t.jsx(Y,{...u}),e=o.bind({});e.args={iconLeft:t.jsx(Z,{}),title:"This is a default toast message",theme:"neutral",type:"button",actionLabel:"Undo",actionHref:"https://example.com",actionPosition:"inline"};e.parameters={docs:{description:{story:"Toast mặc định với theme neutral, không có hành động và có thể đóng được."}}};const l=()=>{const{showToast:u}=at();return t.jsx(nt,{onClick:()=>u({iconLeft:t.jsx(Z,{}),title:"This is a toast message",actionHref:"https://example.com",actionLabel:"Undo",theme:"info",type:"link",position:"top-center",actionPosition:"inline",duration:5e3}),children:"Show Toast"})};l.parameters={docs:{description:{story:`
Demo tương tác của Toast component sử dụng hook useToast. 
Khi click vào nút "Show Toast", một toast sẽ hiển thị với các thuộc tính:
- Icon bên trái (CategoryIcon)
- Nội dung thông báo
- Link action với label "Undo"
- Theme info
- Vị trí action inline
- Thời gian hiển thị 5 giây

Đây là ví dụ về cách tích hợp Toast vào component thực tế.
      `}}};const n=o.bind({});n.args={title:"Click here to view more information",theme:"info",type:"link",actionHref:"https://example.com",actionLabel:"View More"};n.parameters={docs:{description:{story:"Toast với link action, khi click vào 'View More' sẽ chuyển hướng đến URL được chỉ định."}}};const a=o.bind({});a.args={title:"Are you sure you want to proceed?",theme:"caution",type:"button",actionLabel:"Confirm"};a.parameters={docs:{description:{story:"Toast với button action, thường được sử dụng cho các thao tác xác nhận hoặc hủy bỏ."}}};const s=o.bind({});s.args={title:"This is a positive toast message",theme:"positive",type:"button",actionLabel:"View",iconLeft:t.jsx(ot,{})};s.parameters={docs:{description:{story:"Toast positive dùng theme positive và icon tích cực để thể hiện trạng thái thành công hoặc xác nhận."}}};const i=o.bind({});i.args={title:"This is a negative toast message",theme:"negative",type:"button",actionLabel:"Retry",iconLeft:t.jsx($,{})};i.parameters={docs:{description:{story:"Toast negative dùng theme negative và icon lỗi để thể hiện trạng thái thất bại hoặc cảnh báo nghiêm trọng."}}};const r=o.bind({});r.args={title:"This is a warning toast message",theme:"caution",type:"button",actionLabel:"Review",iconLeft:t.jsx(et,{})};r.parameters={docs:{description:{story:"Toast warning dùng theme caution và icon cảnh báo để nhấn mạnh trạng thái cần chú ý."}}};const c=o.bind({});c.args={title:"This is an error toast message",theme:"negative",type:"button",actionLabel:"Retry",iconLeft:t.jsx($,{})};c.parameters={docs:{description:{story:"Toast error dùng theme negative và icon lỗi để thể hiện trạng thái thất bại hoặc cần xử lý ngay."}}};const h=o.bind({});h.args={title:"Are you sure you want to proceed?",theme:"neutral",type:"button",actionLabel:"Confirm",noIcon:!0};h.parameters={docs:{description:{story:"Toast không có icon bên trái, phù hợp khi muốn giao diện đơn giản hơn."}}};const m=o.bind({});m.args={title:"Are you sure you want to proceed?",theme:"info",type:"button",actionLabel:"Confirm",closable:!1};m.parameters={docs:{description:{story:"Toast không có nút đóng, thường được sử dụng cho các thông báo quan trọng cần người dùng xác nhận."}}};const p=o.bind({});p.args={title:"Are you sure you want to proceed?",theme:"info",type:"no-action",closable:!1};p.parameters={docs:{description:{story:"Toast không có action và không thể đóng, thích hợp cho các thông báo đơn giản."}}};const g=o.bind({});g.args={title:"This toast has a bottom action",theme:"info",type:"button",actionLabel:"Take Action",actionPosition:"bottom"};g.parameters={docs:{description:{story:"Toast với action được đặt ở dưới nội dung, phù hợp khi nội dung dài hoặc cần nhấn mạnh action."}}};var d,b,y;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FISToast {...args} />",...(y=(b=e.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,f,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
    position: "top-center",
    actionPosition: "inline",
    duration: 5000
  })}>
      Show Toast
    </FISButton>;
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,S,I;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:"args => <FISToast {...args} />",...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var L,x,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:"args => <FISToast {...args} />",...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,F,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"args => <FISToast {...args} />",...(j=(F=s.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var N,B,P;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"args => <FISToast {...args} />",...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,A,R;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:"args => <FISToast {...args} />",...(R=(A=r.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var U,W,D;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:"args => <FISToast {...args} />",...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,H,M;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:"args => <FISToast {...args} />",...(M=(H=h.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var K,q,_;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:"args => <FISToast {...args} />",...(_=(q=m.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var O,z,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:"args => <FISToast {...args} />",...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:"args => <FISToast {...args} />",...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const yt=["Default","ToastDemo","WithLink","WithButton","Positive","Negative","Warning","Error","NoIcon","NoCloseButton","NoAction","BottomAction"];export{g as BottomAction,e as Default,c as Error,i as Negative,p as NoAction,m as NoCloseButton,h as NoIcon,s as Positive,l as ToastDemo,r as Warning,a as WithButton,n as WithLink,yt as __namedExportsOrder,bt as default};
