(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[1841],{"./node_modules/ahooks/es/useDebounceFn/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>es_useDebounceFn});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),debounce=__webpack_require__("./node_modules/lodash/debounce.js"),debounce_default=__webpack_require__.n(debounce),react=__webpack_require__("./node_modules/react/index.js");const es_useLatest=function useLatest(value){var ref=(0,react.useRef)(value);return ref.current=value,ref};const es_useUnmount=function(fn){var fnRef=es_useLatest(fn);(0,react.useEffect)((function(){return function(){fnRef.current()}}),[])};const es_useDebounceFn=function useDebounceFn(fn,options){var _a,fnRef=es_useLatest(fn),wait=null!==(_a=null==options?void 0:options.wait)&&void 0!==_a?_a:1e3,debounced=(0,react.useMemo)((function(){return debounce_default()((function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return fnRef.current.apply(fnRef,(0,tslib_es6.fX)([],(0,tslib_es6.zs)(args),!1))}),wait,options)}),[]);return es_useUnmount((function(){debounced.cancel()})),{run:debounced,cancel:debounced.cancel,flush:debounced.flush}}},"./node_modules/antd/es/spin/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>spin});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("./node_modules/throttle-debounce/esm/index.js"),context=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),reactNode=__webpack_require__("./node_modules/antd/es/_util/reactNode.js"),useLayoutEffect=__webpack_require__("./node_modules/rc-util/es/hooks/useLayoutEffect.js");const circumference=80*Math.PI,CustomCircle=props=>{const{dotClassName,style,hasCircleCls}=props;return react.createElement("circle",{className:classnames_default()(`${dotClassName}-circle`,{[`${dotClassName}-circle-bg`]:hasCircleCls}),r:40,cx:50,cy:50,strokeWidth:20,style})},Indicator_Progress=_ref=>{let{percent,prefixCls}=_ref;const dotClassName=`${prefixCls}-dot`,holderClassName=`${dotClassName}-holder`,hideClassName=`${holderClassName}-hidden`,[render,setRender]=react.useState(!1);(0,useLayoutEffect.A)((()=>{0!==percent&&setRender(!0)}),[0!==percent]);const safePtg=Math.max(Math.min(percent,100),0);if(!render)return null;const circleStyle={strokeDashoffset:""+circumference/4,strokeDasharray:`${circumference*safePtg/100} ${circumference*(100-safePtg)/100}`};return react.createElement("span",{className:classnames_default()(holderClassName,`${dotClassName}-progress`,safePtg<=0&&hideClassName)},react.createElement("svg",{viewBox:"0 0 100 100",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":safePtg},react.createElement(CustomCircle,{dotClassName,hasCircleCls:!0}),react.createElement(CustomCircle,{dotClassName,style:circleStyle})))};function Looper(props){const{prefixCls,percent=0}=props,dotClassName=`${prefixCls}-dot`,holderClassName=`${dotClassName}-holder`,hideClassName=`${holderClassName}-hidden`;return react.createElement(react.Fragment,null,react.createElement("span",{className:classnames_default()(holderClassName,percent>0&&hideClassName)},react.createElement("span",{className:classnames_default()(dotClassName,`${prefixCls}-dot-spin`)},[1,2,3,4].map((i=>react.createElement("i",{className:`${prefixCls}-dot-item`,key:i}))))),react.createElement(Indicator_Progress,{prefixCls,percent}))}function Indicator(props){const{prefixCls,indicator,percent}=props,dotClassName=`${prefixCls}-dot`;return indicator&&react.isValidElement(indicator)?(0,reactNode.Ob)(indicator,{className:classnames_default()(indicator.props.className,dotClassName),percent}):react.createElement(Looper,{prefixCls,percent})}var es=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),style=__webpack_require__("./node_modules/antd/es/style/index.js"),genStyleUtils=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js"),cssinjs_utils_es=__webpack_require__("./node_modules/@ant-design/cssinjs-utils/es/index.js");const antSpinMove=new es.Keyframes("antSpinMove",{to:{opacity:1}}),antRotate=new es.Keyframes("antRotate",{to:{transform:"rotate(405deg)"}}),genSpinStyle=token=>{const{componentCls,calc}=token;return{[componentCls]:Object.assign(Object.assign({},(0,style.dF)(token)),{position:"absolute",display:"none",color:token.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,"&-spinning":{position:"relative",display:"inline-block",opacity:1},[`${componentCls}-text`]:{fontSize:token.fontSize,paddingTop:calc(calc(token.dotSize).sub(token.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:token.colorBgMask,zIndex:token.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${token.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[componentCls]:{[`${componentCls}-dot-holder`]:{color:token.colorWhite},[`${componentCls}-text`]:{color:token.colorTextLightSolid}}},"&-nested-loading":{position:"relative",[`> div > ${componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:token.contentHeight,[`${componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:calc(token.dotSize).mul(-1).div(2).equal()},[`${componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${token.colorBgContainer}`},[`&${componentCls}-show-text ${componentCls}-dot`]:{marginTop:calc(token.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${componentCls}-dot`]:{margin:calc(token.dotSizeSM).mul(-1).div(2).equal()},[`${componentCls}-text`]:{paddingTop:calc(calc(token.dotSizeSM).sub(token.fontSize)).div(2).add(2).equal()},[`&${componentCls}-show-text ${componentCls}-dot`]:{marginTop:calc(token.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${componentCls}-dot`]:{margin:calc(token.dotSizeLG).mul(-1).div(2).equal()},[`${componentCls}-text`]:{paddingTop:calc(calc(token.dotSizeLG).sub(token.fontSize)).div(2).add(2).equal()},[`&${componentCls}-show-text ${componentCls}-dot`]:{marginTop:calc(token.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${componentCls}-container`]:{position:"relative",transition:`opacity ${token.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:token.colorBgContainer,opacity:0,transition:`all ${token.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:token.spinDotDefault},[`${componentCls}-dot-holder`]:{width:"1em",height:"1em",fontSize:token.dotSize,display:"inline-block",transition:`transform ${token.motionDurationSlow} ease, opacity ${token.motionDurationSlow} ease`,transformOrigin:"50% 50%",lineHeight:1,color:token.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},[`${componentCls}-dot-progress`]:{position:"absolute",top:"50%",transform:"translate(-50%, -50%)",insetInlineStart:"50%"},[`${componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:token.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),height:calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:antSpinMove,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:antRotate,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map((item=>`${item} ${token.motionDurationSlow} ease`)).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:token.colorFillSecondary}},[`&-sm ${componentCls}-dot`]:{"&, &-holder":{fontSize:token.dotSizeSM}},[`&-sm ${componentCls}-dot-holder`]:{i:{width:calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal(),height:calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal()}},[`&-lg ${componentCls}-dot`]:{"&, &-holder":{fontSize:token.dotSizeLG}},[`&-lg ${componentCls}-dot-holder`]:{i:{width:calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal(),height:calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal()}},[`&${componentCls}-show-text ${componentCls}-text`]:{display:"block"}})}},spin_style=(0,genStyleUtils.OF)("Spin",(token=>{const spinToken=(0,cssinjs_utils_es.mergeToken)(token,{spinDotDefault:token.colorTextDescription});return[genSpinStyle(spinToken)]}),(token=>{const{controlHeightLG,controlHeight}=token;return{contentHeight:400,dotSize:controlHeightLG/2,dotSizeSM:.35*controlHeightLG,dotSizeLG:controlHeight}})),STEP_BUCKETS=[[30,.05],[70,.03],[96,.01]];var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};let defaultIndicator;const Spin=props=>{var _a;const{prefixCls:customizePrefixCls,spinning:customSpinning=!0,delay=0,className,rootClassName,size="default",tip,wrapperClassName,style,children,fullscreen=!1,indicator,percent}=props,restProps=__rest(props,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls,direction,spin}=react.useContext(context.QO),prefixCls=getPrefixCls("spin",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=spin_style(prefixCls),[spinning,setSpinning]=react.useState((()=>customSpinning&&!function shouldDelay(spinning,delay){return!!spinning&&!!delay&&!isNaN(Number(delay))}(customSpinning,delay))),mergedPercent=function usePercent(spinning,percent){const[mockPercent,setMockPercent]=react.useState(0),mockIntervalRef=react.useRef(),isAuto="auto"===percent;return react.useEffect((()=>(isAuto&&spinning&&(setMockPercent(0),mockIntervalRef.current=setInterval((()=>{setMockPercent((prev=>{const restPTG=100-prev;for(let i=0;i<STEP_BUCKETS.length;i+=1){const[limit,stepPtg]=STEP_BUCKETS[i];if(prev<=limit)return prev+restPTG*stepPtg}return prev}))}),200)),()=>{clearInterval(mockIntervalRef.current)})),[isAuto,spinning]),isAuto?mockPercent:percent}(spinning,percent);react.useEffect((()=>{if(customSpinning){const showSpinning=(0,esm.s)(delay,(()=>{setSpinning(!0)}));return showSpinning(),()=>{var _a;null===(_a=null==showSpinning?void 0:showSpinning.cancel)||void 0===_a||_a.call(showSpinning)}}setSpinning(!1)}),[delay,customSpinning]);const isNestedPattern=react.useMemo((()=>void 0!==children&&!fullscreen),[children,fullscreen]);const spinClassName=classnames_default()(prefixCls,null==spin?void 0:spin.className,{[`${prefixCls}-sm`]:"small"===size,[`${prefixCls}-lg`]:"large"===size,[`${prefixCls}-spinning`]:spinning,[`${prefixCls}-show-text`]:!!tip,[`${prefixCls}-rtl`]:"rtl"===direction},className,!fullscreen&&rootClassName,hashId,cssVarCls),containerClassName=classnames_default()(`${prefixCls}-container`,{[`${prefixCls}-blur`]:spinning}),mergedIndicator=null!==(_a=null!=indicator?indicator:null==spin?void 0:spin.indicator)&&void 0!==_a?_a:defaultIndicator,mergedStyle=Object.assign(Object.assign({},null==spin?void 0:spin.style),style),spinElement=react.createElement("div",Object.assign({},restProps,{style:mergedStyle,className:spinClassName,"aria-live":"polite","aria-busy":spinning}),react.createElement(Indicator,{prefixCls,indicator:mergedIndicator,percent:mergedPercent}),tip&&(isNestedPattern||fullscreen)?react.createElement("div",{className:`${prefixCls}-text`},tip):null);return wrapCSSVar(isNestedPattern?react.createElement("div",Object.assign({},restProps,{className:classnames_default()(`${prefixCls}-nested-loading`,wrapperClassName,hashId,cssVarCls)}),spinning&&react.createElement("div",{key:"loading"},spinElement),react.createElement("div",{className:containerClassName,key:"container"},children)):fullscreen?react.createElement("div",{className:classnames_default()(`${prefixCls}-fullscreen`,{[`${prefixCls}-fullscreen-show`]:spinning},rootClassName,hashId,cssVarCls)},spinElement):spinElement)};Spin.setDefaultIndicator=indicator=>{defaultIndicator=indicator};const spin=Spin},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}}}]);