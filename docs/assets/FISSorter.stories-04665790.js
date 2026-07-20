import{j as y}from"./jsx-runtime-e7d94ccb.js";import{r as K}from"./index-981f9478.js";import{F as p}from"./FISSorter-0c3a8e72.js";import"./index-df9a4235.js";import"./getTheme-9564f801.js";import"./index-66039438.js";import"./InfoSolidIcon-78d566e9.js";const E={title:"Components/Table/Sorter",component:p,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"FISSorter là nút sắp xếp dùng trong header table, cho phép xoay vòng qua ascending, descending và default."}}},args:{columnKey:"title",sortedInfo:{columnKey:"",order:void 0},onSort:()=>{}},argTypes:{columnKey:{control:"text",description:"Khóa cột đang được sort."},sortedInfo:{control:"object",description:"Trạng thái sort hiện tại của table."},onSort:{action:"sort",description:"Callback khi đổi trạng thái sort."}}},o={args:{columnKey:"title",onSort:()=>{},sortedInfo:{columnKey:"",order:void 0}},render:u=>{const[g,f]=K.useState(u.sortedInfo);return y.jsx(p,{columnKey:"title",sortedInfo:g,onSort:(S,I)=>{f({columnKey:S,order:I})}})}},e={args:{onSort:()=>{},sortedInfo:{columnKey:"title",order:"ascend"}}},r={args:{onSort:()=>{},sortedInfo:{columnKey:"title",order:"descend"}}};var n,t,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    columnKey: "title",
    onSort: () => {},
    sortedInfo: {
      columnKey: "",
      order: undefined
    }
  },
  render: args => {
    const [sortedInfo, setSortedInfo] = useState(args.sortedInfo);
    return <FISSorter columnKey="title" sortedInfo={sortedInfo} onSort={(columnKey, order) => {
      setSortedInfo({
        columnKey,
        order
      });
    }} />;
  }
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,c,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onSort: () => {},
    sortedInfo: {
      columnKey: "title",
      order: "ascend"
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onSort: () => {},
    sortedInfo: {
      columnKey: "title",
      order: "descend"
    }
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const T=["Default","Ascending","Descending"];export{e as Ascending,o as Default,r as Descending,T as __namedExportsOrder,E as default};
