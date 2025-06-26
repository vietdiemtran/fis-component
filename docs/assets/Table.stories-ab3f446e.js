import{j as e}from"./jsx-runtime-47c18db8.js";import{r as m}from"./index-d806aa85.js";import{a as R,F as o}from"./index-721a2c0c.js";import{m as v,C as K,E as F,n as D}from"./LineArrowsUp-4acd88f0.js";import{R as E}from"./RiseIcon-d575a5e8.js";import{F as A}from"./index-b3be51e8.js";import{C as b}from"./index-baad6b63.js";import{F as x}from"./index-96f4e19f.js";import{d as M,g as s}from"./getTheme-624682de.js";import{F as i}from"./index-d8d722f1.js";import{F as I}from"./FISSorter-721bb526.js";import"./AntdIcon-b5d0c52f.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./roundedArrow-09d3ee87.js";import"./UnstableContext-a2e933a8.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./pickAttrs-551e8cfe.js";import"./index-a14b58ae.js";import"./useMergedState-1b150724.js";import"./useCSSVarCls-b4f81dac.js";import"./collapse-8e27e3c5.js";import"./KeyCode-6413d982.js";import"./index-94ce6d4e.js";import"./motion-58c6f938.js";import"./index-8298a7d1.js";const P=M.div`
  .slot-component {
    width: 100%;
    min-height: fit-content;
    background-color: #e6eaee;
    border-radius: ${s("sem/dimension/radius/component/sm")};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6b778c;
    position: relative;
    overflow: hidden;
    border: 1px dashed ${s("sem/color/stroke/neutral/sub")};

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 122%;
      height: 232%;
      border: 1px dashed ${s("sem/color/stroke/neutral/sub")};
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
      ${s("Subheading/XS")};
      height: 100%;
      background: #e6eaee;
      padding: 20px;
      width: 25%;
      z-index: 1;
      word-break: break-word;
      font-family: ${s("sem/typo/subheading/font")};
      font-weight: ${s("sem/typo/subheading/weight")};
      font-size: ${s("sem/typo/subheading/size/xs")};
      line-height: ${s("sem/typo/subheading/line-height/xs")};
      letter-spacing: ${s("sem/typo/subheading/letter-spacing/xs")};
      text-transform: uppercase;
      color: ${s("sem/color/text/neutral/soft")};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`,O=m.forwardRef(({className:l,description:r,descriptionStyle:a,...u},S)=>e.jsx(P,{ref:S,className:l,...u,children:e.jsx("div",{className:"slot-component",children:e.jsx("div",{style:a,className:"desc",dangerouslySetInnerHTML:{__html:`${r}`}})})}));try{Slot.displayName="Slot",Slot.__docgenInfo={description:"",displayName:"Slot",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},descriptionStyle:{defaultValue:null,description:"",name:"descriptionStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const he={title:"Components/Table/Table",component:R,tags:["autodocs"],args:{className:"",verticalHeader:"top",dataSource:[{key:"1",content:"Content",description:"10 Downing Street"},{key:"2",content:"Content",description:"10 Downing Street"}],columns:[{title:e.jsx(o,{label:"Text with collapse-able content",hasTruncateLabel:!0}),dataIndex:"content",key:"content",width:200,render:(l,r)=>e.jsx(i,{content:r.content,description:r.description,variant:"primary-positive",hasBorder:!1,icon:e.jsx(v,{})})},{title:()=>e.jsx(o,{label:"User",description:"Description",hasRightDivider:!0}),dataIndex:"Content",width:200,render:(l,r)=>e.jsx(i,{content:r.content,description:r.description,icon:e.jsx(E,{}),textAlign:"left"})},{title:()=>e.jsx(o,{label:"Title Label",description:"Description"}),dataIndex:"Content",key:"Content",width:200,render:()=>e.jsx(i,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(o,{label:"Icon",description:""}),dataIndex:"Content",key:"Content",width:100,render:()=>e.jsx(i,{icon:e.jsx(K,{})})},{title:()=>e.jsx(o,{label:"Slot Swap-able",description:"Description"}),dataIndex:"description",key:"description",width:300,render:()=>e.jsx(i,{icon:e.jsx(O,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(o,{label:"Action",description:"",hasRightDivider:!1}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(i,{icon:e.jsx(A,{size:"md",options:[{label:"",startIcon:e.jsx(x,{size:"xs",icon:e.jsx(F,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(x,{size:"xs",icon:e.jsx(D,{}),variant:"secondary-invisible-negative"})}]})})}]},argTypes:{}},d={},p=()=>{const l=[{key:"1",content:"Content",description:"10 Downing Street 1"},{key:"2",content:"Content 1",description:"10 Downing Street"}],[r,a]=m.useState([]),[u,S]=m.useState([]),[c,_]=m.useState({columnKey:null,order:null}),h=(n,t)=>{_({columnKey:n,order:t})},N=n=>{S(t=>t.includes(n)?t.filter(y=>y!==n):[...t,n])},g=r.length===l.length,z=r.length>0&&r.length<l.length,$=n=>{a(t=>t.includes(n)?t.filter(y=>y!==n):[...t,n])},H=()=>{a(g?[]:l.map(n=>n.key))},B={selectedRowKeys:r,onChange:n=>a(n),renderCell:(n,t)=>e.jsx(i,{icon:e.jsx(b,{checked:n,onChange:()=>$(t.key)}),hasBorder:!1}),columnTitle:e.jsx(o,{label:"",rightComponent:e.jsx(b,{checked:g,indeterminate:z,onChange:()=>H()}),hasRightDivider:!1})},L=[{dataIndex:"content",key:"content",width:200,sorter:(n,t)=>(n.content||"").localeCompare(t.content||""),sortOrder:c.columnKey==="content"?c.order:null,showSorterTooltip:!1,title:()=>e.jsx(o,{label:"Text with collapse-able content",rightComponent:e.jsx(I,{columnKey:"content",onSort:h,sortedInfo:c}),hasRightDivider:!0}),render:(n,t)=>e.jsx(i,{content:t.content,description:t.description,variant:"primary-positive",icon:e.jsx(v,{}),textAlign:"right"})},{title:()=>e.jsx(o,{label:"User",description:"Description",rightComponent:e.jsx(I,{columnKey:"description",onSort:h,sortedInfo:c}),hasRightDivider:!0}),dataIndex:"description",width:200,sorter:(n,t)=>(n.description||"").localeCompare(t.description||""),sortOrder:c.columnKey==="description"?c.order:null,showSorterTooltip:!1,render:(n,t)=>e.jsx(i,{style:{width:"100%",verticalAlign:"top"},content:t.content,description:t.description,icon:e.jsx(E,{}),textAlign:"left"})},{title:()=>e.jsx(o,{label:"Title Label",description:"Description"}),dataIndex:"content",key:"content",width:200,render:()=>e.jsx(i,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(o,{label:"Icon",description:""}),dataIndex:"content",key:"content",width:60,render:()=>e.jsx(i,{style:{textAlign:"center"},icon:e.jsx(K,{})})},{title:()=>e.jsx(o,{label:"Slot Swap-able",description:"Description"}),dataIndex:"content",key:"content",width:300,render:()=>e.jsx(i,{icon:e.jsx(O,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(o,{label:"Action",hasRightDivider:!0}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(i,{icon:e.jsx(A,{size:"md",options:[{label:"",startIcon:e.jsx(x,{size:"xs",icon:e.jsx(F,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(x,{size:"xs",icon:e.jsx(D,{}),variant:"secondary-invisible-negative"})}]})})}];return e.jsx(R,{dataSource:l,columns:L,rowSelection:B,scroll:{x:"max-content"},expandable:{expandedRowKeys:u,expandedRowRender:n=>e.jsx("p",{children:n.content}),onExpand:(n,t)=>N(t.key),expandIcon:()=>null,expandIconColumnIndex:-1}})};var w,f,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var j,k,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
    columnKey: string | null;
    order: string | null;
  }>({
    columnKey: null,
    order: null
  });
  const handleSort = (columnKey: string | null, order: string | null) => {
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
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ge=["Default","RowSelection"];export{d as Default,p as RowSelection,ge as __namedExportsOrder,he as default};
