import{j as e}from"./jsx-runtime-47c18db8.js";import{F as Q}from"./index-4280f93c.js";import{C as n}from"./LineArrowsUp-4acd88f0.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./collapse-8e27e3c5.js";import"./AntdIcon-b5d0c52f.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./useMergedState-1b150724.js";import"./useSize-a68aa0f1.js";import"./KeyCode-6413d982.js";import"./pickAttrs-551e8cfe.js";import"./motion-58c6f938.js";import"./index-1c88f37d.js";import"./index-63636042.js";import"./index-6b2c958e.js";const pe={title:"Components/Collapse",component:Q,tags:["autodocs"],argTypes:{collapseSize:{control:"radio",options:["sm","md","lg"],description:"Kích thước Collapse"},expandIconPosition:{control:"radio",options:["start","end"],description:"Vị trí icon expand"},collapsible:{control:"radio",options:["header","icon","disabled"],description:"Kiểu tương tác với Collapse"},items:{control:"object",description:"Danh sách items"},accordion:{control:"boolean",description:"Chế độ accordion (chỉ mở một panel tại một thời điểm)"},defaultActiveKey:{control:"object",description:"Các panel được mở mặc định"}},parameters:{docs:{description:{component:`
FISCollapse là một component dựa trên Ant Design Collapse, được tùy chỉnh để phù hợp với thiết kế hệ thống.

## Tính năng chính
- Hỗ trợ nhiều kích thước (sm, md, lg)
- Tùy chỉnh vị trí icon mở rộng (start, end)
- Nhiều kiểu tương tác (header, icon, disabled)
- Hỗ trợ chế độ accordion
- Tùy chỉnh header với customHeader
- Hỗ trợ badge và icon bên trái

## Cách sử dụng
\`\`\`jsx
import FISCollapse from 'components/Collapse';

const items = [
  {
    key: '1',
    title: 'Panel 1',
    description: 'Mô tả panel 1',
    badge: 'New',
    leftIcon: <Icon />,
    children: <p>Nội dung panel 1</p>,
  },
  {
    key: '2',
    title: 'Panel 2',
    description: 'Mô tả panel 2',
    badge: 'Hot',
    leftIcon: <Icon />,
    children: <p>Nội dung panel 2</p>,
  },
];

<FISCollapse
  collapseSize="sm"
  expandIconPosition="end"
  collapsible="header"
  accordion={true}
  items={items}
/>
\`\`\`
        `}}}},t=U=>e.jsx("div",{style:{width:"400px"},children:e.jsx(Q,{...U})}),c=t.bind({});c.args={collapseSize:"sm",expandIconPosition:"end",collapsible:"header",accordion:!0,items:[{key:"1",title:"Title accordion",description:"Sub-title",badge:"New",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel 1"}),customHeader:e.jsx("p",{children:"Custom panel 1"})},{key:"2",title:"Title accordion",description:"Sub-title",badge:"Hot",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel 2"})}]};c.parameters={docs:{description:{story:`
Story mặc định của FISCollapse với chế độ accordion. Trong chế độ này, chỉ một panel có thể được mở tại một thời điểm.
Khi người dùng mở một panel, các panel khác sẽ tự động đóng lại.

### Các thuộc tính được sử dụng:
- \`collapseSize="sm"\`: Kích thước nhỏ
- \`expandIconPosition="end"\`: Icon mở rộng ở cuối
- \`collapsible="header"\`: Có thể click vào toàn bộ header để mở/đóng
- \`accordion={true}\`: Chế độ accordion (chỉ mở một panel tại một thời điểm)
      `}}};const i=t.bind({});i.args={...c.args,accordion:!1,items:[{key:"1",title:"Panel 1",description:"Có thể mở nhiều panel cùng lúc",badge:"Info",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel 1"})},{key:"2",title:"Panel 2",description:"Panel thứ hai",badge:"Info",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel 2"})},{key:"3",title:"Panel 3",description:"Panel thứ ba",badge:"Info",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel 3"})}]};i.parameters={docs:{description:{story:`
Story minh họa chế độ không sử dụng accordion. Trong chế độ này, người dùng có thể mở nhiều panel cùng một lúc.
Mỗi panel hoạt động độc lập với các panel khác.

### Các thuộc tính được sử dụng:
- \`accordion={false}\`: Tắt chế độ accordion, cho phép mở nhiều panel cùng lúc
- \`items\`: Danh sách các panel, mỗi panel có thể được mở/đóng độc lập
      `}}};const o=t.bind({});o.args={...c.args,expandIconPosition:"start",items:[{key:"1",title:"Icon ở đầu",description:"Icon mở rộng nằm ở đầu panel",badge:"Demo",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel với icon ở đầu"})},{key:"2",title:"Icon ở đầu",description:"Icon mở rộng nằm ở đầu panel",badge:"Demo",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel với icon ở đầu"})}]};o.parameters={docs:{description:{story:`
Story minh họa cách đặt icon mở rộng ở đầu panel thay vì cuối panel.
Điều này có thể hữu ích khi bạn muốn tạo một giao diện nhất quán với các component khác có icon ở đầu.

### Các thuộc tính được sử dụng:
- \`expandIconPosition="start"\`: Đặt icon mở rộng ở đầu panel
      `}}};const a=t.bind({});a.args={...c.args,collapseSize:"lg",items:[{key:"1",title:"Kích thước lớn",description:"Panel với kích thước lớn",badge:"Large",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel với kích thước lớn"})},{key:"2",title:"Kích thước lớn",description:"Panel với kích thước lớn",badge:"Large",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Nội dung panel với kích thước lớn"})}]};a.parameters={docs:{description:{story:`
Story minh họa cách sử dụng kích thước lớn cho Collapse.
Kích thước lớn thường được sử dụng khi bạn muốn nhấn mạnh nội dung hoặc khi làm việc với màn hình lớn.

### Các thuộc tính được sử dụng:
- \`collapseSize="lg"\`: Đặt kích thước lớn cho Collapse
      `}}};const s=t.bind({});s.args={...c.args,defaultActiveKey:["1"],items:[{key:"1",title:"Panel mở sẵn",description:"Panel được mở mặc định",badge:"Default",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel này sẽ được mở sẵn khi component được render"})},{key:"2",title:"Panel đóng sẵn",description:"Panel đóng mặc định",badge:"Default",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel này sẽ đóng sẵn khi component được render"})}]};s.parameters={docs:{description:{story:`
Story minh họa cách thiết lập panel mở sẵn bằng thuộc tính \`defaultActiveKey\`.
Thuộc tính này cho phép bạn chỉ định panel nào sẽ được mở khi component được render lần đầu tiên.

### Các thuộc tính được sử dụng:
- \`defaultActiveKey={["1"]}\`: Thiết lập panel có key "1" được mở sẵn
      `}}};const r=t.bind({});r.args={...c.args,collapsible:"header",items:[{key:"1",title:"Click vào header để mở/đóng",description:"Toàn bộ header có thể click",badge:"Header",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel có thể mở/đóng bằng cách click vào bất kỳ đâu trên header"})},{key:"2",title:"Click vào header để mở/đóng",description:"Toàn bộ header có thể click",badge:"Header",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel có thể mở/đóng bằng cách click vào bất kỳ đâu trên header"})}]};r.parameters={docs:{description:{story:`
Story minh họa chế độ mặc định \`collapsible="header"\`.
Trong chế độ này, người dùng có thể click vào bất kỳ đâu trên header để mở/đóng panel.

### Các thuộc tính được sử dụng:
- \`collapsible="header"\`: Cho phép click vào toàn bộ header để mở/đóng panel
      `}}};const l=t.bind({});l.args={...c.args,collapsible:"icon",items:[{key:"1",title:"Chỉ click vào icon để mở/đóng",description:"Chỉ icon mũi tên có thể click",badge:"Icon",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel chỉ có thể mở/đóng bằng cách click vào icon mũi tên"})},{key:"2",title:"Chỉ click vào icon để mở/đóng",description:"Chỉ icon mũi tên có thể click",badge:"Icon",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel chỉ có thể mở/đóng bằng cách click vào icon mũi tên"})}]};l.parameters={docs:{description:{story:`
Story minh họa chế độ \`collapsible="icon"\`.
Trong chế độ này, người dùng chỉ có thể click vào icon mũi tên để mở/đóng panel.

### Các thuộc tính được sử dụng:
- \`collapsible="icon"\`: Chỉ cho phép click vào icon mũi tên để mở/đóng panel
      `}}};const d=t.bind({});d.args={...c.args,collapsible:"disabled",items:[{key:"1",title:"Panel bị vô hiệu hóa",description:"Không thể mở/đóng panel",badge:"Disabled",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel này không thể mở/đóng, tất cả các tương tác đều bị vô hiệu hóa"})},{key:"2",title:"Panel bị vô hiệu hóa",description:"Không thể mở/đóng panel",badge:"Disabled",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel này không thể mở/đóng, tất cả các tương tác đều bị vô hiệu hóa"})}]};d.parameters={docs:{description:{story:`
Story minh họa chế độ \`collapsible="disabled"\`.
Trong chế độ này, tất cả các tương tác với panel đều bị vô hiệu hóa.

### Các thuộc tính được sử dụng:
- \`collapsible="disabled"\`: Vô hiệu hóa tất cả các tương tác với panel
      `}}};const h=t.bind({});h.args={...c.args,items:[{key:"1",title:"Panel với custom header",description:"Sử dụng customHeader để tùy chỉnh header",badge:"Custom",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel này sử dụng custom header"}),customHeader:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(n,{}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:0},children:"Custom Header"}),e.jsx("p",{style:{margin:0,fontSize:"12px",color:"#666"},children:"Đây là một custom header được tùy chỉnh hoàn toàn"})]})]})},{key:"2",title:"Panel thông thường",description:"Panel không sử dụng custom header",badge:"Default",leftIcon:e.jsx(n,{}),children:e.jsx("p",{children:"Panel này sử dụng header mặc định"})}]};h.parameters={docs:{description:{story:`
Story minh họa cách sử dụng thuộc tính \`customHeader\` để tùy chỉnh hoàn toàn header của panel.
Panel đầu tiên sử dụng custom header, trong khi panel thứ hai sử dụng header mặc định.

### Các thuộc tính được sử dụng:
- \`customHeader\`: Tùy chỉnh hoàn toàn header của panel
      `}}};const p=t.bind({});p.args={...c.args,accordion:!0,items:[{key:"1",title:"Panel 1",description:"Khi mở panel này, các panel khác sẽ tự động đóng",badge:"Accordion",leftIcon:e.jsx(n,{}),children:e.jsxs("div",{children:[e.jsx("p",{children:"Panel 1 - Chế độ accordion"}),e.jsx("p",{children:"Khi bạn mở panel này, panel 2 sẽ tự động đóng lại"})]})},{key:"2",title:"Panel 2",description:"Khi mở panel này, panel 1 sẽ tự động đóng",badge:"Accordion",leftIcon:e.jsx(n,{}),children:e.jsxs("div",{children:[e.jsx("p",{children:"Panel 2 - Chế độ accordion"}),e.jsx("p",{children:"Khi bạn mở panel này, panel 1 sẽ tự động đóng lại"})]})}]};p.parameters={docs:{description:{story:`
Story minh họa chế độ accordion của Collapse.
Trong chế độ này, chỉ một panel có thể được mở tại một thời điểm.
Khi người dùng mở một panel, các panel khác sẽ tự động đóng lại.

### Các thuộc tính được sử dụng:
- \`accordion={true}\`: Bật chế độ accordion (chỉ mở một panel tại một thời điểm)
      `}}};const m=t.bind({});m.args={...c.args,accordion:!1,items:[{key:"1",title:"Panel 1",description:"Có thể mở cùng lúc với panel khác",badge:"Multiple",leftIcon:e.jsx(n,{}),children:e.jsxs("div",{children:[e.jsx("p",{children:"Panel 1 - Không có chế độ accordion"}),e.jsx("p",{children:"Bạn có thể mở panel này cùng lúc với panel 2"})]})},{key:"2",title:"Panel 2",description:"Có thể mở cùng lúc với panel khác",badge:"Multiple",leftIcon:e.jsx(n,{}),children:e.jsxs("div",{children:[e.jsx("p",{children:"Panel 2 - Không có chế độ accordion"}),e.jsx("p",{children:"Bạn có thể mở panel này cùng lúc với panel 1"})]})}]};m.parameters={docs:{description:{story:`
Story minh họa chế độ không sử dụng accordion.
Trong chế độ này, người dùng có thể mở nhiều panel cùng một lúc.
Mỗi panel hoạt động độc lập với các panel khác.

### Các thuộc tính được sử dụng:
- \`accordion={false}\`: Tắt chế độ accordion, cho phép mở nhiều panel cùng lúc
      `}}};var g,u,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(y=(u=c.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,x,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var k,C,j;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,S,f;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var P,K,T;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(T=(K=s.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var H,F,D;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(D=(F=r.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var N,w,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var M,z,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var B,_,E;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var V,q,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(O=(q=p.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,G,J;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <FISCollapse {...args} />
  </div>`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const me=["Default","MultiplePanels","StartIconPosition","LargeSize","DefaultActiveKey","CollapsibleHeader","CollapsibleIcon","CollapsibleDisabled","CustomHeader","AccordionMode","NonAccordionMode"];export{p as AccordionMode,d as CollapsibleDisabled,r as CollapsibleHeader,l as CollapsibleIcon,h as CustomHeader,c as Default,s as DefaultActiveKey,a as LargeSize,i as MultiplePanels,m as NonAccordionMode,o as StartIconPosition,me as __namedExportsOrder,pe as default};
