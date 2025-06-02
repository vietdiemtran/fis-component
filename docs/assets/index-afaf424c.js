import{j as i}from"./jsx-runtime-47c18db8.js";import{r as N,R as s}from"./index-d806aa85.js";import{d as n,g as e}from"./getTheme-624682de.js";import{c as l}from"./index-d16835b1.js";import{F as Z}from"./index-e72c950e.js";import{R as ee}from"./RemoveIcon-d554efb7.js";import{F as te}from"./index-29f02deb.js";const ie=n.div`
  display: flex;
  flex-direction: column;
  gap: ${e("sem/dimension/gap/xs")};
  width: 100%;
`,q=n.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  cursor: nwse-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,V=n.div`
  width: ${e("com/button/size-sm/height")};
  height: ${e("com/button/size-sm/height")};
  min-width: ${e("com/button/size-sm/height")};
  max-width: ${e("com/button/size-sm/height")};
  min-height: ${e("com/button/size-sm/height")};
  max-height: ${e("com/button/size-sm/height")};
  border-radius: ${e("com/button/size-xs/corner-radius")};
  border-width: ${e("com/button/secondary/border/stroke-width/default")};
  gap: ${e("com/button/size-sm/horizontal-gap")};
  position: absolute;
  bottom: ${e("com/input/field/size-md/icon/vertical-padding")};
  top: ${e("com/input/field/size-md/icon/vertical-padding")};
  right: ${e("com/input/field/right-padding")};
  display: flex;
  align-items: center;
  justify-content: center;

  &.input-area-lg {
    bottom: ${e("com/input/field/size-lg/icon/vertical-padding")};
    top: ${e("com/input/field/size-lg/icon/vertical-padding")};
  }
`,$=n.textarea`
  font-family: inherit;
  outline: none;
  border: none;
  width: 100%;
  ${e("Paragraph/Sm")};
  padding-top: ${e("com/input/field/size-md/label/vertical-padding")};
  padding-right: ${e("com/input/field/size-md/label/horizontal-padding")};
  padding-bottom: ${e("com/input/field/size-md/label/vertical-padding")};
  padding-left: ${e("com/input/field/size-md/label/horizontal-padding")};
  background-color: inherit;
  resize: none;
  caret-color: ${e("com/typing-cursor/default")};

  &.negative {
    color: ${e("com/input/field/negative/label/color-text/inputed")};
    caret-color: ${e("com/typing-cursor/negative")};
  }

  &::placeholder {
    ${e("Paragraph/Sm")}
    color: ${e("com/input/field/default/label/color-text/placeholder")};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &.input-area-lg {
    padding-top: ${e("com/input/field/size-lg/label/vertical-padding")};
    padding-right: ${e("com/input/field/size-lg/label/horizontal-padding")};
    padding-bottom: ${e("com/input/field/size-lg/label/vertical-padding")};
    padding-left: ${e("com/input/field/size-lg/label/horizontal-padding")};
  }

  &.input-area-icon {
    margin-right: calc(
      ${e("com/input/field/left-padding")} +
        ${e("com/button/size-sm/height")}
    );
    //cheat margin để khắc phục giới hạn của variable trên figma không có khả năng thêm toán tử tính toán (yêu cầu từ anh KhoiNQ3)
  }

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: ${e("com/scrollbar/thumb/corner-radius-rounded")};
  }

  &::-webkit-scrollbar-thumb {
    width: ${e("com/scrollbar/thumb/thumb-width/default")};
    border-radius: ${e("sem/dimension/radius/component/round")};
    border: ${e("sem/dimension/stroke-width/border/md")} solid
      ${e("com/scrollbar/thumb/border/stroke-color")};
    background-color: ${e("com/scrollbar/thumb/background-color/default")};
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,oe=n.div`
  position: relative;
  display: flex;
  height: inherit;
  min-height: ${e("com/input/field/size-md/height")};
  outline: ${e("com/input/field/stroke-width")} solid
    ${e("com/input/field/default/border/default")};
  outline-offset: -${e("com/input/field/stroke-width")};
  padding-right: ${e("com/input/field/right-padding")};
  padding-left: ${e("com/input/field/left-padding")};
  border-radius: ${e("com/input/field/size-md/corner-radius")};
  background-color: ${e("com/input/field/default/background/default")};

  &.input-area-icon {
    padding-right: 0;
  }

  &.negative {
    outline-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    &:hover {
      outline-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};
    }

    &:focus-within {
      outline-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
        ${e("com/actived-mark/color-gap-spacing-negative")};
    }

    &::placeholder {
      color: ${e("com/input/field/negative/label/color-text/placeholder")};
    }
  }

  &:hover {
    outline-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};
  }

  &:focus-within {
    outline-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    box-shadow: 0 0 0 ${e("com/actived-mark/gap-spacing")}
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${$}:disabled),
  &:has(${$}:read-only) {
    outline-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
    cursor: not-allowed;

    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }

    ${V}, ${q} {
      display: none;
    }
  }

  &.input-area-lg {
    min-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }
`,ne=n.div`
  display: flex;
  justify-content: flex-end;
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};

  span.negative {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
  padding-left: ${e("com/input/character-limit/horizontal-padding")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
`,ae=n.span`
  ${e("Paragraph/XS")}
  color: ${e("com/input/hint/neutral/label/color-text")};
  padding-top: ${e("com/input/hint/top-padding")};

  &.negative {
    color: ${e("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${e("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${e("com/input/hint/disable/label/color-text")};
  }
`,le=n.div`
  display: flex;
  justify-content: space-between;
`;n.div`
  ${e("Paragraph/XS")};
  color: ${e("com/input/hint/neutral/label/color-text")};
`;const u=N.forwardRef((v,F)=>{var C;const{className:D,required:H=!1,textLabel:x="",iconLabel:y,iconSuffix:r,disabled:z=!1,readOnly:re=!1,negative:p,message:k,positive:_,maxLength:m=50,showCount:A,size:g="md",fixedWidth:w,onClickIconLabel:P,onClickIconSuffix:W,onChange:f,onEnter:h,...X}=v,[c,S]=s.useState(""),o=s.useRef(null),B=s.useCallback(t=>{S(t.target.value),f&&f(t)},[f]),M=s.useCallback(t=>{t&&t.key==="Enter"&&h&&h(t.currentTarget.value)},[h]);N.useImperativeHandle(F,()=>({...o.current,focus:()=>{o.current&&o.current.focus()},blur:()=>{o.current&&o.current.blur()},clear:()=>{o.current&&(o.current.value="",S(""))}}));const T=t=>{t.preventDefault(),t.stopPropagation();const d=o.current;if(!d)return;const I=d.getBoundingClientRect(),K=t.clientX,Y=t.clientY,O=I.width,Q=I.height,j=b=>{b.preventDefault();const a=document.getElementById("resizeHandle"),E=a?a.offsetWidth:10,R=e("sem/typo/paragraph/line-height/sm"),G=R&&parseInt(R.toString(),10)||20,J=Math.max(O+(b.clientX-K)-E),U=Math.max(G,Q+(b.clientY-Y)-E);d.style.width=`${J}px`,d.style.height=`${U}px`,a&&(a.style.right="-2px",a.style.bottom="-2px")},L=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",L)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",L)};return i.jsxs(ie,{className:D,children:[(x||y)&&i.jsx(te,{textLabel:x,required:H,iconLabel:y,onClickIconLabel:P}),i.jsxs(oe,{className:l({"input-area-lg":g==="lg","input-area-icon":r,negative:p}),style:{width:w?`${w}px`:"auto"},children:[i.jsx($,{...X,onChange:B,onKeyDown:M,ref:o,disabled:z,className:l({negative:p,"input-area-lg":g==="lg","input-area-icon":r})}),r&&i.jsx(V,{className:l({"input-area-lg":g==="lg"}),children:i.jsx(Z,{variant:"tertiary-invisible",size:"sm",icon:r,onClick:W})}),i.jsx(q,{id:"resizeHandle",onMouseDown:T,children:i.jsx(ee,{})})]}),i.jsxs(le,{children:[i.jsx(ae,{className:l({disabled:z,negative:p,positive:_}),children:k||""}),i.jsx(ne,{children:A&&m>0&&i.jsxs("span",{className:l("text-area__count",{negative:c.length>m}),children:[(C=c==null?void 0:c.replaceAll(`
`,""))==null?void 0:C.length,"/",m]})})]})]})});u.displayName="FISInputArea";const fe=u;try{u.displayName="FISInputArea",u.__docgenInfo={description:"",displayName:"FISInputArea",props:{iconSuffix:{defaultValue:null,description:"Control the icon of the component",name:"iconSuffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"isNegative for current field",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"isPositive for current field",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"positiveMessage for current field",name:"message",required:!1,type:{name:"string"}},fixedWidth:{defaultValue:null,description:"Control the width of the component",name:"fixedWidth",required:!1,type:{name:"number"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((T: string | null) => void)"}},onClickIconSuffix:{defaultValue:null,description:"Handle onEnter action",name:"onClickIconSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{fe as F};
