import{j as e}from"./jsx-runtime-e7d94ccb.js";import{C as i}from"./InfoSolidIcon-78d566e9.js";import{F as t}from"./index-4c1c7505.js";import"./index-981f9478.js";import"./index-f7beeda4.js";import"./index-b8aa03b0.js";import"./getTheme-9564f801.js";import"./index-6b29b51e.js";import"./index-b885ca0b.js";import"./index-b0c2e733.js";import"./index-5e910af4.js";import"./AntdIcon-4d3cb6de.js";import"./index-05569730.js";import"./roundedArrow-9ac4eb7a.js";import"./UnstableContext-615a9015.js";import"./useSize-b6c97e34.js";import"./button-7fa5f1b5.js";import"./useMergedState-281a21e7.js";import"./motion-99a9a6da.js";const Se="\nMenuItem đang hỗ trợ 4 type:\n- `action`\n- `leveling`\n- `select`\n- `checkbox`\n\nHover là trạng thái tương tác thật của browser nên sẽ kiểm tra trực tiếp trên canvas.\n",We={title:"Components/Menu/MenuItem",component:t,tags:["autodocs"],parameters:{docs:{description:{component:Se}}},argTypes:{title:{control:"text"},description:{control:"text"},iconPrefix:{control:!1},type:{control:"radio",options:["action","select","leveling","checkbox"]},size:{control:"radio",options:["md","lg"]},selected:{control:"boolean"},negative:{control:"boolean"},disable:{control:"boolean"},shortcut:{control:"text"},onClickMenu:{control:!1}},args:{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"action",size:"md",selected:!1,negative:!1,disable:!1,shortcut:"⌘ K",onClickMenu:()=>{}}},s=l=>e.jsx("div",{style:{width:320},children:e.jsx(t,{...l})}),S=({title:l,children:D})=>e.jsxs("section",{style:{marginBottom:32},children:[e.jsx("h2",{style:{margin:"0 0 16px",fontSize:28,lineHeight:1.2},children:l}),e.jsx("div",{style:{display:"grid",gap:12},children:D})]}),r=({label:l,children:D})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",alignItems:"center",gap:16},children:[e.jsx("div",{style:{fontSize:14,color:"#667085",textTransform:"uppercase",letterSpacing:"0.06em"},children:l}),e.jsx("div",{style:{width:320},children:D})]}),Me=()=>e.jsxs("div",{style:{padding:24,maxWidth:1100},children:[e.jsxs(S,{title:"Action",children:[e.jsx(r,{label:"default",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"action",size:"md",shortcut:"⌘ K",onClickMenu:()=>{}})}),e.jsx(r,{label:"negative",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"action",negative:!0,size:"md",shortcut:"⌘ K",onClickMenu:()=>{}})}),e.jsx(r,{label:"disabled",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"action",disable:!0,size:"md",shortcut:"⌘ K",onClickMenu:()=>{}})}),e.jsx(r,{label:"long text",children:e.jsx(t,{title:"Function Label with a very long name that should be truncated",description:"Description",iconPrefix:e.jsx(i,{}),type:"action",size:"md",shortcut:"⌘ K",onClickMenu:()=>{}})})]}),e.jsxs(S,{title:"Leveling",children:[e.jsx(r,{label:"default",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"leveling",size:"md",onClickMenu:()=>{}})}),e.jsx(r,{label:"selected",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"leveling",selected:!0,size:"md",onClickMenu:()=>{}})}),e.jsx(r,{label:"negative",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"leveling",negative:!0,size:"md",onClickMenu:()=>{}})}),e.jsx(r,{label:"disabled",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"leveling",disable:!0,size:"md",onClickMenu:()=>{}})})]}),e.jsxs(S,{title:"Select-able",children:[e.jsx(r,{label:"default",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"select",size:"md",onClickMenu:()=>{}})}),e.jsx(r,{label:"selected",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"select",selected:!0,size:"md",onClickMenu:()=>{}})}),e.jsx(r,{label:"negative",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"select",negative:!0,size:"md",onClickMenu:()=>{}})}),e.jsx(r,{label:"disabled",children:e.jsx(t,{title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"select",disable:!0,size:"md",onClickMenu:()=>{}})})]}),e.jsxs(S,{title:"Checkbox",children:[e.jsx(r,{label:"default",children:e.jsx(t,{title:"Function Label",description:"Description",type:"checkbox",size:"md",selected:!1,onClickMenu:()=>{}})}),e.jsx(r,{label:"active",children:e.jsx(t,{title:"Function Label",description:"Description",type:"checkbox",size:"md",selected:!0,onClickMenu:()=>{}})}),e.jsx(r,{label:"disabled",children:e.jsx(t,{title:"Function Label",description:"Description",type:"checkbox",size:"md",disable:!0,onClickMenu:()=>{}})})]})]}),M=s.bind({}),d=Me.bind({});d.storyName="All Cases Overview";const n=s.bind({});n.args={title:"Function Label",description:"Description",iconPrefix:e.jsx(i,{}),type:"action",size:"md",shortcut:"⌘ K",onClickMenu:()=>{}};const p=s.bind({});p.args={...n.args,negative:!0};const u=s.bind({});u.args={...n.args,disable:!0};const m=s.bind({});m.args={...n.args,title:"Function Label with a very long name that should be truncated"};const a=s.bind({});a.args={...n.args,type:"leveling"};const g=s.bind({});g.args={...a.args,selected:!0};const x=s.bind({});x.args={...a.args,negative:!0};const b=s.bind({});b.args={...a.args,disable:!0};const o=s.bind({});o.args={...n.args,type:"select"};const h=s.bind({});h.args={...o.args,selected:!0};const v=s.bind({});v.args={...o.args,negative:!0};const j=s.bind({});j.args={...o.args,disable:!0};const c=s.bind({});c.args={title:"Function Label",description:"Description",type:"checkbox",size:"md",selected:!1,onClickMenu:()=>{}};const y=s.bind({});y.args={...c.args,selected:!0};const f=s.bind({});f.args={...c.args,disable:!0};var k,C,L;M.parameters={...M.parameters,docs:{...(k=M.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(L=(C=M.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var w,I,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:"ShowcaseTemplate.bind({}) as StoryFn<MenuItemProps>",...(F=(I=d.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var z,P,A;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(A=(P=n.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var T,N,K;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(K=(N=p.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var E,H,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(O=(H=u.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var R,_,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var W,q,G;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(G=(q=a.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,se,re;o.parameters={...o.parameters,docs:{...(te=o.parameters)==null?void 0:te.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(re=(se=o.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,ne,ae;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,ce,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,ue;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(ue=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,xe;c.parameters={...c.parameters,docs:{...(me=c.parameters)==null?void 0:me.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(xe=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,he,ve;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(ve=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var je,ye,fe;f.parameters={...f.parameters,docs:{...(je=f.parameters)==null?void 0:je.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <MenuItem {...args} />
  </div>`,...(fe=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};const qe=["Playground","Showcase","ActionDefault","ActionNegative","ActionDisabled","ActionLongText","LevelingDefault","LevelingSelected","LevelingNegative","LevelingDisabled","SelectDefault","SelectSelected","SelectNegative","SelectDisabled","CheckboxDefault","CheckboxSelected","CheckboxDisabled"];export{n as ActionDefault,u as ActionDisabled,m as ActionLongText,p as ActionNegative,c as CheckboxDefault,f as CheckboxDisabled,y as CheckboxSelected,a as LevelingDefault,b as LevelingDisabled,x as LevelingNegative,g as LevelingSelected,M as Playground,o as SelectDefault,j as SelectDisabled,v as SelectNegative,h as SelectSelected,d as Showcase,qe as __namedExportsOrder,We as default};
