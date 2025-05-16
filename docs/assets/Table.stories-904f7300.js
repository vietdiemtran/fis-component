import{j as e}from"./jsx-runtime-47c18db8.js";import{r as u}from"./index-d806aa85.js";import{a as K,F as o,C as I,b as C}from"./index-ea9f1f0b.js";import{j as T,C as F,E as O,k as E}from"./ArrowRightIcon-2d46fdf7.js";import{C as P}from"./ChevronSelector-f9041cfa.js";import{R as A}from"./RiseIcon-d575a5e8.js";import{F as _}from"./index-b3be51e8.js";import{C as w}from"./index-873f32b7.js";import{F as d}from"./index-e72c950e.js";import{d as q,g as s}from"./getTheme-624682de.js";import{F as i}from"./index-1120f323.js";import{F as b}from"./FISSorter-dda77e13.js";import"./AntdIcon-b5d0c52f.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./roundedArrow-b20e57e4.js";import"./UnstableContext-a2e933a8.js";import"./useSize-ee7d4598.js";import"./button-1608bba2.js";import"./pickAttrs-551e8cfe.js";import"./index-70c9a0e9.js";import"./useMergedState-1b150724.js";import"./useCSSVarCls-b4f81dac.js";import"./collapse-8e27e3c5.js";import"./KeyCode-6413d982.js";import"./index-be6f683c.js";import"./motion-58c6f938.js";import"./index-8298a7d1.js";const V=q.div`
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
`,z=u.forwardRef(({className:l,description:r,descriptionStyle:c,...x},y)=>e.jsx(V,{ref:y,className:l,...x,children:e.jsx("div",{className:"slot-component",children:e.jsx("div",{style:c,className:"desc",dangerouslySetInnerHTML:{__html:`${r}`}})})}));try{Slot.displayName="Slot",Slot.__docgenInfo={description:"",displayName:"Slot",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},descriptionStyle:{defaultValue:null,description:"",name:"descriptionStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const we={title:"Components/Table/Table",component:K,tags:["autodocs"],args:{className:"",verticalHeader:"top",dataSource:[{key:"1",content:"Content",description:"10 Downing Street"},{key:"2",content:"Content",description:"10 Downing Street"}],columns:[{title:e.jsx(o,{label:"Text with collapse-able content",rightComponent:e.jsx(d,{icon:e.jsx(P,{}),size:"xs",variant:"tertiary-invisible"}),hasTruncateLabel:!0}),dataIndex:"content",key:"content",width:200,render:(l,r)=>e.jsx(i,{content:r.content,description:r.description,variant:"primary-positive",hasBorder:!1,icon:e.jsx(T,{})})},{title:()=>e.jsx(o,{label:"User",description:"Description",hasRightDivider:!0}),dataIndex:"Content",width:200,render:(l,r)=>e.jsx(i,{content:r.content,description:r.description,icon:e.jsx(A,{}),textAlign:"left"})},{title:()=>e.jsx(o,{label:"Title Label",description:"Description"}),dataIndex:"Content",key:"Content",width:200,render:()=>e.jsx(i,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(o,{label:"Icon",description:""}),dataIndex:"Content",key:"Content",width:100,render:()=>e.jsx(i,{icon:e.jsx(F,{})})},{title:()=>e.jsx(o,{label:"Slot Swap-able",description:"Description"}),dataIndex:"description",key:"description",width:300,render:()=>e.jsx(i,{icon:e.jsx(z,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(o,{label:"Action",description:"",hasRightDivider:!1}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(i,{icon:e.jsx(_,{size:"md",options:[{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(O,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(E,{}),variant:"secondary-invisible-negative"})}]})})}]},argTypes:{}},p={},m=()=>{const l=[{key:"1",content:"Content",description:"10 Downing Street 11"},{key:"2",content:"Content 1",description:"10 Downing Street"}],[r,c]=u.useState([]),[x,y]=u.useState([]),[a,N]=u.useState({columnKey:null,order:null}),g=(n,t)=>{N({columnKey:n,order:t})},$=n=>{y(t=>t.includes(n)?t.filter(h=>h!==n):[...t,n])},S=r.length===l.length,H=r.length>0&&r.length<l.length,U=n=>{c(t=>t.includes(n)?t.filter(h=>h!==n):[...t,n])},B=()=>{c(S?[]:l.map(n=>n.key))},L={selectedRowKeys:r,onChange:n=>c(n),renderCell:(n,t)=>e.jsx(i,{icon:e.jsx(w,{checked:n,onChange:()=>U(t.key)}),hasBorder:!1}),columnTitle:e.jsx(o,{label:"",rightComponent:e.jsx(w,{checked:S,indeterminate:H,onChange:()=>B()}),hasRightDivider:!1})},M=[{dataIndex:"content",key:"content",width:200,sorter:(n,t)=>(n.content||"").localeCompare(t.content||""),sortOrder:a.columnKey==="content"?a.order:null,showSorterTooltip:!1,title:()=>e.jsx(o,{label:"Text with collapse-able content",rightComponent:e.jsx(b,{columnKey:"content",onSort:g,sortedInfo:a,UpIcon:I,DownIcon:C}),hasRightDivider:!0}),render:(n,t)=>e.jsx(i,{content:t.content,description:t.description,variant:"primary-positive",icon:e.jsx(T,{}),textAlign:"single-line"})},{title:()=>e.jsx(o,{label:"User",description:"Description",rightComponent:e.jsx(b,{columnKey:"description",onSort:g,sortedInfo:a,UpIcon:I,DownIcon:C}),hasRightDivider:!0}),dataIndex:"description",width:200,sorter:(n,t)=>(n.description||"").localeCompare(t.description||""),sortOrder:a.columnKey==="description"?a.order:null,showSorterTooltip:!1,render:(n,t)=>e.jsx(i,{style:{width:"100%",verticalAlign:"top"},content:t.content,description:t.description,icon:e.jsx(A,{}),textAlign:"left"})},{title:()=>e.jsx(o,{label:"Title Label",description:"Description"}),dataIndex:"content",key:"content",width:200,render:()=>e.jsx(i,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(o,{label:"Icon",description:""}),dataIndex:"content",key:"content",width:60,render:()=>e.jsx(i,{style:{textAlign:"center"},icon:e.jsx(F,{})})},{title:()=>e.jsx(o,{label:"Slot Swap-able",description:"Description"}),dataIndex:"content",key:"content",width:300,render:()=>e.jsx(i,{icon:e.jsx(z,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(o,{label:"Action",hasRightDivider:!0}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(i,{icon:e.jsx(_,{size:"md",options:[{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(O,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(d,{size:"xs",icon:e.jsx(E,{}),variant:"secondary-invisible-negative"})}]})})}];return e.jsx(K,{dataSource:l,columns:M,rowSelection:L,scroll:{x:"max-content"},expandable:{expandedRowKeys:x,expandedRowRender:n=>e.jsx("p",{children:n.content}),onExpand:(n,t)=>$(t.key),expandIcon:()=>null,expandIconColumnIndex:-1}})};var f,j,k;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var v,R,D;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const dataSource = [{
    key: "1",
    content: "Content",
    description: "10 Downing Street 11"
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
    renderCell: (checked: boolean, record: any) => <FISColumnCell icon={<Checkbox checked={checked} onChange={() => handleSelect(record.key)} />} hasBorder={false} />,
    columnTitle: <FISHeaderCell label="" rightComponent={<Checkbox checked={isAllSelected} indeterminate={isIndeterminate} onChange={() => toggleSelectAll()} />} hasRightDivider={false} />
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
      return <HeaderCell label="Text with collapse-able content" rightComponent={<FISSorter columnKey="content" onSort={handleSort} sortedInfo={sortedInfo} UpIcon={CaretUpOutlined} DownIcon={CaretDownOutlined} />} hasRightDivider />;
    },
    render: (_: any, row: {
      content: string | undefined;
      description: string | undefined;
      key: string;
    }) => <ColumnCell content={row.content} description={row.description} variant="primary-positive" icon={<DropdownIcon />}
    // onIconClick={() => toggleExpand(row.key)}
    textAlign="single-line" />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell label="User" description="Description" rightComponent={<FISSorter columnKey="description" onSort={handleSort} sortedInfo={sortedInfo} UpIcon={CaretUpOutlined} DownIcon={CaretDownOutlined} />} hasRightDivider />,
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
    }) => <ColumnCell style={{
      width: "100%",
      verticalAlign: "top"
    }} content={row.content} description={row.description} icon={<RiseIcon />} textAlign="left" />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell label="Title Label" description="Description" />,
    dataIndex: "content",
    key: "content",
    width: 200,
    render: () => <ColumnCell content="Content" description="Sub text" />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell label="Icon" description="" />,
    dataIndex: "content",
    key: "content",
    width: 60,
    render: () => <ColumnCell style={{
      textAlign: "center"
    }} icon={<CategoryIcon />} />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell label="Slot Swap-able" description="Description" />,
    dataIndex: "content",
    key: "content",
    width: 300,
    render: () => <ColumnCell icon={<FISSlot description={"FIS PMO DS <br /> SLOT COMPONENT"} descriptionStyle={{
      width: "50%"
    }} />} />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell label="Action" hasRightDivider />,
    dataIndex: "description",
    key: "description",
    width: 50,
    render: () => <ColumnCell icon={<FISButtonGroup size="md" options={[{
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
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const be=["Default","RowSelection"];export{p as Default,m as RowSelection,be as __namedExportsOrder,we as default};
