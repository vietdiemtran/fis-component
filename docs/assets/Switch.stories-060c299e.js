import{j as i}from"./jsx-runtime-e7d94ccb.js";import{r as N}from"./index-981f9478.js";import{a as o,g as e,r as t}from"./getTheme-9564f801.js";import{F as Y}from"./index-00a7ff96.js";import"./index-df9a4235.js";import"./index-66039438.js";const G=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/switch/content/vertical-gap")};
`,M=o.span`
  color: ${e("com/switch/content/primary/label/color-text")};

  ${s=>{switch(s.$size){case"sm":return t`
          ${e("Label/XS")}
        `;case"md":return t`
          ${e("Label/Sm")}
        `}}}
`,P=o.span`
  color: ${e("com/switch/content/primary/description/color-text")};
  ${e("Paragraph/XS")}
  cursor: inherit;
`,b=o.div`
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
`,g=o.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${e("com/switch/item/corner-radius")};

  box-shadow: 0px 1px 0px ${e("com/switch/item/off/shape/color-stroke")};

  ${s=>s.$isOn?t`
          right: ${e("com/switch/item/size-md/left-padding")};
          background-color: ${e("com/switch/item/on/shape/color-shape")};
        `:t`
          left: ${e("com/switch/item/size-md/left-padding")};
          background-color: ${e("com/switch/item/off/shape/color-shape")};
        `}
`,H=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e("com/input/vertical-gap")};
  width: fit-content;
`,J=o.div`
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
          ${b} {
            width: ${e("sem/dimension/size/component/xs")};
            height: ${e("sem/dimension/size/icon/xs")};
          }

          ${g} {
            width: ${s.$isOn?e("com/switch/item/size-sm/on/shape/width"):e("com/switch/item/size-sm/off/shape/width")};
            height: ${s.$isOn?e("com/switch/item/size-sm/on/shape/width"):e("com/switch/item/size-sm/off/shape/width")};
          }
        `;case"md":return t`
          ${b} {
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

      ${b} {
        background-color: ${e("com/switch/disable/background-color")} !important;
        border: ${e("com/switch/item/stroke-width")} solid
          ${e("com/switch/disable/color-stroke")} !important;
      }

      ${M} {
        color: ${e("com/switch/disable/label/color-text")};
      }

      ${P} {
        color: ${e("com/switch/disable/description/color-text")};
      }
    `}
`,n=N.forwardRef(({isOn:s,disabled:l=!1,size:r="md",label:f,subLabel:w,onToggle:R,textLabel:x="",required:A,iconLabel:$,onClickIconLabel:U,...B},X)=>{const K=f||w?i.jsxs(G,{children:[f&&i.jsx(M,{$size:r,children:f}),w&&i.jsx(P,{$size:r,children:w})]}):null;return i.jsxs(H,{...B,onClick:()=>!l&&R(),children:[(x||$)&&i.jsx(Y,{textLabel:x,required:A,iconLabel:$,onClickIconLabel:U}),i.jsxs(J,{ref:X,$size:r,$isOn:s,$disabled:l,children:[i.jsx(b,{$isOn:s,children:i.jsx(g,{$isOn:s,$size:r})}),K]})]})});n.displayName="FISSwitch";try{n.displayName="FISSwitch",n.__docgenInfo={description:"",displayName:"FISSwitch",props:{isOn:{defaultValue:null,description:"The toggle state.\n- `true`: The toggle is ON.\n- `false`: The toggle is OFF.",name:"isOn",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the toggle is disabled.\n- `true`: The toggle is disabled and cannot be interacted with.\n- `false` or not provided: The toggle is enabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:'The size of the toggle.\n- Possible values are defined in `SwitchSize`.\n- Example: `"small" | "medium" | "large"`',name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:null,description:`The main label displayed next to the toggle.
- If not provided, the toggle will be displayed without a label.`,name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:'The toggle\'s visual variant (styling type).\n- Possible values are defined in `SwitchVariant`.\n- Example: `"primary" | "secondary" | "outline"`',name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},subLabel:{defaultValue:null,description:`A secondary label displayed below the toggle.
- Typically used for additional descriptions or extra information.`,name:"subLabel",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"Callback function triggered when the toggle is clicked.\n- Takes no parameters.\n- Used to update the `isOn` state.",name:"onToggle",required:!0,type:{name:"() => void"}},textLabel:{defaultValue:{value:""},description:"",name:"textLabel",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},iconLabel:{defaultValue:null,description:"",name:"iconLabel",required:!1,type:{name:"ReactNode"}},onClickIconLabel:{defaultValue:null,description:"",name:"onClickIconLabel",required:!1,type:{name:"(() => void)"}}}}}catch{}const te={title:"Components/Switch",component:n,tags:["autodocs"],argTypes:{isOn:{control:"boolean",description:"Current state of the switch"},onToggle:{description:"Function called when switch is clicked"},size:{control:"select",options:["sm","md"],description:"Size of the switch component"},disabled:{control:"boolean",description:"Whether the switch is disabled"},label:{control:"text",description:"Main label text"},subLabel:{control:"text",description:"Secondary label text"}}},a=s=>{const[l,r]=N.useState(!1);return i.jsx(n,{...s,isOn:l,onToggle:()=>r(!l)})},c={render:s=>i.jsx(a,{...s}),parameters:{docs:{source:{code:"<FISSwitch isOn={false} onToggle={() => {}} />"}}}},d={render:()=>i.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[i.jsx(a,{size:"sm",label:"Small"}),i.jsx(a,{size:"md",label:"md"})]})},m={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(a,{label:"Notifications",subLabel:"Enable push notifications"}),i.jsx(a,{label:"Dark Mode",subLabel:"Switch to dark theme",labelPosition:"left"})]})},p={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(a,{label:"Disabled Off",subLabel:"This switch is disabled",disabled:!0,isOn:!1}),i.jsx(a,{label:"Disabled On",subLabel:"This switch is disabled",disabled:!0,isOn:!0})]})},u={args:{label:"Interactive FISSwitch",subLabel:"Try changing the controls",size:"md",disabled:!1},render:s=>i.jsx(a,{...s})},h={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx(a,{label:"Dark Mode",subLabel:"Switch between light and dark theme",size:"md"}),i.jsx(a,{label:"Notifications",subLabel:"Receive push notifications",size:"md"}),i.jsx(a,{label:"Auto-save",subLabel:"Save changes automatically",size:"md"}),i.jsx(a,{label:"Sound",subLabel:"Enable sound effects",size:"md"})]})};var v,S,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`<FISSwitch isOn={false} onToggle={() => {}} />\`
      }
    }
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var z,T,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <ToggleWrapper size="sm" label="Small" />
      <ToggleWrapper size="md" label="md" />
    </div>
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var L,j,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <ToggleWrapper label="Notifications" subLabel="Enable push notifications" />
      <ToggleWrapper label="Dark Mode" subLabel="Switch to dark theme" labelPosition="left" />
    </div>
}`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var D,I,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <ToggleWrapper label="Disabled Off" subLabel="This switch is disabled" disabled={true} isOn={false} />
      <ToggleWrapper label="Disabled On" subLabel="This switch is disabled" disabled={true} isOn={true} />
    </div>
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var W,q,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Interactive FISSwitch",
    subLabel: "Try changing the controls",
    size: "md",
    disabled: false
  },
  render: args => <ToggleWrapper {...args} />
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var V,_,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <ToggleWrapper label="Dark Mode" subLabel="Switch between light and dark theme" size="md" />
      <ToggleWrapper label="Notifications" subLabel="Receive push notifications" size="md" />
      <ToggleWrapper label="Auto-save" subLabel="Save changes automatically" size="md" />
      <ToggleWrapper label="Sound" subLabel="Enable sound effects" size="md" />
    </div>
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const oe=["Basic","Sizes","WithLabels","Disabled","Interactive","UseCases"];export{c as Basic,p as Disabled,u as Interactive,d as Sizes,h as UseCases,m as WithLabels,oe as __namedExportsOrder,te as default};
