import{j as n}from"./jsx-runtime-e7d94ccb.js";import{u as a}from"./useNotification-916c5717.js";import{F as r}from"./index-3ff5a592.js";import"./index-981f9478.js";import"./context-8c759455.js";import"./getTheme-9564f801.js";import"./index-c78bc788.js";import"./index-df9a4235.js";import"./index-66039438.js";import"./InfoSolidIcon-78d566e9.js";import"./AntdIcon-4d3cb6de.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./UnstableContext-615a9015.js";import"./CloseOutlined-adc62a60.js";import"./KeyCode-6413d982.js";import"./pickAttrs-838756c7.js";import"./useCSSVarCls-b5bb18ec.js";const Q={title:"Components/Notification/System Update",tags:["autodocs"],args:{title:"System Maintenance",description:"Scheduled maintenance at 2 AM. Check out the all new dashboard view Pages and exports now load faster.",duration:5,okText:"ChangeLog",cancelText:"Dismiss",imgUrl:"https://s3-alpha-sig.figma.com/img/2252/7f4a/c2141526c46d5a7398a30d2c10fb7db7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q0-Q-cwPqmeEKNs4YjxavQjmrPcjOC00aG4gf1vm2IVhMfrVEQpJXu7DG-bh1QLBrjOWqIcNpJdd9vS80FFEKo2ofY2Yn6BHPcZZjwSQ0REhf7-sXKziX~GHT46zq0Aqd5NJaF-EvjayOhYYu0HvoyPAag9aI4iXozcPLBHFA8y1w0UEVYf10Yu7C5eXV6AbNBQkEoXzRsB8tPK~sKu6wEnuFyXIE384QiCIG8f8m3ZRGPDtO-hwySdNJ0qVdq-yznrLNemsgCC~JmMQ33ASbeXOyRZP28REO8e7s6L93LHDHbgPDJj4DoofWcMk5qHGRNuACaMxYeywrb~ct4lYJA__",onOk:()=>{},onCancel:()=>{}},argTypes:{title:{control:"text",description:"Tiêu đề của thông báo"},description:{control:"text",description:"Nội dung thông báo"},duration:{control:"number",description:"Thời gian hiển thị (giây)"},imgUrl:{control:"text",description:"URL ảnh thông báo"},okText:{control:"text",description:"Text Change Log"},cancelText:{control:"text",description:"Text Dismiss"},onOk:{action:"onOk"},onCancel:{action:"onCancel"}}},o=({title:t,description:f,duration:x,imgUrl:w,okText:k,cancelText:C,onOk:S,onCancel:T})=>{const O=a();return n.jsx("div",{children:n.jsx(r,{onClick:()=>O.notificationWithImage({title:t,description:f,duration:x,imgUrl:w,okText:k,cancelText:C,onOk:S,onCancel:T}),children:"Show System Update"})})},e=()=>{const t=a();return n.jsx("div",{children:n.jsx(r,{onClick:()=>t.notificationWithImage({title:"Planned Maintenance Tonight",description:"We will perform a short maintenance window tonight from 01:00 to 01:30. The dashboard will be unavailable during this time.",duration:8,imgUrl:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",okText:"View details",cancelText:"Dismiss",onOk:()=>{},onCancel:()=>{}}),children:"Show Maintenance Notice"})})},i=()=>{const t=a();return n.jsx("div",{children:n.jsx(r,{onClick:()=>t.notificationWithImage({title:"Deployment in progress",description:"A new deployment is running across the staging environment. You can monitor progress from the release notes page.",duration:8,imgUrl:"https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",okText:"Open release notes",cancelText:"Later",moreOption:!0,onMoreClick:()=>{},onOk:()=>{},onCancel:()=>{}}),children:"Show More Actions"})})};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const notification = useNotification();
  return <div>
      <FISButton onClick={() => notification.notificationWithImage({
      title: "Planned Maintenance Tonight",
      description: "We will perform a short maintenance window tonight from 01:00 to 01:30. The dashboard will be unavailable during this time.",
      duration: 8,
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      okText: "View details",
      cancelText: "Dismiss",
      onOk: () => {},
      onCancel: () => {}
    })}>
        Show Maintenance Notice
      </FISButton>
    </div>;
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const notification = useNotification();
  return <div>
      <FISButton onClick={() => notification.notificationWithImage({
      title: "Deployment in progress",
      description: "A new deployment is running across the staging environment. You can monitor progress from the release notes page.",
      duration: 8,
      imgUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
      okText: "Open release notes",
      cancelText: "Later",
      moreOption: true,
      onMoreClick: () => {},
      onOk: () => {},
      onCancel: () => {}
    })}>
        Show More Actions
      </FISButton>
    </div>;
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const R=["Default","PlannedMaintenance","WithMoreActions"];export{o as Default,e as PlannedMaintenance,i as WithMoreActions,R as __namedExportsOrder,Q as default};
