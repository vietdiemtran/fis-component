import{j as a}from"./jsx-runtime-e7d94ccb.js";import{F as e}from"./index-5ce06a62.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";const L={title:"Components/Text",component:e,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"FISText là primitive text dùng để render typography theo token của design system, hỗ trợ variant, color và tag tuỳ chỉnh."}}},args:{children:"The quick brown fox jumps over the lazy dog.",tag:"p",variant:"Paragraph/Md"},argTypes:{children:{control:"text",description:"Nội dung text hiển thị."},tag:{control:"select",options:["p","span","div","label","h1","h2","h3","h4"],description:"Thẻ HTML được dùng để render text."},variant:{control:"select",options:["Emphasis/Emp-6","Emphasis/Emp-5","Emphasis/Emp-4","Emphasis/Emp-3","Emphasis/Emp-2","Emphasis/Emp-1","Label/XL","Label/Lg","Label/Md","Label/Sm","Label/XS","Subheading/Lg","Subheading/Md","Subheading/Sm","Subheading/XS","Paragraph/XL","Paragraph/Lg","Paragraph/Md","Paragraph/Sm","Paragraph/XS","_Guide/Flow-Line/Label"],description:"Token typography của text."}}},r={},t={args:{children:"Typography sample heading",tag:"h2",variant:"Subheading/Lg"}},n={render:()=>a.jsxs("div",{style:{display:"grid",gap:12},children:[a.jsx(e,{variant:"Emphasis/Emp-6",children:"Emphasis / Emp-6"}),a.jsx(e,{variant:"Label/Lg",children:"Label / Large"}),a.jsx(e,{variant:"Subheading/Md",children:"Subheading / Medium"}),a.jsx(e,{variant:"Paragraph/Sm",children:"Paragraph / Small used for supporting copy and secondary content."})]})};var s,i,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var o,d,g;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Typography sample heading",
    tag: "h2",
    variant: "Subheading/Lg"
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,c,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <FISText variant="Emphasis/Emp-6">Emphasis / Emp-6</FISText>
      <FISText variant="Label/Lg">Label / Large</FISText>
      <FISText variant="Subheading/Md">Subheading / Medium</FISText>
      <FISText variant="Paragraph/Sm">
        Paragraph / Small used for supporting copy and secondary content.
      </FISText>
    </div>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const y=["Default","HeadingLike","TypographyScale"];export{r as Default,t as HeadingLike,n as TypographyScale,y as __namedExportsOrder,L as default};
