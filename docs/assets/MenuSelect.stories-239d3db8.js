import{j as n}from"./jsx-runtime-e7d94ccb.js";import{F as j}from"./index-8530f58e.js";import"./index-981f9478.js";import"./getTheme-6566e1e9.js";import"./LineArrowsUp-2da65544.js";import"./index-b6ea89b6.js";import"./index-f7beeda4.js";import"./styles-b3c3e090.js";import"./index-e99fd670.js";import"./index-ba8cec51.js";import"./index-4bd6e544.js";import"./index-3b8095fb.js";import"./mergeRefs-3d2b51f8.js";import"./index-fde73cf7.js";import"./index-db4650f3.js";import"./index-8e4a15a5.js";import"./index-825e8a07.js";import"./index-5f5ebbde.js";import"./AntdIcon-f4bdc331.js";import"./index-05569730.js";import"./roundedArrow-00f1ad08.js";import"./UnstableContext-9c4aba24.js";import"./useSize-2f261900.js";import"./button-35abb69e.js";import"./useMergedState-af1da16a.js";import"./motion-dbbe3e75.js";import"./index-e5bbe185.js";import"./index-a367dbf7.js";const re={title:"Components/Menu/MenuSelect",component:j,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the menu input"},size:{control:"radio",options:["md","lg"],description:"Size of the menu component"},loading:{control:"boolean",description:"Loading state of the menu"},noData:{control:"boolean",description:"Show no data state"},noResult:{control:"boolean",description:"Show no results state"},combobox:{control:"boolean",description:"Enable combobox mode"},multi:{control:"boolean",description:"Enable multi-select mode"},negative:{control:"boolean",description:"Enable negative styling"},loadingText:{control:"text",description:"Custom text to show during loading state"},noDataText:{control:"text",description:"Custom text to show when there is no data"},noResultText:{control:"text",description:"Custom text to show when there are no search results"},removeSelectedText:{control:"text",description:"Custom text for the remove selected button"}}},t=D=>n.jsx("div",{style:{width:"200px",display:"flex",justifyContent:"center"},children:n.jsx(j,{...D})}),M=[{groupLabel:"Nhóm 1",items:[{label:"Item 1 thật dàiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"}]}],e=t.bind({});e.args={placeholder:"Tìm kiếm...",size:"lg",loading:!1,noData:!1,noResult:!1,combobox:!1,multi:!1,negative:!1,groups:M,loadingText:"Data loading...",noDataText:"No data",noResultText:"No result"};const o=t.bind({});o.args={...e.args,loading:!0,loadingText:"Đang tải dữ liệu..."};const r=t.bind({});r.args={...e.args,noData:!0,groups:[],noDataText:"Không có dữ liệu"};const i=t.bind({});i.args={...e.args,noResult:!0,groups:[],noResultText:"Không tìm thấy kết quả"};const a=t.bind({});a.args={...e.args,multi:!0};const s=t.bind({});s.args={...e.args,combobox:!0};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,f,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,y,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var w,C,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const ie=["Default","Loading","NoData","NoResults","MultiSelect","Combobox"];export{s as Combobox,e as Default,o as Loading,a as MultiSelect,r as NoData,i as NoResults,ie as __namedExportsOrder,re as default};
