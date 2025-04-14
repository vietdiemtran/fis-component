import{j as n}from"./jsx-runtime-47c18db8.js";import{F as l}from"./ArrowRightIcon-bbccecc9.js";import{F as d}from"./index-1c3630d9.js";import"./index-d806aa85.js";import"./getTheme-21dde6f8.js";const m=["default","hight-priority","negative","white"],u=["xs","sm"],b={title:"Components/Button & Link/Link",component:d,tags:["autodocs"],args:{children:"Button",size:"sm",disabled:!1,variant:"default",startIcon:n.jsx(l,{}),underline:!1},argTypes:{size:{control:"radio",options:u,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:m,description:"Kiểu button"},underline:{control:"boolean",description:"Đường gạch dưới button"}}},e={},s=f=>n.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:u.map(t=>n.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{children:[t==null?void 0:t.toUpperCase(),":"]}),m.map(x=>n.jsxs(d,{variant:x,size:t,startIcon:n.jsx(l,{}),children:["Button ",t]},t))]},t))});var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
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
        {variants.map(variant => <FISLinkButton key={size} variant={variant} size={size} startIcon={<Fpt />}>
            Button {size}
          </FISLinkButton>)}
      </div>)}
  </div>`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const j=["Default","Size"];export{e as Default,s as Size,j as __namedExportsOrder,b as default};
