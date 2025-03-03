"use strict";(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[5312],{"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.DZ,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VY,h1:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h1,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.hE,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,om:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/FormItem/FormItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_FormItem_FormItem});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FormItem=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FormItem/FormItem.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FormItem.A,options);FormItem.A&&FormItem.A.locals&&FormItem.A.locals;var CircleExclamation=__webpack_require__("./src/assets/icons/CircleExclamation.tsx"),tooltip=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormItem_FormItem_FormItem(props){const{validateStatus,message,validateObject,children,placeRight=!1,isTableCell=!1}=props,{validateStatusValue,messageValue}=react.useMemo((()=>validateObject?{validateStatusValue:validateObject.validateStatus,messageValue:validateObject.message}:{validateStatusValue:validateStatus,messageValue:message}),[message,validateObject,validateStatus]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("form-item__container",{[`form-item__container--${validateStatusValue}`]:validateStatusValue}),children:[isTableCell?(0,jsx_runtime.jsx)(tooltip.A,{color:"red",title:messageValue,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()("form-item__content",{"justify-content-end":placeRight,"form-item__content-error":messageValue}),children})}):(0,jsx_runtime.jsx)("div",{className:classnames_default()("form-item__content",{"justify-content-end":placeRight}),children}),messageValue?(0,jsx_runtime.jsxs)("div",{className:classnames_default()("form-item__message m-t--3xs",{"is-table-cell":isTableCell}),children:[(0,jsx_runtime.jsx)("div",{className:"icon_error",children:(0,jsx_runtime.jsx)(CircleExclamation.A,{})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("span",{children:messageValue})})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})]})})}const components_FormItem_FormItem=FormItem_FormItem_FormItem;try{FormItem_FormItem_FormItem.displayName="FormItem",FormItem_FormItem_FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{validateStatus:{defaultValue:null,description:"Show the status validation",name:"validateStatus",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"validating"'}]}},message:{defaultValue:null,description:"The validated message",name:"message",required:!1,type:{name:"string"}},placeRight:{defaultValue:null,description:"Place content to the right",name:"placeRight",required:!1,type:{name:"boolean"}},validateObject:{defaultValue:null,description:"Pass object validated to display state of  children field",name:"validateObject",required:!1,type:{name:"ValidateObject"}},isTableCell:{defaultValue:null,description:"Pass true to only show error in tooltip",name:"isTableCell",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormItem/FormItem.tsx#FormItem"]={docgenInfo:FormItem_FormItem_FormItem.__docgenInfo,name:"FormItem",path:"src/components/FormItem/FormItem.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FormItem/FormItem.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".form-item__container{position:relative;width:100%}.form-item__container .form-item__content{display:flex;flex-direction:row;width:100%}.form-item__container .form-item__content .form-item__item{width:100%}.form-item__container .form-item__message{line-height:16px;font-size:12px;color:#8c9093;display:flex;align-items:center;gap:4px}.form-item__container .form-item__message .icon_error{display:flex;align-items:center}.form-item__container .form-item__message.is-table-cell{display:none}.form-item__container .form-item__icon{height:auto;width:1.5rem;font-size:1.2rem;color:var(--color-white);display:flex;align-items:center;align-content:center;justify-content:center;margin-left:2px}.form-item__container.form-item__container--error .component__title{color:var(--palette-gray-70) !important}.form-item__container.form-item__container--error .form-item__content .form-item__icon,.form-item__container.form-item__container--error .form-item__content i.input-icon{color:#8c9093}.form-item__container.form-item__container--error .form-item__content .component__input,.form-item__container.form-item__container--error .form-item__content textarea,.form-item__container.form-item__container--error .form-item__content .input-tag__container,.form-item__container.form-item__container--error .form-item__content .ant-picker{outline-color:var(--color-critical) !important;border-color:var(--color-critical) !important}.form-item__container.form-item__container--error .form-item__message{color:var(--color-critical) !important}.form-item__container.form-item__container--warning .component__title{color:var(--palette-gray-70) !important}.form-item__container.form-item__container--warning .form-item__content .form-item__icon,.form-item__container.form-item__container--warning .form-item__content i.input-icon{color:#8c9093}.form-item__container.form-item__container--warning .form-item__message{color:var(--palette-base-orange-6) !important}.form-item__container.form-item__container--warning .form-item__message svg path{fill:var(--palette-base-orange-6) !important}.form-item__container.form-item__container--success .component__title{color:var(--color-success-high) !important}.form-item__container.form-item__container--success .form-item__content .form-item__icon,.form-item__container.form-item__container--success .form-item__content i.input-icon{color:var(--color-success-high) !important}.form-item__container.form-item__container--success .form-item__content .component__input,.form-item__container.form-item__container--success .form-item__content textarea,.form-item__container.form-item__container--success .form-item__content .input-tag__container,.form-item__container.form-item__container--success .form-item__content .ant-picker{outline-color:var(--color-success-high) !important;border-color:var(--color-success-high) !important}.form-item__container.form-item__container--success .form-item__message{color:var(--color-success-high) !important}.form-item__container:has(.form-item__message) .message-validation{display:none}body:has(.form-item__content-error:hover) .input-error__tooltip{display:none !important}","",{version:3,sources:["webpack://./src/components/FormItem/FormItem.scss"],names:[],mappings:"AACA,sBACE,iBAAA,CACA,UAAA,CAEA,0CACE,YAAA,CACA,kBAAA,CACA,UAAA,CAEA,2DACE,UAAA,CAIJ,0CACE,gBAAA,CACA,cAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,sDACE,YAAA,CACA,kBAAA,CAGF,wDACE,YAAA,CAIJ,uCACE,WAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,sBAAA,CACA,eAAA,CAIA,oEACE,uCAAA,CAKA,0KAEE,aAAA,CAGF,qVAKE,8CAAA,CACA,6CAAA,CAIJ,sEACE,sCAAA,CAKF,sEACE,uCAAA,CAKA,8KAEE,aAAA,CAYJ,wEACE,6CAAA,CAGE,iFACE,4CAAA,CAON,sEACE,0CAAA,CAKA,8KAEE,0CAAA,CAGF,6VAIE,kDAAA,CACA,iDAAA,CAIJ,wEACE,0CAAA,CAKF,mEACE,YAAA,CAMJ,gEACE,uBAAA",sourcesContent:["/* Style for FormValidation.tsx */\n.form-item__container {\n  position: relative;\n  width: 100%;\n\n  .form-item__content {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n\n    .form-item__item {\n      width: 100%;\n    }\n  }\n\n  .form-item__message {\n    line-height: 16px;\n    font-size: 12px;\n    color: #8c9093;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n\n    .icon_error {\n      display: flex;\n      align-items: center;\n    }\n\n    &.is-table-cell {\n      display: none;\n    }\n  }\n\n  .form-item__icon {\n    height: auto;\n    width: 1.5rem;\n    font-size: 1.2rem;\n    color: var(--color-white);\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    margin-left: 2px;\n  }\n\n  &.form-item__container--error {\n    .component__title {\n      color: var(--palette-gray-70) !important;\n    }\n\n    .form-item__content {\n\n      .form-item__icon,\n      i.input-icon {\n        color: #8c9093;\n      }\n\n      .component__input,\n      textarea,\n      .input-tag__container,\n      .ant-picker {\n        // background-color: var(--color-critical-blur);\n        outline-color: var(--color-critical) !important;\n        border-color: var(--color-critical) !important;\n      }\n    }\n\n    .form-item__message {\n      color: var(--color-critical) !important;\n    }\n  }\n\n  &.form-item__container--warning {\n    .component__title {\n      color: var(--palette-gray-70) !important;\n    }\n\n    .form-item__content {\n\n      .form-item__icon,\n      i.input-icon {\n        color: #8c9093;\n      }\n\n      // .component__input,\n      // textarea,\n      // .input-tag__container,\n      // .ant-picker {\n      //   outline-color: var(--color-warning-high) !important;\n      //   border-color: var(--color-warning-high) !important;\n      // }\n    }\n\n    .form-item__message {\n      color: var(--palette-base-orange-6) !important;\n\n      svg {\n        path {\n          fill: var(--palette-base-orange-6) !important;\n        }\n      }\n    }\n  }\n\n  &.form-item__container--success {\n    .component__title {\n      color: var(--color-success-high) !important;\n    }\n\n    .form-item__content {\n\n      .form-item__icon,\n      i.input-icon {\n        color: var(--color-success-high) !important;\n      }\n\n      .component__input,\n      textarea,\n      .input-tag__container,\n      .ant-picker {\n        outline-color: var(--color-success-high) !important;\n        border-color: var(--color-success-high) !important;\n      }\n    }\n\n    .form-item__message {\n      color: var(--color-success-high) !important;\n    }\n  }\n\n  &:has(.form-item__message) {\n    .message-validation {\n      display: none;\n    }\n  }\n}\n\nbody:has(.form-item__content-error:hover) {\n  .input-error__tooltip {\n    display: none !important;\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Input/InputNumber/InputNumber.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_FormItem_FormItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormItem/FormItem.tsx"),_config_enum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/config/enum.ts"),_InputNumber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Input/InputNumber/InputNumber.tsx"),react_i18next__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputNumber",component:_InputNumber__WEBPACK_IMPORTED_MODULE_4__.A,tags:["autodocs"],subcomponents:{FormItem:_FormItem_FormItem__WEBPACK_IMPORTED_MODULE_2__.A},parameters:{controls:{expanded:!0},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.uY,{story:_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.h1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.om,{})]})}},args:{label:"ID Number",placeHolder:"Enter number",type:1,prefix:"Mr.",suffix:"Kg"},argTypes:{label:{control:"text"},placeHolder:{control:"text"},numberType:{control:{type:"radio",options:[_config_enum__WEBPACK_IMPORTED_MODULE_3__.Hv.LONG,_config_enum__WEBPACK_IMPORTED_MODULE_3__.Hv.DECIMAL]},defaultValue:_config_enum__WEBPACK_IMPORTED_MODULE_3__.Hv.LONG},isRequired:{control:{type:"radio"},options:[!0,!1]},value:{},prefix:{control:"text"},suffix:{control:"text"},allowPositive:{},isReverseSymb:{},decimalDigit:{},disabled:{},min:{},max:{},action:{},isSmall:{control:{type:"radio"},options:[!0,!1]},onChange:{},onBlur:{},onEnter:{},className:{}}},Template=args=>{const[iconName]=react__WEBPACK_IMPORTED_MODULE_1__.useState(""),[translate]=(0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.Bd)(),[value,setValue]=react__WEBPACK_IMPORTED_MODULE_1__.useState(),handleChangeValue=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((value=>{setValue(value)}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{width:"300px",margin:"10px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{margin:"15px 0"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FormItem_FormItem__WEBPACK_IMPORTED_MODULE_2__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_InputNumber__WEBPACK_IMPORTED_MODULE_4__.A,{...args,className:iconName,value,isReverseSymb:!0,isRequired:!0,translate,decimalDigit:4,numberType:_config_enum__WEBPACK_IMPORTED_MODULE_3__.Hv.DECIMAL,onChange:handleChangeValue})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{margin:"15px 0"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FormItem_FormItem__WEBPACK_IMPORTED_MODULE_2__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_InputNumber__WEBPACK_IMPORTED_MODULE_4__.A,{...args,className:iconName,numberType:_config_enum__WEBPACK_IMPORTED_MODULE_3__.Hv.DECIMAL,decimalDigit:4,onChange:handleChangeValue})})})]})};Template.displayName="Template";const Default=Template.bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [iconName] = React.useState("");\n  const [translate] = useTranslation();\n  const [value, setValue] = React.useState();\n  const handleChangeValue = React.useCallback(value => {\n    setValue(value);\n  }, []);\n  return /*#__PURE__*/_jsxs("div", {\n    style: {\n      width: "300px",\n      margin: "10px"\n    },\n    children: [/*#__PURE__*/_jsx("div", {\n      style: {\n        margin: "15px 0"\n      },\n      children: /*#__PURE__*/_jsx(FormItem, {\n        children: /*#__PURE__*/_jsx(InputNumber, {\n          ...args,\n          className: iconName,\n          value: value,\n          isReverseSymb: true,\n          isRequired: true,\n          translate: translate,\n          decimalDigit: 4,\n          numberType: NUMBER_TYPE.DECIMAL,\n          onChange: handleChangeValue\n        })\n      })\n    }), /*#__PURE__*/_jsx("div", {\n      style: {\n        margin: "15px 0"\n      },\n      children: /*#__PURE__*/_jsx(FormItem, {\n        children: /*#__PURE__*/_jsx(InputNumber, {\n          ...args,\n          className: iconName,\n          numberType: NUMBER_TYPE.DECIMAL,\n          decimalDigit: 4,\n          onChange: handleChangeValue\n        })\n      })\n    })]\n  });\n}',...Default.parameters?.docs?.source}}}}}]);