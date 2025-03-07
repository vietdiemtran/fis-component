import{j as o}from"./jsx-runtime-50395f49.js";import{F as a}from"./index-f774b187.js";import{H as b,C as t}from"./ResizeIcon-0deac5ef.js";import"./index-9fa1aa67.js";import"./styled-components.browser.esm-6b0ce59b.js";import"./getTheme-fd88fed7.js";import"./index-c7f33007.js";const y={title:"Components/Breadcrumb",component:a,tags:["autodocs"],argTypes:{items:{control:"object",description:"Danh sách các mục trong breadcrumb"},showIcon:{control:"boolean",description:"Ẩn/hiện icon cho breadcrumb items",defaultValue:!0},showLabel:{control:"boolean",description:"Ẩn/hiện label cho breadcrumb items",defaultValue:!0}}},u=({items:l,showLabel:s,showIcon:m})=>o.jsx(a,{items:l.map((c,d)=>({...c,label:s?c.label:void 0,icon:d===0||m?c.icon:void 0}))}),e=u.bind({});e.args={showLabel:!0,showIcon:!0,items:[{label:"Home",icon:o.jsx(b,{}),onClick:()=>console.log("Home clicked")},{label:"Category",icon:o.jsx(t,{width:16,height:16}),onClick:()=>console.log("Category clicked")},{label:"Subcategory",icon:o.jsx(t,{width:16,height:16}),onClick:()=>console.log("Subcategory clicked")},{label:"Subcategory",icon:o.jsx(t,{width:16,height:16}),onClick:()=>console.log("Subcategory clicked")},{label:"Subcategory",icon:o.jsx(t,{width:16,height:16}),onClick:()=>console.log("Subcategory clicked")}]};var n,i,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  items,
  showLabel,
  showIcon
}) => <FISBreadcrumb items={items.map((item, index) => ({
  ...item,
  label: showLabel ? item.label : undefined,
  icon: index === 0 ? item.icon : showIcon ? item.icon : undefined
}))} />`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,y as default};
