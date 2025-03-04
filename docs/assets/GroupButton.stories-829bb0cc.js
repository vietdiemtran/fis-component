import{j as t}from"./jsx-runtime-50395f49.js";import{F as l}from"./RequestButtonLoadingIcon-c839309c.js";import{F as u}from"./index-dbfa4e63.js";import"./index-9fa1aa67.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";const y={title:"Components/Button & Link/Button Group",component:u,tags:["autodocs"],args:{size:"md",disabled:!1,options:[{label:"Button 1",onClick:()=>alert("Button 1 clicked")},{startIcon:t.jsx(l,{}),onClick:()=>alert("Button 2 clicked")}]},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Kích thước của GroupButton",defaultValue:"md"},disabled:{control:{type:"boolean"},description:"Trạng thái vô hiệu hóa toàn bộ nhóm nút",defaultValue:!1},options:{control:{type:"object"},description:"Danh sách các nút và hành động của chúng",defaultValue:[{label:"Button 1",onClick:()=>alert("Button 1 clicked")},{label:"Button 2",onClick:()=>alert("Button 2 clicked")}]},variant:{control:{type:"select"},options:["default","negative"],description:"Kiểu nhóm nút",defaultValue:"default"}}},a={},m=["xs","sm","md","lg"],f=["default","negative"],n=()=>t.jsx("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:m.map(e=>t.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("span",{children:[e==null?void 0:e.toUpperCase(),":"]}),f.map(o=>t.jsx(u,{variant:o,size:e,options:[{label:`Label ${e}`,onClick:()=>alert(`Label ${e} clicked`)},{startIcon:t.jsx(l,{}),onClick:()=>alert(`Label ${e} clicked`)},{startIcon:t.jsx(l,{}),label:`Label ${e}`,endIcon:t.jsx(l,{}),onClick:()=>alert(`Label ${e} clicked`)}]},`${e}-${o}`))]},e))});var s,r,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={{
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
        {variants.map(variant => <FISGroupButton key={\`\${size}-\${variant}\`} variant={variant} size={size} options={[{
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
  </div>`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const $=["Default","Size"];export{a as Default,n as Size,$ as __namedExportsOrder,y as default};
