import{j as t}from"./jsx-runtime-47c18db8.js";import{F as o}from"./index-28483a77.js";import{B as e}from"./button-6bebafc6.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./index-94ce6d4e.js";import"./index-d16835b1.js";import"./AntdIcon-b5d0c52f.js";import"./index-35a52d1c.js";import"./roundedArrow-09d3ee87.js";import"./UnstableContext-a2e933a8.js";import"./useSize-a68aa0f1.js";import"./useMergedState-1b150724.js";import"./motion-58c6f938.js";const G={title:"Components/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:"A customized Tooltip component that extends Ant Design Tooltip with additional styling options and custom content structures."}}},tags:["autodocs"],argTypes:{variant:{description:"Sets the color theme of the tooltip",control:"radio",options:["primary","secondary"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},title:{description:"Content displayed inside the tooltip. Can be a simple React node or a structured object with label, description and link",control:"object",table:{type:{summary:"TooltipTitleCustom | React.ReactNode"}}},placement:{description:"Position of the tooltip relative to the target element",control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],table:{type:{summary:"string"},defaultValue:{summary:"top"}}},size:{description:"Size of the tooltip",control:"select",options:["md","lg"],table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},r={args:{title:"This is a basic tooltip",variant:"primary",children:t.jsx(e,{children:"Hover Me"})}},a={args:{title:"Primary themed tooltip",variant:"primary",children:t.jsx(e,{type:"primary",children:"Primary Theme"})}},n={args:{title:"Secondary themed tooltip",variant:"secondary",children:t.jsx(e,{children:"Secondary Theme"})}},l={args:{title:{label:"Custom Title Structure",description:"This tooltip uses the TooltipTitleCustom structure to display more complex content.",link:"https://example.com"},variant:"primary",children:t.jsx(e,{children:"Custom Structure"})},parameters:{docs:{description:{story:"When providing a structured object as the title, the tooltip will render a more complex UI with label, optional description, and optional link."}}}},s={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(o,{title:"Top Left",placement:"topLeft",variant:"primary",children:t.jsx(e,{children:"TL"})}),t.jsx(o,{title:"Top",placement:"top",variant:"primary",children:t.jsx(e,{children:"Top"})}),t.jsx(o,{title:"Top Right",placement:"topRight",variant:"primary",children:t.jsx(e,{children:"TR"})})]}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(o,{title:"Left",placement:"left",variant:"primary",children:t.jsx(e,{children:"Left"})}),t.jsx(o,{title:"Right",placement:"right",variant:"primary",children:t.jsx(e,{children:"Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(o,{title:"Bottom Left",placement:"bottomLeft",variant:"primary",children:t.jsx(e,{children:"BL"})}),t.jsx(o,{title:"Bottom",placement:"bottom",variant:"primary",children:t.jsx(e,{children:"Bottom"})}),t.jsx(o,{title:"Bottom Right",placement:"bottomRight",variant:"primary",children:t.jsx(e,{children:"BR"})})]})]}),parameters:{docs:{description:{story:"Tooltips can be positioned in various directions relative to the target element."}}}},p={args:{title:{label:"Feature Information",description:"This feature helps you manage your workflow efficiently.",link:"https://example.com/learn-more"},variant:"primary",children:t.jsx(e,{children:"Full Custom Example"})},parameters:{docs:{description:{story:"Example showing the complete custom title implementation with all optional fields."}}}},m={render:()=>{const i={label:"Important Information",description:"This is additional context about the feature.",link:"https://example.com/learn-more"};return i.label,i.description&&i.description,i.link&&i.link,t.jsx(o,{title:i,variant:"primary",children:t.jsx(e,{children:"Hover for Complete Example"})})},parameters:{docs:{description:{story:"This example shows how the custom title structure should be rendered in the component implementation. The empty div in the original component should be replaced with this implementation."}}}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'This is a basic tooltip',
    variant: 'primary',
    children: <Button>Hover Me</Button>
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,y,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Primary themed tooltip',
    variant: 'primary',
    children: <Button type="primary">Primary Theme</Button>
  }
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,g,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Secondary themed tooltip',
    variant: 'secondary',
    children: <Button>Secondary Theme</Button>
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,B,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: {
      label: 'Custom Title Structure',
      description: 'This tooltip uses the TooltipTitleCustom structure to display more complex content.',
      link: 'https://example.com'
    } as TooltipTitleCustom,
    variant: 'primary',
    children: <Button>Custom Structure</Button>
  },
  parameters: {
    docs: {
      description: {
        story: 'When providing a structured object as the title, the tooltip will render a more complex UI with label, optional description, and optional link.'
      }
    }
  }
}`,...(b=(B=l.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var S,j,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      gap: '10px'
    }}>
        <FISTooltip title="Top Left" placement="topLeft" variant="primary">
          <Button>TL</Button>
        </FISTooltip>
        <FISTooltip title="Top" placement="top" variant="primary">
          <Button>Top</Button>
        </FISTooltip>
        <FISTooltip title="Top Right" placement="topRight" variant="primary">
          <Button>TR</Button>
        </FISTooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: '10px'
    }}>
        <FISTooltip title="Left" placement="left" variant="primary">
          <Button>Left</Button>
        </FISTooltip>
        <FISTooltip title="Right" placement="right" variant="primary">
          <Button>Right</Button>
        </FISTooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: '10px'
    }}>
        <FISTooltip title="Bottom Left" placement="bottomLeft" variant="primary">
          <Button>BL</Button>
        </FISTooltip>
        <FISTooltip title="Bottom" placement="bottom" variant="primary">
          <Button>Bottom</Button>
        </FISTooltip>
        <FISTooltip title="Bottom Right" placement="bottomRight" variant="primary">
          <Button>BR</Button>
        </FISTooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be positioned in various directions relative to the target element.'
      }
    }
  }
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,F,R;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: {
      label: 'Feature Information',
      description: 'This feature helps you manage your workflow efficiently.',
      link: 'https://example.com/learn-more'
    } as TooltipTitleCustom,
    variant: 'primary',
    children: <Button>Full Custom Example</Button>
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the complete custom title implementation with all optional fields.'
      }
    }
  }
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var w,L,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const customTitle: TooltipTitleCustom = {
      label: 'Important Information',
      description: 'This is additional context about the feature.',
      link: 'https://example.com/learn-more'
    };

    // This demonstrates how the title div should be implemented
    const renderedTitle = <div className="tooltip-custom-content">
        <div className="tooltip-label">{customTitle.label}</div>
        {customTitle.description && <div className="tooltip-description">{customTitle.description}</div>}
        {customTitle.link && <a href={customTitle.link} className="tooltip-link" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>}
      </div>;
    return <FISTooltip title={customTitle} variant="primary">
        <Button>Hover for Complete Example</Button>
      </FISTooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows how the custom title structure should be rendered in the component implementation. The empty div in the original component should be replaced with this implementation.'
      }
    }
  }
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const J=["Basic","PrimaryTheme","SecondaryTheme","CustomTitleStructure","Placements","CompleteCustomTitle","CustomTitleImplementation"];export{r as Basic,p as CompleteCustomTitle,m as CustomTitleImplementation,l as CustomTitleStructure,s as Placements,a as PrimaryTheme,n as SecondaryTheme,J as __namedExportsOrder,G as default};
