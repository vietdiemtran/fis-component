import{j as e}from"./jsx-runtime-47c18db8.js";import{F as l}from"./RemoveIcon-d554efb7.js";import{F as d}from"./index-e72c950e.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";const m=["primary","secondary","secondary-invisible","tertiary","tertiary-invisible","primary-negative","secondary-negative","secondary-invisible-negative","primary-white","secondary-white","secondary-invisible-white"],u=["xs","sm","md","lg"],j={title:"Components/Button & Link/Button Icon",component:d,tags:["autodocs"],args:{size:"md",disabled:!1,variant:"primary",icon:e.jsx(l,{})},argTypes:{size:{control:"radio",options:u,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:m,description:"Kiểu button"},loading:{control:"boolean",description:"Trạng thái đang tải dữ liệu của button"}}},n={},a=g=>e.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:u.map(t=>e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("span",{children:[t==null?void 0:t.toUpperCase(),":"]}),m.map(y=>e.jsxs(d,{variant:y,size:t,icon:e.jsx(l,{}),children:["Button ",t]},t))]},t))});var i,o,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var s,c,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
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
  </div>`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const B=["Default","Size"];export{n as Default,a as Size,B as __namedExportsOrder,j as default};
