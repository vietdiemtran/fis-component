import{j as o}from"./jsx-runtime-e7d94ccb.js";import{u as g}from"./useNotification-23d8d275.js";import{F as h}from"./index-d70c9a74.js";import"./index-981f9478.js";import"./context-0e70691a.js";import"./getTheme-6566e1e9.js";import"./index-d503b2ac.js";import"./index-ba8cec51.js";import"./index-4bd6e544.js";import"./LineArrowsUp-2da65544.js";import"./AntdIcon-f4bdc331.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./UnstableContext-9c4aba24.js";import"./useCSSVarCls-3d3c191f.js";import"./KeyCode-6413d982.js";import"./pickAttrs-397aa285.js";const Q={title:"Components/Notification/System Update",tags:["autodocs"],args:{title:"System Maintenance",description:"Scheduled maintenance at 2 AM. Check out the all new dashboard view Pages and exports now load faster.",duration:5,okText:"ChangeLog",cancelText:"Dismiss",imgUrl:"https://s3-alpha-sig.figma.com/img/2252/7f4a/c2141526c46d5a7398a30d2c10fb7db7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q0-Q-cwPqmeEKNs4YjxavQjmrPcjOC00aG4gf1vm2IVhMfrVEQpJXu7DG-bh1QLBrjOWqIcNpJdd9vS80FFEKo2ofY2Yn6BHPcZZjwSQ0REhf7-sXKziX~GHT46zq0Aqd5NJaF-EvjayOhYYu0HvoyPAag9aI4iXozcPLBHFA8y1w0UEVYf10Yu7C5eXV6AbNBQkEoXzRsB8tPK~sKu6wEnuFyXIE384QiCIG8f8m3ZRGPDtO-hwySdNJ0qVdq-yznrLNemsgCC~JmMQ33ASbeXOyRZP28REO8e7s6L93LHDHbgPDJj4DoofWcMk5qHGRNuACaMxYeywrb~ct4lYJA__",onOk:()=>{},onCancel:()=>{}},argTypes:{title:{control:"text",description:"Tiêu đề của thông báo"},description:{control:"text",description:"Nội dung thông báo"},duration:{control:"number",description:"Thời gian hiển thị (giây)"},imgUrl:{control:"text",description:"URL ảnh thông báo"},okText:{control:"text",description:"Text Change Log"},cancelText:{control:"text",description:"Text Dismiss"},onOk:{action:"onOk"},onCancel:{action:"onCancel"}}},t=({title:r,description:a,duration:c,imgUrl:s,okText:m,cancelText:d,onOk:p,onCancel:l})=>{const u=g();return o.jsx("div",{children:o.jsx(h,{onClick:()=>u.notificationWithImage({title:r,description:a,duration:c,imgUrl:s,okText:m,cancelText:d,onOk:p,onCancel:l}),children:"Show System Update"})})};var n,i,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
