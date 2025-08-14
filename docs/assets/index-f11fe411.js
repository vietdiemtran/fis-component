import{j as u}from"./jsx-runtime-47c18db8.js";import{c as Z}from"./index-d16835b1.js";import{r as v,g as dn,R as Je}from"./index-d806aa85.js";import{r as At}from"./index-35a52d1c.js";import{T as pn,p as fn,A as Bt,q as Wt,k as mn,r as vn,s as gn,m as $t,t as hn,N as bn,u as xn,v as yn}from"./LineArrowsUp-f9d28287.js";import{F as Ce}from"./index-7ba4325e.js";import{d as k,g as r,l as Ye,n as wn}from"./getTheme-624682de.js";import"./index-15c2cb0c.js";import"./index-b5e68206.js";import"./index-fc91568f.js";import{F as Oe}from"./index-96f4e19f.js";import"./index-fcfadd25.js";import"./index-cce59dfd.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-a6ed384e.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-478976a9.js";import"./index-39568251.js";import"./index-63636042.js";import"./index-9a35051c.js";import"./index-6de1cb25.js";import{F as St}from"./index-100e3eb9.js";import{M as kt}from"./index-d06e9207.js";import{F as Ct}from"./index-cb3c771c.js";import"./index-6b2c958e.js";import"./index-1c88f37d.js";import"./index-cc0dda86.js";import"./ToastContext-c563c380.js";import{F as Vt}from"./index-2fc8f5b5.js";import{D as Ht,d as ye}from"./index-e9b8e115.js";import{u as $n,g as Sn}from"./index-a14b58ae.js";import{P as kn}from"./index-721a2c0c.js";import"./index-e07ee9d0.js";import"./FISSorter-98bf8fa6.js";import"./index-8f7cb1ce.js";import{F as Cn}from"./index-8298a7d1.js";import"./index-55d04594.js";import"./index-9d8d5b2b.js";import{F as Vn}from"./index-eca51d54.js";import"./context-34092653.js";var qn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n};const{TimePicker:Pn,RangePicker:In}=Ht,jn=v.forwardRef((e,t)=>v.createElement(In,Object.assign({},e,{picker:"time",mode:void 0,ref:t}))),Ve=v.forwardRef((e,t)=>{var{addon:n,renderExtraFooter:i,variant:o,bordered:a}=e,d=qn(e,["addon","renderExtraFooter","variant","bordered"]);const[s]=$n("timePicker",o,a),c=v.useMemo(()=>{if(i)return i;if(n)return n},[n,i]);return v.createElement(Pn,Object.assign({},d,{mode:void 0,ref:t,renderExtraFooter:c,variant:s}))}),Yt=Sn(Ve,"popupAlign",void 0,"picker");Ve._InternalPanelDoNotUseOrYouWillBeFired=Yt;Ve.RangePicker=jn;Ve._InternalPanelDoNotUseOrYouWillBeFired=Yt;const On=Ve;var qt=function(t){return t.reduce(function(n,i){var o=i[0],a=i[1];return n[o]=a,n},{})},Pt=typeof window<"u"&&window.document&&window.document.createElement?v.useLayoutEffect:v.useEffect,G="top",ne="bottom",re="right",Q="left",at="auto",qe=[G,ne,re,Q],fe="start",Se="end",Dn="clippingParents",Ut="viewport",xe="popper",En="reference",It=qe.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+Se])},[]),Xt=[].concat(qe,[at]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+Se])},[]),zn="beforeRead",Tn="read",Rn="afterRead",Ln="beforeMain",Fn="main",_n="afterMain",Nn="beforeWrite",Mn="write",An="afterWrite",Bn=[zn,Tn,Rn,Ln,Fn,_n,Nn,Mn,An];function oe(e){return e?(e.nodeName||"").toLowerCase():null}function ee(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function pe(e){var t=ee(e).Element;return e instanceof t||e instanceof Element}function te(e){var t=ee(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function lt(e){if(typeof ShadowRoot>"u")return!1;var t=ee(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wn(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var i=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!te(a)||!oe(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(d){var s=o[d];s===!1?a.removeAttribute(d):a.setAttribute(d,s===!0?"":s)}))})}function Hn(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],a=t.attributes[i]||{},d=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:n[i]),s=d.reduce(function(c,p){return c[p]="",c},{});!te(o)||!oe(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(c){o.removeAttribute(c)}))})}}const Yn={name:"applyStyles",enabled:!0,phase:"write",fn:Wn,effect:Hn,requires:["computeStyles"]};function ie(e){return e.split("-")[0]}var de=Math.max,ze=Math.min,me=Math.round;function tt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Kt(){return!/^((?!chrome|android).)*safari/i.test(tt())}function ve(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),o=1,a=1;t&&te(e)&&(o=e.offsetWidth>0&&me(i.width)/e.offsetWidth||1,a=e.offsetHeight>0&&me(i.height)/e.offsetHeight||1);var d=pe(e)?ee(e):window,s=d.visualViewport,c=!Kt()&&n,p=(i.left+(c&&s?s.offsetLeft:0))/o,l=(i.top+(c&&s?s.offsetTop:0))/a,m=i.width/o,g=i.height/a;return{width:m,height:g,top:l,right:p+m,bottom:l+g,left:p,x:p,y:l}}function st(e){var t=ve(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function Gt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&lt(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function le(e){return ee(e).getComputedStyle(e)}function Un(e){return["table","td","th"].indexOf(oe(e))>=0}function ue(e){return((pe(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ue(e){return oe(e)==="html"?e:e.assignedSlot||e.parentNode||(lt(e)?e.host:null)||ue(e)}function jt(e){return!te(e)||le(e).position==="fixed"?null:e.offsetParent}function Xn(e){var t=/firefox/i.test(tt()),n=/Trident/i.test(tt());if(n&&te(e)){var i=le(e);if(i.position==="fixed")return null}var o=Ue(e);for(lt(o)&&(o=o.host);te(o)&&["html","body"].indexOf(oe(o))<0;){var a=le(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Pe(e){for(var t=ee(e),n=jt(e);n&&Un(n)&&le(n).position==="static";)n=jt(n);return n&&(oe(n)==="html"||oe(n)==="body"&&le(n).position==="static")?t:n||Xn(e)||t}function ut(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function we(e,t,n){return de(e,ze(t,n))}function Kn(e,t,n){var i=we(e,t,n);return i>n?n:i}function Qt(){return{top:0,right:0,bottom:0,left:0}}function Jt(e){return Object.assign({},Qt(),e)}function Zt(e,t){return t.reduce(function(n,i){return n[i]=e,n},{})}var Gn=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Jt(typeof t!="number"?t:Zt(t,qe))};function Qn(e){var t,n=e.state,i=e.name,o=e.options,a=n.elements.arrow,d=n.modifiersData.popperOffsets,s=ie(n.placement),c=ut(s),p=[Q,re].indexOf(s)>=0,l=p?"height":"width";if(!(!a||!d)){var m=Gn(o.padding,n),g=st(a),f=c==="y"?G:Q,x=c==="y"?ne:re,y=n.rects.reference[l]+n.rects.reference[c]-d[c]-n.rects.popper[l],h=d[c]-n.rects.reference[c],j=Pe(a),O=j?c==="y"?j.clientHeight||0:j.clientWidth||0:0,z=y/2-h/2,w=m[f],S=O-g[l]-m[x],b=O/2-g[l]/2+z,C=we(w,b,S),$=c;n.modifiersData[i]=(t={},t[$]=C,t.centerOffset=C-b,t)}}function Jn(e){var t=e.state,n=e.options,i=n.element,o=i===void 0?"[data-popper-arrow]":i;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Gt(t.elements.popper,o)&&(t.elements.arrow=o))}const Zn={name:"arrow",enabled:!0,phase:"main",fn:Qn,effect:Jn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ge(e){return e.split("-")[1]}var er={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tr(e,t){var n=e.x,i=e.y,o=t.devicePixelRatio||1;return{x:me(n*o)/o||0,y:me(i*o)/o||0}}function Ot(e){var t,n=e.popper,i=e.popperRect,o=e.placement,a=e.variation,d=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,m=e.isFixed,g=d.x,f=g===void 0?0:g,x=d.y,y=x===void 0?0:x,h=typeof l=="function"?l({x:f,y}):{x:f,y};f=h.x,y=h.y;var j=d.hasOwnProperty("x"),O=d.hasOwnProperty("y"),z=Q,w=G,S=window;if(p){var b=Pe(n),C="clientHeight",$="clientWidth";if(b===ee(n)&&(b=ue(n),le(b).position!=="static"&&s==="absolute"&&(C="scrollHeight",$="scrollWidth")),b=b,o===G||(o===Q||o===re)&&a===Se){w=ne;var V=m&&b===S&&S.visualViewport?S.visualViewport.height:b[C];y-=V-i.height,y*=c?1:-1}if(o===Q||(o===G||o===ne)&&a===Se){z=re;var P=m&&b===S&&S.visualViewport?S.visualViewport.width:b[$];f-=P-i.width,f*=c?1:-1}}var _=Object.assign({position:s},p&&er),I=l===!0?tr({x:f,y},ee(n)):{x:f,y};if(f=I.x,y=I.y,c){var T;return Object.assign({},_,(T={},T[w]=O?"0":"",T[z]=j?"0":"",T.transform=(S.devicePixelRatio||1)<=1?"translate("+f+"px, "+y+"px)":"translate3d("+f+"px, "+y+"px, 0)",T))}return Object.assign({},_,(t={},t[w]=O?y+"px":"",t[z]=j?f+"px":"",t.transform="",t))}function nr(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=i===void 0?!0:i,a=n.adaptive,d=a===void 0?!0:a,s=n.roundOffsets,c=s===void 0?!0:s,p={placement:ie(t.placement),variation:ge(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ot(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:d,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ot(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const rr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:nr,data:{}};var je={passive:!0};function ir(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,a=o===void 0?!0:o,d=i.resize,s=d===void 0?!0:d,c=ee(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(l){l.addEventListener("scroll",n.update,je)}),s&&c.addEventListener("resize",n.update,je),function(){a&&p.forEach(function(l){l.removeEventListener("scroll",n.update,je)}),s&&c.removeEventListener("resize",n.update,je)}}const or={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ir,data:{}};var ar={left:"right",right:"left",bottom:"top",top:"bottom"};function De(e){return e.replace(/left|right|bottom|top/g,function(t){return ar[t]})}var lr={start:"end",end:"start"};function Dt(e){return e.replace(/start|end/g,function(t){return lr[t]})}function ct(e){var t=ee(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function dt(e){return ve(ue(e)).left+ct(e).scrollLeft}function sr(e,t){var n=ee(e),i=ue(e),o=n.visualViewport,a=i.clientWidth,d=i.clientHeight,s=0,c=0;if(o){a=o.width,d=o.height;var p=Kt();(p||!p&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:a,height:d,x:s+dt(e),y:c}}function ur(e){var t,n=ue(e),i=ct(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=de(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),d=de(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+dt(e),c=-i.scrollTop;return le(o||n).direction==="rtl"&&(s+=de(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:d,x:s,y:c}}function pt(e){var t=le(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function en(e){return["html","body","#document"].indexOf(oe(e))>=0?e.ownerDocument.body:te(e)&&pt(e)?e:en(Ue(e))}function $e(e,t){var n;t===void 0&&(t=[]);var i=en(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),a=ee(i),d=o?[a].concat(a.visualViewport||[],pt(i)?i:[]):i,s=t.concat(d);return o?s:s.concat($e(Ue(d)))}function nt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cr(e,t){var n=ve(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Et(e,t,n){return t===Ut?nt(sr(e,n)):pe(t)?cr(t,n):nt(ur(ue(e)))}function dr(e){var t=$e(Ue(e)),n=["absolute","fixed"].indexOf(le(e).position)>=0,i=n&&te(e)?Pe(e):e;return pe(i)?t.filter(function(o){return pe(o)&&Gt(o,i)&&oe(o)!=="body"}):[]}function pr(e,t,n,i){var o=t==="clippingParents"?dr(e):[].concat(t),a=[].concat(o,[n]),d=a[0],s=a.reduce(function(c,p){var l=Et(e,p,i);return c.top=de(l.top,c.top),c.right=ze(l.right,c.right),c.bottom=ze(l.bottom,c.bottom),c.left=de(l.left,c.left),c},Et(e,d,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function tn(e){var t=e.reference,n=e.element,i=e.placement,o=i?ie(i):null,a=i?ge(i):null,d=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case G:c={x:d,y:t.y-n.height};break;case ne:c={x:d,y:t.y+t.height};break;case re:c={x:t.x+t.width,y:s};break;case Q:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var p=o?ut(o):null;if(p!=null){var l=p==="y"?"height":"width";switch(a){case fe:c[p]=c[p]-(t[l]/2-n[l]/2);break;case Se:c[p]=c[p]+(t[l]/2-n[l]/2);break}}return c}function ke(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=i===void 0?e.placement:i,a=n.strategy,d=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?Dn:s,p=n.rootBoundary,l=p===void 0?Ut:p,m=n.elementContext,g=m===void 0?xe:m,f=n.altBoundary,x=f===void 0?!1:f,y=n.padding,h=y===void 0?0:y,j=Jt(typeof h!="number"?h:Zt(h,qe)),O=g===xe?En:xe,z=e.rects.popper,w=e.elements[x?O:g],S=pr(pe(w)?w:w.contextElement||ue(e.elements.popper),c,l,d),b=ve(e.elements.reference),C=tn({reference:b,element:z,strategy:"absolute",placement:o}),$=nt(Object.assign({},z,C)),V=g===xe?$:b,P={top:S.top-V.top+j.top,bottom:V.bottom-S.bottom+j.bottom,left:S.left-V.left+j.left,right:V.right-S.right+j.right},_=e.modifiersData.offset;if(g===xe&&_){var I=_[o];Object.keys(P).forEach(function(T){var N=[re,ne].indexOf(T)>=0?1:-1,W=[G,ne].indexOf(T)>=0?"y":"x";P[T]+=I[W]*N})}return P}function fr(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=n.boundary,a=n.rootBoundary,d=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=c===void 0?Xt:c,l=ge(i),m=l?s?It:It.filter(function(x){return ge(x)===l}):qe,g=m.filter(function(x){return p.indexOf(x)>=0});g.length===0&&(g=m);var f=g.reduce(function(x,y){return x[y]=ke(e,{placement:y,boundary:o,rootBoundary:a,padding:d})[ie(y)],x},{});return Object.keys(f).sort(function(x,y){return f[x]-f[y]})}function mr(e){if(ie(e)===at)return[];var t=De(e);return[Dt(e),t,Dt(t)]}function vr(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,d=n.altAxis,s=d===void 0?!0:d,c=n.fallbackPlacements,p=n.padding,l=n.boundary,m=n.rootBoundary,g=n.altBoundary,f=n.flipVariations,x=f===void 0?!0:f,y=n.allowedAutoPlacements,h=t.options.placement,j=ie(h),O=j===h,z=c||(O||!x?[De(h)]:mr(h)),w=[h].concat(z).reduce(function(K,q){return K.concat(ie(q)===at?fr(t,{placement:q,boundary:l,rootBoundary:m,padding:p,flipVariations:x,allowedAutoPlacements:y}):q)},[]),S=t.rects.reference,b=t.rects.popper,C=new Map,$=!0,V=w[0],P=0;P<w.length;P++){var _=w[P],I=ie(_),T=ge(_)===fe,N=[G,ne].indexOf(I)>=0,W=N?"width":"height",L=ke(t,{placement:_,boundary:l,rootBoundary:m,altBoundary:g,padding:p}),M=N?T?re:Q:T?ne:G;S[W]>b[W]&&(M=De(M));var E=De(M),D=[];if(a&&D.push(L[I]<=0),s&&D.push(L[M]<=0,L[E]<=0),D.every(function(K){return K})){V=_,$=!1;break}C.set(_,D)}if($)for(var A=x?3:1,Y=function(q){var B=w.find(function(J){var R=C.get(J);if(R)return R.slice(0,q).every(function(H){return H})});if(B)return V=B,"break"},F=A;F>0;F--){var U=Y(F);if(U==="break")break}t.placement!==V&&(t.modifiersData[i]._skip=!0,t.placement=V,t.reset=!0)}}const gr={name:"flip",enabled:!0,phase:"main",fn:vr,requiresIfExists:["offset"],data:{_skip:!1}};function zt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Tt(e){return[G,re,ne,Q].some(function(t){return e[t]>=0})}function hr(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,d=ke(t,{elementContext:"reference"}),s=ke(t,{altBoundary:!0}),c=zt(d,i),p=zt(s,o,a),l=Tt(c),m=Tt(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const br={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hr};function xr(e,t,n){var i=ie(e),o=[Q,G].indexOf(i)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,d=a[0],s=a[1];return d=d||0,s=(s||0)*o,[Q,re].indexOf(i)>=0?{x:s,y:d}:{x:d,y:s}}function yr(e){var t=e.state,n=e.options,i=e.name,o=n.offset,a=o===void 0?[0,0]:o,d=Xt.reduce(function(l,m){return l[m]=xr(m,t.rects,a),l},{}),s=d[t.placement],c=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[i]=d}const wr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yr};function $r(e){var t=e.state,n=e.name;t.modifiersData[n]=tn({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Sr={name:"popperOffsets",enabled:!0,phase:"read",fn:$r,data:{}};function kr(e){return e==="x"?"y":"x"}function Cr(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,a=o===void 0?!0:o,d=n.altAxis,s=d===void 0?!1:d,c=n.boundary,p=n.rootBoundary,l=n.altBoundary,m=n.padding,g=n.tether,f=g===void 0?!0:g,x=n.tetherOffset,y=x===void 0?0:x,h=ke(t,{boundary:c,rootBoundary:p,padding:m,altBoundary:l}),j=ie(t.placement),O=ge(t.placement),z=!O,w=ut(j),S=kr(w),b=t.modifiersData.popperOffsets,C=t.rects.reference,$=t.rects.popper,V=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,P=typeof V=="number"?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),_=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(b){if(a){var T,N=w==="y"?G:Q,W=w==="y"?ne:re,L=w==="y"?"height":"width",M=b[w],E=M+h[N],D=M-h[W],A=f?-$[L]/2:0,Y=O===fe?C[L]:$[L],F=O===fe?-$[L]:-C[L],U=t.elements.arrow,K=f&&U?st(U):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Qt(),B=q[N],J=q[W],R=we(0,C[L],K[L]),H=z?C[L]/2-A-R-B-P.mainAxis:Y-R-B-P.mainAxis,X=z?-C[L]/2+A+R+J+P.mainAxis:F+R+J+P.mainAxis,Ge=t.elements.arrow&&Pe(t.elements.arrow),an=Ge?w==="y"?Ge.clientTop||0:Ge.clientLeft||0:0,ft=(T=_==null?void 0:_[w])!=null?T:0,ln=M+H-ft-an,sn=M+X-ft,mt=we(f?ze(E,ln):E,M,f?de(D,sn):D);b[w]=mt,I[w]=mt-M}if(s){var vt,un=w==="x"?G:Q,cn=w==="x"?ne:re,ce=b[S],Ie=S==="y"?"height":"width",gt=ce+h[un],ht=ce-h[cn],Qe=[G,Q].indexOf(j)!==-1,bt=(vt=_==null?void 0:_[S])!=null?vt:0,xt=Qe?gt:ce-C[Ie]-$[Ie]-bt+P.altAxis,yt=Qe?ce+C[Ie]+$[Ie]-bt-P.altAxis:ht,wt=f&&Qe?Kn(xt,ce,yt):we(f?xt:gt,ce,f?yt:ht);b[S]=wt,I[S]=wt-ce}t.modifiersData[i]=I}}const Vr={name:"preventOverflow",enabled:!0,phase:"main",fn:Cr,requiresIfExists:["offset"]};function qr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Pr(e){return e===ee(e)||!te(e)?ct(e):qr(e)}function Ir(e){var t=e.getBoundingClientRect(),n=me(t.width)/e.offsetWidth||1,i=me(t.height)/e.offsetHeight||1;return n!==1||i!==1}function jr(e,t,n){n===void 0&&(n=!1);var i=te(t),o=te(t)&&Ir(t),a=ue(t),d=ve(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&((oe(t)!=="body"||pt(a))&&(s=Pr(t)),te(t)?(c=ve(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=dt(a))),{x:d.left+s.scrollLeft-c.x,y:d.top+s.scrollTop-c.y,width:d.width,height:d.height}}function Or(e){var t=new Map,n=new Set,i=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var d=[].concat(a.requires||[],a.requiresIfExists||[]);d.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),i.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),i}function Dr(e){var t=Or(e);return Bn.reduce(function(n,i){return n.concat(t.filter(function(o){return o.phase===i}))},[])}function Er(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function zr(e){var t=e.reduce(function(n,i){var o=n[i.name];return n[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,n},{});return Object.keys(t).map(function(n){return t[n]})}var Rt={placement:"bottom",modifiers:[],strategy:"absolute"};function Lt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Tr(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,i=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?Rt:o;return function(s,c,p){p===void 0&&(p=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Rt,a),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},m=[],g=!1,f={state:l,setOptions:function(j){var O=typeof j=="function"?j(l.options):j;y(),l.options=Object.assign({},a,l.options,O),l.scrollParents={reference:pe(s)?$e(s):s.contextElement?$e(s.contextElement):[],popper:$e(c)};var z=Dr(zr([].concat(i,l.options.modifiers)));return l.orderedModifiers=z.filter(function(w){return w.enabled}),x(),f.update()},forceUpdate:function(){if(!g){var j=l.elements,O=j.reference,z=j.popper;if(Lt(O,z)){l.rects={reference:jr(O,Pe(z),l.options.strategy==="fixed"),popper:st(z)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(P){return l.modifiersData[P.name]=Object.assign({},P.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var S=l.orderedModifiers[w],b=S.fn,C=S.options,$=C===void 0?{}:C,V=S.name;typeof b=="function"&&(l=b({state:l,options:$,name:V,instance:f})||l)}}}},update:Er(function(){return new Promise(function(h){f.forceUpdate(),h(l)})}),destroy:function(){y(),g=!0}};if(!Lt(s,c))return f;f.setOptions(p).then(function(h){!g&&p.onFirstUpdate&&p.onFirstUpdate(h)});function x(){l.orderedModifiers.forEach(function(h){var j=h.name,O=h.options,z=O===void 0?{}:O,w=h.effect;if(typeof w=="function"){var S=w({state:l,name:j,instance:f,options:z}),b=function(){};m.push(S||b)}})}function y(){m.forEach(function(h){return h()}),m=[]}return f}}var Rr=[or,Sr,rr,Yn,wr,gr,Vr,Zn,br],Lr=Tr({defaultModifiers:Rr}),Fr=typeof Element<"u",_r=typeof Map=="function",Nr=typeof Set=="function",Mr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ee(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!Ee(e[i],t[i]))return!1;return!0}var a;if(_r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;for(a=e.entries();!(i=a.next()).done;)if(!Ee(i.value[1],t.get(i.value[0])))return!1;return!0}if(Nr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;return!0}if(Mr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;if(Fr&&e instanceof Element)return!1;for(i=n;i--!==0;)if(!((o[i]==="_owner"||o[i]==="__v"||o[i]==="__o")&&e.$$typeof)&&!Ee(e[o[i]],t[o[i]]))return!1;return!0}return e!==e&&t!==t}var Ar=function(t,n){try{return Ee(t,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const Br=dn(Ar);var Wr=[],nn=function(t,n,i){i===void 0&&(i={});var o=v.useRef(null),a={onFirstUpdate:i.onFirstUpdate,placement:i.placement||"bottom",strategy:i.strategy||"absolute",modifiers:i.modifiers||Wr},d=v.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=d[0],c=d[1],p=v.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var x=f.state,y=Object.keys(x.elements);At.flushSync(function(){c({styles:qt(y.map(function(h){return[h,x.styles[h]||{}]})),attributes:qt(y.map(function(h){return[h,x.attributes[h]]}))})})},requires:["computeStyles"]}},[]),l=v.useMemo(function(){var g={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[p,{name:"applyStyles",enabled:!1}])};return Br(o.current,g)?o.current||g:(o.current=g,g)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,p]),m=v.useRef();return Pt(function(){m.current&&m.current.setOptions(l)},[l]),Pt(function(){if(!(t==null||n==null)){var g=i.createPopper||Lr,f=g(t,n,l);return m.current=f,function(){f.destroy(),m.current=null}}},[t,n,i.createPopper]),{state:m.current?m.current.state:null,styles:s.styles,attributes:s.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}};const Hr=k.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
  width: 100%;
`,Yr=k.span`
  ${r("Subheading/XS")}
  color: ${r("com/input/character-limit/label/default/color-text")};
  padding-right: ${r("com/input/character-limit/horizontal-padding")};
  padding-left: ${r("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${r("com/input/character-limit/label/over-limit/color-text")};
  }
`,rn=k.div`
  display: flex;
  justify-content: space-between;
`,Xe=k.span`
  ${r("Paragraph/XS")}
  color: ${r("com/input/hint/neutral/label/color-text")};
  padding-top: ${r("com/input/hint/top-padding")};

  &.negative {
    color: ${r("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${r("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${r("com/input/hint/disable/label/color-text")};
  }
`,Ur=k.div`
  display: flex;
  flex-direction: column;
  width: unset;
  min-width: ${r("com/menu/min-width")};
  max-height: ${({$maxHeight:e})=>e?typeof e=="number"?`${e}px`:e:r("com/menu/max-height")};
  border-radius: ${r("com/menu/corner-radius")};
  border: ${r("com/menu/border/stroke-width")} solid
    ${r("com/menu/border/color-stroke")};
  padding-top: ${r("com/menu/top-padding")};
  padding-bottom: ${r("com/menu/bottom-padding")};
  padding-left: ${r("com/menu/left-padding")};
  padding-right: ${r("com/menu/right-padding")};
  gap: ${r("com/menu/item/horizontal-gap")};
  background-color: ${r("com/menu/background-color")};
  box-shadow: ${r("Elevation/Level-2")};
`,Ze=k.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r("com/menu/item/horizontal-gap")};
`,Ft=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,et=k.p`
  margin: 0;
  ${r("Paragraph/Sm")}
  color: ${r("com/menu/item/action/label/color-text/default")};
`;k.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;const _t=k.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/menu/item/horizontal-gap")};
  /* min-width: ${r("com/menu/item/min-width")}; */
  min-height: ${r("com/menu/item/size-md/min-height")};
  background-color: ${r("com/menu/item/action/background-color/default")};
`,Xr=k.div`
  padding-bottom: ${r("com/alert-banner/bottom-padding")};
`,Kr=k.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% + ${r("com/scrollbar/thumb/thumb-width/default")});
  position: relative;

  ${({$removeSelectedGroup:e})=>e&&Ye`
      margin-bottom: calc(
        ${r("com/menu/item/size-md/min-height")} + 2 *
          ${r("com/menu/bottom-padding")}
      );
    `}

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 8px;
    border-radius: ${r("sem/dimension/radius/component/round")};
    margin-top: 40px;
  }

  &::-webkit-scrollbar-thumb {
    height: 8px;
    background-color: ${r("com/scrollbar/thumb/background-color/default")};
    border-radius: ${r("sem/dimension/radius/component/round")};
    margin-top: 40px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,Gr=k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${r("sem/color/background/neutral/canvas/default")};
  box-shadow: 0px -4px 32px -8px
    ${r("pri/elevation/shadow-ambient/color/sm")};
  padding: 8px;
  border: 1px solid ${r("com/menu/border/color-stroke")};
  border-top: none;
  border-bottom-left-radius: ${r("com/menu/corner-radius")};
  border-bottom-right-radius: ${r("com/menu/corner-radius")};
`;k.span`
  ${r("Subheading/XS")}
  color: ${r("com/menu/group-label/color-text")};
  padding-top: ${r("com/menu/group-label/vertical-padding")};
  padding-right: ${r("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${r("com/menu/group-label/vertical-padding")};
  padding-left: ${r("com/menu/group-label/horizontal-padding")};
  margin: 0;
`;const ae=k.input`
  height: calc(
    ${r("com/input/field/size-md/height")} - 2 *
      ${r("com/input/field/stroke-width")}
  );
  width: 100%;
  ${r("Paragraph/Sm")}
  color: ${r("com/input/field/default/label/color-text/inputed")};
  caret-color: ${r("com/typing-cursor/default")};
  border: none;
  background: transparent;
  outline: none;
  cursor: ${e=>e.$isPointer?"pointer":"text"};
  padding-right: calc(
    ${r("com/input/field/size-md/label/sub-spacing")} +
      ${r("com/input/field/right-padding")}
  );
  padding-left: calc(
    ${r("com/input/field/size-md/label/sub-spacing")} +
      ${r("com/input/field/left-padding")}
  );
  border-radius: ${r("com/input/field/size-md/corner-radius")};

  &.prefix {
    padding-right: ${r("com/input/field/size-md/label/sub-spacing")};
    padding-left: ${r("com/input/field/size-md/label/sub-spacing")};
    border-radius: 0 ${r("com/input/field/size-md/corner-radius")}
      ${r("com/input/field/size-md/corner-radius")} 0;
  }

  &.suffix {
    padding-right: ${r("com/input/field/size-md/label/sub-spacing")};
    padding-left: ${r("com/input/field/size-md/label/sub-spacing")};
    border-radius: 0;
  }

  &.input-text-lg {
    height: calc(
      ${r("com/input/field/size-lg/height")} - 2 *
        ${r("com/input/field/stroke-width")}
    );
    padding-right: calc(
      ${r("com/input/field/size-lg/label/sub-spacing")} +
        ${r("com/input/field/right-padding")}
    );
    padding-left: calc(
      ${r("com/input/field/size-lg/label/sub-spacing")} +
        ${r("com/input/field/left-padding")}
    );
    border-radius: ${r("com/input/field/size-lg/corner-radius")};

    &.prefix {
      padding-right: ${r("com/input/field/size-lg/label/sub-spacing")};
      padding-left: ${r("com/input/field/size-lg/label/sub-spacing")};
      border-radius: 0 ${r("com/input/field/size-lg/corner-radius")}
        ${r("com/input/field/size-lg/corner-radius")} 0;
    }

    &.suffix {
      padding-right: ${r("com/input/field/size-lg/label/sub-spacing")};
      padding-left: ${r("com/input/field/size-lg/label/sub-spacing")};
      border-radius: 0;
    }
  }

  &::placeholder {
    color: ${r("com/input/field/default/label/color-text/placeholder")};
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &:read-only {
    cursor: default;
    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &.negative {
    color: ${r("com/input/field/negative/label/color-text/inputed")};
    caret-color: ${r("com/typing-cursor/negative")};
  }
`,se=k.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${r("com/input/field/size-md/icon/left-padding")};
  color: ${r("com/input/field/default/icon/color-icon/default")};

  &.input-text-lg {
    margin-left: ${r("com/input/field/size-lg/icon/left-padding")};
  }
`,Te=k.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/suffix/icon/color-icon")};
  width: ${r("com/input/suffix/icon/size-icon")};
  height: ${r("com/input/suffix/icon/size-icon")};
`,Re=k.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/prefix/icon/color-icon")};
  width: ${r("com/input/prefix/icon/size-icon")};
  height: ${r("com/input/prefix/icon/size-icon")};
`,he=k.span`
  ${r("Paragraph/XS")};
  color: ${r("com/input/dropdown/label/color-text/default")};
`,be=k.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/dropdown/icon/color-icon/default")};
`,Qr=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${r("com/input/dropdown/horizontal-gap")};
  padding-left: calc(
    ${r("com/input/dropdown/horizontal-padding")} -
      ${r("com/input/dropdown/divider/stroke-width")}
  );
  padding-right: ${r("com/input/dropdown/horizontal-padding")};
  border-left: ${r("com/input/dropdown/divider/stroke-width")} solid
    ${r("com/input/suffix/divider/color-stroke")};
  border-top-right-radius: ${r("com/input/field/size-md/corner-radius")};
  border-bottom-right-radius: ${r("com/input/field/size-md/corner-radius")};
  background-color: ${r("com/input/dropdown/background/default")};
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &.input-text-lg {
    border-top-right-radius: ${r("com/input/field/size-lg/corner-radius")};
    border-bottom-right-radius: ${r("com/input/field/size-lg/corner-radius")};

    &:focus {
      border-radius: ${r("com/input/field/size-lg/corner-radius")};
    }
  }

  &:hover {
    background-color: ${r("com/input/dropdown/background/hover")};
    ${he} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${be} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${r("com/input/dropdown/background/pressed")};

    ${he} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${be} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${r("com/focus-mark/gap-spacing")}
        ${r("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${r("com/focus-mark/color-stroke")};
  }

  &.active-dropdown {
    background-color: ${r("com/input/dropdown/background/actived")};
    outline: ${r("com/actived-mark/gap-spacing")} solid
      ${r("com/actived-mark/color-gap-spacing")};
  }

  &.disabled {
    cursor: not-allowed;
  }
`,Jr=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${r("com/input/dropdown/horizontal-gap")};
  padding-left: calc(
    ${r("com/input/dropdown/horizontal-padding")} -
      ${r("com/input/dropdown/divider/stroke-width")}
  );
  padding-right: ${r("com/input/dropdown/horizontal-padding")};
  border-right: ${r("com/input/dropdown/divider/stroke-width")} solid
    ${r("com/input/suffix/divider/color-stroke")};
  border-top-left-radius: ${r("com/input/field/size-md/corner-radius")};
  border-bottom-left-radius: ${r("com/input/field/size-md/corner-radius")};
  background-color: ${r("com/input/dropdown/background/default")};
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &.input-text-lg {
    border-top-left-radius: ${r("com/input/field/size-lg/corner-radius")};
    border-bottom-left-radius: ${r("com/input/field/size-lg/corner-radius")};

    &:focus {
      border-radius: ${r("com/input/field/size-lg/corner-radius")};
    }
  }

  &:hover {
    background-color: ${r("com/input/dropdown/background/hover")};
    ${he} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${be} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${r("com/input/dropdown/background/pressed")};

    ${he} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${be} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:focus {
    box-shadow:
      0 0 0 ${r("com/focus-mark/gap-spacing")}
        ${r("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${r("com/focus-mark/color-stroke")};
  }

  &.active-dropdown {
    background-color: ${r("com/input/dropdown/background/actived")};
    outline: ${r("com/actived-mark/gap-spacing")} solid
      ${r("com/actived-mark/color-gap-spacing")};
  }

  &.disabled {
    cursor: not-allowed;
  }
`,Zr=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${r("com/input/suffix/horizontal-gap")};
  padding-left: ${r("com/input/suffix/left-padding")};
  padding-right: ${r("com/input/suffix/right-padding")};
  border-left: ${r("com/input/suffix/divider/stroke-width")} solid
    ${r("com/input/suffix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
`,ei=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${r("com/input/prefix/horizontal-gap")};
  padding-left: ${r("com/input/prefix/left-padding")};
  padding-right: ${r("com/input/prefix/right-padding")};
  border-right: ${r("com/input/prefix/divider/stroke-width")} solid
    ${r("com/input/prefix/divider/color-stroke")};
  height: 100%;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
`,rt=k.span`
  ${r("Paragraph/Sm")};
  color: ${r("com/input/suffix/label/color-text")};
`,it=k.span`
  ${r("Paragraph/Sm")};
  color: ${r("com/input/prefix/label/color-text")};
`,ti=k.div`
  height: ${r("com/input/field/size-md/height")};
  min-height: ${r("com/input/field/size-md/height")};
  max-height: ${r("com/input/field/size-md/height")};
  border-radius: ${r("com/input/field/size-md/corner-radius")};
  outline: ${r("com/input/field/stroke-width")} solid
    ${r("com/input/field/default/border/default")};
  outline-offset: -${r("com/input/field/stroke-width")};
  background-color: ${r("com/input/field/default/background/default")};
  padding-right: 0;
  padding-left: 0;

  display: flex;
  align-items: center;

  &.iconPrefix {
    padding-right: ${r("com/input/field/right-padding")};
    padding-left: ${r("com/input/field/left-padding")};
  }

  &.suffix {
    padding-right: ${r("com/input/field/right-padding")};
    padding-left: ${r("com/input/field/left-padding")};
  }

  &.prefix {
    padding-right: ${r("com/input/field/right-padding")};
    padding-left: ${r("com/input/field/left-padding")};
  }

  &.iconSuffix {
    padding-right: 0;
    padding-left: ${r("com/input/field/left-padding")};
  }

  &.dropdownSuffix {
    padding-right: 0;
  }

  &.dropdownPrefix {
    padding-left: 0;
  }

  .icon-suffix {
    flex-shrink: 0;
    color: ${r("com/button/tertiary/icon/color-icon/default")};
  }

  &.negative {
    color: ${r("com/input/character-limit/label/over-limit/color-text")};
  }

  &.input-text-lg {
    height: ${r("com/input/field/size-lg/height")};
    min-height: ${r("com/input/field/size-lg/height")};
    max-height: ${r("com/input/field/size-lg/height")};
    border-radius: ${r("com/input/field/size-lg/corner-radius")};
  }

  &.icon-suffix {
    pointer-events: auto;
  }

  &:has(${ae}:disabled) {
    outline-color: ${r("com/input/field/disable/stroke-color")};
    background-color: ${r("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${ae} {
      cursor: not-allowed;
    }

    ${se} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }
    ${Te} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }
    ${Re} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }

    .icon-suffix {
      pointer-events: none;
      color: ${r("com/button/disable/icon-color")};
      cursor: not-allowed;
    }

    ${it} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: not-allowed;
    }
    ${rt} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &:has(${ae}:read-only):not(:has(${ae}:disabled)) {
    cursor: default;
    outline-color: ${r("com/input/field/disable/stroke-color")};
    background-color: ${r("com/input/field/disable/background-color")};

    ${ae} {
      cursor: default;
    }

    ${se} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: default;
    }
    ${Te} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: default;
    }
    ${Re} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: default;
    }

    .icon-suffix {
      pointer-events: none;
      color: ${r("com/button/disable/icon-color")};
      cursor: default;
    }

    ${it} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: default;
    }
    ${rt} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: default;
    }

    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &:hover:not(:has(${ae}:disabled)):not(:has(.icon-suffix:hover)) {
    outline-color: ${r("com/input/field/default/border/hover")};
    background-color: ${r("com/input/field/default/background/hover")};

    ${se} {
      color: ${r("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${ae}:focus) {
    outline-color: ${r("com/input/field/default/border/active")};
    background-color: ${r("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${r("com/actived-mark/gap-spacing")}
      ${r("com/actived-mark/color-gap-spacing")};

    ${se} {
      color: ${r("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.negative {
    outline-color: ${r("com/input/field/negative/border/default")};
    background-color: ${r("com/input/field/negative/background/default")};

    ${se} {
      color: ${r("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover {
      outline-color: ${r("com/input/field/negative/border/hover")};
      background-color: ${r("com/input/field/negative/background/hover")};

      ${se} {
        color: ${r("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &:has(${ae}:focus) {
      outline-color: ${r("com/input/field/negative/border/active")};
      background-color: ${r("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${r("com/actived-mark/gap-spacing")}
        ${r("com/actived-mark/color-gap-spacing-negative")};

      ${se} {
        color: ${r("com/input/field/negative/icon/color-icon/active")};
      }
    }

    &::placeholder {
      color: ${r("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,ni=k.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
  width: 100%;
`,ri=k.div`
  display: flex;
  justify-content: space-between;
`,ii=k.span`
  ${r("Paragraph/XS")}
  color: ${r("com/input/hint/neutral/label/color-text")};
  padding-top: ${r("com/input/hint/top-padding")};

  &.negative {
    color: ${r("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${r("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${r("com/input/hint/disable/label/color-text")};
  }
`,oi=k(On)`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,ai=k.div`
  position: relative;
  width: 100%;
`,Le=v.forwardRef((e,t)=>{const{className:n,textLabel:i="",iconLabel:o,required:a,message:d,negative:s,positive:c,format:p="HH:mm:ss",disabled:l,onChange:m,onClickIconLabel:g,getPopupContainer:f,...x}=e,[y,h]=v.useState(""),[j,O]=v.useState(null),[z,w]=v.useState(!1),S=v.useRef(null),b=v.useRef(null);v.useEffect(()=>{const I=T=>{var W;const N=T.target;S.current&&!S.current.contains(N)&&!((W=document.querySelector(".ant-picker-dropdown"))!=null&&W.contains(N))&&w(!1)};return z&&document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}},[z]);const C=I=>{m==null||m(I?I.toDate():null),O(I),h(I?I.format(p):""),w(!1)},$=I=>{const T=I.target.value;h(T);const N=ye(T,p,!0);N.isValid()?(m==null||m(N.toDate()),O(N)):(m==null||m(null),O(null))},V=()=>{l||w(!0)},P=I=>{w(I)},_=I=>{I.key==="Escape"&&w(!1)};return u.jsxs(ni,{className:n,ref:S,children:[(i||o)&&u.jsx(Ce,{textLabel:i,required:a,iconLabel:o,onClickIconLabel:g}),u.jsxs(ai,{children:[u.jsx(Ke,{...x,ref:t,typeSuffix:"icon",iconSuffix:u.jsx(pn,{}),negative:s,disabled:l,value:y,onChange:$,onFocus:V,onClickSuffix:V,onKeyDown:_}),u.jsx(oi,{ref:b,format:p,value:j,onChange:C,open:z,onOpenChange:P,getPopupContainer:f,showNow:!0,inputReadOnly:!0})]}),d&&u.jsx(ri,{children:u.jsx(ii,{className:Z({disabled:l,negative:s,positive:c}),children:d})})]})});Le.displayName="FISInputTime";const yo=Le;try{Le.displayName="FISInputTime",Le.__docgenInfo={description:"",displayName:"FISInputTime",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const li=k.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,si=k.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ui=k(Ht)`
  top: 0;
  background-color: red;
  position: absolute;
  height: 100%;
  opacity: 0;
  z-index: -1;
`;function ci(...e){return t=>{e.forEach(n=>{n&&(typeof n=="function"?n(t):typeof n=="object"&&"current"in n&&(n.current=t))})}}const Fe=v.forwardRef((e,t)=>{const{className:n,value:i,textLabel:o="",iconLabel:a,required:d,message:s="",disabled:c,negative:p,positive:l,format:m,onClickIconLabel:g,onChange:f,getPopupContainer:x,minDate:y,maxDate:h,picker:j="date",allowClear:O=!0,showToday:z=!0,showTime:w=!1,autoFocus:S=!1,disabledDate:b,inputReadOnly:C=!1,...$}=e,P=m||(F=>{switch(F){case"year":return"YYYY";case"month":return"MM/YYYY";case"quarter":return"YYYY-[Q]Q";case"date":default:return"DD/MM/YYYY"}})(j),[_,I]=v.useState(!1),[T,N]=v.useState(i?ye(i).format(P):""),[W,L]=v.useState(i?ye(i):null),M=v.useRef(null),E=ci(M,t);v.useEffect(()=>{if(i){const F=ye(i);L(F),N(F.format(P))}else L(null),N("")},[i,P]);const D=F=>{I(F)},A=F=>{const U=F?F.toDate():null;L(F),N(F?F.format(P):""),f==null||f(U),I(!1)},Y=F=>{if(C)return;const U=F.target.value;N(U);const K=ye(U,P);K.isValid()?(L(K),f==null||f(K.toDate())):(L(null),f==null||f(null))};return u.jsxs(li,{className:n,children:[(o||a)&&u.jsx(Ce,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:g}),u.jsxs(si,{children:[u.jsx(Ke,{...$,ref:E,typeSuffix:"icon",iconSuffix:u.jsx(fn,{}),value:T,negative:p,disabled:c,placeholder:$.placeholder,readOnly:C,autoFocus:S,onFocus:()=>I(!0),onChange:Y,onClickSuffix:()=>I(!0)}),u.jsx(ui,{open:_,value:W,onChange:F=>A(F),onOpenChange:D,format:P,getPopupContainer:x,minDate:y,maxDate:h,picker:j,allowClear:O,showToday:z,showTime:w,disabledDate:b})]}),s&&u.jsx(rn,{children:u.jsx(Xe,{className:Z({disabled:c,negative:p,positive:l}),children:s})})]})});Fe.displayName="FISInputDate";const wo=Fe;try{Fe.displayName="FISInputDate",Fe.__docgenInfo={description:"",displayName:"FISInputDate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Date value",name:"value",required:!1,type:{name:"Date | null"}},format:{defaultValue:null,description:"Format Date",name:"format",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle on change action",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},getPopupContainer:{defaultValue:null,description:`Function that returns the HTML element to render the popup container into.
Useful for controlling where the date picker dropdown is attached in the DOM.`,name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement)"}},minDate:{defaultValue:null,description:"The minimum selectable date. Dates before this value will be disabled.",name:"minDate",required:!1,type:{name:"Dayjs"}},maxDate:{defaultValue:null,description:"The maximum selectable date. Dates after this value will be disabled.",name:"maxDate",required:!1,type:{name:"Dayjs"}},picker:{defaultValue:null,description:`Picker mode - determines what user can select
- "date": Full date picker (default)
- "month": Month picker only
- "year": Year picker only
- "quarter": Quarter picker only`,name:"picker",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"month"'},{value:'"quarter"'},{value:'"year"'}]}},allowClear:{defaultValue:null,description:"Allow clear functionality",name:"allowClear",required:!1,type:{name:"boolean"}},showToday:{defaultValue:null,description:"Show today button",name:"showToday",required:!1,type:{name:"boolean"}},showTime:{defaultValue:null,description:"Show time selection",name:"showTime",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Auto focus when component mounted",name:"autoFocus",required:!1,type:{name:"boolean"}},disabledDate:{defaultValue:null,description:"Disabled date function",name:"disabledDate",required:!1,type:{name:"((current: Dayjs) => boolean)"}},inputReadOnly:{defaultValue:null,description:"Custom input format",name:"inputReadOnly",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Nt="portal-fis-component";function di(){let e=document.getElementById(Nt);return e||(e=document.createElement("div"),e.setAttribute("id",Nt),document.body.appendChild(e))}function _e({container:e,children:t,portal:n}){const[i,o]=v.useState(null);return v.useLayoutEffect(()=>{o(e||di())},[e]),n?i?At.createPortal(t,i):null:t||null}try{_e.displayName="Portal",_e.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"The children to render into the `container`.",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"An HTML element or null.\nThe `container` will have the portal children appended to it.",name:"container",required:!1,type:{name:"HTMLElement | null"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"boolean"}}}}}catch{}const pi=k.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,Mt=Ye`
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  cursor: pointer !important;
`,fi=k.div`
  position: relative;
  display: inline-block;
  width: 100%;

  ${e=>e.$hasValue&&Ye`
      ${Mt}

      input {
        ${Mt}
        pointer-events: none;
      }
    `}
`,mi=k.div`
  /* margin-top: ${r("com/select/vertical-gap")}; */
`,vi=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${r("com/chips-button/size-xs/height")} +
      ${r("com/combo-box/selected-data/horizontal-gap")}
  );
`,gi=k.div`
  width: 100%;
  display: flex;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  flex-wrap: wrap;
  box-sizing: border-box;
`,hi=k.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  position: ${e=>e.$isVisible?"static":"absolute"};
`,bi=k.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
`,xi=k.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,yi=k.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,wi=k.div`
  margin-top: ${r("com/select/vertical-gap")};
`,$i=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${r("com/chips-button/size-xs/height")} +
      ${r("com/combo-box/selected-data/horizontal-gap")}
  );
`,Ne=({options:e,onRemove:t})=>{const n=v.useRef(null),i=v.useRef(Array(e.length).fill(null)),[o,a]=v.useState([]),[d,s]=v.useState([]),[c,p]=v.useState(0),l=wn(),m=v.useCallback(()=>{if(!n.current||e.length===0)return;const y=n.current.clientWidth,h=Number(l["com/combo-box/selected-data/horizontal-gap"].replace("px",""));let j=0;const O=[];for(let b=0;b<e.length;b++){const C=i.current[b];if(!C)continue;const $=C.offsetWidth;if(j+$+h<=y)O.push(e[b]),j+=$+h;else break}let z=0,w=[];if(e.reduce((b,C,$)=>{if($<O.length)return b;const V=i.current[$];if(!V)return b;const P=V.offsetWidth;return b+P+h},0)>y)for(let b=O.length;b<e.length;b++){const C=i.current[b];if(!C)continue;const $=C.offsetWidth;if(z+$+h+40<=y)w.push(e[b]),z+=$+h;else break}else w=e.slice(O.length);s(w),a(O),p(e.length-(O.length+w.length))},[e,l]),g=v.useCallback(x=>{t==null||t(x)},[t]),f=v.useCallback(x=>o.some(y=>y.value===x.value)||d.some(y=>y.value===x.value),[o,d]);return v.useLayoutEffect(()=>{let x=!0,y=requestAnimationFrame(()=>{x&&n.current&&m()});const h=new ResizeObserver(()=>{x&&n.current&&m()});n.current&&h.observe(n.current);const j=()=>{x&&m()};return window.addEventListener("resize",j),()=>{x=!1,cancelAnimationFrame(y),h.disconnect(),window.removeEventListener("resize",j)}},[m,e]),u.jsxs(gi,{ref:n,children:[e.map((x,y)=>u.jsx(hi,{$isVisible:f(x),children:u.jsx(Vt,{ref:h=>i.current[y]=h,size:"xs",label:x.label,closeable:!0,onClickClose:()=>g(x)})},`${x.value}-${y}`)),c>0&&u.jsx(bi,{$isVisible:!0,children:u.jsx(Vt,{label:`+${c}`,size:"xs"})})]})};try{Ne.displayName="MultipleValue",Ne.__docgenInfo={description:"",displayName:"MultipleValue",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"FISComboboxOption<T>[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((option: FISComboboxOption<T>) => void)"}}}}}catch{}function ot(e){return e==="sm"||e==="md"}try{ot.displayName="isMenuSize",ot.__docgenInfo={description:"",displayName:"isMenuSize",props:{}}}catch{}const Me=v.forwardRef(({className:e,style:t,size:n="md",options:i,value:o,disabled:a=!1,textLabel:d="",iconLabel:s,required:c,negative:p,message:l,positive:m,multi:g,placeholder:f,placeholderSearch:x,loading:y,onChange:h,renderOption:j,onClickIconLabel:O,displayValue:z,multiDisplayText:w,searchValue:S,onSearchChange:b,portal:C,maxHeight:$,...V},P)=>{const[_,I]=v.useState(!1),[T,N]=v.useState(null),[W,L]=v.useState(null),M=v.useMemo(()=>({modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}},{name:"offset",options:{offset:[0,4]}}],placement:"bottom-start",strategy:"fixed"}),[]),{styles:E,attributes:D}=nn(T,W,M),A=v.useRef(i);v.useEffect(()=>{const R=new Map;i.forEach(H=>{H.items.forEach(X=>{R.set(X.value,X)})}),g&&Array.isArray(o)&&A.current.flatMap(X=>X.items).filter(X=>o.includes(X.value)).forEach(X=>{R.set(X.value,X)}),A.current=[{items:Array.from(R.values())}]},[i,o,g]);const Y=v.useMemo(()=>{const R=i.flatMap(H=>H.items);if(g)return R.filter(H=>o.includes(H.value));{const H=R.find(X=>X.value===o);return H?[H]:[]}},[o,g,i]),F=()=>{if(g){const R=o.length;return R===0?"":w?w(R):`Selected ${R.toString().padStart(2,"0")} option${R!==1?"s":""}`}else return Y[0]?(z==null?void 0:z(Y[0]))||Y[0].label:""},U=v.useCallback(()=>{a||I(R=>!R)},[a]),K=v.useCallback(R=>{if(g){const H=o.filter(X=>X!==R.value);h(H)}},[g,h,o]),q=v.useCallback(R=>{g?h(R):R.length>0&&(h(R[0]),I(!1))},[g,h]),B=v.useCallback(()=>{g||I(!1)},[g]),J=v.useMemo(()=>({groups:i,placeholder:x,loading:y,multi:g,size:ot(n)?n:"md",selectedValues:g?o:o?[o]:[],onChangeSelected:q,onClickMenu:B,searchValue:S,onSearchChange:b,maxHeight:$,...V}),[i,x,y,g,n,o,q,B,S,b,$,V]);return v.useEffect(()=>{const R=H=>{T&&!T.contains(H.target)&&W&&!W.contains(H.target)&&I(!1)};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[T,W]),u.jsxs(pi,{className:e,style:t,children:[(d||s)&&u.jsx(Ce,{textLabel:d,required:c,iconLabel:s,onClickIconLabel:O}),u.jsx(fi,{ref:N,onClick:U,$hasValue:!!o,children:u.jsx(Vn,{...V,ref:P,size:n,placeholder:f,iconSuffix:_?u.jsx(Bt,{}):u.jsx(Wt,{}),value:F(),disabled:a,activeDropdown:_,negative:p})}),l&&u.jsx(Xe,{className:Z({disabled:a,negative:p,positive:m}),children:l}),g&&o.length>0&&u.jsx(vi,{children:u.jsx(Ne,{options:Y,onRemove:K})}),_&&u.jsx(_e,{portal:C,children:u.jsx(mi,{ref:L,style:{...E.popper,width:T==null?void 0:T.offsetWidth,zIndex:9999},...D.popper,children:u.jsx(on,{...J})})})]})});Me.displayName="FISSelect";const Si=Me;try{Me.displayName="FISSelect",Me.__docgenInfo={description:"",displayName:"FISSelect",props:{textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Show symbol * as required field",name:"required",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:null,description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},size:{defaultValue:{value:"md"},description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption<string | number>[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: SelectOption<string | number>) => ReactNode)"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"boolean"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | (string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string | number) => void) | ((value: (string | number)[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: SelectOption<string | number>) => string) | ((value: SelectOption<string | number>[]) => string)"}}}}}catch{}const ki=k(kn)`
  display: flex;
  align-items: center;
  gap: ${r("com/pagination/record-number/horizontal-gap")};

  .ant-pagination-item {
    ${r("Paragraph/Sm")}
    height: ${r("sem/dimension/size/component/2xs")};
    min-width: ${r("com/pagination/navigation/page-number/min-with")};
    border-radius: ${r("com/pagination/navigation/page-number/corner-radius")};
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${r("sem/color/text/neutral/sub")} !important;
    }

    &:hover {
      background-color: ${r("com/pagination/navigation/page-number/background/background-color/hover")} !important;

      a {
        color: ${r("com/pagination/navigation/page-number/label/color-text/hover")} !important;
      }
    }

    &:active {
      background-color: ${r("com/pagination/navigation/page-number/background/background-color/pressed")} !important;

      a {
        color: ${r("com/pagination/navigation/page-number/label/color-text/pressed")} !important;
      }
    }
  }

  .ant-pagination-item:focus-visible,
  .ant-pagination-next:focus-visible,
  .ant-pagination-prev:focus-visible {
    box-shadow:
      0px 0px 0px ${r("sem/dimension/stroke-width/divider/lg")}
        ${r("com/focus-mark/color-gap-spacing")},
      0px 0px 0px 4px ${r("com/focus-mark/color-stroke")} !important;
    outline: none !important;
    background: ${r("com/pagination/navigation/page-number/background/background-color/active")};
  }

  .ant-pagination-item-active {
    border: none !important;
    background-color: ${r("com/pagination/navigation/page-number/background/background-color/active")};

    a {
      color: ${r("com/pagination/navigation/page-number/label/color-text/active")} !important;
    }
  }

  &.ant-pagination-disabled {
    .ant-pagination-item {
      background-color: transparent !important;
      color: ${r("com/pagination/navigation/page-number/disable/label/color-text/default")} !important;
    }
  }

  .ant-pagination-next.ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  &.ant-pagination-disabled .ant-pagination-next,
  &.ant-pagination-disabled .ant-pagination-prev {
    color: ${r("com/button/disable/icon-color")} !important;
    border-color: ${r("com/button/disable/stroke-color")} !important;
    background-color: transparent !important;
  }

  &.ant-pagination-disabled .ant-pagination-item-active {
    background-color: ${r("com/pagination/navigation/page-number/disable/background/background-color/active")} !important;
    color: ${r("com/pagination/navigation/page-number/disable/label/color-text/active")} !important;
  }

  .ant-pagination-options {
    margin-inline-start: ${r("com/pagination/horizontal-gap")} !important;
  }

  ${({$minimize:e})=>e&&Ye`
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
`,Ci=k.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${r("com/pagination/vertical-padding")}
    ${r("com/pagination/horizontal-padding")}
    ${r("com/pagination/vertical-padding")}
    ${r("com/pagination/horizontal-padding")};
`,Vi=k.div`
  display: flex;
  align-items: center;
  gap: ${r("com/pagination/horizontal-gap")};
`,qi=k.span`
  display: inline-flex;
  align-items: center;
  gap: ${r("sem/dimension/gap/xs")};

  ${r("Paragraph/Sm")};
  color: ${r("com/pagination/range-number/label/color-text")} !important;
`,Pi=10,Ii=({pageSize:e=Pi,current:t=1,total:n=0,minimize:i,recordCounted:o,onIconPageRecordClick:a,showTotal:d,...s})=>{const c=v.useMemo(()=>[(t-1)*e+1,t*e>n?n:t*e],[t,e,n]),p=u.jsxs(u.Fragment,{children:["Hiển thị ",c[0],"-",c[1],o?` trong ${n} bản ghi`:u.jsx(Oe,{size:"xs",icon:u.jsx(mn,{}),variant:"tertiary-invisible",onClick:a})]}),l={size:"small",showSizeChanger:!1,showQuickJumper:!1,responsive:!0,showLessItems:!0,locale:{items_per_page:"/ trang"},total:n,current:t,pageSize:e,...s},m=(g,f,x)=>f==="prev"?u.jsx(Oe,{size:"xs",icon:u.jsx(vn,{}),variant:"tertiary",disabled:t===1}):f==="next"?u.jsx(Oe,{size:"xs",icon:u.jsx(gn,{}),variant:"tertiary",disabled:t*e>=n}):x;return u.jsxs(Ci,{children:[u.jsx(qi,{children:d?d(n,c):p}),u.jsxs(Vi,{children:[u.jsx(ki,{...l,$minimize:!!i,showSizeChanger:!1,itemRender:m}),u.jsx(Si,{style:{width:"100px"},size:"xs",options:[{groupLabel:"",items:(s.pageSizeOptions||[10,20,50,100]).map(g=>{var f,x;return{label:`${g} ${((f=s.locale)==null?void 0:f.items_per_page)||((x=l.locale)==null?void 0:x.items_per_page)}`,value:String(g)}})}],value:String(e),multi:!1,onChange:g=>{s.onShowSizeChange&&s.onShowSizeChange(Number(g),e)}})]})]})},$o=Ii;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{minimize:{defaultValue:null,description:"",name:"minimize",required:!1,type:{name:"boolean"}},recordCounted:{defaultValue:null,description:"",name:"recordCounted",required:!1,type:{name:"boolean"}},onIconPageRecordClick:{defaultValue:null,description:"",name:"onIconPageRecordClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const Ae=v.forwardRef(({onClickSuffix:e,onClickPrefix:t,...n},i)=>{const{sizeInput:o="md",iconPrefix:a,iconSuffix:d,labelSuffix:s,labelPrefix:c,typeSuffix:p,typePrefix:l,disabled:m,negative:g,activeDropdown:f,...x}=n;return u.jsxs(ti,{className:Z({"input-text-lg":o==="lg",negative:g,dropdownSuffix:p==="dropdown",dropdownPrefix:l==="dropdown",iconPrefix:a,prefix:l==="prefix"||l==="dropdown",suffix:p==="suffix"||p==="dropdown",iconSuffix:p==="icon",disabled:m}),children:[a&&l!=="prefix"&&l!=="dropdown"&&u.jsx(se,{className:Z({"input-text-lg":o==="lg"}),children:a}),l==="prefix"&&u.jsxs(ei,{onClick:t,className:Z({disabled:m}),children:[a&&u.jsx(Re,{children:a}),c&&u.jsx(it,{children:c})]}),l==="dropdown"&&u.jsxs(Jr,{className:Z({"active-dropdown":f,disabled:m,"input-text-lg":o==="lg"}),onClick:t,children:[a&&u.jsx(be,{children:a}),c&&u.jsx(he,{children:c}),u.jsx(Re,{children:u.jsx($t,{})})]}),u.jsx(ae,{...x,ref:i,disabled:m,$isPointer:n.$isPointer,className:Z({negative:g,"input-text-lg":o==="lg",prefix:a,suffix:p==="icon"||p==="suffix"||p==="dropdown"})}),p==="icon"&&d&&u.jsx(Oe,{size:"md",icon:d,variant:"tertiary-invisible",className:"icon-suffix",onClick:e,disabled:m}),p==="suffix"&&u.jsxs(Zr,{onClick:e,className:Z({disabled:m}),children:[d&&u.jsx(Te,{children:d}),s&&u.jsx(rt,{children:s})]}),p==="dropdown"&&u.jsxs(Qr,{className:Z({"active-dropdown":f,disabled:m,"input-text-lg":o==="lg"}),onClick:e,children:[d&&u.jsx(be,{children:d}),s&&u.jsx(he,{children:s}),u.jsx(Te,{children:u.jsx($t,{})})]})]})});Ae.displayName="FISInputField";const Ke=Ae;try{Ae.displayName="FISInputField",Ae.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}}}}}catch{}const Be=v.forwardRef((e,t)=>{const{className:n,typeSuffix:i,textLabel:o="",iconLabel:a,required:d,iconPrefix:s,sizeInput:c,showCount:p,message:l,negative:m,positive:g,maxLength:f=500,disabled:x,onChange:y,onEnter:h,onKeyDown:j,onClickIconLabel:O,onClickSuffix:z,...w}=e,[S,b]=Je.useState(""),C=Je.useCallback(V=>{b(V.target.value),y&&y(V)},[y]),$=Je.useCallback(V=>{V&&V.key==="Enter"&&h&&h(V.currentTarget.value)},[h]);return u.jsxs(Hr,{className:n,children:[(o||a)&&u.jsx(Ce,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:O}),u.jsx(Ke,{...w,ref:t,typeSuffix:i,sizeInput:c,iconPrefix:s,onKeyPress:$,onChange:C,disabled:x,negative:m,maxLength:f,onClickSuffix:z}),(l||p)&&u.jsxs(rn,{children:[u.jsx(Xe,{className:Z({disabled:x,negative:m,positive:g}),children:l||""}),p&&f>0&&u.jsxs(Yr,{className:Z({negative:(S==null?void 0:S.length)>f}),children:[S==null?void 0:S.length,"/",f]})]})]})});Be.displayName="FISInputText";const ji=Be;try{Be.displayName="FISInputText",Be.__docgenInfo={description:"",displayName:"FISInputText",props:{showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const We=({placeholder:e,groups:t,size:n="md",multi:i=!1,selectedValues:o=[],onChangeSelected:a,searchValue:d="",onSearchChange:s,loading:c=!1,noData:p=!1,noResult:l=!1,combobox:m,className:g,onClickMenu:f,loadingText:x="Data loading...",noDataText:y="No data",noResultText:h="No result",removeSelectedText:j="Remove selected",selectedGroupLabel:O="Selected",maxHeight:z})=>{const[w,S]=v.useState(d);v.useEffect(()=>{S(d)},[d]);const b=w,C=v.useMemo(()=>{let E=t.map(D=>({groupLabel:D.groupLabel,items:i?D.items.filter(A=>!o.includes(A.value)):D.items}));return b.trim()&&(E=E.map(D=>({...D,items:D.items.filter(A=>{var Y,F;return(F=(Y=A==null?void 0:A.label)==null?void 0:Y.toLowerCase())==null?void 0:F.includes(b==null?void 0:b.toLowerCase())})}))),E.filter(D=>D.items.length>0)},[t,i,o,b]),$=v.useMemo(()=>{if(!i)return null;const E=t.flatMap(D=>D.items).filter(D=>o.includes(D.value));return E.length===0?null:{groupLabel:O,items:E}},[t,i,o,O]),V=$?[$,...C]:C,P=i&&o.length>0?{groupLabel:"",items:[{label:j,description:"",value:"__remove_selected__"}]}:null,_=t.reduce((E,D)=>E+D.items.length,0),I=b.trim()!=="",T=_>=7||I,N=V.length>0,W=I&&!N,L=E=>{const D=E.target.value;S(D),s==null||s(D)},M=E=>{if(i){if(E.value==="__remove_selected__"){a==null||a([]);return}let D;o.includes(E.value)?D=o.filter(A=>A!==E.value):D=[...o,E.value],a==null||a(D);return}else{const D=o[0]===E.value?[]:[E.value];a==null||a(D),f==null||f()}};return u.jsxs(Ur,{$maxHeight:z,className:g,children:[T&&!m&&u.jsx(Xr,{children:u.jsx(ji,{iconPrefix:u.jsx(hn,{}),placeholder:e,value:b,onChange:L})}),(W||l)&&u.jsxs(Ze,{children:[u.jsx(Ft,{children:u.jsx(bn,{})}),u.jsx(et,{children:h})]}),p&&u.jsxs(Ze,{children:[u.jsx(Ft,{children:u.jsx(xn,{})}),u.jsx(et,{children:y})]}),c&&u.jsxs(Ze,{children:[u.jsx(Cn,{size:n,variant:"indeterminate"}),u.jsx(et,{children:x})]}),!W&&!p&&!c&&u.jsxs(u.Fragment,{children:[u.jsx(Kr,{$removeSelectedGroup:!!P,children:V.map((E,D)=>u.jsxs(_t,{children:[D!==0&&u.jsx(Ct,{withDivider:!0}),(E==null?void 0:E.groupLabel)&&u.jsx(Ct,{label:E==null?void 0:E.groupLabel}),E.items.map((A,Y)=>u.jsx(St,{title:A.label,variant:"primary",children:u.jsx(kt,{title:A.label,description:A.description,size:n,onClickMenu:()=>M(A),selected:o.includes(A.value),type:"select"})},Y))]},D))}),P&&u.jsx(Gr,{children:u.jsx(_t,{children:P.items.map((E,D)=>u.jsx(St,{title:E.label,variant:"primary",children:u.jsx(kt,{title:E.label,description:E.description,size:n,onClickMenu:()=>a==null?void 0:a([]),type:"select",iconPrefix:u.jsx(yn,{}),negative:!0})},D))})})]})]})};We.displayName="FISMenuSelect";const on=We;try{We.displayName="FISMenuSelect",We.__docgenInfo={description:"",displayName:"FISMenuSelect",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},groups:{defaultValue:null,description:"",name:"groups",required:!0,type:{name:"MenuGroup[]"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},multi:{defaultValue:{value:"false"},description:"",name:"multi",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:{value:""},description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},selectedValues:{defaultValue:{value:"[]"},description:"",name:"selectedValues",required:!1,type:{name:"(string | number)[]"}},onChangeSelected:{defaultValue:null,description:"",name:"onChangeSelected",required:!1,type:{name:"((values: (string | number)[]) => void)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},noData:{defaultValue:{value:"false"},description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:{value:"false"},description:"",name:"noResult",required:!1,type:{name:"boolean"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Data loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:{value:"No data"},description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"No result"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:{value:"Remove selected"},description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:{value:"Selected"},description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}}}}}catch{}const He=v.forwardRef(({className:e,options:t,value:n,disabled:i=!1,textLabel:o="",iconLabel:a,required:d,negative:s,message:c,positive:p,multi:l,placeholderSearch:m,loading:g,onChange:f,renderOption:x,onClickIconLabel:y,displayValue:h,multiDisplayText:j,noResultText:O="Không tìm thấy kết quả",maxHeight:z,...w},S)=>{const[b,C]=v.useState(!1),[$,V]=v.useState(""),[P,_]=v.useState(null),[I,T]=v.useState(null),{styles:N,attributes:W}=nn(P,I,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:"fixed"}),L=v.useMemo(()=>t.flatMap(q=>q.items),[t]),M=v.useMemo(()=>{if(l){const B=L.filter(J=>n.includes(J.value)).length;return j?j(B):`Selected ${B.toString().padStart(2,"0")} option${B!==1?"s":""}`}else{const q=L.find(B=>B.value===n);return q?(h==null?void 0:h(q))||q.label:""}},[n,L,l,h]),E=v.useCallback(()=>{i||(l?b||(C(!0),V("")):(C(q=>!q),b||V(M)))},[i,b,M,l]),D=v.useCallback(q=>{i||(C(!0),V(q.target.value))},[i]),A=v.useCallback(q=>{q.key==="Backspace"&&!$&&V("")},[$]);v.useEffect(()=>{const q=B=>{P&&!P.contains(B.target)&&I&&!I.contains(B.target)&&(C(!1),V(l?"":M))};return document.addEventListener("mousedown",q),()=>document.removeEventListener("mousedown",q)},[P,I,l,M]);const Y=v.useMemo(()=>l?L.filter(q=>n.includes(q.value)).map(q=>({label:q.label,value:q.value})):n?L.filter(q=>q.value===n).map(q=>({label:q.label,value:q.value})):[],[L,n,l]),F=v.useCallback(q=>{if(l){const B=n.filter(J=>J!==q.value);f(B)}},[l,f,n]),U=v.useMemo(()=>!$||$===M?t:t.map(q=>({...q,items:q.items.filter(B=>{var J,R;return(R=(J=B==null?void 0:B.label)==null?void 0:J.toLowerCase())==null?void 0:R.includes($==null?void 0:$.toLowerCase())})})),[t,$,M]),K=v.useMemo(()=>$?U.every(q=>q.items.length===0):!1,[U,$]);return u.jsxs(xi,{className:e,children:[(o||a)&&u.jsx(Ce,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:y}),u.jsx(yi,{ref:_,onClick:E,children:u.jsx(Ke,{...w,ref:S,iconSuffix:b?u.jsx(Bt,{}):u.jsx(Wt,{}),value:b&&$!==void 0?$:M,disabled:i,onClickSuffix:E,onChange:D,onKeyDown:A,$isPointer:!0})}),c&&u.jsx(Xe,{className:Z({disabled:i,negative:s,positive:p}),children:c}),l&&n.length>0&&u.jsx($i,{children:u.jsx(Ne,{options:Y,onRemove:F})}),b&&u.jsx(_e,{children:u.jsx(wi,{ref:T,style:{...N.popper,width:P==null?void 0:P.offsetWidth},...W.popper,children:u.jsx(on,{groups:U,placeholder:m,loading:g,multi:l,combobox:!0,noResult:K,noResultText:O,maxHeight:z,selectedValues:l?n:n?[n]:[],onChangeSelected:q=>{l?f(q):(f(q[0]),C(!1),V(""))},onClickMenu:()=>{l||(C(!1),V(""))},...w})})})]})});He.displayName="FISCombobox";const So=He;try{He.displayName="FISCombobox",He.__docgenInfo={description:"",displayName:"FISCombobox",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"Không tìm thấy kết quả"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: ComboboxOption) => ReactNode)"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: ComboboxOption) => string) | ((value: ComboboxOption[]) => string)"}}}}}catch{}export{So as F,wo as a,Ke as b,ji as c,yo as d,on as e,$o as f,Si as g};
