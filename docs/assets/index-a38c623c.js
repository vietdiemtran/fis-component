import{j as c}from"./jsx-runtime-47c18db8.js";import{c as X}from"./index-d16835b1.js";import{r as g,g as cn,R as Je}from"./index-d806aa85.js";import{r as Nt}from"./index-35a52d1c.js";import{T as dn,p as pn,A as Mt,q as At,k as fn,r as mn,s as gn,m as $t,t as vn,N as hn,u as bn,v as xn}from"./LineArrowsUp-4acd88f0.js";import{F as ke}from"./index-7ba4325e.js";import{d as C,g as r,l as He,n as yn}from"./getTheme-624682de.js";import"./index-a60d625b.js";import"./index-b5e68206.js";import"./index-fc91568f.js";import{F as je}from"./index-96f4e19f.js";import"./index-fcfadd25.js";import"./index-4fe5a7ca.js";import"./index-bf2c6ecf.js";import"./index-b3be51e8.js";import"./index-6b92031d.js";import"./index-b7f7c535.js";import"./index-db014707.js";import"./index-baad6b63.js";import"./index-ffeb7169.js";import"./index-63636042.js";import"./index-1275b512.js";import"./index-55dfab6c.js";import"./index-28483a77.js";import{M as wt}from"./index-90a26468.js";import{F as St}from"./index-cb3c771c.js";import"./index-6b2c958e.js";import"./index-1c88f37d.js";import"./index-4280f93c.js";import"./ToastContext-b58ea5d4.js";import{F as kt}from"./index-56009584.js";import{D as Bt,d as xe}from"./index-8ba4b829.js";import{u as $n,g as wn}from"./index-a14b58ae.js";import{P as Sn}from"./index-721a2c0c.js";import"./index-d8d722f1.js";import"./FISSorter-721bb526.js";import"./index-3406f63d.js";import{F as kn}from"./index-8298a7d1.js";import"./index-55d04594.js";import"./index-d2a546a7.js";import{F as Cn}from"./index-eca51d54.js";import"./context-64a81616.js";var Vn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n};const{TimePicker:qn,RangePicker:Pn}=Bt,In=g.forwardRef((e,t)=>g.createElement(Pn,Object.assign({},e,{picker:"time",mode:void 0,ref:t}))),Ce=g.forwardRef((e,t)=>{var{addon:n,renderExtraFooter:i,variant:o,bordered:a}=e,d=Vn(e,["addon","renderExtraFooter","variant","bordered"]);const[s]=$n("timePicker",o,a),u=g.useMemo(()=>{if(i)return i;if(n)return n},[n,i]);return g.createElement(qn,Object.assign({},d,{mode:void 0,ref:t,renderExtraFooter:u,variant:s}))}),Wt=wn(Ce,"popupAlign",void 0,"picker");Ce._InternalPanelDoNotUseOrYouWillBeFired=Wt;Ce.RangePicker=In;Ce._InternalPanelDoNotUseOrYouWillBeFired=Wt;const jn=Ce;var Ct=function(t){return t.reduce(function(n,i){var o=i[0],a=i[1];return n[o]=a,n},{})},Vt=typeof window<"u"&&window.document&&window.document.createElement?g.useLayoutEffect:g.useEffect,U="top",J="bottom",Q="right",Y="left",ot="auto",Ve=[U,J,Q,Y],pe="start",we="end",On="clippingParents",Ht="viewport",be="popper",Dn="reference",qt=Ve.reduce(function(e,t){return e.concat([t+"-"+pe,t+"-"+we])},[]),Ut=[].concat(Ve,[ot]).reduce(function(e,t){return e.concat([t,t+"-"+pe,t+"-"+we])},[]),En="beforeRead",zn="read",Tn="afterRead",Rn="beforeMain",Ln="main",_n="afterMain",Fn="beforeWrite",Nn="write",Mn="afterWrite",An=[En,zn,Tn,Rn,Ln,_n,Fn,Nn,Mn];function ne(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=K(e).Element;return e instanceof t||e instanceof Element}function G(e){var t=K(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function at(e){if(typeof ShadowRoot>"u")return!1;var t=K(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Bn(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var i=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!G(a)||!ne(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(d){var s=o[d];s===!1?a.removeAttribute(d):a.setAttribute(d,s===!0?"":s)}))})}function Wn(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],a=t.attributes[i]||{},d=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:n[i]),s=d.reduce(function(u,p){return u[p]="",u},{});!G(o)||!ne(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(u){o.removeAttribute(u)}))})}}const Hn={name:"applyStyles",enabled:!0,phase:"write",fn:Bn,effect:Wn,requires:["computeStyles"]};function te(e){return e.split("-")[0]}var ce=Math.max,Ee=Math.min,fe=Math.round;function et(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Yt(){return!/^((?!chrome|android).)*safari/i.test(et())}function me(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),o=1,a=1;t&&G(e)&&(o=e.offsetWidth>0&&fe(i.width)/e.offsetWidth||1,a=e.offsetHeight>0&&fe(i.height)/e.offsetHeight||1);var d=de(e)?K(e):window,s=d.visualViewport,u=!Yt()&&n,p=(i.left+(u&&s?s.offsetLeft:0))/o,l=(i.top+(u&&s?s.offsetTop:0))/a,m=i.width/o,v=i.height/a;return{width:m,height:v,top:l,right:p+m,bottom:l+v,left:p,x:p,y:l}}function lt(e){var t=me(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function Xt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&at(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ae(e){return K(e).getComputedStyle(e)}function Un(e){return["table","td","th"].indexOf(ne(e))>=0}function se(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ue(e){return ne(e)==="html"?e:e.assignedSlot||e.parentNode||(at(e)?e.host:null)||se(e)}function Pt(e){return!G(e)||ae(e).position==="fixed"?null:e.offsetParent}function Yn(e){var t=/firefox/i.test(et()),n=/Trident/i.test(et());if(n&&G(e)){var i=ae(e);if(i.position==="fixed")return null}var o=Ue(e);for(at(o)&&(o=o.host);G(o)&&["html","body"].indexOf(ne(o))<0;){var a=ae(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function qe(e){for(var t=K(e),n=Pt(e);n&&Un(n)&&ae(n).position==="static";)n=Pt(n);return n&&(ne(n)==="html"||ne(n)==="body"&&ae(n).position==="static")?t:n||Yn(e)||t}function st(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ye(e,t,n){return ce(e,Ee(t,n))}function Xn(e,t,n){var i=ye(e,t,n);return i>n?n:i}function Kt(){return{top:0,right:0,bottom:0,left:0}}function Gt(e){return Object.assign({},Kt(),e)}function Jt(e,t){return t.reduce(function(n,i){return n[i]=e,n},{})}var Kn=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Gt(typeof t!="number"?t:Jt(t,Ve))};function Gn(e){var t,n=e.state,i=e.name,o=e.options,a=n.elements.arrow,d=n.modifiersData.popperOffsets,s=te(n.placement),u=st(s),p=[Y,Q].indexOf(s)>=0,l=p?"height":"width";if(!(!a||!d)){var m=Kn(o.padding,n),v=lt(a),f=u==="y"?U:Y,x=u==="y"?J:Q,b=n.rects.reference[l]+n.rects.reference[u]-d[u]-n.rects.popper[l],h=d[u]-n.rects.reference[u],j=qe(a),P=j?u==="y"?j.clientHeight||0:j.clientWidth||0:0,O=b/2-h/2,$=m[f],w=P-v[l]-m[x],y=P/2-v[l]/2+O,S=ye($,y,w),k=u;n.modifiersData[i]=(t={},t[k]=S,t.centerOffset=S-y,t)}}function Jn(e){var t=e.state,n=e.options,i=n.element,o=i===void 0?"[data-popper-arrow]":i;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Xt(t.elements.popper,o)&&(t.elements.arrow=o))}const Qn={name:"arrow",enabled:!0,phase:"main",fn:Gn,effect:Jn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ge(e){return e.split("-")[1]}var Zn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function er(e,t){var n=e.x,i=e.y,o=t.devicePixelRatio||1;return{x:fe(n*o)/o||0,y:fe(i*o)/o||0}}function It(e){var t,n=e.popper,i=e.popperRect,o=e.placement,a=e.variation,d=e.offsets,s=e.position,u=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,m=e.isFixed,v=d.x,f=v===void 0?0:v,x=d.y,b=x===void 0?0:x,h=typeof l=="function"?l({x:f,y:b}):{x:f,y:b};f=h.x,b=h.y;var j=d.hasOwnProperty("x"),P=d.hasOwnProperty("y"),O=Y,$=U,w=window;if(p){var y=qe(n),S="clientHeight",k="clientWidth";if(y===K(n)&&(y=se(n),ae(y).position!=="static"&&s==="absolute"&&(S="scrollHeight",k="scrollWidth")),y=y,o===U||(o===Y||o===Q)&&a===we){$=J;var V=m&&y===w&&w.visualViewport?w.visualViewport.height:y[S];b-=V-i.height,b*=u?1:-1}if(o===Y||(o===U||o===J)&&a===we){O=Q;var D=m&&y===w&&w.visualViewport?w.visualViewport.width:y[k];f-=D-i.width,f*=u?1:-1}}var L=Object.assign({position:s},p&&Zn),I=l===!0?er({x:f,y:b},K(n)):{x:f,y:b};if(f=I.x,b=I.y,u){var E;return Object.assign({},L,(E={},E[$]=P?"0":"",E[O]=j?"0":"",E.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+b+"px)":"translate3d("+f+"px, "+b+"px, 0)",E))}return Object.assign({},L,(t={},t[$]=P?b+"px":"",t[O]=j?f+"px":"",t.transform="",t))}function tr(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=i===void 0?!0:i,a=n.adaptive,d=a===void 0?!0:a,s=n.roundOffsets,u=s===void 0?!0:s,p={placement:te(t.placement),variation:ge(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,It(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:d,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,It(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const nr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:tr,data:{}};var Ie={passive:!0};function rr(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,a=o===void 0?!0:o,d=i.resize,s=d===void 0?!0:d,u=K(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(l){l.addEventListener("scroll",n.update,Ie)}),s&&u.addEventListener("resize",n.update,Ie),function(){a&&p.forEach(function(l){l.removeEventListener("scroll",n.update,Ie)}),s&&u.removeEventListener("resize",n.update,Ie)}}const ir={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:rr,data:{}};var or={left:"right",right:"left",bottom:"top",top:"bottom"};function Oe(e){return e.replace(/left|right|bottom|top/g,function(t){return or[t]})}var ar={start:"end",end:"start"};function jt(e){return e.replace(/start|end/g,function(t){return ar[t]})}function ut(e){var t=K(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function ct(e){return me(se(e)).left+ut(e).scrollLeft}function lr(e,t){var n=K(e),i=se(e),o=n.visualViewport,a=i.clientWidth,d=i.clientHeight,s=0,u=0;if(o){a=o.width,d=o.height;var p=Yt();(p||!p&&t==="fixed")&&(s=o.offsetLeft,u=o.offsetTop)}return{width:a,height:d,x:s+ct(e),y:u}}function sr(e){var t,n=se(e),i=ut(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ce(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),d=ce(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+ct(e),u=-i.scrollTop;return ae(o||n).direction==="rtl"&&(s+=ce(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:d,x:s,y:u}}function dt(e){var t=ae(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function Qt(e){return["html","body","#document"].indexOf(ne(e))>=0?e.ownerDocument.body:G(e)&&dt(e)?e:Qt(Ue(e))}function $e(e,t){var n;t===void 0&&(t=[]);var i=Qt(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),a=K(i),d=o?[a].concat(a.visualViewport||[],dt(i)?i:[]):i,s=t.concat(d);return o?s:s.concat($e(Ue(d)))}function tt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ur(e,t){var n=me(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ot(e,t,n){return t===Ht?tt(lr(e,n)):de(t)?ur(t,n):tt(sr(se(e)))}function cr(e){var t=$e(Ue(e)),n=["absolute","fixed"].indexOf(ae(e).position)>=0,i=n&&G(e)?qe(e):e;return de(i)?t.filter(function(o){return de(o)&&Xt(o,i)&&ne(o)!=="body"}):[]}function dr(e,t,n,i){var o=t==="clippingParents"?cr(e):[].concat(t),a=[].concat(o,[n]),d=a[0],s=a.reduce(function(u,p){var l=Ot(e,p,i);return u.top=ce(l.top,u.top),u.right=Ee(l.right,u.right),u.bottom=Ee(l.bottom,u.bottom),u.left=ce(l.left,u.left),u},Ot(e,d,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Zt(e){var t=e.reference,n=e.element,i=e.placement,o=i?te(i):null,a=i?ge(i):null,d=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,u;switch(o){case U:u={x:d,y:t.y-n.height};break;case J:u={x:d,y:t.y+t.height};break;case Q:u={x:t.x+t.width,y:s};break;case Y:u={x:t.x-n.width,y:s};break;default:u={x:t.x,y:t.y}}var p=o?st(o):null;if(p!=null){var l=p==="y"?"height":"width";switch(a){case pe:u[p]=u[p]-(t[l]/2-n[l]/2);break;case we:u[p]=u[p]+(t[l]/2-n[l]/2);break}}return u}function Se(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=i===void 0?e.placement:i,a=n.strategy,d=a===void 0?e.strategy:a,s=n.boundary,u=s===void 0?On:s,p=n.rootBoundary,l=p===void 0?Ht:p,m=n.elementContext,v=m===void 0?be:m,f=n.altBoundary,x=f===void 0?!1:f,b=n.padding,h=b===void 0?0:b,j=Gt(typeof h!="number"?h:Jt(h,Ve)),P=v===be?Dn:be,O=e.rects.popper,$=e.elements[x?P:v],w=dr(de($)?$:$.contextElement||se(e.elements.popper),u,l,d),y=me(e.elements.reference),S=Zt({reference:y,element:O,strategy:"absolute",placement:o}),k=tt(Object.assign({},O,S)),V=v===be?k:y,D={top:w.top-V.top+j.top,bottom:V.bottom-w.bottom+j.bottom,left:w.left-V.left+j.left,right:V.right-w.right+j.right},L=e.modifiersData.offset;if(v===be&&L){var I=L[o];Object.keys(D).forEach(function(E){var _=[Q,J].indexOf(E)>=0?1:-1,B=[U,J].indexOf(E)>=0?"y":"x";D[E]+=I[B]*_})}return D}function pr(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=n.boundary,a=n.rootBoundary,d=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,p=u===void 0?Ut:u,l=ge(i),m=l?s?qt:qt.filter(function(x){return ge(x)===l}):Ve,v=m.filter(function(x){return p.indexOf(x)>=0});v.length===0&&(v=m);var f=v.reduce(function(x,b){return x[b]=Se(e,{placement:b,boundary:o,rootBoundary:a,padding:d})[te(b)],x},{});return Object.keys(f).sort(function(x,b){return f[x]-f[b]})}function fr(e){if(te(e)===ot)return[];var t=Oe(e);return[jt(e),t,jt(t)]}function mr(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,d=n.altAxis,s=d===void 0?!0:d,u=n.fallbackPlacements,p=n.padding,l=n.boundary,m=n.rootBoundary,v=n.altBoundary,f=n.flipVariations,x=f===void 0?!0:f,b=n.allowedAutoPlacements,h=t.options.placement,j=te(h),P=j===h,O=u||(P||!x?[Oe(h)]:fr(h)),$=[h].concat(O).reduce(function(Z,q){return Z.concat(te(q)===ot?pr(t,{placement:q,boundary:l,rootBoundary:m,padding:p,flipVariations:x,allowedAutoPlacements:b}):q)},[]),w=t.rects.reference,y=t.rects.popper,S=new Map,k=!0,V=$[0],D=0;D<$.length;D++){var L=$[D],I=te(L),E=ge(L)===pe,_=[U,J].indexOf(I)>=0,B=_?"width":"height",F=Se(t,{placement:L,boundary:l,rootBoundary:m,altBoundary:v,padding:p}),N=_?E?Q:Y:E?J:U;w[B]>y[B]&&(N=Oe(N));var T=Oe(N),z=[];if(a&&z.push(F[I]<=0),s&&z.push(F[N]<=0,F[T]<=0),z.every(function(Z){return Z})){V=L,k=!1;break}S.set(L,z)}if(k)for(var M=x?3:1,re=function(q){var W=$.find(function(R){var A=S.get(R);if(A)return A.slice(0,q).every(function(H){return H})});if(W)return V=W,"break"},ie=M;ie>0;ie--){var ee=re(ie);if(ee==="break")break}t.placement!==V&&(t.modifiersData[i]._skip=!0,t.placement=V,t.reset=!0)}}const gr={name:"flip",enabled:!0,phase:"main",fn:mr,requiresIfExists:["offset"],data:{_skip:!1}};function Dt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Et(e){return[U,Q,J,Y].some(function(t){return e[t]>=0})}function vr(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,d=Se(t,{elementContext:"reference"}),s=Se(t,{altBoundary:!0}),u=Dt(d,i),p=Dt(s,o,a),l=Et(u),m=Et(p);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vr};function br(e,t,n){var i=te(e),o=[Y,U].indexOf(i)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,d=a[0],s=a[1];return d=d||0,s=(s||0)*o,[Y,Q].indexOf(i)>=0?{x:s,y:d}:{x:d,y:s}}function xr(e){var t=e.state,n=e.options,i=e.name,o=n.offset,a=o===void 0?[0,0]:o,d=Ut.reduce(function(l,m){return l[m]=br(m,t.rects,a),l},{}),s=d[t.placement],u=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=p),t.modifiersData[i]=d}const yr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xr};function $r(e){var t=e.state,n=e.name;t.modifiersData[n]=Zt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const wr={name:"popperOffsets",enabled:!0,phase:"read",fn:$r,data:{}};function Sr(e){return e==="x"?"y":"x"}function kr(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,a=o===void 0?!0:o,d=n.altAxis,s=d===void 0?!1:d,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,m=n.padding,v=n.tether,f=v===void 0?!0:v,x=n.tetherOffset,b=x===void 0?0:x,h=Se(t,{boundary:u,rootBoundary:p,padding:m,altBoundary:l}),j=te(t.placement),P=ge(t.placement),O=!P,$=st(j),w=Sr($),y=t.modifiersData.popperOffsets,S=t.rects.reference,k=t.rects.popper,V=typeof b=="function"?b(Object.assign({},t.rects,{placement:t.placement})):b,D=typeof V=="number"?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(y){if(a){var E,_=$==="y"?U:Y,B=$==="y"?J:Q,F=$==="y"?"height":"width",N=y[$],T=N+h[_],z=N-h[B],M=f?-k[F]/2:0,re=P===pe?S[F]:k[F],ie=P===pe?-k[F]:-S[F],ee=t.elements.arrow,Z=f&&ee?lt(ee):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Kt(),W=q[_],R=q[B],A=ye(0,S[F],Z[F]),H=O?S[F]/2-M-A-W-D.mainAxis:re-A-W-D.mainAxis,rn=O?-S[F]/2+M+A+R+D.mainAxis:ie+A+R+D.mainAxis,Ke=t.elements.arrow&&qe(t.elements.arrow),on=Ke?$==="y"?Ke.clientTop||0:Ke.clientLeft||0:0,pt=(E=L==null?void 0:L[$])!=null?E:0,an=N+H-pt-on,ln=N+rn-pt,ft=ye(f?Ee(T,an):T,N,f?ce(z,ln):z);y[$]=ft,I[$]=ft-N}if(s){var mt,sn=$==="x"?U:Y,un=$==="x"?J:Q,ue=y[w],Pe=w==="y"?"height":"width",gt=ue+h[sn],vt=ue-h[un],Ge=[U,Y].indexOf(j)!==-1,ht=(mt=L==null?void 0:L[w])!=null?mt:0,bt=Ge?gt:ue-S[Pe]-k[Pe]-ht+D.altAxis,xt=Ge?ue+S[Pe]+k[Pe]-ht-D.altAxis:vt,yt=f&&Ge?Xn(bt,ue,xt):ye(f?bt:gt,ue,f?xt:vt);y[w]=yt,I[w]=yt-ue}t.modifiersData[i]=I}}const Cr={name:"preventOverflow",enabled:!0,phase:"main",fn:kr,requiresIfExists:["offset"]};function Vr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function qr(e){return e===K(e)||!G(e)?ut(e):Vr(e)}function Pr(e){var t=e.getBoundingClientRect(),n=fe(t.width)/e.offsetWidth||1,i=fe(t.height)/e.offsetHeight||1;return n!==1||i!==1}function Ir(e,t,n){n===void 0&&(n=!1);var i=G(t),o=G(t)&&Pr(t),a=se(t),d=me(e,o,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&((ne(t)!=="body"||dt(a))&&(s=qr(t)),G(t)?(u=me(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ct(a))),{x:d.left+s.scrollLeft-u.x,y:d.top+s.scrollTop-u.y,width:d.width,height:d.height}}function jr(e){var t=new Map,n=new Set,i=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var d=[].concat(a.requires||[],a.requiresIfExists||[]);d.forEach(function(s){if(!n.has(s)){var u=t.get(s);u&&o(u)}}),i.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),i}function Or(e){var t=jr(e);return An.reduce(function(n,i){return n.concat(t.filter(function(o){return o.phase===i}))},[])}function Dr(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Er(e){var t=e.reduce(function(n,i){var o=n[i.name];return n[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,n},{});return Object.keys(t).map(function(n){return t[n]})}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function Tt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function zr(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,i=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?zt:o;return function(s,u,p){p===void 0&&(p=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},m=[],v=!1,f={state:l,setOptions:function(j){var P=typeof j=="function"?j(l.options):j;b(),l.options=Object.assign({},a,l.options,P),l.scrollParents={reference:de(s)?$e(s):s.contextElement?$e(s.contextElement):[],popper:$e(u)};var O=Or(Er([].concat(i,l.options.modifiers)));return l.orderedModifiers=O.filter(function($){return $.enabled}),x(),f.update()},forceUpdate:function(){if(!v){var j=l.elements,P=j.reference,O=j.popper;if(Tt(P,O)){l.rects={reference:Ir(P,qe(O),l.options.strategy==="fixed"),popper:lt(O)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(D){return l.modifiersData[D.name]=Object.assign({},D.data)});for(var $=0;$<l.orderedModifiers.length;$++){if(l.reset===!0){l.reset=!1,$=-1;continue}var w=l.orderedModifiers[$],y=w.fn,S=w.options,k=S===void 0?{}:S,V=w.name;typeof y=="function"&&(l=y({state:l,options:k,name:V,instance:f})||l)}}}},update:Dr(function(){return new Promise(function(h){f.forceUpdate(),h(l)})}),destroy:function(){b(),v=!0}};if(!Tt(s,u))return f;f.setOptions(p).then(function(h){!v&&p.onFirstUpdate&&p.onFirstUpdate(h)});function x(){l.orderedModifiers.forEach(function(h){var j=h.name,P=h.options,O=P===void 0?{}:P,$=h.effect;if(typeof $=="function"){var w=$({state:l,name:j,instance:f,options:O}),y=function(){};m.push(w||y)}})}function b(){m.forEach(function(h){return h()}),m=[]}return f}}var Tr=[ir,wr,nr,Hn,yr,gr,Cr,Qn,hr],Rr=zr({defaultModifiers:Tr}),Lr=typeof Element<"u",_r=typeof Map=="function",Fr=typeof Set=="function",Nr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function De(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!De(e[i],t[i]))return!1;return!0}var a;if(_r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;for(a=e.entries();!(i=a.next()).done;)if(!De(i.value[1],t.get(i.value[0])))return!1;return!0}if(Fr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;return!0}if(Nr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;if(Lr&&e instanceof Element)return!1;for(i=n;i--!==0;)if(!((o[i]==="_owner"||o[i]==="__v"||o[i]==="__o")&&e.$$typeof)&&!De(e[o[i]],t[o[i]]))return!1;return!0}return e!==e&&t!==t}var Mr=function(t,n){try{return De(t,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const Ar=cn(Mr);var Br=[],en=function(t,n,i){i===void 0&&(i={});var o=g.useRef(null),a={onFirstUpdate:i.onFirstUpdate,placement:i.placement||"bottom",strategy:i.strategy||"absolute",modifiers:i.modifiers||Br},d=g.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=d[0],u=d[1],p=g.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var x=f.state,b=Object.keys(x.elements);Nt.flushSync(function(){u({styles:Ct(b.map(function(h){return[h,x.styles[h]||{}]})),attributes:Ct(b.map(function(h){return[h,x.attributes[h]]}))})})},requires:["computeStyles"]}},[]),l=g.useMemo(function(){var v={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[p,{name:"applyStyles",enabled:!1}])};return Ar(o.current,v)?o.current||v:(o.current=v,v)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,p]),m=g.useRef();return Vt(function(){m.current&&m.current.setOptions(l)},[l]),Vt(function(){if(!(t==null||n==null)){var v=i.createPopper||Rr,f=v(t,n,l);return m.current=f,function(){f.destroy(),m.current=null}}},[t,n,i.createPopper]),{state:m.current?m.current.state:null,styles:s.styles,attributes:s.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}};const Wr=C.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
  width: 100%;
`,Hr=C.span`
  ${r("Subheading/XS")}
  color: ${r("com/input/character-limit/label/default/color-text")};
  padding-right: ${r("com/input/character-limit/horizontal-padding")};
  padding-left: ${r("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${r("com/input/character-limit/label/over-limit/color-text")};
  }
`,tn=C.div`
  display: flex;
  justify-content: space-between;
`,Ye=C.span`
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
`,Ur=C.div`
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
`,Qe=C.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r("com/menu/item/horizontal-gap")};
`,Rt=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ze=C.p`
  margin: 0;
  ${r("Paragraph/Sm")}
  color: ${r("com/menu/item/action/label/color-text/default")};
`;C.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;const Lt=C.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/menu/item/horizontal-gap")};
  /* min-width: ${r("com/menu/item/min-width")}; */
  min-height: ${r("com/menu/item/size-md/min-height")};
  background-color: ${r("com/menu/item/action/background-color/default")};
`,Yr=C.div`
  padding-bottom: ${r("com/alert-banner/bottom-padding")};
`,Xr=C.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% + ${r("com/scrollbar/thumb/thumb-width/default")});
  position: relative;

  ${({$removeSelectedGroup:e})=>e&&He`
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
`,Kr=C.div`
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
`;C.span`
  ${r("Subheading/XS")}
  color: ${r("com/menu/group-label/color-text")};
  padding-top: ${r("com/menu/group-label/vertical-padding")};
  padding-right: ${r("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${r("com/menu/group-label/vertical-padding")};
  padding-left: ${r("com/menu/group-label/horizontal-padding")};
  margin: 0;
`;const oe=C.input`
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
`,le=C.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-left: ${r("com/input/field/size-md/icon/left-padding")};
  color: ${r("com/input/field/default/icon/color-icon/default")};

  &.input-text-lg {
    margin-left: ${r("com/input/field/size-lg/icon/left-padding")};
  }
`,ze=C.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/suffix/icon/color-icon")};
  width: ${r("com/input/suffix/icon/size-icon")};
  height: ${r("com/input/suffix/icon/size-icon")};
`,Te=C.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/prefix/icon/color-icon")};
  width: ${r("com/input/prefix/icon/size-icon")};
  height: ${r("com/input/prefix/icon/size-icon")};
`,ve=C.span`
  ${r("Paragraph/XS")};
  color: ${r("com/input/dropdown/label/color-text/default")};
`,he=C.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${r("com/input/dropdown/icon/color-icon/default")};
`,Gr=C.div`
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
    ${ve} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${he} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${r("com/input/dropdown/background/pressed")};

    ${ve} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${he} {
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
`,Jr=C.div`
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
    ${ve} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${he} {
      color: ${r("com/input/dropdown/icon/color-icon/hover")};
    }
  }

  &:active {
    background-color: ${r("com/input/dropdown/background/pressed")};

    ${ve} {
      color: ${r("com/input/dropdown/label/color-text/hover")};
    }

    ${he} {
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
`,Qr=C.div`
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
`,Zr=C.div`
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
`,nt=C.span`
  ${r("Paragraph/Sm")};
  color: ${r("com/input/suffix/label/color-text")};
`,rt=C.span`
  ${r("Paragraph/Sm")};
  color: ${r("com/input/prefix/label/color-text")};
`,ei=C.div`
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

  &:has(${oe}:disabled) {
    outline-color: ${r("com/input/field/disable/stroke-color")};
    background-color: ${r("com/input/field/disable/background-color")};
    cursor: not-allowed;

    ${oe} {
      cursor: not-allowed;
    }

    ${le} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }
    ${ze} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }
    ${Te} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: not-allowed;
    }

    .icon-suffix {
      pointer-events: none;
      color: ${r("com/button/disable/icon-color")};
      cursor: not-allowed;
    }

    ${rt} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: not-allowed;
    }
    ${nt} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &:has(${oe}:read-only):not(:has(${oe}:disabled)) {
    cursor: default;
    outline-color: ${r("com/input/field/disable/stroke-color")};
    background-color: ${r("com/input/field/disable/background-color")};

    ${oe} {
      cursor: default;
    }

    ${le} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: default;
    }
    ${ze} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: default;
    }
    ${Te} {
      color: ${r("com/input/field/disable/icon-color")};
      cursor: default;
    }

    .icon-suffix {
      pointer-events: none;
      color: ${r("com/button/disable/icon-color")};
      cursor: default;
    }

    ${rt} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: default;
    }
    ${nt} {
      color: ${r("com/input/field/disable/label-color")};
      cursor: default;
    }

    &::placeholder {
      color: ${r("com/input/field/disable/label-color")};
    }
  }

  &:hover:not(:has(${oe}:disabled)):not(:has(.icon-suffix:hover)) {
    outline-color: ${r("com/input/field/default/border/hover")};
    background-color: ${r("com/input/field/default/background/hover")};

    ${le} {
      color: ${r("com/input/field/default/icon/color-icon/hover")};
    }
  }
  &:has(${oe}:focus) {
    outline-color: ${r("com/input/field/default/border/active")};
    background-color: ${r("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${r("com/actived-mark/gap-spacing")}
      ${r("com/actived-mark/color-gap-spacing")};

    ${le} {
      color: ${r("com/input/field/default/icon/color-icon/active")};
    }
  }
  &.negative {
    outline-color: ${r("com/input/field/negative/border/default")};
    background-color: ${r("com/input/field/negative/background/default")};

    ${le} {
      color: ${r("com/input/field/negative/icon/color-icon/default")};
    }

    &:hover {
      outline-color: ${r("com/input/field/negative/border/hover")};
      background-color: ${r("com/input/field/negative/background/hover")};

      ${le} {
        color: ${r("com/input/field/negative/icon/color-icon/hover")};
      }
    }

    &:has(${oe}:focus) {
      outline-color: ${r("com/input/field/negative/border/active")};
      background-color: ${r("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${r("com/actived-mark/gap-spacing")}
        ${r("com/actived-mark/color-gap-spacing-negative")};

      ${le} {
        color: ${r("com/input/field/negative/icon/color-icon/active")};
      }
    }

    &::placeholder {
      color: ${r("com/input/field/negative/label/color-text/placeholder")};
    }
  }
`,ti=C.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
  width: 100%;
`,ni=C.div`
  display: flex;
  justify-content: space-between;
`,ri=C.span`
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
`,ii=C(jn)`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,oi=C.div`
  position: relative;
  width: 100%;
`,Re=g.forwardRef((e,t)=>{const{className:n,textLabel:i="",iconLabel:o,required:a,message:d,negative:s,positive:u,format:p="HH:mm:ss",disabled:l,onChange:m,onClickIconLabel:v,getPopupContainer:f,...x}=e,[b,h]=g.useState(""),[j,P]=g.useState(null),[O,$]=g.useState(!1),w=g.useRef(null),y=g.useRef(null);g.useEffect(()=>{const I=E=>{var B;const _=E.target;w.current&&!w.current.contains(_)&&!((B=document.querySelector(".ant-picker-dropdown"))!=null&&B.contains(_))&&$(!1)};return O&&document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}},[O]);const S=I=>{m==null||m(I?I.toDate():null),P(I),h(I?I.format(p):""),$(!1)},k=I=>{const E=I.target.value;h(E);const _=xe(E,p,!0);_.isValid()?(m==null||m(_.toDate()),P(_)):(m==null||m(null),P(null))},V=()=>{l||$(!0)},D=I=>{$(I)},L=I=>{I.key==="Escape"&&$(!1)};return c.jsxs(ti,{className:n,ref:w,children:[(i||o)&&c.jsx(ke,{textLabel:i,required:a,iconLabel:o,onClickIconLabel:v}),c.jsxs(oi,{children:[c.jsx(Xe,{...x,ref:t,typeSuffix:"icon",iconSuffix:c.jsx(dn,{}),negative:s,disabled:l,value:b,onChange:k,onFocus:V,onClickSuffix:V,onKeyDown:L}),c.jsx(ii,{ref:y,format:p,value:j,onChange:S,open:O,onOpenChange:D,getPopupContainer:f,showNow:!0,inputReadOnly:!0})]}),d&&c.jsx(ni,{children:c.jsx(ri,{className:X({disabled:l,negative:s,positive:u}),children:d})})]})});Re.displayName="FISInputTime";const xo=Re;try{Re.displayName="FISInputTime",Re.__docgenInfo={description:"",displayName:"FISInputTime",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement)"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const ai=C.div`
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,li=C.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,si=C(Bt)`
  position: absolute;
  opacity: 0;
  z-index: -1;
  height: 0;
`;function ui(...e){return t=>{e.forEach(n=>{n&&(typeof n=="function"?n(t):typeof n=="object"&&"current"in n&&(n.current=t))})}}const Le=g.forwardRef((e,t)=>{const{className:n,value:i,textLabel:o="",iconLabel:a,required:d,message:s="",disabled:u,negative:p,positive:l,format:m="DD/MM/YYYY",onClickIconLabel:v,onChange:f,getPopupContainer:x,minDate:b,maxDate:h,...j}=e,[P,O]=g.useState(!1),[$,w]=g.useState(i?xe(i).format(m):""),[y,S]=g.useState(i?xe(i):null),k=g.useRef(null),V=ui(k,t);g.useEffect(()=>{if(i){const E=xe(i);S(E),w(E.format(m))}else S(null),w("")},[i,m]);const D=E=>{O(E)},L=E=>{const _=E?E.toDate():null;S(E),w(E?E.format(m):""),f==null||f(_),O(!1)},I=E=>{const _=E.target.value;w(_);const B=xe(_,m);B.isValid()?(S(B),f==null||f(B.toDate())):(S(null),f==null||f(null))};return c.jsxs(ai,{className:n,children:[(o||a)&&c.jsx(ke,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:v}),c.jsxs(li,{children:[c.jsx(Xe,{...j,ref:V,typeSuffix:"icon",iconSuffix:c.jsx(pn,{}),value:$,negative:p,disabled:u,onFocus:()=>O(!0),onChange:I,onClickSuffix:()=>O(!0)}),c.jsx(si,{open:P,value:y,onChange:E=>L(E),onOpenChange:D,format:m,getPopupContainer:x,minDate:b,maxDate:h})]}),s&&c.jsx(tn,{children:c.jsx(Ye,{className:X({disabled:u,negative:p,positive:l}),children:s})})]})});Le.displayName="FISInputDate";const yo=Le;try{Le.displayName="FISInputDate",Le.__docgenInfo={description:"",displayName:"FISInputDate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Date value",name:"value",required:!1,type:{name:"Date | null"}},format:{defaultValue:null,description:"Format Date",name:"format",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle on change action",name:"onChange",required:!1,type:{name:"((date: Date | null) => void)"}},getPopupContainer:{defaultValue:null,description:`Function that returns the HTML element to render the popup container into.
Useful for controlling where the date picker dropdown is attached in the DOM.`,name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement)"}},minDate:{defaultValue:null,description:"The minimum selectable date. Dates before this value will be disabled.",name:"minDate",required:!1,type:{name:"Dayjs"}},maxDate:{defaultValue:null,description:"The maximum selectable date. Dates after this value will be disabled.",name:"maxDate",required:!1,type:{name:"Dayjs"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const _t="portal-fis-component";function ci(){let e=document.getElementById(_t);return e||(e=document.createElement("div"),e.setAttribute("id",_t),document.body.appendChild(e))}function _e({container:e,children:t,portal:n}){const[i,o]=g.useState(null);return g.useLayoutEffect(()=>{o(e||ci())},[e]),n?i?Nt.createPortal(t,i):null:t||null}try{_e.displayName="Portal",_e.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"The children to render into the `container`.",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"An HTML element or null.\nThe `container` will have the portal children appended to it.",name:"container",required:!1,type:{name:"HTMLElement | null"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"boolean"}}}}}catch{}const di=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,Ft=He`
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  cursor: pointer !important;
`,pi=C.div`
  position: relative;
  display: inline-block;
  width: 100%;

  ${e=>e.$hasValue&&He`
      ${Ft}

      input {
        ${Ft}
        pointer-events: none;
      }
    `}
`,fi=C.div`
  /* margin-top: ${r("com/select/vertical-gap")}; */
`,mi=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${r("com/chips-button/size-xs/height")} +
      ${r("com/combo-box/selected-data/horizontal-gap")}
  );
`,gi=C.div`
  width: 100%;
  display: flex;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  flex-wrap: wrap;
  box-sizing: border-box;
`,vi=C.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  position: ${e=>e.$isVisible?"static":"absolute"};
`,hi=C.div`
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
`,bi=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${r("com/input/vertical-gap")};
`,xi=C.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,yi=C.div`
  margin-top: ${r("com/select/vertical-gap")};
`,$i=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r("com/combo-box/selected-data/horizontal-gap")};
  width: 100%;
  max-height: calc(
    2 * ${r("com/chips-button/size-xs/height")} +
      ${r("com/combo-box/selected-data/horizontal-gap")}
  );
`,Fe=({options:e,onRemove:t})=>{const n=g.useRef(null),i=g.useRef(Array(e.length).fill(null)),[o,a]=g.useState([]),[d,s]=g.useState([]),[u,p]=g.useState(0),l=yn(),m=g.useCallback(()=>{if(!n.current||e.length===0)return;const b=n.current.clientWidth,h=Number(l["com/combo-box/selected-data/horizontal-gap"].replace("px",""));let j=0;const P=[];for(let y=0;y<e.length;y++){const S=i.current[y];if(!S)continue;const k=S.offsetWidth;if(j+k+h<=b)P.push(e[y]),j+=k+h;else break}let O=0,$=[];if(e.reduce((y,S,k)=>{if(k<P.length)return y;const V=i.current[k];if(!V)return y;const D=V.offsetWidth;return y+D+h},0)>b)for(let y=P.length;y<e.length;y++){const S=i.current[y];if(!S)continue;const k=S.offsetWidth;if(O+k+h+40<=b)$.push(e[y]),O+=k+h;else break}else $=e.slice(P.length);s($),a(P),p(e.length-(P.length+$.length))},[e,l]),v=g.useCallback(x=>{t==null||t(x)},[t]),f=g.useCallback(x=>o.some(b=>b.value===x.value)||d.some(b=>b.value===x.value),[o,d]);return g.useLayoutEffect(()=>{let x=!0,b=requestAnimationFrame(()=>{x&&n.current&&m()});const h=new ResizeObserver(()=>{x&&n.current&&m()});n.current&&h.observe(n.current);const j=()=>{x&&m()};return window.addEventListener("resize",j),()=>{x=!1,cancelAnimationFrame(b),h.disconnect(),window.removeEventListener("resize",j)}},[m,e]),c.jsxs(gi,{ref:n,children:[e.map((x,b)=>c.jsx(vi,{$isVisible:f(x),children:c.jsx(kt,{ref:h=>i.current[b]=h,size:"xs",label:x.label,closeable:!0,onClickClose:()=>v(x)})},`${x.value}-${b}`)),u>0&&c.jsx(hi,{$isVisible:!0,children:c.jsx(kt,{label:`+${u}`,size:"xs"})})]})};try{Fe.displayName="MultipleValue",Fe.__docgenInfo={description:"",displayName:"MultipleValue",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"FISComboboxOption<T>[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((option: FISComboboxOption<T>) => void)"}}}}}catch{}function it(e){return e==="sm"||e==="md"}try{it.displayName="isMenuSize",it.__docgenInfo={description:"",displayName:"isMenuSize",props:{}}}catch{}const Ne=g.forwardRef(({className:e,style:t,size:n="md",options:i,value:o,disabled:a=!1,textLabel:d="",iconLabel:s,required:u,negative:p,message:l,positive:m,multi:v,placeholderSearch:f,loading:x,onChange:b,renderOption:h,onClickIconLabel:j,displayValue:P,multiDisplayText:O,searchValue:$,onSearchChange:w,portal:y,maxHeight:S,...k},V)=>{const[D,L]=g.useState(!1),[I,E]=g.useState(null),[_,B]=g.useState(null),F=g.useMemo(()=>({modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}},{name:"offset",options:{offset:[0,4]}}],placement:"bottom-start",strategy:"fixed"}),[]),{styles:N,attributes:T}=en(I,_,F),z=g.useRef(i);g.useEffect(()=>{const R=new Map;i.forEach(A=>{A.items.forEach(H=>{R.set(H.value,H)})}),v&&Array.isArray(o)&&z.current.flatMap(H=>H.items).filter(H=>o.includes(H.value)).forEach(H=>{R.set(H.value,H)}),z.current=[{items:Array.from(R.values())}]},[i,o,v]);const M=g.useMemo(()=>{const R=i.flatMap(A=>A.items);if(v)return R.filter(A=>o.includes(A.value));{const A=R.find(H=>H.value===o);return A?[A]:[]}},[o,v,i]),re=()=>{if(v){const R=o.length;return R===0?"":O?O(R):`Selected ${R.toString().padStart(2,"0")} option${R!==1?"s":""}`}else return M[0]?(P==null?void 0:P(M[0]))||M[0].label:""},ie=g.useCallback(()=>{a||L(R=>!R)},[a]),ee=g.useCallback(R=>{if(v){const A=o.filter(H=>H!==R.value);b(A)}},[v,b,o]),Z=g.useCallback(R=>{v?b(R):R.length>0&&(b(R[0]),L(!1))},[v,b]),q=g.useCallback(()=>{v||L(!1)},[v]),W=g.useMemo(()=>({groups:i,placeholder:f,loading:x,multi:v,size:it(n)?n:"md",selectedValues:v?o:o?[o]:[],onChangeSelected:Z,onClickMenu:q,searchValue:$,onSearchChange:w,maxHeight:S,...k}),[i,f,x,v,n,o,Z,q,$,w,S,k]);return g.useEffect(()=>{const R=A=>{I&&!I.contains(A.target)&&_&&!_.contains(A.target)&&L(!1)};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[I,_]),c.jsxs(di,{className:e,style:t,children:[(d||s)&&c.jsx(ke,{textLabel:d,required:u,iconLabel:s,onClickIconLabel:j}),c.jsx(pi,{ref:E,onClick:ie,$hasValue:!!o,children:c.jsx(Cn,{...k,ref:V,size:n,iconSuffix:D?c.jsx(Mt,{}):c.jsx(At,{}),value:re(),disabled:a,activeDropdown:D,negative:p})}),l&&c.jsx(Ye,{className:X({disabled:a,negative:p,positive:m}),children:l}),v&&o.length>0&&c.jsx(mi,{children:c.jsx(Fe,{options:M,onRemove:ee})}),D&&c.jsx(_e,{portal:y,children:c.jsx(fi,{ref:B,style:{...N.popper,width:I==null?void 0:I.offsetWidth,zIndex:9999},...T.popper,children:c.jsx(nn,{...W})})})]})});Ne.displayName="FISSelect";const wi=Ne;try{Ne.displayName="FISSelect",Ne.__docgenInfo={description:"",displayName:"FISSelect",props:{textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Show symbol * as required field",name:"required",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:null,description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},size:{defaultValue:{value:"md"},description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption<string | number>[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: SelectOption<string | number>) => ReactNode)"}},portal:{defaultValue:null,description:"",name:"portal",required:!1,type:{name:"boolean"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | (string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string | number) => void) | ((value: (string | number)[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: SelectOption<string | number>) => string) | ((value: SelectOption<string | number>[]) => string)"}}}}}catch{}const Si=C(Sn)`
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

  ${({$minimize:e})=>e&&He`
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
`,ki=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${r("com/pagination/vertical-padding")}
    ${r("com/pagination/horizontal-padding")}
    ${r("com/pagination/vertical-padding")}
    ${r("com/pagination/horizontal-padding")};
`,Ci=C.div`
  display: flex;
  align-items: center;
  gap: ${r("com/pagination/horizontal-gap")};
`,Vi=C.span`
  display: inline-flex;
  align-items: center;
  gap: ${r("sem/dimension/gap/xs")};

  ${r("Paragraph/Sm")};
  color: ${r("com/pagination/range-number/label/color-text")} !important;
`,qi=10,Pi=({pageSize:e=qi,current:t=1,total:n=0,minimize:i,recordCounted:o,onIconPageRecordClick:a,showTotal:d,...s})=>{const u=g.useMemo(()=>[(t-1)*e+1,t*e>n?n:t*e],[t,e,n]),p=c.jsxs(c.Fragment,{children:["Hiển thị ",u[0],"-",u[1],o?`trong ${n} bản ghi`:c.jsx(je,{size:"xs",icon:c.jsx(fn,{}),variant:"tertiary-invisible",onClick:a})]}),l={size:"small",showSizeChanger:!1,showQuickJumper:!1,responsive:!0,showLessItems:!0,locale:{items_per_page:"/ trang"},total:n,current:t,pageSize:e,...s},m=(v,f,x)=>f==="prev"?c.jsx(je,{size:"xs",icon:c.jsx(mn,{}),variant:"tertiary",disabled:t===1}):f==="next"?c.jsx(je,{size:"xs",icon:c.jsx(gn,{}),variant:"tertiary",disabled:t*e>=n}):x;return c.jsxs(ki,{children:[c.jsx(Vi,{children:d?d(n,u):p}),c.jsxs(Ci,{children:[c.jsx(Si,{...l,$minimize:!!i,showSizeChanger:!1,itemRender:m}),c.jsx(wi,{style:{width:"100px"},size:"xs",options:[{groupLabel:"",items:(s.pageSizeOptions||[10,20,50,100]).map(v=>{var f,x;return{label:`${v} ${((f=s.locale)==null?void 0:f.items_per_page)||((x=l.locale)==null?void 0:x.items_per_page)}`,value:String(v)}})}],value:String(e),multi:!1,onChange:v=>{s.onShowSizeChange&&s.onShowSizeChange(Number(v),e)}})]})]})},$o=Pi;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{minimize:{defaultValue:null,description:"",name:"minimize",required:!1,type:{name:"boolean"}},recordCounted:{defaultValue:null,description:"",name:"recordCounted",required:!1,type:{name:"boolean"}},onIconPageRecordClick:{defaultValue:null,description:"",name:"onIconPageRecordClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const Me=g.forwardRef(({onClickSuffix:e,onClickPrefix:t,...n},i)=>{const{sizeInput:o="md",iconPrefix:a,iconSuffix:d,labelSuffix:s,labelPrefix:u,typeSuffix:p,typePrefix:l,disabled:m,negative:v,activeDropdown:f,...x}=n;return c.jsxs(ei,{className:X({"input-text-lg":o==="lg",negative:v,dropdownSuffix:p==="dropdown",dropdownPrefix:l==="dropdown",iconPrefix:a,prefix:l==="prefix"||l==="dropdown",suffix:p==="suffix"||p==="dropdown",iconSuffix:p==="icon",disabled:m}),children:[a&&l!=="prefix"&&l!=="dropdown"&&c.jsx(le,{className:X({"input-text-lg":o==="lg"}),children:a}),l==="prefix"&&c.jsxs(Zr,{onClick:t,className:X({disabled:m}),children:[a&&c.jsx(Te,{children:a}),u&&c.jsx(rt,{children:u})]}),l==="dropdown"&&c.jsxs(Jr,{className:X({"active-dropdown":f,disabled:m,"input-text-lg":o==="lg"}),onClick:t,children:[a&&c.jsx(he,{children:a}),u&&c.jsx(ve,{children:u}),c.jsx(Te,{children:c.jsx($t,{})})]}),c.jsx(oe,{...x,ref:i,disabled:m,$isPointer:n.$isPointer,className:X({negative:v,"input-text-lg":o==="lg",prefix:a,suffix:p==="icon"||p==="suffix"||p==="dropdown"})}),p==="icon"&&d&&c.jsx(je,{size:"md",icon:d,variant:"tertiary-invisible",className:"icon-suffix",onClick:e,disabled:m}),p==="suffix"&&c.jsxs(Qr,{onClick:e,className:X({disabled:m}),children:[d&&c.jsx(ze,{children:d}),s&&c.jsx(nt,{children:s})]}),p==="dropdown"&&c.jsxs(Gr,{className:X({"active-dropdown":f,disabled:m,"input-text-lg":o==="lg"}),onClick:e,children:[d&&c.jsx(he,{children:d}),s&&c.jsx(ve,{children:s}),c.jsx(ze,{children:c.jsx($t,{})})]})]})});Me.displayName="FISInputField";const Xe=Me;try{Me.displayName="FISInputField",Me.__docgenInfo={description:"",displayName:"FISInputField",props:{sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}}}}}catch{}const Ae=g.forwardRef((e,t)=>{const{className:n,typeSuffix:i,textLabel:o="",iconLabel:a,required:d,iconPrefix:s,sizeInput:u,showCount:p,message:l,negative:m,positive:v,maxLength:f=500,disabled:x,onChange:b,onEnter:h,onKeyDown:j,onClickIconLabel:P,onClickSuffix:O,...$}=e,[w,y]=Je.useState(""),S=Je.useCallback(V=>{y(V.target.value),b&&b(V)},[b]),k=Je.useCallback(V=>{V&&V.key==="Enter"&&h&&h(V.currentTarget.value)},[h]);return c.jsxs(Wr,{className:n,children:[(o||a)&&c.jsx(ke,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:P}),c.jsx(Xe,{...$,ref:t,typeSuffix:i,sizeInput:u,iconPrefix:s,onKeyPress:k,onChange:S,disabled:x,negative:m,maxLength:f,onClickSuffix:O}),(l||p)&&c.jsxs(tn,{children:[c.jsx(Ye,{className:X({disabled:x,negative:m,positive:v}),children:l||""}),p&&f>0&&c.jsxs(Hr,{className:X({negative:(w==null?void 0:w.length)>f}),children:[w==null?void 0:w.length,"/",f]})]})]})});Ae.displayName="FISInputText";const Ii=Ae;try{Ae.displayName="FISInputText",Ae.__docgenInfo={description:"",displayName:"FISInputText",props:{showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Hint text for current field",name:"message",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"positive for current field",name:"positive",required:!1,type:{name:"boolean"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((value: string | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"((event: unknown) => void)"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Be=({placeholder:e,groups:t,size:n="md",multi:i=!1,selectedValues:o=[],onChangeSelected:a,searchValue:d="",onSearchChange:s,loading:u=!1,noData:p=!1,noResult:l=!1,combobox:m,className:v,onClickMenu:f,loadingText:x="Data loading...",noDataText:b="No data",noResultText:h="No result",removeSelectedText:j="Remove selected",selectedGroupLabel:P="Selected",maxHeight:O})=>{const[$,w]=g.useState(d);g.useEffect(()=>{w(d)},[d]);const y=$,S=g.useMemo(()=>{let T=t.map(z=>({groupLabel:z.groupLabel,items:i?z.items.filter(M=>!o.includes(M.value)):z.items}));return y.trim()&&(T=T.map(z=>({...z,items:z.items.filter(M=>M.label.toLowerCase().includes(y.toLowerCase()))}))),T.filter(z=>z.items.length>0)},[t,i,o,y]),k=g.useMemo(()=>{if(!i)return null;const T=t.flatMap(z=>z.items).filter(z=>o.includes(z.value));return T.length===0?null:{groupLabel:P,items:T}},[t,i,o,P]),V=k?[k,...S]:S,D=i&&o.length>0?{groupLabel:"",items:[{label:j,description:"",value:"__remove_selected__"}]}:null,L=t.reduce((T,z)=>T+z.items.length,0),I=y.trim()!=="",E=L>=7||I,_=V.length>0,B=I&&!_,F=T=>{const z=T.target.value;w(z),s==null||s(z)},N=T=>{if(i){if(T.value==="__remove_selected__"){a==null||a([]);return}let z;o.includes(T.value)?z=o.filter(M=>M!==T.value):z=[...o,T.value],a==null||a(z);return}else{const z=o[0]===T.value?[]:[T.value];a==null||a(z),f==null||f()}};return c.jsxs(Ur,{$maxHeight:O,className:v,children:[E&&!m&&c.jsx(Yr,{children:c.jsx(Ii,{iconPrefix:c.jsx(vn,{}),placeholder:e,value:y,onChange:F})}),(B||l)&&c.jsxs(Qe,{children:[c.jsx(Rt,{children:c.jsx(hn,{})}),c.jsx(Ze,{children:h})]}),p&&c.jsxs(Qe,{children:[c.jsx(Rt,{children:c.jsx(bn,{})}),c.jsx(Ze,{children:b})]}),u&&c.jsxs(Qe,{children:[c.jsx(kn,{size:n,variant:"indeterminate"}),c.jsx(Ze,{children:x})]}),!B&&!p&&!u&&c.jsxs(c.Fragment,{children:[c.jsx(Xr,{$removeSelectedGroup:!!D,children:V.map((T,z)=>c.jsxs(Lt,{children:[z!==0&&c.jsx(St,{withDivider:!0}),(T==null?void 0:T.groupLabel)&&c.jsx(St,{label:T==null?void 0:T.groupLabel}),T.items.map((M,re)=>c.jsx(wt,{title:M.label,description:M.description,size:n,onClickMenu:()=>N(M),selected:o.includes(M.value),type:"select"},re))]},z))}),D&&c.jsx(Kr,{children:c.jsx(Lt,{children:D.items.map((T,z)=>c.jsx(wt,{title:T.label,description:T.description,size:n,onClickMenu:()=>a==null?void 0:a([]),type:"select",iconPrefix:c.jsx(xn,{}),negative:!0},z))})})]})]})};Be.displayName="FISMenuSelect";const nn=Be;try{Be.displayName="FISMenuSelect",Be.__docgenInfo={description:"",displayName:"FISMenuSelect",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},groups:{defaultValue:null,description:"",name:"groups",required:!0,type:{name:"MenuGroup[]"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},multi:{defaultValue:{value:"false"},description:"",name:"multi",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:{value:""},description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},selectedValues:{defaultValue:{value:"[]"},description:"",name:"selectedValues",required:!1,type:{name:"(string | number)[]"}},onChangeSelected:{defaultValue:null,description:"",name:"onChangeSelected",required:!1,type:{name:"((values: (string | number)[]) => void)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},noData:{defaultValue:{value:"false"},description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:{value:"false"},description:"",name:"noResult",required:!1,type:{name:"boolean"}},onClickMenu:{defaultValue:null,description:"",name:"onClickMenu",required:!1,type:{name:"(() => void)"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Data loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:{value:"No data"},description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"No result"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:{value:"Remove selected"},description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:{value:"Selected"},description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}}}}}catch{}const We=g.forwardRef(({className:e,options:t,value:n,disabled:i=!1,textLabel:o="",iconLabel:a,required:d,negative:s,message:u,positive:p,multi:l,placeholderSearch:m,loading:v,onChange:f,renderOption:x,onClickIconLabel:b,displayValue:h,multiDisplayText:j,noResultText:P="Không tìm thấy kết quả",maxHeight:O,...$},w)=>{const[y,S]=g.useState(!1),[k,V]=g.useState(""),[D,L]=g.useState(null),[I,E]=g.useState(null),{styles:_,attributes:B}=en(D,I,{modifiers:[{name:"preventOverflow",options:{padding:0,altAxis:!0}}],placement:"bottom-start",strategy:"fixed"}),F=g.useMemo(()=>t.flatMap(q=>q.items),[t]),N=g.useMemo(()=>{if(l){const W=F.filter(R=>n.includes(R.value)).length;return j?j(W):`Selected ${W.toString().padStart(2,"0")} option${W!==1?"s":""}`}else{const q=F.find(W=>W.value===n);return q?(h==null?void 0:h(q))||q.label:""}},[n,F,l,h]),T=g.useCallback(()=>{i||(l?y||(S(!0),V("")):(S(q=>!q),y||V(N)))},[i,y,N,l]),z=g.useCallback(q=>{i||(S(!0),V(q.target.value))},[i]),M=g.useCallback(q=>{q.key==="Backspace"&&!k&&V("")},[k]);g.useEffect(()=>{const q=W=>{D&&!D.contains(W.target)&&I&&!I.contains(W.target)&&(S(!1),V(l?"":N))};return document.addEventListener("mousedown",q),()=>document.removeEventListener("mousedown",q)},[D,I,l,N]);const re=g.useMemo(()=>l?F.filter(q=>n.includes(q.value)).map(q=>({label:q.label,value:q.value})):n?F.filter(q=>q.value===n).map(q=>({label:q.label,value:q.value})):[],[F,n,l]),ie=g.useCallback(q=>{if(l){const W=n.filter(R=>R!==q.value);f(W)}},[l,f,n]),ee=g.useMemo(()=>!k||k===N?t:t.map(q=>({...q,items:q.items.filter(W=>W.label.toLowerCase().includes(k.toLowerCase()))})),[t,k,N]),Z=g.useMemo(()=>k?ee.every(q=>q.items.length===0):!1,[ee,k]);return c.jsxs(bi,{className:e,children:[(o||a)&&c.jsx(ke,{textLabel:o,required:d,iconLabel:a,onClickIconLabel:b}),c.jsx(xi,{ref:L,onClick:T,children:c.jsx(Xe,{...$,ref:w,iconSuffix:y?c.jsx(Mt,{}):c.jsx(At,{}),value:y&&k!==void 0?k:N,disabled:i,onClickSuffix:T,onChange:z,onKeyDown:M,$isPointer:!0})}),u&&c.jsx(Ye,{className:X({disabled:i,negative:s,positive:p}),children:u}),l&&n.length>0&&c.jsx($i,{children:c.jsx(Fe,{options:re,onRemove:ie})}),y&&c.jsx(_e,{children:c.jsx(yi,{ref:E,style:{..._.popper,width:D==null?void 0:D.offsetWidth},...B.popper,children:c.jsx(nn,{groups:ee,placeholder:m,loading:v,multi:l,combobox:!0,noResult:Z,noResultText:P,maxHeight:O,selectedValues:l?n:n?[n]:[],onChangeSelected:q=>{l?f(q):(f(q[0]),S(!1),V(""))},onClickMenu:()=>{l||(S(!1),V(""))},...$})})})]})});We.displayName="FISCombobox";const wo=We;try{We.displayName="FISCombobox",We.__docgenInfo={description:"",displayName:"FISCombobox",props:{negative:{defaultValue:null,description:"negative for current field",name:"negative",required:!1,type:{name:"boolean"}},sizeInput:{defaultValue:null,description:"Control the size of the component",name:"sizeInput",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},typeSuffix:{defaultValue:null,description:'Control the style type of component: "icon" | "suffix" | "dropdown"',name:"typeSuffix",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"suffix"'},{value:'"dropdown"'}]}},typePrefix:{defaultValue:null,description:'Control the style type of component: "prefix" | "dropdown"',name:"typePrefix",required:!1,type:{name:"enum",value:[{value:'"prefix"'},{value:'"dropdown"'}]}},iconPrefix:{defaultValue:null,description:"Prefix for filter value",name:"iconPrefix",required:!1,type:{name:"string | Element"}},iconSuffix:{defaultValue:null,description:"iconSuffix for filter value",name:"iconSuffix",required:!1,type:{name:"string | Element"}},labelSuffix:{defaultValue:null,description:"labelSuffix for filter value",name:"labelSuffix",required:!1,type:{name:"string | Element"}},labelPrefix:{defaultValue:null,description:"labelPrefix for filter value",name:"labelPrefix",required:!1,type:{name:"string | Element"}},actived:{defaultValue:null,description:"actived for current field",name:"actived",required:!1,type:{name:"boolean"}},activeDropdown:{defaultValue:null,description:"active-dropdown for current field",name:"activeDropdown",required:!1,type:{name:"boolean"}},onClickSuffix:{defaultValue:null,description:"onClickSuffix for current field Button",name:"onClickSuffix",required:!1,type:{name:"(() => void)"}},onClickPrefix:{defaultValue:null,description:"onClickPrefix for current field Button",name:"onClickPrefix",required:!1,type:{name:"(() => void)"}},$isPointer:{defaultValue:null,description:"Control cursor style",name:"$isPointer",required:!1,type:{name:"boolean"}},textLabel:{defaultValue:{value:""},description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},combobox:{defaultValue:null,description:"",name:"combobox",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}},noData:{defaultValue:null,description:"",name:"noData",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},noDataText:{defaultValue:null,description:"",name:"noDataText",required:!1,type:{name:"string"}},noResultText:{defaultValue:{value:"Không tìm thấy kết quả"},description:"",name:"noResultText",required:!1,type:{name:"string"}},removeSelectedText:{defaultValue:null,description:"",name:"removeSelectedText",required:!1,type:{name:"string"}},selectedGroupLabel:{defaultValue:null,description:"",name:"selectedGroupLabel",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},placeholderSearch:{defaultValue:null,description:"",name:"placeholderSearch",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},multiDisplayText:{defaultValue:null,description:"",name:"multiDisplayText",required:!1,type:{name:"((count: number) => string)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: ComboboxOption) => ReactNode)"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | ((value: string[]) => void)"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"((value: ComboboxOption) => string) | ((value: ComboboxOption[]) => string)"}}}}}catch{}export{wo as F,yo as a,Xe as b,Ii as c,xo as d,nn as e,$o as f,wi as g};
