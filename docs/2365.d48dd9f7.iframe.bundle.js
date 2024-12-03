(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[2365],{"./node_modules/react-i18next/dist/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bd:()=>useTranslation_useTranslation});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/void-elements/index.js");Object.create(null);const alreadyWarned={},utils_warnOnce=(...args)=>{utils_isString(args[0])&&alreadyWarned[args[0]]||(utils_isString(args[0])&&(alreadyWarned[args[0]]=new Date),((...args)=>{console?.warn&&(utils_isString(args[0])&&(args[0]=`react-i18next:: ${args[0]}`),console.warn(...args))})(...args))},loadedClb=(i18n,cb)=>()=>{if(i18n.isInitialized)cb();else{const initialized=()=>{setTimeout((()=>{i18n.off("initialized",initialized)}),0),cb()};i18n.on("initialized",initialized)}},loadNamespaces=(i18n,ns,cb)=>{i18n.loadNamespaces(ns,loadedClb(i18n,cb))},loadLanguages=(i18n,lng,ns,cb)=>{utils_isString(ns)&&(ns=[ns]),ns.forEach((n=>{i18n.options.ns.indexOf(n)<0&&i18n.options.ns.push(n)})),i18n.loadLanguages(lng,loadedClb(i18n,cb))},utils_isString=obj=>"string"==typeof obj,matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=m=>htmlEntities[m];let defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:text=>text.replace(matchHtmlEntity,unescapeHtmlEntity)};let i18nInstance;const context_I18nContext=(0,react.createContext)();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(namespaces){namespaces.forEach((ns=>{this.usedNamespaces[ns]??=!0}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const alwaysNewT=(i18n,language,namespace,keyPrefix)=>i18n.getFixedT(language,namespace,keyPrefix),useTranslation_useTranslation=(ns,props={})=>{const{i18n:i18nFromProps}=props,{i18n:i18nFromContext,defaultNS:defaultNSFromContext}=(0,react.useContext)(context_I18nContext)||{},i18n=i18nFromProps||i18nFromContext||i18nInstance;if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");const notReadyT=(k,optsOrDefaultValue)=>{return utils_isString(optsOrDefaultValue)?optsOrDefaultValue:"object"==typeof(obj=optsOrDefaultValue)&&null!==obj&&utils_isString(optsOrDefaultValue.defaultValue)?optsOrDefaultValue.defaultValue:Array.isArray(k)?k[k.length-1]:k;var obj},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react?.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i18nOptions={...defaultOptions,...i18n.options.react,...props},{useSuspense,keyPrefix}=i18nOptions;let namespaces=ns||defaultNSFromContext||i18n.options?.defaultNS;namespaces=utils_isString(namespaces)?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces?.(namespaces);const ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((n=>((ns,i18n,options={})=>i18n.languages&&i18n.languages.length?i18n.hasLoadedNamespace(ns,{lng:options.lng,precheck:(i18nInstance,loadNotPending)=>{if(options.bindI18n?.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):(utils_warnOnce("i18n.languages were undefined or empty",i18n.languages),!0))(n,i18n,i18nOptions))),memoGetT=((i18n,language,namespace,keyPrefix)=>(0,react.useCallback)(alwaysNewT(i18n,language,namespace,keyPrefix),[i18n,language,namespace,keyPrefix]))(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),getT=()=>memoGetT,getNewT=()=>alwaysNewT(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),[t,setT]=(0,react.useState)(getT);let joinedNS=namespaces.join();props.lng&&(joinedNS=`${props.lng}${joinedNS}`);const previousJoinedNS=((value,ignore)=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=ignore?ref.current:value}),[value,ignore]),ref.current})(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((()=>{const{bindI18n,bindI18nStore}=i18nOptions;isMounted.current=!0,ready||useSuspense||(props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>{isMounted.current&&setT(getNewT)})):loadNamespaces(i18n,namespaces,(()=>{isMounted.current&&setT(getNewT)}))),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getNewT);const boundReset=()=>{isMounted.current&&setT(getNewT)};return bindI18n&&i18n?.on(bindI18n,boundReset),bindI18nStore&&i18n?.store.on(bindI18nStore,boundReset),()=>{isMounted.current=!1,i18n&&bindI18n?.split(" ").forEach((e=>i18n.off(e,boundReset))),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((e=>i18n.store.off(e,boundReset)))}}),[i18n,joinedNS]),(0,react.useEffect)((()=>{isMounted.current&&ready&&setT(getT)}),[i18n,keyPrefix,ready]);const ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((resolve=>{props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>resolve())):loadNamespaces(i18n,namespaces,(()=>resolve()))}))}},"./node_modules/void-elements/index.js":module=>{module.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);