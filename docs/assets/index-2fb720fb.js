import{j as i}from"./jsx-runtime-50395f49.js";import{r as N,R as r}from"./index-9fa1aa67.js";import{g as e}from"./getTheme-fd88fed7.js";import{c as p}from"./index-668664f1.js";import{d as a}from"./styled-components.browser.esm-6b0ce59b.js";import{F as oe}from"./index-b3650d7f.js";import{e as ae}from"./ResizeIcon-0deac5ef.js";import{F as le}from"./index-23d27f21.js";const re=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e("sem/dimension/gap/xs")};
  width: fit-content;
`,H=a.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  cursor: nwse-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,T=a.div`
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
  bottom: ${e("sem/dimension/padding/2xs")};
  top: ${e("sem/dimension/padding/2xs")};
  right: ${e("com/input/field/right-padding")};
  display: flex;
  align-items: center;
  justify-content: center;
`,$=a.textarea`
  font-family: inherit;
  outline: none;
  border: none;
  ${e("Paragraph/Sm")};
  padding-top: ${e("com/input/field/size-md/label/vertical-padding")};
  padding-right: ${e("com/input/field/size-md/label/horizontal-padding")};
  padding-bottom: ${e("com/input/field/size-md/label/vertical-padding")};
  padding-left: ${e("com/input/field/size-md/label/horizontal-padding")};
  background-color: inherit;
  resize: none;

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
      ${e("com/input/field/size-md/label/horizontal-padding")} +
        ${e("com/button/size-sm/height")}
    );
    //cheat margin để khắc phục giới hạn của variable trên figma không có khả năng thêm toán tử tính toán (yêu cầu từ anh KhoiNQ3)
  }
`,de=a.div`
  position: relative;
  display: flex;
  height: inherit;
  min-height: ${e("com/input/field/size-md/height")};
  border: ${e("com/input/field/stroke-width")} solid
    ${e("com/input/field/default/border/default")};
  padding-right: ${e("com/input/field/right-padding")};
  padding-left: ${e("com/input/field/left-padding")};
  border-radius: ${e("com/input/field/size-md/corner-radius")};
  background-color: ${e("com/input/field/default/background/default")};

  &.input-area-icon {
    padding-right: 0;
  }

  &.negative {
    border-color: ${e("com/input/field/negative/border/default")};
    background-color: ${e("com/input/field/negative/background/default")};

    &:hover {
      border-color: ${e("com/input/field/negative/border/hover")};
      background-color: ${e("com/input/field/negative/background/hover")};
    }

    &:focus-within {
      border-color: ${e("com/input/field/negative/border/active")};
      background-color: ${e("com/input/field/negative/background/active")};
      outline: ${e("com/actived-mark/gap-spacing")} solid
        ${e("com/actived-mark/color-gap-spacing")};
    }

    &::placeholder {
      color: ${e("com/input/field/negative/label/color-text/placeholder")};
    }
  }

  &:hover {
    border-color: ${e("com/input/field/default/border/hover")};
    background-color: ${e("com/input/field/default/background/hover")};
  }

  &:focus-within {
    border-color: ${e("com/input/field/default/border/active")};
    background-color: ${e("com/input/field/default/background/active")};
    outline: ${e("com/actived-mark/gap-spacing")} solid
      ${e("com/actived-mark/color-gap-spacing")};
  }

  &:has(${$}:disabled),
  &:has(${$}:read-only) {
    border-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
    cursor: not-allowed;

    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }

    ${T}, ${H} {
      display: none;
    }
  }

  &.input-area-lg {
    min-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }
`,ce=a.div`
  display: flex;
  justify-content: flex-end;
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};

  span.negative { {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
  padding-left: ${e("com/input/character-limit/horizontal-padding")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
`,se=a.span`
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
`,ue=a.div`
  display: flex;
  justify-content: space-between;
`;a.div`
  ${e("Paragraph/XS")};
  color: ${e("com/input/hint/neutral/label/color-text")};
`;const m=N.forwardRef((x,B)=>{var j;const{className:D,required:_=!1,textLabel:y="",iconLabel:z,iconSuffix:c,placeholder:A,disabled:k=!1,readOnly:F=!0,negative:C,message:S,positive:P,maxLength:f=50,showCount:W,size:w="md",fixedWidth:I,value:s,onClickIconLabel:X,onClickIconSuffix:M,onChange:u,onEnter:g,onBlur:h,...K}=x,[l,b]=r.useState(""),o=r.useRef(null),Y=r.useCallback(t=>{const n=t.target.value;n!==l&&(b(n),u==null||u(n))},[l,u]),O=r.useCallback(t=>{t.key==="Enter"&&typeof g=="function"&&g(t.currentTarget.value)},[g]),Q=r.useCallback(t=>{const n=t.target.value;typeof h=="function"&&h(n)},[h]);r.useEffect(()=>{s!=null&&b(s)},[s]),N.useImperativeHandle(B,()=>({...o.current,focus:()=>{o.current&&o.current.focus()},blur:()=>{o.current&&o.current.blur()},clear:()=>{o.current&&(o.current.value="",b(""))}}));const U=t=>{t.preventDefault(),t.stopPropagation();const n=o.current;if(!n)return;const V=n.getBoundingClientRect(),G=t.clientX,J=t.clientY,Z=V.width,ee=V.height,q=v=>{v.preventDefault();const d=document.getElementById("resizeHandle"),E=d?d.offsetWidth:10,R=e("sem/typo/paragraph/line-height/sm"),te=R&&parseInt(R.toString(),10)||20,ie=Math.max(Z+(v.clientX-G)-E),ne=Math.max(te,ee+(v.clientY-J)-E);n.style.width=`${ie}px`,n.style.height=`${ne}px`,d&&(d.style.right="-2px",d.style.bottom="-2px")},L=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",L)};document.addEventListener("mousemove",q),document.addEventListener("mouseup",L)};return i.jsxs(re,{className:D,children:[(y||z)&&i.jsx(le,{textLabel:y,required:_,iconLabel:z,onClickIconLabel:X}),i.jsxs(de,{className:p({"input-area-lg":w==="lg","input-area-icon":c,negative:C}),style:{width:I?`${I}px`:"auto"},children:[i.jsx($,{...K,value:l,onChange:Y,onKeyDown:O,onBlur:Q,ref:o,placeholder:A,disabled:k,readOnly:F,className:p({"input-area-lg":w==="lg","input-area-icon":c})}),c&&i.jsx(T,{children:i.jsx(oe,{variant:"tertiary-invisible",size:"sm",icon:c,onClick:M})}),i.jsx(H,{id:"resizeHandle",onMouseDown:U,children:i.jsx(ae,{})})]}),i.jsxs(ue,{children:[i.jsx(se,{className:p({disabled:k,negative:C,positive:P}),children:S||""}),i.jsx(ce,{children:W&&f>0&&i.jsxs("span",{className:p("text-area__count",{negative:l.length>f}),children:[(j=l==null?void 0:l.replaceAll(`
`,""))==null?void 0:j.length,"/",f]})})]})]})});m.displayName="FISTextArea";const xe=m;try{m.displayName="FISTextArea",m.__docgenInfo={description:"",displayName:"FISTextArea",props:{iconSuffix:{defaultValue:null,description:"Control the icon of the component",name:"iconSuffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Control the size of the component",name:"size",required:!0,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},placeholder:{defaultValue:null,description:"placeholder for current field",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"User-filled value",name:"value",required:!1,type:{name:"string"}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"isNegative for current field",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"isPositive for current field",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"positiveMessage for current field",name:"message",required:!1,type:{name:"string"}},fixedWidth:{defaultValue:null,description:"Control the width of the component",name:"fixedWidth",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Handle the change value of the field",name:"onChange",required:!1,type:{name:"((T: string | null) => void)"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((T: string | null) => void)"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"((T: string | null) => void)"}},onClickIconSuffix:{defaultValue:null,description:"Handle onEnter action",name:"onClickIconSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}export{xe as T};
