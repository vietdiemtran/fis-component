import{j as a}from"./jsx-runtime-e7d94ccb.js";import{r as $}from"./index-981f9478.js";import{F as f}from"./index-ba8cec51.js";import{d,g as n,l as D}from"./getTheme-6566e1e9.js";import{P as H}from"./Pagination-37df9f97.js";import{l as q,n as B,o as N}from"./LineArrowsUp-2da65544.js";import{F as A}from"./index-df36d92c.js";import"./index-4bd6e544.js";import"./AntdIcon-f4bdc331.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./RightOutlined-dcac151a.js";import"./useMergedState-af1da16a.js";import"./KeyCode-6413d982.js";import"./pickAttrs-397aa285.js";import"./useSize-2f261900.js";import"./roundedArrow-00f1ad08.js";import"./UnstableContext-9c4aba24.js";import"./button-35abb69e.js";import"./index-986bc053.js";import"./useCSSVarCls-3d3c191f.js";import"./motion-dbbe3e75.js";import"./MultipleValue-f505f300.js";import"./index-04319ce3.js";import"./index-8e4a15a5.js";import"./index-e99fd670.js";import"./styles-b3c3e090.js";import"./index-8530f58e.js";import"./index-b6ea89b6.js";import"./index-3b8095fb.js";import"./mergeRefs-3d2b51f8.js";import"./index-fde73cf7.js";import"./index-db4650f3.js";import"./index-825e8a07.js";import"./index-5f5ebbde.js";import"./index-e5bbe185.js";import"./index-a367dbf7.js";import"./index-3213842b.js";const O=d(H)`
  display: flex;
  align-items: center;
  gap: ${n("com/pagination/record-number/horizontal-gap")};

  .ant-pagination-item {
    ${n("Paragraph/Sm")}
    height: ${n("sem/dimension/size/component/2xs")};
    min-width: ${n("com/pagination/navigation/page-number/min-with")};
    border-radius: ${n("com/pagination/navigation/page-number/corner-radius")};
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${n("sem/color/text/neutral/sub")} !important;
    }

    &:hover {
      background-color: ${n("com/pagination/navigation/page-number/background/background-color/hover")} !important;

      a {
        color: ${n("com/pagination/navigation/page-number/label/color-text/hover")} !important;
      }
    }

    &:active {
      background-color: ${n("com/pagination/navigation/page-number/background/background-color/pressed")} !important;

      a {
        color: ${n("com/pagination/navigation/page-number/label/color-text/pressed")} !important;
      }
    }
  }

  .ant-pagination-item:focus-visible,
  .ant-pagination-next:focus-visible,
  .ant-pagination-prev:focus-visible {
    box-shadow:
      0px 0px 0px ${n("sem/dimension/stroke-width/divider/lg")}
        ${n("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${n("com/focus-mark/color-stroke")} !important;
    outline: none !important;
    background: ${n("com/pagination/navigation/page-number/background/background-color/active")};
  }

  .ant-pagination-item-active {
    border: none !important;
    background-color: ${n("com/pagination/navigation/page-number/background/background-color/active")};

    a {
      color: ${n("com/pagination/navigation/page-number/label/color-text/active")} !important;
    }
  }

  &.ant-pagination-disabled {
    .ant-pagination-item {
      background-color: transparent !important;
      color: ${n("com/pagination/navigation/page-number/disable/label/color-text/default")} !important;
    }
  }

  .ant-pagination-next.ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  &.ant-pagination-disabled .ant-pagination-next,
  &.ant-pagination-disabled .ant-pagination-prev {
    color: ${n("com/button/disable/icon-color")} !important;
    background-color: transparent !important;

    button {
      border: none !important;
    }
  }

  &.ant-pagination-disabled .ant-pagination-item-active {
    background-color: ${n("com/pagination/navigation/page-number/disable/background/background-color/active")} !important;
    color: ${n("com/pagination/navigation/page-number/disable/label/color-text/active")} !important;
  }

  .ant-pagination-options {
    margin-inline-start: ${n("com/pagination/horizontal-gap")} !important;
  }

  ${({$minimize:o})=>o&&D`
      gap: 0;
      .ant-pagination-item,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        display: none;
      }

      .ant-pagination-next {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }

      .ant-pagination-prev {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-right: none;
      }
    `}
`,U=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${n("com/pagination/vertical-padding")}
    ${n("com/pagination/horizontal-padding")}
    ${n("com/pagination/vertical-padding")}
    ${n("com/pagination/horizontal-padding")};
`,W=d.div`
  display: flex;
  align-items: center;
  gap: ${n("com/pagination/horizontal-gap")};
`,J=d.span`
  display: inline-flex;
  align-items: center;
  gap: ${n("sem/dimension/gap/xs")};

  ${n("Paragraph/Sm")};
  color: ${n("com/pagination/range-number/label/color-text")} !important;
`,Q=10,G=({pageSize:o=Q,current:t=1,total:e=0,minimize:b,recordCounted:h,onIconPageRecordClick:x,showTotal:S,...i})=>{const v=$.useMemo(()=>[(t-1)*o+1,t*o>e?e:t*o],[t,o,e]),M=a.jsxs(a.Fragment,{children:["Hiển thị ",v[0],"-",v[1],h?` trong ${e} bản ghi`:a.jsx(f,{size:"xs",icon:a.jsx(q,{}),variant:"tertiary-invisible",onClick:x})]}),k={size:"small",showSizeChanger:!1,showQuickJumper:!1,responsive:!0,showLessItems:!0,locale:{items_per_page:"/ trang"},total:e,current:t,pageSize:o,...i},L=(r,p,s)=>p==="prev"?a.jsx(f,{size:"xs",icon:a.jsx(B,{}),variant:"tertiary",disabled:t===1}):p==="next"?a.jsx(f,{size:"xs",icon:a.jsx(N,{}),variant:"tertiary",disabled:t*o>=e}):s;return a.jsxs(U,{children:[a.jsx(J,{children:S?S(e,v):M}),a.jsxs(W,{children:[a.jsx(O,{...k,$minimize:!!b,showSizeChanger:!1,itemRender:L}),a.jsx(A,{style:{width:"100px"},size:"xs",options:[{groupLabel:"",items:(i.pageSizeOptions||[10,20,50,100]).map(r=>{var p,s;return{label:`${r} ${((p=i.locale)==null?void 0:p.items_per_page)||((s=k.locale)==null?void 0:s.items_per_page)}`,value:String(r)}})}],value:String(o),multi:!1,onChange:r=>{i.onShowSizeChange&&i.onShowSizeChange(Number(r),o)}})]})]})},E=G;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{minimize:{defaultValue:null,description:"",name:"minimize",required:!1,type:{name:"boolean"}},recordCounted:{defaultValue:null,description:"",name:"recordCounted",required:!1,type:{name:"boolean"}},onIconPageRecordClick:{defaultValue:null,description:"",name:"onIconPageRecordClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const En={title:"Components/Table/Pagination",tags:["autodocs"],component:E,argTypes:{total:{control:{type:"number"},defaultValue:100,description:"Tổng số bản ghi."},pageSize:{control:{type:"number"},defaultValue:10,description:"Số bản ghi trên mỗi trang."},current:{control:{type:"number"},defaultValue:1,description:"Trang hiện tại."},minimize:{control:{type:"boolean"},defaultValue:!1,description:"Ẩn bớt UI để tối giản hiển thị."},recordCounted:{control:{type:"boolean"},defaultValue:!0,description:"Hiển thị tổng số bản ghi."},onIconPageRecordClick:{action:"clicked",description:"Sự kiện khi bấm vào icon thông tin số bản ghi."},showTotal:{control:!1,description:"Hàm tùy chỉnh hiển thị tổng số bản ghi."}}},u={render:o=>{const[t,e]=$.useState(o.current),[b,h]=$.useState(o.pageSize);return a.jsx(a.Fragment,{children:a.jsx(E,{...o,current:t,pageSize:b,onChange:e,onShowSizeChange:x=>{h(x)}})})}},c={...u,args:{total:100,pageSize:10,current:1}},m={...u,args:{total:100,pageSize:10,current:1,minimize:!0}},l={...u,args:{total:200,pageSize:20,current:2,showTotal:(o,[t,e])=>`Showing ${t}-${e} of ${o} records`}},g={...u,args:{total:150,pageSize:15,current:3,recordCounted:!0}};var z,C,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 100,
    pageSize: 10,
    current: 1
  }
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var P,j,w;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 100,
    pageSize: 10,
    current: 1,
    minimize: true
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,_,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 200,
    pageSize: 20,
    current: 2,
    showTotal: (total, [start, end]) => \`Showing \${start}-\${end} of \${total} records\`
  }
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var F,R,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 150,
    pageSize: 15,
    current: 3,
    recordCounted: true
  }
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const Mn=["Default","Minimized","CustomTotal","WithRecordCounted"];export{l as CustomTotal,c as Default,m as Minimized,g as WithRecordCounted,Mn as __namedExportsOrder,En as default};
