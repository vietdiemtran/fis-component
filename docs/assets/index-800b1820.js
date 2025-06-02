import{j as c}from"./jsx-runtime-47c18db8.js";import{c as W}from"./index-d16835b1.js";import{r as x,g as an,R as Ue}from"./index-d806aa85.js";import{r as zt}from"./index-35a52d1c.js";import{T as ln,m as un,A as Tt,n as Lt,j as gt,o as sn,N as cn,p as dn,q as fn}from"./RemoveIcon-d554efb7.js";import{F as $e}from"./index-29f02deb.js";import{d as O,g as r,l as pn,n as mn}from"./getTheme-624682de.js";import"./index-75fae687.js";import"./index-bf6eddb1.js";import"./index-0fbbfa15.js";import{F as vn}from"./index-e72c950e.js";import"./index-fcfadd25.js";import"./index-46a4f406.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-edde8765.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-87b75b7d.js";import"./index-e61a39e8.js";import"./index-6b0159c1.js";import"./index-afaf424c.js";import"./index-03667518.js";import"./index-28483a77.js";import{M as ht}from"./index-44c8c048.js";import{F as xt}from"./index-414371d3.js";import"./index-5e805f35.js";import"./index-ff1f41df.js";import"./index-558bae68.js";import"./ToastContext-471072df.js";import{F as bt}from"./index-8e26feb5.js";import{D as Rt,d as he}from"./index-9c26528d.js";import{u as gn,g as hn}from"./index-a14b58ae.js";import"./index-e8e0e262.js";import"./index-1120f323.js";import"./FISSorter-be7c450c.js";import"./index-c3ec7c42.js";import{F as xn}from"./index-8298a7d1.js";import"./index-55d04594.js";import"./index-d257f201.js";import{F as bn}from"./index-bf676f14.js";var yn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n};const{TimePicker:wn,RangePicker:$n}=Rt,Sn=x.forwardRef((e,t)=>x.createElement($n,Object.assign({},e,{picker:"time",mode:void 0,ref:t}))),Se=x.forwardRef((e,t)=>{var{addon:n,renderExtraFooter:i,variant:o,bordered:a}=e,d=yn(e,["addon","renderExtraFooter","variant","bordered"]);const[s]=gn("timePicker",o,a),u=x.useMemo(()=>{if(i)return i;if(n)return n},[n,i]);return x.createElement(wn,Object.assign({},d,{mode:void 0,ref:t,renderExtraFooter:u,variant:s}))}),Ft=hn(Se,"popupAlign",void 0,"picker");Se._InternalPanelDoNotUseOrYouWillBeFired=Ft;Se.RangePicker=Sn;Se._InternalPanelDoNotUseOrYouWillBeFired=Ft;const kn=Se;var yt=function(t){return t.reduce(function(n,i){var o=i[0],a=i[1];return n[o]=a,n},{})},wt=typeof window<"u"&&window.document&&window.document.createElement?x.useLayoutEffect:x.useEffect,A="top",U="bottom",Y="right",M="left",et="auto",ke=[A,U,Y,M],se="start",ye="end",Cn="clippingParents",Nt="viewport",ge="popper",qn="reference",$t=ke.reduce(function(e,t){return e.concat([t+"-"+se,t+"-"+ye])},[]),_t=[].concat(ke,[et]).reduce(function(e,t){return e.concat([t,t+"-"+se,t+"-"+ye])},[]),Vn="beforeRead",On="read",In="afterRead",Pn="beforeMain",jn="main",Dn="afterMain",En="beforeWrite",zn="write",Tn="afterWrite",Ln=[Vn,On,In,Pn,jn,Dn,En,zn,Tn];function K(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function oe(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function G(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Rn(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var i=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!G(a)||!K(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(d){var s=o[d];s===!1?a.removeAttribute(d):a.setAttribute(d,s===!0?"":s)}))})}function Fn(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],a=t.attributes[i]||{},d=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:n[i]),s=d.reduce(function(u,f){return u[f]="",u},{});!G(o)||!K(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(u){o.removeAttribute(u)}))})}}const Nn={name:"applyStyles",enabled:!0,phase:"write",fn:Rn,effect:Fn,requires:["computeStyles"]};function X(e){return e.split("-")[0]}var ie=Math.max,je=Math.min,ce=Math.round;function Ke(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function At(){return!/^((?!chrome|android).)*safari/i.test(Ke())}function de(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),o=1,a=1;t&&G(e)&&(o=e.offsetWidth>0&&ce(i.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ce(i.height)/e.offsetHeight||1);var d=oe(e)?H(e):window,s=d.visualViewport,u=!At()&&n,f=(i.left+(u&&s?s.offsetLeft:0))/o,l=(i.top+(u&&s?s.offsetTop:0))/a,v=i.width/o,y=i.height/a;return{width:v,height:y,top:l,right:f+v,bottom:l+y,left:f,x:f,y:l}}function nt(e){var t=de(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function Mt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&tt(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Z(e){return H(e).getComputedStyle(e)}function _n(e){return["table","td","th"].indexOf(K(e))>=0}function ee(e){return((oe(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ae(e){return K(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||ee(e)}function St(e){return!G(e)||Z(e).position==="fixed"?null:e.offsetParent}function An(e){var t=/firefox/i.test(Ke()),n=/Trident/i.test(Ke());if(n&&G(e)){var i=Z(e);if(i.position==="fixed")return null}var o=Ae(e);for(tt(o)&&(o=o.host);G(o)&&["html","body"].indexOf(K(o))<0;){var a=Z(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ce(e){for(var t=H(e),n=St(e);n&&_n(n)&&Z(n).position==="static";)n=St(n);return n&&(K(n)==="html"||K(n)==="body"&&Z(n).position==="static")?t:n||An(e)||t}function rt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function xe(e,t,n){return ie(e,je(t,n))}function Mn(e,t,n){var i=xe(e,t,n);return i>n?n:i}function Bt(){return{top:0,right:0,bottom:0,left:0}}function Wt(e){return Object.assign({},Bt(),e)}function Ht(e,t){return t.reduce(function(n,i){return n[i]=e,n},{})}var Bn=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Wt(typeof t!="number"?t:Ht(t,ke))};function Wn(e){var t,n=e.state,i=e.name,o=e.options,a=n.elements.arrow,d=n.modifiersData.popperOffsets,s=X(n.placement),u=rt(s),f=[M,Y].indexOf(s)>=0,l=f?"height":"width";if(!(!a||!d)){var v=Bn(o.padding,n),y=nt(a),p=u==="y"?A:M,$=u==="y"?U:Y,h=n.rects.reference[l]+n.rects.reference[u]-d[u]-n.rects.popper[l],m=d[u]-n.rects.reference[u],V=Ce(a),j=V?u==="y"?V.clientHeight||0:V.clientWidth||0:0,I=h/2-m/2,S=v[p],k=j-y[l]-v[$],g=j/2-y[l]/2+I,w=xe(S,g,k),C=u;n.modifiersData[i]=(t={},t[C]=w,t.centerOffset=w-g,t)}}function Hn(e){var t=e.state,n=e.options,i=n.element,o=i===void 0?"[data-popper-arrow]":i;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Mt(t.elements.popper,o)&&(t.elements.arrow=o))}const Gn={name:"arrow",enabled:!0,phase:"main",fn:Wn,effect:Hn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function fe(e){return e.split("-")[1]}var Un={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yn(e,t){var n=e.x,i=e.y,o=t.devicePixelRatio||1;return{x:ce(n*o)/o||0,y:ce(i*o)/o||0}}function kt(e){var t,n=e.popper,i=e.popperRect,o=e.placement,a=e.variation,d=e.offsets,s=e.position,u=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,v=e.isFixed,y=d.x,p=y===void 0?0:y,$=d.y,h=$===void 0?0:$,m=typeof l=="function"?l({x:p,y:h}):{x:p,y:h};p=m.x,h=m.y;var V=d.hasOwnProperty("x"),j=d.hasOwnProperty("y"),I=M,S=A,k=window;if(f){var g=Ce(n),w="clientHeight",C="clientWidth";if(g===H(n)&&(g=ee(n),Z(g).position!=="static"&&s==="absolute"&&(w="scrollHeight",C="scrollWidth")),g=g,o===A||(o===M||o===Y)&&a===ye){S=U;var b=v&&g===k&&k.visualViewport?k.visualViewport.height:g[w];h-=b-i.height,h*=u?1:-1}if(o===M||(o===A||o===U)&&a===ye){I=Y;var T=v&&g===k&&k.visualViewport?k.visualViewport.width:g[C];p-=T-i.width,p*=u?1:-1}}var q=Object.assign({position:s},f&&Un),E=l===!0?Yn({x:p,y:h},H(n)):{x:p,y:h};if(p=E.x,h=E.y,u){var z;return Object.assign({},q,(z={},z[S]=j?"0":"",z[I]=V?"0":"",z.transform=(k.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",z))}return Object.assign({},q,(t={},t[S]=j?h+"px":"",t[I]=V?p+"px":"",t.transform="",t))}function Xn(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=i===void 0?!0:i,a=n.adaptive,d=a===void 0?!0:a,s=n.roundOffsets,u=s===void 0?!0:s,f={placement:X(t.placement),variation:fe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,kt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:d,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,kt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Kn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Xn,data:{}};var Oe={passive:!0};function Jn(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,a=o===void 0?!0:o,d=i.resize,s=d===void 0?!0:d,u=H(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",n.update,Oe)}),s&&u.addEventListener("resize",n.update,Oe),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",n.update,Oe)}),s&&u.removeEventListener("resize",n.update,Oe)}}const Qn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Jn,data:{}};var Zn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ie(e){return e.replace(/left|right|bottom|top/g,function(t){return Zn[t]})}var er={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return er[t]})}function it(e){var t=H(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function ot(e){return de(ee(e)).left+it(e).scrollLeft}function tr(e,t){var n=H(e),i=ee(e),o=n.visualViewport,a=i.clientWidth,d=i.clientHeight,s=0,u=0;if(o){a=o.width,d=o.height;var f=At();(f||!f&&t==="fixed")&&(s=o.offsetLeft,u=o.offsetTop)}return{width:a,height:d,x:s+ot(e),y:u}}function nr(e){var t,n=ee(e),i=it(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ie(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),d=ie(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+ot(e),u=-i.scrollTop;return Z(o||n).direction==="rtl"&&(s+=ie(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:d,x:s,y:u}}function at(e){var t=Z(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function Gt(e){return["html","body","#document"].indexOf(K(e))>=0?e.ownerDocument.body:G(e)&&at(e)?e:Gt(Ae(e))}function be(e,t){var n;t===void 0&&(t=[]);var i=Gt(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),a=H(i),d=o?[a].concat(a.visualViewport||[],at(i)?i:[]):i,s=t.concat(d);return o?s:s.concat(be(Ae(d)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rr(e,t){var n=de(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function qt(e,t,n){return t===Nt?Je(tr(e,n)):oe(t)?rr(t,n):Je(nr(ee(e)))}function ir(e){var t=be(Ae(e)),n=["absolute","fixed"].indexOf(Z(e).position)>=0,i=n&&G(e)?Ce(e):e;return oe(i)?t.filter(function(o){return oe(o)&&Mt(o,i)&&K(o)!=="body"}):[]}function or(e,t,n,i){var o=t==="clippingParents"?ir(e):[].concat(t),a=[].concat(o,[n]),d=a[0],s=a.reduce(function(u,f){var l=qt(e,f,i);return u.top=ie(l.top,u.top),u.right=je(l.right,u.right),u.bottom=je(l.bottom,u.bottom),u.left=ie(l.left,u.left),u},qt(e,d,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ut(e){var t=e.reference,n=e.element,i=e.placement,o=i?X(i):null,a=i?fe(i):null,d=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,u;switch(o){case A:u={x:d,y:t.y-n.height};break;case U:u={x:d,y:t.y+t.height};break;case Y:u={x:t.x+t.width,y:s};break;case M:u={x:t.x-n.width,y:s};break;default:u={x:t.x,y:t.y}}var f=o?rt(o):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case se:u[f]=u[f]-(t[l]/2-n[l]/2);break;case ye:u[f]=u[f]+(t[l]/2-n[l]/2);break}}return u}function we(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=i===void 0?e.placement:i,a=n.strategy,d=a===void 0?e.strategy:a,s=n.boundary,u=s===void 0?Cn:s,f=n.rootBoundary,l=f===void 0?Nt:f,v=n.elementContext,y=v===void 0?ge:v,p=n.altBoundary,$=p===void 0?!1:p,h=n.padding,m=h===void 0?0:h,V=Wt(typeof m!="number"?m:Ht(m,ke)),j=y===ge?qn:ge,I=e.rects.popper,S=e.elements[$?j:y],k=or(oe(S)?S:S.contextElement||ee(e.elements.popper),u,l,d),g=de(e.elements.reference),w=Ut({reference:g,element:I,strategy:"absolute",placement:o}),C=Je(Object.assign({},I,w)),b=y===ge?C:g,T={top:k.top-b.top+V.top,bottom:b.bottom-k.bottom+V.bottom,left:k.left-b.left+V.left,right:b.right-k.right+V.right},q=e.modifiersData.offset;if(y===ge&&q){var E=q[o];Object.keys(T).forEach(function(z){var _=[Y,U].indexOf(z)>=0?1:-1,R=[A,U].indexOf(z)>=0?"y":"x";T[z]+=E[R]*_})}return T}function ar(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=n.boundary,a=n.rootBoundary,d=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,f=u===void 0?_t:u,l=fe(i),v=l?s?$t:$t.filter(function($){return fe($)===l}):ke,y=v.filter(function($){return f.indexOf($)>=0});y.length===0&&(y=v);var p=y.reduce(function($,h){return $[h]=we(e,{placement:h,boundary:o,rootBoundary:a,padding:d})[X(h)],$},{});return Object.keys(p).sort(function($,h){return p[$]-p[h]})}function lr(e){if(X(e)===et)return[];var t=Ie(e);return[Ct(e),t,Ct(t)]}function ur(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,d=n.altAxis,s=d===void 0?!0:d,u=n.fallbackPlacements,f=n.padding,l=n.boundary,v=n.rootBoundary,y=n.altBoundary,p=n.flipVariations,$=p===void 0?!0:p,h=n.allowedAutoPlacements,m=t.options.placement,V=X(m),j=V===m,I=u||(j||!$?[Ie(m)]:lr(m)),S=[m].concat(I).reduce(function(D,F){return D.concat(X(F)===et?ar(t,{placement:F,boundary:l,rootBoundary:v,padding:f,flipVariations:$,allowedAutoPlacements:h}):F)},[]),k=t.rects.reference,g=t.rects.popper,w=new Map,C=!0,b=S[0],T=0;T<S.length;T++){var q=S[T],E=X(q),z=fe(q)===se,_=[A,U].indexOf(E)>=0,R=_?"width":"height",L=we(t,{placement:q,boundary:l,rootBoundary:v,altBoundary:y,padding:f}),P=_?z?Y:M:z?U:A;k[R]>g[R]&&(P=Ie(P));var N=Ie(P),B=[];if(a&&B.push(L[E]<=0),s&&B.push(L[P]<=0,L[N]<=0),B.every(function(D){return D})){b=q,C=!1;break}w.set(q,B)}if(C)for(var ae=$?3:1,ve=function(F){var Q=S.find(function(qe){var te=w.get(qe);if(te)return te.slice(0,F).every(function(We){return We})});if(Q)return b=Q,"break"},J=ae;J>0;J--){var le=ve(J);if(le==="break")break}t.placement!==b&&(t.modifiersData[i]._skip=!0,t.placement=b,t.reset=!0)}}const sr={name:"flip",enabled:!0,phase:"main",fn:ur,requiresIfExists:["offset"],data:{_skip:!1}};function Vt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ot(e){return[A,Y,U,M].some(function(t){return e[t]>=0})}function cr(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,d=we(t,{elementContext:"reference"}),s=we(t,{altBoundary:!0}),u=Vt(d,i),f=Vt(s,o,a),l=Ot(u),v=Ot(f);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const dr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:cr};function fr(e,t,n){var i=X(e),o=[M,A].indexOf(i)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,d=a[0],s=a[1];return d=d||0,s=(s||0)*o,[M,Y].indexOf(i)>=0?{x:s,y:d}:{x:d,y:s}}function pr(e){var t=e.state,n=e.options,i=e.name,o=n.offset,a=o===void 0?[0,0]:o,d=_t.reduce(function(l,v){return l[v]=fr(v,t.rects,a),l},{}),s=d[t.placement],u=s.x,f=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[i]=d}const mr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:pr};function vr(e){var t=e.state,n=e.name;t.modifiersData[n]=Ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const gr={name:"popperOffsets",enabled:!0,phase:"read",fn:vr,data:{}};function hr(e){return e==="x"?"y":"x"}function xr(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,a=o===void 0?!0:o,d=n.altAxis,s=d===void 0?!1:d,u=n.boundary,f=n.rootBoundary,l=n.altBoundary,v=n.padding,y=n.tether,p=y===void 0?!0:y,$=n.tetherOffset,h=$===void 0?0:$,m=we(t,{boundary:u,rootBoundary:f,padding:v,altBoundary:l}),V=X(t.placement),j=fe(t.placement),I=!j,S=rt(V),k=hr(S),g=t.modifiersData.popperOffsets,w=t.rects.reference,C=t.rects.popper,b=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,T=typeof b=="number"?{mainAxis:b,altAxis:b}:Object.assign({mainAxis:0,altAxis:0},b),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(g){if(a){var z,_=S==="y"?A:M,R=S==="y"?U:Y,L=S==="y"?"height":"width",P=g[S],N=P+m[_],B=P-m[R],ae=p?-C[L]/2:0,ve=j===se?w[L]:C[L],J=j===se?-C[L]:-w[L],le=t.elements.arrow,D=p&&le?nt(le):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Bt(),Q=F[_],qe=F[R],te=xe(0,w[L],D[L]),We=I?w[L]/2-ae-te-Q-T.mainAxis:ve-te-Q-T.mainAxis,Zt=I?-w[L]/2+ae+te+qe+T.mainAxis:J+te+qe+T.mainAxis,He=t.elements.arrow&&Ce(t.elements.arrow),en=He?S==="y"?He.clientTop||0:He.clientLeft||0:0,lt=(z=q==null?void 0:q[S])!=null?z:0,tn=P+We-lt-en,nn=P+Zt-lt,ut=xe(p?je(N,tn):N,P,p?ie(B,nn):B);g[S]=ut,E[S]=ut-P}if(s){var st,rn=S==="x"?A:M,on=S==="x"?U:Y,ne=g[k],Ve=k==="y"?"height":"width",ct=ne+m[rn],dt=ne-m[on],Ge=[A,M].indexOf(V)!==-1,ft=(st=q==null?void 0:q[k])!=null?st:0,pt=Ge?ct:ne-w[Ve]-C[Ve]-ft+T.altAxis,mt=Ge?ne+w[Ve]+C[Ve]-ft-T.altAxis:dt,vt=p&&Ge?Mn(pt,ne,mt):xe(p?pt:ct,ne,p?mt:dt);g[k]=vt,E[k]=vt-ne}t.modifiersData[i]=E}}const br={name:"preventOverflow",enabled:!0,phase:"main",fn:xr,requiresIfExists:["offset"]};function yr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function wr(e){return e===H(e)||!G(e)?it(e):yr(e)}function $r(e){var t=e.getBoundingClientRect(),n=ce(t.width)/e.offsetWidth||1,i=ce(t.height)/e.offsetHeight||1;return n!==1||i!==1}function Sr(e,t,n){n===void 0&&(n=!1);var i=G(t),o=G(t)&&$r(t),a=ee(t),d=de(e,o,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&((K(t)!=="body"||at(a))&&(s=wr(t)),G(t)?(u=de(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ot(a))),{x:d.left+s.scrollLeft-u.x,y:d.top+s.scrollTop-u.y,width:d.width,height:d.height}}function kr(e){var t=new Map,n=new Set,i=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var d=[].concat(a.requires||[],a.requiresIfExists||[]);d.forEach(function(s){if(!n.has(s)){var u=t.get(s);u&&o(u)}}),i.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),i}function Cr(e){var t=kr(e);return Ln.reduce(function(n,i){return n.concat(t.filter(function(o){return o.phase===i}))},[])}function qr(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Vr(e){var t=e.reduce(function(n,i){var o=n[i.name];return n[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,n},{});return Object.keys(t).map(function(n){return t[n]})}var It={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Or(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,i=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?It:o;return function(s,u,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},It,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},v=[],y=!1,p={state:l,setOptions:function(V){var j=typeof V=="function"?V(l.options):V;h(),l.options=Object.assign({},a,l.options,j),l.scrollParents={reference:oe(s)?be(s):s.contextElement?be(s.contextElement):[],popper:be(u)};var I=Cr(Vr([].concat(i,l.options.modifiers)));return l.orderedModifiers=I.filter(function(S){return S.enabled}),$(),p.update()},forceUpdate:function(){if(!y){var V=l.elements,j=V.reference,I=V.popper;if(Pt(j,I)){l.rects={reference:Sr(j,Ce(I),l.options.strategy==="fixed"),popper:nt(I)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(T){return l.modifiersData[T.name]=Object.assign({},T.data)});for(var S=0;S<l.orderedModifiers.length;S++){if(l.reset===!0){l.reset=!1,S=-1;continue}var k=l.orderedModifiers[S],g=k.fn,w=k.options,C=w===void 0?{}:w,b=k.name;typeof g=="function"&&(l=g({state:l,options:C,name:b,instance:p})||l)}}}},update:qr(function(){return new Promise(function(m){p.forceUpdate(),m(l)})}),destroy:function(){h(),y=!0}};if(!Pt(s,u))return p;p.setOptions(f).then(function(m){!y&&f.onFirstUpdate&&f.onFirstUpdate(m)});function $(){l.orderedModifiers.forEach(function(m){var V=m.name,j=m.options,I=j===void 0?{}:j,S=m.effect;if(typeof S=="function"){var k=S({state:l,name:V,instance:p,options:I}),g=function(){};v.push(k||g)}})}function h(){v.forEach(function(m){return m()}),v=[]}return p}}var Ir=[Qn,gr,Kn,Nn,mr,sr,br,Gn,dr],Pr=Or({defaultModifiers:Ir}),jr=typeof Element<"u",Dr=typeof Map=="function",Er=typeof Set=="function",zr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Pe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!Pe(e[i],t[i]))return!1;return!0}var a;if(Dr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;for(a=e.entries();!(i=a.next()).done;)if(!Pe(i.value[1],t.get(i.value[0])))return!1;return!0}if(Er&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;return!0}if(zr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;if(jr&&e instanceof Element)return!1;for(i=n;i--!==0;)if(!((o[i]==="_owner"||o[i]==="__v"||o[i]==="__o")&&e.$$typeof)&&!Pe(e[o[i]],t[o[i]]))return!1;return!0}return e!==e&&t!==t}var Tr=function(t,n){try{return Pe(t,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const Lr=an(Tr);var Rr=[],Yt=function(t,n,i){i===void 0&&(i={});var o=x.useRef(null),a={onFirstUpdate:i.onFirstUpdate,placement:i.placement||"bottom",strategy:i.strategy||"absolute",modifiers:i.modifiers||Rr},d=x.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=d[0],u=d[1],f=x.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var $=p.state,h=Object.keys($.elements);zt.flushSync(function(){u({styles:yt(h.map(function(m){return[m,$.styles[m]||{}]})),attributes:yt(h.map(function(m){return[m,$.attributes[m]]}))})})},requires:["computeStyles"]}},[]),l=x.useMemo(function(){var y={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[f,{name:"applyStyles",enabled:!1}])};return Lr(o.current,y)?o.current||y:(o.current=y,y)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,f]),v=x.useRef();return wt(function(){v.current&&v.current.setOptions(l)},[l]),wt(function(){if(!(t==null||n==null)){var y=i.createPopper||Pr,p=y(t,n,l);return v.current=p,function(){p.destroy(),v.current=null}}},[t,n,i.createPopper]),{state:v.current?v.current.state:null,styles:s.styles,attributes:s.attributes,update:v.current?v.current.update:null,forceUpdate:v.current?v.current.forceUpdate:null}};const Fr=O.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
  width: 100%;
`,Nr=O.span`
  ${r("Subheading/XS")}
  color: ${r("com/input/character-limit/label/default/color-text")};
  padding-right: ${r("com/input/character-limit/horizontal-padding")};
  padding-left: ${r("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${r("com/input/character-limit/label/over-limit/color-text")};
  }
`,Xt=O.div`
  display: flex;
  justify-content: space-between;
`,Me=O.span`
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
`,_r=O.div`
  width: unset;
  height: ${r("com/menu/height")};
  min-width: ${r("com/menu/min-width")};
  max-height: ${r("com/menu/max-height")};
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
`,Ye=O.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r("com/menu/item/horizontal-gap")};
`,jt=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Xe=O.p`
  margin: 0;
  ${r("Paragraph/Sm")}
  color: ${r("com/menu/item/action/label/color-text/default")};
`,Ar=O.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Dt=O.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/menu/item/horizontal-gap")};
  min-width: ${r("com/menu/item/min-width")};
  min-height: ${r("com/menu/item/size-md/min-height")};
  background-color: ${r("com/menu/item/action/background-color/default")};
`,Mr=O.div`
  padding-bottom: ${r("com/alert-banner/bottom-padding")};
`,Br=O.div`
  max-height: ${r("com/menu/max-height")};
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% + ${r("com/scrollbar/thumb/thumb-width/default")});
  position: relative;

  ${({$removeSelectedGroup:e})=>e&&pn`
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
`,Wr=O.div`
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
`;O.span`
  ${r("Subheading/XS")}
  color: ${r("com/menu/group-label/color-text")};
  padding-top: ${r("com/menu/group-label/vertical-padding")};
  padding-right: ${r("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${r("com/menu/group-label/vertical-padding")};
  padding-left: ${r("com/menu/group-label/horizontal-padding")};
  margin: 0;
`;const ue=O.input`
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
`,re=O.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${r("com/input/field/size-md/icon/left-padding")};
  color: ${r("com/input/field/default/icon/color-icon/default")};

  &.input-text-lg {
    margin-left: ${r("com/input/field/size-lg/icon/left-padding")};
  }
`,Qe=O.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/suffix/icon/color-icon")};
  width: ${r("com/input/suffix/icon/size-icon")};
  height: ${r("com/input/suffix/icon/size-icon")};
`,Ze=O.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/prefix/icon/color-icon")};
  width: ${r("com/input/prefix/icon/size-icon")};
  height: ${r("com/input/prefix/icon/size-icon")};
`,pe=O.span`
  ${r("Paragraph/XS")};
  color: ${r("com/input/dropdown/label/color-text/default")};
`,me=O.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/dropdown/icon/color-icon/default")};
`,Hr=O.div`
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
    ${pe} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${r("com/input/dropdown/background/pressed")};

    ${pe} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
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
`,Gr=O.div`
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
    ${pe} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${r("com/input/dropdown/background/pressed")};

    ${pe} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${me} {
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
`,Ur=O.div`
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
`,Yr=O.div`
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
`,Kt=O.span`
  ${r("Paragraph/Sm")};
  color: ${r("com/input/suffix/label/color-text")};
`,Jt=O.span`
  ${r("Paragraph/Sm")};
  color: ${r("com/input/prefix/label/color-text")};
`,Xr=O.div`
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

  &:has(${ue}:disabled),
  &:has(${ue}:read-only) {
    outline-color: ${r("com/input/field/disable/stroke-color")};
    background-color: ${r("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${re} {
      color: ${r("com/input/field/disable/icon-color")};
    }
    ${Qe} {
      color: ${r("com/input/field/disable/icon-color")};
    }
    ${Ze} {
      color: ${r("com/input/field/disable/icon-color")};
    }

    .icon-suffix {
      pointer-events: none;
      color: ${r("com/button/disable/icon-color")};
    }

    ${Jt} {
      color: ${r("com/input/field/disable/label-color")};
    }
    ${Kt} {
      color: ${r("com/input/field/disable/label-color")};
    }

    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &:has(${ue}:read-only) {
    cursor: default;
  }

  &:hover:not(:has(.icon-suffix:hover)) {
    outline-color: ${r("com/input/field/default/border/hover")};
    background-color: ${r("com/input/field/default/background/hover")};

    ${re} {
      color: ${r("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${ue}:focus) {
    outline-color: ${r("com/input/field/default/border/active")};
    background-color: ${r("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${r("com/actived-mark/gap-spacing")}
      ${r("com/actived-mark/color-gap-spacing")};

    ${re} {
      color: ${r("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.negative {
    outline-color: ${r("com/input/field/negative/border/default")};
    background-color: ${r("com/input/field/negative/background/default")};

    ${re} {
      color: ${r("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover {
      outline-color: ${r("com/input/field/negative/border/hover")};
      background-color: ${r("com/input/field/negative/background/hover")};

      ${re} {
        color: ${r("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &:has(${ue}:focus) {
      outline-color: ${r("com/input/field/negative/border/active")};
      background-color: ${r("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${r("com/actived-mark/gap-spacing")}
        ${r("com/actived-mark/color-gap-spacing-negative")};

      ${re} {
        color: ${r("com/input/field/negative/icon/color-icon/active")};
      }
    }

    &::placeholder {
      color: ${r("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,Kr=O.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
  width: 100%;
`,Jr=O.div`
  display: flex;
  justify-content: space-between;
`,Qr=O.span`
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
`,Zr=O(kn)`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,ei=O.div`
  position: relative;
  width: 100%;
`,De=x.forwardRef((e,t)=>{const{className:n,textLabel:i="",iconLabel:o,required:a,message:d,negative:s,positive:u,format:f="HH:mm:ss",disabled:l,onClickIconLabel:v,...y}=e,[p,$]=x.useState(""),[h,m]=x.useState(null),[V,j]=x.useState(!1),I=w=>{m(w),$(w?w.format(f):""),j(!1)},S=w=>{const C=w.target.value;$(C);const b=he(C,f,!0);b.isValid()?m(b):m(null)},k=()=>{j(!0)},g=w=>{w&&j(w)};return c.jsxs(Kr,{className:n,children:[(i||o)&&c.jsx($e,{textLabel:i,required:a,iconLabel:o,onClickIconLabel:v}),c.jsxs(ei,{children:[c.jsx(Be,{...y,ref:t,typeSuffix:"icon",iconSuffix:c.jsx(ln,{}),negative:s,value:p,onChange:S,onFocus:k,onClickSuffix:k}),c.jsx(Zr,{format:f,value:h,onChange:I,open:V,onOpenChange:g})]}),d&&c.jsx(Jr,{children:c.jsx(Qr,{className:W({disabled:l,negative:s,positive:u}),children:d})})]})});De.displayName="FISInputTime";const oo=De;try{De.displayName="FISInputTime",De.__docgenInfo={description:"",displayName:"FISInputTime",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const ti=O.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,ni=O.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ri=O(Rt)`
  position: absolute;
  opacity: 0;
  z-index: -1;
  height: 0;
`;function ii(...e){return t=>{e.forEach(n=>{n&&(typeof n=="function"?n(t):typeof n=="object"&&"current"in n&&(n.current=t))})}}const Ee=x.forwardRef((e,t)=>{const{value:n,textLabel:i="",iconLabel:o,required:a,message:d="",disabled:s,negative:u,positive:f,format:l="DD/MM/YYYY",onClickIconLabel:v,onChange:y,...p}=e,[$,h]=x.useState(!1),[m,V]=x.useState(n?he(n).format(l):""),[j,I]=x.useState(n?he(n):null),S=x.useRef(null),k=ii(S,t);x.useEffect(()=>{if(n){const b=he(n);I(b),V(b.format(l))}else I(null),V("")},[n,l]);const g=b=>{h(b)},w=b=>{const T=b?b.toDate():null;I(b),V(b?b.format(l):""),y==null||y(T),h(!1)},C=b=>{const T=b.target.value;V(T);const q=he(T,l);q.isValid()?(I(q),y==null||y(q.toDate())):(I(null),y==null||y(null))};return c.jsxs(ti,{children:[(i||o)&&c.jsx($e,{textLabel:i,required:a,iconLabel:o,onClickIconLabel:v}),c.jsxs(ni,{children:[c.jsx(Be,{...p,ref:k,typeSuffix:"icon",iconSuffix:c.jsx(un,{}),value:m,negative:u,disabled:s,onFocus:()=>h(!0),onChange:C,onClickSuffix:()=>h(!0)}),c.jsx(ri,{open:$,value:j,onChange:b=>w(b),onOpenChange:g,format:l,getPopupContainer:()=>{var b;return((b=S.current)==null?void 0:b.parentNode)||document.body}})]}),d&&c.jsx(Xt,{children:c.jsx(Me,{className:W({disabled:s,negative:u,positive:f}),children:d})})]})});Ee.displayName="FISInputDate";const ao=Ee;try{Ee.displayName="FISInputDate",Ee.__docgenInfo={description:"",displayName:"FISInputDate",props:{value:{defaultValue:null,description:"Date value",name:"value",required:!1,type:{name:"Date | null"}},format:{defaultValue:null,description:"Format Date",name:"format",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle on change action",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Et="portal-fis-component";function oi(){let e=document.getElementById(Et);return e||(e=document.createElement("div"),e.setAttribute("id",Et),document.body.appendChild(e))}function ze(e){const[t,n]=x.useState(null);return x.useLayoutEffect(()=>{n(e.container||oi())},[e.container]),t?zt.createPortal(e.children,t):null}try{ze.displayName="Portal",ze.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"The children to render into the `container`.",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"An HTML element or null.\nThe `container` will have the portal children appended to it.",name:"container",required:!1,type:{name:"HTMLElement | null"}}}}}catch{}const ai=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,li=O.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ui=O.div`
  margin-top: ${r("com/select/vertical-gap")};
`,si=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${r("com/chips-button/size-xs/height")} +
      ${r("com/combo-box/selected-data/horizontal-gap")}
  );
`,ci=O.div`
  width: 100%;
  display: flex;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  flex-wrap: wrap;
  box-sizing: border-box;
`,di=O.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  position: ${e=>e.$isVisible?"static":"absolute"};
`,fi=O.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
`,pi=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,mi=O.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,vi=O.div`
  margin-top: ${r("com/select/vertical-gap")};
`,gi=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${r("com/chips-button/size-xs/height")} +
      ${r("com/combo-box/selected-data/horizontal-gap")}
  );
`,Te=({options:e,onRemove:t})=>{const n=x.useRef(null),i=x.useRef(Array(e.length).fill(null)),[o,a]=x.useState([]),[d,s]=x.useState([]),[u,f]=x.useState(0),l=mn(),v=x.useCallback(()=>{if(!n.current||e.length===0)return;const h=n.current.clientWidth,m=Number(l["com/combo-box/selected-data/horizontal-gap"].replace("px",""));let V=0;const j=[];for(let g=0;g<e.length;g++){const w=i.current[g];if(!w)continue;const C=w.offsetWidth;if(V+C+m<=h)j.push(e[g]),V+=C+m;else break}let I=0,S=[];if(e.reduce((g,w,C)=>{if(C<j.length)return g;const b=i.current[C];if(!b)return g;const T=b.offsetWidth;return g+T+m},0)>h)for(let g=j.length;g<e.length;g++){const w=i.current[g];if(!w)continue;const C=w.offsetWidth;if(I+C+m+40<=h)S.push(e[g]),I+=C+m;else break}else S=e.slice(j.length);s(S),a(j),f(e.length-(j.length+S.length))},[e,l]),y=x.useCallback($=>{t==null||t($)},[t]),p=x.useCallback($=>o.some(h=>h.value===$.value)||d.some(h=>h.value===$.value),[o,d]);return x.useLayoutEffect(()=>{const $=()=>{v()};return v(),window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)},[v,e]),c.jsxs(ci,{ref:n,children:[e.map(($,h)=>c.jsx(di,{$isVisible:p($),children:c.jsx(bt,{ref:m=>i.current[h]=m,size:"xs",label:$.label,closeable:!0,onClickClose:()=>y($)},`${$.value}-${h}`)})),u>0&&c.jsx(fi,{$isVisible:!0,children:c.jsx(bt,{label:`+${u}`,size:"xs"})})]})};try{Te.displayName="MultipleValue",Te.__docgenInfo={description:"",displayName:"MultipleValue",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"FISComboboxOption<T>[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((option: FISComboboxOption<T>) => void)"}}}}}catch{}const Le=x.forwardRef(({className:e,options:t,value:n,disabled:i=!1,textLabel:o="",iconLabel:a,required:d,negative:s,message:u,positive:f,multi:l,placeholderSearch:v,loading:y,onChange:p,renderOption:$,onClickIconLabel:h,displayValue:m,multiDisplayText:V,...j},I)=>{const[S,k]=x.useState(!1),[g,w]=x.useState(null),[C,b]=x.useState(null),{styles:T,attributes:q}=Yt(g,C,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:"fixed"}),E=x.useCallback(()=>{i||k(P=>!P)},[i]);x.useEffect(()=>{const P=N=>{g&&!g.contains(N.target)&&C&&!C.contains(N.target)&&k(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[g,C]);const z=x.useMemo(()=>t.flatMap(P=>P.items),[t]),_=x.useMemo(()=>{if(l){const N=z.filter(B=>n.includes(B.value)).length;return V?V(N):`Selected ${N.toString().padStart(2,"0")} option${N!==1?"s":""}`}else{const P=z.find(N=>N.value===n);return P?(m==null?void 0:m(P))||P.label:""}},[n,z,l,m]),R=x.useMemo(()=>l?z.filter(P=>n.includes(P.value)).map(P=>({label:P.label,value:P.value})):n?z.filter(P=>P.value===n).map(P=>({label:P.label,value:P.value})):[],[z,n,l]),L=x.useCallback(P=>{if(l){const N=n.filter(B=>B!==P.value);p(N)}},[l,p,n]);return c.jsxs(ai,{className:e,children:[(o||a)&&c.jsx($e,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:h}),c.jsx(li,{ref:w,onClick:E,children:c.jsx(bn,{...j,ref:I,size:"md",readOnly:!0,iconSuffix:S?c.jsx(Tt,{}):c.jsx(Lt,{}),value:_,disabled:i,activeDropdown:S,onClickSuffix:E})}),u&&c.jsx(Me,{className:W({disabled:i,negative:s,positive:f}),children:u}),l&&n.length>0&&c.jsx(si,{children:c.jsx(Te,{options:R,onRemove:L})}),S&&c.jsx(ze,{children:c.jsx(ui,{ref:b,style:{...T.popper,width:g==null?void 0:g.offsetWidth},...q.popper,children:c.jsx(Qt,{groups:t,placeholder:v,loading:y,multi:l,selectedValues:l?n:n?[n]:[],onChangeSelected:P=>{l?p(P):(p(P[0]),k(!1))},onClickMenu:()=>{l||k(!1)},...j})})})]})});Le.displayName="FISSelect";const lo=Le;try{Le.displayName="FISSelect",Le.__docgenInfo={description:"",displayName:"FISSelect",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:null,description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: SelectOption) => ReactNode)"}},multi:{defaultValue:null,description:"",name:"multi",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: SelectOption) => string) | ((value: SelectOption[]) => string)"}}}}}catch{}const Re=x.forwardRef(({onClickSuffix:e,onClickPrefix:t,...n},i)=>{const{sizeInput:o="md",iconPrefix:a,iconSuffix:d,labelSuffix:s,labelPrefix:u,typeSuffix:f,typePrefix:l,disabled:v,negative:y,activeDropdown:p,...$}=n;return c.jsxs(Xr,{className:W({"input-text-lg":o==="lg",negative:y,dropdownSuffix:f==="dropdown",dropdownPrefix:l==="dropdown",iconPrefix:a,prefix:l==="prefix"||l==="dropdown",suffix:f==="suffix"||f==="dropdown",iconSuffix:f==="icon"}),children:[a&&l!=="prefix"&&l!=="dropdown"&&c.jsx(re,{className:W({"input-text-lg":o==="lg"}),children:a}),l==="prefix"&&c.jsxs(Yr,{onClick:t,className:W({disabled:v}),children:[a&&c.jsx(Ze,{children:a}),u&&c.jsx(Jt,{children:u})]}),l==="dropdown"&&c.jsxs(Gr,{className:W({"active-dropdown":p,disabled:v,"input-text-lg":o==="lg"}),onClick:t,children:[a&&c.jsx(me,{children:a}),u&&c.jsx(pe,{children:u}),c.jsx(Ze,{children:c.jsx(gt,{})})]}),c.jsx(ue,{...$,ref:i,disabled:v,className:W({negative:y,"input-text-lg":o==="lg",prefix:a,suffix:f==="icon"||f==="suffix"||f==="dropdown"})}),f==="icon"&&d&&c.jsx(vn,{size:"md",icon:d,variant:"tertiary-invisible",className:"icon-suffix",onClick:e,disabled:v}),f==="suffix"&&c.jsxs(Ur,{onClick:e,className:W({disabled:v}),children:[d&&c.jsx(Qe,{children:d}),s&&c.jsx(Kt,{children:s})]}),f==="dropdown"&&c.jsxs(Hr,{className:W({"active-dropdown":p,disabled:v,"input-text-lg":o==="lg"}),onClick:e,children:[d&&c.jsx(me,{children:d}),s&&c.jsx(pe,{children:s}),c.jsx(Qe,{children:c.jsx(gt,{})})]})]})});Re.displayName="FISInputField";const Be=Re;try{Re.displayName="FISInputField",Re.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}}}}}catch{}const Fe=x.forwardRef((e,t)=>{const{className:n,typeSuffix:i,textLabel:o="",iconLabel:a,required:d,iconPrefix:s,sizeInput:u,showCount:f,message:l,negative:v,positive:y,maxLength:p=500,disabled:$,onChange:h,onEnter:m,onKeyDown:V,onClickIconLabel:j,onClickSuffix:I,...S}=e,[k,g]=Ue.useState(""),w=Ue.useCallback(b=>{g(b.target.value),h&&h(b)},[h]),C=Ue.useCallback(b=>{b&&b.key==="Enter"&&m&&m(b.currentTarget.value)},[m]);return c.jsxs(Fr,{className:n,children:[(o||a)&&c.jsx($e,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:j}),c.jsx(Be,{...S,ref:t,typeSuffix:i,sizeInput:u,iconPrefix:s,onKeyPress:C,onChange:w,disabled:$,negative:v,onClickSuffix:I}),(l||f)&&c.jsxs(Xt,{children:[c.jsx(Me,{className:W({disabled:$,negative:v,positive:y}),children:l||""}),f&&p>0&&c.jsxs(Nr,{className:W({negative:(k==null?void 0:k.length)>p}),children:[k==null?void 0:k.length,"/",p]})]})]})});Fe.displayName="FISInputText";const hi=Fe;try{Fe.displayName="FISInputText",Fe.__docgenInfo={description:"",displayName:"FISInputText",props:{showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ne=({placeholder:e,groups:t,size:n="md",multi:i=!1,selectedValues:o=[],onChangeSelected:a,loading:d=!1,noData:s=!1,noResult:u=!1,combobox:f,className:l,onClickMenu:v,loadingText:y="Data loading...",noDataText:p="No data",noResultText:$="No result",removeSelectedText:h="Remove selected",selectedGroupLabel:m="Selected"})=>{const[V,j]=x.useState(""),I=x.useMemo(()=>{const q=i?{groupLabel:m,items:t.flatMap(R=>R.items).filter(R=>{var L;return(o==null?void 0:o.includes(R.value))&&((L=R==null?void 0:R.label)==null?void 0:L.toLowerCase().includes(V.toLowerCase()))})}:null,E=t.map(R=>({groupLabel:R.groupLabel,items:R.items.filter(L=>{var P;return(!i||!(o!=null&&o.includes(L.value)))&&((P=L==null?void 0:L.label)==null?void 0:P.toLowerCase().includes(V.toLowerCase()))})})).filter(R=>R.items.length>0),z=q&&q.items.length>0?[q,...E]:E,_=i&&o.length>0?{groupLabel:"",items:[{label:h,description:"",value:"__remove_selected__"}]}:null;return{search:V,selectedItemsGroup:q,otherGroups:E,filteredGroups:z,removeSelectedGroup:_}},[t,i,V,o,h,m]),k=t.reduce((q,E)=>q+E.items.length,0)>=7,g=V.trim()!=="",w=I.filteredGroups.length>0,C=g&&!w,b=q=>{j(q.target.value)},T=q=>{if(i){if(q.value==="__remove_selected__"){a==null||a([]);return}let E;o!=null&&o.includes(q.value)?E=o.filter(z=>z!==q.value):E=[...o||[],q.value],a==null||a(E);return}else{const E=(o==null?void 0:o[0])===q.value?[]:[q.value];a==null||a(E),v==null||v()}};return c.jsx(_r,{className:l,children:c.jsxs(Ar,{children:[k&&!f&&c.jsx(Mr,{children:c.jsx(hi,{iconPrefix:c.jsx(sn,{}),placeholder:e,onChange:b})}),(C||u)&&c.jsxs(Ye,{children:[c.jsx(jt,{children:c.jsx(cn,{})}),c.jsx(Xe,{children:$})]}),s&&c.jsxs(Ye,{children:[c.jsx(jt,{children:c.jsx(dn,{})}),c.jsx(Xe,{children:p})]}),d&&c.jsxs(Ye,{children:[c.jsx(xn,{size:n,variant:"indeterminate"}),c.jsx(Xe,{children:y})]}),!C&&c.jsxs(c.Fragment,{children:[c.jsx(Br,{$removeSelectedGroup:!!I.removeSelectedGroup,children:I.filteredGroups.map((q,E)=>c.jsxs(Dt,{children:[E!==0&&c.jsx(xt,{withDivider:!0}),c.jsx(xt,{label:q.groupLabel}),q.items.map((z,_)=>c.jsx(ht,{title:z.label,description:z.description,size:n,onClickMenu:()=>T(z),selected:o==null?void 0:o.includes(z.value),type:"select"},_))]},E))}),I.removeSelectedGroup&&c.jsx(Wr,{children:c.jsx(Dt,{children:I.removeSelectedGroup.items.map((q,E)=>c.jsx(ht,{title:q.label,description:q.description,size:n,onClickMenu:()=>a==null?void 0:a([]),type:"select",iconPrefix:c.jsx(fn,{}),negative:!0},E))})})]})]})})};Ne.displayName="FISMenuSelect";const Qt=Ne;try{Ne.displayName="FISMenuSelect",Ne.__docgenInfo={description:"",displayName:"FISMenuSelect",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},groups:{defaultValue:null,description:"",name:"groups",required:!0,type:{name:"MenuGroup[]"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},multi:{defaultValue:{value:"false"},description:"",name:"multi",required:!1,type:{name:"boolean"}},selectedValues:{defaultValue:{value:"[]"},description:"",name:"selectedValues",required:!1,type:{name:"string[]"}},onChangeSelected:{defaultValue:null,description:"",name:"onChangeSelected",required:!1,type:{name:"((values: string[]) => void)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},noData:{defaultValue:{value:"false"},description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:{value:"false"},description:"",name:"noResult",required:!1,type:{name:"boolean"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Data loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:{value:"No data"},description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"No result"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:{value:"Remove selected"},description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:{value:"Selected"},description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}}}}}catch{}const _e=x.forwardRef(({className:e,options:t,value:n,disabled:i=!1,textLabel:o="",iconLabel:a,required:d,negative:s,message:u,positive:f,multi:l,placeholderSearch:v,loading:y,onChange:p,renderOption:$,onClickIconLabel:h,displayValue:m,multiDisplayText:V,noResultText:j="Không tìm thấy kết quả",...I},S)=>{const[k,g]=x.useState(!1),[w,C]=x.useState(""),[b,T]=x.useState(null),[q,E]=x.useState(null),{styles:z,attributes:_}=Yt(b,q,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:"fixed"}),R=x.useMemo(()=>t.flatMap(D=>D.items),[t]),L=x.useMemo(()=>{if(l){const F=R.filter(Q=>n.includes(Q.value)).length;return V?V(F):`Selected ${F.toString().padStart(2,"0")} option${F!==1?"s":""}`}else{const D=R.find(F=>F.value===n);return D?(m==null?void 0:m(D))||D.label:""}},[n,R,l,m]),P=x.useCallback(()=>{i||(l?k||(g(!0),C("")):(g(D=>!D),k||C(L)))},[i,k,L,l]),N=x.useCallback(D=>{i||(g(!0),C(D.target.value))},[i]),B=x.useCallback(D=>{D.key==="Backspace"&&!w&&C("")},[w]);x.useEffect(()=>{const D=F=>{b&&!b.contains(F.target)&&q&&!q.contains(F.target)&&(g(!1),C(l?"":L))};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[b,q,l,L]);const ae=x.useMemo(()=>l?R.filter(D=>n.includes(D.value)).map(D=>({label:D.label,value:D.value})):n?R.filter(D=>D.value===n).map(D=>({label:D.label,value:D.value})):[],[R,n,l]),ve=x.useCallback(D=>{if(l){const F=n.filter(Q=>Q!==D.value);p(F)}},[l,p,n]),J=x.useMemo(()=>!w||w===L?t:t.map(D=>({...D,items:D.items.filter(F=>F.label.toLowerCase().includes(w.toLowerCase()))})),[t,w,L]),le=x.useMemo(()=>w?J.every(D=>D.items.length===0):!1,[J,w]);return c.jsxs(pi,{className:e,children:[(o||a)&&c.jsx($e,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:h}),c.jsx(mi,{ref:T,onClick:P,children:c.jsx(Be,{...I,ref:S,iconSuffix:k?c.jsx(Tt,{}):c.jsx(Lt,{}),value:k&&w!==void 0?w:L,disabled:i,onClickSuffix:P,onChange:N,onKeyDown:B})}),u&&c.jsx(Me,{className:W({disabled:i,negative:s,positive:f}),children:u}),l&&n.length>0&&c.jsx(gi,{children:c.jsx(Te,{options:ae,onRemove:ve})}),k&&c.jsx(ze,{children:c.jsx(vi,{ref:E,style:{...z.popper,width:b==null?void 0:b.offsetWidth},..._.popper,children:c.jsx(Qt,{groups:J,placeholder:v,loading:y,multi:l,combobox:!0,noResult:le,noResultText:j,selectedValues:l?n:n?[n]:[],onChangeSelected:D=>{l?p(D):(p(D[0]),g(!1),C(""))},onClickMenu:()=>{l||(g(!1),C(""))},...I})})})]})});_e.displayName="FISCombobox";const uo=_e;try{_e.displayName="FISCombobox",_e.__docgenInfo={description:"",displayName:"FISCombobox",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"Không tìm thấy kết quả"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: ComboboxOption) => ReactNode)"}},multi:{defaultValue:null,description:"",name:"multi",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: ComboboxOption) => string) | ((value: ComboboxOption[]) => string)"}}}}}catch{}export{uo as F,ao as a,Be as b,hi as c,oo as d,Qt as e,lo as f};
