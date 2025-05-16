import{j as h}from"./jsx-runtime-47c18db8.js";import{R as X,r as b,g as ir}from"./index-d806aa85.js";import{r as Dt}from"./index-35a52d1c.js";import{d as j,g as i,n as ar}from"./getTheme-624682de.js";import{c as L}from"./index-d16835b1.js";import{o as lr,r as sr}from"./useSize-ee7d4598.js";import{g as cr,i as ur,a as dr}from"./index-be6f683c.js";import{a as fr}from"./useCSSVarCls-b4f81dac.js";import{p as pr}from"./pickAttrs-551e8cfe.js";import{W as mr}from"./button-1608bba2.js";import{o as vr,r as gr,q as qt,p as hr,P as br,n as zt,G as Tt}from"./AntdIcon-b5d0c52f.js";import"./index-4d53fe87.js";import"./index-bf6eddb1.js";import"./index-0fbbfa15.js";import{F as Ft}from"./index-e72c950e.js";import"./index-fcfadd25.js";import"./index-46a4f406.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-41f280b7.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-873f32b7.js";import"./index-a2d3ddff.js";import{F as Re}from"./index-29f02deb.js";import"./index-63636042.js";import"./index-bda617e8.js";import"./index-d60e7f1a.js";import"./index-a4689621.js";import"./index-6b56abf2.js";import"./index-1c88f37d.js";import"./index-1609c7a8.js";import"./ToastContext-513fc3b6.js";import{T as xr,m as yr,j as vt,a as wr,A as $r,n as Cr}from"./ArrowRightIcon-2d46fdf7.js";import"./index-f3c16a99.js";import{D as Lt,d as he}from"./index-1c257da6.js";import{u as Sr,g as Or}from"./index-70c9a0e9.js";import"./index-ea9f1f0b.js";import"./index-1120f323.js";import"./FISSorter-dda77e13.js";import"./index-787d65f1.js";import"./index-8298a7d1.js";import"./index-55d04594.js";import"./index-41ba0d9f.js";function gt(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function ht(e){const{closable:t,closeIcon:r}=e||{};return X.useMemo(()=>{if(!t&&(t===!1||r===!1||r===null))return!1;if(t===void 0&&r===void 0)return null;let n={closeIcon:typeof r!="boolean"&&r!==null?r:void 0};return t&&typeof t=="object"&&(n=Object.assign(Object.assign({},n),t)),n},[t,r])}function bt(){const e={};for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(o=>{o&&Object.keys(o).forEach(a=>{o[a]!==void 0&&(e[a]=o[a])})}),e}const kr={};function Pr(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:kr;const n=ht(e),o=ht(t),a=typeof n!="boolean"?!!(n!=null&&n.disabled):!1,u=X.useMemo(()=>Object.assign({closeIcon:X.createElement(fr,null)},r),[r]),s=X.useMemo(()=>n===!1?!1:n?bt(u,o,n):o===!1?!1:o?bt(u,o):u.closable?u:!1,[n,o,u]);return X.useMemo(()=>{if(s===!1)return[!1,null,a];const{closeIconRender:c}=u,{closeIcon:d}=s;let l=d;if(l!=null){c&&(l=c(d));const f=pr(s,!0);Object.keys(f).length&&(l=X.isValidElement(l)?X.cloneElement(l,f):X.createElement("span",Object.assign({},f),l))}return[!0,l,a]},[s,u])}const Ir=e=>{const{paddingXXS:t,lineWidth:r,tagPaddingHorizontal:n,componentCls:o,calc:a}=e,u=a(n).sub(r).equal(),s=a(t).sub(r).equal();return{[o]:Object.assign(Object.assign({},gr(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:u,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${qt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:s,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:u}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},Ge=e=>{const{lineWidth:t,fontSizeIcon:r,calc:n}=e,o=e.fontSizeSM;return hr(e,{tagFontSize:o,tagLineHeight:qt(n(e.lineHeightSM).mul(o).equal()),tagIconSize:n(r).sub(n(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},Qe=e=>({defaultBg:new br(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Rt=vr("Tag",e=>{const t=Ge(e);return Ir(t)},Qe);var jr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Vr=b.forwardRef((e,t)=>{const{prefixCls:r,style:n,className:o,checked:a,onChange:u,onClick:s}=e,c=jr(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:d,tag:l}=b.useContext(zt),f=P=>{u==null||u(!a),s==null||s(P)},g=d("tag",r),[v,x,p]=Rt(g),m=L(g,`${g}-checkable`,{[`${g}-checkable-checked`]:a},l==null?void 0:l.className,o,x,p);return v(b.createElement("span",Object.assign({},c,{ref:t,style:Object.assign(Object.assign({},n),l==null?void 0:l.style),className:m,onClick:f})))}),Er=Vr,Dr=e=>cr(e,(t,r)=>{let{textColor:n,lightBorderColor:o,lightColor:a,darkColor:u}=r;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:n,background:a,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:u,borderColor:u},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),qr=Tt(["Tag","preset"],e=>{const t=Ge(e);return Dr(t)},Qe);function zr(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const Ie=(e,t,r)=>{const n=zr(r);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${r}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Tr=Tt(["Tag","status"],e=>{const t=Ge(e);return[Ie(t,"success","Success"),Ie(t,"processing","Info"),Ie(t,"error","Error"),Ie(t,"warning","Warning")]},Qe);var Fr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Lr=b.forwardRef((e,t)=>{const{prefixCls:r,className:n,rootClassName:o,style:a,children:u,icon:s,color:c,onClose:d,bordered:l=!0,visible:f}=e,g=Fr(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:v,direction:x,tag:p}=b.useContext(zt),[m,P]=b.useState(!0),k=lr(g,["closeIcon","closable"]);b.useEffect(()=>{f!==void 0&&P(f)},[f]);const I=ur(c),y=dr(c),O=I||y,C=Object.assign(Object.assign({backgroundColor:c&&!O?c:void 0},p==null?void 0:p.style),a),w=v("tag",r),[V,$,E]=Rt(w),D=L(w,p==null?void 0:p.className,{[`${w}-${c}`]:O,[`${w}-has-color`]:c&&!O,[`${w}-hidden`]:!m,[`${w}-rtl`]:x==="rtl",[`${w}-borderless`]:!l},n,o,$,E),T=U=>{U.stopPropagation(),d==null||d(U),!U.defaultPrevented&&P(!1)},[,S]=Pr(gt(e),gt(p),{closable:!1,closeIconRender:U=>{const G=b.createElement("span",{className:`${w}-close-icon`,onClick:T},U);return sr(U,G,B=>({onClick:ae=>{var Q;(Q=B==null?void 0:B.onClick)===null||Q===void 0||Q.call(B,ae),T(ae)},className:L(B==null?void 0:B.className,`${w}-close-icon`)}))}}),q=typeof g.onClick=="function"||u&&u.type==="a",H=s||null,z=H?b.createElement(b.Fragment,null,H,u&&b.createElement("span",null,u)):u,F=b.createElement("span",Object.assign({},k,{ref:t,className:D,style:C}),z,S,I&&b.createElement(qr,{key:"preset",prefixCls:w}),y&&b.createElement(Tr,{key:"status",prefixCls:w}));return V(q?b.createElement(mr,{component:"Tag"},F):F)}),At=Lr;At.CheckableTag=Er;const Rr=At;var Ar=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const{TimePicker:Nr,RangePicker:Br}=Lt,_r=b.forwardRef((e,t)=>b.createElement(Br,Object.assign({},e,{picker:"time",mode:void 0,ref:t}))),$e=b.forwardRef((e,t)=>{var{addon:r,renderExtraFooter:n,variant:o,bordered:a}=e,u=Ar(e,["addon","renderExtraFooter","variant","bordered"]);const[s]=Sr("timePicker",o,a),c=b.useMemo(()=>{if(n)return n;if(r)return r},[r,n]);return b.createElement(Nr,Object.assign({},u,{mode:void 0,ref:t,renderExtraFooter:c,variant:s}))}),Nt=Or($e,"popupAlign",void 0,"picker");$e._InternalPanelDoNotUseOrYouWillBeFired=Nt;$e.RangePicker=_r;$e._InternalPanelDoNotUseOrYouWillBeFired=Nt;const Mr=$e;var xt=function(t){return t.reduce(function(r,n){var o=n[0],a=n[1];return r[o]=a,r},{})},yt=typeof window<"u"&&window.document&&window.document.createElement?b.useLayoutEffect:b.useEffect,R="top",M="bottom",W="right",A="left",Je="auto",Ce=[R,M,W,A],ce="start",ye="end",Wr="clippingParents",Bt="viewport",ge="popper",Hr="reference",wt=Ce.reduce(function(e,t){return e.concat([t+"-"+ce,t+"-"+ye])},[]),_t=[].concat(Ce,[Je]).reduce(function(e,t){return e.concat([t,t+"-"+ce,t+"-"+ye])},[]),Ur="beforeRead",Xr="read",Yr="afterRead",Kr="beforeMain",Gr="main",Qr="afterMain",Jr="beforeWrite",Zr="write",en="afterWrite",tn=[Ur,Xr,Yr,Kr,Gr,Qr,Jr,Zr,en];function K(e){return e?(e.nodeName||"").toLowerCase():null}function N(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ie(e){var t=N(e).Element;return e instanceof t||e instanceof Element}function _(e){var t=N(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ze(e){if(typeof ShadowRoot>"u")return!1;var t=N(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function rn(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!_(a)||!K(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(u){var s=o[u];s===!1?a.removeAttribute(u):a.setAttribute(u,s===!0?"":s)}))})}function nn(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},u=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=u.reduce(function(c,d){return c[d]="",c},{});!_(o)||!K(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(c){o.removeAttribute(c)}))})}}const on={name:"applyStyles",enabled:!0,phase:"write",fn:rn,effect:nn,requires:["computeStyles"]};function Y(e){return e.split("-")[0]}var oe=Math.max,De=Math.min,ue=Math.round;function We(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Mt(){return!/^((?!chrome|android).)*safari/i.test(We())}function de(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&_(e)&&(o=e.offsetWidth>0&&ue(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ue(n.height)/e.offsetHeight||1);var u=ie(e)?N(e):window,s=u.visualViewport,c=!Mt()&&r,d=(n.left+(c&&s?s.offsetLeft:0))/o,l=(n.top+(c&&s?s.offsetTop:0))/a,f=n.width/o,g=n.height/a;return{width:f,height:g,top:l,right:d+f,bottom:l+g,left:d,x:d,y:l}}function et(e){var t=de(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Wt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ze(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(e){return N(e).getComputedStyle(e)}function an(e){return["table","td","th"].indexOf(K(e))>=0}function ee(e){return((ie(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ae(e){return K(e)==="html"?e:e.assignedSlot||e.parentNode||(Ze(e)?e.host:null)||ee(e)}function $t(e){return!_(e)||J(e).position==="fixed"?null:e.offsetParent}function ln(e){var t=/firefox/i.test(We()),r=/Trident/i.test(We());if(r&&_(e)){var n=J(e);if(n.position==="fixed")return null}var o=Ae(e);for(Ze(o)&&(o=o.host);_(o)&&["html","body"].indexOf(K(o))<0;){var a=J(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Se(e){for(var t=N(e),r=$t(e);r&&an(r)&&J(r).position==="static";)r=$t(r);return r&&(K(r)==="html"||K(r)==="body"&&J(r).position==="static")?t:r||ln(e)||t}function tt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function be(e,t,r){return oe(e,De(t,r))}function sn(e,t,r){var n=be(e,t,r);return n>r?r:n}function Ht(){return{top:0,right:0,bottom:0,left:0}}function Ut(e){return Object.assign({},Ht(),e)}function Xt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var cn=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Ut(typeof t!="number"?t:Xt(t,Ce))};function un(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,u=r.modifiersData.popperOffsets,s=Y(r.placement),c=tt(s),d=[A,W].indexOf(s)>=0,l=d?"height":"width";if(!(!a||!u)){var f=cn(o.padding,r),g=et(a),v=c==="y"?R:A,x=c==="y"?M:W,p=r.rects.reference[l]+r.rects.reference[c]-u[c]-r.rects.popper[l],m=u[c]-r.rects.reference[c],P=Se(a),k=P?c==="y"?P.clientHeight||0:P.clientWidth||0:0,I=p/2-m/2,y=f[v],O=k-g[l]-f[x],C=k/2-g[l]/2+I,w=be(y,C,O),V=c;r.modifiersData[n]=(t={},t[V]=w,t.centerOffset=w-C,t)}}function dn(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Wt(t.elements.popper,o)&&(t.elements.arrow=o))}const fn={name:"arrow",enabled:!0,phase:"main",fn:un,effect:dn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function fe(e){return e.split("-")[1]}var pn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mn(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ue(r*o)/o||0,y:ue(n*o)/o||0}}function Ct(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,u=e.offsets,s=e.position,c=e.gpuAcceleration,d=e.adaptive,l=e.roundOffsets,f=e.isFixed,g=u.x,v=g===void 0?0:g,x=u.y,p=x===void 0?0:x,m=typeof l=="function"?l({x:v,y:p}):{x:v,y:p};v=m.x,p=m.y;var P=u.hasOwnProperty("x"),k=u.hasOwnProperty("y"),I=A,y=R,O=window;if(d){var C=Se(r),w="clientHeight",V="clientWidth";if(C===N(r)&&(C=ee(r),J(C).position!=="static"&&s==="absolute"&&(w="scrollHeight",V="scrollWidth")),C=C,o===R||(o===A||o===W)&&a===ye){y=M;var $=f&&C===O&&O.visualViewport?O.visualViewport.height:C[w];p-=$-n.height,p*=c?1:-1}if(o===A||(o===R||o===M)&&a===ye){I=W;var E=f&&C===O&&O.visualViewport?O.visualViewport.width:C[V];v-=E-n.width,v*=c?1:-1}}var D=Object.assign({position:s},d&&pn),T=l===!0?mn({x:v,y:p},N(r)):{x:v,y:p};if(v=T.x,p=T.y,c){var S;return Object.assign({},D,(S={},S[y]=k?"0":"",S[I]=P?"0":"",S.transform=(O.devicePixelRatio||1)<=1?"translate("+v+"px, "+p+"px)":"translate3d("+v+"px, "+p+"px, 0)",S))}return Object.assign({},D,(t={},t[y]=k?p+"px":"",t[I]=P?v+"px":"",t.transform="",t))}function vn(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,u=a===void 0?!0:a,s=r.roundOffsets,c=s===void 0?!0:s,d={placement:Y(t.placement),variation:fe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ct(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ct(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const gn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vn,data:{}};var je={passive:!0};function hn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,u=n.resize,s=u===void 0?!0:u,c=N(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&d.forEach(function(l){l.addEventListener("scroll",r.update,je)}),s&&c.addEventListener("resize",r.update,je),function(){a&&d.forEach(function(l){l.removeEventListener("scroll",r.update,je)}),s&&c.removeEventListener("resize",r.update,je)}}const bn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:hn,data:{}};var xn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(e){return e.replace(/left|right|bottom|top/g,function(t){return xn[t]})}var yn={start:"end",end:"start"};function St(e){return e.replace(/start|end/g,function(t){return yn[t]})}function rt(e){var t=N(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function nt(e){return de(ee(e)).left+rt(e).scrollLeft}function wn(e,t){var r=N(e),n=ee(e),o=r.visualViewport,a=n.clientWidth,u=n.clientHeight,s=0,c=0;if(o){a=o.width,u=o.height;var d=Mt();(d||!d&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:a,height:u,x:s+nt(e),y:c}}function $n(e){var t,r=ee(e),n=rt(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=oe(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),u=oe(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+nt(e),c=-n.scrollTop;return J(o||r).direction==="rtl"&&(s+=oe(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:u,x:s,y:c}}function ot(e){var t=J(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Yt(e){return["html","body","#document"].indexOf(K(e))>=0?e.ownerDocument.body:_(e)&&ot(e)?e:Yt(Ae(e))}function xe(e,t){var r;t===void 0&&(t=[]);var n=Yt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=N(n),u=o?[a].concat(a.visualViewport||[],ot(n)?n:[]):n,s=t.concat(u);return o?s:s.concat(xe(Ae(u)))}function He(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Cn(e,t){var r=de(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ot(e,t,r){return t===Bt?He(wn(e,r)):ie(t)?Cn(t,r):He($n(ee(e)))}function Sn(e){var t=xe(Ae(e)),r=["absolute","fixed"].indexOf(J(e).position)>=0,n=r&&_(e)?Se(e):e;return ie(n)?t.filter(function(o){return ie(o)&&Wt(o,n)&&K(o)!=="body"}):[]}function On(e,t,r,n){var o=t==="clippingParents"?Sn(e):[].concat(t),a=[].concat(o,[r]),u=a[0],s=a.reduce(function(c,d){var l=Ot(e,d,n);return c.top=oe(l.top,c.top),c.right=De(l.right,c.right),c.bottom=De(l.bottom,c.bottom),c.left=oe(l.left,c.left),c},Ot(e,u,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Kt(e){var t=e.reference,r=e.element,n=e.placement,o=n?Y(n):null,a=n?fe(n):null,u=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,c;switch(o){case R:c={x:u,y:t.y-r.height};break;case M:c={x:u,y:t.y+t.height};break;case W:c={x:t.x+t.width,y:s};break;case A:c={x:t.x-r.width,y:s};break;default:c={x:t.x,y:t.y}}var d=o?tt(o):null;if(d!=null){var l=d==="y"?"height":"width";switch(a){case ce:c[d]=c[d]-(t[l]/2-r[l]/2);break;case ye:c[d]=c[d]+(t[l]/2-r[l]/2);break}}return c}function we(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,u=a===void 0?e.strategy:a,s=r.boundary,c=s===void 0?Wr:s,d=r.rootBoundary,l=d===void 0?Bt:d,f=r.elementContext,g=f===void 0?ge:f,v=r.altBoundary,x=v===void 0?!1:v,p=r.padding,m=p===void 0?0:p,P=Ut(typeof m!="number"?m:Xt(m,Ce)),k=g===ge?Hr:ge,I=e.rects.popper,y=e.elements[x?k:g],O=On(ie(y)?y:y.contextElement||ee(e.elements.popper),c,l,u),C=de(e.elements.reference),w=Kt({reference:C,element:I,strategy:"absolute",placement:o}),V=He(Object.assign({},I,w)),$=g===ge?V:C,E={top:O.top-$.top+P.top,bottom:$.bottom-O.bottom+P.bottom,left:O.left-$.left+P.left,right:$.right-O.right+P.right},D=e.modifiersData.offset;if(g===ge&&D){var T=D[o];Object.keys(E).forEach(function(S){var q=[W,M].indexOf(S)>=0?1:-1,H=[R,M].indexOf(S)>=0?"y":"x";E[S]+=T[H]*q})}return E}function kn(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,u=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,d=c===void 0?_t:c,l=fe(n),f=l?s?wt:wt.filter(function(x){return fe(x)===l}):Ce,g=f.filter(function(x){return d.indexOf(x)>=0});g.length===0&&(g=f);var v=g.reduce(function(x,p){return x[p]=we(e,{placement:p,boundary:o,rootBoundary:a,padding:u})[Y(p)],x},{});return Object.keys(v).sort(function(x,p){return v[x]-v[p]})}function Pn(e){if(Y(e)===Je)return[];var t=Ve(e);return[St(e),t,St(t)]}function In(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,u=r.altAxis,s=u===void 0?!0:u,c=r.fallbackPlacements,d=r.padding,l=r.boundary,f=r.rootBoundary,g=r.altBoundary,v=r.flipVariations,x=v===void 0?!0:v,p=r.allowedAutoPlacements,m=t.options.placement,P=Y(m),k=P===m,I=c||(k||!x?[Ve(m)]:Pn(m)),y=[m].concat(I).reduce(function(le,Z){return le.concat(Y(Z)===Je?kn(t,{placement:Z,boundary:l,rootBoundary:f,padding:d,flipVariations:x,allowedAutoPlacements:p}):Z)},[]),O=t.rects.reference,C=t.rects.popper,w=new Map,V=!0,$=y[0],E=0;E<y.length;E++){var D=y[E],T=Y(D),S=fe(D)===ce,q=[R,M].indexOf(T)>=0,H=q?"width":"height",z=we(t,{placement:D,boundary:l,rootBoundary:f,altBoundary:g,padding:d}),F=q?S?W:A:S?M:R;O[H]>C[H]&&(F=Ve(F));var U=Ve(F),G=[];if(a&&G.push(z[T]<=0),s&&G.push(z[F]<=0,z[U]<=0),G.every(function(le){return le})){$=D,V=!1;break}w.set(D,G)}if(V)for(var B=x?3:1,ae=function(Z){var ve=y.find(function(ke){var te=w.get(ke);if(te)return te.slice(0,Z).every(function(Be){return Be})});if(ve)return $=ve,"break"},Q=B;Q>0;Q--){var Oe=ae(Q);if(Oe==="break")break}t.placement!==$&&(t.modifiersData[n]._skip=!0,t.placement=$,t.reset=!0)}}const jn={name:"flip",enabled:!0,phase:"main",fn:In,requiresIfExists:["offset"],data:{_skip:!1}};function kt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Pt(e){return[R,W,M,A].some(function(t){return e[t]>=0})}function Vn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,u=we(t,{elementContext:"reference"}),s=we(t,{altBoundary:!0}),c=kt(u,n),d=kt(s,o,a),l=Pt(c),f=Pt(d);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}const En={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Vn};function Dn(e,t,r){var n=Y(e),o=[A,R].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,u=a[0],s=a[1];return u=u||0,s=(s||0)*o,[A,W].indexOf(n)>=0?{x:s,y:u}:{x:u,y:s}}function qn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,u=_t.reduce(function(l,f){return l[f]=Dn(f,t.rects,a),l},{}),s=u[t.placement],c=s.x,d=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=d),t.modifiersData[n]=u}const zn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qn};function Tn(e){var t=e.state,r=e.name;t.modifiersData[r]=Kt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Fn={name:"popperOffsets",enabled:!0,phase:"read",fn:Tn,data:{}};function Ln(e){return e==="x"?"y":"x"}function Rn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,u=r.altAxis,s=u===void 0?!1:u,c=r.boundary,d=r.rootBoundary,l=r.altBoundary,f=r.padding,g=r.tether,v=g===void 0?!0:g,x=r.tetherOffset,p=x===void 0?0:x,m=we(t,{boundary:c,rootBoundary:d,padding:f,altBoundary:l}),P=Y(t.placement),k=fe(t.placement),I=!k,y=tt(P),O=Ln(y),C=t.modifiersData.popperOffsets,w=t.rects.reference,V=t.rects.popper,$=typeof p=="function"?p(Object.assign({},t.rects,{placement:t.placement})):p,E=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(C){if(a){var S,q=y==="y"?R:A,H=y==="y"?M:W,z=y==="y"?"height":"width",F=C[y],U=F+m[q],G=F-m[H],B=v?-V[z]/2:0,ae=k===ce?w[z]:V[z],Q=k===ce?-V[z]:-w[z],Oe=t.elements.arrow,le=v&&Oe?et(Oe):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ht(),ve=Z[q],ke=Z[H],te=be(0,w[z],le[z]),Be=I?w[z]/2-B-te-ve-E.mainAxis:ae-te-ve-E.mainAxis,Zt=I?-w[z]/2+B+te+ke+E.mainAxis:Q+te+ke+E.mainAxis,_e=t.elements.arrow&&Se(t.elements.arrow),er=_e?y==="y"?_e.clientTop||0:_e.clientLeft||0:0,at=(S=D==null?void 0:D[y])!=null?S:0,tr=F+Be-at-er,rr=F+Zt-at,lt=be(v?De(U,tr):U,F,v?oe(G,rr):G);C[y]=lt,T[y]=lt-F}if(s){var st,nr=y==="x"?R:A,or=y==="x"?M:W,re=C[O],Pe=O==="y"?"height":"width",ct=re+m[nr],ut=re-m[or],Me=[R,A].indexOf(P)!==-1,dt=(st=D==null?void 0:D[O])!=null?st:0,ft=Me?ct:re-w[Pe]-V[Pe]-dt+E.altAxis,pt=Me?re+w[Pe]+V[Pe]-dt-E.altAxis:ut,mt=v&&Me?sn(ft,re,pt):be(v?ft:ct,re,v?pt:ut);C[O]=mt,T[O]=mt-re}t.modifiersData[n]=T}}const An={name:"preventOverflow",enabled:!0,phase:"main",fn:Rn,requiresIfExists:["offset"]};function Nn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Bn(e){return e===N(e)||!_(e)?rt(e):Nn(e)}function _n(e){var t=e.getBoundingClientRect(),r=ue(t.width)/e.offsetWidth||1,n=ue(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Mn(e,t,r){r===void 0&&(r=!1);var n=_(t),o=_(t)&&_n(t),a=ee(t),u=de(e,o,r),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!r)&&((K(t)!=="body"||ot(a))&&(s=Bn(t)),_(t)?(c=de(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=nt(a))),{x:u.left+s.scrollLeft-c.x,y:u.top+s.scrollTop-c.y,width:u.width,height:u.height}}function Wn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var u=[].concat(a.requires||[],a.requiresIfExists||[]);u.forEach(function(s){if(!r.has(s)){var c=t.get(s);c&&o(c)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Hn(e){var t=Wn(e);return tn.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Un(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Xn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var It={placement:"bottom",modifiers:[],strategy:"absolute"};function jt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Yn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?It:o;return function(s,c,d){d===void 0&&(d=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},It,a),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},f=[],g=!1,v={state:l,setOptions:function(P){var k=typeof P=="function"?P(l.options):P;p(),l.options=Object.assign({},a,l.options,k),l.scrollParents={reference:ie(s)?xe(s):s.contextElement?xe(s.contextElement):[],popper:xe(c)};var I=Hn(Xn([].concat(n,l.options.modifiers)));return l.orderedModifiers=I.filter(function(y){return y.enabled}),x(),v.update()},forceUpdate:function(){if(!g){var P=l.elements,k=P.reference,I=P.popper;if(jt(k,I)){l.rects={reference:Mn(k,Se(I),l.options.strategy==="fixed"),popper:et(I)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var y=0;y<l.orderedModifiers.length;y++){if(l.reset===!0){l.reset=!1,y=-1;continue}var O=l.orderedModifiers[y],C=O.fn,w=O.options,V=w===void 0?{}:w,$=O.name;typeof C=="function"&&(l=C({state:l,options:V,name:$,instance:v})||l)}}}},update:Un(function(){return new Promise(function(m){v.forceUpdate(),m(l)})}),destroy:function(){p(),g=!0}};if(!jt(s,c))return v;v.setOptions(d).then(function(m){!g&&d.onFirstUpdate&&d.onFirstUpdate(m)});function x(){l.orderedModifiers.forEach(function(m){var P=m.name,k=m.options,I=k===void 0?{}:k,y=m.effect;if(typeof y=="function"){var O=y({state:l,name:P,instance:v,options:I}),C=function(){};f.push(O||C)}})}function p(){f.forEach(function(m){return m()}),f=[]}return v}}var Kn=[bn,Fn,gn,on,zn,jn,An,fn,En],Gn=Yn({defaultModifiers:Kn}),Qn=typeof Element<"u",Jn=typeof Map=="function",Zn=typeof Set=="function",eo=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ee(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!Ee(e[n],t[n]))return!1;return!0}var a;if(Jn&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;for(a=e.entries();!(n=a.next()).done;)if(!Ee(n.value[1],t.get(n.value[0])))return!1;return!0}if(Zn&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(eo&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(Qn&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&e.$$typeof)&&!Ee(e[o[n]],t[o[n]]))return!1;return!0}return e!==e&&t!==t}var to=function(t,r){try{return Ee(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const ro=ir(to);var no=[],oo=function(t,r,n){n===void 0&&(n={});var o=b.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||no},u=b.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=u[0],c=u[1],d=b.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(v){var x=v.state,p=Object.keys(x.elements);Dt.flushSync(function(){c({styles:xt(p.map(function(m){return[m,x.styles[m]||{}]})),attributes:xt(p.map(function(m){return[m,x.attributes[m]]}))})})},requires:["computeStyles"]}},[]),l=b.useMemo(function(){var g={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[d,{name:"applyStyles",enabled:!1}])};return ro(o.current,g)?o.current||g:(o.current=g,g)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,d]),f=b.useRef();return yt(function(){f.current&&f.current.setOptions(l)},[l]),yt(function(){if(!(t==null||r==null)){var g=n.createPopper||Gn,v=g(t,r,l);return f.current=v,function(){v.destroy(),f.current=null}}},[t,r,n.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}};const Vt="portal-fis-component";function io(){let e=document.getElementById(Vt);return e||(e=document.createElement("div"),e.setAttribute("id",Vt),document.body.appendChild(e))}function Ue(e){const[t,r]=b.useState(null);return b.useLayoutEffect(()=>{r(e.container||io())},[e.container]),t?Dt.createPortal(e.children,t):null}try{Ue.displayName="Portal",Ue.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"The children to render into the `container`.",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"An HTML element or null.\nThe `container` will have the portal children appended to it.",name:"container",required:!1,type:{name:"HTMLElement | null"}}}}}catch{}const ao=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${i("com/input/vertical-gap")};
`,lo=j.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;j.div`
  display: flex;
  gap: ${i("com/combo-box/selected-data/horizontal-gap")};
  align-items: center;
  flex-wrap: wrap;
`;const Et=j(Rr)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${i("Paragraph/Sm")}
  color: ${i("com/chips-button/theme/label/color-text/default/neutral")};
  height: ${i("com/chips-button/size-xs/height")};
  border-radius: ${i("com/chips-button/size-xs/corner-radius")};
  padding-left: ${i("com/chips-button/size-xs/left-padding")};
  padding-right: ${e=>e.$isPadding?i("com/chips-button/size-xs/right-padding"):0};
  margin-right: 0;
  background-color: ${i("com/chips-button/theme/background-color/default/neutral")};
  border: ${i("com/chips-button/stroke-width/default")} solid
    ${i("com/chips-button/theme/color-stroke/default/neutral")};

  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  position: ${e=>e.$isVisible?"static":"absolute"};
`;j.div`
  position: relative;
  width: 100%;
`;const so=j.div`
  width: 100%;
  display: flex;
  gap: ${i("com/combo-box/selected-data/horizontal-gap")};
  flex-wrap: wrap;
  box-sizing: border-box;
`,co=j.div`
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
`,uo=j.div`
  padding: 10px 12px;
  color: #999;
  text-align: center;
  font-style: italic;
`,fo=j.div`
  padding: 8px 12px;
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  background: ${e=>e.$isSelected?"#e6f7ff":"transparent"};
  font-weight: ${e=>e.$isSelected?"500":"normal"};
  color: ${e=>e.$isDisabled?"#ccc":"inherit"};

  &:hover:not([disabled]) {
    background: ${e=>e.$isSelected?"#e6f7ff":"#f5f5f5"};
  }
`,po=j.div`
  display: flex;
  flex-direction: column;
`,mo=j.div`
  font-size: 14px;
`,vo=j.div`
  font-size: 12px;
  color: #999;
  margin-top: 2px;
`,se=j.input`
  height: calc(
    ${i("com/input/field/size-md/height")} - 2 *
      ${i("com/input/field/stroke-width")}
  );
  width: 100%;
  ${i("Paragraph/Sm")}
  color: ${i("com/input/field/default/label/color-text/inputed")};
  caret-color: ${i("com/typing-cursor/default")};
  border: none;
  background: transparent;
  outline: none;
  padding-right: calc(
    ${i("com/input/field/size-md/label/sub-spacing")} +
      ${i("com/input/field/right-padding")}
  );
  padding-left: calc(
    ${i("com/input/field/size-md/label/sub-spacing")} +
      ${i("com/input/field/left-padding")}
  );
  border-radius: ${i("com/input/field/size-md/corner-radius")};

  &.prefix {
    padding-right: ${i("com/input/field/size-md/label/sub-spacing")};
    padding-left: ${i("com/input/field/size-md/label/sub-spacing")};
    border-radius: 0 ${i("com/input/field/size-md/corner-radius")}
      ${i("com/input/field/size-md/corner-radius")} 0;
  }

  &.suffix {
    padding-right: ${i("com/input/field/size-md/label/sub-spacing")};
    padding-left: ${i("com/input/field/size-md/label/sub-spacing")};
    border-radius: 0;
  }

  &.input-text-lg {
    height: calc(
      ${i("com/input/field/size-lg/height")} - 2 *
        ${i("com/input/field/stroke-width")}
    );
    padding-right: calc(
      ${i("com/input/field/size-lg/label/sub-spacing")} +
        ${i("com/input/field/right-padding")}
    );
    padding-left: calc(
      ${i("com/input/field/size-lg/label/sub-spacing")} +
        ${i("com/input/field/left-padding")}
    );
    border-radius: ${i("com/input/field/size-lg/corner-radius")};

    &.prefix {
      padding-right: ${i("com/input/field/size-lg/label/sub-spacing")};
      padding-left: ${i("com/input/field/size-lg/label/sub-spacing")};
      border-radius: 0 ${i("com/input/field/size-lg/corner-radius")}
        ${i("com/input/field/size-lg/corner-radius")} 0;
    }

    &.suffix {
      padding-right: ${i("com/input/field/size-lg/label/sub-spacing")};
      padding-left: ${i("com/input/field/size-lg/label/sub-spacing")};
      border-radius: 0;
    }
  }

  &::placeholder {
    color: ${i("com/input/field/default/label/color-text/placeholder")};
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    &::placeholder {
      color: ${i("com/input/field/disable/label-color")};
    }
  }

  &:read-only {
    cursor: default;
    &::placeholder {
      color: ${i("com/input/field/disable/label-color")};
    }
  }

  &.negative {
    color: ${i("com/input/field/negative/label/color-text/inputed")};
    caret-color: ${i("com/typing-cursor/negative")};
  }
`,ne=j.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${i("com/input/field/size-md/icon/left-padding")};
  color: ${i("com/input/field/default/icon/color-icon/default")};

  &.input-text-lg {
    margin-left: ${i("com/input/field/size-lg/icon/left-padding")};
  }
`,Xe=j.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${i("com/input/suffix/icon/color-icon")};
`,Ye=j.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${i("com/input/prefix/icon/color-icon")};
`,pe=j.span`
  ${i("Paragraph/XS")};
  color: ${i("com/input/dropdown/label/color-text/default")};
`,me=j.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${i("com/input/dropdown/icon/color-icon/default")};
`,go=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i("com/input/dropdown/horizontal-gap")};
  padding-left: calc(
    ${i("com/input/dropdown/horizontal-padding")} -
      ${i("com/input/dropdown/divider/stroke-width")}
  );
  padding-right: ${i("com/input/dropdown/horizontal-padding")};
  border-left: ${i("com/input/dropdown/divider/stroke-width")} solid
    ${i("com/input/suffix/divider/color-stroke")};
  border-top-right-radius: ${i("com/input/field/size-md/corner-radius")};
  border-bottom-right-radius: ${i("com/input/field/size-md/corner-radius")};
  background-color: ${i("com/input/dropdown/background/default")};
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &.input-text-lg {
    border-top-right-radius: ${i("com/input/field/size-lg/corner-radius")};
    border-bottom-right-radius: ${i("com/input/field/size-lg/corner-radius")};

    &:focus {
      border-radius: ${i("com/input/field/size-lg/corner-radius")};
    }
  }

  &:hover {
    background-color: ${i("com/input/dropdown/background/hover")};
    ${pe} {
      color: ${i("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
      color: ${i("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${i("com/input/dropdown/background/pressed")};

    ${pe} {
      color: ${i("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
      color: ${i("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${i("com/focus-mark/gap-spacing")}
        ${i("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${i("com/focus-mark/color-stroke")};
  }

  &.active-dropdown {
    background-color: ${i("com/input/dropdown/background/actived")};
    outline: ${i("com/actived-mark/gap-spacing")} solid
      ${i("com/actived-mark/color-gap-spacing")};
  }

  &.disabled {
    cursor: not-allowed;
  }
`,ho=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i("com/input/dropdown/horizontal-gap")};
  padding-left: calc(
    ${i("com/input/dropdown/horizontal-padding")} -
      ${i("com/input/dropdown/divider/stroke-width")}
  );
  padding-right: ${i("com/input/dropdown/horizontal-padding")};
  border-right: ${i("com/input/dropdown/divider/stroke-width")} solid
    ${i("com/input/suffix/divider/color-stroke")};
  border-top-left-radius: ${i("com/input/field/size-md/corner-radius")};
  border-bottom-left-radius: ${i("com/input/field/size-md/corner-radius")};
  background-color: ${i("com/input/dropdown/background/default")};
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &.input-text-lg {
    border-top-left-radius: ${i("com/input/field/size-lg/corner-radius")};
    border-bottom-left-radius: ${i("com/input/field/size-lg/corner-radius")};

    &:focus {
      border-radius: ${i("com/input/field/size-lg/corner-radius")};
    }
  }

  &:hover {
    background-color: ${i("com/input/dropdown/background/hover")};
    ${pe} {
      color: ${i("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
      color: ${i("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${i("com/input/dropdown/background/pressed")};

    ${pe} {
      color: ${i("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
      color: ${i("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${i("com/focus-mark/gap-spacing")}
        ${i("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${i("com/focus-mark/color-stroke")};
  }

  &.active-dropdown {
    background-color: ${i("com/input/dropdown/background/actived")};
    outline: ${i("com/actived-mark/gap-spacing")} solid
      ${i("com/actived-mark/color-gap-spacing")};
  }

  &.disabled {
    cursor: not-allowed;
  }
`,bo=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i("com/input/suffix/horizontal-gap")};
  padding-left: ${i("com/input/suffix/left-padding")};
  padding-right: ${i("com/input/suffix/right-padding")};
  border-left: ${i("com/input/suffix/divider/stroke-width")} solid
    ${i("com/input/suffix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
`,xo=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i("com/input/prefix/horizontal-gap")};
  padding-left: ${i("com/input/prefix/left-padding")};
  padding-right: ${i("com/input/prefix/right-padding")};
  border-right: ${i("com/input/prefix/divider/stroke-width")} solid
    ${i("com/input/prefix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
`,Gt=j.span`
  ${i("Paragraph/XS")};
  color: ${i("com/input/suffix/label/color-text")};
`,Qt=j.span`
  ${i("Paragraph/XS")};
  color: ${i("com/input/prefix/label/color-text")};
`,yo=j.div`
  height: ${i("com/input/field/size-md/height")};
  min-height: ${i("com/input/field/size-md/height")};
  max-height: ${i("com/input/field/size-md/height")};
  border-radius: ${i("com/input/field/size-md/corner-radius")};
  outline: ${i("com/input/field/stroke-width")} solid
    ${i("com/input/field/default/border/default")};
  outline-offset: -${i("com/input/field/stroke-width")};
  background-color: ${i("com/input/field/default/background/default")};
  padding-right: 0;
  padding-left: 0;

  display: flex;
  align-items: center;

  &.iconPrefix {
    padding-right: ${i("com/input/field/right-padding")};
    padding-left: ${i("com/input/field/left-padding")};
  }

  &.suffix {
    padding-right: ${i("com/input/field/right-padding")};
    padding-left: ${i("com/input/field/left-padding")};
  }

  &.prefix {
    padding-right: 0;
    padding-left: ${i("com/input/field/left-padding")};
  }

  &.dropdownSuffix {
    padding-right: 0;
  }

  &.dropdownPrefix {
    padding-left: 0;
  }

  .icon-suffix {
    flex-shrink: 0;
    color: ${i("com/button/tertiary/icon/color-icon/default")};
  }

  &.negative {
    color: ${i("com/input/character-limit/label/over-limit/color-text")};
  }

  &.input-text-lg {
    height: ${i("com/input/field/size-lg/height")};
    min-height: ${i("com/input/field/size-lg/height")};
    max-height: ${i("com/input/field/size-lg/height")};
    border-radius: ${i("com/input/field/size-lg/corner-radius")};
  }

  &:has(${se}:disabled),
  &:has(${se}:read-only) {
    outline-color: ${i("com/input/field/disable/stroke-color")};
    background-color: ${i("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${ne} {
      color: ${i("com/input/field/disable/icon-color")};
    }
    ${Xe} {
      color: ${i("com/input/field/disable/icon-color")};
    }
    ${Ye} {
      color: ${i("com/input/field/disable/icon-color")};
    }

    .icon-suffix {
      pointer-events: none;
      color: ${i("com/button/disable/icon-color")};
    }

    ${Qt} {
      color: ${i("com/input/field/disable/label-color")};
    }
    ${Gt} {
      color: ${i("com/input/field/disable/label-color")};
    }

    &::placeholder {
      color: ${i("com/input/field/disable/label-color")};
    }
  }

  &:has(${se}:read-only) {
    cursor: default;
  }

  &:hover {
    outline-color: ${i("com/input/field/default/border/hover")};
    background-color: ${i("com/input/field/default/background/hover")};

    ${ne} {
      color: ${i("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${se}:focus) {
    outline-color: ${i("com/input/field/default/border/active")};
    background-color: ${i("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${i("com/actived-mark/gap-spacing")}
      ${i("com/actived-mark/color-gap-spacing")};

    ${ne} {
      color: ${i("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.negative {
    outline-color: ${i("com/input/field/negative/border/default")};
    background-color: ${i("com/input/field/negative/background/default")};

    ${ne} {
      color: ${i("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover {
      outline-color: ${i("com/input/field/negative/border/hover")};
      background-color: ${i("com/input/field/negative/background/hover")};

      ${ne} {
        color: ${i("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &:has(${se}:focus) {
      outline-color: ${i("com/input/field/negative/border/active")};
      background-color: ${i("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${i("com/actived-mark/gap-spacing")}
        ${i("com/actived-mark/color-gap-spacing-negative")};

      ${ne} {
        color: ${i("com/input/field/negative/icon/color-icon/active")};
      }
    }

    &::placeholder {
      color: ${i("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,wo=j.div`
  display: flex;
  flex-direction: column;
  gap: ${i("com/input/vertical-gap")};
  width: fit-content;
`,$o=j.span`
  ${i("Subheading/XS")}
  color: ${i("com/input/character-limit/label/default/color-text")};
  padding-right: ${i("com/input/character-limit/horizontal-padding")};
  padding-left: ${i("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${i("com/input/character-limit/label/over-limit/color-text")};
  }
`,Jt=j.div`
  display: flex;
  justify-content: space-between;
`,it=j.span`
  ${i("Paragraph/XS")}
  color: ${i("com/input/hint/neutral/label/color-text")};
  padding-top: ${i("com/input/hint/top-padding")};

  &.negative {
    color: ${i("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${i("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${i("com/input/hint/disable/label/color-text")};
  }
`,qe=b.forwardRef((e,t)=>{const{className:r,typeSuffix:n,textLabel:o="",iconLabel:a,required:u,iconPrefix:s,sizeInput:c,showCount:d,message:l,negative:f,positive:g,maxLength:v=500,disabled:x,onChange:p,onEnter:m,onKeyDown:P,onClickIconLabel:k,onClickSuffix:I,...y}=e,[O,C]=X.useState(""),w=X.useCallback($=>{C($.target.value),p&&p($)},[p]),V=X.useCallback($=>{$&&$.key==="Enter"&&m&&m($.currentTarget.value)},[m]);return h.jsxs(wo,{className:r,children:[(o||a)&&h.jsx(Re,{textLabel:o,required:u,iconLabel:a,onClickIconLabel:k}),h.jsx(Ne,{...y,ref:t,typeSuffix:n,sizeInput:c,iconPrefix:s,onKeyPress:V,onChange:w,disabled:x,negative:f,onClickSuffix:I}),(l||d)&&h.jsxs(Jt,{children:[h.jsx(it,{className:L({disabled:x,negative:f,positive:g}),children:l||""}),d&&v>0&&h.jsxs($o,{className:L({negative:(O==null?void 0:O.length)>v}),children:[O==null?void 0:O.length,"/",v]})]})]})});qe.displayName="FISInputText";const $i=qe;try{qe.displayName="FISInputText",qe.__docgenInfo={description:"",displayName:"FISInputText",props:{showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Co=j.div`
  display: flex;
  flex-direction: column;
  gap: ${i("com/input/vertical-gap")};
  width: fit-content;
`,So=j.div`
  display: flex;
  justify-content: space-between;
`,Oo=j.span`
  ${i("Paragraph/XS")}
  color: ${i("com/input/hint/neutral/label/color-text")};
  padding-top: ${i("com/input/hint/top-padding")};

  &.negative {
    color: ${i("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${i("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${i("com/input/hint/disable/label/color-text")};
  }
`;j.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: ${i("com/input/vertical-gap")};
`;j.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;const ko=j(Mr)`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,Po=j.div`
  position: relative;
  width: 100%;
`,ze=b.forwardRef((e,t)=>{const{className:r,textLabel:n="",iconLabel:o,required:a,message:u,negative:s,positive:c,format:d="HH:mm:ss",disabled:l,onClickIconLabel:f,...g}=e,[v,x]=b.useState(""),[p,m]=b.useState(null),[P,k]=b.useState(!1),I=w=>{m(w),x(w?w.format(d):""),k(!1)},y=w=>{const V=w.target.value;x(V);const $=he(V,d,!0);$.isValid()?m($):m(null)},O=()=>{k(!0)},C=w=>{w&&k(w)};return h.jsxs(Co,{className:r,children:[(n||o)&&h.jsx(Re,{textLabel:n,required:a,iconLabel:o,onClickIconLabel:f}),h.jsxs(Po,{children:[h.jsx(Ne,{...g,ref:t,typeSuffix:"icon",iconSuffix:h.jsx(xr,{}),negative:s,value:v,onChange:y,onFocus:O,onClickSuffix:O}),h.jsx(ko,{format:d,value:p,onChange:I,open:P,onOpenChange:C})]}),u&&h.jsx(So,{children:h.jsx(Oo,{className:L({disabled:l,negative:s,positive:c}),children:u})})]})});ze.displayName="FISInputTime";const Ci=ze;try{ze.displayName="FISInputTime",ze.__docgenInfo={description:"",displayName:"FISInputTime",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Io=j.div`
  display: flex;
  flex-direction: column;
  gap: ${i("com/input/vertical-gap")};
`,jo=j.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Vo=j(Lt)`
  position: absolute;
  opacity: 0;
  z-index: -1;
  height: 0;
`;function Eo(...e){return t=>{e.forEach(r=>{r&&(typeof r=="function"?r(t):typeof r=="object"&&"current"in r&&(r.current=t))})}}const Te=b.forwardRef((e,t)=>{const{value:r,textLabel:n="",iconLabel:o,required:a,message:u="",disabled:s,negative:c,positive:d,format:l="DD/MM/YYYY",onClickIconLabel:f,onChange:g,...v}=e,[x,p]=b.useState(!1),[m,P]=b.useState(r?he(r).format(l):""),[k,I]=b.useState(r?he(r):null),y=b.useRef(null),O=Eo(y,t);b.useEffect(()=>{if(r){const $=he(r);I($),P($.format(l))}else I(null),P("")},[r,l]);const C=$=>{p($)},w=$=>{const E=$?$.toDate():null;I($),P($?$.format(l):""),g==null||g(E),p(!1)},V=$=>{const E=$.target.value;P(E);const D=he(E,l);D.isValid()?(I(D),g==null||g(D.toDate())):(I(null),g==null||g(null))};return h.jsxs(Io,{children:[(n||o)&&h.jsx(Re,{textLabel:n,required:a,iconLabel:o,onClickIconLabel:f}),h.jsxs(jo,{children:[h.jsx(Ne,{...v,ref:O,typeSuffix:"icon",iconSuffix:h.jsx(yr,{}),value:m,negative:c,disabled:s,onFocus:()=>p(!0),onChange:V,onClickSuffix:()=>p(!0)}),h.jsx(Vo,{open:x,value:k,onChange:$=>w($),onOpenChange:C,format:l,getPopupContainer:()=>{var $;return(($=y.current)==null?void 0:$.parentNode)||document.body}})]}),u&&h.jsx(Jt,{children:h.jsx(it,{className:L({disabled:s,negative:c,positive:d}),children:u})})]})});Te.displayName="FISInputDate";const Si=Te;try{Te.displayName="FISInputDate",Te.__docgenInfo={description:"",displayName:"FISInputDate",props:{value:{defaultValue:null,description:"Date value",name:"value",required:!1,type:{name:"Date | null"}},format:{defaultValue:null,description:"Format Date",name:"format",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle on change action",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Fe=b.forwardRef(({onClickSuffix:e,onClickPrefix:t,...r},n)=>{const{sizeInput:o="md",iconPrefix:a,iconSuffix:u,labelSuffix:s,labelPrefix:c,typeSuffix:d,typePrefix:l,disabled:f,negative:g,activeDropdown:v,...x}=r;return h.jsxs(yo,{className:L({"input-text-lg":o==="lg",negative:g,dropdownSuffix:d==="dropdown",dropdownPrefix:l==="dropdown",iconPrefix:a,prefix:l==="prefix"||l==="dropdown",suffix:d==="icon"||d==="suffix"||d==="dropdown"}),children:[a&&l!=="prefix"&&l!=="dropdown"&&h.jsx(ne,{className:L({"input-text-lg":o==="lg"}),children:a}),l==="prefix"&&h.jsxs(xo,{onClick:t,className:L({disabled:f}),children:[a&&h.jsx(Ye,{children:a}),c&&h.jsx(Qt,{children:c})]}),l==="dropdown"&&h.jsxs(ho,{className:L({"active-dropdown":v,disabled:f,"input-text-lg":o==="lg"}),onClick:t,children:[a&&h.jsx(me,{children:a}),c&&h.jsx(pe,{children:c}),h.jsx(Ye,{children:h.jsx(vt,{})})]}),h.jsx(se,{...x,ref:n,disabled:f,className:L({negative:g,"input-text-lg":o==="lg",prefix:a,suffix:d==="icon"||d==="suffix"||d==="dropdown"})}),d==="icon"&&u&&h.jsx(Ft,{size:"sm",icon:u,variant:"tertiary-invisible",className:"icon-suffix",onClick:e,disabled:f}),d==="suffix"&&h.jsxs(bo,{onClick:e,className:L({disabled:f}),children:[u&&h.jsx(Xe,{children:u}),s&&h.jsx(Gt,{children:s})]}),d==="dropdown"&&h.jsxs(go,{className:L({"active-dropdown":v,disabled:f,"input-text-lg":o==="lg"}),onClick:e,children:[u&&h.jsx(me,{children:u}),s&&h.jsx(pe,{children:s}),h.jsx(Xe,{children:h.jsx(vt,{})})]})]})});Fe.displayName="FISInputField";const Ne=Fe;try{Fe.displayName="FISInputField",Fe.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ke=({options:e,onRemove:t})=>{const r=b.useRef(null),n=b.useRef(Array(e.length).fill(null)),[o,a]=b.useState([]),[u,s]=b.useState([]),[c,d]=b.useState(0),l=ar(),f=b.useCallback(()=>{if(!r.current||e.length===0)return;const p=r.current.clientWidth,m=Number(l["com/combo-box/selected-data/horizontal-gap"].replace("px",""));let P=0;const k=[];for(let C=0;C<e.length;C++){const w=n.current[C];if(!w)continue;const V=w.offsetWidth;if(P+V+m<=p)k.push(e[C]),P+=V+m;else break}let I=0,y=[];if(e.reduce((C,w,V)=>{if(V<k.length)return C;const $=n.current[V];if(!$)return C;const E=$.offsetWidth;return C+E+m},0)>p)for(let C=k.length;C<e.length;C++){const w=n.current[C];if(!w)continue;const V=w.offsetWidth;if(I+V+m+40<=p)y.push(e[C]),I+=V+m;else break}else y=e.slice(k.length);s(y),a(k),d(e.length-(k.length+y.length))},[e,l]),g=b.useCallback(x=>{t==null||t(x)},[t]),v=b.useCallback(x=>o.some(p=>p.value===x.value)||u.some(p=>p.value===x.value),[o,u]);return b.useLayoutEffect(()=>{const x=()=>{f()};return f(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[f,e]),h.jsxs(so,{ref:r,children:[e.map((x,p)=>h.jsx(Et,{ref:m=>n.current[p]=m,closeIcon:h.jsx(Ft,{icon:h.jsx(wr,{}),variant:"tertiary-invisible",size:"xs"}),$isVisible:v(x),onClose:()=>g(x),children:x.label},`${x.value}-${p}`)),c>0&&h.jsxs(Et,{$isVisible:!0,$isPadding:!0,children:["+",c]})]})};try{Ke.displayName="MultipleValue",Ke.__docgenInfo={description:"",displayName:"MultipleValue",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"FISComboboxOption<T>[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((option: FISComboboxOption<T>) => void)"}}}}}catch{}const Le=b.forwardRef(({options:e,value:t,disabled:r=!1,textLabel:n="",iconLabel:o,required:a,negative:u,message:s,positive:c,multi:d,onChange:l,renderOption:f,onClickIconLabel:g,displayValue:v,...x},p)=>{const[m,P]=b.useState(!1),[k,I]=b.useState(null),[y,O]=b.useState(null),{styles:C,attributes:w}=oo(k,y,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:"fixed"}),V=b.useCallback(()=>{r||P(!m)},[r,m]),$=b.useCallback(S=>t?Array.isArray(t)?t.includes(S.value):t===S.value:!1,[t]),E=b.useCallback(S=>{if(!S.disabled)if(d){const q=Array.isArray(t)?[...t]:[];if(q.indexOf(S.value)>=0){const z=q.filter(F=>F!==S.value);l(z)}else l([...q,S.value])}else l(S.value),P(!1)},[l,d,t]),D=b.useMemo(()=>{if(!t||(e||[]).length===0)return"";if(d){const S=e.filter(q=>t.includes(q.value));return S.length>0?v(S):""}else{const S=e.find(q=>q.value===t);return S?v(S):""}},[e,v,t,d]),T=b.useMemo(()=>d?t.map(S=>e.find(q=>q.value===S)).filter(S=>!!S):[],[e,t]);return b.useEffect(()=>{const S=q=>{k&&!k.contains(q.target)&&y&&!y.contains(q.target)&&P(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[k,y]),h.jsxs(ao,{children:[(n||o)&&h.jsx(Re,{textLabel:n,required:a,iconLabel:o,onClickIconLabel:g}),h.jsx(lo,{ref:I,children:h.jsx(Ne,{...x,ref:p,sizeInput:"md",typeSuffix:"icon",readOnly:!0,iconSuffix:m?h.jsx($r,{}):h.jsx(Cr,{}),value:D,negative:u,disabled:r,activeDropdown:m,onFocus:V,onClickSuffix:V})}),d&&h.jsx(Ke,{options:T,onRemove:E}),s&&h.jsx(it,{className:L({disabled:r,negative:u,positive:c}),children:s}),m&&h.jsx(Ue,{children:h.jsx(co,{ref:O,style:{...C.popper,width:k==null?void 0:k.offsetWidth},...w.popper,children:e.length===0?h.jsx(uo,{children:"Không có dữ liệu"}):e.map((S,q)=>h.jsx(fo,{$isSelected:$(S),$isDisabled:S.disabled,onClick:()=>E(S),children:f?f(S):S.description?h.jsxs(po,{children:[h.jsx(mo,{children:S.label}),h.jsx(vo,{children:S.description})]}):S.label},q))})})]})});Le.displayName="FISCombobox";const Oi=Le;try{Le.displayName="FISCombobox",Le.__docgenInfo={description:"",displayName:"FISCombobox",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"FISComboboxOption<string>[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: FISComboboxOption<string>) => ReactNode)"}},multi:{defaultValue:null,description:"",name:"multi",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"((value: FISComboboxOption<string>) => string) | ((value: FISComboboxOption<string>[]) => string)"}}}}}catch{}export{Oi as F,Si as a,Ne as b,$i as c,Ci as d};
