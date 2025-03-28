import{j as e}from"./jsx-runtime-47c18db8.js";import{r as x}from"./index-d806aa85.js";import{F as o}from"./index-1f2cc2d0.js";import{F as r}from"./index-a0e19d6a.js";import{d as P}from"./styled-components.browser.esm-c9db8114.js";import{g as s}from"./getTheme-fd88fed7.js";import{F as T}from"./index-bcd55432.js";import{f as B,C as F,E as O,g as E}from"./DeleteIcon-619c489d.js";import{C as q}from"./ChevronSelector-f9041cfa.js";import{R as A}from"./RiseIcon-d575a5e8.js";import{F as a}from"./index-218a7fe1.js";import{F as _,a as f,C as I,b as C}from"./FISSorter-7be511fa.js";import{C as b}from"./index-a1822994.js";import"./helper-57f3ac91.js";import"./index-0e235f3a.js";import"./index-d16835b1.js";import"./index-adec38b0.js";const V=P.div`
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
`,N=x.forwardRef(({className:l,description:i,descriptionStyle:c,...m},y)=>e.jsx(V,{ref:y,className:l,...m,children:e.jsx("div",{className:"slot-component",children:e.jsx("div",{style:c,className:"desc",dangerouslySetInnerHTML:{__html:`${i}`}})})}));try{Slot.displayName="Slot",Slot.__docgenInfo={description:"",displayName:"Slot",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},descriptionStyle:{defaultValue:null,description:"",name:"descriptionStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ae={title:"Components/Table/Table",component:_,tags:["autodocs"],args:{className:"",dataSource:[{key:"1",content:"Content",description:"10 Downing Street"},{key:"2",content:"Content",description:"10 Downing Street"}],columns:[{title:()=>e.jsx(o,{title:"Text with collapse-able content",showBorder:!1,showDivider:!0,contentWrapText:!0,icon:e.jsx(a,{icon:e.jsx(q,{}),size:"xs",variant:"tertiary-invisible"})}),dataIndex:"content",key:"content",width:200,render:(l,i)=>e.jsx(r,{content:i.content,description:i.description,variant:"primary-positive",showBorder:!1,icon:e.jsx(B,{})})},{title:()=>e.jsx(o,{title:"User",description:"Description",showBorder:!1,showDivider:!0}),dataIndex:"Content",width:200,render:(l,i)=>e.jsx(r,{content:i.content,description:i.description,icon:e.jsx(A,{}),textAlign:"left"})},{title:()=>e.jsx(o,{title:"Title Label",description:"Description",showBorder:!1}),dataIndex:"Content",key:"Content",width:200,render:()=>e.jsx(r,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(o,{title:"Icon",description:"",showBorder:!1}),dataIndex:"Content",key:"Content",width:100,render:()=>e.jsx(r,{icon:e.jsx(F,{})})},{title:()=>e.jsx(o,{title:"Slot Swap-able",description:"Description",showBorder:!1}),dataIndex:"description",key:"description",width:300,render:()=>e.jsx(r,{icon:e.jsx(N,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(o,{title:"Action",description:"",showBorder:!1,showDivider:!1}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(r,{icon:e.jsx(T,{size:"md",options:[{label:"",startIcon:e.jsx(a,{size:"xs",icon:e.jsx(O,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(a,{size:"xs",icon:e.jsx(E,{}),variant:"secondary-invisible-negative"})}]})})}]},argTypes:{}},p={},u=()=>{const l=[{key:"1",content:"Content",description:"10 Downing Street 11"},{key:"2",content:"Content 1",description:"10 Downing Street"}],[i,c]=x.useState([]),[m,y]=x.useState([]),[d,z]=x.useState({columnKey:null,order:null}),w=(n,t)=>{z({columnKey:n,order:t})},S=n=>{y(t=>t.includes(n)?t.filter(h=>h!==n):[...t,n])},g=i.length===l.length,$=i.length>0&&i.length<l.length,U=n=>{c(t=>t.includes(n)?t.filter(h=>h!==n):[...t,n])},H=()=>{c(g?[]:l.map(n=>n.key))},L={selectedRowKeys:i,onChange:n=>c(n),renderCell:(n,t)=>e.jsx(r,{icon:e.jsx(b,{checked:n,onChange:()=>U(t.key)}),showBorder:!1}),columnTitle:e.jsx(o,{showBorder:!1,showDivider:!0,icon:e.jsx(b,{checked:g,indeterminate:$,onChange:()=>H()})})},M=[{dataIndex:"content",key:"content",width:200,sorter:(n,t)=>(n.content||"").localeCompare(t.content||""),sortOrder:d.columnKey==="content"?d.order:null,showSorterTooltip:!1,title:()=>e.jsx(o,{title:"Text with collapse-able content",showBorder:!1,showDivider:!0,icon:e.jsx(f,{columnKey:"content",onSort:w,sortedInfo:d,UpIcon:I,DownIcon:C})}),render:(n,t)=>e.jsx(r,{content:t.content,description:t.description,variant:"primary-positive",icon:e.jsx(B,{}),onIconClick:()=>S(t.key),textAlign:"single-line"})},{title:()=>e.jsx(o,{title:"User",description:"Description",showBorder:!1,showDivider:!0,icon:e.jsx(f,{columnKey:"description",onSort:w,sortedInfo:d,UpIcon:I,DownIcon:C})}),dataIndex:"description",width:200,sorter:(n,t)=>(n.description||"").localeCompare(t.description||""),sortOrder:d.columnKey==="description"?d.order:null,showSorterTooltip:!1,render:(n,t)=>e.jsx(r,{style:{width:"100%",verticalAlign:"top"},content:t.content,description:t.description,icon:e.jsx(A,{}),textAlign:"left"})},{title:()=>e.jsx(o,{title:"Title Label",description:"Description",showBorder:!1}),dataIndex:"content",key:"content",width:200,render:()=>e.jsx(r,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(o,{title:"Icon",description:"",showBorder:!1}),dataIndex:"content",key:"content",width:60,render:()=>e.jsx(r,{style:{textAlign:"center"},icon:e.jsx(F,{})})},{title:()=>e.jsx(o,{title:"Slot Swap-able",description:"Description",showBorder:!1}),dataIndex:"content",key:"content",width:300,render:()=>e.jsx(r,{icon:e.jsx(N,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(o,{title:"Action",description:"",showBorder:!1,showDivider:!1}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(r,{icon:e.jsx(T,{size:"md",options:[{label:"",startIcon:e.jsx(a,{size:"xs",icon:e.jsx(O,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(a,{size:"xs",icon:e.jsx(E,{}),variant:"secondary-invisible-negative"})}]})})}];return e.jsx(_,{className:"table-row-selection-example",dataSource:l,columns:M,rowSelection:L,scroll:{x:"max-content"},expandable:{expandedRowKeys:m,expandedRowRender:n=>e.jsx("p",{children:n.content}),onExpand:(n,t)=>S(t.key),expandIcon:()=>null,expandIconColumnIndex:-1}})};var j,k,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(v=(k=p.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var D,K,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
    renderCell: (checked: boolean, record: any) => <FISColumnCell icon={<Checkbox checked={checked} onChange={() => handleSelect(record.key)} />} showBorder={false} />,
    columnTitle: <FISHeaderCell showBorder={false} showDivider={true} icon={<Checkbox checked={isAllSelected} indeterminate={isIndeterminate} onChange={() => toggleSelectAll()} />} />
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
      return <HeaderCell title="Text with collapse-able content" showBorder={false} showDivider={true} icon={<FISSorter columnKey="content" onSort={handleSort} sortedInfo={sortedInfo} UpIcon={CaretUpOutlined} DownIcon={CaretDownOutlined} />} />;
    },
    render: (_: any, row: {
      content: string | undefined;
      description: string | undefined;
      key: string;
    }) => <ColumnCell content={row.content} description={row.description} variant="primary-positive" icon={<DropdownIcon />} onIconClick={() => toggleExpand(row.key)} textAlign="single-line" />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell title="User" description="Description" showBorder={false} showDivider={true} icon={<FISSorter columnKey="description" onSort={handleSort} sortedInfo={sortedInfo} UpIcon={CaretUpOutlined} DownIcon={CaretDownOutlined} />} />,
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
    title: (): ColumnTitle<any> => <HeaderCell title="Title Label" description="Description" showBorder={false} />,
    dataIndex: "content",
    key: "content",
    width: 200,
    render: () => <ColumnCell content="Content" description="Sub text" />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell title="Icon" description="" showBorder={false} />,
    dataIndex: "content",
    key: "content",
    width: 60,
    render: () => <ColumnCell style={{
      textAlign: "center"
    }} icon={<CategoryIcon />} />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell title="Slot Swap-able" description="Description" showBorder={false} />,
    dataIndex: "content",
    key: "content",
    width: 300,
    render: () => <ColumnCell icon={<FISSlot description={"FIS PMO DS <br /> SLOT COMPONENT"} descriptionStyle={{
      width: "50%"
    }} />} />
  }, {
    title: (): ColumnTitle<any> => <HeaderCell title="Action" description="" showBorder={false} showDivider={false} />,
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
  return <FISTable className="table-row-selection-example" dataSource={dataSource} columns={columns} rowSelection={rowSelection} scroll={{
    x: "max-content"
  }} expandable={{
    expandedRowKeys,
    expandedRowRender: record => <p>{record.content}</p>,
    onExpand: (expanded, record) => toggleExpand(record.key),
    expandIcon: () => null,
    expandIconColumnIndex: -1
  }} />;
}`,...(R=(K=u.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};const pe=["Default","RowSelection"];export{p as Default,u as RowSelection,pe as __namedExportsOrder,ae as default};
