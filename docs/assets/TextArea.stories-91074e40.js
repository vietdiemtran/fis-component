import{j as o}from"./jsx-runtime-e7d94ccb.js";import{r as Ae,R as c}from"./index-981f9478.js";import{a as i,g as e}from"./getTheme-9564f801.js";import{c as u}from"./index-f7beeda4.js";import{F as Fe}from"./index-df9a4235.js";import{R as Ve,C as W}from"./InfoSolidIcon-78d566e9.js";import{F as qe}from"./index-00a7ff96.js";import{m as De}from"./mergeRefs-3d2b51f8.js";import"./index-66039438.js";const Ee=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e("sem/dimension/gap/xs")};

  /* Keep the default full width while letting consumer utility classes win. */
  :where(&) {
    width: 100%;
  }
`,ce=i.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  cursor: nwse-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,ue=i.div`
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
`,L=i.textarea`
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
`,_e=i.div`
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

  &:has(${L}:disabled),
  &:has(${L}:read-only) {
    outline-color: ${e("com/input/field/disable/stroke-color")};
    background-color: ${e("com/input/field/disable/background-color")};
    cursor: not-allowed;

    &::placeholder {
      color: ${e("com/input/field/disable/label-color")};
    }

    ${ue}, ${ce} {
      display: none;
    }
  }

  &.input-area-lg {
    min-height: ${e("com/input/field/size-lg/height")};
    border-radius: ${e("com/input/field/size-lg/corner-radius")};
  }
`,Pe=i.div`
  display: flex;
  justify-content: flex-end;
  ${e("Subheading/XS")}
  color: ${e("com/input/character-limit/label/default/color-text")};

  span.negative {
    color: ${e("com/input/character-limit/label/over-limit/color-text")};
  }
  padding-left: ${e("com/input/character-limit/horizontal-padding")};
  padding-right: ${e("com/input/character-limit/horizontal-padding")};
`,Te=i.span`
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
`,He=i.div`
  display: flex;
  justify-content: space-between;
`;i.div`
  ${e("Paragraph/XS")};
  color: ${e("com/input/hint/neutral/label/color-text")};
`;const $=Ae.forwardRef((h,me)=>{var q,D;const{className:ge,required:he=!1,textLabel:j="",iconLabel:N,iconSuffix:f,disabled:R=!1,readOnly:We=!1,negative:y,message:w,positive:fe,maxLength:s=50,showCount:A,size:z="md",fixedWidth:F,onClickIconLabel:be,onClickIconSuffix:ve,onChange:S,onEnter:k,...b}=h,[xe,$e]=c.useState(""),[,ye]=c.useReducer(t=>t+1,0),I=c.useRef(null),V=()=>{var t;return((t=I.current)==null?void 0:t.value)??b.value??xe??""},we=c.useCallback(t=>{b.value===void 0?$e(t.target.value):ye(),S&&S(t)},[S,b.value]),ze=c.useCallback(t=>{t&&t.key==="Enter"&&k&&k(t.currentTarget.value)},[k]),Se=t=>{t.preventDefault(),t.stopPropagation();const v=I.current;if(!v)return;const E=v.getBoundingClientRect(),ke=t.clientX,Ie=t.clientY,Ce=E.width,Le=E.height,_=C=>{C.preventDefault();const d=document.getElementById("resizeHandle"),T=d?d.offsetWidth:10,H=e("sem/typo/paragraph/line-height/sm"),je=H&&parseInt(H.toString(),10)||20,Ne=Math.max(Ce+(C.clientX-ke)-T),Re=Math.max(je,Le+(C.clientY-Ie)-T);v.style.width=`${Ne}px`,v.style.height=`${Re}px`,d&&(d.style.right="-2px",d.style.bottom="-2px")},P=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",_),document.addEventListener("mouseup",P)};return o.jsxs(Ee,{className:ge,children:[(j||N)&&o.jsx(qe,{textLabel:j,required:he,iconLabel:N,onClickIconLabel:be}),o.jsxs(_e,{className:u({"input-area-lg":z==="lg","input-area-icon":f,negative:y}),style:{width:F?`${F}px`:"auto"},children:[o.jsx(L,{...b,onChange:we,onKeyDown:ze,ref:De(me,I),disabled:R,maxLength:s,className:u({negative:y,"input-area-lg":z==="lg","input-area-icon":f})}),f&&o.jsx(ue,{className:u({"input-area-lg":z==="lg"}),children:o.jsx(Fe,{variant:"tertiary-invisible",size:"sm",icon:f,onClick:ve})}),o.jsx(ce,{id:"resizeHandle",onMouseDown:Se,children:o.jsx(Ve,{})})]}),(!!w||A&&s>0)&&o.jsxs(He,{children:[o.jsx(Te,{className:u({disabled:R,negative:y,positive:fe}),children:w||""}),o.jsx(Pe,{children:A&&s>0&&o.jsxs("span",{className:u("text-area__count",{negative:((q=V())==null?void 0:q.length)>s}),children:[(D=V())==null?void 0:D.length,"/",s]})})]})]})});$.displayName="FISInputArea";const pe=$;try{$.displayName="FISInputArea",$.__docgenInfo={description:"",displayName:"FISInputArea",props:{iconSuffix:{defaultValue:null,description:"Control the icon of the component",name:"iconSuffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Control the size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"isNegative for current field",name:"negative",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"isPositive for current field",name:"positive",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"positiveMessage for current field",name:"message",required:!1,type:{name:"string"}},fixedWidth:{defaultValue:null,description:"Control the width of the component",name:"fixedWidth",required:!1,type:{name:"number"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"((T: string | null) => void)"}},onClickIconSuffix:{defaultValue:null,description:"Handle onEnter action",name:"onClickIconSuffix",required:!1,type:{name:"(() => void)"}},textLabel:{defaultValue:null,description:"textLabel for current field",name:"textLabel",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"Icon for current field",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"onClickIconLabel for current field",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Je={title:"components/Input/TextArea",component:pe,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{textLabel:"Input Label",rows:3,size:"md",required:!0,iconLabel:o.jsx(W,{}),placeholder:"Placeholder...",negative:!1,positive:!1,message:"Placeholder of hint text to help",showCount:!0,maxLength:200,readOnly:!1,disabled:!1,iconSuffix:o.jsx(W,{})},argTypes:{textLabel:{control:"text"},rows:{control:{type:"number"}},placeholder:{control:"text"},size:{control:{type:"radio"},options:["md","lg"]},required:{control:"boolean"},negative:{control:"boolean"},positive:{control:"boolean"},showCount:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},message:{control:"text",description:"Text gợi ý/ lỗi bên dưới"},maxLength:{control:"number",description:"Số ký tự tối đa"},fixedWidth:{control:"number",description:"Bề rộng cố định (px)"},iconLabel:{control:!1,description:"Icon cạnh label"},iconSuffix:{control:!1,description:"Icon ở góc textarea"}}},n=h=>o.jsx("div",{style:{padding:"10px",width:"400px"},children:o.jsx(pe,{...h})}),x=n.bind({}),a=n.bind({});a.args={message:"",showCount:!0,maxLength:100};a.parameters={docs:{description:{story:"Hiển thị bộ đếm ký tự với `showCount`."}}};const r=n.bind({});r.args={negative:!0,positive:!1,message:"Nội dung không hợp lệ"};r.parameters={docs:{description:{story:"Trạng thái lỗi (viền đỏ + message đỏ)."}}};const l=n.bind({});l.args={negative:!1,positive:!0,message:"Nội dung hợp lệ"};l.parameters={docs:{description:{story:"Trạng thái hợp lệ (message xanh)."}}};const p=n.bind({});p.args={disabled:!0,value:"Không thể chỉnh sửa"};const m=n.bind({});m.args={readOnly:!0,value:"Nội dung chỉ đọc"};const g=n.bind({});g.args={size:"lg"};var O,B,X;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(X=(B=x.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var K,M,Y;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(Y=(M=a.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var Q,U,G;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(G=(U=r.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Z,ee;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ie;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(ie=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,ae,re;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,se,de;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  return <div style={{
    padding: "10px",
    width: "400px"
  }}>
      <FISInputArea {...args} />
    </div>;
}`,...(de=(se=g.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const Ze=["Default","WithCount","Negative","Positive","Disabled","ReadOnly","Large"];export{x as Default,p as Disabled,g as Large,r as Negative,l as Positive,m as ReadOnly,a as WithCount,Ze as __namedExportsOrder,Je as default};
