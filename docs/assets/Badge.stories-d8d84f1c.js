import{j as e}from"./jsx-runtime-47c18db8.js";import{B as R}from"./LineArrowsUp-4acd88f0.js";import{F as a}from"./index-1c88f37d.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./index-63636042.js";import"./index-d16835b1.js";const Z={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Nhãn hiển thị trên badge."},icon:{control:"text",description:"Icon hiển thị trên badge."},src:{control:"text",description:"URL hình ảnh hiển thị trên badge."},size:{control:"radio",options:["xs","sm","md","lg"],description:"Kích thước của badge."},disabled:{control:"boolean",description:"Trạng thái vô hiệu hóa badge hay không."},status:{control:"radio",options:["info","caution","positive","negative"],description:"Trạng thái của badge, thể hiện ý nghĩa khác nhau qua màu sắc."},type:{control:"radio",options:["default","solid"],description:"Kiểu hiển thị của badge: `default` có viền, `solid` là màu nền đặc."},color:{control:"radio",options:["neutral","neutral-light","orange","yellow","lime","green","ocean","blue","indigo","violet","pink"],description:"Màu sắc của badge."}}},p=U=>e.jsx(a,{...U}),s=p.bind({});s.args={label:"Label",size:"sm"};s.parameters={docs:{description:{story:"Badge cơ bản chỉ hiển thị nhãn text. Đây là cách sử dụng đơn giản nhất của component Badge."}}};const o=p.bind({});o.args={label:"Label",icon:e.jsx(R,{width:12,height:12}),size:"sm"};o.parameters={docs:{description:{story:"Badge kết hợp giữa icon và nhãn text. Icon được hiển thị bên trái của nhãn."}}};const t=p.bind({});t.args={label:"Label",src:"https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg",size:"sm"};t.parameters={docs:{description:{story:"Badge kết hợp avatar và nhãn text. Thường được sử dụng để hiển thị thông tin người dùng."}}};const n=()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(a,{label:"XS",size:"xs"}),e.jsx(a,{label:"SM",size:"sm"}),e.jsx(a,{label:"MD",size:"md"}),e.jsx(a,{label:"LG",size:"lg"})]});n.parameters={docs:{description:{story:"Badge có 4 kích thước khác nhau: xs (extra small), sm (small), md (medium), và lg (large). Kích thước mặc định là sm."}}};const i=()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Neutral",color:"neutral"}),e.jsx(a,{label:"Orange",color:"orange"}),e.jsx(a,{label:"Yellow",color:"yellow"}),e.jsx(a,{label:"Lime",color:"lime"}),e.jsx(a,{label:"Green",color:"green"}),e.jsx(a,{label:"Ocean",color:"ocean"}),e.jsx(a,{label:"Blue",color:"blue"}),e.jsx(a,{label:"Indigo",color:"indigo"}),e.jsx(a,{label:"Violet",color:"violet"}),e.jsx(a,{label:"Pink",color:"pink"})]});i.parameters={docs:{description:{story:"Badge có 10 màu sắc khác nhau để phù hợp với nhiều trường hợp sử dụng. Màu mặc định là neutral."}}};const c=()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a,{label:"Info",status:"info"}),e.jsx(a,{label:"Caution",status:"caution"}),e.jsx(a,{label:"Positive",status:"positive"}),e.jsx(a,{label:"Negative",status:"negative"})]});c.parameters={docs:{description:{story:"Badge có 4 trạng thái khác nhau để thể hiện ý nghĩa: info (thông tin), caution (cảnh báo), positive (tích cực), và negative (tiêu cực)."}}};const d=()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a,{label:"Default",type:"default"}),e.jsx(a,{label:"Solid",type:"solid"})]});d.parameters={docs:{description:{story:"Badge có 2 kiểu hiển thị: default (có viền) và solid (màu nền đặc). Kiểu mặc định là default."}}};const g=()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a,{label:"Enabled",disabled:!1}),e.jsx(a,{label:"Disabled",disabled:!0})]});g.parameters={docs:{description:{story:"Badge có thể được vô hiệu hóa bằng thuộc tính disabled. Khi disabled, badge sẽ có màu xám và không thể tương tác."}}};const r=p.bind({});r.args={icon:e.jsx(R,{width:12,height:12}),size:"sm"};r.parameters={docs:{description:{story:"Badge có thể chỉ hiển thị icon mà không có nhãn text. Thường được sử dụng cho các trường hợp cần hiển thị gọn gàng."}}};const l=p.bind({});l.args={label:"Label Only",size:"sm"};l.parameters={docs:{description:{story:"Badge có thể chỉ hiển thị nhãn text mà không có icon. Đây là cách sử dụng đơn giản nhất của component Badge."}}};var h,m,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"args => <FISBadge {...args} />",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,x,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"args => <FISBadge {...args} />",...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,B,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"args => <FISBadge {...args} />",...(v=(B=t.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var I,f,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "8px",
  alignItems: "center"
}}>
    <FISBadge label="XS" size="xs" />
    <FISBadge label="SM" size="sm" />
    <FISBadge label="MD" size="md" />
    <FISBadge label="LG" size="lg" />
  </div>`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var F,k,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "8px",
  flexWrap: "wrap"
}}>
    <FISBadge label="Neutral" color="neutral" />
    <FISBadge label="Orange" color="orange" />
    <FISBadge label="Yellow" color="yellow" />
    <FISBadge label="Lime" color="lime" />
    <FISBadge label="Green" color="green" />
    <FISBadge label="Ocean" color="ocean" />
    <FISBadge label="Blue" color="blue" />
    <FISBadge label="Indigo" color="indigo" />
    <FISBadge label="Violet" color="violet" />
    <FISBadge label="Pink" color="pink" />
  </div>`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var w,L,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "8px"
}}>
    <FISBadge label="Info" status="info" />
    <FISBadge label="Caution" status="caution" />
    <FISBadge label="Positive" status="positive" />
    <FISBadge label="Negative" status="negative" />
  </div>`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var O,T,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "8px"
}}>
    <FISBadge label="Default" type="default" />
    <FISBadge label="Solid" type="solid" />
  </div>`,...(M=(T=d.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var W,_,C;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "8px"
}}>
    <FISBadge label="Enabled" disabled={false} />
    <FISBadge label="Disabled" disabled={true} />
  </div>`,...(C=(_=g.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var K,N,E;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:"args => <FISBadge {...args} />",...(E=(N=r.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var G,P,A;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:"args => <FISBadge {...args} />",...(A=(P=l.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const $=["Default","WithIcon","WithAvatar","Sizes","Colors","Statuses","SolidType","Disabled","IconOnly","LabelOnly"];export{i as Colors,s as Default,g as Disabled,r as IconOnly,l as LabelOnly,n as Sizes,d as SolidType,c as Statuses,t as WithAvatar,o as WithIcon,$ as __namedExportsOrder,Z as default};
