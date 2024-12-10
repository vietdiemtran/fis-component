"use strict";(self.webpackChunkreact_cm_design_sys=self.webpackChunkreact_cm_design_sys||[]).push([[6872],{"./src/assets/icons/CircleExclamation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CircleExclamation(props){const{width=16,height=16,fillColor="#DA3E33",onClick}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width,height,onClick,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M8 14.5C5.84375 14.5 3.875 13.375 2.79688 11.5C1.71875 9.64844 1.71875 7.375 2.79688 5.5C3.875 3.64844 5.84375 2.5 8 2.5C10.1328 2.5 12.1016 3.64844 13.1797 5.5C14.2578 7.375 14.2578 9.64844 13.1797 11.5C12.1016 13.375 10.1328 14.5 8 14.5ZM8 5.5C7.67188 5.5 7.4375 5.75781 7.4375 6.0625V8.6875C7.4375 9.01562 7.67188 9.25 8 9.25C8.30469 9.25 8.5625 9.01562 8.5625 8.6875V6.0625C8.5625 5.75781 8.30469 5.5 8 5.5ZM7.25 10.75C7.25 11.1719 7.57812 11.5 8 11.5C8.39844 11.5 8.75 11.1719 8.75 10.75C8.75 10.3516 8.39844 10 8 10C7.57812 10 7.25 10.3516 7.25 10.75Z",fill:fillColor})})}CircleExclamation.displayName="CircleExclamation";const __WEBPACK_DEFAULT_EXPORT__=CircleExclamation;try{CircleExclamation.displayName="CircleExclamation",CircleExclamation.__docgenInfo={description:"",displayName:"CircleExclamation",props:{fillColor:{defaultValue:null,description:"",name:"fillColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/icons/CircleExclamation.tsx#CircleExclamation"]={docgenInfo:CircleExclamation.__docgenInfo,name:"CircleExclamation",path:"src/assets/icons/CircleExclamation.tsx#CircleExclamation"})}catch(__react_docgen_typescript_loader_error){}},"./src/config/enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hv:()=>NUMBER_TYPE,Rs:()=>ValidateStatus,Xx:()=>NUMBER_BUTTON,os:()=>TAG_STATUS,qi:()=>BORDER_TYPE,sE:()=>MODAL_SIZE,yV:()=>UPLOADTYPE_IMAGE});let BORDER_TYPE=function(BORDER_TYPE){return BORDER_TYPE[BORDER_TYPE.MATERIAL=0]="MATERIAL",BORDER_TYPE[BORDER_TYPE.BORDERED=1]="BORDERED",BORDER_TYPE[BORDER_TYPE.FLOAT_LABEL=2]="FLOAT_LABEL",BORDER_TYPE[BORDER_TYPE.NOT_BORDERED=3]="NOT_BORDERED",BORDER_TYPE}({}),ValidateStatus=function(ValidateStatus){return ValidateStatus.success="success",ValidateStatus.warning="warning",ValidateStatus.error="error",ValidateStatus.validating="validating",ValidateStatus}({}),NUMBER_BUTTON=function(NUMBER_BUTTON){return NUMBER_BUTTON.THREE="three",NUMBER_BUTTON.TWO="two",NUMBER_BUTTON}({}),UPLOADTYPE_IMAGE=function(UPLOADTYPE_IMAGE){return UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.IMAGE=0]="IMAGE",UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.AVATAR=1]="AVATAR",UPLOADTYPE_IMAGE}({}),MODAL_SIZE=function(MODAL_SIZE){return MODAL_SIZE[MODAL_SIZE.SIZE_400=400]="SIZE_400",MODAL_SIZE[MODAL_SIZE.SIZE_600=600]="SIZE_600",MODAL_SIZE[MODAL_SIZE.SIZE_800=800]="SIZE_800",MODAL_SIZE[MODAL_SIZE.SIZE_1000=1e3]="SIZE_1000",MODAL_SIZE}({}),NUMBER_TYPE=function(NUMBER_TYPE){return NUMBER_TYPE.DECIMAL="DECIMAL",NUMBER_TYPE.LONG="LONG",NUMBER_TYPE}({}),TAG_STATUS=function(TAG_STATUS){return TAG_STATUS.SUCCESS="SUCCESS",TAG_STATUS.ERROR="ERROR",TAG_STATUS.INFO="INFO",TAG_STATUS.IN_PROGRESS="IN_PROGRESS",TAG_STATUS.DEFAULT="DEFAULT",TAG_STATUS}({})},"./src/services/common-service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>CommonService});var react=__webpack_require__("./node_modules/react/index.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");class TreeNode{constructor(value){value?(this.key=value.id,this.item={...value},this.children=[],this.title=value.name,this.disabled=value.disabled):(this.title="",this.key=null,this.children=[],this.item={},this.disabled=!1)}}var dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min);const CommonService={useSubscription(){const subscription=react.useRef(new Subscription.yU).current;return react.useEffect((function(){return function cleanup(){subscription.unsubscribe()}}),[subscription]),[subscription]},useClickOutside(ref,callback){const handleClickOutside=react.useCallback((event=>{ref?.current&&!ref?.current?.contains(event.target)&&callback()}),[callback,ref]);react.useEffect((()=>(document.addEventListener("mousedown",handleClickOutside),function cleanup(){document.removeEventListener("mousedown",handleClickOutside)})),[callback,handleClickOutside,ref])},useClickOutsideMultiple(refFirst,ref,callback){const handleClickOutside=react.useCallback((event=>{refFirst?.current&&!refFirst?.current?.contains(event.target)&&(ref.current&&ref.current.contains(event.target)||callback())}),[callback,ref,refFirst]);react.useEffect((()=>(document.addEventListener("mousedown",handleClickOutside),function cleanup(){document.removeEventListener("mousedown",handleClickOutside)})),[callback,handleClickOutside,ref])},toDayjsDate:date=>dayjs_min_default()(date),isEmpty(obj){for(var key in obj)if(obj.hasOwnProperty(key))return!1;return!0},limitWord(input,max){if(input?.length>max){return(input=input.slice(0,max))+"..."}return input},useStateCallback(initialState){const[state,setState]=react.useState(initialState),cbRef=react.useRef(null),setStateCallback=react.useCallback(((state,cb)=>{cbRef.current=cb,setState(state)}),[]);return react.useEffect((()=>{cbRef.current&&(cbRef.current(state),cbRef.current=null)}),[state]),[state,setStateCallback]},uniqueArray:array=>array.reduce(((acc,current)=>acc.find((item=>item.id===current.id))?acc:acc.concat([current])),[]),arrayMove(arr,fromIndex,toIndex){var element=arr[fromIndex];arr.splice(fromIndex,1),arr.splice(toIndex,0,element)},buildTree(listItem,parent,keyNodes,tree){tree=void 0!==tree?tree:[],parent=void 0!==parent?parent:new TreeNode,keyNodes=void 0!==keyNodes?keyNodes:[];var children=listItem.filter((child=>child.parentId===parent.key)).map((currentItem=>new TreeNode(currentItem)));return children&&children.length&&(null===parent.key?tree=children:(parent.children=children,keyNodes.push(parent.key)),children.forEach((child=>{this.buildTree(listItem,child,keyNodes)}))),[tree,keyNodes]},listToTree(list){var node,i,map={},roots=[];for(i=0;i<list.length;i+=1)map[list[i].id]=i,list[i].children=[];for(i=0;i<list.length;i+=1)null!==(node=list[i]).parentId?list[map[node.parentId]].children.push(node):roots.push(node);return roots},setDisabledNode(nodeId,tree){var filteredNode=tree.filter((currentNode=>currentNode.key===nodeId))[0];if(filteredNode){let index=tree.indexOf(filteredNode);tree[index].disabled=!0,filteredNode.children&&filteredNode.children.length>0&&filteredNode.children.forEach((currentChildren=>{this.setDisabledNode(currentChildren.key,filteredNode.children)}))}else tree.forEach((currentTree=>{currentTree.children&&currentTree.children.length>0&&this.setDisabledNode(nodeId,currentTree.children)}))},setOnlySelectLeaf(tree){tree&&tree.length&&tree.forEach((currentNode=>{currentNode.item.hasChildren?(currentNode.disabled=!0,this.setOnlySelectLeaf(currentNode.children)):currentNode.disabled=!1}))}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Select/EnumSelect/EnumSelect.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".text-ellipsis{width:100%;overflow:hidden;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/Select/EnumSelect/EnumSelect.scss"],names:[],mappings:"AAAA,eACI,UAAA,CACA,eAAA,CACA,sBAAA",sourcesContent:[".text-ellipsis{\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Select/EnumSelect/EnumSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EnumSelect_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),FormItem=__webpack_require__("./src/components/FormItem/FormItem.tsx"),config_enum=__webpack_require__("./src/config/enum.ts"),es_checkbox=__webpack_require__("./node_modules/antd/es/checkbox/index.js"),tooltip=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),empty=__webpack_require__("./node_modules/antd/es/empty/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),common_service=__webpack_require__("./src/services/common-service.ts"),InputSelect=__webpack_require__("./src/components/Input/InputSelect/InputSelect.tsx"),InputTag=__webpack_require__("./src/components/Input/InputTag/InputTag.tsx"),bucket_0=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-0.js"),bucket_2=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-2.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),EnumSelect=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Select/EnumSelect/EnumSelect.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EnumSelect.A,options);EnumSelect.A&&EnumSelect.A.locals&&EnumSelect.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function defaultRenderObject(t){return t?.name}function multipleSelectReducer(currentState,action){switch(action.type){case"UPDATE":return[...currentState,action.data];case"REMOVE":return[...currentState.filter((item=>item.id!==action.data.id))];case"REMOVE_ALL":return[]}}function EnumSelect_EnumSelect_EnumSelect(props){const{appendToBody=!1,render=defaultRenderObject,disabled=!1,value,placeHolder,isRequired,onChange,type,label,selectWithAdd,isSmall,isMultiple,listValue,onChangeMultiple,getList,height,action,bgColor,className,isLoadMultipleTimes}=props,internalValue=react.useMemo((()=>value||null),[value]),[list,setList]=react.useState([]),[isExpand,setExpand]=react.useState(!1),[firstLoad,setFirstLoad]=react.useState(!0),wrapperRef=react.useRef(null),selectListRef=react.useRef(null),[selectedList,dispatch]=react.useReducer(multipleSelectReducer,[]),[appendToBodyStyle,setAppendToBodyStyle]=react.useState({});react.useEffect((()=>{const subscription=new Subscription.yU;return(isLoadMultipleTimes||firstLoad)&&(subscription.add(getList),getList().subscribe({next:res=>{setList(res)},error:err=>{setList([])}})),function cleanup(){subscription.unsubscribe()}}),[firstLoad,getList,isLoadMultipleTimes]);const internalList=react.useMemo((()=>list&&list.length>0?(list.forEach((current=>{const filteredItem=listValue&&listValue.length>0&&listValue?.filter((item=>item.id===current.id))[0];current.isSelected=!!filteredItem})),[...list]):[]),[list,listValue]);react.useEffect((()=>{if(firstLoad&&internalList&&internalList?.length>0){const tempList=[...internalList];tempList&&tempList?.length>0&&(tempList.forEach((item=>{!0===item?.isSelected&&dispatch({type:"UPDATE",data:item})})),setFirstLoad(!1))}}),[firstLoad,internalList]);const handleToggle=react.useCallback((async event=>{disabled||setExpand(!0)}),[disabled]),handleCloseSelect=react.useCallback((()=>{setExpand(!1)}),[]),handleClickItem=react.useCallback((item=>event=>{const currentIndex=list.findIndex((current=>current.id===item.id));list.splice(currentIndex,1),list.unshift(item),setList(list),onChange(item.id,item),handleCloseSelect()}),[handleCloseSelect,list,onChange]),handleClickMultiItem=react.useCallback((item=>event=>{const filteredItem=listValue?.filter((current=>current.id===item.id))[0];if(filteredItem){const tmp=[...selectedList],ids=selectedList?.map((item=>item?.id)),index=tmp.indexOf(filteredItem),indexIds=tmp.indexOf(filteredItem?.id);tmp.splice(index,1),ids.splice(indexIds,1),dispatch({type:"REMOVE",data:item}),onChangeMultiple([...tmp],ids)}else{const currentIndex=list.findIndex((current=>current.id===item.id));list.splice(currentIndex,1),list.unshift(item),setList(list);const ids=selectedList?.map((item=>item?.id));onChangeMultiple([...selectedList,item],[...ids,item?.id]),dispatch({type:"UPDATE",data:item})}}),[list,listValue,onChangeMultiple,selectedList]),handleClickMultiParentItem=react.useCallback((event=>{if(event&&event.target===event.currentTarget){event.target.firstElementChild.firstElementChild.querySelector("span").click()}}),[]),handleClearItem=react.useCallback((()=>{onChange(void 0)}),[onChange]),handleClearAll=react.useCallback((()=>{onChangeMultiple([],[]),dispatch({type:"REMOVE_ALL",data:[]})}),[onChangeMultiple]),handleKeyPress=react.useCallback((event=>{switch(event.keyCode){case 40:selectListRef.current.firstElementChild.focus();break;case 9:handleCloseSelect();break;default:return}}),[handleCloseSelect]),handleMove=react.useCallback((item=>event=>{switch(event.keyCode){case 13:isMultiple?handleClickMultiItem(item)(null):handleClickItem(item)(null);break;case 40:null!==event.target.nextElementSibling&&event.target.nextElementSibling.focus(),event.preventDefault();break;case 38:null!==event.target.previousElementSibling&&event.target.previousElementSibling.focus(),event.preventDefault()}}),[handleClickItem,handleClickMultiItem,isMultiple]),handleKeyEnter=react.useCallback((event=>{"Enter"===event.key&&handleToggle(null)}),[handleToggle]);return common_service.h.useClickOutside(wrapperRef,handleCloseSelect),react.useEffect((()=>{if(isExpand&&appendToBody){const currentPosition=wrapperRef.current.getBoundingClientRect(),spaceBelow=window.innerHeight-currentPosition.bottom;spaceBelow<=200?setTimeout((()=>{setAppendToBodyStyle({position:"fixed",bottom:spaceBelow+wrapperRef.current.clientHeight,left:currentPosition.left,maxWidth:wrapperRef.current.clientWidth})}),100):setAppendToBodyStyle({position:"fixed",top:currentPosition.top+wrapperRef.current.clientHeight,left:currentPosition.left,maxWidth:wrapperRef.current.clientWidth})}}),[appendToBody,isExpand]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("select__container",className,{"multiple-select__container":isMultiple}),ref:wrapperRef,children:[(0,jsx_runtime.jsx)("div",{className:"select__input",onClick:handleToggle,children:isMultiple?(0,jsx_runtime.jsx)(InputTag.A,{listValue,render,placeHolder,disabled,onClear:handleClearItem,onKeyDown:handleKeyPress,onKeyEnter:handleKeyEnter,type,label,isSmall,isUsingSearch:!1,onClearMulti:handleClearAll,isNotExpand:!isExpand,isRequired,isShowTooltip:!0,bgColor,handlePressExpandedIcon:handleCloseSelect}):(0,jsx_runtime.jsx)(InputSelect.A,{value:internalValue,render,placeHolder,expanded:isExpand,disabled,onClear:handleClearItem,onKeyDown:handleKeyPress,onKeyEnter:handleKeyEnter,type,label,isSmall,isEnumerable:!0,isRequired,action,bgColor,handlePressExpandedIcon:handleCloseSelect})}),isMultiple?isExpand&&(0,jsx_runtime.jsxs)("div",{className:"select__list-container",children:[(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"select__list multiple-select__list",ref:selectListRef,style:{maxHeight:`${height}px`},children:internalList.length>0?internalList.map(((item,index)=>(0,jsx_runtime.jsx)("div",{className:classnames_default()("select__item p-l--xs p-y--xs p-r--2xs",{"select__item--selected":item.isSelected}),onKeyDown:handleMove(item),tabIndex:-1,onClick:handleClickMultiParentItem,children:(0,jsx_runtime.jsx)(es_checkbox.A,{checked:item.isSelected,onChange:handleClickMultiItem(item),children:(0,jsx_runtime.jsx)("span",{className:"select__text",children:(0,jsx_runtime.jsx)(tooltip.A,{title:render(item),placement:"topLeft",children:(0,jsx_runtime.jsx)("div",{className:"text-ellipsis",children:render(item)})})})})},index))):(0,jsx_runtime.jsx)(empty.A,{})})}),void 0!==selectWithAdd&&(0,jsx_runtime.jsxs)("div",{className:classnames_default()("select__bottom-button select__add-button p-y--xs"),onClick:selectWithAdd,children:[(0,jsx_runtime.jsx)(bucket_0.OM,{size:16,className:"m-l--xs"}),(0,jsx_runtime.jsx)("span",{className:"m-l--xs",children:"Add new"})]})]}):isExpand&&(0,jsx_runtime.jsxs)("div",{className:"select__list-container",style:appendToBodyStyle,children:[(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"select__list",ref:selectListRef,style:{maxHeight:`${height}px`},children:list.length>0?list.map(((item,index)=>(0,jsx_runtime.jsxs)("div",{className:classnames_default()("select__item p-l--xs p-y--xs",{"select__item--selected":item.id===internalValue?.id}),tabIndex:-1,onKeyDown:handleMove(item),onClick:handleClickItem(item),children:[(0,jsx_runtime.jsx)("span",{className:"select__text",children:(0,jsx_runtime.jsx)(tooltip.A,{title:render(item),placement:"topLeft",children:(0,jsx_runtime.jsx)("div",{className:"text-ellipsis",children:render(item)})})}),item.id===internalValue?.id&&(0,jsx_runtime.jsx)(bucket_2.MG,{size:16})]},index))):(0,jsx_runtime.jsx)(empty.A,{})})}),void 0!==selectWithAdd&&(0,jsx_runtime.jsxs)("div",{className:classnames_default()("select__bottom-button select__add-button p-y--xs"),onClick:selectWithAdd,children:[(0,jsx_runtime.jsx)(bucket_0.OM,{size:16,className:"m-l--2xs"}),(0,jsx_runtime.jsx)("span",{children:"Add new"})]})]})]})})}const Select_EnumSelect_EnumSelect=EnumSelect_EnumSelect_EnumSelect;try{EnumSelect_EnumSelect_EnumSelect.displayName="EnumSelect",EnumSelect_EnumSelect_EnumSelect.__docgenInfo={description:"",displayName:"EnumSelect",props:{value:{defaultValue:null,description:"Value users select",name:"value",required:!1,type:{name:"Model"}},listValue:{defaultValue:null,description:"List value users select",name:"listValue",required:!1,type:{name:"Model[]"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Not allow to handle change value",name:"disabled",required:!1,type:{name:"boolean"}},appendToBody:{defaultValue:null,description:"Append this component to body",name:"appendToBody",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle the change value of the field",name:"onChange",required:!1,type:{name:"(id: number, T?: Model) => void"}},onChangeMultiple:{defaultValue:null,description:"Handle the change list value of the component",name:"onChangeMultiple",required:!1,type:{name:"(selectedList?: Model[], ids?: []) => void"}},render:{defaultValue:null,description:"Provide a function to render a specific property as name",name:"render",required:!1,type:{name:"(t: Model) => string"}},type:{defaultValue:null,description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"Label for current field",name:"label",required:!1,type:{name:"string"}},selectWithAdd:{defaultValue:null,description:"Option show button add new",name:"selectWithAdd",required:!1,type:{name:"() => void"}},isSmall:{defaultValue:null,description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},preferOptions:{defaultValue:null,description:"Prefer option to select",name:"preferOptions",required:!1,type:{name:"Model[]"}},isMultiple:{defaultValue:null,description:"Option to select multiple",name:"isMultiple",required:!1,type:{name:"boolean"}},getList:{defaultValue:null,description:"Api to get list data",name:"getList",required:!1,type:{name:"() => Observable<Model[]>"}},height:{defaultValue:null,description:"Custom height of dropdown data list",name:"height",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"Provide a custom action (onClick) to the component",name:"action",required:!1,type:{name:"InputAction"}},bgColor:{defaultValue:null,description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},className:{defaultValue:null,description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},isLoadMultipleTimes:{defaultValue:null,description:"Use to set time get list to call",name:"isLoadMultipleTimes",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/EnumSelect/EnumSelect.tsx#EnumSelect"]={docgenInfo:EnumSelect_EnumSelect_EnumSelect.__docgenInfo,name:"EnumSelect",path:"src/components/Select/EnumSelect/EnumSelect.tsx#EnumSelect"})}catch(__react_docgen_typescript_loader_error){}const demoListEnum=new Observable.c((observer=>{setTimeout((()=>{observer.next([{id:1,name:"Option 2 very long one very long one one one one long one one one one ",code:"E1"},{id:2,name:"Enum 2",code:"E2"},{id:3,name:"Enum 3",code:"E3"},{id:4,name:"Enum 4",code:"E4"},{id:5,name:"Enum 5",code:"E5"}])}),300)})),demoSearchFunc=()=>demoListEnum,EnumSelect_stories={title:"Select/EnumSelect",component:Select_EnumSelect_EnumSelect,tags:["autodocs"],subcomponents:{FormItem:FormItem.A},parameters:{controls:{expanded:!0},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.uY,{story:dist.h1}),(0,jsx_runtime.jsx)(dist.om,{})]})}},args:{label:"Đơn vị tổ chức",placeHolder:"Chọn đơn vị",type:1},argTypes:{label:{control:"text"},type:{control:{type:"radio",options:[config_enum.qi.MATERIAL,config_enum.qi.BORDERED,config_enum.qi.FLOAT_LABEL]}}}},Template=args=>{const[selectModel,setSelectModel]=react.useState({id:0,name:"Option 2",code:"FAD"}),[models,setModels]=react.useState([]),handleSetModel=react.useCallback(((...[,item])=>{setSelectModel(item)}),[]),handleRenderModel=react.useCallback((item=>item?item.name:""),[]),handleChangeModels=react.useCallback(((listItem,ids)=>{setModels(listItem)}),[]);return(0,jsx_runtime.jsx)("div",{style:{margin:"10px",width:"400px"},children:(0,jsx_runtime.jsx)(FormItem.A,{children:(0,jsx_runtime.jsx)(Select_EnumSelect_EnumSelect,{...args,value:selectModel,render:handleRenderModel,onChange:handleSetModel,getList:demoSearchFunc,onChangeMultiple:handleChangeModels,listValue:models})})})};Template.displayName="Template";const Default=Template.bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [selectModel, setSelectModel] = React.useState({\n    id: 0,\n    name: "Option 2",\n    code: "FAD"\n  });\n  const [models, setModels] = React.useState([]);\n  const handleSetModel = React.useCallback((...[, item]) => {\n    setSelectModel(item);\n  }, []);\n  const handleRenderModel = React.useCallback(item => {\n    if (item) {\n      return item.name;\n    } else {\n      return "";\n    }\n  }, []);\n  const handleChangeModels = React.useCallback((listItem, ids) => {\n    setModels(listItem);\n  }, []);\n  return /*#__PURE__*/_jsx("div", {\n    style: {\n      margin: "10px",\n      width: "400px"\n    },\n    children: /*#__PURE__*/_jsx(FormItem, {\n      children: /*#__PURE__*/_jsx(EnumSelect, {\n        ...args,\n        value: selectModel,\n        render: handleRenderModel,\n        onChange: handleSetModel,\n        getList: demoSearchFunc,\n        onChangeMultiple: handleChangeModels // if type is multiple pass this props\n        ,\n\n        listValue: models // if type is multiple pass this prop\n      })\n    })\n  });\n}',...Default.parameters?.docs?.source}}}}}]);