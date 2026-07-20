import{j as e}from"./jsx-runtime-e7d94ccb.js";import{F as t}from"./index-dc16328d.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";const p=[void 0,"tiny","2xs","xs","sm","md","lg","xl","2xl"],q={title:"components/Divider",component:t,tags:["autodocs"],args:{flip:!1,sideOffset:void 0,headpointOffset:void 0,direction:"horizontal"},argTypes:{flip:{control:"boolean",description:'Trong Figma, nếu bạn đặt component Divider ở trên cùng của đối tượng cha có "Clip content" bật (TRUE), nét vẽ của Divider có thể không hiển thị do tính chất của đối tượng "Line" chỉ hiển thị nét vẽ ở một bên. Để hiển thị đúng, hãy sử dụng thuộc tính "Flip" để lật nét vẽ của Divider.'},sideOffset:{control:"select",options:p,description:"Bạn có thể thay đổi padding horizontal của component Divider"},headpointOffset:{control:"select",options:p,description:"Bạn có thể thay đổi padding vertical của component Divider"},direction:{control:"radio",options:["horizontal","vertical"],description:"Bạn có thể thay đổi hình thức của Divider"},color:{control:"text",description:"Token màu (key trong design-system) để đổi màu nét vẽ Divider. Ví dụ: `com/alert-banner/theme/divider/color-stroke/info`."}}},l=i=>e.jsx("div",{style:{width:320},children:e.jsx(t,{...i})}),n=l.bind({});n.args={};const r=l.bind({});r.args={direction:"horizontal"};r.parameters={docs:{description:{story:"Divider theo chiều ngang (mặc định)."}}};const s=i=>e.jsx("div",{style:{height:120,display:"flex"},children:e.jsx(t,{...i,direction:"vertical"})});s.parameters={docs:{description:{story:"Divider theo chiều dọc — đặt trong container có chiều cao."}}};const a=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,width:320},children:["tiny","sm","lg","2xl"].map(i=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:12,marginBottom:4},children:['sideOffset="',i,'"']}),e.jsx(t,{sideOffset:i})]},i))});a.parameters={docs:{description:{story:"Thay đổi padding ngang của Divider qua `sideOffset`."}}};const d=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,width:320},children:["tiny","sm","lg","2xl"].map(i=>e.jsxs("div",{style:{background:"#f5f5f5"},children:[e.jsxs("div",{style:{fontSize:12},children:['headpointOffset="',i,'"']}),e.jsx(t,{headpointOffset:i})]},i))});d.parameters={docs:{description:{story:"Thay đổi padding dọc của Divider qua `headpointOffset`."}}};const o=l.bind({});o.args={flip:!0};o.parameters={docs:{description:{story:"Lật nét vẽ của Divider — hữu ích khi đặt Divider ở mép trên của container có clip content."}}};const c=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:320},children:[e.jsx(t,{color:"com/alert-banner/theme/divider/color-stroke/info"}),e.jsx(t,{color:"com/alert-banner/theme/divider/color-stroke/positive"}),e.jsx(t,{color:"com/alert-banner/theme/divider/color-stroke/negative"}),e.jsx(t,{color:"com/alert-banner/theme/divider/color-stroke/caution"})]});c.parameters={docs:{description:{story:"Đổi màu nét vẽ Divider bằng token màu trong design-system."}}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <FISDivider {...args} />
  </div>`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,g,u;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <FISDivider {...args} />
  </div>`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,x,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  height: 120,
  display: "flex"
}}>
    <FISDivider {...args} direction="vertical" />
  </div>`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var S,O,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: 320
}}>
    {(["tiny", "sm", "lg", "2xl"] as const).map(size => <div key={size}>
        <div style={{
      fontSize: 12,
      marginBottom: 4
    }}>sideOffset="{size}"</div>
        <FISDivider sideOffset={size} />
      </div>)}
  </div>`,...(b=(O=a.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var j,k,F;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 8,
  width: 320
}}>
    {(["tiny", "sm", "lg", "2xl"] as const).map(size => <div key={size} style={{
    background: "#f5f5f5"
  }}>
        <div style={{
      fontSize: 12
    }}>headpointOffset="{size}"</div>
        <FISDivider headpointOffset={size} />
      </div>)}
  </div>`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var z,I,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <FISDivider {...args} />
  </div>`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var T,B,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: 320
}}>
    <FISDivider color="com/alert-banner/theme/divider/color-stroke/info" />
    <FISDivider color="com/alert-banner/theme/divider/color-stroke/positive" />
    <FISDivider color="com/alert-banner/theme/divider/color-stroke/negative" />
    <FISDivider color="com/alert-banner/theme/divider/color-stroke/caution" />
  </div>`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const L=["Default","Horizontal","Vertical","WithSideOffset","WithHeadpointOffset","Flip","CustomColor"];export{c as CustomColor,n as Default,o as Flip,r as Horizontal,s as Vertical,d as WithHeadpointOffset,a as WithSideOffset,L as __namedExportsOrder,q as default};
