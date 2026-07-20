import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as $}from"./index-981f9478.js";import{F as f}from"./index-df9a4235.js";import{a as d,g as o,r as D}from"./getTheme-9564f801.js";import{P as H}from"./Pagination-95cd144b.js";import{h as q,r as B,s as N}from"./InfoSolidIcon-78d566e9.js";import{F as A}from"./index-e76dccd7.js";import"./index-66039438.js";import"./AntdIcon-4d3cb6de.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./LeftOutlined-9792d8c9.js";import"./RightOutlined-5419b3d1.js";import"./useMergedState-281a21e7.js";import"./KeyCode-6413d982.js";import"./pickAttrs-838756c7.js";import"./useSize-b6c97e34.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./button-7fa5f1b5.js";import"./Overflow-56aefdd9.js";import"./motion-99a9a6da.js";import"./index-690b889d.js";import"./CloseOutlined-adc62a60.js";import"./useCSSVarCls-b5bb18ec.js";import"./index-96b2cdcf.js";import"./MultipleValue-0ba8681f.js";import"./index-df0a6e50.js";import"./index-b885ca0b.js";import"./index-00a7ff96.js";import"./styles-eb3881e5.js";import"./index-1cbf047b.js";import"./styles-22914ca6.js";import"./index-26cd4491.js";import"./index-0687b645.js";import"./mergeRefs-3d2b51f8.js";import"./index-4c1c7505.js";import"./index-b8aa03b0.js";import"./index-6b29b51e.js";import"./index-b0c2e733.js";import"./index-5e910af4.js";import"./index-4e469fe9.js";import"./index-dc16328d.js";import"./index-600f3eb9.js";const O=d(H)`
  display: flex;
  align-items: center;
  gap: ${o("com/pagination/record-number/horizontal-gap")};

  .ant-pagination-item {
    ${o("Paragraph/Sm")}
    height: ${o("sem/dimension/size/component/2xs")};
    min-width: ${o("com/pagination/navigation/page-number/min-with")};
    border-radius: ${o("com/pagination/navigation/page-number/corner-radius")};
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${o("sem/color/text/neutral/sub")} !important;
    }

    &:hover {
      background-color: ${o("com/pagination/navigation/page-number/background/background-color/hover")} !important;

      a {
        color: ${o("com/pagination/navigation/page-number/label/color-text/hover")} !important;
      }
    }

    &:active {
      background-color: ${o("com/pagination/navigation/page-number/background/background-color/pressed")} !important;

      a {
        color: ${o("com/pagination/navigation/page-number/label/color-text/pressed")} !important;
      }
    }
  }

  .ant-pagination-item:focus-visible,
  .ant-pagination-next:focus-visible,
  .ant-pagination-prev:focus-visible {
    box-shadow:
      0px 0px 0px ${o("sem/dimension/stroke-width/divider/lg")}
        ${o("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${o("com/focus-mark/color-stroke")} !important;
    outline: none !important;
    background: ${o("com/pagination/navigation/page-number/background/background-color/active")};
    border-color: ${o("com/pagination/navigation/page-number/border/active")} !important
  }

  .ant-pagination-item-active {
    font-weight: ${o("sem/typo/label/weight-bold")};
    background-color: ${o("com/pagination/navigation/page-number/background/background-color/active")};
    border-color: ${o("com/pagination/navigation/page-number/border/active")} !important;

    a {
      color: ${o("com/pagination/navigation/page-number/label/color-text/active")} !important;
    }
  }

  &.ant-pagination-disabled {
    .ant-pagination-item {
      background-color: transparent !important;
      color: ${o("com/pagination/navigation/page-number/disable/label/color-text/default")} !important;
    }
  }

  .ant-pagination-next.ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  &.ant-pagination-disabled .ant-pagination-next,
  &.ant-pagination-disabled .ant-pagination-prev {
    color: ${o("com/button/disable/icon-color")} !important;
    background-color: transparent !important;

    button {
      border: none !important;
      background-color: ${o("com/button/tertiary/background/invisible")};
    }
  }

  .ant-pagination-next,
  .ant-pagination-prev {
    button {
      border: none !important;
    }
  }

  &.ant-pagination-disabled .ant-pagination-item-active {
    background-color: ${o("com/pagination/navigation/page-number/disable/background/background-color/active")} !important;
    color: ${o("com/pagination/navigation/page-number/disable/label/color-text/active")} !important;
  }

  .ant-pagination-options {
    margin-inline-start: ${o("com/pagination/horizontal-gap")} !important;
  }

  ${({$minimize:n})=>n&&D`
      gap: 0;
      .ant-pagination-item,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        display: none;
      }

      .ant-pagination-next {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        button {
          border: 1px solid ${o("com/button-group/divider/divider-color/default")} !important;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          margin-left: -1px;
        }
      }

      .ant-pagination-prev, .ant-pagination-prev.ant-pagination-disabled  {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-right: none;
        button {
          border: 1px solid ${o("com/button-group/divider/divider-color/default")} !important;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
    `}
`,U=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${o("com/pagination/vertical-padding")}
    ${o("com/pagination/horizontal-padding")}
    ${o("com/pagination/vertical-padding")}
    ${o("com/pagination/horizontal-padding")};
`,W=d.div`
  display: flex;
  align-items: center;
  gap: ${o("com/pagination/horizontal-gap")};
`,J=d.span`
  display: inline-flex;
  align-items: center;
  gap: ${o("sem/dimension/gap/xs")};

  ${o("Paragraph/Sm")};
  color: ${o("com/pagination/range-number/label/color-text")} !important;
`,Q=10,E=({pageSize:n=Q,current:a=1,total:e=0,minimize:b,recordCounted:h,onIconPageRecordClick:v,showTotal:S,...i})=>{const x=$.useMemo(()=>[(a-1)*n+1,a*n>e?e:a*n],[a,n,e]),M=t.jsxs(t.Fragment,{children:["Hiển thị ",x[0],"-",x[1],h?` trong ${e} bản ghi`:t.jsx(f,{size:"xs",icon:t.jsx(q,{}),variant:"tertiary-invisible",onClick:v})]}),k={size:"small",showSizeChanger:!1,showQuickJumper:!1,responsive:!0,showLessItems:!0,locale:{items_per_page:"/ trang"},total:e,current:a,pageSize:n,...i},L=(r,p,s)=>p==="prev"?t.jsx(f,{size:"xs",icon:t.jsx(B,{}),variant:"tertiary",disabled:a===1}):p==="next"?t.jsx(f,{size:"xs",icon:t.jsx(N,{}),variant:"tertiary",disabled:a*n>=e}):s;return t.jsxs(U,{children:[t.jsx(J,{children:S?S(e,x):M}),t.jsxs(W,{children:[t.jsx(O,{...k,$minimize:!!b,showSizeChanger:!1,itemRender:L}),t.jsx(A,{style:{width:"100px"},size:"xs",options:[{groupLabel:"",items:(i.pageSizeOptions||[10,20,50,100]).map(r=>{var p,s;return{label:`${r} ${((p=i.locale)==null?void 0:p.items_per_page)||((s=k.locale)==null?void 0:s.items_per_page)}`,value:String(r)}})}],value:String(n),multi:!1,onChange:r=>{i.onShowSizeChange&&i.onShowSizeChange(Number(r),n)}})]})]})};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{minimize:{defaultValue:null,description:"",name:"minimize",required:!1,type:{name:"boolean"}},recordCounted:{defaultValue:null,description:"",name:"recordCounted",required:!1,type:{name:"boolean"}},onIconPageRecordClick:{defaultValue:null,description:"",name:"onIconPageRecordClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const qo={title:"Components/Table/Pagination",tags:["autodocs"],component:E,argTypes:{total:{control:{type:"number"},defaultValue:100,description:"Tổng số bản ghi."},pageSize:{control:{type:"number"},defaultValue:10,description:"Số bản ghi trên mỗi trang."},current:{control:{type:"number"},defaultValue:1,description:"Trang hiện tại."},minimize:{control:{type:"boolean"},defaultValue:!1,description:"Ẩn bớt UI để tối giản hiển thị."},recordCounted:{control:{type:"boolean"},defaultValue:!0,description:"Hiển thị tổng số bản ghi."},onIconPageRecordClick:{action:"clicked",description:"Sự kiện khi bấm vào icon thông tin số bản ghi."},showTotal:{control:!1,description:"Hàm tùy chỉnh hiển thị tổng số bản ghi."}}},u={render:n=>{const[a,e]=$.useState(n.current),[b,h]=$.useState(n.pageSize);return t.jsx(t.Fragment,{children:t.jsx(E,{...n,current:a,pageSize:b,onChange:e,onShowSizeChange:v=>{h(v)}})})}},c={...u,args:{total:100,pageSize:10,current:1}},m={...u,args:{total:100,pageSize:10,current:1,minimize:!0}},g={...u,args:{total:200,pageSize:20,current:2,showTotal:(n,[a,e])=>`Showing ${a}-${e} of ${n} records`}},l={...u,args:{total:150,pageSize:15,current:3,recordCounted:!0}};var z,C,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 100,
    pageSize: 10,
    current: 1
  }
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,j,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 100,
    pageSize: 10,
    current: 1,
    minimize: true
  }
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var T,_,I;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 200,
    pageSize: 20,
    current: 2,
    showTotal: (total, [start, end]) => \`Showing \${start}-\${end} of \${total} records\`
  }
}`,...(I=(_=g.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,F,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    total: 150,
    pageSize: 15,
    current: 3,
    recordCounted: true
  }
}`,...(V=(F=l.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const Bo=["Default","Minimized","CustomTotal","WithRecordCounted"];export{g as CustomTotal,c as Default,m as Minimized,l as WithRecordCounted,Bo as __namedExportsOrder,qo as default};
