import{j as n}from"./jsx-runtime-e7d94ccb.js";import{F as a}from"./index-a182dd1a.js";import{F as d}from"./index-3ff5a592.js";import{F as t}from"./index-5ce06a62.js";import{u as x}from"./useNotification-916c5717.js";import{u as T}from"./useToast-b83de691.js";import"./index-981f9478.js";import"./getTheme-9564f801.js";import"./index-dc16328d.js";import"./context-8c759455.js";import"./index-c78bc788.js";import"./index-df9a4235.js";import"./index-66039438.js";import"./InfoSolidIcon-78d566e9.js";import"./AntdIcon-4d3cb6de.js";import"./index-f7beeda4.js";import"./index-05569730.js";import"./UnstableContext-615a9015.js";import"./CloseOutlined-adc62a60.js";import"./KeyCode-6413d982.js";import"./pickAttrs-838756c7.js";import"./useCSSVarCls-b5bb18ec.js";import"./styles-22914ca6.js";import"./ToastContext-505d0515.js";const z={title:"Components/Provider",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"FISThemeProvider bọc ứng dụng với theme, notification provider và toast provider. Story này minh hoạ cách dùng wrapper ở cấp ứng dụng."}}}},i={args:{children:n.jsxs("div",{style:{padding:24},children:[n.jsx(t,{variant:"Subheading/Lg",children:"Theme Provider Demo"}),n.jsx(t,{variant:"Paragraph/Md",children:"Đây là nội dung được bọc bởi FISThemeProvider để nhận theme và các provider chung."})]})},render:e=>n.jsx(a,{children:e.children})},o={args:{children:""},render:()=>{const e=()=>{const s=x(),f=T();return n.jsxs("div",{style:{display:"grid",gap:16,padding:24},children:[n.jsx(t,{variant:"Subheading/Lg",children:"Application Shell"}),n.jsx(t,{variant:"Paragraph/Md",children:"Provider bọc cả theme, notification và toast để app con có thể dùng ngay."}),n.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[n.jsx(d,{onClick:()=>s.notificationWithFeature({title:"Profile saved",description:"Your profile changes were saved successfully.",duration:5,variant:"positive",roundedIcon:!1,okText:"View profile",cancelText:"Close",onOk:()=>{},onCancel:()=>{}}),children:"Show Notification"}),n.jsx(d,{variant:"secondary",onClick:()=>f.showToast({title:"Draft saved",theme:"positive",type:"button",actionLabel:"Undo",actionPosition:"inline",duration:4e3}),children:"Show Toast"})]})]})};return n.jsx(a,{children:n.jsx(e,{})})}},r={args:{children:""},render:()=>{const e=()=>{const s=T();return n.jsxs("div",{style:{display:"grid",gap:16,padding:24},children:[n.jsx(t,{variant:"Subheading/Lg",children:"Toast Demo"}),n.jsx(d,{variant:"secondary",onClick:()=>s.showToast({title:"Import completed",theme:"positive",type:"button",actionLabel:"View file",actionPosition:"inline",duration:4e3}),children:"Show Toast Only"})]})};return n.jsx(a,{children:n.jsx(e,{})})}};var c,l,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      padding: 24
    }}>
        <FISText variant="Subheading/Lg">Theme Provider Demo</FISText>
        <FISText variant="Paragraph/Md">
          Đây là nội dung được bọc bởi FISThemeProvider để nhận theme và các
          provider chung.
        </FISText>
      </div>
  },
  render: args => <FISThemeProvider>
      {args.children}
    </FISThemeProvider>
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,m,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: ""
  },
  render: () => {
    const AppShell = () => {
      const notification = useNotification();
      const toast = useToast();
      return <div style={{
        display: "grid",
        gap: 16,
        padding: 24
      }}>
          <FISText variant="Subheading/Lg">Application Shell</FISText>
          <FISText variant="Paragraph/Md">
            Provider bọc cả theme, notification và toast để app con có thể dùng
            ngay.
          </FISText>
          <div style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap"
        }}>
            <FISButton onClick={() => notification.notificationWithFeature({
            title: "Profile saved",
            description: "Your profile changes were saved successfully.",
            duration: 5,
            variant: "positive",
            roundedIcon: false,
            okText: "View profile",
            cancelText: "Close",
            onOk: () => {},
            onCancel: () => {}
          })}>
              Show Notification
            </FISButton>
            <FISButton variant="secondary" onClick={() => toast.showToast({
            title: "Draft saved",
            theme: "positive",
            type: "button",
            actionLabel: "Undo",
            actionPosition: "inline",
            duration: 4000
          })}>
              Show Toast
            </FISButton>
          </div>
        </div>;
    };
    return <FISThemeProvider>
        <AppShell />
      </FISThemeProvider>;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: ""
  },
  render: () => {
    const ToastShell = () => {
      const toast = useToast();
      return <div style={{
        display: "grid",
        gap: 16,
        padding: 24
      }}>
          <FISText variant="Subheading/Lg">Toast Demo</FISText>
          <FISButton variant="secondary" onClick={() => toast.showToast({
          title: "Import completed",
          theme: "positive",
          type: "button",
          actionLabel: "View file",
          actionPosition: "inline",
          duration: 4000
        })}>
            Show Toast Only
          </FISButton>
        </div>;
    };
    return <FISThemeProvider>
        <ToastShell />
      </FISThemeProvider>;
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const G=["Default","WithAppShell","WithToastOnly"];export{i as Default,o as WithAppShell,r as WithToastOnly,G as __namedExportsOrder,z as default};
