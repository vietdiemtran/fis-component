import{j as n}from"./jsx-runtime-e7d94ccb.js";import{g as ne,F as f,h as k,i as te,P as G,W as J,E as K}from"./InfoSolidIcon-78d566e9.js";import{F as re}from"./index-3ff5a592.js";import{F as oe}from"./index-df9a4235.js";import{F as ie}from"./index-c78bc788.js";import{a as r,g as e,r as o}from"./getTheme-9564f801.js";import"./index-981f9478.js";import"./index-66039438.js";const ae=r.div`
  display: flex;
  align-items: stretch;
  gap: ${e("com/alert-banner/horizontal-gap")};
  padding-top: ${e("com/alert-banner/top-padding")};
  padding-bottom: calc(
    ${e("com/alert-banner/bottom-padding")} -
      ${e("com/alert-banner/stroke-width")}
  );
  padding-right: ${e("com/alert-banner/right-padding")};
  padding-left: ${e("com/alert-banner/left-padding")};
  border-bottom: ${e("com/alert-banner/stroke-width")} solid
    ${e("com/alert-banner/theme/border/color-stroke/info")};
  box-shadow: ${e("Elevation/Level-1")};

  ${t=>{switch(t.$variant){case"neutral":return o`
          background-color: ${e("com/alert-banner/theme/background-color/neutral")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/neutral")};

          ${i} {
            color: ${e("com/alert-banner/theme/icon/color-icon/neutral")};
          }

          ${l} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/neutral")};
          }

          ${a} {
            color: ${e("com/alert-banner/theme/title/color-text/neutral")};
          }

          ${c} {
            color: ${e("com/alert-banner/theme/description/color-text/neutral")};
          }
        `;case"info":return o`
          background-color: ${e("com/alert-banner/theme/background-color/info")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/info")};

          ${i} {
            color: ${e("com/alert-banner/theme/icon/color-icon/info")};
          }

          ${l} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/info")};
          }

          ${a} {
            color: ${e("com/alert-banner/theme/title/color-text/info")};
          }

          ${c} {
            color: ${e("com/alert-banner/theme/description/color-text/info")};
          }
        `;case"positive":return o`
          background-color: ${e("com/alert-banner/theme/background-color/positive")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/positive")};

          ${i} {
            color: ${e("com/alert-banner/theme/icon/color-icon/positive")};
          }

          ${l} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/positive")};
          }

          ${a} {
            color: ${e("com/alert-banner/theme/title/color-text/positive")};
          }

          ${c} {
            color: ${e("com/alert-banner/theme/description/color-text/positive")};
          }
        `;case"negative":return o`
          background-color: ${e("com/alert-banner/theme/background-color/negative")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/negative")};

          ${i} {
            color: ${e("com/alert-banner/theme/icon/color-icon/negative")};
          }

          ${l} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/negative")};
          }

          ${a} {
            color: ${e("com/alert-banner/theme/title/color-text/negative")};
          }

          ${c} {
            color: ${e("com/alert-banner/theme/description/color-text/negative")};
          }
        `;case"caution":return o`
          background-color: ${e("com/alert-banner/theme/background-color/caution")};
          border-color: ${e("com/alert-banner/theme/border/color-stroke/caution")};

          ${i} {
            color: ${e("com/alert-banner/theme/icon/color-icon/caution")};
          }

          ${l} {
            background-color: ${e("com/alert-banner/theme/divider/color-stroke/caution")};
          }

          ${a} {
            color: ${e("com/alert-banner/theme/title/color-text/caution")};
          }

          ${c} {
            color: ${e("com/alert-banner/theme/description/color-text/caution")};
          }
        `}}}
`,ce=r.div`
  display: flex;
  align-items: center;
  flex: 1;

  flex-direction: ${({$direction:t})=>t};
  ${t=>t.$direction==="column"?o`
          flex-direction: column;
          align-items: flex-start;
          gap: ${e("com/alert-banner/horizontal-gap")};
        `:o`
          justify-content: space-between;
          gap: ${e("com/alert-banner/horizontal-gap")};
        `}
`,le=r.div`
  display: flex;
  align-items: center;
  gap: ${e("com/alert-banner/label/horizonal-gap")};
`,i=r.span`
  display: inline-flex;
  align-items: center;
`,a=r.div`
  ${e("Label/Sm")}
  color: ${e("com/alert-banner/theme/title/color-text/info")};
`,c=r.div`
  ${e("Label/XS")}
  color: ${e("com/alert-banner/theme/description/color-text/info")};
`,se=r.div`
  display: flex;
  align-items: center;
  gap: ${e("com/alert-banner/action/horizontal-gap")};
`;r.div`
  display: inline-flex;
  align-items: center;
`;const l=r.div`
  width: 1px;
`,de=r.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;function s({title:t,description:y,variant:j,icon:B,actionText:$,actionIcon:U,linkText:x,direction:C="row",onClickButton:Y,onClickLink:Z,onClose:ee}){return n.jsxs(ae,{$direction:C,$variant:j,children:[B&&n.jsxs(i,{children:[" ",B]}),n.jsxs(ce,{$direction:C,$variant:j,children:[n.jsxs(le,{children:[n.jsx(a,{children:t}),y&&n.jsx(c,{children:y})]}),($||x)&&n.jsxs(se,{children:[$&&n.jsx(re,{size:"sm",variant:"tertiary",endIcon:U,onClick:Y,children:$}),x&&n.jsx(ie,{size:"sm",underline:!0,onClick:Z,children:x})]})]}),n.jsx(l,{}),n.jsx(de,{children:n.jsx(oe,{size:"sm",variant:"tertiary-invisible",icon:n.jsx(ne,{}),onClick:ee})})]})}s.displayName="FISAlertBanner";try{s.displayName="FISAlertBanner",s.__docgenInfo={description:"",displayName:"FISAlertBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"positive"'},{value:'"negative"'},{value:'"caution"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string"}},actionIcon:{defaultValue:null,description:"",name:"actionIcon",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"(() => void)"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const me={neutral:n.jsx(f,{}),info:n.jsx(k,{}),positive:n.jsx(G,{}),caution:n.jsx(J,{}),negative:n.jsx(K,{})},Q=["neutral","info","positive","negative","caution"],fe={title:"Components/Alert-Banner",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"AlertBanner hiển thị thông báo nổi bật với 5 variant trạng thái, có thể kèm mô tả, nút hành động, link và nút đóng."}}},argTypes:{title:{control:"text",description:"Tiêu đề của banner."},description:{control:"text",description:"Mô tả chi tiết hiển thị dưới tiêu đề."},variant:{control:"select",options:Q,description:"Trạng thái/màu sắc của banner."},direction:{control:"radio",options:["row","column"],description:"Bố cục phần nội dung: theo hàng ngang hoặc dọc."},actionText:{control:"text",description:"Nhãn của nút hành động (tertiary button)."},linkText:{control:"text",description:"Nhãn của link hành động."},icon:{control:!1,description:"Icon hiển thị đầu banner."},actionIcon:{control:!1,description:"Icon hiển thị cuối nút hành động."},onClickButton:{action:"clickButton"},onClickLink:{action:"clickLink"},onClose:{action:"close"}}},d=t=>n.jsx(s,{icon:n.jsx(f,{}),...t}),m=d.bind({});m.args={variant:"neutral",title:"Thông báo mặc định",icon:n.jsx(f,{})};const p=()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:Q.map(t=>n.jsx(s,{variant:t,icon:me[t],title:`Variant ${t}`,description:"Mô tả ngắn cho banner này."},t))});p.parameters={docs:{description:{story:"5 variant trạng thái: neutral, info, positive, negative, caution."}}};const u=d.bind({});u.args={variant:"info",icon:n.jsx(k,{}),title:"Tiêu đề thông báo",description:"Đây là phần mô tả chi tiết, dùng để cung cấp thêm ngữ cảnh cho người dùng."};const h=d.bind({});h.args={variant:"info",icon:n.jsx(k,{}),title:"Có nút hành động",description:"Banner kèm một nút hành động ở bên phải.",actionText:"Xem chi tiết",actionIcon:n.jsx(te,{})};const g=d.bind({});g.args={variant:"positive",icon:n.jsx(G,{}),title:"Có link hành động",description:"Banner kèm một link.",linkText:"Tìm hiểu thêm"};const b=d.bind({});b.args={variant:"caution",icon:n.jsx(J,{}),title:"Bố cục theo cột",description:"Nội dung và hành động xếp theo chiều dọc.",direction:"column",actionText:"Hành động",linkText:"Link"};const v=d.bind({});v.args={variant:"negative",icon:n.jsx(K,{}),title:"Có thể đóng",description:"Nhấn nút X để đóng (xem tab Actions)."};var A,I,S;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var D,F,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 12,
  width: 480
}}>
    {variants.map(variant => <AlertBanner key={variant} variant={variant} icon={variantIcon[variant]} title={\`Variant \${variant}\`} description="Mô tả ngắn cho banner này." />)}
  </div>`,...(T=(F=p.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var V,w,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(q=(w=u.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var L,_,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(W=(_=h.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var N,z,E;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var R,M,X;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(X=(M=b.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var P,H,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:"args => <AlertBanner icon={<Fpt />} {...args} />",...(O=(H=v.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const ke=["Default","AllVariants","WithDescription","WithAction","WithLink","DirectionColumn","Dismissible"];export{p as AllVariants,m as Default,b as DirectionColumn,v as Dismissible,h as WithAction,u as WithDescription,g as WithLink,ke as __namedExportsOrder,fe as default};
