import{j as e}from"./jsx-runtime-e7d94ccb.js";import{F as t}from"./InfoSolidIcon-78d566e9.js";import{F as W}from"./index-3ff5a592.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";import"./index-66039438.js";const L=["primary","secondary","tertiary","primary-negative","secondary-negative","primary-white","secondary-white","secondary-ghost","tertiary-ghost","secondary-ghost-negative","secondary-ghost-white"],O=["xs","sm","md","lg"],R={title:"Components/Button & Link/Button Container",component:W,tags:["autodocs"],args:{children:"Button",size:"md",disabled:!1,variant:"primary"},argTypes:{size:{control:"radio",options:O,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:L,description:"Kiểu button"},active:{control:"boolean",description:"Trạng thái kích hoạt của button"},loading:{control:"boolean",description:"Trạng thái đang tải dữ liệu của button"},startIcon:{control:!1,description:"Icon đứng trước nội dung"},endIcon:{control:!1,description:"Icon đứng sau nội dung"}}},a={},n=()=>e.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:O.map(r=>e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("span",{children:[r==null?void 0:r.toUpperCase(),":"]}),L.map(T=>e.jsxs(W,{type:"submit",variant:T,size:r,startIcon:e.jsx(t,{}),endIcon:e.jsx(t,{}),children:["Button ",r]},r))]},r))}),s={args:{startIcon:e.jsx(t,{}),endIcon:e.jsx(t,{}),children:"Button"}},o={args:{startIcon:e.jsx(t,{}),children:void 0,"aria-label":"action"}},c={args:{loading:!0}},i={args:{active:!0,variant:"secondary"}},d={args:{disabled:!0}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 20,
  flexDirection: "column"
}}>
    {sizes.map(size => <div key={size} style={{
    display: "flex",
    gap: 20,
    alignItems: "center",
    flexWrap: "wrap"
  }}>
        <span>{size?.toUpperCase()}:</span>
        {variants.map(variant => <FISButton type="submit" key={size} variant={variant} size={size} startIcon={<Fpt />} endIcon={<Fpt />}>
            Button {size}
          </FISButton>)}
      </div>)}
  </div>`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    startIcon: <Fpt />,
    endIcon: <Fpt />,
    children: "Button"
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,b,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    startIcon: <Fpt />,
    children: undefined,
    "aria-label": "action"
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,j,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var B,k,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    active: true,
    variant: "secondary"
  }
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var w,z,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const V=["Default","Size","WithIcons","IconOnly","Loading","Active","Disabled"];export{i as Active,a as Default,d as Disabled,o as IconOnly,c as Loading,n as Size,s as WithIcons,V as __namedExportsOrder,R as default};
