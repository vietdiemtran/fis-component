import{j as l}from"./jsx-runtime-3dc6859f.js";import{r as t}from"./index-d4014758.js";import{c as te}from"./index-01b5a1be.js";import{u as le,D as ae,a as oe,S as re,M as ie,P as se,b as ue}from"./MultipleValue-d8b9b6fb.js";import{A as ce,a as pe}from"./LineArrowsUp-143aac49.js";import{F as de}from"./index-501f4137.js";import{S as me}from"./styles-8d215230.js";import{F as fe}from"./index-0579ed73.js";import{F as be}from"./index-9e52dbd3.js";import"./index-78ef5524.js";import"./getTheme-1aacf7d7.js";import"./index-714a6461.js";import"./index-c8f11e24.js";import"./index-35e06132.js";import"./index-ac9297cf.js";import"./index-bed4c6aa.js";import"./mergeRefs-3d2b51f8.js";import"./index-65bb13d5.js";import"./index-1013563a.js";import"./index-220f2632.js";import"./index-1625a42e.js";import"./AntdIcon-53f7c35e.js";import"./roundedArrow-d06dbfd9.js";import"./UnstableContext-45358c13.js";import"./useSize-aec9e548.js";import"./button-ae057576.js";import"./useMergedState-81b3e148.js";import"./motion-8a2854a7.js";import"./index-b09e832a.js";import"./index-68a7459e.js";const C=t.forwardRef(({className:h,options:i,value:n,disabled:s=!1,textLabel:I="",iconLabel:k,required:B,negative:N,message:L,positive:_,multi:a,placeholderSearch:A,loading:G,onChange:v,renderOption:xe,onClickIconLabel:$,displayValue:g,multiDisplayText:w,noResultText:H="Không tìm thấy kết quả",maxHeight:z,...T},J)=>{const[d,m]=t.useState(!1),[r,u]=t.useState(""),[c,K]=t.useState(null),[x,W]=t.useState(null),{styles:U,attributes:Q}=le(c,x,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:"fixed"}),f=t.useMemo(()=>i.flatMap(e=>e.items),[i]),p=t.useMemo(()=>{if(a){const o=f.filter(b=>n.includes(b.value)).length;return w?w(o):`Selected ${o.toString().padStart(2,"0")} option${o!==1?"s":""}`}else{const e=f.find(o=>o.value===n);return e?(g==null?void 0:g(e))||e.label:""}},[n,f,a,g]),D=t.useCallback(()=>{s||(a?d||(m(!0),u("")):(m(e=>!e),d||u(p)))},[s,d,p,a]),X=t.useCallback(e=>{s||(m(!0),u(e.target.value))},[s]),Y=t.useCallback(e=>{e.key==="Backspace"&&!r&&u("")},[r]);t.useEffect(()=>{const e=o=>{c&&!c.contains(o.target)&&x&&!x.contains(o.target)&&(m(!1),u(a?"":p))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[c,x,a,p]);const Z=t.useMemo(()=>a?f.filter(e=>n.includes(e.value)).map(e=>({label:e.label,value:e.value})):n?f.filter(e=>e.value===n).map(e=>({label:e.label,value:e.value})):[],[f,n,a]),ee=t.useCallback(e=>{if(a){const o=n.filter(b=>b!==e.value);v(o)}},[a,v,n]),V=t.useMemo(()=>!r||r===p?i:i.map(e=>({...e,items:e.items.filter(o=>{var b,j;return(j=(b=o==null?void 0:o.label)==null?void 0:b.toLowerCase())==null?void 0:j.includes(r==null?void 0:r.toLowerCase())})})),[i,r,p]),ne=t.useMemo(()=>r?V.every(e=>e.items.length===0):!1,[V,r]);return l.jsxs(ae,{className:h,children:[(I||k)&&l.jsx(de,{textLabel:I,required:B,iconLabel:k,onClickIconLabel:$}),l.jsx(oe,{ref:K,onClick:D,children:l.jsx(be,{...T,ref:J,iconSuffix:d?l.jsx(ce,{}):l.jsx(pe,{}),value:d&&r!==void 0?r:p,disabled:s,onClickSuffix:D,onChange:X,onKeyDown:Y,$isPointer:!0})}),L&&l.jsx(me,{className:te({disabled:s,negative:N,positive:_}),children:L}),a&&n.length>0&&l.jsx(re,{children:l.jsx(ie,{options:Z,onRemove:ee})}),d&&l.jsx(se,{children:l.jsx(ue,{ref:W,style:{...U.popper,width:c==null?void 0:c.offsetWidth},...Q.popper,children:l.jsx(fe,{groups:V,placeholder:A,loading:G,multi:a,combobox:!0,noResult:ne,noResultText:H,maxHeight:z,selectedValues:a?n:n?[n]:[],onChangeSelected:e=>{a?v(e):(v(e[0]),m(!1),u(""))},onClickMenu:()=>{a||(m(!1),u(""))},...T})})})]})});C.displayName="FISCombobox";const q=C;try{C.displayName="FISCombobox",C.__docgenInfo={description:"",displayName:"FISCombobox",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"Không tìm thấy kết quả"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"((e: UIEvent<HTMLElement, UIEvent>) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: ComboboxOption) => ReactNode)"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: ComboboxOption) => string) | ((value: ComboboxOption[]) => string)"}}}}}catch{}const he=[{groupLabel:"Nhóm 1",items:[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"}]}],Qe={title:"Components/Combobox",component:q,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi không có giá trị nào được chọn"},disabled:{control:"boolean",description:"Vô hiệu hóa component, người dùng không thể tương tác"},negative:{control:"boolean",description:"Hiển thị trạng thái lỗi với viền đỏ"},positive:{control:"boolean",description:"Hiển thị trạng thái thành công với viền xanh"},message:{control:"text",description:"Thông báo gợi ý hoặc lỗi hiển thị bên dưới component"},textLabel:{control:"text",description:"Nhãn văn bản hiển thị phía trên component"},iconLabel:{control:"select",options:["none","info"],description:"Biểu tượng hiển thị bên cạnh nhãn"},required:{control:"boolean",description:"Hiển thị dấu sao (*) cho biết trường bắt buộc"},loading:{control:"boolean",description:"Loading state of the select"},noData:{control:"boolean",description:"Show no data state"},noResult:{control:"boolean",description:"Show no results state"},combobox:{control:"boolean",description:"Enable combobox mode"},multi:{control:"boolean",description:"Cho phép chọn nhiều tùy chọn cùng lúc"},options:{control:"object",description:"Mảng các tùy chọn cho Select"},value:{control:"text",description:"Giá trị đã chọn (chuỗi cho chọn đơn, mảng cho đa chọn)"},sizeInput:{control:"radio",options:["md","lg"],description:"Size of the select component"},loadingText:{control:"text",description:"Custom text to show during loading state"},noDataText:{control:"text",description:"Custom text to show when there is no data"},noResultText:{control:"text",description:"Custom text to show when there are no search results"},removeSelectedText:{control:"text",description:"Custom text for the remove selected button"}},args:{options:he,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Combobox",required:!1,disabled:!1,negative:!1,positive:!1,message:"",value:""}},ve=h=>{const[i,n]=t.useState("apple");return l.jsx("div",{style:{width:300},children:l.jsx(q,{value:i,onChange:n,multi:!1,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select item",message:"This is a message",options:[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Pineapple",value:"pineapple"},{label:"Grapes",value:"grapes"}]}]})})},ge=h=>{const[i,n]=t.useState(["apple"]);return l.jsx("div",{style:{width:300},children:l.jsx(q,{value:i,onChange:n,multi:!0,placeholder:"Chọn nhiều tùy chọn",placeholderSearch:"Search fruits/vegetables",textLabel:"Select item",removeSelectedText:"Remove selected",selectedGroupLabel:"Selected",multiDisplayText:s=>`Bạn đã chọn ${s} mục`,options:[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Pineapple",value:"pineapple"},{label:"Grapes",value:"grapes"}]}]})})},y=ve.bind({}),S=ge.bind({});var P,E,F;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>("apple");
  return <div style={{
    width: 300
  }}>
      <FISCombobox value={value} onChange={setValue} multi={false} placeholder="Chọn một tùy chọn" placeholderSearch="Tìm kiếm" textLabel="Select item" message="This is a message" options={[{
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
      }, {
        label: "Orange",
        value: "orange"
      }, {
        label: "Pineapple",
        value: "pineapple"
      }, {
        label: "Grapes",
        value: "grapes"
      }]
    }]} />
    </div>;
}`,...(F=(E=y.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var M,O,R;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return <div style={{
    width: 300
  }}>
      <FISCombobox value={value} onChange={setValue} multi={true} placeholder="Chọn nhiều tùy chọn" placeholderSearch="Search fruits/vegetables" textLabel="Select item" removeSelectedText="Remove selected" selectedGroupLabel="Selected" multiDisplayText={count => \`Bạn đã chọn \${count} mục\`} options={[{
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
      }, {
        label: "Orange",
        value: "orange"
      }, {
        label: "Pineapple",
        value: "pineapple"
      }, {
        label: "Grapes",
        value: "grapes"
      }]
    }]} />
    </div>;
}`,...(R=(O=S.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Xe=["Default","DefaultMulti"];export{y as Default,S as DefaultMulti,Xe as __namedExportsOrder,Qe as default};
