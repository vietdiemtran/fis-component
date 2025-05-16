import{j as n}from"./jsx-runtime-47c18db8.js";import{F as o}from"./ArrowRightIcon-2d46fdf7.js";import{F as d}from"./index-bf6eddb1.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";const m=["primary","secondary","tertiary","primary-negative","secondary-negative","primary-white","secondary-white"],u=["xs","sm","md","lg"],I={title:"Components/Button & Link/Button Container",component:d,tags:["autodocs"],args:{children:"Button",size:"md",disabled:!1,variant:"primary"},argTypes:{size:{control:"radio",options:u,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:m,description:"Kiểu button"},active:{control:"boolean",description:"Trạng thái kích hoạt của button"},loading:{control:"boolean",description:"Trạng thái đang tải dữ liệu của button"}}},e={},a=()=>n.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:u.map(t=>n.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{children:[t==null?void 0:t.toUpperCase(),":"]}),m.map(x=>n.jsxs(d,{variant:x,size:t,startIcon:n.jsx(o,{}),endIcon:n.jsx(o,{}),children:["Button ",t]},t))]},t))});var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <div style={{
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
        {variants.map(variant => <FISButton key={size} variant={variant} size={size} startIcon={<Fpt />} endIcon={<Fpt />}>
            Button {size}
          </FISButton>)}
      </div>)}
  </div>`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const j=["Default","Size"];export{e as Default,a as Size,j as __namedExportsOrder,I as default};
