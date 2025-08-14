import{j as t}from"./jsx-runtime-47c18db8.js";import{g as s}from"./index-f11fe411.js";import{r as n}from"./index-d806aa85.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./LineArrowsUp-f9d28287.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-15c2cb0c.js";import"./index-6b2c958e.js";import"./context-34092653.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-c563c380.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-cce59dfd.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-a6ed384e.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-478976a9.js";import"./index-39568251.js";import"./index-63636042.js";import"./index-9a35051c.js";import"./index-6de1cb25.js";import"./index-100e3eb9.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-d06e9207.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-cc0dda86.js";import"./collapse-8e27e3c5.js";import"./index-2fc8f5b5.js";import"./index-e9b8e115.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-e07ee9d0.js";import"./FISSorter-98bf8fa6.js";import"./index-8f7cb1ce.js";import"./index-55d04594.js";import"./index-9d8d5b2b.js";import"./index-eca51d54.js";const h=[{groupLabel:"Nhóm 1",items:[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"}]}],xt={title:"Components/Select",component:s,tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},negative:{control:"boolean"},positive:{control:"boolean"},message:{control:"text"},textLabel:{control:"text"},iconLabel:{control:"select",options:["none","info"]},required:{control:"boolean"},loading:{control:"boolean"},multi:{control:"boolean"},options:{control:"object"},value:{control:"text"},size:{control:"radio",options:["md","lg"]},placeholderSearch:{control:"text"},multiDisplayText:{control:"text"},removeSelectedText:{control:"text"},maxHeight:{control:"number"}},args:{options:h,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",required:!1,disabled:!1,negative:!1,positive:!1,size:"md",message:""}},re=i=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,options:h})})},ie=i=>{const[l,a]=n.useState(""),[e,r]=n.useState(""),d=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],g=n.useMemo(()=>{const o=e==null?void 0:e.toLowerCase();return d.map(u=>{var p;return{...u,items:(p=u==null?void 0:u.items)==null?void 0:p.filter(c=>{var m,T;return(T=(m=c==null?void 0:c.label)==null?void 0:m.toLowerCase())==null?void 0:T.includes(o)})}})},[e]);return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Search fruits",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:o=>a(o),multi:!1,options:g,searchValue:e,onSearchChange:r})})},ue=i=>{const[l,a]=n.useState(["apple"]),[e,r]=n.useState(""),d=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],g=n.useMemo(()=>{const o=e==null?void 0:e.toLowerCase();return d.map(u=>({...u,items:u.items.filter(p=>{var c,m;return(m=(c=p==null?void 0:p.label)==null?void 0:c.toLowerCase())==null?void 0:m.includes(o)})}))},[e]);return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:o=>a(o),multi:!0,options:g,searchValue:e,onSearchChange:r,multiDisplayText:o=>`${o} đã chọn`})})},pe=i=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",value:l,onChange:e=>a(e),multi:!1,required:!0,textLabel:"Tên sản phẩm",message:"Vui lòng chọn sản phẩm",negative:!0,options:h})})},ce=i=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Đang tải...",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,loading:!0,options:h})})},me=i=>{const[l,a]=n.useState(""),[e,r]=n.useState(""),d=[{groupLabel:"Thành phố",items:[{label:"Hà Nội",value:"hanoi"},{label:"Thành phố Hồ Chí Minh",value:"hcm"},{label:"Đà Nẵng",value:"danang"},{label:"Hải Phòng",value:"haiphong"},{label:"Cần Thơ",value:"cantho"}]},{groupLabel:"Quốc gia",items:[{label:"Việt Nam",value:"vietnam"},{label:"Nhật Bản",value:"japan"},{label:"Hàn Quốc",value:"korea"},{label:"Singapore",value:"singapore"},{label:"Malaysia",value:"malaysia"}]}],g=n.useMemo(()=>{const o=e==null?void 0:e.toLowerCase();return d.map(u=>({...u,items:u.items.filter(p=>{var c,m;return(m=(c=p==null?void 0:p.label)==null?void 0:c.toLowerCase())==null?void 0:m.includes(o)})}))},[e]);return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:t.jsx("div",{children:t.jsx(s,{placeholder:"Chọn địa điểm của bạn...",placeholderSearch:"Tìm kiếm địa điểm...",textLabel:"Địa điểm",value:l,onChange:o=>a(o),multi:!1,options:g,searchValue:e,onSearchChange:r})})})},he=i=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Select large size",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,size:"lg",options:h})})},de=i=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Select disabled",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,disabled:!0,options:h})})},ge=i=>{const[l,a]=n.useState(0),e=[{groupLabel:"Prices",items:[{label:"100,000 VND",value:1e5},{label:"200,000 VND",value:2e5},{label:"300,000 VND",value:3e5}]},{groupLabel:"Quantities",items:[{label:"1 item",value:1},{label:"2 items",value:2},{label:"3 items",value:3}]}];return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Select a number",placeholderSearch:"Search numbers",textLabel:"Number Select",value:l,onChange:r=>a(r),multi:!1,disabled:!0,options:e})})},be=i=>{const[l,a]=n.useState(""),e=[{groupLabel:"Group 1",items:[{label:"Option 1 - This is a very long text that should be truncated with ellipsis when it exceeds the container width",value:"1"},{label:"Option 2 - Another long option text that demonstrates ellipsis behavior",value:"2"},{label:"Option 3 - Short text",value:"3"},{label:"Option 4 - Medium length option text",value:"4"},{label:"Option 5 - Very very very very long text that definitely needs to be truncated",value:"5"}]},{groupLabel:"Group 2 - This is also a long group label that might need ellipsis",items:[{label:"Option 6 - Extremely long option text that should demonstrate the ellipsis functionality perfectly",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8 - Another example of long text for testing purposes",value:"8"},{label:"Option 9 - Testing ellipsis with this lengthy option name",value:"9"},{label:"Option 10",value:"10"}]},{groupLabel:"Group 3",items:[{label:"Option 11 - Super long text that exceeds normal width expectations",value:"11"},{label:"Option 12",value:"12"},{label:"Option 13 - Long descriptive text for comprehensive testing",value:"13"},{label:"Option 14",value:"14"},{label:"Option 15 - Final long text example to verify ellipsis works correctly",value:"15"}]}];return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Select with custom max height",placeholderSearch:"Tìm kiếm",textLabel:"Custom Max Height Select",value:l,onChange:r=>a(r),multi:!1,maxHeight:200,options:e})})},ve=i=>{const[l,a]=n.useState("long1"),e=[{groupLabel:"This is an extremely long group label that should demonstrate the ellipsis functionality when it exceeds the available width of the dropdown menu container",items:[{label:"This is an extremely long option text that should be truncated with ellipsis (...) when it exceeds the available width of the dropdown menu item container to maintain proper UI layout",value:"long1"},{label:"Short option",value:"short1"},{label:"Another very long option text example that demonstrates how the ellipsis feature works with different lengths of text content in the select dropdown menu items",value:"long2"}]},{groupLabel:"Normal Group",items:[{label:"Regular option text",value:"regular1"},{label:"Yet another example of extremely long text that should be properly handled by the ellipsis functionality to ensure good user experience and proper layout",value:"long3"}]}];return t.jsx("div",{style:{width:300},children:t.jsx(s,{placeholder:"Select with ellipsis demo",placeholderSearch:"Tìm kiếm",textLabel:"Text Ellipsis Demo",value:l,onChange:r=>a(r),multi:!1,options:e})})},b=re.bind({}),v=ie.bind({}),S=ue.bind({}),x=pe.bind({}),y=ce.bind({}),w=he.bind({}),f=de.bind({}),V=ge.bind({}),L=be.bind({}),O=ve.bind({}),C=me.bind({});var k,j,I;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={sampleOptions} />
    </div>;
}`,...(I=(j=b.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var M,N,D;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const originalOptions: SelectOption<string>[] = [{
    groupLabel: "Fruits",
    items: [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Lemon",
      value: "lemon"
    }, {
      label: "Jackfruit",
      value: "jackfruit"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Mango",
      value: "mango"
    }]
  }];
  const filteredOptions = useMemo(() => {
    const keyword = search?.toLowerCase();
    return originalOptions.map(group => ({
      ...group,
      items: group?.items?.filter(item => item?.label?.toLowerCase()?.includes(keyword))
    }));
  }, [search]);
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Search fruits" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={filteredOptions} searchValue={search} onSearchChange={setSearch} />
    </div>;
}`,...(D=(N=v.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var F,H,A;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[]>(["apple"]);
  const [search, setSearch] = useState<string>("");
  const originalOptions: SelectOption<string>[] = [{
    groupLabel: "Fruits",
    items: [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Lemon",
      value: "lemon"
    }, {
      label: "Jackfruit",
      value: "jackfruit"
    }, {
      label: "Cherry",
      value: "cherry"
    }, {
      label: "Mango",
      value: "mango"
    }]
  }];
  const filteredOptions = useMemo(() => {
    const keyword = search?.toLowerCase();
    return originalOptions.map(group => ({
      ...group,
      items: group.items.filter(item => item?.label?.toLowerCase()?.includes(keyword))
    }));
  }, [search]);
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string[])} multi={true} options={filteredOptions} searchValue={search} onSearchChange={setSearch} multiDisplayText={count => \`\${count} đã chọn\`} />
    </div>;
}`,...(A=(H=S.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var E,z,G;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" value={value} onChange={newValue => setValue(newValue as string)} multi={false} required textLabel="Tên sản phẩm" message="Vui lòng chọn sản phẩm" negative options={sampleOptions} />
    </div>;
}`,...(G=(z=x.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var P,B,Q;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Đang tải..." placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} loading options={sampleOptions} />
    </div>;
}`,...(Q=(B=y.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var q,J,W;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select large size" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} size="lg" options={sampleOptions} />
    </div>;
}`,...(W=(J=w.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var R,_,U;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select disabled" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} disabled options={sampleOptions} />
    </div>;
}`,...(U=(_=f.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var Y,$,K;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(0);
  const numberOptions: SelectOption<number>[] = [{
    groupLabel: "Prices",
    items: [{
      label: "100,000 VND",
      value: 100000
    }, {
      label: "200,000 VND",
      value: 200000
    }, {
      label: "300,000 VND",
      value: 300000
    }]
  }, {
    groupLabel: "Quantities",
    items: [{
      label: "1 item",
      value: 1
    }, {
      label: "2 items",
      value: 2
    }, {
      label: "3 items",
      value: 3
    }]
  }];
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select a number" placeholderSearch="Search numbers" textLabel="Number Select" value={value} onChange={newValue => setValue(newValue as number)} multi={false} disabled options={numberOptions} />
    </div>;
}`,...(K=($=V.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var X,Z,ee;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  const manyOptions: SelectOption<string>[] = [{
    groupLabel: "Group 1",
    items: [{
      label: "Option 1 - This is a very long text that should be truncated with ellipsis when it exceeds the container width",
      value: "1"
    }, {
      label: "Option 2 - Another long option text that demonstrates ellipsis behavior",
      value: "2"
    }, {
      label: "Option 3 - Short text",
      value: "3"
    }, {
      label: "Option 4 - Medium length option text",
      value: "4"
    }, {
      label: "Option 5 - Very very very very long text that definitely needs to be truncated",
      value: "5"
    }]
  }, {
    groupLabel: "Group 2 - This is also a long group label that might need ellipsis",
    items: [{
      label: "Option 6 - Extremely long option text that should demonstrate the ellipsis functionality perfectly",
      value: "6"
    }, {
      label: "Option 7",
      value: "7"
    }, {
      label: "Option 8 - Another example of long text for testing purposes",
      value: "8"
    }, {
      label: "Option 9 - Testing ellipsis with this lengthy option name",
      value: "9"
    }, {
      label: "Option 10",
      value: "10"
    }]
  }, {
    groupLabel: "Group 3",
    items: [{
      label: "Option 11 - Super long text that exceeds normal width expectations",
      value: "11"
    }, {
      label: "Option 12",
      value: "12"
    }, {
      label: "Option 13 - Long descriptive text for comprehensive testing",
      value: "13"
    }, {
      label: "Option 14",
      value: "14"
    }, {
      label: "Option 15 - Final long text example to verify ellipsis works correctly",
      value: "15"
    }]
  }];
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select with custom max height" placeholderSearch="Tìm kiếm" textLabel="Custom Max Height Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} maxHeight={200} options={manyOptions} />
    </div>;
}`,...(ee=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,ae;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("long1");
  const ellipsisOptions: SelectOption<string>[] = [{
    groupLabel: "This is an extremely long group label that should demonstrate the ellipsis functionality when it exceeds the available width of the dropdown menu container",
    items: [{
      label: "This is an extremely long option text that should be truncated with ellipsis (...) when it exceeds the available width of the dropdown menu item container to maintain proper UI layout",
      value: "long1"
    }, {
      label: "Short option",
      value: "short1"
    }, {
      label: "Another very long option text example that demonstrates how the ellipsis feature works with different lengths of text content in the select dropdown menu items",
      value: "long2"
    }]
  }, {
    groupLabel: "Normal Group",
    items: [{
      label: "Regular option text",
      value: "regular1"
    }, {
      label: "Yet another example of extremely long text that should be properly handled by the ellipsis functionality to ensure good user experience and proper layout",
      value: "long3"
    }]
  }];
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select with ellipsis demo" placeholderSearch="Tìm kiếm" textLabel="Text Ellipsis Demo" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={ellipsisOptions} />
    </div>;
}`,...(ae=(le=O.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,oe,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const demoOptions: SelectOption<string>[] = [{
    groupLabel: "Thành phố",
    items: [{
      label: "Hà Nội",
      value: "hanoi"
    }, {
      label: "Thành phố Hồ Chí Minh",
      value: "hcm"
    }, {
      label: "Đà Nẵng",
      value: "danang"
    }, {
      label: "Hải Phòng",
      value: "haiphong"
    }, {
      label: "Cần Thơ",
      value: "cantho"
    }]
  }, {
    groupLabel: "Quốc gia",
    items: [{
      label: "Việt Nam",
      value: "vietnam"
    }, {
      label: "Nhật Bản",
      value: "japan"
    }, {
      label: "Hàn Quốc",
      value: "korea"
    }, {
      label: "Singapore",
      value: "singapore"
    }, {
      label: "Malaysia",
      value: "malaysia"
    }]
  }];
  const filteredOptions = useMemo(() => {
    const keyword = search?.toLowerCase();
    return demoOptions.map(group => ({
      ...group,
      items: group.items.filter(item => item?.label?.toLowerCase()?.includes(keyword))
    }));
  }, [search]);
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "400px"
  }}>
      <div>
        <FISSelect placeholder="Chọn địa điểm của bạn..." placeholderSearch="Tìm kiếm địa điểm..." textLabel="Địa điểm" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={filteredOptions} searchValue={search} onSearchChange={setSearch} />
      </div>
    </div>;
}`,...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const yt=["Default","WithSearch","MultiSelect","WithValidation","Loading","LargeSize","Disabled","NumberType","CustomMaxHeight","TextEllipsis","PlaceholderDemo"];export{L as CustomMaxHeight,b as Default,f as Disabled,w as LargeSize,y as Loading,S as MultiSelect,V as NumberType,C as PlaceholderDemo,O as TextEllipsis,v as WithSearch,x as WithValidation,yt as __namedExportsOrder,xt as default};
