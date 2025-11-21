import{j as o}from"./jsx-runtime-e7d94ccb.js";import{r as le,R as a}from"./index-981f9478.js";import{d as i,g as e}from"./getTheme-6566e1e9.js";import{c as r}from"./index-f7beeda4.js";import{F as de}from"./index-ba8cec51.js";import{R as ce,C as N}from"./LineArrowsUp-2da65544.js";import{F as se}from"./index-e99fd670.js";import{m as ue}from"./mergeRefs-3d2b51f8.js";import"./index-4bd6e544.js";const pe=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e("sem/dimension/gap/xs")};
  width: 100%;
`,F=i.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  cursor: nwse-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,H=i.div`
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
`,x=i.textarea`
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
`,me=i.div`
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

  &:has(${x}:disabled),
  &:has(${x}:read-only) {
    outline-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
    cursor: not-allowed;

    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }

    ${H}, ${F} {
      display: none;
    }
  }

  &.input-area-lg {
    min-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }
`,ge=i.div`
  display: flex;
  justify-content: flex-end;
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};

  span.negative {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
  padding-left: ${e("com/input/character-limit/horizontal-padding")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
`,fe=i.span`
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
`,he=i.div`
  display: flex;
  justify-content: space-between;
`;i.div`
  ${e("Paragraph/XS")};
  color: ${e("com/input/hint/neutral/label/color-text")};
`;const m=le.forwardRef((l,T)=>{var I,j;const{className:W,required:X=!1,textLabel:y="",iconLabel:z,iconSuffix:d,disabled:k=!1,readOnly:ve=!1,negative:g,message:w,positive:B,maxLength:c=50,showCount:M,size:f="md",fixedWidth:C,onClickIconLabel:K,onClickIconSuffix:O,onChange:h,onEnter:b,...s}=l,[Y,Q]=a.useState(""),[,U]=a.useReducer(t=>t+1,0),v=a.useRef(null),S=()=>{var t;return((t=v.current)==null?void 0:t.value)??s.value??Y??""},G=a.useCallback(t=>{s.value===void 0?Q(t.target.value):U(),h&&h(t)},[h,s.value]),J=a.useCallback(t=>{t&&t.key==="Enter"&&b&&b(t.currentTarget.value)},[b]),Z=t=>{t.preventDefault(),t.stopPropagation();const u=v.current;if(!u)return;const L=u.getBoundingClientRect(),ee=t.clientX,te=t.clientY,oe=L.width,ie=L.height,R=$=>{$.preventDefault();const n=document.getElementById("resizeHandle"),q=n?n.offsetWidth:10,E=e("sem/typo/paragraph/line-height/sm"),ne=E&&parseInt(E.toString(),10)||20,ae=Math.max(oe+($.clientX-ee)-q),re=Math.max(ne,ie+($.clientY-te)-q);u.style.width=`${ae}px`,u.style.height=`${re}px`,n&&(n.style.right="-2px",n.style.bottom="-2px")},V=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",V)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",V)};return o.jsxs(pe,{className:W,children:[(y||z)&&o.jsx(se,{textLabel:y,required:X,iconLabel:z,onClickIconLabel:K}),o.jsxs(me,{className:r({"input-area-lg":f==="lg","input-area-icon":d,negative:g}),style:{width:C?`${C}px`:"auto"},children:[o.jsx(x,{...s,onChange:G,onKeyDown:J,ref:ue(T,v),disabled:k,maxLength:c,className:r({negative:g,"input-area-lg":f==="lg","input-area-icon":d})}),d&&o.jsx(H,{className:r({"input-area-lg":f==="lg"}),children:o.jsx(de,{variant:"tertiary-invisible",size:"sm",icon:d,onClick:O})}),o.jsx(F,{id:"resizeHandle",onMouseDown:Z,children:o.jsx(ce,{})})]}),o.jsxs(he,{children:[o.jsx(fe,{className:r({disabled:k,negative:g,positive:B}),children:w||""}),o.jsx(ge,{children:M&&c>0&&o.jsxs("span",{className:r("text-area__count",{negative:((I=S())==null?void 0:I.length)>c}),children:[(j=S())==null?void 0:j.length,"/",c]})})]})]})});m.displayName="FISInputArea";const P=m;try{m.displayName="FISInputArea",m.__docgenInfo={description:"",displayName:"FISInputArea",props:{iconSuffix:{defaultValue:null,description:"Control the icon of the component",name:"iconSuffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"isNegative for current field",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"isPositive for current field",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"positiveMessage for current field",name:"message",required:!1,type:{name:"string"}},fixedWidth:{defaultValue:null,description:"Control the width of the component",name:"fixedWidth",required:!1,type:{name:"number"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((T: string | null) => void)"}},onClickIconSuffix:{defaultValue:null,description:"Handle onEnter action",name:"onClickIconSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const je={title:"components/Input/TextArea",component:P,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Input Label",rows:3,size:"md",required:!0,iconLabel:o.jsx(N,{}),placeHolder:"Placeholder...",negative:!1,message:"Error message",positive:!0,showCount:!0,readOnly:!1,disabled:!1,iconSuffix:o.jsx(N,{})},argTypes:{textLabel:{control:"text"},rows:{control:{type:"number"}},placeHolder:{control:"text"},size:{control:{type:"radio"},options:["md","lg"]},required:{control:{type:"radio"},options:[!0,!1]},negative:{control:{type:"radio"},options:[!0,!1]},positive:{control:{type:"radio"},options:[!0,!1]},showCount:{control:{type:"radio"},options:[!0,!1]},disabled:{control:{type:"radio"},options:[!0,!1]}}},be=l=>o.jsx("div",{style:{padding:"10px",width:"400px"},children:o.jsx(P,{...l})}),p=be.bind({});var _,D,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Le=["Default"];export{p as Default,Le as __namedExportsOrder,je as default};
