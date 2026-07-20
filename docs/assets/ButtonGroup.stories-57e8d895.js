import{j as t}from"./jsx-runtime-e7d94ccb.js";import{F as a}from"./InfoSolidIcon-78d566e9.js";import{F as o}from"./index-6cb57dac.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";const $={title:"Components/Button & Link/Button Group",component:o,tags:["autodocs"],args:{size:"md",disabled:!1,layout:"attached",options:[{label:"Button 1",onClick:()=>alert("Button 1 clicked")},{startIcon:t.jsx(a,{}),onClick:()=>alert("Button 2 clicked")}]},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Kích thước của GroupButton",defaultValue:"md"},disabled:{control:{type:"boolean"},description:"Trạng thái vô hiệu hóa toàn bộ nhóm nút",defaultValue:!1},options:{control:{type:"object"},description:"Danh sách các nút và hành động của chúng",defaultValue:[{label:"Button 1",onClick:()=>alert("Button 1 clicked")},{label:"Button 2",onClick:()=>alert("Button 2 clicked")}]},variant:{control:{type:"select"},options:["default","negative"],description:"Kiểu nhóm nút",defaultValue:"default"},layout:{control:{type:"radio"},options:["attached","separated"],description:"Cách sắp xếp các nút: 'attached' dùng chung đường viền, 'separated' tách rời và có khoảng cách",defaultValue:"attached"}}},n={},g=["xs","sm","md","lg"],y=["default","negative"],l=()=>t.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:g.map(e=>t.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("span",{children:[e==null?void 0:e.toUpperCase(),":"]}),y.map(r=>t.jsx(o,{variant:r,size:e,options:[{label:`Label ${e}`,onClick:()=>alert(`Label ${e} clicked`)},{startIcon:t.jsx(a,{}),onClick:()=>alert(`Label ${e} clicked`)},{startIcon:t.jsx(a,{}),label:`Label ${e}`,endIcon:t.jsx(a,{}),onClick:()=>alert(`Label ${e} clicked`)}]},`${e}-${r}`))]},e))}),s=()=>t.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:g.map(e=>t.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("span",{children:[e==null?void 0:e.toUpperCase(),":"]}),t.jsx(o,{layout:"separated",size:e,options:[{label:`Label ${e}`},{startIcon:t.jsx(a,{})},{startIcon:t.jsx(a,{}),label:`Label ${e}`,endIcon:t.jsx(a,{})}]})]},e))});var c,i,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div style={{
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
        {variants.map(variant => <FISButtonGroup key={\`\${size}-\${variant}\`} variant={variant} size={size} options={[{
      label: \`Label \${size}\`,
      onClick: () => alert(\`Label \${size} clicked\`)
    }, {
      startIcon: <Fpt />,
      onClick: () => alert(\`Label \${size} clicked\`)
    }, {
      startIcon: <Fpt />,
      label: \`Label \${size}\`,
      endIcon: <Fpt />,
      onClick: () => alert(\`Label \${size} clicked\`)
    }]} />)}
      </div>)}
  </div>`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
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
        <FISButtonGroup layout="separated" size={size} options={[{
      label: \`Label \${size}\`
    }, {
      startIcon: <Fpt />
    }, {
      startIcon: <Fpt />,
      label: \`Label \${size}\`,
      endIcon: <Fpt />
    }]} />
      </div>)}
  </div>`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const C=["Default","Size","Separated"];export{n as Default,s as Separated,l as Size,C as __namedExportsOrder,$ as default};
