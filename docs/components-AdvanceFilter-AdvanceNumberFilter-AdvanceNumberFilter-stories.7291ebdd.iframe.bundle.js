/*! For license information please see components-AdvanceFilter-AdvanceNumberFilter-AdvanceNumberFilter-stories.7291ebdd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[8448],{"./node_modules/@carbon/icons-react/es/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>Icon});var _excluded=["width","height","viewBox"],_excluded2=["tabindex"],defaultAttributes={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function getAttributes(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=_ref.width,height=_ref.height,_ref$viewBox=_ref.viewBox,viewBox=void 0===_ref$viewBox?"0 0 ".concat(width," ").concat(height):_ref$viewBox,attributes=_objectWithoutProperties(_ref,_excluded),tabindex=attributes.tabindex,rest=_objectWithoutProperties(attributes,_excluded2),iconAttributes=_objectSpread2(_objectSpread2(_objectSpread2({},defaultAttributes),rest),{},{width,height,viewBox});return iconAttributes["aria-label"]||iconAttributes["aria-labelledby"]||iconAttributes.title?(iconAttributes.role="img",null!=tabindex&&(iconAttributes.focusable="true",iconAttributes.tabindex=tabindex)):iconAttributes["aria-hidden"]=!0,iconAttributes}var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");const Icon=react.forwardRef((function Icon(_ref,ref){let{className,children,tabIndex,xmlns="http://www.w3.org/2000/svg",preserveAspectRatio="xMidYMid meet",...rest}=_ref;const{tabindex,...attrs}=getAttributes({...rest,tabindex:tabIndex}),props=attrs;return className&&(props.className=className),null!=tabindex&&(props.tabIndex="number"==typeof tabindex?tabindex:Number(tabIndex)),ref&&(props.ref=ref),xmlns&&(props.xmlns=xmlns),preserveAspectRatio&&(props.preserveAspectRatio=preserveAspectRatio),react.createElement("svg",props,children)}));Icon.displayName="Icon",Icon.propTypes={"aria-hidden":prop_types_default().oneOfType([prop_types_default().bool,prop_types_default().oneOf(["true","false"])]),"aria-label":prop_types_default().string,"aria-labelledby":prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),preserveAspectRatio:prop_types_default().string,tabIndex:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),viewBox:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),xmlns:prop_types_default().string}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.DZ,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VY,h1:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h1,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.hE,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,om:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/config/enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hv:()=>NUMBER_TYPE,Rs:()=>ValidateStatus,Xx:()=>NUMBER_BUTTON,fD:()=>ADVANCE_DATE_RANGE_TYPE,gb:()=>ActionFilterEnum,os:()=>TAG_STATUS,qi:()=>BORDER_TYPE,sE:()=>MODAL_SIZE,yV:()=>UPLOADTYPE_IMAGE});let BORDER_TYPE=function(BORDER_TYPE){return BORDER_TYPE[BORDER_TYPE.MATERIAL=0]="MATERIAL",BORDER_TYPE[BORDER_TYPE.BORDERED=1]="BORDERED",BORDER_TYPE[BORDER_TYPE.FLOAT_LABEL=2]="FLOAT_LABEL",BORDER_TYPE[BORDER_TYPE.NOT_BORDERED=3]="NOT_BORDERED",BORDER_TYPE}({}),ValidateStatus=function(ValidateStatus){return ValidateStatus.success="success",ValidateStatus.warning="warning",ValidateStatus.error="error",ValidateStatus.validating="validating",ValidateStatus}({}),NUMBER_BUTTON=function(NUMBER_BUTTON){return NUMBER_BUTTON.THREE="three",NUMBER_BUTTON.TWO="two",NUMBER_BUTTON}({}),ADVANCE_DATE_RANGE_TYPE=function(ADVANCE_DATE_RANGE_TYPE){return ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.SHORT=0]="SHORT",ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.INPUT=1]="INPUT",ADVANCE_DATE_RANGE_TYPE}({}),ActionFilterEnum=function(ActionFilterEnum){return ActionFilterEnum[ActionFilterEnum.ChangeAllField=0]="ChangeAllField",ActionFilterEnum[ActionFilterEnum.ChangeOneField=1]="ChangeOneField",ActionFilterEnum[ActionFilterEnum.ChangePageIndexPageSize=2]="ChangePageIndexPageSize",ActionFilterEnum[ActionFilterEnum.ChangeOrderType=3]="ChangeOrderType",ActionFilterEnum}({}),UPLOADTYPE_IMAGE=function(UPLOADTYPE_IMAGE){return UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.IMAGE=0]="IMAGE",UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.AVATAR=1]="AVATAR",UPLOADTYPE_IMAGE}({}),MODAL_SIZE=function(MODAL_SIZE){return MODAL_SIZE[MODAL_SIZE.SIZE_400=400]="SIZE_400",MODAL_SIZE[MODAL_SIZE.SIZE_600=600]="SIZE_600",MODAL_SIZE[MODAL_SIZE.SIZE_800=800]="SIZE_800",MODAL_SIZE[MODAL_SIZE.SIZE_1000=1e3]="SIZE_1000",MODAL_SIZE}({}),NUMBER_TYPE=function(NUMBER_TYPE){return NUMBER_TYPE.DECIMAL="DECIMAL",NUMBER_TYPE.LONG="LONG",NUMBER_TYPE}({}),TAG_STATUS=function(TAG_STATUS){return TAG_STATUS.SUCCESS="SUCCESS",TAG_STATUS.ERROR="ERROR",TAG_STATUS.INFO="INFO",TAG_STATUS.IN_PROGRESS="IN_PROGRESS",TAG_STATUS.DEFAULT="DEFAULT",TAG_STATUS.CLOSE="CLOSE",TAG_STATUS}({})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".advance-number-filter__wrapper{display:flex;flex-direction:column;width:100%}.advance-number-filter__wrapper .advance-number-filter__label{width:100%;display:flex}.advance-number-filter__wrapper .advance-number-filter__label .component__title--disabled{color:var(--palette-gray-40)}.advance-number-filter__wrapper .advance-number-filter__label label{font-size:14px;color:var(--palette-base-neutral-7);white-space:nowrap}.advance-number-filter__wrapper .advance-number-filter__container{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;outline:1px solid var(--palette-coolGray-50);background-color:var(--palette-gray-10);height:40px}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter__container--sm{height:32px !important}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter__container--white{background-color:var(--color-white)}.advance-number-filter__wrapper .advance-number-filter__container:focus-within{outline:1.5px solid var(--color-primary);box-shadow:0px 0px 0px 4px var(--color-primary-blur)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled{outline-color:var(--palette-coolGray-30);background-color:var(--palette-gray-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled:hover{cursor:not-allowed}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled span{color:var(--palette-gray-40)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled input{color:var(--palette-gray-40) !important}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--float:hover:not(.advance-number-filter--disabled):not(:focus-within){outline-color:var(--palette-gray-100)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--float:focus-within{box-shadow:none;outline:2px solid var(--color-primary)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--float:focus-within .component__title{color:var(--color-primary)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--border{border-radius:2px}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material{outline:none;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:inset 0px -1px 0px var(--palette-gray-50);margin-bottom:-1px}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:hover{background-color:var(--palette-grayHover-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:hover .component__input{background-color:var(--palette-grayHover-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:hover .component__input.disabled-field{background-color:var(--palette-gray-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:focus-within{outline:2px solid var(--color-primary);box-shadow:none}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material.advance-number-filter--disabled{box-shadow:none;background-color:var(--palette-gray-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material.advance-number-filter--float:focus-within{box-shadow:none;outline-width:2px}.advance-number-filter__wrapper .advance-number-filter__container .component__title{position:absolute;color:var(--palette-gray-60);transition:all .1s ease-out;padding:0 4px;z-index:200;top:9px;font-size:14px}.advance-number-filter__wrapper .advance-number-filter__container .component__title.component__title--normal{left:8px}.advance-number-filter__wrapper .advance-number-filter__container .component__title.component__title--sm{top:5px}.advance-number-filter__wrapper .advance-number-filter__container .component__title.component__title--prefix{left:41px}.advance-number-filter__wrapper .advance-number-filter__container .advance-number-filter__icon{display:flex;align-items:center}.advance-number-filter__wrapper .advance-number-filter__container span{font-size:14px;line-height:1rem;color:var(--palette-gray-60)}.advance-number-filter__wrapper .advance-number-filter__container input{font-family:inherit;padding:0;outline:none;border:none;width:100%;border-radius:4px;font-size:14px;line-height:1rem;background-color:rgba(0,0,0,0)}.advance-number-filter__wrapper .advance-number-filter__container input::placeholder{color:var(--palette-base-neutral-6)}.advance-number-filter__wrapper .advance-number-filter__container input:disabled:hover{cursor:not-allowed}.advance-number-filter__wrapper .advance-number-filter__container input:disabled::placeholder{color:var(--palette-base-neutral-6)}.advance-number-filter__wrapper .advance-number-filter__container input:not(:placeholder-shown)+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.advance-number-filter__wrapper .advance-number-filter__container input:focus+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.advance-number-filter__wrapper .advance-number-filter__container input:focus::placeholder{color:rgba(0,0,0,0)}.advance-number-filter__wrapper .advance-number-filter__container .input-icon__clear{display:flex;justify-content:center;align-items:center}.advance-number-filter__wrapper .advance-number-filter__container .input-icon__clear svg{color:var(--palette-coolGray-50)}.advance-number-filter__wrapper .advance-number-filter__container .input-icon__clear svg:hover{cursor:pointer;color:var(--palette-coolGrayHover-50)}.form-item__container.form-item__container--error .form-item__content .component__input.advance-number-filter--material{outline:1px solid;box-shadow:none !important}.form-item__container.form-item__container--error .form-item__content .component__input.advance-number-filter--material:focus-within{outline-color:var(--color-primary) !important;outline-width:2px}","",{version:3,sources:["webpack://./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.scss"],names:[],mappings:"AACA,gCACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,8DACE,UAAA,CACA,YAAA,CAEA,0FACE,4BAAA,CAGF,oEACE,cAAA,CACA,mCAAA,CACA,kBAAA,CAIJ,kEACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,uCAAA,CACA,WAAA,CAEA,uGACE,sBAAA,CAGF,0GACE,mCAAA,CAOF,+EACE,wCAAA,CACA,oDAAA,CAGF,kGACE,wCAAA,CACA,uCAAA,CACA,wGACE,kBAAA,CAGF,uGACE,4BAAA,CAGF,wGACE,uCAAA,CAKF,8JACE,qCAAA,CAEF,4GACE,eAAA,CACA,sCAAA,CACA,8HACE,0BAAA,CAKN,gGACE,iBAAA,CAGF,kGACE,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,oDAAA,CACA,kBAAA,CAEA,wGACE,4CAAA,CACA,0HACE,4CAAA,CAEF,yIACE,uCAAA,CAIJ,+GACE,sCAAA,CACA,eAAA,CAGF,kIACE,eAAA,CACA,uCAAA,CAGF,4IACE,eAAA,CACA,iBAAA,CAIJ,oFACE,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,OAAA,CACA,cAAA,CAEA,6GACE,QAAA,CAEF,yGACE,OAAA,CAEF,6GACE,SAAA,CAIJ,+FACE,YAAA,CACA,kBAAA,CAGF,uEACE,cAAA,CACA,gBAAA,CACA,4BAAA,CAGF,wEACE,mBAAA,CACA,SAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,8BAAA,CAEA,qFACE,mCAAA,CAIA,uFACE,kBAAA,CAEF,8FACE,mCAAA,CAIJ,kHACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,gGACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,2FACE,mBAAA,CAIJ,qFACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,yFACE,gCAAA,CACA,+FACE,cAAA,CACA,qCAAA,CAWF,wHACE,iBAAA,CACA,0BAAA,CACA,qIACE,6CAAA,CACA,iBAAA",sourcesContent:["/* Style for InputNumber.tsx */\n.advance-number-filter__wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  .advance-number-filter__label {\n    width: 100%;\n    display: flex;\n\n    .component__title--disabled {\n      color: var(--palette-gray-40);\n    }\n\n    label {\n      font-size: 14px;\n      color: var(--palette-base-neutral-7);\n      white-space: nowrap;\n    }\n  }\n\n  .advance-number-filter__container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    outline: 1px solid var(--palette-coolGray-50);\n    background-color: var(--palette-gray-10);\n    height: 40px;\n\n    &.advance-number-filter__container--sm {\n      height: 32px !important;\n    }\n\n    &.advance-number-filter__container--white {\n      background-color: var(--color-white);\n    }\n\n    // &:hover {\n    //   outline-color: var(--color-primary);\n    // }\n\n    &:focus-within {\n      outline: 1.5px solid var(--color-primary);\n      box-shadow: 0px 0px 0px 4px var(--color-primary-blur);\n    }\n\n    &.advance-number-filter--disabled {\n      outline-color: var(--palette-coolGray-30);\n      background-color: var(--palette-gray-10);\n      &:hover {\n        cursor: not-allowed;\n      }\n\n      span {\n        color: var(--palette-gray-40);\n      }\n\n      input {\n        color: var(--palette-gray-40) !important;\n      }\n    }\n\n    &.advance-number-filter--float {\n      &:hover:not(.advance-number-filter--disabled):not(:focus-within) {\n        outline-color: var(--palette-gray-100);\n      }\n      &:focus-within {\n        box-shadow: none;\n        outline: 2px solid var(--color-primary);\n        .component__title {\n          color: var(--color-primary);\n        }\n      }\n    }\n\n    &.advance-number-filter--border {\n      border-radius: 2px;\n    }\n\n    &.advance-number-filter--material {\n      outline: none;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      box-shadow: inset 0px -1px 0px var(--palette-gray-50);\n      margin-bottom: -1px;\n\n      &:hover {\n        background-color: var(--palette-grayHover-10);\n        .component__input {\n          background-color: var(--palette-grayHover-10);\n        }\n        .component__input.disabled-field {\n          background-color: var(--palette-gray-10);\n        }\n      }\n\n      &:focus-within {\n        outline: 2px solid var(--color-primary);\n        box-shadow: none;\n      }\n\n      &.advance-number-filter--disabled {\n        box-shadow: none;\n        background-color: var(--palette-gray-10);\n      }\n\n      &.advance-number-filter--float:focus-within {\n        box-shadow: none;\n        outline-width: 2px;\n      }\n    }\n\n    .component__title {\n      position: absolute;\n      color: var(--palette-gray-60);\n      transition: all 0.1s ease-out;\n      padding: 0 4px;\n      z-index: 200;\n      top: 9px;\n      font-size: 14px;\n\n      &.component__title--normal {\n        left: 8px;\n      }\n      &.component__title--sm {\n        top: 5px;\n      }\n      &.component__title--prefix {\n        left: 41px;\n      }\n    }\n\n    .advance-number-filter__icon {\n      display: flex;\n      align-items: center;\n    }\n\n    span {\n      font-size: 14px;\n      line-height: 1rem;\n      color: var(--palette-gray-60);\n    }\n\n    input {\n      font-family: inherit;\n      padding: 0;\n      outline: none;\n      border: none;\n      width: 100%;\n      border-radius: 4px;\n      font-size: 14px;\n      line-height: 1rem;\n      background-color: transparent;\n\n      &::placeholder {\n        color: var(--palette-base-neutral-6);\n      }\n\n      &:disabled {\n        &:hover {\n          cursor: not-allowed;\n        }\n        &::placeholder {\n          color: var(--palette-base-neutral-6);\n        }\n      }\n\n      &:not(:placeholder-shown) + .component__title {\n        top: 0;\n        left: 8px;\n        background-color: var(--color-white);\n        transform: translateY(-50%) scale(0.9);\n      }\n\n      &:focus + .component__title {\n        top: 0;\n        left: 8px;\n        background-color: var(--color-white);\n        transform: translateY(-50%) scale(0.9);\n      }\n\n      &:focus::placeholder {\n        color: transparent;\n      }\n    }\n\n    .input-icon__clear {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      svg {\n        color: var(--palette-coolGray-50);\n        &:hover {\n          cursor: pointer;\n          color: var(--palette-coolGrayHover-50);\n        }\n      }\n    }\n  }\n}\n\n.form-item__container {\n  &.form-item__container--error {\n    .form-item__content {\n      .component__input {\n        &.advance-number-filter--material {\n          outline: 1px solid;\n          box-shadow: none !important;\n          &:focus-within {\n            outline-color: var(--color-primary) !important;\n            outline-width: 2px;\n          }\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AdvanceNumberFilter_stories});var react=__webpack_require__("./node_modules/react/index.js"),config_enum=__webpack_require__("./src/config/enum.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),bucket_3=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-3.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AdvanceNumberFilter=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AdvanceNumberFilter.A,options);AdvanceNumberFilter.A&&AdvanceNumberFilter.A.locals&&AdvanceNumberFilter.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter(props){const{label,type,prefix,suffix,value,allowPositive,numberType,decimalDigit,isReverseSymb,placeHolder,className,disabled,min,max,isSmall,bgColor,onChange,onEnter,onBlur}=props,[internalValue,setInternalValue]=react.useState(""),inputRef=react.useRef(null),cursorPosition=react.useRef({selectionStart:0,selectionEnd:0}),buildRegex=react.useCallback((()=>{var regExDecimal="",regExString="";for(let i=1;i<=decimalDigit;i++)regExDecimal+="\\d";return regExString=isReverseSymb?"(\\d)(?=(?:\\d{3})+(?:,|$))|(,"+regExDecimal+"?)\\d*$":"(\\d)(?=(?:\\d{3})+(?:\\.|$))|(\\."+regExDecimal+"?)\\d*$",new RegExp(regExString,"g")}),[decimalDigit,isReverseSymb]),formatString=react.useCallback((inputValue=>{const newRegEx=buildRegex();return isReverseSymb?numberType===config_enum.Hv.DECIMAL?(inputValue=allowPositive?inputValue.replace(/[^0-9,-]/g,"").replace(",","x").replace(/,/g,"").replace("x",",").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9,]/g,"").replace(",","x").replace(/,/g,"").replace("x",",")).replace(newRegEx,((m,s1,s2)=>s2||s1+".")):(inputValue=allowPositive?inputValue.replace(/[^0-9-]/g,"").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9]/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,"."):numberType===config_enum.Hv.DECIMAL?(inputValue=allowPositive?inputValue.replace(/[^0-9.-]/g,"").replace(".","x").replace(/\./g,"").replace("x",".").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9.]/g,"").replace(".","x").replace(/\./g,"").replace("x",".")).replace(newRegEx,((m,s1,s2)=>s2||s1+",")):(inputValue=allowPositive?inputValue.replace(/[^0-9-]/g,"").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9]/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),[isReverseSymb,numberType,buildRegex,allowPositive]),parseNumber=react.useCallback((value=>{var number,stringValue;return value?(stringValue=isReverseSymb?(stringValue=value.replace(/[,.]/g,(m=>"."===m?",":"."))).replace(/,/g,""):value.replace(/,/g,""),numberType===config_enum.Hv.DECIMAL?[number=parseFloat(stringValue),"number"==typeof max&&number>max||"number"==typeof min&&number<min]:[number=parseInt(stringValue),"number"==typeof max&&number>max||"number"==typeof min&&number<min]):[void 0,!1]}),[numberType,isReverseSymb,min,max]),handleChange=react.useCallback((event=>{const{selectionEnd,selectionStart}=event.target,stringValue=formatString(event.target.value),[numberValue,isOutOfRange]=parseNumber(stringValue);if(!isOutOfRange){if("function"==typeof onChange){/[-,.]/g.test(Array.from(stringValue)[0])||onChange(numberValue)}setInternalValue(stringValue)}event.target.value.length<stringValue.length?(cursorPosition.current.selectionStart=selectionStart+1,cursorPosition.current.selectionEnd=selectionEnd+1):(cursorPosition.current.selectionStart=selectionStart,cursorPosition.current.selectionEnd=selectionEnd)}),[formatString,parseNumber,onChange]),handleClearInput=react.useCallback((event=>{setInternalValue(""),inputRef.current.focus(),"function"!=typeof onChange?"function"!=typeof onBlur?"function"!=typeof onEnter||onEnter(void 0):onBlur(void 0):onChange(void 0)}),[onBlur,onChange,onEnter]),handleKeyPress=react.useCallback((event=>{"Enter"===event.key&&"function"==typeof onEnter&&onEnter(parseNumber(event.currentTarget.value)[0])}),[onEnter,parseNumber]),handleBlur=react.useCallback((event=>{"function"==typeof onBlur&&onBlur(parseNumber(event.currentTarget.value)[0])}),[onBlur,parseNumber]);return react.useEffect((()=>{if(value){var stringValue=""+value;isReverseSymb&&(stringValue=stringValue.replace(/\./g,",")),setInternalValue(formatString(stringValue))}else setInternalValue("")}),[value,formatString,isReverseSymb]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("advance-number-filter__wrapper",className),children:[(0,jsx_runtime.jsx)("div",{className:"advance-number-filter__label m-b--3xs",children:type!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsx)("label",{className:classnames_default()("component__title",{"component__title--disabled":disabled}),children:label})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component__input advance-number-filter__container p--xs",{"advance-number-filter__container--sm":isSmall,"advance-number-filter__container--white":"white"===bgColor,"py--2xs":isSmall,"px--xs":isSmall,"p--xs":!isSmall,"advance-number-filter--material":type===config_enum.qi.MATERIAL,"advance-number-filter--border":type===config_enum.qi.BORDERED,"advance-number-filter--disabled ":disabled,"advance-number-filter--float":type===config_enum.qi.FLOAT_LABEL}),onClick:()=>{inputRef.current.focus()},children:[prefix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof prefix?(0,jsx_runtime.jsx)("span",{className:"p-r--2xs",children:prefix}):(0,jsx_runtime.jsx)("div",{className:"m-r--xs advance-number-filter__icon",children:prefix})}),(0,jsx_runtime.jsx)("input",{type:"text",value:internalValue,onChange:handleChange,onKeyDown:handleKeyPress,onBlur:handleBlur,placeholder:type===config_enum.qi.FLOAT_LABEL&&label?" ":placeHolder,ref:inputRef,disabled,className:classnames_default()("component__input",{"disabled-field":disabled}),min,max}),type===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsx)("label",{className:classnames_default()("component__title",{"component__title--normal":!prefix,"component__title--prefix":prefix,"component__title--sm":isSmall}),children:label}),internalValue&&!disabled&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("input-icon__clear","m-l--2xs"),children:(0,jsx_runtime.jsx)(bucket_3.R9,{size:16,onClick:handleClearInput})}),suffix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof suffix?(0,jsx_runtime.jsx)("span",{className:"body-text--md m-l--2xs",children:suffix}):(0,jsx_runtime.jsx)("div",{className:"m-l--2xs",children:suffix})})]})]})}AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.displayName="AdvanceNumberFilter",AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.defaultProps={label:"",type:config_enum.qi.MATERIAL,isSmall:!1,allowPositive:!1,isReverseSymb:!1,numberType:config_enum.Hv.LONG,decimalDigit:4,disabled:!1,prefix:"",bgColor:"white"};const AdvanceFilter_AdvanceNumberFilter_AdvanceNumberFilter=AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter;try{AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.displayName="AdvanceNumberFilter",AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.__docgenInfo={description:"",displayName:"AdvanceNumberFilter",props:{label:{defaultValue:{value:""},description:"Label for current field",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"BORDER_TYPE.MATERIAL"},description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},value:{defaultValue:null,description:"User-filled value",name:"value",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:""},description:"Prefix for filter value",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"Suffix for filter value",name:"suffix",required:!1,type:{name:"ReactNode"}},allowPositive:{defaultValue:{value:"false"},description:"Allow values to be negative not",name:"allowPositive",required:!1,type:{name:"boolean"}},numberType:{defaultValue:{value:"NUMBER_TYPE.LONG"},description:"Provide an option set decimal number type for value filter",name:"numberType",required:!1,type:{name:"enum",value:[{value:'"DECIMAL"'},{value:'"LONG"'}]}},isReverseSymb:{defaultValue:{value:"false"},description:"Reverse symbol “.” and “,”",name:"isReverseSymb",required:!1,type:{name:"boolean"}},decimalDigit:{defaultValue:{value:"4"},description:"Provide a length of number behind the point (character)",name:"decimalDigit",required:!1,type:{name:"number"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Not allow to handle change filter",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"Min of the value number",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Max of the value number",name:"max",required:!1,type:{name:"number"}},isSmall:{defaultValue:{value:"false"},description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle the change value filter of the component",name:"onChange",required:!1,type:{name:"(T: number) => void"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"(T: number) => void"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"(T: number) => void"}},bgColor:{defaultValue:{value:"white"},description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.tsx#AdvanceNumberFilter"]={docgenInfo:AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.__docgenInfo,name:"AdvanceNumberFilter",path:"src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.tsx#AdvanceNumberFilter"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const AdvanceNumberFilter_stories={title:"AdvanceFilter/AdvanceNumberFilter",component:AdvanceFilter_AdvanceNumberFilter_AdvanceNumberFilter,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.uY,{story:dist.h1}),(0,jsx_runtime.jsx)(dist.om,{})]})}},args:{label:"Cân nặng",placeHolder:"Search...",prefix:"Mr.",suffix:"Kg",numberType:config_enum.Hv.LONG,type:1},argTypes:{label:{control:"text"},numberType:{control:{type:"radio",options:[config_enum.Hv.LONG,config_enum.Hv.DECIMAL]}},type:{control:{type:"radio",options:[config_enum.qi.MATERIAL,config_enum.qi.BORDERED,config_enum.qi.FLOAT_LABEL]}}}},Template=args=>{const[value,setValue]=react.useState(),handleChangeValue=react.useCallback((value=>{setValue(value)}),[]);return(0,jsx_runtime.jsx)("div",{style:{width:"300px",margin:"10px"},children:(0,jsx_runtime.jsx)("div",{style:{margin:"15px 0"},children:(0,jsx_runtime.jsx)(AdvanceFilter_AdvanceNumberFilter_AdvanceNumberFilter,{...args,value,onChange:handleChangeValue})})})};Template.displayName="Template";const Default=Template.bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [value, setValue] = React.useState();\n  const handleChangeValue = React.useCallback(value => {\n    setValue(value);\n  }, []);\n  return /*#__PURE__*/_jsx("div", {\n    style: {\n      width: "300px",\n      margin: "10px"\n    },\n    children: /*#__PURE__*/_jsx("div", {\n      style: {\n        margin: "15px 0"\n      },\n      children: /*#__PURE__*/_jsx(AdvanceNumberFilter, {\n        ...args,\n        value: value,\n        onChange: handleChangeValue\n      })\n    })\n  });\n}',...Default.parameters?.docs?.source}}}}}]);