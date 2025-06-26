import{j as o}from"./jsx-runtime-47c18db8.js";import{u as g}from"./useNotification-dd671059.js";import{F as h}from"./index-b5e68206.js";import"./index-d806aa85.js";import"./context-64a81616.js";import"./getTheme-624682de.js";import"./index-fc91568f.js";import"./index-96f4e19f.js";import"./index-8298a7d1.js";import"./LineArrowsUp-4acd88f0.js";import"./AntdIcon-b5d0c52f.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";const Q={title:"Components/Notification/System Update",tags:["autodocs"],args:{title:"System Maintenance",description:"Scheduled maintenance at 2 AM. Check out the all new dashboard view Pages and exports now load faster.",duration:5,okText:"ChangeLog",cancelText:"Dismiss",imgUrl:"https://s3-alpha-sig.figma.com/img/2252/7f4a/c2141526c46d5a7398a30d2c10fb7db7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q0-Q-cwPqmeEKNs4YjxavQjmrPcjOC00aG4gf1vm2IVhMfrVEQpJXu7DG-bh1QLBrjOWqIcNpJdd9vS80FFEKo2ofY2Yn6BHPcZZjwSQ0REhf7-sXKziX~GHT46zq0Aqd5NJaF-EvjayOhYYu0HvoyPAag9aI4iXozcPLBHFA8y1w0UEVYf10Yu7C5eXV6AbNBQkEoXzRsB8tPK~sKu6wEnuFyXIE384QiCIG8f8m3ZRGPDtO-hwySdNJ0qVdq-yznrLNemsgCC~JmMQ33ASbeXOyRZP28REO8e7s6L93LHDHbgPDJj4DoofWcMk5qHGRNuACaMxYeywrb~ct4lYJA__",onOk:()=>{},onCancel:()=>{}},argTypes:{title:{control:"text",description:"Tiêu đề của thông báo"},description:{control:"text",description:"Nội dung thông báo"},duration:{control:"number",description:"Thời gian hiển thị (giây)"},imgUrl:{control:"text",description:"URL ảnh thông báo"},okText:{control:"text",description:"Text Change Log"},cancelText:{control:"text",description:"Text Dismiss"},onOk:{action:"onOk"},onCancel:{action:"onCancel"}}},t=({title:r,description:a,duration:c,imgUrl:s,okText:m,cancelText:d,onOk:p,onCancel:l})=>{const u=g();return o.jsx("div",{children:o.jsx(h,{onClick:()=>u.notificationWithImage({title:r,description:a,duration:c,imgUrl:s,okText:m,cancelText:d,onOk:p,onCancel:l}),children:"Show System Update"})})};var n,i,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  title,
  description,
  duration,
  imgUrl,
  okText,
  cancelText,
  onOk,
  onCancel
}) => {
  const notification = useNotification();
  return <div>
      <FISButton onClick={() => notification.notificationWithImage({
      title,
      description,
      duration,
      imgUrl,
      okText,
      cancelText,
      onOk,
      onCancel
    })}>
        Show System Update
      </FISButton>
    </div>;
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,Q as default};
