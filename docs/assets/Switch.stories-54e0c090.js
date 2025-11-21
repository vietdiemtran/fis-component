import{j as i}from"./jsx-runtime-47c18db8.js";import{r as N}from"./index-d806aa85.js";import{d as r,g as e,l as t}from"./getTheme-c4dbdb94.js";const U=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/switch/content/vertical-gap")};
`,V=r.span`
  color: ${e("com/switch/content/primary/label/color-text")};

  ${s=>{switch(s.$size){case"sm":return t`
          ${e("Label/XS")}
        `;case"md":return t`
          ${e("Label/Sm")}
        `}}}
`,q=r.span`
  color: ${e("com/switch/content/primary/description/color-text")};
  ${e("Paragraph/XS")}
  cursor: inherit;
`,u=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${s=>s.$isOn?e("com/switch/item/on/background-color/default"):e("com/switch/item/off/background-color/default")};
  border-radius: ${e("com/switch/item/corner-radius")};
  transition: background-color 0.3s ease;
  border: ${e("com/switch/item/stroke-width")} solid
    ${e("com/switch/item/off/color-stroke/default")};
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    background-color: ${s=>s.$isOn?e("com/switch/item/on/background-color/hover"):e("com/switch/item/off/background-color/hover")};
    border-color: ${e("sem/color/stroke/neutral/sub")};
  }

  ${s=>s.$isOn&&t`
      border: none;
    `}
`,g=r.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${e("com/switch/item/corner-radius")};
  background-color: ${e("com/switch/item/off/shape/color-shape")};
  box-shadow: 0px 1px 0px ${e("com/switch/item/off/shape/color-stroke")};

  ${s=>s.$isOn?t`
          right: ${e("com/switch/item/size-md/left-padding")};
        `:t`
          left: ${e("com/switch/item/size-md/left-padding")};
        `}
`,B=r.div`
  display: flex;
  align-items: flex-start;
  gap: ${e("com/switch/horizontal-gap")};
  cursor: pointer;

  ${s=>s.$disabled&&t`
      ${g} {
        background-color: ${e("com/switch/disable/shape/color-shape")};
        box-shadow: none;
      }
    `}

  ${s=>{switch(s.$size){case"sm":return t`
          ${u} {
            width: ${e("sem/dimension/size/component/xs")};
            height: ${e("sem/dimension/size/icon/xs")};
          }

          ${g} {
            width: ${s.$isOn?e("com/switch/item/size-sm/on/shape/width"):e("com/switch/item/size-sm/off/shape/width")};
            height: ${s.$isOn?e("com/switch/item/size-sm/on/shape/width"):e("com/switch/item/size-sm/off/shape/width")};
          }
        `;case"md":return t`
          ${u} {
            width: ${e("com/switch/item/size-md/width")};
            height: ${e("com/switch/item/size-md/height")};
          }

          ${g} {
            width: ${e("com/switch/item/size-md/shape/width")};
            height: ${e("com/switch/item/size-md/shape/width")};
          }
        `}}}

  ${s=>s.$disabled&&t`
      cursor: not-allowed;

      ${u} {
        background-color: ${e("com/switch/disable/background-color")} !important;
        border: ${e("com/switch/item/stroke-width")} solid
          ${e("com/switch/disable/color-stroke")} !important;
      }

      ${V} {
        color: ${e("com/switch/disable/label/color-text")};
      }

      ${q} {
        color: ${e("com/switch/disable/description/color-text")};
      }
    `}
`,n=N.forwardRef(({isOn:s,disabled:l=!1,size:o="md",label:f,subLabel:w,onToggle:M,...P},R)=>{const A=f||w?i.jsxs(U,{children:[f&&i.jsx(V,{$size:o,children:f}),w&&i.jsx(q,{$size:o,children:w})]}):null;return i.jsxs(B,{ref:R,$size:o,$isOn:s,$disabled:l,onClick:()=>!l&&M(),...P,children:[i.jsx(u,{$isOn:s,children:i.jsx(g,{$isOn:s,$size:o})}),A]})});n.displayName="FISSwitch";try{n.displayName="FISSwitch",n.__docgenInfo={description:"",displayName:"FISSwitch",props:{isOn:{defaultValue:null,description:"The toggle state.\n- `true`: The toggle is ON.\n- `false`: The toggle is OFF.",name:"isOn",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the toggle is disabled.\n- `true`: The toggle is disabled and cannot be interacted with.\n- `false` or not provided: The toggle is enabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:'The size of the toggle.\n- Possible values are defined in `SwitchSize`.\n- Example: `"small" | "medium" | "large"`',name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:null,description:`The main label displayed next to the toggle.
- If not provided, the toggle will be displayed without a label.`,name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:'The toggle\'s visual variant (styling type).\n- Possible values are defined in `SwitchVariant`.\n- Example: `"primary" | "secondary" | "outline"`',name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:`A secondary label displayed below the toggle.
- Typically used for additional descriptions or extra information.`,name:"subLabel",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"Callback function triggered when the toggle is clicked.\n- Takes no parameters.\n- Used to update the `isOn` state.",name:"onToggle",required:!0,type:{name:"() => void"}}}}}catch{}const G={title:"Components/switch",component:n,tags:["autodocs"],argTypes:{isOn:{control:"boolean",description:"Current state of the switch"},onToggle:{description:"Function called when switch is clicked"},size:{control:"select",options:["sm","md"],description:"Size of the switch component"},disabled:{control:"boolean",description:"Whether the switch is disabled"},label:{control:"text",description:"Main label text"},subLabel:{control:"text",description:"Secondary label text"}}},a=s=>{const[l,o]=N.useState(!1);return i.jsx(n,{...s,isOn:l,onToggle:()=>o(!l)})},c={render:s=>i.jsx(a,{...s})},d={render:()=>i.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[i.jsx(a,{size:"sm",label:"Small"}),i.jsx(a,{size:"md",label:"md"})]})},m={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(a,{label:"Notifications",subLabel:"Enable push notifications"}),i.jsx(a,{label:"Dark Mode",subLabel:"Switch to dark theme",labelPosition:"left"})]})},p={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(a,{label:"Disabled Off",subLabel:"This switch is disabled",disabled:!0,isOn:!1}),i.jsx(a,{label:"Disabled On",subLabel:"This switch is disabled",disabled:!0,isOn:!0})]})},h={args:{label:"Interactive FISSwitch",subLabel:"Try changing the controls",size:"md",disabled:!1},render:s=>i.jsx(a,{...s})},b={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(a,{label:"Dark Mode",subLabel:"Switch between light and dark theme",size:"md"}),i.jsx(a,{label:"Notifications",subLabel:"Receive push notifications",size:"md"}),i.jsx(a,{label:"Auto-save",subLabel:"Save changes automatically",size:"md"}),i.jsx(a,{label:"Sound",subLabel:"Enable sound effects",size:"md"})]})};var x,$,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />
}`,...(v=($=c.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var S,y,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <ToggleWrapper size="sm" label="Small" />
      <ToggleWrapper size="md" label="md" />
    </div>
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var T,k,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <ToggleWrapper label="Notifications" subLabel="Enable push notifications" />
      <ToggleWrapper label="Dark Mode" subLabel="Switch to dark theme" labelPosition="left" />
    </div>
}`,...(L=(k=m.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var j,O,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <ToggleWrapper label="Disabled Off" subLabel="This switch is disabled" disabled={true} isOn={false} />
      <ToggleWrapper label="Disabled On" subLabel="This switch is disabled" disabled={true} isOn={true} />
    </div>
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var W,C,I;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Interactive FISSwitch',
    subLabel: 'Try changing the controls',
    size: 'md',
    disabled: false
  },
  render: args => <ToggleWrapper {...args} />
}`,...(I=(C=h.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var _,E,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const H=["Basic","Sizes","WithLabels","Disabled","Interactive","UseCases"];export{c as Basic,p as Disabled,h as Interactive,d as Sizes,b as UseCases,m as WithLabels,H as __namedExportsOrder,G as default};
