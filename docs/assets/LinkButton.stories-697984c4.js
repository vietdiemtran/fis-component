import{j as n}from"./jsx-runtime-47c18db8.js";import{F as p}from"./LineArrowsUp-4acd88f0.js";import{F as d}from"./index-fc91568f.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";const m=["default","hight-priority","negative","white"],u=["xs","sm"],j={title:"Components/Button & Link/Link",component:d,tags:["autodocs"],args:{children:"Button",size:"sm",disabled:!1,variant:"default",startIcon:n.jsx(p,{}),underline:!1},argTypes:{size:{control:"radio",options:u,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:m,description:"Kiểu button"},underline:{control:"boolean",description:"Đường gạch dưới button"}}},e={},s=h=>n.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:u.map(t=>n.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{children:[t==null?void 0:t.toUpperCase(),":"]}),m.map(x=>n.jsx(n.Fragment,{children:n.jsx("div",{style:{width:50,overflow:"hidden",whiteSpace:"nowrap"},children:n.jsxs(d,{variant:x,size:t,startIcon:n.jsx(p,{}),singleLine:!0,children:["Button 1 2 3 4 5 6 7 ",t]},t)})}))]},t))});var i,a,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var r,c,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
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
        {variants.map(variant => <>
            <div style={{
        width: 50,
        overflow: "hidden",
        whiteSpace: "nowrap"
      }}>
              <FISLinkButton key={size} variant={variant} size={size} startIcon={<Fpt />} singleLine>
                Button 1 2 3 4 5 6 7 {size}
              </FISLinkButton>
            </div>
          </>)}
      </div>)}
  </div>`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Default","Size"];export{e as Default,s as Size,k as __namedExportsOrder,j as default};
