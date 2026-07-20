import{j as e}from"./jsx-runtime-e7d94ccb.js";import{r as u}from"./index-981f9478.js";import{F as g}from"./index-8c6321d3.js";import{D as _,C as z,t as b,u as I}from"./InfoSolidIcon-78d566e9.js";import{F as o,R as N}from"./index-ebefaddf.js";import{F as w}from"./index-6cb57dac.js";import{C as j}from"./index-b8aa03b0.js";import{F as d}from"./index-df9a4235.js";import{a as q,g as a}from"./getTheme-9564f801.js";import{F as k}from"./FISSorter-0c3a8e72.js";import{F as i}from"./index-25ad4301.js";import"./AntdIcon-4d3cb6de.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./pickAttrs-838756c7.js";import"./Pagination-95cd144b.js";import"./LeftOutlined-9792d8c9.js";import"./RightOutlined-5419b3d1.js";import"./useMergedState-281a21e7.js";import"./KeyCode-6413d982.js";import"./Overflow-56aefdd9.js";import"./motion-99a9a6da.js";import"./index-690b889d.js";import"./CloseOutlined-adc62a60.js";import"./useCSSVarCls-b5bb18ec.js";import"./index-77569b51.js";import"./index-5e910af4.js";import"./collapse-97de76d4.js";import"./index-b0c2e733.js";import"./index-66039438.js";const G=q.div`
  .slot-component {
    width: 100%;
    min-height: fit-content;
    background-color: #e6eaee;
    border-radius: ${a("sem/dimension/radius/component/sm")};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6b778c;
    position: relative;
    overflow: hidden;
    border: 1px dashed ${a("sem/color/stroke/neutral/sub")};

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 122%;
      height: 232%;
      border: 1px dashed ${a("sem/color/stroke/neutral/sub")};
      border-radius: 50%;
    }

    &:before {
      top: 50%;
      left: -11%;
    }

    &:after {
      bottom: 50%;
      right: -11%;
    }

    .desc {
      ${a("Subheading/XS")};
      height: 100%;
      background: #e6eaee;
      padding: 20px;
      width: 25%;
      z-index: 1;
      word-break: break-word;
      font-family: ${a("sem/typo/subheading/font")};
      font-weight: ${a("sem/typo/subheading/weight")};
      font-size: ${a("sem/typo/subheading/size/xs")};
      line-height: ${a("sem/typo/subheading/line-height/xs")};
      letter-spacing: ${a("sem/typo/subheading/letter-spacing/xs")};
      text-transform: uppercase;
      color: ${a("sem/color/text/neutral/soft")};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`,H=u.forwardRef(({className:s,description:r,descriptionStyle:l,...S},y)=>e.jsx(G,{ref:y,className:s,...S,children:e.jsx("div",{className:"slot-component",children:e.jsx("div",{style:l,className:"desc",dangerouslySetInnerHTML:{__html:`${r}`}})})}));try{Slot.displayName="Slot",Slot.__docgenInfo={description:"",displayName:"Slot",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},descriptionStyle:{defaultValue:null,description:"",name:"descriptionStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Re={title:"Components/Table/Table",component:g,tags:["autodocs"],args:{className:"",verticalHeader:"top",dataSource:[{key:"1",content:"Content",description:"10 Downing Street"},{key:"2",content:"Content",description:"10 Downing Street"}],columns:[{title:e.jsx(i,{label:"Text with collapse-able content",hasTruncateLabel:!0}),dataIndex:"content",key:"content",width:200,render:(s,r)=>e.jsx(o,{content:r.content,description:r.description,variant:"primary-positive",hasBorder:!1,icon:e.jsx(_,{})})},{title:()=>e.jsx(i,{label:"User",description:"Description",hasRightDivider:!0}),dataIndex:"Content",width:200,render:(s,r)=>e.jsx(o,{content:r.content,description:r.description,icon:e.jsx(N,{}),textAlign:"left"})},{title:()=>e.jsx(i,{label:"Title Label",description:"Description"}),dataIndex:"Content",key:"Content",width:200,render:()=>e.jsx(o,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(i,{label:"Icon",description:""}),dataIndex:"Content",key:"Content",width:100,render:()=>e.jsx(o,{icon:e.jsx(z,{})})},{title:()=>e.jsx(i,{label:"Slot Swap-able",description:"Description"}),dataIndex:"description",key:"description",width:300,render:()=>e.jsx(o,{icon:e.jsx(H,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(i,{label:"Action",description:"",hasRightDivider:!1}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(o,{icon:e.jsx(w,{size:"md",options:[{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(b,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(I,{}),variant:"secondary-invisible-negative"})}]})})}]},argTypes:{}},p={},m=()=>{const s=[{key:"1",content:"Content",description:"10 Downing Street 1"},{key:"2",content:"Content 1",description:"10 Downing Street"}],[r,l]=u.useState([]),[S,y]=u.useState([]),[c,$]=u.useState({columnKey:void 0,order:void 0}),f=(n,t)=>{$({columnKey:n,order:t})},B=n=>{y(t=>t.includes(n)?t.filter(h=>h!==n):[...t,n])},C=r.length===s.length,L=r.length>0&&r.length<s.length,P=n=>{l(t=>t.includes(n)?t.filter(h=>h!==n):[...t,n])},M=()=>{l(C?[]:s.map(n=>n.key))},J={selectedRowKeys:r,onChange:n=>l(n),renderCell:(n,t)=>e.jsx(o,{icon:e.jsx(j,{checked:n,onChange:()=>P(t.key)}),hasBorder:!1}),columnTitle:e.jsx(i,{label:"",rightComponent:e.jsx(j,{checked:C,indeterminate:L,onChange:()=>M()}),hasRightDivider:!1})},U=[{dataIndex:"content",key:"content",width:200,sorter:(n,t)=>(n.content||"").localeCompare(t.content||""),sortOrder:c.columnKey==="content"?c.order:null,showSorterTooltip:!1,title:()=>e.jsx(i,{label:"Text with collapse-able content",rightComponent:e.jsx(k,{columnKey:"content",onSort:f,sortedInfo:c}),hasRightDivider:!0}),render:(n,t)=>e.jsx(o,{content:t.content,description:t.description,variant:"primary-positive",icon:e.jsx(_,{}),textAlign:"right"})},{title:()=>e.jsx(i,{label:"User",description:"Description",rightComponent:e.jsx(k,{columnKey:"description",onSort:f,sortedInfo:c}),hasRightDivider:!0}),dataIndex:"description",width:200,sorter:(n,t)=>(n.description||"").localeCompare(t.description||""),sortOrder:c.columnKey==="description"?c.order:null,showSorterTooltip:!1,render:(n,t)=>e.jsx(o,{style:{width:"100%",verticalAlign:"top"},content:t.content,description:t.description,icon:e.jsx(N,{}),textAlign:"left"})},{title:()=>e.jsx(i,{label:"Title Label",description:"Description"}),dataIndex:"content",key:"content",width:200,render:()=>e.jsx(o,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(i,{label:"Icon",description:""}),dataIndex:"content",key:"content",width:60,render:()=>e.jsx(o,{style:{textAlign:"center"},icon:e.jsx(z,{})})},{title:()=>e.jsx(i,{label:"Slot Swap-able",description:"Description"}),dataIndex:"content",key:"content",width:300,render:()=>e.jsx(o,{icon:e.jsx(H,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(i,{label:"Action",hasRightDivider:!0}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(o,{icon:e.jsx(w,{size:"md",options:[{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(b,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(I,{}),variant:"secondary-invisible-negative"})}]})})}];return e.jsx(g,{dataSource:s,columns:U,rowSelection:J,scroll:{x:"max-content"},expandable:{expandedRowKeys:S,expandedRowRender:n=>e.jsx("p",{children:n.content}),onExpand:(n,t)=>B(t.key),expandIcon:()=>null,expandIconColumnIndex:-1}})},x=()=>{const s=[{key:"1",content:"John Doe",description:"Pending approval"},{key:"2",content:"Jane Smith",description:"Approved"}];return e.jsx(g,{dataSource:s,columns:[{title:()=>e.jsx(i,{label:"User",description:"Account owner",hasTruncateLabel:!0}),dataIndex:"content",key:"content",render:(r,l)=>e.jsx(o,{content:l.content,description:l.description})},{title:()=>e.jsx(i,{label:"Actions",description:"",hasRightDivider:!1}),dataIndex:"description",key:"actions",render:()=>e.jsx(o,{icon:e.jsx(w,{size:"md",options:[{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(b,{}),variant:"tertiary-invisible"})},{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(I,{}),variant:"secondary-invisible-negative"})}]})})}],scroll:{x:"max-content"}})};var v,T,R;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var F,D,K;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const dataSource = [{
    key: "1",
    content: "Content",
    description: "10 Downing Street 1"
  }, {
    key: "2",
    content: "Content 1",
    description: "10 Downing Street"
  }];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
  const [sortedInfo, setSortedInfo] = useState<{
    columnKey?: string;
    order?: string;
  }>({
    columnKey: undefined,
    order: undefined
  });
  const handleSort = (columnKey?: string, order?: string) => {
    setSortedInfo({
      columnKey,
      order
    });
  };
  const toggleExpand = (key: string) => {
    setExpandedRowKeys((prevKeys: string[]) => prevKeys.includes(key) ? prevKeys.filter(k => k !== key) : [...prevKeys, key]);
  };
  const isAllSelected = selectedRowKeys.length === dataSource.length;
  const isIndeterminate = selectedRowKeys.length > 0 && selectedRowKeys.length < dataSource.length;
  const handleSelect = (key: React.Key) => {
    setSelectedRowKeys((prevKeys: React.Key[]) => prevKeys.includes(key) ? prevKeys.filter(k => k !== key) : [...prevKeys, key]);
  };
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRowKeys([]);
    } else {
      setSelectedRowKeys(dataSource.map(item => item.key));
    }
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
    renderCell: (checked: boolean, record: any) => <FISTableCell icon={<Checkbox checked={checked} onChange={() => handleSelect(record.key)} />} hasBorder={false} />,
    columnTitle: <FISTableHeaderCell label="" rightComponent={<Checkbox checked={isAllSelected} indeterminate={isIndeterminate} onChange={() => toggleSelectAll()} />} hasRightDivider={false} />
  };
  const columns: any = [{
    dataIndex: "content",
    key: "content",
    width: 200,
    sorter: (a: {
      content: string;
    }, b: {
      content: string;
    }) => (a.content || "").localeCompare(b.content || ""),
    sortOrder: sortedInfo.columnKey === "content" ? sortedInfo.order : null,
    showSorterTooltip: false,
    title: () => {
      return <FISTableHeaderCell label="Text with collapse-able content" rightComponent={<FISSorter columnKey="content" onSort={handleSort} sortedInfo={sortedInfo} />} hasRightDivider />;
    },
    render: (_: any, row: {
      content: string | undefined;
      description: string | undefined;
      key: string;
    }) => <FISTableCell content={row.content} description={row.description} variant="primary-positive" icon={<DropdownIcon />}
    // onIconClick={() => toggleExpand(row.key)}
    textAlign="right" />
  }, {
    title: (): ColumnTitle<any> => <FISTableHeaderCell label="User" description="Description" rightComponent={<FISSorter columnKey="description" onSort={handleSort} sortedInfo={sortedInfo} />} hasRightDivider />,
    dataIndex: "description",
    width: 200,
    sorter: (a: {
      description: string;
    }, b: {
      description: string;
    }) => (a.description || "").localeCompare(b.description || ""),
    sortOrder: sortedInfo.columnKey === "description" ? sortedInfo.order : null,
    showSorterTooltip: false,
    render: (_: any, row: {
      content: string | undefined;
      description: string | undefined;
    }) => <FISTableCell style={{
      width: "100%",
      verticalAlign: "top"
    }} content={row.content} description={row.description} icon={<RiseIcon />} textAlign="left" />
  }, {
    title: (): ColumnTitle<any> => <FISTableHeaderCell label="Title Label" description="Description" />,
    dataIndex: "content",
    key: "content",
    width: 200,
    render: () => <FISTableCell content="Content" description="Sub text" />
  }, {
    title: (): ColumnTitle<any> => <FISTableHeaderCell label="Icon" description="" />,
    dataIndex: "content",
    key: "content",
    width: 60,
    render: () => <FISTableCell style={{
      textAlign: "center"
    }} icon={<CategoryIcon />} />
  }, {
    title: (): ColumnTitle<any> => <FISTableHeaderCell label="Slot Swap-able" description="Description" />,
    dataIndex: "content",
    key: "content",
    width: 300,
    render: () => <FISTableCell icon={<FISSlot description={"FIS PMO DS <br /> SLOT COMPONENT"} descriptionStyle={{
      width: "50%"
    }} />} />
  }, {
    title: (): ColumnTitle<any> => <FISTableHeaderCell label="Action" hasRightDivider />,
    dataIndex: "description",
    key: "description",
    width: 50,
    render: () => <FISTableCell icon={<FISButtonGroup size="md" options={[{
      label: "",
      startIcon: <FISIconButton size="xs" icon={<EditIcon />} variant="tertiary-invisible" color="red" />
    }, {
      label: "",
      startIcon: <FISIconButton size="xs" icon={<DeleteIcon />} variant="secondary-invisible-negative" />
    }]} />} />
  }];
  return <FISTable dataSource={dataSource} columns={columns} rowSelection={rowSelection} scroll={{
    x: "max-content"
  }} expandable={{
    expandedRowKeys,
    expandedRowRender: record => <p>{record.content}</p>,
    onExpand: (expanded, record) => toggleExpand(record.key),
    expandIcon: () => null,
    expandIconColumnIndex: -1
  }} />;
}`,...(K=(D=m.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var A,E,O;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const dataSource = [{
    key: "1",
    content: "John Doe",
    description: "Pending approval"
  }, {
    key: "2",
    content: "Jane Smith",
    description: "Approved"
  }];
  return <FISTable dataSource={dataSource} columns={[{
    title: () => <FISTableHeaderCell label="User" description="Account owner" hasTruncateLabel />,
    dataIndex: "content",
    key: "content",
    render: (_, row) => <FISTableCell content={row.content} description={row.description} />
  }, {
    title: () => <FISTableHeaderCell label="Actions" description="" hasRightDivider={false} />,
    dataIndex: "description",
    key: "actions",
    render: () => <FISTableCell icon={<FISButtonGroup size="md" options={[{
      label: "",
      startIcon: <FISIconButton size="xs" icon={<EditIcon />} variant="tertiary-invisible" />
    }, {
      label: "",
      startIcon: <FISIconButton size="xs" icon={<DeleteIcon />} variant="secondary-invisible-negative" />
    }]} />} />
  }]} scroll={{
    x: "max-content"
  }} />;
}`,...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Fe=["Default","RowSelection","CompactOperations"];export{x as CompactOperations,p as Default,m as RowSelection,Fe as __namedExportsOrder,Re as default};
