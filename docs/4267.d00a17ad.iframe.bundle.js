"use strict";(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[4267],{"./node_modules/@carbon/icons-react/es/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>Icon});var _excluded=["width","height","viewBox"],_excluded2=["tabindex"],defaultAttributes={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function getAttributes(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=_ref.width,height=_ref.height,_ref$viewBox=_ref.viewBox,viewBox=void 0===_ref$viewBox?"0 0 ".concat(width," ").concat(height):_ref$viewBox,attributes=_objectWithoutProperties(_ref,_excluded),tabindex=attributes.tabindex,rest=_objectWithoutProperties(attributes,_excluded2),iconAttributes=_objectSpread2(_objectSpread2(_objectSpread2({},defaultAttributes),rest),{},{width,height,viewBox});return iconAttributes["aria-label"]||iconAttributes["aria-labelledby"]||iconAttributes.title?(iconAttributes.role="img",null!=tabindex&&(iconAttributes.focusable="true",iconAttributes.tabindex=tabindex)):iconAttributes["aria-hidden"]=!0,iconAttributes}var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");const Icon=react.forwardRef((function Icon(_ref,ref){let{className,children,tabIndex,xmlns="http://www.w3.org/2000/svg",preserveAspectRatio="xMidYMid meet",...rest}=_ref;const{tabindex,...attrs}=getAttributes({...rest,tabindex:tabIndex}),props=attrs;return className&&(props.className=className),null!=tabindex&&(props.tabIndex="number"==typeof tabindex?tabindex:Number(tabIndex)),ref&&(props.ref=ref),xmlns&&(props.xmlns=xmlns),preserveAspectRatio&&(props.preserveAspectRatio=preserveAspectRatio),react.createElement("svg",props,children)}));Icon.displayName="Icon",Icon.propTypes={"aria-hidden":prop_types_default().oneOfType([prop_types_default().bool,prop_types_default().oneOf(["true","false"])]),"aria-label":prop_types_default().string,"aria-labelledby":prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),preserveAspectRatio:prop_types_default().string,tabIndex:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),viewBox:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),xmlns:prop_types_default().string}},"./node_modules/@carbon/icons-react/es/generated/bucket-12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aI:()=>OverflowMenuHorizontal});var _circle,_circle2,_circle3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icons-react/es/Icon.js");const OverflowMenuHorizontal=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function OverflowMenuHorizontal(_ref5,ref){let{children,size=16,...rest}=_ref5;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.A,{width:size,height:size,ref,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...rest},_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"8",cy:"16",r:"2"})),_circle2||(_circle2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"16",cy:"16",r:"2"})),_circle3||(_circle3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"24",cy:"16",r:"2"})),children)}))},"./node_modules/antd/es/_util/reactNode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ob:()=>cloneElement,zv:()=>isFragment});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function isFragment(child){return child&&react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===react__WEBPACK_IMPORTED_MODULE_0__.Fragment}const replaceElement=(element,replacement,props)=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element,"function"==typeof props?props(element.props||{}):props):replacement;function cloneElement(element,props){return replaceElement(element,element,props)}},"./node_modules/antd/es/spin/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>spin});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("./node_modules/throttle-debounce/esm/index.js"),context=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),reactNode=__webpack_require__("./node_modules/antd/es/_util/reactNode.js"),useLayoutEffect=__webpack_require__("./node_modules/rc-util/es/hooks/useLayoutEffect.js");const circumference=80*Math.PI,CustomCircle=props=>{const{dotClassName,style,hasCircleCls}=props;return react.createElement("circle",{className:classnames_default()(`${dotClassName}-circle`,{[`${dotClassName}-circle-bg`]:hasCircleCls}),r:40,cx:50,cy:50,strokeWidth:20,style})},Indicator_Progress=_ref=>{let{percent,prefixCls}=_ref;const dotClassName=`${prefixCls}-dot`,holderClassName=`${dotClassName}-holder`,hideClassName=`${holderClassName}-hidden`,[render,setRender]=react.useState(!1);(0,useLayoutEffect.A)((()=>{0!==percent&&setRender(!0)}),[0!==percent]);const safePtg=Math.max(Math.min(percent,100),0);if(!render)return null;const circleStyle={strokeDashoffset:""+circumference/4,strokeDasharray:`${circumference*safePtg/100} ${circumference*(100-safePtg)/100}`};return react.createElement("span",{className:classnames_default()(holderClassName,`${dotClassName}-progress`,safePtg<=0&&hideClassName)},react.createElement("svg",{viewBox:"0 0 100 100",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":safePtg},react.createElement(CustomCircle,{dotClassName,hasCircleCls:!0}),react.createElement(CustomCircle,{dotClassName,style:circleStyle})))};function Looper(props){const{prefixCls,percent=0}=props,dotClassName=`${prefixCls}-dot`,holderClassName=`${dotClassName}-holder`,hideClassName=`${holderClassName}-hidden`;return react.createElement(react.Fragment,null,react.createElement("span",{className:classnames_default()(holderClassName,percent>0&&hideClassName)},react.createElement("span",{className:classnames_default()(dotClassName,`${prefixCls}-dot-spin`)},[1,2,3,4].map((i=>react.createElement("i",{className:`${prefixCls}-dot-item`,key:i}))))),react.createElement(Indicator_Progress,{prefixCls,percent}))}function Indicator(props){const{prefixCls,indicator,percent}=props,dotClassName=`${prefixCls}-dot`;return indicator&&react.isValidElement(indicator)?(0,reactNode.Ob)(indicator,{className:classnames_default()(indicator.props.className,dotClassName),percent}):react.createElement(Looper,{prefixCls,percent})}var es=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),style=__webpack_require__("./node_modules/antd/es/style/index.js"),genStyleUtils=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js"),cssinjs_utils_es=__webpack_require__("./node_modules/@ant-design/cssinjs-utils/es/index.js");const antSpinMove=new es.Keyframes("antSpinMove",{to:{opacity:1}}),antRotate=new es.Keyframes("antRotate",{to:{transform:"rotate(405deg)"}}),genSpinStyle=token=>{const{componentCls,calc}=token;return{[componentCls]:Object.assign(Object.assign({},(0,style.dF)(token)),{position:"absolute",display:"none",color:token.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,"&-spinning":{position:"relative",display:"inline-block",opacity:1},[`${componentCls}-text`]:{fontSize:token.fontSize,paddingTop:calc(calc(token.dotSize).sub(token.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:token.colorBgMask,zIndex:token.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${token.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[componentCls]:{[`${componentCls}-dot-holder`]:{color:token.colorWhite},[`${componentCls}-text`]:{color:token.colorTextLightSolid}}},"&-nested-loading":{position:"relative",[`> div > ${componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:token.contentHeight,[`${componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:calc(token.dotSize).mul(-1).div(2).equal()},[`${componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${token.colorBgContainer}`},[`&${componentCls}-show-text ${componentCls}-dot`]:{marginTop:calc(token.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${componentCls}-dot`]:{margin:calc(token.dotSizeSM).mul(-1).div(2).equal()},[`${componentCls}-text`]:{paddingTop:calc(calc(token.dotSizeSM).sub(token.fontSize)).div(2).add(2).equal()},[`&${componentCls}-show-text ${componentCls}-dot`]:{marginTop:calc(token.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${componentCls}-dot`]:{margin:calc(token.dotSizeLG).mul(-1).div(2).equal()},[`${componentCls}-text`]:{paddingTop:calc(calc(token.dotSizeLG).sub(token.fontSize)).div(2).add(2).equal()},[`&${componentCls}-show-text ${componentCls}-dot`]:{marginTop:calc(token.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${componentCls}-container`]:{position:"relative",transition:`opacity ${token.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:token.colorBgContainer,opacity:0,transition:`all ${token.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:token.spinDotDefault},[`${componentCls}-dot-holder`]:{width:"1em",height:"1em",fontSize:token.dotSize,display:"inline-block",transition:`transform ${token.motionDurationSlow} ease, opacity ${token.motionDurationSlow} ease`,transformOrigin:"50% 50%",lineHeight:1,color:token.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},[`${componentCls}-dot-progress`]:{position:"absolute",top:"50%",transform:"translate(-50%, -50%)",insetInlineStart:"50%"},[`${componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:token.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),height:calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:antSpinMove,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:antRotate,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map((item=>`${item} ${token.motionDurationSlow} ease`)).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:token.colorFillSecondary}},[`&-sm ${componentCls}-dot`]:{"&, &-holder":{fontSize:token.dotSizeSM}},[`&-sm ${componentCls}-dot-holder`]:{i:{width:calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal(),height:calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal()}},[`&-lg ${componentCls}-dot`]:{"&, &-holder":{fontSize:token.dotSizeLG}},[`&-lg ${componentCls}-dot-holder`]:{i:{width:calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal(),height:calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal()}},[`&${componentCls}-show-text ${componentCls}-text`]:{display:"block"}})}},spin_style=(0,genStyleUtils.OF)("Spin",(token=>{const spinToken=(0,cssinjs_utils_es.mergeToken)(token,{spinDotDefault:token.colorTextDescription});return[genSpinStyle(spinToken)]}),(token=>{const{controlHeightLG,controlHeight}=token;return{contentHeight:400,dotSize:controlHeightLG/2,dotSizeSM:.35*controlHeightLG,dotSizeLG:controlHeight}})),STEP_BUCKETS=[[30,.05],[70,.03],[96,.01]];var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};let defaultIndicator;const Spin=props=>{var _a;const{prefixCls:customizePrefixCls,spinning:customSpinning=!0,delay=0,className,rootClassName,size="default",tip,wrapperClassName,style,children,fullscreen=!1,indicator,percent}=props,restProps=__rest(props,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls,direction,spin}=react.useContext(context.QO),prefixCls=getPrefixCls("spin",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=spin_style(prefixCls),[spinning,setSpinning]=react.useState((()=>customSpinning&&!function shouldDelay(spinning,delay){return!!spinning&&!!delay&&!isNaN(Number(delay))}(customSpinning,delay))),mergedPercent=function usePercent(spinning,percent){const[mockPercent,setMockPercent]=react.useState(0),mockIntervalRef=react.useRef(),isAuto="auto"===percent;return react.useEffect((()=>(isAuto&&spinning&&(setMockPercent(0),mockIntervalRef.current=setInterval((()=>{setMockPercent((prev=>{const restPTG=100-prev;for(let i=0;i<STEP_BUCKETS.length;i+=1){const[limit,stepPtg]=STEP_BUCKETS[i];if(prev<=limit)return prev+restPTG*stepPtg}return prev}))}),200)),()=>{clearInterval(mockIntervalRef.current)})),[isAuto,spinning]),isAuto?mockPercent:percent}(spinning,percent);react.useEffect((()=>{if(customSpinning){const showSpinning=(0,esm.s)(delay,(()=>{setSpinning(!0)}));return showSpinning(),()=>{var _a;null===(_a=null==showSpinning?void 0:showSpinning.cancel)||void 0===_a||_a.call(showSpinning)}}setSpinning(!1)}),[delay,customSpinning]);const isNestedPattern=react.useMemo((()=>void 0!==children&&!fullscreen),[children,fullscreen]);const spinClassName=classnames_default()(prefixCls,null==spin?void 0:spin.className,{[`${prefixCls}-sm`]:"small"===size,[`${prefixCls}-lg`]:"large"===size,[`${prefixCls}-spinning`]:spinning,[`${prefixCls}-show-text`]:!!tip,[`${prefixCls}-rtl`]:"rtl"===direction},className,!fullscreen&&rootClassName,hashId,cssVarCls),containerClassName=classnames_default()(`${prefixCls}-container`,{[`${prefixCls}-blur`]:spinning}),mergedIndicator=null!==(_a=null!=indicator?indicator:null==spin?void 0:spin.indicator)&&void 0!==_a?_a:defaultIndicator,mergedStyle=Object.assign(Object.assign({},null==spin?void 0:spin.style),style),spinElement=react.createElement("div",Object.assign({},restProps,{style:mergedStyle,className:spinClassName,"aria-live":"polite","aria-busy":spinning}),react.createElement(Indicator,{prefixCls,indicator:mergedIndicator,percent:mergedPercent}),tip&&(isNestedPattern||fullscreen)?react.createElement("div",{className:`${prefixCls}-text`},tip):null);return wrapCSSVar(isNestedPattern?react.createElement("div",Object.assign({},restProps,{className:classnames_default()(`${prefixCls}-nested-loading`,wrapperClassName,hashId,cssVarCls)}),spinning&&react.createElement("div",{key:"loading"},spinElement),react.createElement("div",{className:containerClassName,key:"container"},children)):fullscreen?react.createElement("div",{className:classnames_default()(`${prefixCls}-fullscreen`,{[`${prefixCls}-fullscreen-show`]:spinning},rootClassName,hashId,cssVarCls)},spinElement):spinElement)};Spin.setDefaultIndicator=indicator=>{defaultIndicator=indicator};const spin=Spin},"./node_modules/rxjs/dist/esm5/internal/Subscription.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kn:()=>EMPTY_SUBSCRIPTION,yU:()=>Subscription,Uv:()=>isSubscription});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),isFunction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),UnsubscriptionError=(0,__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js").L)((function(_super){return function UnsubscriptionErrorImpl(errors){_super(this),this.message=errors?errors.length+" errors occurred during unsubscription:\n"+errors.map((function(err,i){return i+1+") "+err.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=errors}})),arrRemove=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),Subscription=function(){function Subscription(initialTeardown){this.initialTeardown=initialTeardown,this.closed=!1,this._parentage=null,this._finalizers=null}var empty;return Subscription.prototype.unsubscribe=function(){var e_1,_a,e_2,_b,errors;if(!this.closed){this.closed=!0;var _parentage=this._parentage;if(_parentage)if(this._parentage=null,Array.isArray(_parentage))try{for(var _parentage_1=(0,tslib_es6.Ju)(_parentage),_parentage_1_1=_parentage_1.next();!_parentage_1_1.done;_parentage_1_1=_parentage_1.next()){_parentage_1_1.value.remove(this)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_parentage_1_1&&!_parentage_1_1.done&&(_a=_parentage_1.return)&&_a.call(_parentage_1)}finally{if(e_1)throw e_1.error}}else _parentage.remove(this);var initialFinalizer=this.initialTeardown;if((0,isFunction.T)(initialFinalizer))try{initialFinalizer()}catch(e){errors=e instanceof UnsubscriptionError?e.errors:[e]}var _finalizers=this._finalizers;if(_finalizers){this._finalizers=null;try{for(var _finalizers_1=(0,tslib_es6.Ju)(_finalizers),_finalizers_1_1=_finalizers_1.next();!_finalizers_1_1.done;_finalizers_1_1=_finalizers_1.next()){var finalizer=_finalizers_1_1.value;try{execFinalizer(finalizer)}catch(err){errors=null!=errors?errors:[],err instanceof UnsubscriptionError?errors=(0,tslib_es6.fX)((0,tslib_es6.fX)([],(0,tslib_es6.zs)(errors)),(0,tslib_es6.zs)(err.errors)):errors.push(err)}}}catch(e_2_1){e_2={error:e_2_1}}finally{try{_finalizers_1_1&&!_finalizers_1_1.done&&(_b=_finalizers_1.return)&&_b.call(_finalizers_1)}finally{if(e_2)throw e_2.error}}}if(errors)throw new UnsubscriptionError(errors)}},Subscription.prototype.add=function(teardown){var _a;if(teardown&&teardown!==this)if(this.closed)execFinalizer(teardown);else{if(teardown instanceof Subscription){if(teardown.closed||teardown._hasParent(this))return;teardown._addParent(this)}(this._finalizers=null!==(_a=this._finalizers)&&void 0!==_a?_a:[]).push(teardown)}},Subscription.prototype._hasParent=function(parent){var _parentage=this._parentage;return _parentage===parent||Array.isArray(_parentage)&&_parentage.includes(parent)},Subscription.prototype._addParent=function(parent){var _parentage=this._parentage;this._parentage=Array.isArray(_parentage)?(_parentage.push(parent),_parentage):_parentage?[_parentage,parent]:parent},Subscription.prototype._removeParent=function(parent){var _parentage=this._parentage;_parentage===parent?this._parentage=null:Array.isArray(_parentage)&&(0,arrRemove.o)(_parentage,parent)},Subscription.prototype.remove=function(teardown){var _finalizers=this._finalizers;_finalizers&&(0,arrRemove.o)(_finalizers,teardown),teardown instanceof Subscription&&teardown._removeParent(this)},Subscription.EMPTY=((empty=new Subscription).closed=!0,empty),Subscription}(),EMPTY_SUBSCRIPTION=Subscription.EMPTY;function isSubscription(value){return value instanceof Subscription||value&&"closed"in value&&(0,isFunction.T)(value.remove)&&(0,isFunction.T)(value.add)&&(0,isFunction.T)(value.unsubscribe)}function execFinalizer(finalizer){(0,isFunction.T)(finalizer)?finalizer():finalizer.unsubscribe()}},"./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function arrRemove(arr,item){if(arr){var index=arr.indexOf(item);0<=index&&arr.splice(index,1)}}__webpack_require__.d(__webpack_exports__,{o:()=>arrRemove})},"./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createErrorClass(createImpl){var ctorFunc=createImpl((function(instance){Error.call(instance),instance.stack=(new Error).stack}));return ctorFunc.prototype=Object.create(Error.prototype),ctorFunc.prototype.constructor=ctorFunc,ctorFunc}__webpack_require__.d(__webpack_exports__,{L:()=>createErrorClass})},"./node_modules/rxjs/dist/esm5/internal/util/isFunction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isFunction(value){return"function"==typeof value}__webpack_require__.d(__webpack_exports__,{T:()=>isFunction})}}]);