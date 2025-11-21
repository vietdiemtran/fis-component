import{j as e}from"./jsx-runtime-47c18db8.js";import{F as W}from"./index-fcfadd25.js";import{r as I}from"./index-d806aa85.js";import"./getTheme-624682de.js";const C={title:"Components/switch",component:W,tags:["autodocs"],argTypes:{isOn:{control:"boolean",description:"Current state of the switch"},onToggle:{description:"Function called when switch is clicked"},size:{control:"select",options:["sm","md"],description:"Size of the switch component"},disabled:{control:"boolean",description:"Whether the switch is disabled"},label:{control:"text",description:"Main label text"},subLabel:{control:"text",description:"Secondary label text"}}},s=a=>{const[c,O]=I.useState(!1);return e.jsx(W,{...a,isOn:c,onToggle:()=>O(!c)})},r={render:a=>e.jsx(s,{...a})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{size:"sm",label:"Small"}),e.jsx(s,{size:"md",label:"md"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{label:"Notifications",subLabel:"Enable push notifications"}),e.jsx(s,{label:"Dark Mode",subLabel:"Switch to dark theme",labelPosition:"left"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{label:"Disabled Off",subLabel:"This switch is disabled",disabled:!0,isOn:!1}),e.jsx(s,{label:"Disabled On",subLabel:"This switch is disabled",disabled:!0,isOn:!0})]})},o={args:{label:"Interactive FISSwitch",subLabel:"Try changing the controls",size:"md",disabled:!1},render:a=>e.jsx(s,{...a})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{label:"Dark Mode",subLabel:"Switch between light and dark theme",size:"md"}),e.jsx(s,{label:"Notifications",subLabel:"Receive push notifications",size:"md"}),e.jsx(s,{label:"Auto-save",subLabel:"Save changes automatically",size:"md"}),e.jsx(s,{label:"Sound",subLabel:"Enable sound effects",size:"md"})]})};var d,p,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <ToggleWrapper size="sm" label="Small" />
      <ToggleWrapper size="md" label="md" />
    </div>
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <ToggleWrapper label="Notifications" subLabel="Enable push notifications" />
      <ToggleWrapper label="Dark Mode" subLabel="Switch to dark theme" labelPosition="left" />
    </div>
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,v,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <ToggleWrapper label="Disabled Off" subLabel="This switch is disabled" disabled={true} isOn={false} />
      <ToggleWrapper label="Disabled On" subLabel="This switch is disabled" disabled={true} isOn={true} />
    </div>
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,L,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Interactive FISSwitch',
    subLabel: 'Try changing the controls',
    size: 'md',
    disabled: false
  },
  render: args => <ToggleWrapper {...args} />
}`,...(j=(L=o.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var w,z,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <ToggleWrapper label="Dark Mode" subLabel="Switch between light and dark theme" size="md" />
      <ToggleWrapper label="Notifications" subLabel="Receive push notifications" size="md" />
      <ToggleWrapper label="Auto-save" subLabel="Save changes automatically" size="md" />
      <ToggleWrapper label="Sound" subLabel="Enable sound effects" size="md" />
    </div>
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const N=["Basic","Sizes","WithLabels","Disabled","Interactive","UseCases"];export{r as Basic,t as Disabled,o as Interactive,l as Sizes,n as UseCases,i as WithLabels,N as __namedExportsOrder,C as default};
