import{j as o}from"./jsx-runtime-47c18db8.js";import{u as h}from"./useNotification-f4bc926a.js";import{B as k}from"./button-6bebafc6.js";import"./index-d806aa85.js";import"./context-5c8b5a05.js";import"./getTheme-624682de.js";import"./index-0fbbfa15.js";import"./index-e72c950e.js";import"./index-8298a7d1.js";import"./RemoveIcon-d554efb7.js";import"./AntdIcon-b5d0c52f.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./useSize-a68aa0f1.js";function g(){return o.jsxs("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M2.7002 5.2C2.7002 4.0799 2.7002 3.51984 2.91818 3.09202C3.10993 2.71569 3.41589 2.40973 3.79221 2.21799C4.22004 2 4.78009 2 5.9002 2H11.5002C12.6203 2 13.1804 2 13.6082 2.21799C13.9845 2.40973 14.2905 2.71569 14.4822 3.09202C14.7002 3.51984 14.7002 4.0799 14.7002 5.2V10.8C14.7002 11.9201 14.7002 12.4802 14.4822 12.908C14.2905 13.2843 13.9845 13.5903 13.6082 13.782C13.1804 14 12.6203 14 11.5002 14H5.9002C4.78009 14 4.22004 14 3.79221 13.782C3.41589 13.5903 3.10993 13.2843 2.91818 12.908C2.7002 12.4802 2.7002 11.9201 2.7002 10.8V5.2Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),o.jsx("path",{d:"M6.67123 9.15942C6.08237 9.0122 5.78794 8.9386 5.67403 8.87583C4.98419 8.49569 4.98419 7.50431 5.67403 7.12417C5.78794 7.0614 6.08237 6.98779 6.67123 6.84058C6.78107 6.81312 6.83599 6.79939 6.88555 6.78127C7.16229 6.68012 7.38034 6.46208 7.48149 6.18533C7.4996 6.13577 7.51333 6.08085 7.54079 5.97101C7.68801 5.38215 7.76162 5.08772 7.82439 4.97381C8.20452 4.28398 9.19591 4.28398 9.57604 4.97381C9.63881 5.08772 9.71242 5.38215 9.85963 5.97101C9.88709 6.08085 9.90082 6.13577 9.91894 6.18533C10.0201 6.46208 10.2381 6.68012 10.5149 6.78127C10.5644 6.79939 10.6194 6.81312 10.7292 6.84058C11.3181 6.98779 11.6125 7.0614 11.7264 7.12417C12.4162 7.5043 12.4162 8.49569 11.7264 8.87582C11.6125 8.9386 11.3181 9.0122 10.7292 9.15942C10.6194 9.18688 10.5644 9.20061 10.5149 9.21872C10.2381 9.31987 10.0201 9.53792 9.91894 9.81466C9.90082 9.86422 9.88709 9.91914 9.85963 10.029C9.71242 10.6178 9.63881 10.9123 9.57604 11.0262C9.19591 11.716 8.20452 11.716 7.82439 11.0262C7.76162 10.9123 7.68801 10.6178 7.54079 10.029C7.51333 9.91914 7.4996 9.86423 7.48149 9.81466C7.38034 9.53792 7.16229 9.31987 6.88555 9.21872C6.83599 9.20061 6.78107 9.18688 6.67123 9.15942Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"})]})}const H={title:"Components/Notification/Info Update",tags:["autodocs"],args:{title:"Info Alert",description:"New system update is available.",duration:5,okText:"Reply",icon:o.jsx(g,{}),cancelText:"Dismiss",size:24,roundedIcon:!0,onOk:()=>{},onCancel:()=>{}},argTypes:{title:{control:"text",description:"Tiêu đề thông báo"},description:{control:"text",description:"Nội dung thông báo"},duration:{control:"number",description:"Thời gian hiển thị (giây)"},okText:{control:"text",description:"Text gửi phản hồi"},icon:{control:"object",description:"Icon thông báo"},onOk:{action:"onOk"},cancelText:{control:"text",description:"Text đóng"},onCancel:{action:"onCancel"},variant:{control:"select",options:["neutral","info","positive","negative","caution"]},size:{control:"select",options:[24,28,36,44,56,68,84]},roundedIcon:{control:"boolean"}}},n=({title:r,description:c,duration:a,icon:s,variant:p,okText:l,size:d,cancelText:C,onOk:u,onCancel:m,roundedIcon:x})=>{const f=h();return o.jsx("div",{children:o.jsx(k,{type:"primary",onClick:()=>f.notificationWithFeature({title:r,description:c,size:d,icon:s,variant:p,roundedIcon:x,duration:a,okText:l,cancelText:C,onOk:u,onCancel:m}),children:"Show Info Update"})})};var t,i,e;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`({
  title,
  description,
  duration,
  icon,
  variant,
  okText,
  size,
  cancelText,
  onOk,
  onCancel,
  roundedIcon
}) => {
  const notification = useNotification();
  return <div>
      <Button type="primary" onClick={() => notification.notificationWithFeature({
      title,
      description,
      size,
      icon,
      variant,
      roundedIcon,
      duration,
      okText,
      cancelText,
      onOk,
      onCancel
    })}>
        Show Info Update
      </Button>
    </div>;
}`,...(e=(i=n.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,H as default};
