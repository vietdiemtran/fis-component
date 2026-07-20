import{j as a}from"./jsx-runtime-e7d94ccb.js";import{F as i}from"./InfoSolidIcon-78d566e9.js";import{F as y}from"./index-df9a4235.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";import"./index-66039438.js";const v=["primary","secondary","secondary-invisible","tertiary","tertiary-invisible","primary-negative","secondary-negative","secondary-invisible-negative","primary-white","secondary-white","secondary-invisible-white"],x=["xs","sm","md","lg"],z={title:"Components/Button & Link/Button Icon",component:y,tags:["autodocs"],args:{size:"md",disabled:!1,variant:"primary",icon:a.jsx(i,{})},argTypes:{size:{control:"radio",options:x,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:v,description:"Kiểu button"},loading:{control:"boolean",description:"Trạng thái đang tải dữ liệu của button"}}},e={},r=b=>a.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:x.map(n=>a.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("span",{children:[n==null?void 0:n.toUpperCase(),":"]}),v.map(f=>a.jsxs(y,{variant:f,size:n,icon:a.jsx(i,{}),children:["Button ",n]},n))]},n))}),t={args:{loading:!0,icon:a.jsx(i,{}),variant:"primary",size:"md"}};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
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
        {variants.map(variant => <FISIconButton key={size} variant={variant} size={size} icon={<Fpt />}>
            Button {size}
          </FISIconButton>)}
      </div>)}
  </div>`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    loading: true,
    icon: <Fpt />,
    variant: "primary",
    size: "md"
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const k=["Default","Size","Loading"];export{e as Default,t as Loading,r as Size,k as __namedExportsOrder,z as default};
