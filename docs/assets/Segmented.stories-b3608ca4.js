import{j as e}from"./jsx-runtime-47c18db8.js";import{r as v}from"./index-d806aa85.js";import{F as a,S as t}from"./index-27dd3f66.js";import{F as x}from"./DeleteIcon-619c489d.js";import"./styled-components.browser.esm-c9db8114.js";import"./getTheme-fd88fed7.js";const k={title:"Components/Segmenteds",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Controls the size of the Segmenteds",defaultValue:"md"},active:{control:"text",description:"Key of the active Segmented (controlled component)"},defaultActive:{control:"text",description:"Initial active Segmented key (uncontrolled component)"},onChange:{action:"changed",description:"Callback when Segmented is clicked"},className:{control:"text",description:"Additional class names for the Segmenteds container"},contentClassName:{control:"text",description:"Additional class names for the content area"},fullWidth:{control:"boolean",description:"If true, the Segmented Control will stretch to full width"}}},C=i=>e.jsx("div",{style:{width:"600px"},children:e.jsxs(a,{...i,children:[e.jsx(t,{startIcon:e.jsx(x,{}),value:"Segmented1",children:"Content of Segmented Pane 1"}),e.jsx(t,{title:"Segmented 2",value:"Segmented2",children:"Content of Segmented Pane 2"}),e.jsx(t,{title:"Segmented 3",value:"Segmented3",children:"Content of Segmented Pane 3"}),e.jsx(t,{title:"Segmented 4",value:"Segmented4",disabled:!0,children:"Content of Segmented Pane 4"})]})}),d={render:C,args:{size:"sm",defaultActive:"Segmented1"}},o={render:function(s){const[m,n]=v.useState("Segmented1"),u=r=>{n(r),s.onChange&&s.onChange(r)};return e.jsxs("div",{style:{width:"600px"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("p",{children:["Currently active Segmented: ",e.jsx("strong",{children:m})]}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsx("button",{onClick:()=>n("Segmented1"),style:{marginRight:"8px"},children:"Activate Segmented 1"}),e.jsx("button",{onClick:()=>n("Segmented2"),style:{marginRight:"8px"},children:"Activate Segmented 2"}),e.jsx("button",{onClick:()=>n("Segmented3"),children:"Activate Segmented 3"})]})]}),e.jsxs(a,{...s,active:m,onChange:u,children:[e.jsx(t,{title:"Segmented 1",value:"Segmented1",children:"Content of Segmented Pane 1"}),e.jsx(t,{title:"Segmented 2",value:"Segmented2",children:"Content of Segmented Pane 2"}),e.jsx(t,{title:"Segmented 3",value:"Segmented3",children:"Content of Segmented Pane 3"})]})]})},args:{size:"md"}};var l,g,c;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm",
    defaultActive: "Segmented1"
  }
}`,...(c=(g=d.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var S,p,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function ControlledSegmentedsStory(args) {
    const [activeSegmented, setActiveSegmented] = useState("Segmented1");
    const handleChange = (key: string) => {
      setActiveSegmented(key);
      args.onChange && args.onChange(key);
    };
    return <div style={{
      width: "600px"
    }}>
        <div style={{
        marginBottom: "16px"
      }}>
          <p>
            Currently active Segmented: <strong>{activeSegmented}</strong>
          </p>
          <div style={{
          marginTop: "8px"
        }}>
            <button onClick={() => setActiveSegmented("Segmented1")} style={{
            marginRight: "8px"
          }}>
              Activate Segmented 1
            </button>
            <button onClick={() => setActiveSegmented("Segmented2")} style={{
            marginRight: "8px"
          }}>
              Activate Segmented 2
            </button>
            <button onClick={() => setActiveSegmented("Segmented3")}>
              Activate Segmented 3
            </button>
          </div>
        </div>
        <Segmenteds {...args} active={activeSegmented} onChange={handleChange}>
          <SegmentedPanelItem title="Segmented 1" value="Segmented1">
            Content of Segmented Pane 1
          </SegmentedPanelItem>
          <SegmentedPanelItem title="Segmented 2" value="Segmented2">
            Content of Segmented Pane 2
          </SegmentedPanelItem>
          <SegmentedPanelItem title="Segmented 3" value="Segmented3">
            Content of Segmented Pane 3
          </SegmentedPanelItem>
        </Segmenteds>
      </div>;
  },
  args: {
    size: "md"
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const I=["Default","ControlledSegmenteds"];export{o as ControlledSegmenteds,d as Default,I as __namedExportsOrder,k as default};
