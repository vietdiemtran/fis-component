import{j as n}from"./jsx-runtime-47c18db8.js";import{e as j}from"./index-f11fe411.js";import"./index-d806aa85.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./LineArrowsUp-f9d28287.js";import"./index-7ba4325e.js";import"./index-96f4e19f.js";import"./getTheme-624682de.js";import"./index-8298a7d1.js";import"./index-15c2cb0c.js";import"./index-6b2c958e.js";import"./context-34092653.js";import"./index-fc91568f.js";import"./AntdIcon-b5d0c52f.js";import"./UnstableContext-a2e933a8.js";import"./useCSSVarCls-b4f81dac.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./ToastContext-c563c380.js";import"./index-b5e68206.js";import"./index-fcfadd25.js";import"./index-cce59dfd.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-a6ed384e.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-478976a9.js";import"./index-39568251.js";import"./index-63636042.js";import"./index-9a35051c.js";import"./index-6de1cb25.js";import"./index-100e3eb9.js";import"./index-94ce6d4e.js";import"./roundedArrow-09d3ee87.js";import"./useSize-a68aa0f1.js";import"./button-6bebafc6.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";import"./index-d06e9207.js";import"./index-1c88f37d.js";import"./index-cb3c771c.js";import"./index-cc0dda86.js";import"./collapse-8e27e3c5.js";import"./index-2fc8f5b5.js";import"./index-e9b8e115.js";import"./index-a14b58ae.js";import"./index-721a2c0c.js";import"./index-e07ee9d0.js";import"./FISSorter-98bf8fa6.js";import"./index-8f7cb1ce.js";import"./index-55d04594.js";import"./index-9d8d5b2b.js";import"./index-eca51d54.js";const Nt={title:"Components/Menu/MenuSelect",component:j,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the menu input"},size:{control:"radio",options:["md","lg"],description:"Size of the menu component"},loading:{control:"boolean",description:"Loading state of the menu"},noData:{control:"boolean",description:"Show no data state"},noResult:{control:"boolean",description:"Show no results state"},combobox:{control:"boolean",description:"Enable combobox mode"},multi:{control:"boolean",description:"Enable multi-select mode"},negative:{control:"boolean",description:"Enable negative styling"},loadingText:{control:"text",description:"Custom text to show during loading state"},noDataText:{control:"text",description:"Custom text to show when there is no data"},noResultText:{control:"text",description:"Custom text to show when there are no search results"},removeSelectedText:{control:"text",description:"Custom text for the remove selected button"}}},e=D=>n.jsx("div",{style:{width:"200px",display:"flex",justifyContent:"center"},children:n.jsx(j,{...D})}),M=[{groupLabel:"Nhóm 1",items:[{label:"Item 1 thật dàiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",value:"1"},{label:"Item 2",value:"2"}]},{groupLabel:"Nhóm 2",items:[{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"}]}],t=e.bind({});t.args={placeholder:"Tìm kiếm...",size:"lg",loading:!1,noData:!1,noResult:!1,combobox:!1,multi:!1,negative:!1,groups:M,loadingText:"Data loading...",noDataText:"No data",noResultText:"No result"};const o=e.bind({});o.args={...t.args,loading:!0,loadingText:"Đang tải dữ liệu..."};const r=e.bind({});r.args={...t.args,noData:!0,groups:[],noDataText:"Không có dữ liệu"};const i=e.bind({});i.args={...t.args,noResult:!0,groups:[],noResultText:"Không tìm thấy kết quả"};const a=e.bind({});a.args={...t.args,multi:!0};const s=e.bind({});s.args={...t.args,combobox:!0};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div style={{
  width: "200px",
  display: "flex",
  justifyContent: "center"
}}>
    <FISMenuSelect {...args} />
  </div>`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Ft=["Default","Loading","NoData","NoResults","MultiSelect","Combobox"];export{s as Combobox,t as Default,o as Loading,a as MultiSelect,r as NoData,i as NoResults,Ft as __namedExportsOrder,Nt as default};
