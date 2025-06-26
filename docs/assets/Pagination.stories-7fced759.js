import{j as m}from"./jsx-runtime-47c18db8.js";import{r as s}from"./index-d806aa85.js";import{f as x}from"./index-a38c623c.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./LineArrowsUp-4acd88f0.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-a60d625b.js";import"./index-6b2c958e.js";import"./context-64a81616.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-b58ea5d4.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-4fe5a7ca.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-6b92031d.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-baad6b63.js";import"./index-ffeb7169.js";import"./index-63636042.js";import"./index-1275b512.js";import"./index-55dfab6c.js";import"./index-28483a77.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-90a26468.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-4280f93c.js";import"./collapse-8e27e3c5.js";import"./index-56009584.js";import"./index-8ba4b829.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-d8d722f1.js";import"./FISSorter-721bb526.js";import"./index-3406f63d.js";import"./index-55d04594.js";import"./index-d2a546a7.js";import"./index-eca51d54.js";const Vt={title:"Components/Table/Pagination",tags:["autodocs"],component:x,argTypes:{total:{control:{type:"number"},defaultValue:100,description:"Tổng số bản ghi."},pageSize:{control:{type:"number"},defaultValue:10,description:"Số bản ghi trên mỗi trang."},current:{control:{type:"number"},defaultValue:1,description:"Trang hiện tại."},minimize:{control:{type:"boolean"},defaultValue:!1,description:"Ẩn bớt UI để tối giản hiển thị."},recordCounted:{control:{type:"boolean"},defaultValue:!0,description:"Hiển thị tổng số bản ghi."},onIconPageRecordClick:{action:"clicked",description:"Sự kiện khi bấm vào icon thông tin số bản ghi."},showTotal:{control:!1,description:"Hàm tùy chỉnh hiển thị tổng số bản ghi."}}},n={render:t=>{const[a,p]=s.useState(t.current),[y,P]=s.useState(t.pageSize);return m.jsx(m.Fragment,{children:m.jsx(x,{...t,current:a,pageSize:y,onChange:p,onShowSizeChange:w=>{P(w)}})})}},r={...n,args:{total:100,pageSize:10,current:1}},o={...n,args:{total:100,pageSize:10,current:1,minimize:!0}},e={...n,args:{total:200,pageSize:20,current:2,showTotal:(t,[a,p])=>`Showing ${a}-${p} of ${t} records`}},i={...n,args:{total:150,pageSize:15,current:3,recordCounted:!0}};var c,u,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 100,
    pageSize: 10,
    current: 1
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 100,
    pageSize: 10,
    current: 1,
    minimize: true
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,z,f;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 200,
    pageSize: 20,
    current: 2,
    showTotal: (total, [start, end]) => \`Showing \${start}-\${end} of \${total} records\`
  }
}`,...(f=(z=e.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var T,b,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 150,
    pageSize: 15,
    current: 3,
    recordCounted: true
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const jt=["Default","Minimized","CustomTotal","WithRecordCounted"];export{e as CustomTotal,r as Default,o as Minimized,i as WithRecordCounted,jt as __namedExportsOrder,Vt as default};
