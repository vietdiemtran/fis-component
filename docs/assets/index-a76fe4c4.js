import{j as a}from"./jsx-runtime-47c18db8.js";import{c as F,g as pe,r as x}from"./index-d806aa85.js";import{d as g,g as t,l as be}from"./getTheme-c4dbdb94.js";import{v as ge,N as ve,w as xe,x as he}from"./LineArrowsUp-e7620e4c.js";import{F as ye}from"./index-499a6d13.js";import{M as C}from"./index-138f519f.js";import{F as J}from"./index-92e50295.js";import{F as $e}from"./index-84c6d358.js";import{F as K}from"./index-5cc85c35.js";function je(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var ie=je,Se=typeof F=="object"&&F&&F.Object===Object&&F,Te=Se,Ie=Te,_e=typeof self=="object"&&self&&self.Object===Object&&self,we=Ie||_e||Function("return this")(),oe=we,ke=oe,Oe=function(){return ke.Date.now()},qe=Oe,Ee=/\s/;function Fe(e){for(var n=e.length;n--&&Ee.test(e.charAt(n)););return n}var Le=Fe,Ne=Le,Me=/^\s+/;function Re(e){return e&&e.slice(0,Ne(e)+1).replace(Me,"")}var Ve=Re,De=oe,Ge=De.Symbol,le=Ge,Q=le,se=Object.prototype,Pe=se.hasOwnProperty,We=se.toString,k=Q?Q.toStringTag:void 0;function ze(e){var n=Pe.call(e,k),d=e[k];try{e[k]=void 0;var c=!0}catch{}var l=We.call(e);return c&&(n?e[k]=d:delete e[k]),l}var Ae=ze,Be=Object.prototype,Ue=Be.toString;function He(e){return Ue.call(e)}var Xe=He,Y=le,Ce=Ae,Je=Xe,Ke="[object Null]",Qe="[object Undefined]",Z=Y?Y.toStringTag:void 0;function Ye(e){return e==null?e===void 0?Qe:Ke:Z&&Z in Object(e)?Ce(e):Je(e)}var Ze=Ye;function et(e){return e!=null&&typeof e=="object"}var tt=et,rt=Ze,nt=tt,at="[object Symbol]";function it(e){return typeof e=="symbol"||nt(e)&&rt(e)==at}var ot=it,lt=Ve,ee=ie,st=ot,te=0/0,ut=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,ct=/^0o[0-7]+$/i,mt=parseInt;function ft(e){if(typeof e=="number")return e;if(st(e))return te;if(ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=lt(e);var d=dt.test(e);return d||ct.test(e)?mt(e.slice(2),d?2:8):ut.test(e)?te:+e}var pt=ft,bt=ie,D=qe,re=pt,gt="Expected a function",vt=Math.max,xt=Math.min;function ht(e,n,d){var c,l,s,b,u,f,v=0,O=!1,h=!1,_=!0;if(typeof e!="function")throw new TypeError(gt);n=re(n)||0,bt(d)&&(O=!!d.leading,h="maxWait"in d,s=h?vt(re(d.maxWait)||0,n):s,_="trailing"in d?!!d.trailing:_);function y(o){var p=c,j=l;return c=l=void 0,v=o,b=e.apply(j,p),b}function L(o){return v=o,u=setTimeout(I,n),O?y(o):b}function N(o){var p=o-f,j=o-v,S=n-p;return h?xt(S,s-j):S}function q(o){var p=o-f,j=o-v;return f===void 0||p>=n||p<0||h&&j>=s}function I(){var o=D();if(q(o))return w(o);u=setTimeout(I,N(o))}function w(o){return u=void 0,_&&c?y(o):(c=l=void 0,b)}function M(){u!==void 0&&clearTimeout(u),v=0,c=f=l=u=void 0}function R(){return u===void 0?b:w(D())}function $(){var o=D(),p=q(o);if(c=arguments,l=this,f=o,p){if(u===void 0)return L(f);if(h)return clearTimeout(u),u=setTimeout(I,n),y(f)}return u===void 0&&(u=setTimeout(I,n)),b}return $.cancel=M,$.flush=R,$}var yt=ht;const $t=pe(yt),jt=g.div`
  display: flex;
  flex-direction: column;
  width: unset;
  min-width: ${t("com/menu/min-width")};
  max-height: ${({$maxHeight:e})=>e?typeof e=="number"?`${e}px`:e:t("com/menu/max-height")};
  border-radius: ${t("com/menu/corner-radius")};
  border: ${t("com/menu/border/stroke-width")} solid
    ${t("com/menu/border/color-stroke")};
  padding-top: ${t("com/menu/top-padding")};
  padding-bottom: ${t("com/menu/bottom-padding")};
  padding-left: ${t("com/menu/left-padding")};
  padding-right: ${t("com/menu/right-padding")};
  /* gap: ${t("com/menu/item/horizontal-gap")}; */
  background-color: ${t("com/menu/background-color")};
  box-shadow: ${t("Elevation/Level-2")};
`,G=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${t("com/menu/item/horizontal-gap")};
  height: ${t("com/menu/height")};
`,ne=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,P=g.p`
  margin: 0;
  ${t("Paragraph/Sm")}
  color: ${t("com/menu/item/action/label/color-text/default")};
`;g.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;const ae=g.div`
  display: flex;
  flex-direction: column;
  gap: ${t("sem/dimension/gap/xs")};
  min-height: ${t("com/menu/item/size-md/min-height")};
  background-color: ${t("com/menu/item/action/background-color/default")};
`,St=g.div`
  padding-bottom: ${t("com/alert-banner/bottom-padding")};
`,Tt=g.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% + ${t("com/scrollbar/thumb/thumb-width/default")});
  position: relative;

  ${({$removeSelectedGroup:e})=>e&&be`
      margin-bottom: calc(
        ${t("com/menu/item/size-md/min-height")} + 2 *
          ${t("com/menu/bottom-padding")}
      );
    `}

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 8px;
    border-radius: ${t("sem/dimension/radius/component/round")};
    margin-top: 40px;
  }

  &::-webkit-scrollbar-thumb {
    height: 8px;
    background-color: ${t("com/scrollbar/thumb/background-color/default")};
    border-radius: ${t("sem/dimension/radius/component/round")};
    margin-top: 40px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,It=g.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${t("sem/color/background/neutral/canvas/default")};
  box-shadow: 0px -4px 32px -8px
    ${t("pri/elevation/shadow-ambient/color/sm")};
  padding: 8px;
  border: 1px solid ${t("com/menu/border/color-stroke")};
  border-top: none;
  border-bottom-left-radius: ${t("com/menu/corner-radius")};
  border-bottom-right-radius: ${t("com/menu/corner-radius")};
`;g.span`
  ${t("Subheading/XS")}
  color: ${t("com/menu/group-label/color-text")};
  padding-top: ${t("com/menu/group-label/vertical-padding")};
  padding-right: ${t("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${t("com/menu/group-label/vertical-padding")};
  padding-left: ${t("com/menu/group-label/horizontal-padding")};
  margin: 0;
`;const W=({placeholder:e,groups:n,size:d="md",multi:c=!1,selectedValues:l=[],onChangeSelected:s,searchValue:b="",onSearchChange:u,loading:f=!1,noData:v=!1,noResult:O=!1,combobox:h,className:_,onClickMenu:y,loadingText:L="Data loading...",noDataText:N="No data",noResultText:q="No result",removeSelectedText:I="Remove selected",selectedGroupLabel:w="Selected",maxHeight:M,onPopupScroll:R})=>{const[$,o]=x.useState(b),[p,j]=x.useState(b),S=x.useMemo(()=>$t(r=>j(r),300),[]);x.useEffect(()=>{S($)},[$,S]),x.useEffect(()=>()=>{S.cancel()},[S]),x.useEffect(()=>{u&&p!==b&&u(p)},[p,u,b]);const T=$,z=x.useMemo(()=>{if(u)return n;let r=n.map(i=>({groupLabel:i.groupLabel,items:c?i.items.filter(m=>!l.includes(m.value)):i.items}));return T.trim()&&(r=r.map(i=>({...i,items:i.items.filter(m=>{var E,X;return(X=(E=m==null?void 0:m.label)==null?void 0:E.toLowerCase())==null?void 0:X.includes(T==null?void 0:T.toLowerCase())})}))),r.filter(i=>i.items.length>0)},[n,c,l,T]),A=x.useMemo(()=>{if(!c)return null;const r=n.flatMap(i=>i.items).filter(i=>l.includes(i.value));return r.length===0?null:{groupLabel:w,items:r}},[n,c,l,w]),B=A?[A,...z]:z,V=c&&l.length>0?{groupLabel:"",items:[{label:I,description:"",value:"__remove_selected__"}]}:null,ue=n.reduce((r,i)=>r+i.items.length,0),U=T.trim()!=="",de=ue>=7||U,ce=B.length>0,H=U&&!ce,me=r=>{const i=r.target.value;o(i)},fe=r=>{if(c){if(r.value==="__remove_selected__"){s==null||s([]);return}let i;l.includes(r.value)?i=l.filter(m=>m!==r.value):i=[...l,r.value],s==null||s(i);return}else{const i=l[0]===r.value?[]:[r.value];s==null||s(i),y==null||y()}};return a.jsxs(jt,{$maxHeight:M,className:_,children:[de&&!h&&a.jsx(St,{children:a.jsx(ye,{iconPrefix:a.jsx(ge,{}),placeholder:e,value:T,onChange:me})}),f&&a.jsxs(G,{children:[a.jsx($e,{size:d,variant:"indeterminate"}),a.jsx(P,{children:L})]}),!f&&v&&a.jsxs(G,{children:[a.jsx(ne,{children:a.jsx(ve,{})}),a.jsx(P,{children:N})]}),!f&&!v&&(H||O)&&a.jsxs(G,{children:[a.jsx(ne,{children:a.jsx(xe,{})}),a.jsx(P,{children:q})]}),!H&&!v&&!f&&a.jsxs(a.Fragment,{children:[a.jsx(Tt,{$removeSelectedGroup:!!V,onScroll:R,children:B.map((r,i)=>a.jsxs(ae,{children:[i!==0&&a.jsx(J,{withDivider:!0}),(r==null?void 0:r.groupLabel)&&a.jsx(J,{label:r==null?void 0:r.groupLabel}),r.items.map((m,E)=>a.jsx(K,{title:m.label,variant:"primary",children:a.jsx(C,{title:m.label,description:m.description,size:d,onClickMenu:()=>fe(m),selected:l.includes(m.value),type:"select"})},E))]},i))}),V&&a.jsx(It,{children:a.jsx(ae,{children:V.items.map((r,i)=>a.jsx(K,{title:r.label,variant:"primary",children:a.jsx(C,{title:r.label,description:r.description,size:d,onClickMenu:()=>s==null?void 0:s([]),type:"select",iconPrefix:a.jsx(he,{}),negative:!0})},i))})})]})]})};W.displayName="FISMenuSelect";try{W.displayName="FISMenuSelect",W.__docgenInfo={description:"",displayName:"FISMenuSelect",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},groups:{defaultValue:null,description:"",name:"groups",required:!0,type:{name:"MenuGroup[]"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},multi:{defaultValue:{value:"false"},description:"",name:"multi",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:{value:""},description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},selectedValues:{defaultValue:{value:"[]"},description:"",name:"selectedValues",required:!1,type:{name:"(string | number)[]"}},onChangeSelected:{defaultValue:null,description:"",name:"onChangeSelected",required:!1,type:{name:"((values: (string | number)[]) => void)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},noData:{defaultValue:{value:"false"},description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:{value:"false"},description:"",name:"noResult",required:!1,type:{name:"boolean"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Data loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:{value:"No data"},description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"No result"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:{value:"Remove selected"},description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:{value:"Selected"},description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"((e: UIEvent<HTMLElement, UIEvent>) => void)"}}}}}catch{}export{W as F};
