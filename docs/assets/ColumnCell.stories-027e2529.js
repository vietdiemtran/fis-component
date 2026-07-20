import{j as e}from"./jsx-runtime-e7d94ccb.js";import{F as n,C as t,R as i,a as c}from"./index-ebefaddf.js";import"./InfoSolidIcon-78d566e9.js";import{F as R}from"./index-8c6321d3.js";import"./index-981f9478.js";import"./index-f7beeda4.js";import"./getTheme-9564f801.js";import"./index-b0c2e733.js";import"./index-5e910af4.js";import"./AntdIcon-4d3cb6de.js";import"./index-05569730.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./useMergedState-281a21e7.js";import"./motion-99a9a6da.js";import"./pickAttrs-838756c7.js";import"./Pagination-95cd144b.js";import"./LeftOutlined-9792d8c9.js";import"./RightOutlined-5419b3d1.js";import"./KeyCode-6413d982.js";import"./Overflow-56aefdd9.js";import"./index-690b889d.js";import"./CloseOutlined-adc62a60.js";import"./useCSSVarCls-b5bb18ec.js";import"./index-77569b51.js";import"./collapse-97de76d4.js";const K={title:"Components/Table/Column/Cell",component:n,tags:["autodocs"],args:{className:"",content:"Content",description:"Description",variant:t.PRIMARY,disabled:!1,hasBorder:!0,icon:e.jsx(i,{}),contentWrapText:!1},argTypes:{className:{control:"text"},content:{control:"text"},variant:{control:"select",options:Object.values(t),description:"Kiểu column"},disabled:{control:"boolean"},hasBorder:{control:"boolean",description:"Ẩn/hiện border bottom"},textAlign:{control:"select",options:Object.values(c),description:"Căn lề text"},contentWrapText:{control:"boolean",description:"Hiển thị nội dung đầy đủ"}}},r={},o={render:()=>{const a=[{title:"Revenue",key:"revenue",render:()=>e.jsx(n,{content:"Revenue",description:"$128,420",variant:t.PRIMARY_POSITIVE,icon:e.jsx(i,{}),tooltip:!0})},{title:"Status",key:"status",render:()=>e.jsx(n,{content:"On track",description:"Updated 2 hours ago",textAlign:c.SINGLE_LINE,variant:t.SECONDARY,hasBorder:!1})}],C=[{key:"1"}];return e.jsx(R,{columns:a,dataSource:C})}},s={render:()=>{const a=[{title:"Account",key:"account",render:()=>e.jsx(n,{content:"Enterprise Plan",description:"ACME Corp",textAlign:c.SINGLE_LINE,variant:t.TERTIARY,icon:e.jsx(i,{}),contentWrapText:!0})},{title:"Alert",key:"alert",render:()=>e.jsx(n,{content:"Needs review",description:"3 issues found",variant:t.PRIMARY_NEGATIVE,tooltip:!0})}];return e.jsx(R,{columns:a,dataSource:[{key:"1"}]})}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,I;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: "Revenue",
      key: "revenue",
      render: () => <FISTableCell content="Revenue" description="$128,420" variant={COLUMN_VARIANT.PRIMARY_POSITIVE} icon={<RiseIcon />} tooltip />
    }, {
      title: "Status",
      key: "status",
      render: () => <FISTableCell content="On track" description="Updated 2 hours ago" textAlign={COLUMN_TEXT_ALIGN.SINGLE_LINE} variant={COLUMN_VARIANT.SECONDARY} hasBorder={false} />
    }];
    const dataSource = [{
      key: "1"
    }];
    return <FISTable columns={columns as any} dataSource={dataSource} />;
  }
}`,...(I=(m=o.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var A,T,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: "Account",
      key: "account",
      render: () => <FISTableCell content="Enterprise Plan" description="ACME Corp" textAlign={COLUMN_TEXT_ALIGN.SINGLE_LINE} variant={COLUMN_VARIANT.TERTIARY} icon={<RiseIcon />} contentWrapText />
    }, {
      title: "Alert",
      key: "alert",
      render: () => <FISTableCell content="Needs review" description="3 issues found" variant={COLUMN_VARIANT.PRIMARY_NEGATIVE} tooltip />
    }];
    return <FISTable columns={columns as any} dataSource={[{
      key: "1"
    }]} />;
  }
}`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const q=["Default","UseCaseInTable","UseCaseSingleLine"];export{r as Default,o as UseCaseInTable,s as UseCaseSingleLine,q as __namedExportsOrder,K as default};
