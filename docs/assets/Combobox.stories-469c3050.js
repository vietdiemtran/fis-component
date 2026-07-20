import{j as a}from"./jsx-runtime-e7d94ccb.js";import{r as t}from"./index-981f9478.js";import{c as Pe}from"./index-f7beeda4.js";import{u as Te,P as Ee}from"./index-96b2cdcf.js";import{A as Fe,b as De}from"./InfoSolidIcon-78d566e9.js";import{F as Le}from"./index-00a7ff96.js";import{S as Re}from"./styles-eb3881e5.js";import{F as je}from"./index-1cbf047b.js";import{D as Me,a as Oe,S as Ne,M as _e,b as Be}from"./MultipleValue-0ba8681f.js";import{F as He}from"./index-0687b645.js";import"./index-05569730.js";import"./index-df9a4235.js";import"./getTheme-9564f801.js";import"./index-66039438.js";import"./styles-22914ca6.js";import"./index-26cd4491.js";import"./mergeRefs-3d2b51f8.js";import"./index-4c1c7505.js";import"./index-b8aa03b0.js";import"./index-6b29b51e.js";import"./index-b885ca0b.js";import"./index-b0c2e733.js";import"./index-5e910af4.js";import"./AntdIcon-4d3cb6de.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./useMergedState-281a21e7.js";import"./motion-99a9a6da.js";import"./index-4e469fe9.js";import"./index-dc16328d.js";import"./index-df0a6e50.js";const E=t.forwardRef(({className:u,options:i,value:n,disabled:s=!1,textLabel:k="",iconLabel:L,required:pe,negative:ce,message:R,positive:de,multi:o,placeholderSearch:me,loading:fe,onChange:I,renderOption:ze,onClickIconLabel:ge,displayValue:P,multiDisplayText:j,noResultText:be="Không tìm thấy kết quả",maxHeight:he,portal:M=!0,...O},ve)=>{const[f,g]=t.useState(!1),[l,p]=t.useState(""),[c,xe]=t.useState(null),[T,ye]=t.useState(null),{styles:Se,attributes:Ce}=Te(c,T,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:M?"fixed":"absolute"}),b=t.useMemo(()=>i.flatMap(e=>e.items),[i]),d=t.useMemo(()=>{if(o){const r=b.filter(h=>n.includes(h.value)).length;return j?j(r):`Selected ${r.toString().padStart(2,"0")} option${r!==1?"s":""}`}else{const e=b.find(r=>r.value===n);return e?(P==null?void 0:P(e))||e.label:""}},[n,b,o,P]),N=t.useCallback(()=>{s||(o?f||(g(!0),p("")):(g(e=>!e),f||p(d)))},[s,f,d,o]),Ve=t.useCallback(e=>{s||(g(!0),p(e.target.value))},[s]),qe=t.useCallback(e=>{e.key==="Backspace"&&!l&&p("")},[l]);t.useEffect(()=>{const e=r=>{c&&!c.contains(r.target)&&T&&!T.contains(r.target)&&(g(!1),p(o?"":d))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[c,T,o,d]);const we=t.useMemo(()=>o?b.filter(e=>n.includes(e.value)).map(e=>({label:e.label,value:e.value})):n?b.filter(e=>e.value===n).map(e=>({label:e.label,value:e.value})):[],[b,n,o]),ke=t.useCallback(e=>{if(o){const r=n.filter(h=>h!==e.value);I(r)}},[o,I,n]),F=t.useMemo(()=>!l||l===d?i:i.map(e=>({...e,items:e.items.filter(r=>{var h,_;return(_=(h=r==null?void 0:r.label)==null?void 0:h.toLowerCase())==null?void 0:_.includes(l==null?void 0:l.toLowerCase())})})),[i,l,d]),Ie=t.useMemo(()=>l?F.every(e=>e.items.length===0):!1,[F,l]);return a.jsxs(Me,{className:u,children:[(k||L)&&a.jsx(Le,{textLabel:k,required:pe,iconLabel:L,onClickIconLabel:ge}),a.jsx(Oe,{ref:xe,onClick:N,children:a.jsx(He,{...O,ref:ve,iconSuffix:f?a.jsx(Fe,{}):a.jsx(De,{}),value:f&&l!==void 0?l:d,disabled:s,onClickSuffix:N,onChange:Ve,onKeyDown:qe,$isPointer:!0})}),R&&a.jsx(Re,{className:Pe({disabled:s,negative:ce,positive:de}),children:R}),o&&n.length>0&&a.jsx(Ne,{children:a.jsx(_e,{options:we,onRemove:ke})}),f&&a.jsx(Ee,{portal:M,children:a.jsx(Be,{ref:ye,style:{...Se.popper,width:c==null?void 0:c.offsetWidth},...Ce.popper,children:a.jsx(je,{groups:F,placeholder:me,loading:fe,multi:o,combobox:!0,noResult:Ie,noResultText:be,maxHeight:he,selectedValues:o?n:n?[n]:[],onChangeSelected:e=>{o?I(e):(I(e[0]),g(!1),p(""))},onClickMenu:()=>{o||(g(!1),p(""))},...O})})})]})});E.displayName="FISCombobox";const D=E;try{E.displayName="FISCombobox",E.__docgenInfo={description:"",displayName:"FISCombobox",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"Không tìm thấy kết quả"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},focusSearchInput:{defaultValue:null,description:"",name:"focusSearchInput",required:!1,type:{name:"boolean"}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"((e: UIEvent<HTMLElement, UIEvent>) => void)"}},normalizeTextSearch:{defaultValue:null,description:"",name:"normalizeTextSearch",required:!1,type:{name:"boolean"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"(((item: MenuItem) => ReactNode) & ((option: ComboboxOption) => ReactNode))"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},portal:{defaultValue:{value:"true"},description:"Render dropdown vào document.body để thoát khỏi container bị overflow/transform. Mặc định true.",name:"portal",required:!1,type:{name:"boolean"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: ComboboxOption) => string) | ((value: ComboboxOption[]) => string)"}}}}}catch{}const $e=[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Pineapple",value:"pineapple"},{label:"Grapes",value:"grapes"}]}],wn={title:"Components/Combobox",component:D,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi không có giá trị nào được chọn"},placeholderSearch:{control:"text",description:"Placeholder cho ô tìm kiếm trong dropdown"},disabled:{control:"boolean",description:"Vô hiệu hóa component, người dùng không thể tương tác"},negative:{control:"boolean",description:"Hiển thị trạng thái lỗi với viền đỏ"},positive:{control:"boolean",description:"Hiển thị trạng thái thành công với viền xanh"},message:{control:"text",description:"Thông báo gợi ý hoặc lỗi hiển thị bên dưới component"},textLabel:{control:"text",description:"Nhãn văn bản hiển thị phía trên component"},required:{control:"boolean",description:"Hiển thị dấu sao (*) cho biết trường bắt buộc"},loading:{control:"boolean",description:"Trạng thái đang tải danh sách tùy chọn"},multi:{control:"boolean",description:"Cho phép chọn nhiều tùy chọn cùng lúc"},options:{control:"object",description:"Mảng các nhóm tùy chọn cho Combobox"},noResultText:{control:"text",description:"Văn bản hiển thị khi không có kết quả tìm kiếm"},maxHeight:{control:"text",description:"Chiều cao tối đa của dropdown"}},args:{options:$e,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Combobox",required:!1,disabled:!1,negative:!1,positive:!1,message:""}},m=u=>{const[i,n]=t.useState(u.value||""),s={...u,multi:!1,value:i,onChange:n};return a.jsx("div",{style:{width:300},children:a.jsx(D,{...s})})},Ae=u=>{const[i,n]=t.useState(u.value||["apple"]),s={...u,multi:!0,value:i,onChange:n,multiDisplayText:k=>`Bạn đã chọn ${k} mục`};return a.jsx("div",{style:{width:300},children:a.jsx(D,{...s})})},v=m.bind({});v.args={value:"apple",message:"This is a message"};const x=Ae.bind({});x.args={placeholder:"Chọn nhiều tùy chọn",removeSelectedText:"Remove selected",selectedGroupLabel:"Selected"};const y=m.bind({});y.args={value:"apple",disabled:!0};const S=m.bind({});S.args={negative:!0,message:"Trường này có lỗi"};const C=m.bind({});C.args={value:"apple",positive:!0,message:"Lựa chọn hợp lệ"};const V=m.bind({});V.args={required:!0};const q=m.bind({});q.args={loading:!0};const w=m.bind({});w.args={options:[{groupLabel:"Fruits",items:[]}],noResultText:"Không tìm thấy kết quả"};var B,H,$;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...($=(H=v.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var A,z,K;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[]>(args.value as string[] || ["apple"]);
  const props = {
    ...args,
    multi: true,
    value,
    onChange: setValue,
    multiDisplayText: (count: number) => \`Bạn đã chọn \${count} mục\`
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(K=(z=x.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var G,W,U;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(U=(W=y.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(ae=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,re,le;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(le=(re=q.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ie,ue;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>(args.value as string || "");
  const props = {
    ...args,
    multi: false,
    value,
    onChange: setValue
  } as unknown as ComboboxStoryProps;
  return <div style={{
    width: 300
  }}>
      <FISCombobox {...props} />
    </div>;
}`,...(ue=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const kn=["Default","DefaultMulti","Disabled","Negative","Positive","Required","Loading","NoResult"];export{v as Default,x as DefaultMulti,y as Disabled,q as Loading,S as Negative,w as NoResult,C as Positive,V as Required,kn as __namedExportsOrder,wn as default};
