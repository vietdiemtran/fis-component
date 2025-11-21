import{j as e}from"./jsx-runtime-47c18db8.js";import{r as g}from"./index-d806aa85.js";import{a as K,F as i}from"./index-3a82093b.js";import{p as B,q as H,r as q,D as F,C as E,s as N,t as A}from"./LineArrowsUp-e7620e4c.js";import{F as s,R as _}from"./index-29badccf.js";import{F as O}from"./index-709ef4a4.js";import{C}from"./index-22d0325b.js";import{F as m}from"./index-8f5d9190.js";import{d as G,g as a}from"./getTheme-c4dbdb94.js";import"./index-d16835b1.js";import"./AntdIcon-da8c7625.js";import"./index-f3dd586f.js";import"./roundedArrow-947bbcf5.js";import"./UnstableContext-67a4a586.js";import"./useSize-daa0eabb.js";import"./button-698f55af.js";import"./pickAttrs-e64de682.js";import"./Pagination-2f22dee3.js";import"./RightOutlined-a5fcfe09.js";import"./useMergedState-75bf327f.js";import"./KeyCode-6413d982.js";import"./index-b0876041.js";import"./useCSSVarCls-ac2b7954.js";import"./motion-17531b5d.js";import"./index-3b4943b3.js";import"./collapse-97de76d4.js";import"./index-84c6d358.js";const U=G.div`
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
`,L=g.forwardRef(({className:r,description:o,descriptionStyle:d,...p},u)=>e.jsx(U,{ref:u,className:r,...p,children:e.jsx("div",{className:"slot-component",children:e.jsx("div",{style:d,className:"desc",dangerouslySetInnerHTML:{__html:`${o}`}})})}));try{Slot.displayName="Slot",Slot.__docgenInfo={description:"",displayName:"Slot",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},descriptionStyle:{defaultValue:null,description:"",name:"descriptionStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const c={ASCEND:"ascend",DESCEND:"descend",NONE:void 0},h=({columnKey:r,onSort:o,sortedInfo:d,UpIcon:p=B,DownIcon:u=H})=>{const l=d.columnKey===r?d.order:c.NONE,I=()=>{const b=l===c.ASCEND?c.DESCEND:l===c.DESCEND?c.NONE:c.ASCEND;o(r,b)},S=()=>l===c.ASCEND?e.jsx(p,{}):l===c.DESCEND?e.jsx(u,{}):e.jsx(q,{});return e.jsx(m,{onClick:I,variant:"tertiary-invisible",size:"xs",icon:S()})};try{h.displayName="FISSorter",h.__docgenInfo={description:"",displayName:"FISSorter",props:{columnKey:{defaultValue:null,description:"",name:"columnKey",required:!0,type:{name:"string"}},onSort:{defaultValue:null,description:"",name:"onSort",required:!0,type:{name:"(columnKey?: string | undefined, order?: string | undefined) => void"}},sortedInfo:{defaultValue:null,description:"",name:"sortedInfo",required:!0,type:{name:"{ columnKey?: string | undefined; order?: string | undefined; }"}},UpIcon:{defaultValue:{value:`(props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.66667 13.3333V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329M11.3333 13.3333V5.99996M11.3333 5.99996L8.66667 8.66663M11.3333 5.99996L14 8.66663"
      stroke="#505A5F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)`},description:"",name:"UpIcon",required:!1,type:{name:"ComponentType<{ style?: CSSProperties; }>"}},DownIcon:{defaultValue:{value:`(props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.3333 2.66663V9.99996M11.3333 9.99996L8.66667 7.33329M11.3333 9.99996L14 7.33329M4.66667 2.66663V13.3333M4.66667 13.3333L2 10.6666M4.66667 13.3333L7.33333 10.6666"
      stroke="#505A5F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)`},description:"",name:"DownIcon",required:!1,type:{name:"ComponentType<{ style?: CSSProperties; }>"}}}}}catch{}const we={title:"Components/Table/Table",component:K,tags:["autodocs"],args:{className:"",verticalHeader:"top",dataSource:[{key:"1",content:"Content",description:"10 Downing Street"},{key:"2",content:"Content",description:"10 Downing Street"}],columns:[{title:e.jsx(i,{label:"Text with collapse-able content",hasTruncateLabel:!0}),dataIndex:"content",key:"content",width:200,render:(r,o)=>e.jsx(s,{content:o.content,description:o.description,variant:"primary-positive",hasBorder:!1,icon:e.jsx(F,{})})},{title:()=>e.jsx(i,{label:"User",description:"Description",hasRightDivider:!0}),dataIndex:"Content",width:200,render:(r,o)=>e.jsx(s,{content:o.content,description:o.description,icon:e.jsx(_,{}),textAlign:"left"})},{title:()=>e.jsx(i,{label:"Title Label",description:"Description"}),dataIndex:"Content",key:"Content",width:200,render:()=>e.jsx(s,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(i,{label:"Icon",description:""}),dataIndex:"Content",key:"Content",width:100,render:()=>e.jsx(s,{icon:e.jsx(E,{})})},{title:()=>e.jsx(i,{label:"Slot Swap-able",description:"Description"}),dataIndex:"description",key:"description",width:300,render:()=>e.jsx(s,{icon:e.jsx(L,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(i,{label:"Action",description:"",hasRightDivider:!1}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(s,{icon:e.jsx(O,{size:"md",options:[{label:"",startIcon:e.jsx(m,{size:"xs",icon:e.jsx(N,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(m,{size:"xs",icon:e.jsx(A,{}),variant:"secondary-invisible-negative"})}]})})}]},argTypes:{}},x={},y=()=>{const r=[{key:"1",content:"Content",description:"10 Downing Street 1"},{key:"2",content:"Content 1",description:"10 Downing Street"}],[o,d]=g.useState([]),[p,u]=g.useState([]),[l,I]=g.useState({columnKey:void 0,order:void 0}),S=(n,t)=>{I({columnKey:n,order:t})},b=n=>{u(t=>t.includes(n)?t.filter(w=>w!==n):[...t,n])},f=o.length===r.length,M=o.length>0&&o.length<r.length,V=n=>{d(t=>t.includes(n)?t.filter(w=>w!==n):[...t,n])},z=()=>{d(f?[]:r.map(n=>n.key))},$={selectedRowKeys:o,onChange:n=>d(n),renderCell:(n,t)=>e.jsx(s,{icon:e.jsx(C,{checked:n,onChange:()=>V(t.key)}),hasBorder:!1}),columnTitle:e.jsx(i,{label:"",rightComponent:e.jsx(C,{checked:f,indeterminate:M,onChange:()=>z()}),hasRightDivider:!1})},P=[{dataIndex:"content",key:"content",width:200,sorter:(n,t)=>(n.content||"").localeCompare(t.content||""),sortOrder:l.columnKey==="content"?l.order:null,showSorterTooltip:!1,title:()=>e.jsx(i,{label:"Text with collapse-able content",rightComponent:e.jsx(h,{columnKey:"content",onSort:S,sortedInfo:l}),hasRightDivider:!0}),render:(n,t)=>e.jsx(s,{content:t.content,description:t.description,variant:"primary-positive",icon:e.jsx(F,{}),textAlign:"right"})},{title:()=>e.jsx(i,{label:"User",description:"Description",rightComponent:e.jsx(h,{columnKey:"description",onSort:S,sortedInfo:l}),hasRightDivider:!0}),dataIndex:"description",width:200,sorter:(n,t)=>(n.description||"").localeCompare(t.description||""),sortOrder:l.columnKey==="description"?l.order:null,showSorterTooltip:!1,render:(n,t)=>e.jsx(s,{style:{width:"100%",verticalAlign:"top"},content:t.content,description:t.description,icon:e.jsx(_,{}),textAlign:"left"})},{title:()=>e.jsx(i,{label:"Title Label",description:"Description"}),dataIndex:"content",key:"content",width:200,render:()=>e.jsx(s,{content:"Content",description:"Sub text"})},{title:()=>e.jsx(i,{label:"Icon",description:""}),dataIndex:"content",key:"content",width:60,render:()=>e.jsx(s,{style:{textAlign:"center"},icon:e.jsx(E,{})})},{title:()=>e.jsx(i,{label:"Slot Swap-able",description:"Description"}),dataIndex:"content",key:"content",width:300,render:()=>e.jsx(s,{icon:e.jsx(L,{description:"FIS PMO DS <br /> SLOT COMPONENT",descriptionStyle:{width:"50%"}})})},{title:()=>e.jsx(i,{label:"Action",hasRightDivider:!0}),dataIndex:"description",key:"description",width:50,render:()=>e.jsx(s,{icon:e.jsx(O,{size:"md",options:[{label:"",startIcon:e.jsx(m,{size:"xs",icon:e.jsx(N,{}),variant:"tertiary-invisible",color:"red"})},{label:"",startIcon:e.jsx(m,{size:"xs",icon:e.jsx(A,{}),variant:"secondary-invisible-negative"})}]})})}];return e.jsx(K,{dataSource:r,columns:P,rowSelection:$,scroll:{x:"max-content"},expandable:{expandedRowKeys:p,expandedRowRender:n=>e.jsx("p",{children:n.content}),onExpand:(n,t)=>b(t.key),expandIcon:()=>null,expandIconColumnIndex:-1}})};var j,k,v;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(v=(k=x.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,D,R;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const fe=["Default","RowSelection"];export{x as Default,y as RowSelection,fe as __namedExportsOrder,we as default};
