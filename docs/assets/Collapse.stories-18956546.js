import{j as i}from"./jsx-runtime-3dc6859f.js";import{d as A,l as s,g as e}from"./getTheme-1aacf7d7.js";import{R as w,r as E}from"./index-d4014758.js";import{R as Ze}from"./RightOutlined-12b2a696.js";import{c as B}from"./index-01b5a1be.js";import{a as Le,g as O,h as Ge,e as V,_ as en,C as nn,w as an,j as on,k as cn,l as Ve,m as rn,n as tn,o as D,r as dn,p as sn,q as ln}from"./AntdIcon-53f7c35e.js";import{u as mn}from"./useMergedState-81b3e148.js";import{t as qe,u as hn,c as te,o as de}from"./useSize-aec9e548.js";import{K as se}from"./KeyCode-6413d982.js";import{p as pn}from"./pickAttrs-f0847687.js";import{i as gn}from"./motion-8a2854a7.js";import{g as un}from"./collapse-97de76d4.js";import{F as vn}from"./index-1013563a.js";import{C as p,u as fn}from"./LineArrowsUp-143aac49.js";import{F as bn}from"./index-68a7459e.js";import"./index-78ef5524.js";import"./index-c8f11e24.js";var Xe=w.forwardRef(function(n,a){var c=n.prefixCls,r=n.forceRender,d=n.className,x=n.style,h=n.children,g=n.isActive,m=n.role,v=n.classNames,S=n.styles,u=w.useState(g||r),f=Le(u,2),o=f[0],t=f[1];return w.useEffect(function(){(r||g)&&t(!0)},[r,g]),o?w.createElement("div",{ref:a,className:B("".concat(c,"-content"),O(O({},"".concat(c,"-content-active"),g),"".concat(c,"-content-inactive"),!g),d),style:x,role:m},w.createElement("div",{className:B("".concat(c,"-content-box"),v==null?void 0:v.body),style:S==null?void 0:S.body},h)):null});Xe.displayName="PanelContent";var $n=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],We=w.forwardRef(function(n,a){var c=n.showArrow,r=c===void 0?!0:c,d=n.headerClass,x=n.isActive,h=n.onItemClick,g=n.forceRender,m=n.className,v=n.classNames,S=v===void 0?{}:v,u=n.styles,f=u===void 0?{}:u,o=n.prefixCls,t=n.collapsible,b=n.accordion,l=n.panelKey,$=n.extra,k=n.header,I=n.expandIcon,y=n.openMotion,j=n.destroyInactivePanel,C=n.children,T=Ge(n,$n),P=t==="disabled",K=$!=null&&typeof $!="boolean",_=O(O(O({onClick:function(){h==null||h(l)},onKeyDown:function(F){(F.key==="Enter"||F.keyCode===se.ENTER||F.which===se.ENTER)&&(h==null||h(l))},role:b?"tab":"button"},"aria-expanded",x),"aria-disabled",P),"tabIndex",P?-1:0),z=typeof I=="function"?I(n):w.createElement("i",{className:"arrow"}),M=z&&w.createElement("div",V({className:"".concat(o,"-expand-icon")},["header","icon"].includes(t)?_:{}),z),R=B("".concat(o,"-item"),O(O({},"".concat(o,"-item-active"),x),"".concat(o,"-item-disabled"),P),m),ae=B(d,"".concat(o,"-header"),O({},"".concat(o,"-collapsible-").concat(t),!!t),S.header),L=en({className:ae,style:f.header},["header","icon"].includes(t)?{}:_);return w.createElement("div",V({},T,{ref:a,className:R}),w.createElement("div",L,r&&M,w.createElement("span",V({className:"".concat(o,"-header-text")},t==="header"?_:{}),k),K&&w.createElement("div",{className:"".concat(o,"-extra")},$)),w.createElement(nn,V({visible:x,leavedClassName:"".concat(o,"-content-hidden")},y,{forceRender:g,removeOnLeave:j}),function(G,F){var Ue=G.className,Ye=G.style;return w.createElement(Xe,{ref:F,prefixCls:o,className:Ue,classNames:S,style:Ye,styles:f,isActive:x,forceRender:g,role:b?"tabpanel":void 0},C)}))}),yn=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],xn=function(a,c){var r=c.prefixCls,d=c.accordion,x=c.collapsible,h=c.destroyInactivePanel,g=c.onItemClick,m=c.activeKey,v=c.openMotion,S=c.expandIcon;return a.map(function(u,f){var o=u.children,t=u.label,b=u.key,l=u.collapsible,$=u.onItemClick,k=u.destroyInactivePanel,I=Ge(u,yn),y=String(b??f),j=l??x,C=k??h,T=function(_){j!=="disabled"&&(g(_),$==null||$(_))},P=!1;return d?P=m[0]===y:P=m.indexOf(y)>-1,w.createElement(We,V({},I,{prefixCls:r,key:y,panelKey:y,isActive:P,accordion:d,openMotion:v,expandIcon:S,header:t,collapsible:j,onItemClick:T,destroyInactivePanel:C}),o)})},Cn=function(a,c,r){if(!a)return null;var d=r.prefixCls,x=r.accordion,h=r.collapsible,g=r.destroyInactivePanel,m=r.onItemClick,v=r.activeKey,S=r.openMotion,u=r.expandIcon,f=a.key||String(c),o=a.props,t=o.header,b=o.headerClass,l=o.destroyInactivePanel,$=o.collapsible,k=o.onItemClick,I=!1;x?I=v[0]===f:I=v.indexOf(f)>-1;var y=$??h,j=function(P){y!=="disabled"&&(m(P),k==null||k(P))},C={key:f,panelKey:f,header:t,headerClass:b,isActive:I,prefixCls:d,destroyInactivePanel:l??g,openMotion:S,accordion:x,children:a.props.children,onItemClick:j,expandIcon:u,collapsible:y};return typeof a.type=="string"?a:(Object.keys(C).forEach(function(T){typeof C[T]>"u"&&delete C[T]}),w.cloneElement(a,C))};function zn(n,a,c){return Array.isArray(n)?xn(n,c):qe(a).map(function(r,d){return Cn(r,d,c)})}function In(n){var a=n;if(!Array.isArray(a)){var c=on(a);a=c==="number"||c==="string"?[a]:[]}return a.map(function(r){return String(r)})}var Sn=w.forwardRef(function(n,a){var c=n.prefixCls,r=c===void 0?"rc-collapse":c,d=n.destroyInactivePanel,x=d===void 0?!1:d,h=n.style,g=n.accordion,m=n.className,v=n.children,S=n.collapsible,u=n.openMotion,f=n.expandIcon,o=n.activeKey,t=n.defaultActiveKey,b=n.onChange,l=n.items,$=B(r,m),k=mn([],{value:o,onChange:function(K){return b==null?void 0:b(K)},defaultValue:t,postState:In}),I=Le(k,2),y=I[0],j=I[1],C=function(K){return j(function(){if(g)return y[0]===K?[]:[K];var _=y.indexOf(K),z=_>-1;return z?y.filter(function(M){return M!==K}):[].concat(cn(y),[K])})};an(!v,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var T=zn(l,v,{prefixCls:r,accordion:g,openMotion:u,expandIcon:f,collapsible:S,destroyInactivePanel:x,onItemClick:C,activeKey:y});return w.createElement("div",V({ref:a,className:$,style:h,role:g?"tablist":void 0},pn(n,{aria:!0,data:!0})),T)});const re=Object.assign(Sn,{Panel:We});re.Panel;const kn=E.forwardRef((n,a)=>{const{getPrefixCls:c}=E.useContext(Ve),{prefixCls:r,className:d,showArrow:x=!0}=n,h=c("collapse",r),g=B({[`${h}-no-arrow`]:!x},d);return E.createElement(re.Panel,Object.assign({ref:a},n,{prefixCls:h,className:g}))}),jn=kn,wn=n=>{const{componentCls:a,contentBg:c,padding:r,headerBg:d,headerPadding:x,collapseHeaderPaddingSM:h,collapseHeaderPaddingLG:g,collapsePanelBorderRadius:m,lineWidth:v,lineType:S,colorBorder:u,colorText:f,colorTextHeading:o,colorTextDisabled:t,fontSizeLG:b,lineHeight:l,lineHeightLG:$,marginSM:k,paddingSM:I,paddingLG:y,paddingXS:j,motionDurationSlow:C,fontSizeIcon:T,contentPadding:P,fontHeight:K,fontHeightLG:_}=n,z=`${D(v)} ${S} ${u}`;return{[a]:Object.assign(Object.assign({},dn(n)),{backgroundColor:d,border:z,borderRadius:m,"&-rtl":{direction:"rtl"},[`& > ${a}-item`]:{borderBottom:z,"&:first-child":{[`
            &,
            & > ${a}-header`]:{borderRadius:`${D(m)} ${D(m)} 0 0`}},"&:last-child":{[`
            &,
            & > ${a}-header`]:{borderRadius:`0 0 ${D(m)} ${D(m)}`}},[`> ${a}-header`]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:x,color:o,lineHeight:l,cursor:"pointer",transition:`all ${C}, visibility 0s`},sn(n)),{[`> ${a}-header-text`]:{flex:"auto"},[`${a}-expand-icon`]:{height:K,display:"flex",alignItems:"center",paddingInlineEnd:k},[`${a}-arrow`]:Object.assign(Object.assign({},ln()),{fontSize:T,transition:`transform ${C}`,svg:{transition:`transform ${C}`}}),[`${a}-header-text`]:{marginInlineEnd:"auto"}}),[`${a}-collapsible-header`]:{cursor:"default",[`${a}-header-text`]:{flex:"none",cursor:"pointer"}},[`${a}-collapsible-icon`]:{cursor:"unset",[`${a}-expand-icon`]:{cursor:"pointer"}}},[`${a}-content`]:{color:f,backgroundColor:c,borderTop:z,[`& > ${a}-content-box`]:{padding:P},"&-hidden":{display:"none"}},"&-small":{[`> ${a}-item`]:{[`> ${a}-header`]:{padding:h,paddingInlineStart:j,[`> ${a}-expand-icon`]:{marginInlineStart:n.calc(I).sub(j).equal()}},[`> ${a}-content > ${a}-content-box`]:{padding:I}}},"&-large":{[`> ${a}-item`]:{fontSize:b,lineHeight:$,[`> ${a}-header`]:{padding:g,paddingInlineStart:r,[`> ${a}-expand-icon`]:{height:_,marginInlineStart:n.calc(y).sub(r).equal()}},[`> ${a}-content > ${a}-content-box`]:{padding:y}}},[`${a}-item:last-child`]:{borderBottom:0,[`> ${a}-content`]:{borderRadius:`0 0 ${D(m)} ${D(m)}`}},[`& ${a}-item-disabled > ${a}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:t,cursor:"not-allowed"}},[`&${a}-icon-position-end`]:{[`& > ${a}-item`]:{[`> ${a}-header`]:{[`${a}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:k}}}}})}},Pn=n=>{const{componentCls:a}=n,c=`> ${a}-item > ${a}-header ${a}-arrow`;return{[`${a}-rtl`]:{[c]:{transform:"rotate(180deg)"}}}},Nn=n=>{const{componentCls:a,headerBg:c,paddingXXS:r,colorBorder:d}=n;return{[`${a}-borderless`]:{backgroundColor:c,border:0,[`> ${a}-item`]:{borderBottom:`1px solid ${d}`},[`
        > ${a}-item:last-child,
        > ${a}-item:last-child ${a}-header
      `]:{borderRadius:0},[`> ${a}-item:last-child`]:{borderBottom:0},[`> ${a}-item > ${a}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${a}-item > ${a}-content > ${a}-content-box`]:{paddingTop:r}}}},An=n=>{const{componentCls:a,paddingSM:c}=n;return{[`${a}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${a}-item`]:{borderBottom:0,[`> ${a}-content`]:{backgroundColor:"transparent",border:0,[`> ${a}-content-box`]:{paddingBlock:c}}}}}},Kn=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),Mn=rn("Collapse",n=>{const a=tn(n,{collapseHeaderPaddingSM:`${D(n.paddingXS)} ${D(n.paddingSM)}`,collapseHeaderPaddingLG:`${D(n.padding)} ${D(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[wn(a),Nn(a),An(a),Pn(a),un(a)]},Kn),Tn=E.forwardRef((n,a)=>{const{getPrefixCls:c,direction:r,collapse:d}=E.useContext(Ve),{prefixCls:x,className:h,rootClassName:g,style:m,bordered:v=!0,ghost:S,size:u,expandIconPosition:f="start",children:o,expandIcon:t}=n,b=hn(z=>{var M;return(M=u??z)!==null&&M!==void 0?M:"middle"}),l=c("collapse",x),$=c(),[k,I,y]=Mn(l),j=E.useMemo(()=>f==="left"?"start":f==="right"?"end":f,[f]),C=t??(d==null?void 0:d.expandIcon),T=E.useCallback(function(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const M=typeof C=="function"?C(z):E.createElement(Ze,{rotate:z.isActive?r==="rtl"?-90:90:void 0,"aria-label":z.isActive?"expanded":"collapsed"});return te(M,()=>{var R;return{className:B((R=M==null?void 0:M.props)===null||R===void 0?void 0:R.className,`${l}-arrow`)}})},[C,l]),P=B(`${l}-icon-position-${j}`,{[`${l}-borderless`]:!v,[`${l}-rtl`]:r==="rtl",[`${l}-ghost`]:!!S,[`${l}-${b}`]:b!=="middle"},d==null?void 0:d.className,h,g,I,y),K=Object.assign(Object.assign({},gn($)),{motionAppear:!1,leavedClassName:`${l}-content-hidden`}),_=E.useMemo(()=>o?qe(o).map((z,M)=>{var R,ae;const L=z.props;if(L!=null&&L.disabled){const G=(R=z.key)!==null&&R!==void 0?R:String(M),F=Object.assign(Object.assign({},de(z.props,["disabled"])),{key:G,collapsible:(ae=L.collapsible)!==null&&ae!==void 0?ae:"disabled"});return te(z,F)}return z}):null,[o]);return k(E.createElement(re,Object.assign({ref:a,openMotion:K},de(n,["rootClassName"]),{expandIcon:T,prefixCls:l,className:P,style:Object.assign(Object.assign({},d==null?void 0:d.style),m)}),_))}),ie=Object.assign(Tn,{Panel:jn}),En=A.div`
  display: flex;
  flex-direction: column;
`,_n=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Dn=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${n=>{switch(n.$collapseSize){case"sm":return s`
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
        `;case"md":return s`
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
        `;case"lg":return s`
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
`,oe=A.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${e("com/accordion/head/icon/color-icon/default")};

  ${n=>{switch(n.$collapseSize){case"sm":return s`
          width: ${e("com/accordion/head/size-sm/icon/size")};
          height: ${e("com/accordion/head/size-sm/icon-wrap/height")};

          svg {
            width: ${e("com/accordion/head/size-sm/icon/size")};
            height: ${e("com/accordion/head/size-sm/icon/size")};
          }
        `;case"md":return s`
          width: ${e("com/accordion/head/size-md/icon/size")};
          height: ${e("com/accordion/head/size-md/icon-wrap/height")};

          svg {
            width: ${e("com/accordion/head/size-md/icon/size")};
            height: ${e("com/accordion/head/size-md/icon/size")};
          }
        `;case"lg":return s`
          width: ${e("com/accordion/head/size-lg/icon/size")};
          height: ${e("com/accordion/head/size-lg/icon-wrap/height")};

          svg {
            width: ${e("com/accordion/head/size-lg/icon/size")};
            height: ${e("com/accordion/head/size-lg/icon/size")};
          }
        `}}}
`,Hn=A.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  ${n=>{switch(n.$collapseSize){case"sm":return s`
          gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
        `;case"md":return s`
          gap: ${e("com/accordion/head/size-md/horizontal-gap")};
        `;case"lg":return s`
          gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
        `}}};
`;A.div`
  display: flex;
  align-items: flex-start;

  ${n=>{switch(n.$collapseSize){case"sm":return s`
          gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
        `;case"md":return s`
          gap: ${e("com/accordion/head/size-md/horizontal-gap")};
        `;case"lg":return s`
          gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
        `}}}
`;const Rn=A.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,ce=A.p`
  word-break: break-word;
  white-space: normal;
  color: ${e("com/accordion/head/label/color-text/default")};
  margin: 0;

  ${n=>{switch(n.$collapseSize){case"sm":return s`
          ${e("Label/Sm")};
        `;case"md":return s`
          ${e("Label/Md")};
        `;case"lg":return s`
          ${e("Label/Lg")};
        `}}}
`,Je=A.span`
  word-break: break-word;
  white-space: normal;
  ${e("Paragraph/XS")}
  color: ${e("sem/color/text/neutral/sub")};
`,On=A.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  position: relative;

  ${n=>{switch(n.$collapseSize){case"sm":return s`
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
        `;case"md":return s`
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
        `;case"lg":return s`
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
`;A.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;const Bn=A.div`
  padding-top: ${e("com/accordion/body/size-sm/top-padding")};
  padding-left: ${e("com/accordion/body/size-sm/left-padding")};
  padding-right: ${e("com/accordion/body/size-sm/right-padding")};

  ${n=>{switch(n.$collapseSize){case"sm":return s`
          padding-top: ${e("com/accordion/body/size-sm/top-padding")};
          padding-left: ${e("com/accordion/body/size-sm/left-padding")};
          padding-right: ${e("com/accordion/body/size-sm/right-padding")};
        `;case"md":return s`
          padding-top: ${e("com/accordion/body/size-md/top-padding")};
          padding-left: ${e("com/accordion/body/size-md/left-padding")};
          padding-right: ${e("com/accordion/body/size-md/right-padding")};
        `;case"lg":return s`
          padding-top: ${e("com/accordion/body/size-lg/top-padding")};
          padding-left: ${e("com/accordion/body/size-lg/left-padding")};
          padding-right: ${e("com/accordion/body/size-lg/right-padding")};
        `}}}

  &.open {
    display: block;
  }
`;A.div`
  position: absolute;
  bottom: 0;

  ${n=>{switch(n.$collapseSize){case"sm":return s`
          left: calc(${e("com/accordion/head/size-sm/margin")} * -1);
          right: calc(${e("com/accordion/head/size-sm/margin")} * -1);
        `;case"md":return s`
          left: calc(${e("com/accordion/head/size-md/margin")} * -1);
          right: calc(${e("com/accordion/head/size-md/margin")} * -1);
        `;case"lg":return s`
          left: calc(${e("com/accordion/head/size-lg/margin")} * -1);
          right: calc(${e("com/accordion/head/size-lg/margin")} * -1);
        `}}}
`;const Fn=A.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  &.open {
    transform: rotate(180deg);
  }
  ${n=>{switch(n.$collapseSize){case"sm":return s`
          height: ${e("com/accordion/head/size-sm/icon-wrap/height")};
          svg {
            width: ${e("com/accordion/head/size-sm/icon/size")};
            height: ${e("com/accordion/head/size-sm/icon/size")};
          }
        `;case"md":return s`
          height: ${e("com/accordion/head/size-md/icon/size")};
          svg {
            width: ${e("com/accordion/head/size-md/icon/size")};
            height: ${e("com/accordion/head/size-md/icon/size")};
          }
        `;case"lg":return s`
          height: ${e("com/accordion/head/size-lg/icon/size")};
          svg {
            width: ${e("com/accordion/head/size-lg/icon/size")};
            height: ${e("com/accordion/head/size-lg/icon/size")};
          }
        `}}}
`,Ln=A(ie)`
  && .ant-collapse-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    position: relative;
    padding: 0px;

    ${n=>{switch(n.$collapseSize){case"sm":return s`
            border-radius: ${e("com/accordion/head/size-sm/border-radius")}!important;
            padding-right: ${e("com/accordion/head/size-sm/horizontal-padding")};
            padding-left: ${e("com/accordion/head/size-sm/horizontal-padding")};
            gap: ${e("com/accordion/head/size-sm/horizontal-gap")};
            margin-left: ${e("com/accordion/head/size-sm/margin")};
            margin-right: ${e("com/accordion/head/size-sm/margin")};
          `;case"md":return s`
            border-radius: ${e("com/accordion/head/size-md/border-radius")}!important;
            padding-right: ${e("com/accordion/head/size-md/horizontal-padding")};
            padding-left: ${e("com/accordion/head/size-md/horizontal-padding")};
            gap: ${e("com/accordion/head/size-md/horizontal-gap")};
            margin-left: ${e("com/accordion/head/size-md/margin")};
            margin-right: ${e("com/accordion/head/size-md/margin")};
          `;case"lg":return s`
            border-radius: ${e("com/accordion/head/size-lg/corner-radius")}!important;
            padding-right: ${e("com/accordion/head/size-lg/horizontal-padding")};
            padding-left: ${e("com/accordion/head/size-lg/horizontal-padding")};
            gap: ${e("com/accordion/head/size-lg/horizontal-gap")};
            margin-left: ${e("com/accordion/head/size-lg/margin")};
            margin-right: ${e("com/accordion/head/size-lg/margin")};
          `}}}

    &:hover {
      background-color: ${e("com/accordion/head/background-color/hover")};

      ${ce} {
        color: ${e("com/accordion/head/label/color-text/hover")};
      }

      ${oe} {
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
    ${ce} {
      color: ${e("com/accordion/head/label/color-text/disable")};
    }

    ${Je} {
      color: ${e("sem/color/text/neutral/disable")};
    }

    ${oe} {
      color: ${e("com/accordion/head/icon/color-icon/disable")};
    }
  }

  && .ant-collapse-content-box {
    padding: 0px !important;
  }
`,Gn=({className:n,collapseSize:a="sm",expandIconPosition:c="start",collapsible:r="header",accordion:d=!1,items:x,...h})=>{const g=E.useMemo(()=>a==="sm"||a==="md"?"sm":"md",[a]),[m,v]=E.useState(d?h.defaultActiveKey??"":h.defaultActiveKey??[]),S=o=>(Array.isArray(m)?m:[m]).includes(o),u=o=>{r!=="disabled"&&v(d?t=>t===o?"":o:t=>{const b=Array.isArray(t)?t:[t];return b.includes(o)?b.filter($=>$!==o):[...b,o]})},f=(o,t)=>{const{title:b,description:l,badge:$,leftIcon:k,customHeader:I}=o,y=C=>{r!=="disabled"&&(C.stopPropagation(),u(o.key))},j=i.jsx(Fn,{$collapseSize:a,className:t?"open":"",onClick:r==="icon"?y:void 0,style:{cursor:r==="disabled"?"not-allowed":"pointer"},children:i.jsx(fn,{})});return i.jsx("div",{onClick:r==="header"?y:void 0,style:{cursor:r==="disabled"?"not-allowed":"pointer"},children:I?i.jsxs(Dn,{$collapseSize:a,children:[c==="start"&&j,i.jsx(_n,{children:I}),c==="end"&&j]}):i.jsxs(On,{$collapseSize:a,children:[i.jsxs(Hn,{$collapseSize:a,children:[c==="start"&&j,i.jsx(oe,{$collapseSize:a,children:k??i.jsx(p,{})}),i.jsxs(Rn,{children:[i.jsx(ce,{$collapseSize:a,children:b}),l&&i.jsx(Je,{children:l})]})]}),$&&i.jsx(vn,{size:g,label:$,color:"neutral-light",disabled:r==="disabled"}),c==="end"&&j]})})};return i.jsx(En,{className:n,children:i.jsx(Ln,{...h,$collapseSize:a,ghost:!0,bordered:!1,activeKey:m,expandIcon:()=>null,expandIconPosition:c,collapsible:r,onChange:o=>{if(r!=="disabled")if(d){const t=typeof o=="string"?o:o[0]??"";v(t===m?"":t)}else v(Array.isArray(o)?o:[o])},children:x.map(o=>{const t=S(o.key);return i.jsxs(E.Fragment,{children:[i.jsx(ie.Panel,{header:f(o,t),showArrow:!1,children:i.jsx(Bn,{$collapseSize:a,children:o.children})},o.key),i.jsx(bn,{})]},o.key)})})})},Qe=Gn;try{ie.displayName="Collapse",ie.__docgenInfo={description:"",displayName:"Collapse",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},collapseSize:{defaultValue:{value:"sm"},description:"",name:"collapseSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:null,description:"Collapse items content",name:"items",required:!0,type:{name:"CollapseItem[]"}}}}}catch{}const da={title:"Components/Collapse",component:Qe,tags:["autodocs"],argTypes:{collapseSize:{control:"radio",options:["sm","md","lg"],description:"Kích thước Collapse"},expandIconPosition:{control:"radio",options:["start","end"],description:"Vị trí icon expand"},collapsible:{control:"radio",options:["header","icon","disabled"],description:"Kiểu tương tác với Collapse"},items:{control:"object",description:"Danh sách items"},accordion:{control:"boolean",description:"Chế độ accordion (chỉ mở một panel tại một thời điểm)"},defaultActiveKey:{control:"object",description:"Các panel được mở mặc định"}},parameters:{docs:{description:{component:`
FISCollapse là một component dựa trên Ant Design Collapse, được tùy chỉnh để phù hợp với thiết kế hệ thống.

## Tính năng chính
- Hỗ trợ nhiều kích thước (sm, md, lg)
- Tùy chỉnh vị trí icon mở rộng (start, end)
- Nhiều kiểu tương tác (header, icon, disabled)
- Hỗ trợ chế độ accordion
- Tùy chỉnh header với customHeader
- Hỗ trợ badge và icon bên trái

## Cách sử dụng
\`\`\`jsx
import FISCollapse from 'components/Collapse';

const items = [
  {
    key: '1',
    title: 'Panel 1',
    description: 'Mô tả panel 1',
    badge: 'New',
    leftIcon: <Icon />,
    children: <p>Nội dung panel 1</p>,
  },
  {
    key: '2',
    title: 'Panel 2',
    description: 'Mô tả panel 2',
    badge: 'Hot',
    leftIcon: <Icon />,
    children: <p>Nội dung panel 2</p>,
  },
];

<FISCollapse
  collapseSize="sm"
  expandIconPosition="end"
  collapsible="header"
  accordion={true}
  items={items}
/>
\`\`\`
        `}}}},H=n=>i.jsx("div",{style:{width:"400px"},children:i.jsx(Qe,{...n})}),N=H.bind({});N.args={collapseSize:"sm",expandIconPosition:"end",collapsible:"header",accordion:!0,items:[{key:"1",title:"Title accordion",description:"Sub-title",badge:"New",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel 1"}),customHeader:i.jsx("p",{children:"Custom panel 1"})},{key:"2",title:"Title accordion",description:"Sub-title",badge:"Hot",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel 2"})}]};N.parameters={docs:{description:{story:`
Story mặc định của FISCollapse với chế độ accordion. Trong chế độ này, chỉ một panel có thể được mở tại một thời điểm.
Khi người dùng mở một panel, các panel khác sẽ tự động đóng lại.

### Các thuộc tính được sử dụng:
- \`collapseSize="sm"\`: Kích thước nhỏ
- \`expandIconPosition="end"\`: Icon mở rộng ở cuối
- \`collapsible="header"\`: Có thể click vào toàn bộ header để mở/đóng
- \`accordion={true}\`: Chế độ accordion (chỉ mở một panel tại một thời điểm)
      `}}};const q=H.bind({});q.args={...N.args,accordion:!1,items:[{key:"1",title:"Panel 1",description:"Có thể mở nhiều panel cùng lúc",badge:"Info",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel 1"})},{key:"2",title:"Panel 2",description:"Panel thứ hai",badge:"Info",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel 2"})},{key:"3",title:"Panel 3",description:"Panel thứ ba",badge:"Info",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel 3"})}]};q.parameters={docs:{description:{story:`
Story minh họa chế độ không sử dụng accordion. Trong chế độ này, người dùng có thể mở nhiều panel cùng một lúc.
Mỗi panel hoạt động độc lập với các panel khác.

### Các thuộc tính được sử dụng:
- \`accordion={false}\`: Tắt chế độ accordion, cho phép mở nhiều panel cùng lúc
- \`items\`: Danh sách các panel, mỗi panel có thể được mở/đóng độc lập
      `}}};const X=H.bind({});X.args={...N.args,expandIconPosition:"start",items:[{key:"1",title:"Icon ở đầu",description:"Icon mở rộng nằm ở đầu panel",badge:"Demo",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel với icon ở đầu"})},{key:"2",title:"Icon ở đầu",description:"Icon mở rộng nằm ở đầu panel",badge:"Demo",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel với icon ở đầu"})}]};X.parameters={docs:{description:{story:`
Story minh họa cách đặt icon mở rộng ở đầu panel thay vì cuối panel.
Điều này có thể hữu ích khi bạn muốn tạo một giao diện nhất quán với các component khác có icon ở đầu.

### Các thuộc tính được sử dụng:
- \`expandIconPosition="start"\`: Đặt icon mở rộng ở đầu panel
      `}}};const W=H.bind({});W.args={...N.args,collapseSize:"lg",items:[{key:"1",title:"Kích thước lớn",description:"Panel với kích thước lớn",badge:"Large",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel với kích thước lớn"})},{key:"2",title:"Kích thước lớn",description:"Panel với kích thước lớn",badge:"Large",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Nội dung panel với kích thước lớn"})}]};W.parameters={docs:{description:{story:`
Story minh họa cách sử dụng kích thước lớn cho Collapse.
Kích thước lớn thường được sử dụng khi bạn muốn nhấn mạnh nội dung hoặc khi làm việc với màn hình lớn.

### Các thuộc tính được sử dụng:
- \`collapseSize="lg"\`: Đặt kích thước lớn cho Collapse
      `}}};const J=H.bind({});J.args={...N.args,defaultActiveKey:["1"],items:[{key:"1",title:"Panel mở sẵn",description:"Panel được mở mặc định",badge:"Default",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel này sẽ được mở sẵn khi component được render"})},{key:"2",title:"Panel đóng sẵn",description:"Panel đóng mặc định",badge:"Default",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel này sẽ đóng sẵn khi component được render"})}]};J.parameters={docs:{description:{story:`
Story minh họa cách thiết lập panel mở sẵn bằng thuộc tính \`defaultActiveKey\`.
Thuộc tính này cho phép bạn chỉ định panel nào sẽ được mở khi component được render lần đầu tiên.

### Các thuộc tính được sử dụng:
- \`defaultActiveKey={["1"]}\`: Thiết lập panel có key "1" được mở sẵn
      `}}};const Q=H.bind({});Q.args={...N.args,collapsible:"header",items:[{key:"1",title:"Click vào header để mở/đóng",description:"Toàn bộ header có thể click",badge:"Header",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel có thể mở/đóng bằng cách click vào bất kỳ đâu trên header"})},{key:"2",title:"Click vào header để mở/đóng",description:"Toàn bộ header có thể click",badge:"Header",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel có thể mở/đóng bằng cách click vào bất kỳ đâu trên header"})}]};Q.parameters={docs:{description:{story:`
Story minh họa chế độ mặc định \`collapsible="header"\`.
Trong chế độ này, người dùng có thể click vào bất kỳ đâu trên header để mở/đóng panel.

### Các thuộc tính được sử dụng:
- \`collapsible="header"\`: Cho phép click vào toàn bộ header để mở/đóng panel
      `}}};const U=H.bind({});U.args={...N.args,collapsible:"icon",items:[{key:"1",title:"Chỉ click vào icon để mở/đóng",description:"Chỉ icon mũi tên có thể click",badge:"Icon",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel chỉ có thể mở/đóng bằng cách click vào icon mũi tên"})},{key:"2",title:"Chỉ click vào icon để mở/đóng",description:"Chỉ icon mũi tên có thể click",badge:"Icon",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel chỉ có thể mở/đóng bằng cách click vào icon mũi tên"})}]};U.parameters={docs:{description:{story:`
Story minh họa chế độ \`collapsible="icon"\`.
Trong chế độ này, người dùng chỉ có thể click vào icon mũi tên để mở/đóng panel.

### Các thuộc tính được sử dụng:
- \`collapsible="icon"\`: Chỉ cho phép click vào icon mũi tên để mở/đóng panel
      `}}};const Y=H.bind({});Y.args={...N.args,collapsible:"disabled",items:[{key:"1",title:"Panel bị vô hiệu hóa",description:"Không thể mở/đóng panel",badge:"Disabled",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel này không thể mở/đóng, tất cả các tương tác đều bị vô hiệu hóa"})},{key:"2",title:"Panel bị vô hiệu hóa",description:"Không thể mở/đóng panel",badge:"Disabled",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel này không thể mở/đóng, tất cả các tương tác đều bị vô hiệu hóa"})}]};Y.parameters={docs:{description:{story:`
Story minh họa chế độ \`collapsible="disabled"\`.
Trong chế độ này, tất cả các tương tác với panel đều bị vô hiệu hóa.

### Các thuộc tính được sử dụng:
- \`collapsible="disabled"\`: Vô hiệu hóa tất cả các tương tác với panel
      `}}};const Z=H.bind({});Z.args={...N.args,items:[{key:"1",title:"Panel với custom header",description:"Sử dụng customHeader để tùy chỉnh header",badge:"Custom",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel này sử dụng custom header"}),customHeader:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(p,{}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:0},children:"Custom Header"}),i.jsx("p",{style:{margin:0,fontSize:"12px",color:"#666"},children:"Đây là một custom header được tùy chỉnh hoàn toàn"})]})]})},{key:"2",title:"Panel thông thường",description:"Panel không sử dụng custom header",badge:"Default",leftIcon:i.jsx(p,{}),children:i.jsx("p",{children:"Panel này sử dụng header mặc định"})}]};Z.parameters={docs:{description:{story:`
Story minh họa cách sử dụng thuộc tính \`customHeader\` để tùy chỉnh hoàn toàn header của panel.
Panel đầu tiên sử dụng custom header, trong khi panel thứ hai sử dụng header mặc định.

### Các thuộc tính được sử dụng:
- \`customHeader\`: Tùy chỉnh hoàn toàn header của panel
      `}}};const ee=H.bind({});ee.args={...N.args,accordion:!0,items:[{key:"1",title:"Panel 1",description:"Khi mở panel này, các panel khác sẽ tự động đóng",badge:"Accordion",leftIcon:i.jsx(p,{}),children:i.jsxs("div",{children:[i.jsx("p",{children:"Panel 1 - Chế độ accordion"}),i.jsx("p",{children:"Khi bạn mở panel này, panel 2 sẽ tự động đóng lại"})]})},{key:"2",title:"Panel 2",description:"Khi mở panel này, panel 1 sẽ tự động đóng",badge:"Accordion",leftIcon:i.jsx(p,{}),children:i.jsxs("div",{children:[i.jsx("p",{children:"Panel 2 - Chế độ accordion"}),i.jsx("p",{children:"Khi bạn mở panel này, panel 1 sẽ tự động đóng lại"})]})}]};ee.parameters={docs:{description:{story:`
Story minh họa chế độ accordion của Collapse.
Trong chế độ này, chỉ một panel có thể được mở tại một thời điểm.
Khi người dùng mở một panel, các panel khác sẽ tự động đóng lại.

### Các thuộc tính được sử dụng:
- \`accordion={true}\`: Bật chế độ accordion (chỉ mở một panel tại một thời điểm)
      `}}};const ne=H.bind({});ne.args={...N.args,accordion:!1,items:[{key:"1",title:"Panel 1",description:"Có thể mở cùng lúc với panel khác",badge:"Multiple",leftIcon:i.jsx(p,{}),children:i.jsxs("div",{children:[i.jsx("p",{children:"Panel 1 - Không có chế độ accordion"}),i.jsx("p",{children:"Bạn có thể mở panel này cùng lúc với panel 2"})]})},{key:"2",title:"Panel 2",description:"Có thể mở cùng lúc với panel khác",badge:"Multiple",leftIcon:i.jsx(p,{}),children:i.jsxs("div",{children:[i.jsx("p",{children:"Panel 2 - Không có chế độ accordion"}),i.jsx("p",{children:"Bạn có thể mở panel này cùng lúc với panel 1"})]})}]};ne.parameters={docs:{description:{story:`
Story minh họa chế độ không sử dụng accordion.
Trong chế độ này, người dùng có thể mở nhiều panel cùng một lúc.
Mỗi panel hoạt động độc lập với các panel khác.

### Các thuộc tính được sử dụng:
- \`accordion={false}\`: Tắt chế độ accordion, cho phép mở nhiều panel cùng lúc
      `}}};var le,me,he;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(he=(me=N.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ge,ue;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(ue=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ve,fe,be;X.parameters={...X.parameters,docs:{...(ve=X.parameters)==null?void 0:ve.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(be=(fe=X.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var $e,ye,xe;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(xe=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ce,ze,Ie;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(Ie=(ze=J.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Se,ke,je;Q.parameters={...Q.parameters,docs:{...(Se=Q.parameters)==null?void 0:Se.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(je=(ke=Q.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var we,Pe,Ne;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(Ne=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var Ae,Ke,Me;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(Me=(Ke=Y.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Te,Ee,_e;Z.parameters={...Z.parameters,docs:{...(Te=Z.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(_e=(Ee=Z.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var De,He,Re;ee.parameters={...ee.parameters,docs:{...(De=ee.parameters)==null?void 0:De.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(Re=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Oe,Be,Fe;ne.parameters={...ne.parameters,docs:{...(Oe=ne.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(Fe=(Be=ne.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};const sa=["Default","MultiplePanels","StartIconPosition","LargeSize","DefaultActiveKey","CollapsibleHeader","CollapsibleIcon","CollapsibleDisabled","CustomHeader","AccordionMode","NonAccordionMode"];export{ee as AccordionMode,Y as CollapsibleDisabled,Q as CollapsibleHeader,U as CollapsibleIcon,Z as CustomHeader,N as Default,J as DefaultActiveKey,W as LargeSize,q as MultiplePanels,ne as NonAccordionMode,X as StartIconPosition,sa as __namedExportsOrder,da as default};
