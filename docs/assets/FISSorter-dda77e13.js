import{j as o}from"./jsx-runtime-47c18db8.js";import{F as m}from"./index-e72c950e.js";import{d as f}from"./getTheme-624682de.js";import{A as S,e as y}from"./AntdIcon-b5d0c52f.js";import{r as a}from"./index-d806aa85.js";import{D as E}from"./index-70c9a0e9.js";var D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const N=D;var x=function(i,n){return a.createElement(S,y({},i,{ref:n,icon:N}))},g=a.forwardRef(x);const h=g,e={ASCEND:"ascend",DESCEND:"descend",NONE:null},C=f(m)`
  margin-top: -2px;
  .sort-icon {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      width: 6px;
      height: 5px;
    }
  }
`,s=({columnKey:t,onSort:i,sortedInfo:n,colorActive:l="#2489e1",UpIcon:c=h,DownIcon:d=E})=>{const r=n.columnKey===t?n.order:e.NONE,u=()=>{const p=r===e.ASCEND?e.DESCEND:r===e.DESCEND?e.NONE:e.ASCEND;i(t,p)};return o.jsx(C,{size:"xs",variant:"tertiary-invisible",onClick:u,icon:o.jsxs("div",{className:"sort-icon",children:[o.jsx(c,{style:{color:r===e.ASCEND?l:"inherit"}}),o.jsx(d,{style:{color:r===e.DESCEND?l:"inherit"}})]})})};try{s.displayName="FISSorter",s.__docgenInfo={description:"",displayName:"FISSorter",props:{columnKey:{defaultValue:null,description:"",name:"columnKey",required:!0,type:{name:"string"}},onSort:{defaultValue:null,description:"",name:"onSort",required:!0,type:{name:"(columnKey: string | null, order: string | null) => void"}},sortedInfo:{defaultValue:null,description:"",name:"sortedInfo",required:!0,type:{name:"{ columnKey: string | null; order: string | null; }"}},colorActive:{defaultValue:{value:"#2489e1"},description:"",name:"colorActive",required:!1,type:{name:"string"}},UpIcon:{defaultValue:null,description:"",name:"UpIcon",required:!1,type:{name:"ComponentType<{ style?: CSSProperties; }>"}},DownIcon:{defaultValue:null,description:"",name:"DownIcon",required:!1,type:{name:"ComponentType<{ style?: CSSProperties; }>"}}}}}catch{}export{s as F};
