import{j as a}from"./jsx-runtime-e7d94ccb.js";import{c as K}from"./index-f7beeda4.js";import{r}from"./index-981f9478.js";import{D as M,d as U}from"./index-b234deda.js";import{d as p,g as u}from"./getTheme-6566e1e9.js";import{u as Y,g as A}from"./index-986bc053.js";import{F as X}from"./index-e99fd670.js";import{F as G}from"./index-3b8095fb.js";import{T as J}from"./LineArrowsUp-2da65544.js";import"./AntdIcon-f4bdc331.js";import"./index-05569730.js";import"./useMergedState-af1da16a.js";import"./useSize-2f261900.js";import"./pickAttrs-397aa285.js";import"./roundedArrow-00f1ad08.js";import"./UnstableContext-9c4aba24.js";import"./button-35abb69e.js";import"./useCSSVarCls-3d3c191f.js";import"./index-ba8cec51.js";import"./index-4bd6e544.js";var Q=globalThis&&globalThis.__rest||function(e,s){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)s.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]]);return i};const{TimePicker:Z,RangePicker:ee}=M,te=r.forwardRef((e,s)=>r.createElement(ee,Object.assign({},e,{picker:"time",mode:void 0,ref:s}))),f=r.forwardRef((e,s)=>{var{addon:i,renderExtraFooter:t,variant:o,bordered:b}=e,m=Q(e,["addon","renderExtraFooter","variant","bordered"]);const[x]=Y("timePicker",o,b),h=r.useMemo(()=>{if(t)return t;if(i)return i},[i,t]);return r.createElement(Z,Object.assign({},m,{mode:void 0,ref:s,renderExtraFooter:h,variant:x}))}),E=A(f,"popupAlign",void 0,"picker");f._InternalPanelDoNotUseOrYouWillBeFired=E;f.RangePicker=te;f._InternalPanelDoNotUseOrYouWillBeFired=E;const ne=f,re=p.div`
  display: flex;
  flex-direction: column;
  gap: ${u("com/input/vertical-gap")};
  width: 100%;
`,oe=p.div`
  display: flex;
  justify-content: space-between;
`,ae=p.span`
  ${u("Paragraph/XS")}
  color: ${u("com/input/hint/neutral/label/color-text")};
  padding-top: ${u("com/input/hint/top-padding")};

  &.negative {
    color: ${u("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${u("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${u("com/input/hint/disable/label/color-text")};
  }
`,ie=p(ne)`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,le=p.div`
  position: relative;
  width: 100%;
`,g=r.forwardRef((e,s)=>{const{className:i,textLabel:t="",iconLabel:o,required:b,message:m,negative:x,positive:h,format:I="HH:mm:ss",disabled:P,onChange:l,onClickIconLabel:D,getPopupContainer:L,..._}=e,[R,V]=r.useState(""),[$,S]=r.useState(null),[k,c]=r.useState(!1),C=r.useRef(null),N=r.useRef(null);r.useEffect(()=>{const n=y=>{var T;const d=y.target;C.current&&!C.current.contains(d)&&!((T=document.querySelector(".ant-picker-dropdown"))!=null&&T.contains(d))&&c(!1)};return k&&document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[k]);const H=n=>{l==null||l(n?n.toDate():null),S(n),V(n?n.format(I):""),c(!1)},z=n=>{const y=n.target.value;V(y);const d=U(y,I,!0);d.isValid()?(l==null||l(d.toDate()),S(d)):(l==null||l(null),S(null))},w=()=>{P||c(!0)},B=n=>{c(n)},W=n=>{n.key==="Escape"&&c(!1)};return a.jsxs(re,{className:i,ref:C,children:[(t||o)&&a.jsx(X,{textLabel:t,required:b,iconLabel:o,onClickIconLabel:D}),a.jsxs(le,{children:[a.jsx(G,{..._,ref:s,typeSuffix:"icon",iconSuffix:a.jsx(J,{}),negative:x,disabled:P,value:R,onChange:z,onFocus:w,onClickSuffix:w,onKeyDown:W}),a.jsx(ie,{ref:N,format:I,value:$,onChange:H,open:k,onOpenChange:B,getPopupContainer:L,showNow:!0,inputReadOnly:!0})]}),m&&a.jsx(oe,{children:a.jsx(ae,{className:K({disabled:P,negative:x,positive:h}),children:m})})]})});g.displayName="FISInputTime";const F=g;try{g.displayName="FISInputTime",g.__docgenInfo={description:"",displayName:"FISInputTime",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const qe={title:"components/Input/InputTime",component:F,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Time pick",placeholder:"hh:mm:ss",labelSuffix:"suffix",format:"HH:mm:ss",sizeInput:"md",required:!0,disabled:!1,type:"text",message:"Placeholder of hint text to help",readOnly:!1,negative:!1,positive:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},sizeInput:{control:{type:"radio"},options:["md","lg"]},message:{control:"text"},required:{control:{type:"radio"},options:[!0,!1]},disabled:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},negative:{control:{type:"radio"},options:[!0,!1]},positive:{control:{type:"radio"},options:[!0,!1]},value:{control:"text"}}},se=e=>a.jsx("div",{style:{width:"400px"},children:a.jsx(F,{...e})}),v=se.bind({});var q,O,j;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISInputTime {...args} />
    </div>;
}`,...(j=(O=v.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Oe=["Default"];export{v as Default,Oe as __namedExportsOrder,qe as default};
