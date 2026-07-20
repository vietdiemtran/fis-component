import{j as n}from"./jsx-runtime-e7d94ccb.js";import{F as c}from"./InfoSolidIcon-78d566e9.js";import{F as l}from"./index-c78bc788.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";const d=["default","hight-priority","negative","white"],w=["xs","sm"],V={title:"Components/Button & Link/Link",component:l,tags:["autodocs"],args:{children:"Button",size:"sm",disabled:!1,variant:"default",startIcon:n.jsx(c,{}),underline:!1},argTypes:{size:{control:"radio",options:w,description:"Kích thước của button"},disabled:{control:"boolean",description:"Vô hiệu hóa button"},onClick:{action:"clicked",description:"Hàm xử lý click"},variant:{control:"select",options:d,description:"Kiểu button"},underline:{control:"boolean",description:"Đường gạch dưới button"},singleLine:{control:"boolean",description:"Cắt bớt text bằng dấu ... khi tràn trên một dòng"},endIcon:{control:!1,description:"Icon đứng sau nội dung"},startIcon:{control:!1,description:"Icon đứng trước nội dung"}}},s={},a=r=>n.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:w.map(e=>n.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{children:[e==null?void 0:e.toUpperCase(),":"]}),d.map(F=>n.jsx(n.Fragment,{children:n.jsx("div",{style:{width:50,overflow:"hidden",whiteSpace:"nowrap"},children:n.jsxs(l,{variant:F,size:e,startIcon:n.jsx(c,{}),singleLine:!0,children:["Button 1 2 3 4 5 6 7 ",e]},e)})}))]},e))}),i={args:{underline:!0,children:"Underlined link"}},o=()=>n.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap",alignItems:"center"},children:d.map(r=>n.jsx(l,{variant:r,startIcon:n.jsx(c,{}),children:r},r))}),t=()=>n.jsx(l,{startIcon:n.jsx(c,{}),singleLine:!0,style:{width:180},children:"Một đoạn text rất dài sẽ bị cắt bằng dấu ba chấm"});t.parameters={docs:{description:{story:"Với `singleLine`, text tràn sẽ bị cắt bằng dấu ... thay vì xuống dòng."}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ButtonProps) => <div style={{
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
  </div>`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    underline: true,
    children: "Underlined link"
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var I,b,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
  alignItems: "center"
}}>
    {variants.map(variant => <FISLinkButton key={variant} variant={variant} startIcon={<Fpt />}>
        {variant}
      </FISLinkButton>)}
  </div>`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,L,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => <FISLinkButton startIcon={<Fpt />} singleLine style={{
  width: 180
}}>
    Một đoạn text rất dài sẽ bị cắt bằng dấu ba chấm
  </FISLinkButton>`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const W=["Default","Size","Underline","Variants","SingleLineTruncate"];export{s as Default,t as SingleLineTruncate,a as Size,i as Underline,o as Variants,W as __namedExportsOrder,V as default};
