"use strict";(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[4275],{"./src/components/Input/InputTag/InputTag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_InputTag_InputTag});var react=__webpack_require__("./node_modules/react/index.js"),bucket_3=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-3.js"),bucket_2=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-2.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),config_enum=__webpack_require__("./src/config/enum.ts"),tooltip=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InputTag=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/InputTag/InputTag.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InputTag.A,options);InputTag.A&&InputTag.A.locals&&InputTag.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputTag_InputTag_InputTag(props){const{listValue,placeHolder,disabled,onSearch,isRequired,label=null,type=config_enum.qi.BORDERED,isSmall,onClear,isUsingSearch,onKeyDown,isFilter,onKeyEnter,isNotExpand,isShowTooltip=!1,render=defaultRenderObject,action,bgColor,clearSearchTerm,handlePressExpandedIcon}=props,internalListValue=react.useMemo((()=>listValue),[listValue]),[searchTerm,setSearchTerm]=react.useState(""),inputRef=react.useRef(),inputContainerRef=react.useRef(),handleChangeInput=react.useCallback((event=>{setSearchTerm(event.target.value),"function"==typeof onSearch&&onSearch(event.target.value)}),[onSearch]),handleClearItem=react.useCallback((item=>{disabled||"function"==typeof onClear&&onClear(item)}),[disabled,onClear]),handleClearInput=react.useCallback((event=>{setSearchTerm(""),inputRef.current.focus(),"function"!=typeof onSearch||onSearch(null)}),[onSearch]),handleKeyDown=react.useCallback((event=>{"function"==typeof onKeyDown&&onKeyDown(event)}),[onKeyDown]),handleEnter=react.useCallback((event=>{"function"==typeof onKeyEnter&&onKeyEnter(event)}),[onKeyEnter]),handleClickChevron=react.useCallback((event=>{event.stopPropagation(),handlePressExpandedIcon()}),[handlePressExpandedIcon]);return react.useEffect((()=>{clearSearchTerm||setSearchTerm("")}),[clearSearchTerm]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"input-tag__wrapper",children:[(label||action?.name)&&(0,jsx_runtime.jsxs)("div",{className:"input-tag__label m-b--3xs",onClick:event=>{event.stopPropagation()},children:[type!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:classnames_default()("component__title",{"component__title--disabled":disabled}),children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),action&&(0,jsx_runtime.jsx)("span",{className:"m-l--3xs body-text--md color-link",style:{cursor:"pointer"},onClick:action.action,children:action.name})]}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component__input input-tag__container",{"input-tag__container--sm":isSmall,"input-tag__container--white":"white"===bgColor,"p-y--2xs":isSmall,"p-x--xs":isSmall,"p--xs":!isSmall,"input-tag__container--material":type===config_enum.qi.MATERIAL,"input-tag__container--bordered":type===config_enum.qi.BORDERED,"input-tag--disabled":disabled,"input-tag__container--float":type===config_enum.qi.FLOAT_LABEL,"input-tag--filter-have-item":isFilter&&internalListValue&&internalListValue.length>0}),onClick:()=>isUsingSearch?inputRef.current.focus():inputContainerRef.current.focus(),ref:inputContainerRef,children:[isShowTooltip?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:internalListValue&&internalListValue.length>0&&(0,jsx_runtime.jsx)(tooltip.A,{placement:"topLeft",title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:internalListValue?.map(((itemValue,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:render(itemValue)}),(0,jsx_runtime.jsx)("br",{})]},itemValue?.id?itemValue?.id:index)))}),children:(0,jsx_runtime.jsx)("div",{className:classnames_default()("input-tag__container-inner",{"input-tag__container-inner-have_search":isUsingSearch}),children:(0,jsx_runtime.jsx)("div",{className:"input-tag__container-inner-group",children:internalListValue.map(((itemValue,index)=>(0,jsx_runtime.jsxs)("span",{className:classnames_default()("input-tag-item__label m-r--3xs m-b--3xs",{"input-tag-item__label--small":type===config_enum.qi.FLOAT_LABEL&&!0,"p-l--3xs":type===config_enum.qi.FLOAT_LABEL&&isSmall,"p-l--2xs":!(type===config_enum.qi.FLOAT_LABEL&&isSmall)}),children:[(0,jsx_runtime.jsx)("span",{className:"input-tag-item__text",children:render(itemValue)}),(0,jsx_runtime.jsx)(bucket_3.bm,{size:12,className:"input-tag-item__icon",onClick:e=>{e.stopPropagation(),handleClearItem(itemValue)}})]},itemValue?.id?itemValue?.id:index)))})})})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:internalListValue&&internalListValue.length>0&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("input-tag__container-inner",{"input-tag__container-inner-have_search":isUsingSearch}),children:(0,jsx_runtime.jsx)("div",{className:"input-tag__container-inner-group",children:internalListValue.map(((itemValue,index)=>(0,jsx_runtime.jsxs)("span",{className:classnames_default()("input-tag-item__label m-r--3xs m-b--3xs",{"input-tag-item__label--small":type===config_enum.qi.FLOAT_LABEL&&!0,"p-l--3xs":type===config_enum.qi.FLOAT_LABEL&&isSmall,"p-l--2xs":!(type===config_enum.qi.FLOAT_LABEL&&isSmall)}),children:[(0,jsx_runtime.jsx)("span",{className:"input-tag-item__text",children:render(itemValue)}),(0,jsx_runtime.jsx)(bucket_3.bm,{size:12,className:"input-tag-item__icon",onClick:e=>{e.stopPropagation(),handleClearItem(itemValue)}})]},itemValue?.id?itemValue?.id:index)))})})}),(0,jsx_runtime.jsxs)("div",{id:"group-input-icon",className:classnames_default()({"group-have_search":isUsingSearch}),children:[(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:isUsingSearch?(0,jsx_runtime.jsx)("input",{type:"text",value:searchTerm,placeholder:type===config_enum.qi.FLOAT_LABEL&&label?"":placeHolder,ref:inputRef,disabled,onChange:handleChangeInput,readOnly:!isUsingSearch,onKeyDown:isNotExpand?handleEnter:handleKeyDown}):(0,jsx_runtime.jsx)("input",{ref:inputRef,readOnly:!0,placeholder:internalListValue.length>0?"":placeHolder,disabled,onKeyDown:isNotExpand?handleEnter:handleKeyDown})}),type===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:classnames_default()("component__title component__title--normal",{"component__title--sm":isSmall,"component__title--top":listValue&&listValue.length>0}),children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),!disabled&&searchTerm&&(0,jsx_runtime.jsx)(bucket_3.R9,{size:16,className:"input-icon input-icon__clear m-x--2xs",onClick:handleClearInput}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(bucket_2.yQ,{size:16,className:classnames_default()("input-icon","input-tag__icon",{"input-tag__icon--disabled":disabled}),onClick:isNotExpand?void 0:handleClickChevron})})]})]})]})})}function defaultRenderObject(t){return t?.name}const Input_InputTag_InputTag=InputTag_InputTag_InputTag;try{InputTag_InputTag_InputTag.displayName="InputTag",InputTag_InputTag_InputTag.__docgenInfo={description:"",displayName:"InputTag",props:{listValue:{defaultValue:null,description:"List value users select",name:"listValue",required:!1,type:{name:"Model[]"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Not allow to handle change value",name:"disabled",required:!1,type:{name:"boolean"}},render:{defaultValue:null,description:"Provide a function to render a specific property as name",name:"render",required:!1,type:{name:"(t: Model) => string"}},onClear:{defaultValue:null,description:"Handle the action when click clear value",name:"onClear",required:!1,type:{name:"(T: Model) => void"}},onClearMulti:{defaultValue:null,description:"Handle the action when click clear mutiValue",name:"onClearMulti",required:!1,type:{name:"() => void"}},onSearch:{defaultValue:null,description:"Handle action on search",name:"onSearch",required:!1,type:{name:"(T: string) => void"}},isRequired:{defaultValue:null,description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for current field",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},isSelectOption:{defaultValue:null,description:"border by select case",name:"isSelectOption",required:!1,type:{name:"boolean"}},isSmall:{defaultValue:null,description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},isUsingSearch:{defaultValue:null,description:"Component enable to search data list",name:"isUsingSearch",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"(event: any) => void"}},onKeyEnter:{defaultValue:null,description:"Handle onEnter action",name:"onKeyEnter",required:!1,type:{name:"(event: any) => void"}},isFilter:{defaultValue:null,description:"Boolean true if used for filter",name:"isFilter",required:!1,type:{name:"boolean"}},isNotExpand:{defaultValue:null,description:"Not expand the title row to see more detail on each post (each row)",name:"isNotExpand",required:!1,type:{name:"boolean"}},isShowTooltip:{defaultValue:null,description:"Boolean to set show tooltip",name:"isShowTooltip",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"Provide a custom action (onClick) to the component",name:"action",required:!1,type:{name:"InputAction"}},bgColor:{defaultValue:null,description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},handlePressExpandedIcon:{defaultValue:null,description:"Set expand value",name:"handlePressExpandedIcon",required:!1,type:{name:"() => void"}},clearSearchTerm:{defaultValue:null,description:"Clear search value when open",name:"clearSearchTerm",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/InputTag/InputTag.tsx#InputTag"]={docgenInfo:InputTag_InputTag_InputTag.__docgenInfo,name:"InputTag",path:"src/components/Input/InputTag/InputTag.tsx#InputTag"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/InputTag/InputTag.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-tag__wrapper{display:flex;flex-direction:column;width:100%}.input-tag__wrapper .input-tag__label{width:100%;display:flex}.input-tag__wrapper .input-tag__label .component__title--disabled{color:var(--palette-gray-40)}.input-tag__wrapper .input-tag__label label{font-size:14px;font-weight:400;line-height:20px;color:var(--color-text-label);white-space:nowrap;padding-left:4px}.input-tag__wrapper .input-tag__container{position:relative;align-items:center;width:100%;border:1px solid var(--color-secondary);border-radius:2px;height:40px;background-color:var(--palette-white-1);display:flex}.input-tag__wrapper .input-tag__container .input-tag__container-inner{height:24px;max-width:calc(100% - 20px)}.input-tag__wrapper .input-tag__container .input-tag__container-inner.input-tag__container-inner-have_search{max-width:calc(100% - 90px)}.input-tag__wrapper .input-tag__container .input-tag__container-inner .input-tag__container-inner-group{padding-top:2.5px;display:flex;flex-wrap:nowrap;overflow:hidden;width:100%;height:100%;gap:5}.input-tag__wrapper .input-tag__container #group-input-icon{display:flex;width:100%;min-width:20px}.input-tag__wrapper .input-tag__container #group-input-icon.group-have_search{min-width:90px}.input-tag__wrapper .input-tag__container .input-tag__container-inner+#group-input-icon{display:flex}.input-tag__wrapper .input-tag__container.input-tag--filter-have-item{border:1px solid var(--palette-gray-40)}.input-tag__wrapper .input-tag__container .input-tag__icon{transition:all .3s ease;color:var(--palette-gray-60);justify-self:end}.input-tag__wrapper .input-tag__container.input-tag__container--sm{height:32px !important}.input-tag__wrapper .input-tag__container.input-tag__container--white{background-color:var(--color-white)}.input-tag__wrapper .input-tag__container:focus-within{border:1.5px solid var(--color-primary);box-shadow:0px 0px 0px 4px var(--color-primary-blur)}.input-tag__wrapper .input-tag__container:focus-within .input-tag__icon{transform:rotate(180deg);color:var(--palette-gray-60)}.input-tag__wrapper .input-tag__container.input-tag--disabled{border-color:var(--palette-gray-40);background-color:var(--palette-gray-20)}.input-tag__wrapper .input-tag__container.input-tag--disabled span{color:var(--palette-gray-40);background-color:var(--palette-coolGray-10)}.input-tag__wrapper .input-tag__container.input-tag--disabled input{color:var(--palette-gray-40) !important}.input-tag__wrapper .input-tag__container.input-tag--disabled .input-tag-item__text{color:var(--palette-black-100)}.input-tag__wrapper .input-tag__container.input-tag--disabled .input-tag-item__icon{display:none}.input-tag__wrapper .input-tag__container.input-tag--disabled:hover{border-color:var(--palette-coolGray-50);cursor:not-allowed}.input-tag__wrapper .input-tag__container.input-tag--disabled.input-tag--filter-have-item{border-color:var(--palette-coolGray-50)}.input-tag__wrapper .input-tag__container.input-tag__container--material{border:none;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:inset 0px -1px 0px var(--palette-gray-50);margin-bottom:-1px}.input-tag__wrapper .input-tag__container.input-tag__container--material.input-tag--filter-have-item{border:1px solid var(--color-primary);box-shadow:none}.input-tag__wrapper .input-tag__container.input-tag__container--material:hover{background-color:var(--palette-grayHover-10)}.input-tag__wrapper .input-tag__container.input-tag__container--material:hover .component__input{background-color:var(--palette-grayHover-10)}.input-tag__wrapper .input-tag__container.input-tag__container--material:hover .component__input.disabled-field{background-color:var(--palette-gray-10)}.input-tag__wrapper .input-tag__container.input-tag__container--material:hover .input-tag__icon{color:var(--palette-gray-60)}.input-tag__wrapper .input-tag__container.input-tag__container--material:focus-within{border:2px solid var(--color-primary);box-shadow:none}.input-tag__wrapper .input-tag__container.input-tag__container--material:focus-within .input-tag__icon{color:var(--palette-gray-60)}.input-tag__wrapper .input-tag__container.input-tag__container--material.input-tag--disabled{box-shadow:none;background-color:var(--palette-gray-10)}.input-tag__wrapper .input-tag__container.input-tag__container--material.input-tag--disabled.input-tag--filter-have-item{border:none}.input-tag__wrapper .input-tag__container.input-tag__container--material.input-tag--float:focus-within{box-shadow:none;border-width:2px}.input-tag__wrapper .input-tag__container.input-tag__container--float:hover:not(.input-tag--disabled):not(:focus-within){border-color:var(--palette-gray-100)}.input-tag__wrapper .input-tag__container.input-tag__container--float:hover:not(.input-tag--disabled):not(:focus-within) .input-tag__icon{color:var(--palette-gray-60)}.input-tag__wrapper .input-tag__container.input-tag__container--float:focus-within{box-shadow:none;border:2px solid var(--color-primary)}.input-tag__wrapper .input-tag__container.input-tag__container--float:focus-within .component__title{color:var(--color-primary)}.input-tag__wrapper .input-tag__container.input-tag__container--float:focus-within .input-icon{color:var(--color-primary)}.input-tag__wrapper .input-tag__container.input-tag__container--float .input-tag-item__label--small{height:16px;padding-top:0px;padding-bottom:0px;padding-right:4px;min-width:33px}.input-tag__wrapper .input-tag__container.input-tag__container--float .input-tag-item__label--small span{margin-right:5px}.input-tag__wrapper .input-tag__container.input-tag__container--float .input-tag-item__label--small .input-tag-item__icon{cursor:pointer;margin-right:-4px;width:16px;height:16px}.input-tag__wrapper .input-tag__container.input-tag__container--float .component__title.component__title--top{line-height:16px}.input-tag__wrapper .input-tag__container .component__title{position:absolute;color:var(--palette-gray-60);transition:all .1s ease-out;padding:0 4px;z-index:200;top:9px;font-size:14px}.input-tag__wrapper .input-tag__container .component__title.component__title--normal{left:8px}.input-tag__wrapper .input-tag__container .component__title.component__title--sm{top:5px}.input-tag__wrapper .input-tag__container .component__title.component__title--prefix{left:41px}.input-tag__wrapper .input-tag__container .component__title.component__title--top{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.input-tag__wrapper .input-tag__container .input-tag-item__label{display:flex;align-items:center;justify-content:space-between;height:22px;padding-top:2px;padding-bottom:2px;padding-right:6px;white-space:nowrap;background:var(--palette-brand-2);border-radius:12px;font-size:14px;color:var(--palette-black-100);margin-top:-2px;margin-bottom:-2px;cursor:pointer}.input-tag__wrapper .input-tag__container .input-tag-item__label span{margin-right:7px}.input-tag__wrapper .input-tag__container .input-tag-item__label .input-tag-item__icon{cursor:pointer;color:#7a869a;width:12px;height:12px}.input-tag__wrapper .input-tag__container .input-tag-item__label .input-tag-item__icon:hover{color:var(--palette-black-100)}.input-tag__wrapper .input-tag__container input{font-family:inherit;padding:0;outline:none;border:none;width:100%;font-size:14px;line-height:1rem;background-color:rgba(0,0,0,0);overflow:hidden;padding-left:5px}.input-tag__wrapper .input-tag__container input::placeholder{color:var(--palette-base-neutral-6)}.input-tag__wrapper .input-tag__container input:disabled:hover{cursor:not-allowed}.input-tag__wrapper .input-tag__container input:disabled::placeholder{color:var(--palette-base-neutral-6)}.input-tag__wrapper .input-tag__container input:not(:placeholder-shown)+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.input-tag__wrapper .input-tag__container input:focus+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.input-tag__wrapper .input-tag__container input:focus::placeholder{color:rgba(0,0,0,0)}.input-tag__wrapper .input-tag__container .input-tag__icon--disabled{color:var(--palette-gray-60)}.input-tag__wrapper .input-tag__container .input-icon__clear{color:var(--palette-coolGray-50);width:16px;height:16px}.input-tag__wrapper .input-tag__container .input-icon__clear:hover{cursor:pointer;color:var(--palette-coolGrayHover-50)}.form-item__container.form-item__container--error .form-item__content .component__input.input-tag__container--material{border:1px solid;box-shadow:none !important}.form-item__container.form-item__container--error .form-item__content .component__input.input-tag__container--material:focus-within{border-color:var(--color-primary) !important;border-width:2px}","",{version:3,sources:["webpack://./src/components/Input/InputTag/InputTag.scss"],names:[],mappings:"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",sourcesContent:["/* Style for InputTag.tsx */\n.input-tag__wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  .input-tag__label {\n    width: 100%;\n    display: flex;\n\n    .component__title--disabled {\n      color: var(--palette-gray-40);\n    }\n\n    label {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 20px;\n      color: var(--color-text-label);\n      white-space: nowrap;\n      padding-left: 4px;\n    }\n  }\n\n  .input-tag__container {\n    position: relative;\n    align-items: center;\n    width: 100%;\n    border: 1px solid var(--color-secondary);\n    border-radius: 2px;\n    height: 40px;\n    background-color: var(--palette-white-1);\n    // grid-template-columns: auto 1fr 5%;\n    display: flex;\n\n    .input-tag__container-inner {\n      height: 24px;\n      max-width: calc(100% - 20px);\n\n      &.input-tag__container-inner-have_search {\n        max-width: calc(100% - 90px);\n      }\n\n      .input-tag__container-inner-group {\n        padding-top: 2.5px;\n        display: flex;\n        flex-wrap: nowrap;\n        /*không ngắt dòng khi đến hạn của div*/\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        gap: 5;\n\n        // &:focus-within,\n        // &:hover {\n        //   max-width: 100%; /* Cho phép hiển thị toàn bộ tag */\n        //   position: relative;\n        //   overflow: visible;\n        // }\n      }\n    }\n\n    #group-input-icon {\n      display: flex;\n      width: 100%;\n      min-width: 20px;\n\n      &.group-have_search {\n        min-width: 90px;\n      }\n    }\n\n    .input-tag__container-inner+#group-input-icon {\n      display: flex;\n    }\n\n    &.input-tag--filter-have-item {\n      border: 1px solid var(--palette-gray-40);\n    }\n\n    .input-tag__icon {\n      transition: all 0.3s ease;\n      color: var(--palette-gray-60);\n      justify-self: end;\n    }\n\n    &.input-tag__container--sm {\n      height: 32px !important;\n    }\n\n    &.input-tag__container--white {\n      background-color: var(--color-white);\n    }\n\n    // &:hover {\n    //   border-color: var(--color-primary);\n\n    //   .input-tag__icon {\n    //     color: var(--color-primary);\n    //   }\n    //   .input-tag__icon--disabled {\n    //     color: var(--palette-gray-40);\n    //   }\n    // }\n\n    &:focus-within {\n      border: 1.5px solid var(--color-primary);\n      box-shadow: 0px 0px 0px 4px var(--color-primary-blur);\n\n      .input-tag__icon {\n        transform: rotate(180deg);\n        color: var(--palette-gray-60);\n      }\n    }\n\n    &.input-tag--disabled {\n      border-color: var(--palette-gray-40);\n      background-color: var(--palette-gray-20);\n\n      span {\n        color: var(--palette-gray-40);\n        background-color: var(--palette-coolGray-10);\n      }\n\n      input {\n        color: var(--palette-gray-40) !important;\n      }\n\n      .input-tag-item__text {\n        color: var(--palette-black-100);\n      }\n\n      .input-tag-item__icon {\n        display: none;\n      }\n\n      &:hover {\n        border-color: var(--palette-coolGray-50);\n        cursor: not-allowed;\n      }\n\n      &.input-tag--filter-have-item {\n        border-color: var(--palette-coolGray-50);\n      }\n    }\n\n    &.input-tag__container--material {\n      border: none;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      box-shadow: inset 0px -1px 0px var(--palette-gray-50);\n      margin-bottom: -1px;\n\n      &.input-tag--filter-have-item {\n        border: 1px solid var(--color-primary);\n        box-shadow: none;\n      }\n\n      &:hover {\n        background-color: var(--palette-grayHover-10);\n\n        .component__input {\n          background-color: var(--palette-grayHover-10);\n        }\n\n        .component__input.disabled-field {\n          background-color: var(--palette-gray-10);\n        }\n\n        .input-tag__icon {\n          color: var(--palette-gray-60);\n        }\n      }\n\n      &:focus-within {\n        border: 2px solid var(--color-primary);\n        box-shadow: none;\n\n        .input-tag__icon {\n          color: var(--palette-gray-60);\n        }\n      }\n\n      &.input-tag--disabled {\n        box-shadow: none;\n        background-color: var(--palette-gray-10);\n\n        &.input-tag--filter-have-item {\n          border: none;\n        }\n      }\n\n      &.input-tag--float:focus-within {\n        box-shadow: none;\n        border-width: 2px;\n      }\n    }\n\n    &.input-tag__container--float {\n      &:hover:not(.input-tag--disabled):not(:focus-within) {\n        border-color: var(--palette-gray-100);\n\n        .input-tag__icon {\n          color: var(--palette-gray-60);\n        }\n      }\n\n      &:focus-within {\n        box-shadow: none;\n        border: 2px solid var(--color-primary);\n\n        .component__title {\n          color: var(--color-primary);\n        }\n\n        .input-icon {\n          color: var(--color-primary);\n        }\n      }\n\n      .input-tag-item__label--small {\n        height: 16px;\n        padding-top: 0px;\n        padding-bottom: 0px;\n        padding-right: 4px;\n        min-width: 33px;\n\n        span {\n          margin-right: 5px;\n        }\n\n        .input-tag-item__icon {\n          cursor: pointer;\n          margin-right: -4px;\n          width: 16px;\n          height: 16px;\n        }\n      }\n\n      .component__title {\n        &.component__title--top {\n          line-height: 16px;\n        }\n      }\n    }\n\n    .component__title {\n      position: absolute;\n      color: var(--palette-gray-60);\n      transition: all 0.1s ease-out;\n      padding: 0 4px;\n      z-index: 200;\n      top: 9px;\n      font-size: 14px;\n\n      &.component__title--normal {\n        left: 8px;\n      }\n\n      &.component__title--sm {\n        top: 5px;\n      }\n\n      &.component__title--prefix {\n        left: 41px;\n      }\n\n      &.component__title--top {\n        top: 0;\n        left: 8px;\n        background-color: var(--color-white);\n        transform: translateY(-50%) scale(0.9);\n      }\n    }\n\n    .input-tag-item__label {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      height: 22px;\n      // width: 64px;\n      padding-top: 2px;\n      padding-bottom: 2px;\n      padding-right: 6px;\n      white-space: nowrap;\n      background: var(--palette-brand-2);\n      border-radius: 12px;\n      font-size: 14px;\n      color: var(--palette-black-100);\n      margin-top: -2px;\n      margin-bottom: -2px;\n      cursor: pointer;\n\n      span {\n        margin-right: 7px;\n      }\n\n      .input-tag-item__icon {\n        cursor: pointer;\n        color: #7a869a;\n        width: 12px;\n        height: 12px;\n\n        &:hover {\n          color: var(--palette-black-100);\n        }\n\n        // &:hover {\n        //   background-color: #353535;\n        // }\n      }\n    }\n\n    input {\n      // display: inline;\n      font-family: inherit;\n      padding: 0;\n      outline: none;\n      border: none;\n      width: 100%;\n      font-size: 14px;\n      line-height: 1rem;\n      background-color: transparent;\n      overflow: hidden;\n      padding-left: 5px;\n\n      &::placeholder {\n        color: var(--palette-base-neutral-6);\n      }\n\n      &:disabled {\n        &:hover {\n          cursor: not-allowed;\n        }\n\n        &::placeholder {\n          color: var(--palette-base-neutral-6);\n        }\n      }\n\n      &:not(:placeholder-shown)+.component__title {\n        top: 0;\n        left: 8px;\n        background-color: var(--color-white);\n        transform: translateY(-50%) scale(0.9);\n      }\n\n      &:focus+.component__title {\n        top: 0;\n        left: 8px;\n        background-color: var(--color-white);\n        transform: translateY(-50%) scale(0.9);\n      }\n\n      &:focus::placeholder {\n        color: transparent;\n      }\n    }\n\n    .input-tag__icon--disabled {\n      color: var(--palette-gray-60);\n    }\n\n    .input-icon__clear {\n      color: var(--palette-coolGray-50);\n      width: 16px;\n      height: 16px;\n\n      &:hover {\n        cursor: pointer;\n        color: var(--palette-coolGrayHover-50);\n      }\n    }\n  }\n}\n\n.form-item__container {\n  &.form-item__container--error {\n    .form-item__content {\n      .component__input {\n        &.input-tag__container--material {\n          border: 1px solid;\n          box-shadow: none !important;\n\n          &:focus-within {\n            border-color: var(--color-primary) !important;\n            border-width: 2px;\n          }\n        }\n      }\n    }\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);