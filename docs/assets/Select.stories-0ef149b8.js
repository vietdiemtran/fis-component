import{j as l}from"./jsx-runtime-e7d94ccb.js";import{F as m}from"./index-3e8030eb.js";import{r as n}from"./index-981f9478.js";import"./index-f7beeda4.js";import"./MultipleValue-f505f300.js";import"./index-05569730.js";import"./getTheme-6566e1e9.js";import"./index-04319ce3.js";import"./index-8e4a15a5.js";import"./index-ba8cec51.js";import"./index-4bd6e544.js";import"./LineArrowsUp-2da65544.js";import"./index-e99fd670.js";import"./styles-b3c3e090.js";import"./index-8530f58e.js";import"./index-b6ea89b6.js";import"./index-3b8095fb.js";import"./mergeRefs-3d2b51f8.js";import"./index-fde73cf7.js";import"./index-db4650f3.js";import"./index-825e8a07.js";import"./index-5f5ebbde.js";import"./AntdIcon-f4bdc331.js";import"./roundedArrow-00f1ad08.js";import"./UnstableContext-9c4aba24.js";import"./useSize-2f261900.js";import"./button-35abb69e.js";import"./useMergedState-af1da16a.js";import"./motion-dbbe3e75.js";import"./index-e5bbe185.js";import"./index-a367dbf7.js";import"./index-3213842b.js";const g=[{groupLabel:"Nhóm 1",items:[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"},{label:"Item 9",value:"9"},{label:"Item 10",value:"10"}]}],vt={title:"Components/Select",component:m,tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},negative:{control:"boolean"},positive:{control:"boolean"},message:{control:"text"},textLabel:{control:"text"},iconLabel:{control:"select",options:["none","info"]},required:{control:"boolean"},loading:{control:"boolean"},multi:{control:"boolean"},options:{control:"object"},value:{control:"text"},size:{control:"radio",options:["md","lg"]},placeholderSearch:{control:"text"},multiDisplayText:{control:"text"},removeSelectedText:{control:"text"},maxHeight:{control:"number"}},args:{options:g,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",required:!1,disabled:!1,negative:!1,positive:!1,size:"md",message:""}},Ce=h=>{const[t,a]=n.useState("");return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:t,onChange:e=>a(e),multi:!1,options:g})})},Ve=h=>{const[t,a]=n.useState(""),[e,s]=n.useState(""),o=[{items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],i=n.useMemo(()=>{const r=e==null?void 0:e.toLowerCase();return o.map(d=>{var u;return{...d,items:(u=d==null?void 0:d.items)==null?void 0:u.filter(c=>{var p,b;return(b=(p=c==null?void 0:c.label)==null?void 0:p.toLowerCase())==null?void 0:b.includes(r)})}})},[e]);return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Search fruits",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:t,onChange:r=>a(r),multi:!1,options:i,searchValue:e,onSearchChange:s})})},Le=h=>{const[t,a]=n.useState(["apple"]),[e,s]=n.useState(""),o=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],i=n.useMemo(()=>{const r=e==null?void 0:e.toLowerCase();return o.map(d=>({...d,items:d.items.filter(u=>{var c,p;return(p=(c=u==null?void 0:u.label)==null?void 0:c.toLowerCase())==null?void 0:p.includes(r)})}))},[e]);return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:t,onChange:r=>a(r),multi:!0,options:i,searchValue:e,onSearchChange:s,multiDisplayText:r=>`${r} đã chọn`})})},Oe=h=>{const[t,a]=n.useState("");return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",value:t,onChange:e=>a(e),multi:!1,required:!0,textLabel:"Tên sản phẩm",message:"Vui lòng chọn sản phẩm",negative:!0,options:g})})},ke=h=>{const[t,a]=n.useState("");return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Đang tải...",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:t,onChange:e=>a(e),multi:!1,loading:!0,options:g})})},Ie=h=>{const[t,a]=n.useState(""),[e,s]=n.useState(""),o=[{groupLabel:"Thành phố",items:[{label:"Hà Nội",value:"hanoi"},{label:"Thành phố Hồ Chí Minh",value:"hcm"},{label:"Đà Nẵng",value:"danang"},{label:"Hải Phòng",value:"haiphong"},{label:"Cần Thơ",value:"cantho"}]},{groupLabel:"Quốc gia",items:[{label:"Việt Nam",value:"vietnam"},{label:"Nhật Bản",value:"japan"},{label:"Hàn Quốc",value:"korea"},{label:"Singapore",value:"singapore"},{label:"Malaysia",value:"malaysia"}]}],i=n.useMemo(()=>{const r=e==null?void 0:e.toLowerCase();return o.map(d=>({...d,items:d.items.filter(u=>{var c,p;return(p=(c=u==null?void 0:u.label)==null?void 0:c.toLowerCase())==null?void 0:p.includes(r)})}))},[e]);return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:l.jsx("div",{children:l.jsx(m,{placeholder:"Chọn địa điểm của bạn...",placeholderSearch:"Tìm kiếm địa điểm...",textLabel:"Địa điểm",value:t,onChange:r=>a(r),multi:!1,options:i,searchValue:e,onSearchChange:s})})})},Me=h=>{const[t,a]=n.useState("");return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Select large size",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:t,onChange:e=>a(e),multi:!1,size:"lg",options:g})})},je=h=>{const[t,a]=n.useState("");return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Select disabled",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:t,onChange:e=>a(e),multi:!1,disabled:!0,options:g})})},Ne=h=>{const[t,a]=n.useState(0),e=[{groupLabel:"Prices",items:[{label:"100,000 VND",value:1e5},{label:"200,000 VND",value:2e5},{label:"300,000 VND",value:3e5}]},{groupLabel:"Quantities",items:[{label:"1 item",value:1},{label:"2 items",value:2},{label:"3 items",value:3}]}];return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Select a number",placeholderSearch:"Search numbers",textLabel:"Number Select",value:t,onChange:s=>a(s),multi:!1,disabled:!0,options:e})})},De=h=>{const[t,a]=n.useState(""),e=[{groupLabel:"Group 1",items:[{label:"Option 1 - This is a very long text that should be truncated with ellipsis when it exceeds the container width",value:"1"},{label:"Option 2 - Another long option text that demonstrates ellipsis behavior",value:"2"},{label:"Option 3 - Short text",value:"3"},{label:"Option 4 - Medium length option text",value:"4"},{label:"Option 5 - Very very very very long text that definitely needs to be truncated",value:"5"}]},{groupLabel:"Group 2 - This is also a long group label that might need ellipsis",items:[{label:"Option 6 - Extremely long option text that should demonstrate the ellipsis functionality perfectly",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8 - Another example of long text for testing purposes",value:"8"},{label:"Option 9 - Testing ellipsis with this lengthy option name",value:"9"},{label:"Option 10",value:"10"}]},{groupLabel:"Group 3",items:[{label:"Option 11 - Super long text that exceeds normal width expectations",value:"11"},{label:"Option 12",value:"12"},{label:"Option 13 - Long descriptive text for comprehensive testing",value:"13"},{label:"Option 14",value:"14"},{label:"Option 15 - Final long text example to verify ellipsis works correctly",value:"15"}]}];return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Select with custom max height",placeholderSearch:"Tìm kiếm",textLabel:"Custom Max Height Select",value:t,onChange:s=>a(s),multi:!1,maxHeight:200,options:e})})},Fe=h=>{const[t,a]=n.useState("long1"),e=[{groupLabel:"This is an extremely long group label that should demonstrate the ellipsis functionality when it exceeds the available width of the dropdown menu container",items:[{label:"This is an extremely long option text that should be truncated with ellipsis (...) when it exceeds the available width of the dropdown menu item container to maintain proper UI layout",value:"long1"},{label:"Short option",value:"short1"},{label:"Another very long option text example that demonstrates how the ellipsis feature works with different lengths of text content in the select dropdown menu items",value:"long2"}]},{groupLabel:"Normal Group",items:[{label:"Regular option text",value:"regular1"},{label:"Yet another example of extremely long text that should be properly handled by the ellipsis functionality to ensure good user experience and proper layout",value:"long3"}]}];return l.jsx("div",{style:{width:300},children:l.jsx(m,{placeholder:"Select with ellipsis demo",placeholderSearch:"Tìm kiếm",textLabel:"Text Ellipsis Demo",value:t,onChange:s=>a(s),multi:!1,options:e})})},He=h=>{const[t,a]=n.useState("2"),e=n.useMemo(()=>{const o=g.flatMap(i=>i.items).find(i=>i.value===t);return(o==null?void 0:o.label)||"Chưa chọn"},[t]);return l.jsx("div",{style:{width:300,marginTop:100},children:l.jsx(m,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select với Tooltip hiển thị giá trị",value:t,onChange:s=>a(s),multi:!1,options:g,tooltipTitle:`Giá trị đã chọn: ${e}`,tooltipVariant:"primary"})})},$e=h=>{const[t,a]=n.useState("3"),e=n.useMemo(()=>{const o=g.flatMap(i=>i.items).find(i=>i.value===t);return{label:(o==null?void 0:o.label)||"Chưa chọn",value:(o==null?void 0:o.value)||""}},[t]);return l.jsx("div",{style:{width:300,marginTop:100},children:l.jsx(m,{placeholder:"Chọn sản phẩm",placeholderSearch:"Tìm kiếm sản phẩm",textLabel:"Chọn sản phẩm",required:!0,value:t,onChange:s=>a(s),multi:!1,options:g,tooltipTitle:{label:"Sản phẩm đã chọn",description:e.value?`${e.label} (ID: ${e.value})`:"Chưa có sản phẩm nào được chọn",link:e.value?"Xem chi tiết":void 0,linkUrl:e.value?`https://example.com/product/${e.value}`:void 0},tooltipVariant:"primary"})})},Ae=h=>{const[t,a]=n.useState("5"),e=n.useMemo(()=>{const o=g.flatMap(i=>i.items).find(i=>i.value===t);return(o==null?void 0:o.label)||"Chưa chọn địa điểm"},[t]);return l.jsx("div",{style:{width:300,marginTop:100},children:l.jsx(m,{placeholder:"Chọn địa điểm",placeholderSearch:"Tìm kiếm",textLabel:"Địa điểm giao hàng",value:t,onChange:s=>a(s),multi:!1,options:g,tooltipTitle:{label:"Địa điểm giao hàng",description:`Đang chọn: ${e}`},tooltipVariant:"secondary"})})},Be=h=>{const[t,a]=n.useState(["apple","banana","mango"]),[e,s]=n.useState(""),o=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],i=n.useMemo(()=>{const u=e==null?void 0:e.toLowerCase();return o.map(c=>({...c,items:c.items.filter(p=>{var b,N;return(N=(b=p==null?void 0:p.label)==null?void 0:b.toLowerCase())==null?void 0:N.includes(u)})}))},[e]),r=n.useMemo(()=>{const u=o.flatMap(c=>c.items);return t.map(c=>{const p=u.find(b=>b.value===c);return(p==null?void 0:p.label)||c})},[t]),d=n.useMemo(()=>r.length===0?"Chưa chọn trái cây nào":{label:`Đã chọn ${r.length} trái cây`,description:r.join(", ")},[r]);return l.jsx("div",{style:{width:300,marginTop:100},children:l.jsx(m,{placeholder:"Chọn nhiều trái cây",placeholderSearch:"Tìm kiếm",textLabel:"Chọn trái cây yêu thích",value:t,onChange:u=>a(u),multi:!0,options:i,searchValue:e,onSearchChange:s,multiDisplayText:u=>`Đã chọn ${u} trái cây`,tooltipTitle:d,tooltipVariant:"primary"})})},f=Ce.bind({}),w=Ve.bind({}),T=Le.bind({}),C=Oe.bind({}),V=ke.bind({}),L=Me.bind({}),O=je.bind({}),k=Ne.bind({}),I=De.bind({}),M=Fe.bind({}),j=Ie.bind({}),v=He.bind({});v.storyName="Tooltip hiển thị giá trị đã chọn (Simple)";const S=$e.bind({});S.storyName="Tooltip hiển thị giá trị (Custom: Label + Description + Link)";const x=Ae.bind({});x.storyName="Tooltip hiển thị giá trị (Secondary Variant)";const y=Be.bind({});y.storyName="Multi Select - Tooltip hiển thị tất cả giá trị đã chọn";var D,F,H;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={sampleOptions} />
    </div>;
}`,...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var $,A,B;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const originalOptions: SelectOption<string>[] = [{
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
    }, {
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
}`,...(B=(A=w.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,G,z;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(z=(G=T.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,P,W;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" value={value} onChange={newValue => setValue(newValue as string)} multi={false} required textLabel="Tên sản phẩm" message="Vui lòng chọn sản phẩm" negative options={sampleOptions} />
    </div>;
}`,...(W=(P=C.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var q,Q,U;V.parameters={...V.parameters,docs:{...(q=V.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Đang tải..." placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} loading options={sampleOptions} />
    </div>;
}`,...(U=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var R,_,X;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select large size" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} size="lg" options={sampleOptions} />
    </div>;
}`,...(X=(_=L.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var Y,K,Z;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select disabled" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} disabled options={sampleOptions} />
    </div>;
}`,...(Z=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,te,le;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
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
}`,...(le=(te=k.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,ne,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
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
}`,...(oe=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,re;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
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
}`,...(re=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ue,ce,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
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
}`,...(pe=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,he,de;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("2");

  // Tìm label của giá trị đã chọn
  const selectedLabel = useMemo(() => {
    const allItems = sampleOptions.flatMap(group => group.items);
    const selectedItem = allItems.find(item => item.value === value);
    return selectedItem?.label || "Chưa chọn";
  }, [value]);
  return <div style={{
    width: 300,
    marginTop: 100
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select với Tooltip hiển thị giá trị" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={sampleOptions} tooltipTitle={\`Giá trị đã chọn: \${selectedLabel}\`} tooltipVariant="primary" />
    </div>;
}`,...(de=(he=v.parameters)==null?void 0:he.docs)==null?void 0:de.source}}};var ge,be,ve;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("3");

  // Tìm thông tin chi tiết của giá trị đã chọn
  const selectedInfo = useMemo(() => {
    const allItems = sampleOptions.flatMap(group => group.items);
    const selectedItem = allItems.find(item => item.value === value);
    return {
      label: selectedItem?.label || "Chưa chọn",
      value: selectedItem?.value || ""
    };
  }, [value]);
  return <div style={{
    width: 300,
    marginTop: 100
  }}>
      <FISSelect placeholder="Chọn sản phẩm" placeholderSearch="Tìm kiếm sản phẩm" textLabel="Chọn sản phẩm" required value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={sampleOptions} tooltipTitle={{
      label: "Sản phẩm đã chọn",
      description: selectedInfo.value ? \`\${selectedInfo.label} (ID: \${selectedInfo.value})\` : "Chưa có sản phẩm nào được chọn",
      link: selectedInfo.value ? "Xem chi tiết" : undefined,
      linkUrl: selectedInfo.value ? \`https://example.com/product/\${selectedInfo.value}\` : undefined
    }} tooltipVariant="primary" />
    </div>;
}`,...(ve=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Se,xe,ye;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("5");
  const selectedLabel = useMemo(() => {
    const allItems = sampleOptions.flatMap(group => group.items);
    const selectedItem = allItems.find(item => item.value === value);
    return selectedItem?.label || "Chưa chọn địa điểm";
  }, [value]);
  return <div style={{
    width: 300,
    marginTop: 100
  }}>
      <FISSelect placeholder="Chọn địa điểm" placeholderSearch="Tìm kiếm" textLabel="Địa điểm giao hàng" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={sampleOptions} tooltipTitle={{
      label: "Địa điểm giao hàng",
      description: \`Đang chọn: \${selectedLabel}\`
    }} tooltipVariant="secondary" />
    </div>;
}`,...(ye=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var fe,we,Te;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[]>(["apple", "banana", "mango"]);
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

  // Lấy danh sách label của các giá trị đã chọn
  const selectedLabels = useMemo(() => {
    const allItems = originalOptions.flatMap(group => group.items);
    return value.map(val => {
      const item = allItems.find(i => i.value === val);
      return item?.label || val;
    });
  }, [value]);
  const tooltipContent = useMemo(() => {
    if (selectedLabels.length === 0) {
      return "Chưa chọn trái cây nào";
    }
    return {
      label: \`Đã chọn \${selectedLabels.length} trái cây\`,
      description: selectedLabels.join(", ")
    };
  }, [selectedLabels]);
  return <div style={{
    width: 300,
    marginTop: 100
  }}>
      <FISSelect placeholder="Chọn nhiều trái cây" placeholderSearch="Tìm kiếm" textLabel="Chọn trái cây yêu thích" value={value} onChange={newValue => setValue(newValue as string[])} multi={true} options={filteredOptions} searchValue={search} onSearchChange={setSearch} multiDisplayText={count => \`Đã chọn \${count} trái cây\`} tooltipTitle={tooltipContent} tooltipVariant="primary" />
    </div>;
}`,...(Te=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};const St=["Default","WithSearch","MultiSelect","WithValidation","Loading","LargeSize","Disabled","NumberType","CustomMaxHeight","TextEllipsis","PlaceholderDemo","SimpleTooltip","CustomTooltip","SecondaryTooltip","MultiSelectWithTooltip"];export{I as CustomMaxHeight,S as CustomTooltip,f as Default,O as Disabled,L as LargeSize,V as Loading,T as MultiSelect,y as MultiSelectWithTooltip,k as NumberType,j as PlaceholderDemo,x as SecondaryTooltip,v as SimpleTooltip,M as TextEllipsis,w as WithSearch,C as WithValidation,St as __namedExportsOrder,vt as default};
