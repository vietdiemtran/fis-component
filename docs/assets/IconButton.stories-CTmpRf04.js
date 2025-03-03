import{j as t}from"./jsx-runtime-C8_8iAox.js";import{F as l}from"./RequestButtonLoadingIcon-XHoBIMsM.js";import{F as d}from"./index-D_Sj4glS.js";import"./index-Dkaqzkgy.js";import"./styled-components.browser.esm-CcLIA1IU.js";import"./getTheme-atTn6El8.js";const m=["primary","secondary","secondary-invisible","tertiary","tertiary-invisible","primary-negative","secondary-negative","secondary-invisible-negative","primary-white","secondary-white","secondary-invisible-white"],u=["xs","sm","md","lg"],j={title:"Components/Button & Link/Button Icon",component:d,tags:["autodocs"],args:{size:"md",disabled:!1,variant:"primary",icon:t.jsx(l,{})},argTypes:{size:{control:"radio",options:u,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:m,description:"Kiểu button"}}},n={},a=v=>t.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:u.map(e=>t.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("span",{children:[e==null?void 0:e.toUpperCase(),":"]}),m.map(y=>t.jsxs(d,{variant:y,size:e,icon:t.jsx(l,{}),children:["Button ",e]},e))]},e))});var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
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
