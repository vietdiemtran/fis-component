import{j as o}from"./jsx-runtime-e7d94ccb.js";import{c as le}from"./index-f7beeda4.js";import{r}from"./index-981f9478.js";import{D as se,d as ue}from"./index-f6fd7562.js";import{a as v,g as u}from"./getTheme-9564f801.js";import{g as de}from"./Overflow-56aefdd9.js";import{u as ce}from"./index-690b889d.js";import{F as pe}from"./index-00a7ff96.js";import{F as me}from"./index-0687b645.js";import{T as fe}from"./InfoSolidIcon-78d566e9.js";import"./AntdIcon-4d3cb6de.js";import"./index-05569730.js";import"./useMergedState-281a21e7.js";import"./useSize-b6c97e34.js";import"./pickAttrs-838756c7.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./button-7fa5f1b5.js";import"./useCSSVarCls-b5bb18ec.js";import"./CloseOutlined-adc62a60.js";import"./index-df9a4235.js";import"./index-66039438.js";var ge=globalThis&&globalThis.__rest||function(e,s){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)s.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(i[t[a]]=e[t[a]]);return i};const{TimePicker:ve,RangePicker:xe}=se,ye=r.forwardRef((e,s)=>r.createElement(xe,Object.assign({},e,{picker:"time",mode:void 0,ref:s}))),x=r.forwardRef((e,s)=>{var{addon:i,renderExtraFooter:t,variant:a,bordered:w}=e,h=ge(e,["addon","renderExtraFooter","variant","bordered"]);const[b]=ce("timePicker",a,w),C=r.useMemo(()=>{if(t)return t;if(i)return i},[i,t]);return r.createElement(ve,Object.assign({},h,{mode:void 0,ref:s,renderExtraFooter:C,variant:b}))}),A=de(x,"popupAlign",void 0,"picker");x._InternalPanelDoNotUseOrYouWillBeFired=A;x.RangePicker=ye;x._InternalPanelDoNotUseOrYouWillBeFired=A;const he=x,be=v.div`
  display: flex;
  flex-direction: column;
  gap: ${u("com/input/vertical-gap")};

  /* Keep the default full width while letting consumer utility classes win. */
  :where(&) {
    width: 100%;
  }
`,Ie=v.div`
  display: flex;
  justify-content: space-between;
`,Se=v.span`
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
`,Pe=v(he)`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,we=v.div`
  position: relative;
  width: 100%;
`,P=r.forwardRef((e,s)=>{const{className:i,textLabel:t="",iconLabel:a,required:w,message:h,negative:b,positive:C,format:k="HH:mm:ss",disabled:T,onChange:l,onClickIconLabel:J,getPopupContainer:Q,...Z}=e,[ee,O]=r.useState(""),[te,V]=r.useState(null),[q,p]=r.useState(!1),F=r.useRef(null),ne=r.useRef(null);r.useEffect(()=>{const n=I=>{var E;const d=I.target;F.current&&!F.current.contains(d)&&!((E=document.querySelector(".ant-picker-dropdown"))!=null&&E.contains(d))&&p(!1)};return q&&document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[q]);const re=n=>{l==null||l(n?n.toDate():null),V(n),O(n?n.format(k):""),p(!1)},ae=n=>{const I=n.target.value;O(I);const d=ue(I,k,!0);d.isValid()?(l==null||l(d.toDate()),V(d)):(l==null||l(null),V(null))},j=()=>{T||p(!0)},oe=n=>{p(n)},ie=n=>{n.key==="Escape"&&p(!1)};return o.jsxs(be,{className:i,ref:F,children:[(t||a)&&o.jsx(pe,{textLabel:t,required:w,iconLabel:a,onClickIconLabel:J}),o.jsxs(we,{children:[o.jsx(me,{...Z,ref:s,typeSuffix:"icon",iconSuffix:o.jsx(fe,{}),negative:b,disabled:T,value:ee,onChange:ae,onFocus:j,onClickSuffix:j,onKeyDown:ie,autoComplete:"off"}),o.jsx(Pe,{ref:ne,format:k,value:te,onChange:re,open:q,onOpenChange:oe,getPopupContainer:Q,showNow:!0,inputReadOnly:!0})]}),h&&o.jsx(Ie,{children:o.jsx(Se,{className:le({disabled:T,negative:b,positive:C}),children:h})})]})});P.displayName="FISInputTime";const X=P;try{P.displayName="FISInputTime",P.__docgenInfo={description:"",displayName:"FISInputTime",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ue={title:"components/Input/InputTime",component:X,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Time pick",placeholder:"hh:mm:ss",labelSuffix:"suffix",format:"HH:mm:ss",sizeInput:"md",required:!0,disabled:!1,type:"text",message:"Placeholder of hint text to help",readOnly:!1,negative:!1,positive:!1},argTypes:{textLabel:{control:"text",description:"Nhãn hiển thị phía trên input"},format:{control:"text",description:"Định dạng giờ (vd HH:mm:ss, HH:mm)"},labelSuffix:{control:"text",description:"Nhãn hiển thị ở cuối input"},iconLabel:{control:!1,description:"Icon cạnh label"},placeholder:{control:"text"},sizeInput:{control:{type:"radio"},options:["md","lg"]},message:{control:"text"},required:{control:{type:"radio"},options:[!0,!1]},disabled:{control:{type:"radio"},options:[!0,!1]},readOnly:{control:{type:"radio"},options:[!0,!1]},negative:{control:{type:"radio"},options:[!0,!1]},positive:{control:{type:"radio"},options:[!0,!1]},value:{control:"text"}}},y=e=>o.jsx("div",{style:{width:"400px"},children:o.jsx(X,{...e})}),S=y.bind({}),m=y.bind({});m.args={disabled:!0,message:""};const f=y.bind({});f.args={negative:!0,message:"Giờ không hợp lệ"};const g=y.bind({});g.args={positive:!0,message:"Giờ hợp lệ"};const c=y.bind({});c.args={format:"HH:mm",placeholder:"hh:mm",message:""};c.parameters={docs:{description:{story:'Chỉ chọn giờ:phút với `format="HH:mm"`.'}}};var D,L,H;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISInputTime {...args} />
    </div>;
}`,...(H=(L=S.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var _,R,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISInputTime {...args} />
    </div>;
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var $,z,B;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISInputTime {...args} />
    </div>;
}`,...(B=(z=f.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var K,W,G;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISInputTime {...args} />
    </div>;
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var M,U,Y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <div style={{
    width: "400px"
  }}>
      <FISInputTime {...args} />
    </div>;
}`,...(Y=(U=c.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const Ye=["Default","Disabled","Negative","Positive","CustomFormat"];export{c as CustomFormat,S as Default,m as Disabled,f as Negative,g as Positive,Ye as __namedExportsOrder,Ue as default};
