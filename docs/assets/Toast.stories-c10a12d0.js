import{j as e}from"./jsx-runtime-47c18db8.js";import{a as m,F as p}from"./ToastContext-c25356e0.js";import{C as l}from"./ArrowRightIcon-bbccecc9.js";import{r as u}from"./index-d806aa85.js";import{F as d}from"./index-89102280.js";import"./getTheme-21dde6f8.js";import"./index-1a7e3c5d.js";import"./index-d16835b1.js";import"./index-b93fec4e.js";const g=()=>{const t=u.useContext(m);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},I={title:"Components/Toast",component:p,tags:["autodocs"],argTypes:{theme:{control:{type:"radio"},options:["neutral","info","caution","positive","negative"],description:"Xác định theme của toast, thể hiện trạng thái của thông báo."},type:{control:{type:"radio"},options:["link","button","no-action"],description:"Xác định kiểu hành động trong toast. Có thể là một liên kết (`link`), một  (`button`), hoặc không có hành động (`no-action`)."},actionPosition:{control:{type:"radio"},options:["inline","bottom"],description:"Xác định vị trí action trong toast. `'inline'` đặt bên cạnh nội dung, còn `'bottom'` đặt bên dưới."},closable:{control:{type:"boolean"},defaultValue:!0,description:"Xác định Toast có thể đóng được hay không."},iconLeft:{description:"Icon hiển thị bên trái của toast, có thể tùy chỉnh."},title:{description:"Nội dung chính của toast."},actionHref:{description:"Đường dẫn URL của hành động khi `type` là `link`"},actionLabel:{description:"Label hiển thị cho hành động khi `type` là `link` hoặc `button`."}}},T=t=>e.jsx(p,{...t}),o=T.bind({});o.args={iconLeft:e.jsx(l,{}),title:"This is a toast message",actionHref:"https://example.com",actionLabel:"Undo",theme:"neutral",type:"link",actionPosition:"inline"};const n=()=>{const{showToast:t}=g();return e.jsx(d,{onClick:()=>t({iconLeft:e.jsx(l,{}),title:"This is a toast message",actionHref:"https://example.com",actionLabel:"Undo",theme:"info",type:"link",actionPosition:"inline",duration:5e3}),children:"Show Toast"})};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <FISToast {...args} />",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var r,c,h;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const F=["Default","ToastDemo"];export{o as Default,n as ToastDemo,F as __namedExportsOrder,I as default};
