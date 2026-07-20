import{j as e}from"./jsx-runtime-e7d94ccb.js";import{r as C}from"./index-981f9478.js";import{F as n}from"./index-25ad4301.js";import"./InfoSolidIcon-78d566e9.js";import{C as j}from"./index-b8aa03b0.js";import{F as o}from"./index-df9a4235.js";import{F as c}from"./index-8c6321d3.js";import{F as k}from"./FISSorter-0c3a8e72.js";import"./getTheme-9564f801.js";import"./index-f7beeda4.js";import"./index-66039438.js";import"./AntdIcon-4d3cb6de.js";import"./index-05569730.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./pickAttrs-838756c7.js";import"./Pagination-95cd144b.js";import"./LeftOutlined-9792d8c9.js";import"./RightOutlined-5419b3d1.js";import"./useMergedState-281a21e7.js";import"./KeyCode-6413d982.js";import"./Overflow-56aefdd9.js";import"./motion-99a9a6da.js";import"./index-690b889d.js";import"./CloseOutlined-adc62a60.js";import"./useCSSVarCls-b5bb18ec.js";import"./index-77569b51.js";import"./index-5e910af4.js";import"./collapse-97de76d4.js";const S=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8.6665 14.0001L11.9998 17.3334L15.3332 14.0001M8.6665 10.0001L11.9998 6.66675L15.3332 10.0001",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),le={title:"Components/Table/Header/Cell",component:n,tags:["autodocs"],args:{className:"",label:"Title Label Title Label Title Label Title Label",description:"Description",rightComponent:e.jsx(o,{icon:e.jsx(o,{size:"xs",icon:e.jsx(S,{}),variant:"tertiary-invisible"}),size:"xs",variant:"tertiary-invisible"}),textAlign:"left",disabled:!1,hasRightDivider:!0,hasTruncateLabel:!1},argTypes:{className:{control:"text"},label:{control:"text"},description:{control:"text"},textAlign:{control:"select",options:["left","right"],description:"Căn lề text"},disabled:{control:"boolean"},hasRightDivider:{control:"boolean",description:"Ẩn/hiện divider"},hasTruncateLabel:{control:"boolean",description:"Hiển thị nội dung đầy đủ, mặc định là truncate"}},render:t=>e.jsx(n,{...t})},r={},i=()=>{const t=()=>e.jsx(o,{icon:e.jsx(o,{size:"xs",icon:e.jsx(S,{}),variant:"tertiary-invisible"}),size:"xs",variant:"tertiary-invisible"}),[s,l]=C.useState(!1),d=v=>{l(v.target.checked)},p=[{title:e.jsx(n,{label:"Title Label",description:"Description",rightComponent:t()}),key:"index",render:()=>e.jsx("span",{children:"🆎 default"})},{title:e.jsx(n,{label:"Title Label Title Label Title Label Title Label Title Label",hasTruncateLabel:!1,description:"Description",rightComponent:t()}),key:"index",render:()=>e.jsx("span",{children:"🔠 wrap-text"})},{title:e.jsx(n,{label:"Title Label",rightComponent:t()}),key:"index",render:()=>e.jsx("span",{children:"📃 no description"})},{title:e.jsx(n,{label:"Title Label"}),key:"index",render:()=>e.jsx("span",{children:"📃 only label"})},{title:e.jsx(n,{label:"Title Label",hasRightDivider:!1}),key:"index",render:()=>e.jsx("span",{children:"🎼 no divider"})},{title:e.jsx(n,{label:"Title Label Title Label Title Label Title Label Title Label",description:"Description",rightComponent:t(),textAlign:"right",hasTruncateLabel:!0}),key:"index",render:()=>e.jsx("span",{children:"align-right"})},{title:e.jsx(n,{label:"Title Label Title Label Title Label Title Label Title Label",description:"Description",rightComponent:t(),hasTruncateLabel:!0,disabled:!0}),key:"index",render:()=>e.jsx("span",{children:"disable"})},{title:e.jsx(n,{label:void 0}),key:"index",render:()=>e.jsx("span",{children:"empty"})},{title:e.jsx(n,{label:void 0,rightComponent:e.jsx(j,{onChange:d,checked:s}),onlyIcon:!0}),key:"index",render:()=>e.jsx("span",{children:"Checkbox"})}];return e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[e.jsx(c,{columns:p.splice(0,4),dataSource:[1]}),e.jsx(c,{columns:p,dataSource:[1]})]})},a=()=>{const[t,s]=C.useState({columnKey:"revenue",order:"ascend"});return e.jsx(c,{dataSource:[{key:"1",revenue:"$12,420",status:"Healthy"}],columns:[{title:e.jsx(n,{label:"Revenue",description:"Monthly",rightComponent:e.jsx(k,{columnKey:"revenue",sortedInfo:t,onSort:(l,d)=>s({columnKey:l,order:d})})}),dataIndex:"revenue",key:"revenue",render:l=>e.jsx("span",{children:l})},{title:e.jsx(n,{label:"Status",description:"Current"}),dataIndex:"status",key:"status",render:l=>e.jsx("span",{children:l})}]})};var b,u,m;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,h,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const iconButton = () => <FISIconButton icon={<IconButton size="xs" icon={<ChevronSelectorIcon />} variant="tertiary-invisible" />} size="xs" variant="tertiary-invisible" />;
  const [checked, setChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const columns = [{
    title: <FISTableHeaderCell label="Title Label" description="Description" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>🆎 default</span>
  }, {
    title: <FISTableHeaderCell label="Title Label Title Label Title Label Title Label Title Label" hasTruncateLabel={false} description="Description" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>🔠 wrap-text</span>
  }, {
    title: <FISTableHeaderCell label="Title Label" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>📃 no description</span>
  }, {
    title: <FISTableHeaderCell label="Title Label" />,
    key: "index",
    render: () => <span>📃 only label</span>
  }, {
    title: <FISTableHeaderCell label="Title Label" hasRightDivider={false} />,
    key: "index",
    render: () => <span>🎼 no divider</span>
  }, {
    title: <FISTableHeaderCell label="Title Label Title Label Title Label Title Label Title Label" description="Description" rightComponent={iconButton()} textAlign="right" hasTruncateLabel />,
    key: "index",
    render: () => <span>align-right</span>
  }, {
    title: <FISTableHeaderCell label="Title Label Title Label Title Label Title Label Title Label" description="Description" rightComponent={iconButton()} hasTruncateLabel disabled />,
    key: "index",
    render: () => <span>disable</span>
  }, {
    title: <FISTableHeaderCell label={undefined} />,
    key: "index",
    render: () => <span>empty</span>
  }, {
    title: <FISTableHeaderCell label={undefined} rightComponent={<FISCheckbox onChange={handleChange} checked={checked} />} onlyIcon />,
    key: "index",
    render: () => <span>Checkbox</span>
  }];
  return <div style={{
    display: "flex",
    gap: "12px",
    flexDirection: "column"
  }}>
      <FISTable columns={columns.splice(0, 4)} dataSource={[1]} />
      <FISTable columns={columns} dataSource={[1]} />
    </div>;
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var L,y,g;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [sortedInfo, setSortedInfo] = useState<{
    columnKey?: string;
    order?: string;
  }>({
    columnKey: "revenue",
    order: "ascend"
  });
  return <FISTable dataSource={[{
    key: "1",
    revenue: "$12,420",
    status: "Healthy"
  }]} columns={[{
    title: <FISTableHeaderCell label="Revenue" description="Monthly" rightComponent={<FISSorter columnKey="revenue" sortedInfo={sortedInfo} onSort={(columnKey, order) => setSortedInfo({
      columnKey,
      order
    })} />} />,
    dataIndex: "revenue",
    key: "revenue",
    render: value => <span>{value}</span>
  }, {
    title: <FISTableHeaderCell label="Status" description="Current" />,
    dataIndex: "status",
    key: "status",
    render: value => <span>{value}</span>
  }]} />;
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const re=["Default","FullStyle","SortableHeaderUseCase"];export{r as Default,i as FullStyle,a as SortableHeaderUseCase,re as __namedExportsOrder,le as default};
