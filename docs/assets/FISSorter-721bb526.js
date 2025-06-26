import{j as r}from"./jsx-runtime-47c18db8.js";import{F as c}from"./index-96f4e19f.js";import{L as S,a as m,S as f}from"./LineArrowsUp-4acd88f0.js";const n={ASCEND:"ascend",DESCEND:"descend",NONE:void 0},s=({columnKey:o,onSort:i,sortedInfo:t,UpIcon:a=S,DownIcon:d=m})=>{const e=t.columnKey===o?t.order:n.NONE,p=()=>{const l=e===n.ASCEND?n.DESCEND:e===n.DESCEND?n.NONE:n.ASCEND;i(o,l)},u=()=>e===n.ASCEND?r.jsx(a,{}):e===n.DESCEND?r.jsx(d,{}):r.jsx(f,{});return r.jsx(c,{onClick:p,variant:"tertiary-invisible",size:"xs",icon:u()})};try{s.displayName="FISSorter",s.__docgenInfo={description:"",displayName:"FISSorter",props:{columnKey:{defaultValue:null,description:"",name:"columnKey",required:!0,type:{name:"string"}},onSort:{defaultValue:null,description:"",name:"onSort",required:!0,type:{name:"(columnKey?: string | undefined, order?: string | undefined) => void"}},sortedInfo:{defaultValue:null,description:"",name:"sortedInfo",required:!0,type:{name:"{ columnKey?: string | undefined; order?: string | undefined; }"}},UpIcon:{defaultValue:{value:`(props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.66667 13.3333V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329M11.3333 13.3333V5.99996M11.3333 5.99996L8.66667 8.66663M11.3333 5.99996L14 8.66663"
      stroke="#505A5F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)`},description:"",name:"UpIcon",required:!1,type:{name:"ComponentType<{ style?: CSSProperties; }>"}},DownIcon:{defaultValue:{value:`(props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.3333 2.66663V9.99996M11.3333 9.99996L8.66667 7.33329M11.3333 9.99996L14 7.33329M4.66667 2.66663V13.3333M4.66667 13.3333L2 10.6666M4.66667 13.3333L7.33333 10.6666"
      stroke="#505A5F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)`},description:"",name:"DownIcon",required:!1,type:{name:"ComponentType<{ style?: CSSProperties; }>"}}}}}catch{}export{s as F};
