try{
var n="storybook/outline",u="outline";var r=__REACT__,{Children:L,Component:x,Fragment:M,Profiler:v,PureComponent:D,StrictMode:N,Suspense:H,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:F,cloneElement:K,createContext:Y,createElement:W,createFactory:G,createRef:w,forwardRef:U,isValidElement:V,lazy:q,memo:m,useCallback:p,useContext:z,useDebugValue:Z,useEffect:S,useImperativeHandle:$,useLayoutEffect:j,useMemo:J,useReducer:Q,useRef:X,useState:ee,version:te}=__REACT__;var le=__STORYBOOKAPI__,{ActiveTabs:se,Consumer:ue,ManagerContext:ie,Provider:ce,addons:i,combineParameters:me,controlOrMetaKey:pe,controlOrMetaSymbol:Se,eventMatchesShortcut:_e,eventToShortcut:de,isMacLike:Oe,isShortcutTaken:Te,keyToSymbol:be,merge:ye,mockChannel:Ae,optionOrAltSymbol:fe,shortcutMatchesShortcut:he,shortcutToHumanString:Ce,types:_,useAddonState:Ee,useArgTypes:Re,useArgs:ge,useChannel:ke,useGlobalTypes:Ie,useGlobals:d,useParameter:Pe,useSharedState:Be,useStoryPrepared:Le,useStorybookApi:O,useStorybookState:xe}=__STORYBOOKAPI__;var He=__STORYBOOKCOMPONENTS__,{A:Fe,ActionBar:Ke,AddonPanel:Ye,Badge:We,Bar:Ge,Blockquote:we,Button:Ue,Code:Ve,DL:qe,Div:ze,DocumentWrapper:Ze,ErrorFormatter:$e,FlexBar:je,Form:Je,H1:Qe,H2:Xe,H3:et,H4:tt,H5:ot,H6:rt,HR:at,IconButton:T,IconButtonSkeleton:nt,Icons:b,Img:lt,LI:st,Link:ut,ListItem:it,Loader:ct,OL:mt,P:pt,Placeholder:St,Pre:_t,ResetWrapper:dt,ScrollArea:Ot,Separator:Tt,Spaced:bt,Span:yt,StorybookIcon:At,StorybookLogo:ft,Symbols:ht,SyntaxHighlighter:Ct,TT:Et,TabBar:Rt,TabButton:gt,TabWrapper:kt,Table:It,Tabs:Pt,TabsState:Bt,TooltipLinkList:Lt,TooltipMessage:xt,TooltipNote:Mt,UL:vt,WithTooltip:Dt,WithTooltipPure:Nt,Zoom:Ht,codeCommon:Ft,components:Kt,createCopyToClipboardFunction:Yt,getStoryHref:Wt,icons:Gt,interleaveSeparators:wt,nameSpaceClassNames:Ut,resetComponents:Vt,withReset:qt}=__STORYBOOKCOMPONENTS__;var A=m(function(){let[a,y]=d(),c=O(),l=[!0,"true"].includes(a[u]),s=p(()=>y({[u]:!l}),[l]);return S(()=>{c.setAddonShortcut(n,{label:"Toggle Outline [O]",defaultShortcut:["O"],actionName:"outline",showInMenu:!1,action:s})},[s,c]),r.createElement(T,{key:"outline",active:l,title:"Apply outlines to the preview",onClick:s},r.createElement(b,{icon:"outline"}))});i.register(n,()=>{i.add(n,{title:"Outline",id:"outline",type:_.TOOL,match:({viewMode:a})=>!!(a&&a.match(/^(story|docs)$/)),render:()=>r.createElement(A,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
