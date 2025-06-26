import{j as y}from"./jsx-runtime-47c18db8.js";import{d as P,l as d,g as e}from"./getTheme-624682de.js";import{R as N,r as M}from"./index-d806aa85.js";import{g as re,R as ce}from"./collapse-8e27e3c5.js";import{c as H}from"./index-d16835b1.js";import{a as Z,j as T,l as ee,e as L,_ as de,C as te,w as se,k as le,m as me,n as ge,o as he,p as pe,q as R,r as ue,s as $e,t as fe,v as ve}from"./AntdIcon-b5d0c52f.js";import{u as ze}from"./useMergedState-1b150724.js";import{t as ae,u as be,c as Q,o as U}from"./useSize-a68aa0f1.js";import{K as Y}from"./KeyCode-6413d982.js";import{p as xe}from"./pickAttrs-551e8cfe.js";import{i as ye}from"./motion-58c6f938.js";import{F as Ce}from"./index-1c88f37d.js";import{C as we,o as Ie}from"./LineArrowsUp-4acd88f0.js";import{F as Se}from"./index-6b2c958e.js";var oe=N.forwardRef(function(a,o){var n=a.prefixCls,r=a.forceRender,l=a.className,z=a.style,m=a.children,g=a.isActive,s=a.role,u=a.classNames,C=a.styles,f=N.useState(g||r),b=Z(f,2),i=b[0],c=b[1];return N.useEffect(function(){(r||g)&&c(!0)},[r,g]),i?N.createElement("div",{ref:o,className:H("".concat(n,"-content"),T(T({},"".concat(n,"-content-active"),g),"".concat(n,"-content-inactive"),!g),l),style:z,role:s},N.createElement("div",{className:H("".concat(n,"-content-box"),u==null?void 0:u.body),style:C==null?void 0:C.body},m)):null});oe.displayName="PanelContent";var Ne=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],ie=N.forwardRef(function(a,o){var n=a.showArrow,r=n===void 0?!0:n,l=a.headerClass,z=a.isActive,m=a.onItemClick,g=a.forceRender,s=a.className,u=a.classNames,C=u===void 0?{}:u,f=a.styles,b=f===void 0?{}:f,i=a.prefixCls,c=a.collapsible,h=a.accordion,v=a.panelKey,p=a.extra,t=a.header,x=a.expandIcon,$=a.openMotion,w=a.destroyInactivePanel,I=a.children,A=ee(a,Ne),S=c==="disabled",k=p!=null&&typeof p!="boolean",E=T(T(T({onClick:function(){m==null||m(v)},onKeyDown:function(O){(O.key==="Enter"||O.keyCode===Y.ENTER||O.which===Y.ENTER)&&(m==null||m(v))},role:h?"tab":"button"},"aria-expanded",z),"aria-disabled",S),"tabIndex",S?-1:0),K=typeof x=="function"?x(a):N.createElement("i",{className:"arrow"}),F=K&&N.createElement("div",L({className:"".concat(i,"-expand-icon")},["header","icon"].includes(c)?E:{}),K),j=H("".concat(i,"-item"),T(T({},"".concat(i,"-item-active"),z),"".concat(i,"-item-disabled"),S),s),_=H(l,"".concat(i,"-header"),T({},"".concat(i,"-collapsible-").concat(c),!!c),C.header),B=de({className:_,style:b.header},["header","icon"].includes(c)?{}:E);return N.createElement("div",L({},A,{ref:o,className:j}),N.createElement("div",B,r&&F,N.createElement("span",L({className:"".concat(i,"-header-text")},c==="header"?E:{}),t),k&&N.createElement("div",{className:"".concat(i,"-extra")},p)),N.createElement(te,L({visible:z,leavedClassName:"".concat(i,"-content-hidden")},$,{forceRender:g,removeOnLeave:w}),function(D,O){var q=D.className,V=D.style;return N.createElement(oe,{ref:O,prefixCls:i,className:q,classNames:C,style:V,styles:b,isActive:z,forceRender:g,role:h?"tabpanel":void 0},I)}))}),Pe=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ke=function(o,n){var r=n.prefixCls,l=n.accordion,z=n.collapsible,m=n.destroyInactivePanel,g=n.onItemClick,s=n.activeKey,u=n.openMotion,C=n.expandIcon;return o.map(function(f,b){var i=f.children,c=f.label,h=f.key,v=f.collapsible,p=f.onItemClick,t=f.destroyInactivePanel,x=ee(f,Pe),$=String(h??b),w=v??z,I=t??m,A=function(E){w!=="disabled"&&(g(E),p==null||p(E))},S=!1;return l?S=s[0]===$:S=s.indexOf($)>-1,N.createElement(ie,L({},x,{prefixCls:r,key:$,panelKey:$,isActive:S,accordion:l,openMotion:u,expandIcon:C,header:c,collapsible:w,onItemClick:A,destroyInactivePanel:I}),i)})},Ae=function(o,n,r){if(!o)return null;var l=r.prefixCls,z=r.accordion,m=r.collapsible,g=r.destroyInactivePanel,s=r.onItemClick,u=r.activeKey,C=r.openMotion,f=r.expandIcon,b=o.key||String(n),i=o.props,c=i.header,h=i.headerClass,v=i.destroyInactivePanel,p=i.collapsible,t=i.onItemClick,x=!1;z?x=u[0]===b:x=u.indexOf(b)>-1;var $=p??m,w=function(S){$!=="disabled"&&(s(S),t==null||t(S))},I={key:b,panelKey:b,header:c,headerClass:h,isActive:x,prefixCls:l,destroyInactivePanel:v??g,openMotion:C,accordion:z,children:o.props.children,onItemClick:w,expandIcon:f,collapsible:$};return typeof o.type=="string"?o:(Object.keys(I).forEach(function(A){typeof I[A]>"u"&&delete I[A]}),N.cloneElement(o,I))};function je(a,o,n){return Array.isArray(a)?ke(a,n):ae(o).map(function(r,l){return Ae(r,l,n)})}function Ee(a){var o=a;if(!Array.isArray(o)){var n=le(o);o=n==="number"||n==="string"?[o]:[]}return o.map(function(r){return String(r)})}var _e=N.forwardRef(function(a,o){var n=a.prefixCls,r=n===void 0?"rc-collapse":n,l=a.destroyInactivePanel,z=l===void 0?!1:l,m=a.style,g=a.accordion,s=a.className,u=a.children,C=a.collapsible,f=a.openMotion,b=a.expandIcon,i=a.activeKey,c=a.defaultActiveKey,h=a.onChange,v=a.items,p=H(r,s),t=ze([],{value:i,onChange:function(k){return h==null?void 0:h(k)},defaultValue:c,postState:Ee}),x=Z(t,2),$=x[0],w=x[1],I=function(k){return w(function(){if(g)return $[0]===k?[]:[k];var E=$.indexOf(k),K=E>-1;return K?$.filter(function(F){return F!==k}):[].concat(me($),[k])})};se(!u,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var A=je(v,u,{prefixCls:r,accordion:g,openMotion:f,expandIcon:b,collapsible:C,destroyInactivePanel:z,onItemClick:I,activeKey:$});return N.createElement("div",L({ref:o,className:p,style:m,role:g?"tablist":void 0},xe(a,{aria:!0,data:!0})),A)});const J=Object.assign(_e,{Panel:ie});J.Panel;const Me=M.forwardRef((a,o)=>{const{getPrefixCls:n}=M.useContext(ge),{prefixCls:r,className:l,showArrow:z=!0}=a,m=n("collapse",r),g=H({[`${m}-no-arrow`]:!z},l);return M.createElement(J.Panel,Object.assign({ref:o},a,{prefixCls:m,className:g}))}),Re=Me,Ke=a=>{const{componentCls:o,contentBg:n,padding:r,headerBg:l,headerPadding:z,collapseHeaderPaddingSM:m,collapseHeaderPaddingLG:g,collapsePanelBorderRadius:s,lineWidth:u,lineType:C,colorBorder:f,colorText:b,colorTextHeading:i,colorTextDisabled:c,fontSizeLG:h,lineHeight:v,lineHeightLG:p,marginSM:t,paddingSM:x,paddingLG:$,paddingXS:w,motionDurationSlow:I,fontSizeIcon:A,contentPadding:S,fontHeight:k,fontHeightLG:E}=a,K=`${R(u)} ${C} ${f}`;return{[o]:Object.assign(Object.assign({},ue(a)),{backgroundColor:l,border:K,borderRadius:s,"&-rtl":{direction:"rtl"},[`& > ${o}-item`]:{borderBottom:K,"&:first-child":{[`
            &,
            & > ${o}-header`]:{borderRadius:`${R(s)} ${R(s)} 0 0`}},"&:last-child":{[`
            &,
            & > ${o}-header`]:{borderRadius:`0 0 ${R(s)} ${R(s)}`}},[`> ${o}-header`]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:z,color:i,lineHeight:v,cursor:"pointer",transition:`all ${I}, visibility 0s`},$e(a)),{[`> ${o}-header-text`]:{flex:"auto"},[`${o}-expand-icon`]:{height:k,display:"flex",alignItems:"center",paddingInlineEnd:t},[`${o}-arrow`]:Object.assign(Object.assign({},fe()),{fontSize:A,transition:`transform ${I}`,svg:{transition:`transform ${I}`}}),[`${o}-header-text`]:{marginInlineEnd:"auto"}}),[`${o}-collapsible-header`]:{cursor:"default",[`${o}-header-text`]:{flex:"none",cursor:"pointer"}},[`${o}-collapsible-icon`]:{cursor:"unset",[`${o}-expand-icon`]:{cursor:"pointer"}}},[`${o}-content`]:{color:b,backgroundColor:n,borderTop:K,[`& > ${o}-content-box`]:{padding:S},"&-hidden":{display:"none"}},"&-small":{[`> ${o}-item`]:{[`> ${o}-header`]:{padding:m,paddingInlineStart:w,[`> ${o}-expand-icon`]:{marginInlineStart:a.calc(x).sub(w).equal()}},[`> ${o}-content > ${o}-content-box`]:{padding:x}}},"&-large":{[`> ${o}-item`]:{fontSize:h,lineHeight:p,[`> ${o}-header`]:{padding:g,paddingInlineStart:r,[`> ${o}-expand-icon`]:{height:E,marginInlineStart:a.calc($).sub(r).equal()}},[`> ${o}-content > ${o}-content-box`]:{padding:$}}},[`${o}-item:last-child`]:{borderBottom:0,[`> ${o}-content`]:{borderRadius:`0 0 ${R(s)} ${R(s)}`}},[`& ${o}-item-disabled > ${o}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:c,cursor:"not-allowed"}},[`&${o}-icon-position-end`]:{[`& > ${o}-item`]:{[`> ${o}-header`]:{[`${o}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:t}}}}})}},Oe=a=>{const{componentCls:o}=a,n=`> ${o}-item > ${o}-header ${o}-arrow`;return{[`${o}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},Be=a=>{const{componentCls:o,headerBg:n,paddingXXS:r,colorBorder:l}=a;return{[`${o}-borderless`]:{backgroundColor:n,border:0,[`> ${o}-item`]:{borderBottom:`1px solid ${l}`},[`
        > ${o}-item:last-child,
        > ${o}-item:last-child ${o}-header
      `]:{borderRadius:0},[`> ${o}-item:last-child`]:{borderBottom:0},[`> ${o}-item > ${o}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${o}-item > ${o}-content > ${o}-content-box`]:{paddingTop:r}}}},De=a=>{const{componentCls:o,paddingSM:n}=a;return{[`${o}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${o}-item`]:{borderBottom:0,[`> ${o}-content`]:{backgroundColor:"transparent",border:0,[`> ${o}-content-box`]:{paddingBlock:n}}}}}},Te=a=>({headerPadding:`${a.paddingSM}px ${a.padding}px`,headerBg:a.colorFillAlter,contentPadding:`${a.padding}px 16px`,contentBg:a.colorBgContainer}),He=he("Collapse",a=>{const o=pe(a,{collapseHeaderPaddingSM:`${R(a.paddingXS)} ${R(a.paddingSM)}`,collapseHeaderPaddingLG:`${R(a.padding)} ${R(a.paddingLG)}`,collapsePanelBorderRadius:a.borderRadiusLG});return[Ke(o),Be(o),De(o),Oe(o),re(o)]},Te),Le=M.forwardRef((a,o)=>{const{getPrefixCls:n,direction:r,expandIcon:l,className:z,style:m}=ve("collapse"),{prefixCls:g,className:s,rootClassName:u,style:C,bordered:f=!0,ghost:b,size:i,expandIconPosition:c="start",children:h,expandIcon:v}=a,p=be(j=>{var _;return(_=i??j)!==null&&_!==void 0?_:"middle"}),t=n("collapse",g),x=n(),[$,w,I]=He(t),A=M.useMemo(()=>c==="left"?"start":c==="right"?"end":c,[c]),S=v??l,k=M.useCallback(function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const _=typeof S=="function"?S(j):M.createElement(ce,{rotate:j.isActive?r==="rtl"?-90:90:void 0,"aria-label":j.isActive?"expanded":"collapsed"});return Q(_,()=>{var B;return{className:H((B=_==null?void 0:_.props)===null||B===void 0?void 0:B.className,`${t}-arrow`)}})},[S,t]),E=H(`${t}-icon-position-${A}`,{[`${t}-borderless`]:!f,[`${t}-rtl`]:r==="rtl",[`${t}-ghost`]:!!b,[`${t}-${p}`]:p!=="middle"},z,s,u,w,I),K=Object.assign(Object.assign({},ye(x)),{motionAppear:!1,leavedClassName:`${t}-content-hidden`}),F=M.useMemo(()=>h?ae(h).map((j,_)=>{var B,D;const O=j.props;if(O!=null&&O.disabled){const q=(B=j.key)!==null&&B!==void 0?B:String(_),V=Object.assign(Object.assign({},U(j.props,["disabled"])),{key:q,collapsible:(D=O.collapsible)!==null&&D!==void 0?D:"disabled"});return Q(j,V)}return j}):null,[h]);return $(M.createElement(J,Object.assign({ref:o,openMotion:K},U(a,["rootClassName"]),{expandIcon:k,prefixCls:t,className:E,style:Object.assign(Object.assign({},m),C)}),F))}),G=Object.assign(Le,{Panel:Re}),Fe=P.div`
  display: flex;
  flex-direction: column;
`,Ge=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,qe=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          border-radius: ${e("com/accordion/head/size-sm/border-radius")}!important;
          padding-top: ${e("com/accordion/head/size-sm/vertical-padding")};
          padding-right: ${e("com/accordion/head/size-sm/horizontal-padding")};
          padding-bottom: calc(
            ${e("com/accordion/head/size-sm/vertical-padding")} -
              ${e("com/accordion/divider/stroke-width")}
          );
          padding-left: ${e("com/accordion/head/size-sm/horizontal-padding")};
          gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
          margin-left: ${e("com/accordion/head/size-sm/margin")};
          margin-right: ${e("com/accordion/head/size-sm/margin")};
        `;case"md":return d`
          border-radius: ${e("com/accordion/head/size-md/border-radius")}!important;
          padding-top: ${e("com/accordion/head/size-md/vertical-padding")};
          padding-right: ${e("com/accordion/head/size-md/horizontal-padding")};
          padding-bottom: calc(
            ${e("com/accordion/head/size-md/vertical-padding")} -
              ${e("com/accordion/divider/stroke-width")}
          );
          padding-left: ${e("com/accordion/head/size-md/horizontal-padding")};
          gap: ${e("com/accordion/head/size-md/horizontal-gap")};
          margin-left: ${e("com/accordion/head/size-md/margin")};
          margin-right: ${e("com/accordion/head/size-md/margin")};
        `;case"lg":return d`
          border-radius: ${e("com/accordion/head/size-lg/corner-radius")}!important;
          padding-top: ${e("com/accordion/head/size-lg/vertical-padding")};
          padding-right: ${e("com/accordion/head/size-lg/horizontal-padding")};
          padding-bottom: calc(
            ${e("com/accordion/head/size-lg/vertical-padding")} -
              ${e("com/accordion/divider/stroke-width")}
          );
          padding-left: ${e("com/accordion/head/size-lg/horizontal-padding")};
          gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
          margin-left: ${e("com/accordion/head/size-lg/margin")};
          margin-right: ${e("com/accordion/head/size-lg/margin")};
        `}}}
`,X=P.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${e("com/accordion/head/icon/color-icon/default")};

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          width: ${e("com/accordion/head/size-sm/icon/size")};
          height: ${e("com/accordion/head/size-sm/icon-wrap/height")};

          svg {
            width: ${e("com/accordion/head/size-sm/icon/size")};
            height: ${e("com/accordion/head/size-sm/icon/size")};
          }
        `;case"md":return d`
          width: ${e("com/accordion/head/size-md/icon/size")};
          height: ${e("com/accordion/head/size-md/icon-wrap/height")};

          svg {
            width: ${e("com/accordion/head/size-md/icon/size")};
            height: ${e("com/accordion/head/size-md/icon/size")};
          }
        `;case"lg":return d`
          width: ${e("com/accordion/head/size-lg/icon/size")};
          height: ${e("com/accordion/head/size-lg/icon-wrap/height")};

          svg {
            width: ${e("com/accordion/head/size-lg/icon/size")};
            height: ${e("com/accordion/head/size-lg/icon/size")};
          }
        `}}}
`,Ve=P.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  ${a=>{switch(a.$collapseSize){case"sm":return d`
          gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
        `;case"md":return d`
          gap: ${e("com/accordion/head/size-md/horizontal-gap")};
        `;case"lg":return d`
          gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
        `}}};
`;P.div`
  display: flex;
  align-items: flex-start;

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
        `;case"md":return d`
          gap: ${e("com/accordion/head/size-md/horizontal-gap")};
        `;case"lg":return d`
          gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
        `}}}
`;const Xe=P.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,W=P.p`
  word-break: break-word;
  white-space: normal;
  color: ${e("com/accordion/head/label/color-text/default")};
  margin: 0;

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          ${e("Label/Sm")};
        `;case"md":return d`
          ${e("Label/Md")};
        `;case"lg":return d`
          ${e("Label/Lg")};
        `}}}
`,ne=P.span`
  word-break: break-word;
  white-space: normal;
  ${e("Paragraph/XS")}
  color: ${e("sem/color/text/neutral/sub")};
`,We=P.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  position: relative;

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          border-radius: ${e("com/accordion/head/size-sm/border-radius")}!important;
          padding-top: ${e("com/accordion/head/size-sm/vertical-padding")};
          padding-right: ${e("com/accordion/head/size-sm/horizontal-padding")};
          padding-bottom: calc(
            ${e("com/accordion/head/size-sm/vertical-padding")} -
              ${e("com/accordion/divider/stroke-width")}
          );
          padding-left: ${e("com/accordion/head/size-sm/horizontal-padding")};
          gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
          margin-left: ${e("com/accordion/head/size-sm/margin")};
          margin-right: ${e("com/accordion/head/size-sm/margin")};
        `;case"md":return d`
          border-radius: ${e("com/accordion/head/size-md/border-radius")}!important;
          padding-top: ${e("com/accordion/head/size-md/vertical-padding")};
          padding-right: ${e("com/accordion/head/size-md/horizontal-padding")};
          padding-bottom: calc(
            ${e("com/accordion/head/size-md/vertical-padding")} -
              ${e("com/accordion/divider/stroke-width")}
          );
          padding-left: ${e("com/accordion/head/size-md/horizontal-padding")};
          gap: ${e("com/accordion/head/size-md/horizontal-gap")};
          margin-left: ${e("com/accordion/head/size-md/margin")};
          margin-right: ${e("com/accordion/head/size-md/margin")};
        `;case"lg":return d`
          border-radius: ${e("com/accordion/head/size-lg/corner-radius")}!important;
          padding-top: ${e("com/accordion/head/size-lg/vertical-padding")};
          padding-right: ${e("com/accordion/head/size-lg/horizontal-padding")};
          padding-bottom: calc(
            ${e("com/accordion/head/size-lg/vertical-padding")} -
              ${e("com/accordion/divider/stroke-width")}
          );
          padding-left: ${e("com/accordion/head/size-lg/horizontal-padding")};
          gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
          margin-left: ${e("com/accordion/head/size-lg/margin")};
          margin-right: ${e("com/accordion/head/size-lg/margin")};
        `}}}
`;P.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;const Je=P.div`
  padding-top: ${e("com/accordion/body/size-sm/top-padding")};
  padding-left: ${e("com/accordion/body/size-sm/left-padding")};
  padding-right: ${e("com/accordion/body/size-sm/right-padding")};

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          padding-top: ${e("com/accordion/body/size-sm/top-padding")};
          padding-left: ${e("com/accordion/body/size-sm/left-padding")};
          padding-right: ${e("com/accordion/body/size-sm/right-padding")};
        `;case"md":return d`
          padding-top: ${e("com/accordion/body/size-md/top-padding")};
          padding-left: ${e("com/accordion/body/size-md/left-padding")};
          padding-right: ${e("com/accordion/body/size-md/right-padding")};
        `;case"lg":return d`
          padding-top: ${e("com/accordion/body/size-lg/top-padding")};
          padding-left: ${e("com/accordion/body/size-lg/left-padding")};
          padding-right: ${e("com/accordion/body/size-lg/right-padding")};
        `}}}

  &.open {
    display: block;
  }
`;P.div`
  position: absolute;
  bottom: 0;

  ${a=>{switch(a.$collapseSize){case"sm":return d`
          left: calc(${e("com/accordion/head/size-sm/margin")} * -1);
          right: calc(${e("com/accordion/head/size-sm/margin")} * -1);
        `;case"md":return d`
          left: calc(${e("com/accordion/head/size-md/margin")} * -1);
          right: calc(${e("com/accordion/head/size-md/margin")} * -1);
        `;case"lg":return d`
          left: calc(${e("com/accordion/head/size-lg/margin")} * -1);
          right: calc(${e("com/accordion/head/size-lg/margin")} * -1);
        `}}}
`;const Qe=P.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  &.open {
    transform: rotate(180deg);
  }
  ${a=>{switch(a.$collapseSize){case"sm":return d`
          height: ${e("com/accordion/head/size-sm/icon-wrap/height")};
          svg {
            width: ${e("com/accordion/head/size-sm/icon/size")};
            height: ${e("com/accordion/head/size-sm/icon/size")};
          }
        `;case"md":return d`
          height: ${e("com/accordion/head/size-md/icon/size")};
          svg {
            width: ${e("com/accordion/head/size-md/icon/size")};
            height: ${e("com/accordion/head/size-md/icon/size")};
          }
        `;case"lg":return d`
          height: ${e("com/accordion/head/size-lg/icon/size")};
          svg {
            width: ${e("com/accordion/head/size-lg/icon/size")};
            height: ${e("com/accordion/head/size-lg/icon/size")};
          }
        `}}}
`,Ue=P(G)`
  && .ant-collapse-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    position: relative;
    padding: 0px;

    ${a=>{switch(a.$collapseSize){case"sm":return d`
            border-radius: ${e("com/accordion/head/size-sm/border-radius")}!important;
            padding-right: ${e("com/accordion/head/size-sm/horizontal-padding")};
            padding-left: ${e("com/accordion/head/size-sm/horizontal-padding")};
            gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
            margin-left: ${e("com/accordion/head/size-sm/margin")};
            margin-right: ${e("com/accordion/head/size-sm/margin")};
          `;case"md":return d`
            border-radius: ${e("com/accordion/head/size-md/border-radius")}!important;
            padding-right: ${e("com/accordion/head/size-md/horizontal-padding")};
            padding-left: ${e("com/accordion/head/size-md/horizontal-padding")};
            gap: ${e("com/accordion/head/size-md/horizontal-gap")};
            margin-left: ${e("com/accordion/head/size-md/margin")};
            margin-right: ${e("com/accordion/head/size-md/margin")};
          `;case"lg":return d`
            border-radius: ${e("com/accordion/head/size-lg/corner-radius")}!important;
            padding-right: ${e("com/accordion/head/size-lg/horizontal-padding")};
            padding-left: ${e("com/accordion/head/size-lg/horizontal-padding")};
            gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
            margin-left: ${e("com/accordion/head/size-lg/margin")};
            margin-right: ${e("com/accordion/head/size-lg/margin")};
          `}}}

    &:hover {
      background-color: ${e("com/accordion/head/background-color/hover")};

      ${W} {
        color: ${e("com/accordion/head/label/color-text/hover")};
      }

      ${X} {
        color: ${e("com/accordion/head/icon/color-icon/hover")};
      }
    }

    &:focus-visible {
      outline: 2px solid ${e("com/focus-mark/color-gap-spacing")};
      box-shadow: 0 0 0 4px ${e("com/focus-mark/color-stroke")};
    }
  }

  && .ant-collapse-expand-icon {
    padding-inline-start: 0px !important;
    padding-inline-end: 0px !important;
  }

  && .ant-collapse-header-text {
    margin-inline-end: unset !important;
    flex: 1 !important;
  }

  && .ant-collapse-item.ant-collapse-item-disabled {
    cursor: not-allowed;
    .ant-collapse-header {
      cursor: not-allowed;
      background-color: transparent !important;

      &:hover {
        background-color: transparent !important;
      }
    }
    ${W} {
      color: ${e("com/accordion/head/label/color-text/disable")};
    }

    ${ne} {
      color: ${e("sem/color/text/neutral/disable")};
    }

    ${X} {
      color: ${e("com/accordion/head/icon/color-icon/disable")};
    }
  }

  && .ant-collapse-content-box {
    padding: 0px !important;
  }
`,Ye=({className:a,collapseSize:o="sm",expandIconPosition:n="start",collapsible:r="header",accordion:l=!1,items:z,...m})=>{const g=M.useMemo(()=>o==="sm"||o==="md"?"sm":"md",[o]),[s,u]=M.useState(l?m.defaultActiveKey??"":m.defaultActiveKey??[]),C=i=>(Array.isArray(s)?s:[s]).includes(i),f=i=>{r!=="disabled"&&u(l?c=>c===i?"":i:c=>{const h=Array.isArray(c)?c:[c];return h.includes(i)?h.filter(p=>p!==i):[...h,i]})},b=(i,c)=>{const{title:h,description:v,badge:p,leftIcon:t,customHeader:x}=i,$=I=>{r!=="disabled"&&(I.stopPropagation(),f(i.key))},w=y.jsx(Qe,{$collapseSize:o,className:c?"open":"",onClick:r==="icon"?$:void 0,style:{cursor:r==="disabled"?"not-allowed":"pointer"},children:y.jsx(Ie,{})});return y.jsx("div",{onClick:r==="header"?$:void 0,style:{cursor:r==="disabled"?"not-allowed":"pointer"},children:x?y.jsxs(qe,{$collapseSize:o,children:[n==="start"&&w,y.jsx(Ge,{children:x}),n==="end"&&w]}):y.jsxs(We,{$collapseSize:o,children:[y.jsxs(Ve,{$collapseSize:o,children:[n==="start"&&w,y.jsx(X,{$collapseSize:o,children:t??y.jsx(we,{})}),y.jsxs(Xe,{children:[y.jsx(W,{$collapseSize:o,children:h}),v&&y.jsx(ne,{children:v})]})]}),p&&y.jsx(Ce,{size:g,label:p,color:"neutral-light",disabled:r==="disabled"}),n==="end"&&w]})})};return y.jsx(Fe,{className:a,children:y.jsx(Ue,{...m,$collapseSize:o,ghost:!0,bordered:!1,activeKey:s,expandIcon:()=>null,expandIconPosition:n,collapsible:r,onChange:i=>{if(r!=="disabled")if(l){const c=typeof i=="string"?i:i[0]??"";u(c===s?"":c)}else u(Array.isArray(i)?i:[i])},children:z.map(i=>{const c=C(i.key);return y.jsxs(M.Fragment,{children:[y.jsx(G.Panel,{header:b(i,c),showArrow:!1,children:y.jsx(Je,{$collapseSize:o,children:i.children})},i.key),y.jsx(Se,{})]},i.key)})})})},ha=Ye;try{G.displayName="Collapse",G.__docgenInfo={description:"",displayName:"Collapse",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},collapseSize:{defaultValue:{value:"sm"},description:"",name:"collapseSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:null,description:"Collapse items content",name:"items",required:!0,type:{name:"CollapseItem[]"}}}}}catch{}export{ha as F};
