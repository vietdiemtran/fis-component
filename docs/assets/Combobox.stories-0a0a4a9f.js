import{j as o}from"./jsx-runtime-47c18db8.js";import{r as u}from"./index-d806aa85.js";import{F as l}from"./index-a38c623c.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./LineArrowsUp-4acd88f0.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-a60d625b.js";import"./index-6b2c958e.js";import"./context-64a81616.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-b58ea5d4.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-4fe5a7ca.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-6b92031d.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-baad6b63.js";import"./index-ffeb7169.js";import"./index-63636042.js";import"./index-1275b512.js";import"./index-55dfab6c.js";import"./index-28483a77.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-90a26468.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-4280f93c.js";import"./collapse-8e27e3c5.js";import"./index-56009584.js";import"./index-8ba4b829.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-d8d722f1.js";import"./FISSorter-721bb526.js";import"./index-3406f63d.js";import"./index-55d04594.js";import"./index-d2a546a7.js";import"./index-eca51d54.js";const d=[{groupLabel:"Nhóm 1",items:[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"}]}],Se={title:"Components/Combobox",component:l,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Văn bản gợi ý hiển thị khi không có giá trị nào được chọn"},disabled:{control:"boolean",description:"Vô hiệu hóa component, người dùng không thể tương tác"},negative:{control:"boolean",description:"Hiển thị trạng thái lỗi với viền đỏ"},positive:{control:"boolean",description:"Hiển thị trạng thái thành công với viền xanh"},message:{control:"text",description:"Thông báo gợi ý hoặc lỗi hiển thị bên dưới component"},textLabel:{control:"text",description:"Nhãn văn bản hiển thị phía trên component"},iconLabel:{control:"select",options:["none","info"],description:"Biểu tượng hiển thị bên cạnh nhãn"},required:{control:"boolean",description:"Hiển thị dấu sao (*) cho biết trường bắt buộc"},loading:{control:"boolean",description:"Loading state of the select"},noData:{control:"boolean",description:"Show no data state"},noResult:{control:"boolean",description:"Show no results state"},combobox:{control:"boolean",description:"Enable combobox mode"},multi:{control:"boolean",description:"Cho phép chọn nhiều tùy chọn cùng lúc"},options:{control:"object",description:"Mảng các tùy chọn cho Select"},value:{control:"text",description:"Giá trị đã chọn (chuỗi cho chọn đơn, mảng cho đa chọn)"},sizeInput:{control:"radio",options:["md","lg"],description:"Size of the select component"},loadingText:{control:"text",description:"Custom text to show during loading state"},noDataText:{control:"text",description:"Custom text to show when there is no data"},noResultText:{control:"text",description:"Custom text to show when there are no search results"},removeSelectedText:{control:"text",description:"Custom text for the remove selected button"}},args:{options:d,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Combobox",required:!1,disabled:!1,negative:!1,positive:!1,message:"",value:""}},v=h=>{const[n,a]=u.useState("apple");return o.jsx("div",{style:{width:300},children:o.jsx(l,{value:n,onChange:a,multi:!1,placeholder:"Chọn một tùy chọn",placeholderSearch:"Tìm kiếm",textLabel:"Select item",message:"This is a message",options:[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Pineapple",value:"pineapple"},{label:"Grapes",value:"grapes"}]}]})})},g=h=>{const[n,a]=u.useState(["apple"]);return o.jsx("div",{style:{width:300},children:o.jsx(l,{value:n,onChange:a,multi:!0,placeholder:"Chọn nhiều tùy chọn",placeholderSearch:"Search fruits/vegetables",textLabel:"Select item",removeSelectedText:"Remove selected",selectedGroupLabel:"Selected",multiDisplayText:b=>`Bạn đã chọn ${b} mục`,options:[{groupLabel:"Fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Lemon",value:"lemon"},{label:"Jackfruit",value:"jackfruit"},{label:"Cherry",value:"cherry"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Pineapple",value:"pineapple"},{label:"Grapes",value:"grapes"}]}]})})},e=v.bind({}),t=g.bind({});var r,i,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,c,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const fe=["Default","DefaultMulti"];export{e as Default,t as DefaultMulti,fe as __namedExportsOrder,Se as default};
