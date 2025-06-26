import{j as t}from"./jsx-runtime-47c18db8.js";import{g as o}from"./index-a38c623c.js";import{r as n}from"./index-d806aa85.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./LineArrowsUp-4acd88f0.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-a60d625b.js";import"./index-6b2c958e.js";import"./context-64a81616.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-b58ea5d4.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-4fe5a7ca.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-6b92031d.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-baad6b63.js";import"./index-ffeb7169.js";import"./index-63636042.js";import"./index-1275b512.js";import"./index-55dfab6c.js";import"./index-28483a77.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-90a26468.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-4280f93c.js";import"./collapse-8e27e3c5.js";import"./index-56009584.js";import"./index-8ba4b829.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-d8d722f1.js";import"./FISSorter-721bb526.js";import"./index-3406f63d.js";import"./index-55d04594.js";import"./index-d2a546a7.js";import"./index-eca51d54.js";const u=[{groupLabel:"Nhóm 1",items:[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"}]}],ct={title:"Components/Select",component:o,tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},negative:{control:"boolean"},positive:{control:"boolean"},message:{control:"text"},textLabel:{control:"text"},iconLabel:{control:"select",options:["none","info"]},required:{control:"boolean"},loading:{control:"boolean"},multi:{control:"boolean"},options:{control:"object"},value:{control:"text"},size:{control:"radio",options:["md","lg"]},placeholderSearch:{control:"text"},multiDisplayText:{control:"text"},removeSelectedText:{control:"text"},maxHeight:{control:"number"}},args:{options:u,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",required:!1,disabled:!1,negative:!1,positive:!1,size:"md",message:""}},ee=s=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,options:u})})},te=s=>{const[l,a]=n.useState(""),[e,r]=n.useState(""),w=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],f=n.useMemo(()=>{const i=e.toLowerCase();return w.map(p=>({...p,items:p.items.filter(V=>V.label.toLowerCase().includes(i))}))},[e]);return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Search fruits",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:i=>a(i),multi:!1,options:f,searchValue:e,onSearchChange:r})})},le=s=>{const[l,a]=n.useState(["apple"]),[e,r]=n.useState(""),w=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"}]}],f=n.useMemo(()=>{const i=e.toLowerCase();return w.map(p=>({...p,items:p.items.filter(V=>V.label.toLowerCase().includes(i))}))},[e]);return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:i=>a(i),multi:!0,options:f,searchValue:e,onSearchChange:r,multiDisplayText:i=>`${i} đã chọn`})})},ae=s=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",value:l,onChange:e=>a(e),multi:!1,required:!0,textLabel:"Tên sản phẩm",message:"Vui lòng chọn sản phẩm",negative:!0,options:u})})},ne=s=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Đang tải...",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,loading:!0,options:u})})},oe=s=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Select large size",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,size:"lg",options:u})})},se=s=>{const[l,a]=n.useState("");return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Select disabled",placeholderSearch:"Tìm kiếm",textLabel:"Select",value:l,onChange:e=>a(e),multi:!1,disabled:!0,options:u})})},re=s=>{const[l,a]=n.useState(0),e=[{groupLabel:"Prices",items:[{label:"100,000 VND",value:1e5},{label:"200,000 VND",value:2e5},{label:"300,000 VND",value:3e5}]},{groupLabel:"Quantities",items:[{label:"1 item",value:1},{label:"2 items",value:2},{label:"3 items",value:3}]}];return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Select a number",placeholderSearch:"Search numbers",textLabel:"Number Select",value:l,onChange:r=>a(r),multi:!1,disabled:!0,options:e})})},ie=s=>{const[l,a]=n.useState(""),e=[{groupLabel:"Group 1",items:[{label:"Option 1 - This is a very long text that should be truncated with ellipsis when it exceeds the container width",value:"1"},{label:"Option 2 - Another long option text that demonstrates ellipsis behavior",value:"2"},{label:"Option 3 - Short text",value:"3"},{label:"Option 4 - Medium length option text",value:"4"},{label:"Option 5 - Very very very very long text that definitely needs to be truncated",value:"5"}]},{groupLabel:"Group 2 - This is also a long group label that might need ellipsis",items:[{label:"Option 6 - Extremely long option text that should demonstrate the ellipsis functionality perfectly",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8 - Another example of long text for testing purposes",value:"8"},{label:"Option 9 - Testing ellipsis with this lengthy option name",value:"9"},{label:"Option 10",value:"10"}]},{groupLabel:"Group 3",items:[{label:"Option 11 - Super long text that exceeds normal width expectations",value:"11"},{label:"Option 12",value:"12"},{label:"Option 13 - Long descriptive text for comprehensive testing",value:"13"},{label:"Option 14",value:"14"},{label:"Option 15 - Final long text example to verify ellipsis works correctly",value:"15"}]}];return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Select with custom max height",placeholderSearch:"Tìm kiếm",textLabel:"Custom Max Height Select",value:l,onChange:r=>a(r),multi:!1,maxHeight:200,options:e})})},ue=s=>{const[l,a]=n.useState("long1"),e=[{groupLabel:"This is an extremely long group label that should demonstrate the ellipsis functionality when it exceeds the available width of the dropdown menu container",items:[{label:"This is an extremely long option text that should be truncated with ellipsis (...) when it exceeds the available width of the dropdown menu item container to maintain proper UI layout",value:"long1"},{label:"Short option",value:"short1"},{label:"Another very long option text example that demonstrates how the ellipsis feature works with different lengths of text content in the select dropdown menu items",value:"long2"}]},{groupLabel:"Normal Group",items:[{label:"Regular option text",value:"regular1"},{label:"Yet another example of extremely long text that should be properly handled by the ellipsis functionality to ensure good user experience and proper layout",value:"long3"}]}];return t.jsx("div",{style:{width:300},children:t.jsx(o,{placeholder:"Select with ellipsis demo",placeholderSearch:"Tìm kiếm",textLabel:"Text Ellipsis Demo",value:l,onChange:r=>a(r),multi:!1,options:e})})},c=ee.bind({}),m=te.bind({}),h=le.bind({}),d=ae.bind({}),g=ne.bind({}),b=oe.bind({}),v=se.bind({}),S=re.bind({}),x=ie.bind({}),y=ue.bind({});var L,O,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={sampleOptions} />
    </div>;
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var C,k,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
    const keyword = search.toLowerCase();
    return originalOptions.map(group => ({
      ...group,
      items: group.items.filter(item => item.label.toLowerCase().includes(keyword))
    }));
  }, [search]);
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Search fruits" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} options={filteredOptions} searchValue={search} onSearchChange={setSearch} />
    </div>;
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,M,F;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
    const keyword = search.toLowerCase();
    return originalOptions.map(group => ({
      ...group,
      items: group.items.filter(item => item.label.toLowerCase().includes(keyword))
    }));
  }, [search]);
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string[])} multi={true} options={filteredOptions} searchValue={search} onSearchChange={setSearch} multiDisplayText={count => \`\${count} đã chọn\`} />
    </div>;
}`,...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var D,N,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" value={value} onChange={newValue => setValue(newValue as string)} multi={false} required textLabel="Tên sản phẩm" message="Vui lòng chọn sản phẩm" negative options={sampleOptions} />
    </div>;
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var E,z,G;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Đang tải..." placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} loading options={sampleOptions} />
    </div>;
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,q,B;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select large size" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} size="lg" options={sampleOptions} />
    </div>;
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,W,R;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("");
  return <div style={{
    width: 300
  }}>
      <FISSelect placeholder="Select disabled" placeholderSearch="Tìm kiếm" textLabel="Select" value={value} onChange={newValue => setValue(newValue as string)} multi={false} disabled options={sampleOptions} />
    </div>;
}`,...(R=(W=v.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var _,P,Q;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(Q=(P=S.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,Y,$;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...($=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var K,X,Z;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const mt=["Default","WithSearch","MultiSelect","WithValidation","Loading","LargeSize","Disabled","NumberType","CustomMaxHeight","TextEllipsis"];export{x as CustomMaxHeight,c as Default,v as Disabled,b as LargeSize,g as Loading,h as MultiSelect,S as NumberType,y as TextEllipsis,m as WithSearch,d as WithValidation,mt as __namedExportsOrder,ct as default};
