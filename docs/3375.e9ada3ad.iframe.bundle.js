"use strict";(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[3375],{"./node_modules/rc-notification/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Notice:()=>Notice,NotificationProvider:()=>es_NotificationProvider,useNotification:()=>useNotification});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/rc-motion/es/index.js"),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),KeyCode=__webpack_require__("./node_modules/rc-util/es/KeyCode.js"),pickAttrs=__webpack_require__("./node_modules/rc-util/es/pickAttrs.js");const Notice=react.forwardRef((function(props,ref){var prefixCls=props.prefixCls,style=props.style,className=props.className,_props$duration=props.duration,duration=void 0===_props$duration?4.5:_props$duration,showProgress=props.showProgress,_props$pauseOnHover=props.pauseOnHover,pauseOnHover=void 0===_props$pauseOnHover||_props$pauseOnHover,eventKey=props.eventKey,content=props.content,closable=props.closable,_props$closeIcon=props.closeIcon,closeIcon=void 0===_props$closeIcon?"x":_props$closeIcon,divProps=props.props,onClick=props.onClick,onNoticeClose=props.onNoticeClose,times=props.times,forcedHovering=props.hovering,_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.A)(_React$useState,2),hovering=_React$useState2[0],setHovering=_React$useState2[1],_React$useState3=react.useState(0),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),percent=_React$useState4[0],setPercent=_React$useState4[1],_React$useState5=react.useState(0),_React$useState6=(0,slicedToArray.A)(_React$useState5,2),spentTime=_React$useState6[0],setSpentTime=_React$useState6[1],mergedHovering=forcedHovering||hovering,mergedShowProgress=duration>0&&showProgress,onInternalClose=function onInternalClose(){onNoticeClose(eventKey)};react.useEffect((function(){if(!mergedHovering&&duration>0){var start=Date.now()-spentTime,timeout=setTimeout((function(){onInternalClose()}),1e3*duration-spentTime);return function(){pauseOnHover&&clearTimeout(timeout),setSpentTime(Date.now()-start)}}}),[duration,mergedHovering,times]),react.useEffect((function(){if(!mergedHovering&&mergedShowProgress&&(pauseOnHover||0===spentTime)){var animationFrame,start=performance.now();return function calculate(){cancelAnimationFrame(animationFrame),animationFrame=requestAnimationFrame((function(timestamp){var runtime=timestamp+spentTime-start,progress=Math.min(runtime/(1e3*duration),1);setPercent(100*progress),progress<1&&calculate()}))}(),function(){pauseOnHover&&cancelAnimationFrame(animationFrame)}}}),[duration,spentTime,mergedHovering,mergedShowProgress,times]);var closableObj=react.useMemo((function(){return"object"===(0,esm_typeof.A)(closable)&&null!==closable?closable:closable?{closeIcon}:{}}),[closable,closeIcon]),ariaProps=(0,pickAttrs.A)(closableObj,!0),validPercent=100-(!percent||percent<0?0:percent>100?100:percent),noticePrefixCls="".concat(prefixCls,"-notice");return react.createElement("div",(0,esm_extends.A)({},divProps,{ref,className:classnames_default()(noticePrefixCls,className,(0,defineProperty.A)({},"".concat(noticePrefixCls,"-closable"),closable)),style,onMouseEnter:function onMouseEnter(e){var _divProps$onMouseEnte;setHovering(!0),null==divProps||null===(_divProps$onMouseEnte=divProps.onMouseEnter)||void 0===_divProps$onMouseEnte||_divProps$onMouseEnte.call(divProps,e)},onMouseLeave:function onMouseLeave(e){var _divProps$onMouseLeav;setHovering(!1),null==divProps||null===(_divProps$onMouseLeav=divProps.onMouseLeave)||void 0===_divProps$onMouseLeav||_divProps$onMouseLeav.call(divProps,e)},onClick}),react.createElement("div",{className:"".concat(noticePrefixCls,"-content")},content),closable&&react.createElement("a",(0,esm_extends.A)({tabIndex:0,className:"".concat(noticePrefixCls,"-close"),onKeyDown:function onCloseKeyDown(e){"Enter"!==e.key&&"Enter"!==e.code&&e.keyCode!==KeyCode.A.ENTER||onInternalClose()},"aria-label":"Close"},ariaProps,{onClick:function onClick(e){e.preventDefault(),e.stopPropagation(),onInternalClose()}}),closableObj.closeIcon),mergedShowProgress&&react.createElement("progress",{className:"".concat(noticePrefixCls,"-progress"),max:"100",value:validPercent},validPercent+"%"))}));var NotificationContext=react.createContext({});const es_NotificationProvider=function NotificationProvider(_ref){var children=_ref.children,classNames=_ref.classNames;return react.createElement(NotificationContext.Provider,{value:{classNames}},children)};const hooks_useStack=function useStack(config){var _config$offset,_config$threshold,_config$gap,result={offset:8,threshold:3,gap:16};config&&"object"===(0,esm_typeof.A)(config)&&(result.offset=null!==(_config$offset=config.offset)&&void 0!==_config$offset?_config$offset:8,result.threshold=null!==(_config$threshold=config.threshold)&&void 0!==_config$threshold?_config$threshold:3,result.gap=null!==(_config$gap=config.gap)&&void 0!==_config$gap?_config$gap:16);return[!!config,result]};var _excluded=["className","style","classNames","styles"];const es_NoticeList=function NoticeList(props){var configList=props.configList,placement=props.placement,prefixCls=props.prefixCls,className=props.className,style=props.style,motion=props.motion,onAllNoticeRemoved=props.onAllNoticeRemoved,onNoticeClose=props.onNoticeClose,stackConfig=props.stack,ctxCls=(0,react.useContext)(NotificationContext).classNames,dictRef=(0,react.useRef)({}),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),latestNotice=_useState2[0],setLatestNotice=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.A)(_useState3,2),hoverKeys=_useState4[0],setHoverKeys=_useState4[1],keys=configList.map((function(config){return{config,key:String(config.key)}})),_useStack=hooks_useStack(stackConfig),_useStack2=(0,slicedToArray.A)(_useStack,2),stack=_useStack2[0],_useStack2$=_useStack2[1],offset=_useStack2$.offset,threshold=_useStack2$.threshold,gap=_useStack2$.gap,expanded=stack&&(hoverKeys.length>0||keys.length<=threshold),placementMotion="function"==typeof motion?motion(placement):motion;return(0,react.useEffect)((function(){stack&&hoverKeys.length>1&&setHoverKeys((function(prev){return prev.filter((function(key){return keys.some((function(_ref){var dataKey=_ref.key;return key===dataKey}))}))}))}),[hoverKeys,keys,stack]),(0,react.useEffect)((function(){var _keys,_keys2;stack&&dictRef.current[null===(_keys=keys[keys.length-1])||void 0===_keys?void 0:_keys.key]&&setLatestNotice(dictRef.current[null===(_keys2=keys[keys.length-1])||void 0===_keys2?void 0:_keys2.key])}),[keys,stack]),react.createElement(es.CSSMotionList,(0,esm_extends.A)({key:placement,className:classnames_default()(prefixCls,"".concat(prefixCls,"-").concat(placement),null==ctxCls?void 0:ctxCls.list,className,(0,defineProperty.A)((0,defineProperty.A)({},"".concat(prefixCls,"-stack"),!!stack),"".concat(prefixCls,"-stack-expanded"),expanded)),style,keys,motionAppear:!0},placementMotion,{onAllRemoved:function onAllRemoved(){onAllNoticeRemoved(placement)}}),(function(_ref2,nodeRef){var config=_ref2.config,motionClassName=_ref2.className,motionStyle=_ref2.style,motionIndex=_ref2.index,_ref3=config,key=_ref3.key,times=_ref3.times,strKey=String(key),_ref4=config,configClassName=_ref4.className,configStyle=_ref4.style,configClassNames=_ref4.classNames,configStyles=_ref4.styles,restConfig=(0,objectWithoutProperties.A)(_ref4,_excluded),dataIndex=keys.findIndex((function(item){return item.key===strKey})),stackStyle={};if(stack){var index=keys.length-1-(dataIndex>-1?dataIndex:motionIndex-1),transformX="top"===placement||"bottom"===placement?"-50%":"0";if(index>0){var _dictRef$current$strK,_dictRef$current$strK2,_dictRef$current$strK3;stackStyle.height=expanded?null===(_dictRef$current$strK=dictRef.current[strKey])||void 0===_dictRef$current$strK?void 0:_dictRef$current$strK.offsetHeight:null==latestNotice?void 0:latestNotice.offsetHeight;for(var verticalOffset=0,i=0;i<index;i++){var _dictRef$current$keys;verticalOffset+=(null===(_dictRef$current$keys=dictRef.current[keys[keys.length-1-i].key])||void 0===_dictRef$current$keys?void 0:_dictRef$current$keys.offsetHeight)+gap}var transformY=(expanded?verticalOffset:index*offset)*(placement.startsWith("top")?1:-1),scaleX=!expanded&&null!=latestNotice&&latestNotice.offsetWidth&&null!==(_dictRef$current$strK2=dictRef.current[strKey])&&void 0!==_dictRef$current$strK2&&_dictRef$current$strK2.offsetWidth?((null==latestNotice?void 0:latestNotice.offsetWidth)-2*offset*(index<3?index:3))/(null===(_dictRef$current$strK3=dictRef.current[strKey])||void 0===_dictRef$current$strK3?void 0:_dictRef$current$strK3.offsetWidth):1;stackStyle.transform="translate3d(".concat(transformX,", ").concat(transformY,"px, 0) scaleX(").concat(scaleX,")")}else stackStyle.transform="translate3d(".concat(transformX,", 0, 0)")}return react.createElement("div",{ref:nodeRef,className:classnames_default()("".concat(prefixCls,"-notice-wrapper"),motionClassName,null==configClassNames?void 0:configClassNames.wrapper),style:(0,objectSpread2.A)((0,objectSpread2.A)((0,objectSpread2.A)({},motionStyle),stackStyle),null==configStyles?void 0:configStyles.wrapper),onMouseEnter:function onMouseEnter(){return setHoverKeys((function(prev){return prev.includes(strKey)?prev:[].concat((0,toConsumableArray.A)(prev),[strKey])}))},onMouseLeave:function onMouseLeave(){return setHoverKeys((function(prev){return prev.filter((function(k){return k!==strKey}))}))}},react.createElement(Notice,(0,esm_extends.A)({},restConfig,{ref:function ref(node){dataIndex>-1?dictRef.current[strKey]=node:delete dictRef.current[strKey]},prefixCls,classNames:configClassNames,styles:configStyles,className:classnames_default()(configClassName,null==ctxCls?void 0:ctxCls.notice),style:configStyle,times,key,eventKey:key,onNoticeClose,hovering:stack&&hoverKeys.length>0})))}))};const es_Notifications=react.forwardRef((function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-notification":_props$prefixCls,container=props.container,motion=props.motion,maxCount=props.maxCount,className=props.className,style=props.style,onAllRemoved=props.onAllRemoved,stack=props.stack,renderNotifications=props.renderNotifications,_React$useState=react.useState([]),_React$useState2=(0,slicedToArray.A)(_React$useState,2),configList=_React$useState2[0],setConfigList=_React$useState2[1],onNoticeClose=function onNoticeClose(key){var _config$onClose,config=configList.find((function(item){return item.key===key}));null==config||null===(_config$onClose=config.onClose)||void 0===_config$onClose||_config$onClose.call(config),setConfigList((function(list){return list.filter((function(item){return item.key!==key}))}))};react.useImperativeHandle(ref,(function(){return{open:function open(config){setConfigList((function(list){var _list$index,clone=(0,toConsumableArray.A)(list),index=clone.findIndex((function(item){return item.key===config.key})),innerConfig=(0,objectSpread2.A)({},config);index>=0?(innerConfig.times=((null===(_list$index=list[index])||void 0===_list$index?void 0:_list$index.times)||0)+1,clone[index]=innerConfig):(innerConfig.times=0,clone.push(innerConfig));return maxCount>0&&clone.length>maxCount&&(clone=clone.slice(-maxCount)),clone}))},close:function close(key){onNoticeClose(key)},destroy:function destroy(){setConfigList([])}}}));var _React$useState3=react.useState({}),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),placements=_React$useState4[0],setPlacements=_React$useState4[1];react.useEffect((function(){var nextPlacements={};configList.forEach((function(config){var _config$placement=config.placement,placement=void 0===_config$placement?"topRight":_config$placement;placement&&(nextPlacements[placement]=nextPlacements[placement]||[],nextPlacements[placement].push(config))})),Object.keys(placements).forEach((function(placement){nextPlacements[placement]=nextPlacements[placement]||[]})),setPlacements(nextPlacements)}),[configList]);var onAllNoticeRemoved=function onAllNoticeRemoved(placement){setPlacements((function(originPlacements){var clone=(0,objectSpread2.A)({},originPlacements);return(clone[placement]||[]).length||delete clone[placement],clone}))},emptyRef=react.useRef(!1);if(react.useEffect((function(){Object.keys(placements).length>0?emptyRef.current=!0:emptyRef.current&&(null==onAllRemoved||onAllRemoved(),emptyRef.current=!1)}),[placements]),!container)return null;var placementList=Object.keys(placements);return(0,react_dom.createPortal)(react.createElement(react.Fragment,null,placementList.map((function(placement){var placementConfigList=placements[placement],list=react.createElement(es_NoticeList,{key:placement,configList:placementConfigList,placement,prefixCls,className:null==className?void 0:className(placement),style:null==style?void 0:style(placement),motion,onNoticeClose,onAllNoticeRemoved,stack});return renderNotifications?renderNotifications(list,{prefixCls,key:placement}):list}))),container)}));var useNotification_excluded=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],defaultGetContainer=function defaultGetContainer(){return document.body},uniqueKey=0;function useNotification(){var rootConfig=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_rootConfig$getContai=rootConfig.getContainer,getContainer=void 0===_rootConfig$getContai?defaultGetContainer:_rootConfig$getContai,motion=rootConfig.motion,prefixCls=rootConfig.prefixCls,maxCount=rootConfig.maxCount,className=rootConfig.className,style=rootConfig.style,onAllRemoved=rootConfig.onAllRemoved,stack=rootConfig.stack,renderNotifications=rootConfig.renderNotifications,shareConfig=(0,objectWithoutProperties.A)(rootConfig,useNotification_excluded),_React$useState=react.useState(),_React$useState2=(0,slicedToArray.A)(_React$useState,2),container=_React$useState2[0],setContainer=_React$useState2[1],notificationsRef=react.useRef(),contextHolder=react.createElement(es_Notifications,{container,ref:notificationsRef,prefixCls,motion,maxCount,className,style,onAllRemoved,stack,renderNotifications}),_React$useState3=react.useState([]),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),taskQueue=_React$useState4[0],setTaskQueue=_React$useState4[1],api=react.useMemo((function(){return{open:function open(config){var mergedConfig=function mergeConfig(){for(var clone={},_len=arguments.length,objList=new Array(_len),_key=0;_key<_len;_key++)objList[_key]=arguments[_key];return objList.forEach((function(obj){obj&&Object.keys(obj).forEach((function(key){var val=obj[key];void 0!==val&&(clone[key]=val)}))})),clone}(shareConfig,config);null!==mergedConfig.key&&void 0!==mergedConfig.key||(mergedConfig.key="rc-notification-".concat(uniqueKey),uniqueKey+=1),setTaskQueue((function(queue){return[].concat((0,toConsumableArray.A)(queue),[{type:"open",config:mergedConfig}])}))},close:function close(key){setTaskQueue((function(queue){return[].concat((0,toConsumableArray.A)(queue),[{type:"close",key}])}))},destroy:function destroy(){setTaskQueue((function(queue){return[].concat((0,toConsumableArray.A)(queue),[{type:"destroy"}])}))}}}),[]);return react.useEffect((function(){setContainer(getContainer())})),react.useEffect((function(){notificationsRef.current&&taskQueue.length&&(taskQueue.forEach((function(task){switch(task.type){case"open":notificationsRef.current.open(task.config);break;case"close":notificationsRef.current.close(task.key);break;case"destroy":notificationsRef.current.destroy()}})),setTaskQueue((function(oriQueue){return oriQueue.filter((function(task){return!taskQueue.includes(task)}))})))}),[taskQueue]),[api,contextHolder]}},"./node_modules/rxjs/dist/esm5/internal/Observable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Observable});var Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/symbol/observable.js"),identity=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js");function pipeFromArray(fns){return 0===fns.length?identity.D:1===fns.length?fns[0]:function piped(input){return fns.reduce((function(prev,fn){return fn(prev)}),input)}}var config=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/config.js"),isFunction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),errorContext=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/errorContext.js"),Observable=function(){function Observable(subscribe){subscribe&&(this._subscribe=subscribe)}return Observable.prototype.lift=function(operator){var observable=new Observable;return observable.source=this,observable.operator=operator,observable},Observable.prototype.subscribe=function(observerOrNext,error,complete){var _this=this,subscriber=function isSubscriber(value){return value&&value instanceof Subscriber.vU||function isObserver(value){return value&&(0,isFunction.T)(value.next)&&(0,isFunction.T)(value.error)&&(0,isFunction.T)(value.complete)}(value)&&(0,Subscription.Uv)(value)}(observerOrNext)?observerOrNext:new Subscriber.Ms(observerOrNext,error,complete);return(0,errorContext.Y)((function(){var _a=_this,operator=_a.operator,source=_a.source;subscriber.add(operator?operator.call(subscriber,source):source?_this._subscribe(subscriber):_this._trySubscribe(subscriber))})),subscriber},Observable.prototype._trySubscribe=function(sink){try{return this._subscribe(sink)}catch(err){sink.error(err)}},Observable.prototype.forEach=function(next,promiseCtor){var _this=this;return new(promiseCtor=getPromiseCtor(promiseCtor))((function(resolve,reject){var subscriber=new Subscriber.Ms({next:function(value){try{next(value)}catch(err){reject(err),subscriber.unsubscribe()}},error:reject,complete:resolve});_this.subscribe(subscriber)}))},Observable.prototype._subscribe=function(subscriber){var _a;return null===(_a=this.source)||void 0===_a?void 0:_a.subscribe(subscriber)},Observable.prototype[observable.s]=function(){return this},Observable.prototype.pipe=function(){for(var operations=[],_i=0;_i<arguments.length;_i++)operations[_i]=arguments[_i];return pipeFromArray(operations)(this)},Observable.prototype.toPromise=function(promiseCtor){var _this=this;return new(promiseCtor=getPromiseCtor(promiseCtor))((function(resolve,reject){var value;_this.subscribe((function(x){return value=x}),(function(err){return reject(err)}),(function(){return resolve(value)}))}))},Observable.create=function(subscribe){return new Observable(subscribe)},Observable}();function getPromiseCtor(promiseCtor){var _a;return null!==(_a=null!=promiseCtor?promiseCtor:config.$.Promise)&&void 0!==_a?_a:Promise}},"./node_modules/rxjs/dist/esm5/internal/Subscriber.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ms:()=>SafeSubscriber,vU:()=>Subscriber});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),isFunction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),config=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/config.js"),reportUnhandledError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");function noop(){}var COMPLETE_NOTIFICATION=createNotification("C",void 0,void 0);function createNotification(kind,value,error){return{kind,value,error}}var timeoutProvider=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js"),errorContext=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/errorContext.js"),Subscriber=function(_super){function Subscriber(destination){var _this=_super.call(this)||this;return _this.isStopped=!1,destination?(_this.destination=destination,(0,Subscription.Uv)(destination)&&destination.add(_this)):_this.destination=EMPTY_OBSERVER,_this}return(0,tslib_es6.C6)(Subscriber,_super),Subscriber.create=function(next,error,complete){return new SafeSubscriber(next,error,complete)},Subscriber.prototype.next=function(value){this.isStopped?handleStoppedNotification(function nextNotification(value){return createNotification("N",value,void 0)}(value),this):this._next(value)},Subscriber.prototype.error=function(err){this.isStopped?handleStoppedNotification(function errorNotification(error){return createNotification("E",void 0,error)}(err),this):(this.isStopped=!0,this._error(err))},Subscriber.prototype.complete=function(){this.isStopped?handleStoppedNotification(COMPLETE_NOTIFICATION,this):(this.isStopped=!0,this._complete())},Subscriber.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,_super.prototype.unsubscribe.call(this),this.destination=null)},Subscriber.prototype._next=function(value){this.destination.next(value)},Subscriber.prototype._error=function(err){try{this.destination.error(err)}finally{this.unsubscribe()}},Subscriber.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},Subscriber}(Subscription.yU),_bind=Function.prototype.bind;function bind(fn,thisArg){return _bind.call(fn,thisArg)}var ConsumerObserver=function(){function ConsumerObserver(partialObserver){this.partialObserver=partialObserver}return ConsumerObserver.prototype.next=function(value){var partialObserver=this.partialObserver;if(partialObserver.next)try{partialObserver.next(value)}catch(error){handleUnhandledError(error)}},ConsumerObserver.prototype.error=function(err){var partialObserver=this.partialObserver;if(partialObserver.error)try{partialObserver.error(err)}catch(error){handleUnhandledError(error)}else handleUnhandledError(err)},ConsumerObserver.prototype.complete=function(){var partialObserver=this.partialObserver;if(partialObserver.complete)try{partialObserver.complete()}catch(error){handleUnhandledError(error)}},ConsumerObserver}(),SafeSubscriber=function(_super){function SafeSubscriber(observerOrNext,error,complete){var partialObserver,context_1,_this=_super.call(this)||this;(0,isFunction.T)(observerOrNext)||!observerOrNext?partialObserver={next:null!=observerOrNext?observerOrNext:void 0,error:null!=error?error:void 0,complete:null!=complete?complete:void 0}:_this&&config.$.useDeprecatedNextContext?((context_1=Object.create(observerOrNext)).unsubscribe=function(){return _this.unsubscribe()},partialObserver={next:observerOrNext.next&&bind(observerOrNext.next,context_1),error:observerOrNext.error&&bind(observerOrNext.error,context_1),complete:observerOrNext.complete&&bind(observerOrNext.complete,context_1)}):partialObserver=observerOrNext;return _this.destination=new ConsumerObserver(partialObserver),_this}return(0,tslib_es6.C6)(SafeSubscriber,_super),SafeSubscriber}(Subscriber);function handleUnhandledError(error){config.$.useDeprecatedSynchronousErrorHandling?(0,errorContext.l)(error):(0,reportUnhandledError.m)(error)}function handleStoppedNotification(notification,subscriber){var onStoppedNotification=config.$.onStoppedNotification;onStoppedNotification&&timeoutProvider.f.setTimeout((function(){return onStoppedNotification(notification,subscriber)}))}var EMPTY_OBSERVER={closed:!0,next:noop,error:function defaultErrorHandler(err){throw err},complete:noop}},"./node_modules/rxjs/dist/esm5/internal/config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>config});var config={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},"./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>timeoutProvider});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),timeoutProvider={setTimeout:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=timeoutProvider.delegate;return(null==delegate?void 0:delegate.setTimeout)?delegate.setTimeout.apply(delegate,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([handler,timeout],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):setTimeout.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([handler,timeout],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args)))},clearTimeout:function(handle){var delegate=timeoutProvider.delegate;return((null==delegate?void 0:delegate.clearTimeout)||clearTimeout)(handle)},delegate:void 0}},"./node_modules/rxjs/dist/esm5/internal/symbol/observable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>observable});var observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},"./node_modules/rxjs/dist/esm5/internal/util/errorContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>errorContext,l:()=>captureError});var _config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/config.js"),context=null;function errorContext(cb){if(_config__WEBPACK_IMPORTED_MODULE_0__.$.useDeprecatedSynchronousErrorHandling){var isRoot=!context;if(isRoot&&(context={errorThrown:!1,error:null}),cb(),isRoot){var _a=context,errorThrown=_a.errorThrown,error=_a.error;if(context=null,errorThrown)throw error}}else cb()}function captureError(err){_config__WEBPACK_IMPORTED_MODULE_0__.$.useDeprecatedSynchronousErrorHandling&&context&&(context.errorThrown=!0,context.error=err)}},"./node_modules/rxjs/dist/esm5/internal/util/identity.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function identity(x){return x}__webpack_require__.d(__webpack_exports__,{D:()=>identity})},"./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>reportUnhandledError});var _config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/config.js"),_scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");function reportUnhandledError(err){_scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.f.setTimeout((function(){var onUnhandledError=_config__WEBPACK_IMPORTED_MODULE_1__.$.onUnhandledError;if(!onUnhandledError)throw err;onUnhandledError(err)}))}}}]);