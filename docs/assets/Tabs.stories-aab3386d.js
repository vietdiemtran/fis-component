import{j as e}from"./jsx-runtime-47c18db8.js";import{r as v}from"./index-d806aa85.js";import{F as i,T as t}from"./index-46a4f406.js";import{F as x}from"./RemoveIcon-d554efb7.js";import"./getTheme-624682de.js";const P={title:"Components/Tabs",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Controls the size of the Tabs",defaultValue:"md"},active:{control:"text",description:"Key of the active Tab (controlled component)"},defaultActive:{control:"text",description:"Initial active Tab key (uncontrolled component)"},onChange:{action:"changed",description:"Callback when Tab is clicked"},className:{control:"text",description:"Additional class names for the Tabs container"},contentClassName:{control:"text",description:"Additional class names for the content area"},fullWidth:{control:"boolean",description:"If true, the Tabs will stretch to full width",defaultValue:!1}}},g=r=>e.jsx("div",{style:{width:"600px"},children:e.jsxs(i,{...r,children:[e.jsx(t,{value:"Tab1",startIcon:e.jsx(x,{}),children:"Content of Tab Pane 1"}),e.jsx(t,{title:"Tab 2",value:"Tab2",children:"Content of Tab Pane 2"}),e.jsx(t,{title:"Tab 3",value:"Tab3",children:"Content of Tab Pane 3"}),e.jsx(t,{title:"Tab 4",value:"Tab4",children:"Content of Tab Pane 4"})]})}),a={render:g,args:{size:"sm",defaultActive:"Tab1"}},o={render:function(s){const[l,n]=v.useState("Tab1"),h=c=>{n(c),s.onChange&&s.onChange(c)};return e.jsxs("div",{style:{width:"600px"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("p",{children:["Currently active Tab: ",e.jsx("strong",{children:l})]}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsx("button",{onClick:()=>n("Tab1"),style:{marginRight:"8px"},children:"Activate Tab 1"}),e.jsx("button",{onClick:()=>n("Tab2"),style:{marginRight:"8px"},children:"Activate Tab 2"}),e.jsx("button",{onClick:()=>n("Tab3"),children:"Activate Tab 3"})]})]}),e.jsxs(i,{...s,active:l,onChange:h,children:[e.jsx(t,{title:"Tab 1",value:"Tab1",children:"Content of Tab Pane 1"}),e.jsx(t,{title:"Tab 2",value:"Tab2",children:"Content of Tab Pane 2"}),e.jsx(t,{title:"Tab 3",value:"Tab3",children:"Content of Tab Pane 3"})]})]})},args:{size:"md"}};var b,T,d;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm",
    defaultActive: "Tab1"
  }
}`,...(d=(T=a.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function ControlledTabsStory(args) {
    const [activeTab, setActiveTab] = useState("Tab1");
    const handleChange = (key: string) => {
      setActiveTab(key);
      args.onChange && args.onChange(key);
    };
    return <div style={{
      width: "600px"
    }}>
        <div style={{
        marginBottom: "16px"
      }}>
          <p>
            Currently active Tab: <strong>{activeTab}</strong>
          </p>
          <div style={{
          marginTop: "8px"
        }}>
            <button onClick={() => setActiveTab("Tab1")} style={{
            marginRight: "8px"
          }}>
              Activate Tab 1
            </button>
            <button onClick={() => setActiveTab("Tab2")} style={{
            marginRight: "8px"
          }}>
              Activate Tab 2
            </button>
            <button onClick={() => setActiveTab("Tab3")}>Activate Tab 3</button>
          </div>
        </div>
        <Tabs {...args} active={activeTab} onChange={handleChange}>
          <TabPanelItem title="Tab 1" value="Tab1">
            Content of Tab Pane 1
          </TabPanelItem>
          <TabPanelItem title="Tab 2" value="Tab2">
            Content of Tab Pane 2
          </TabPanelItem>
          <TabPanelItem title="Tab 3" value="Tab3">
            Content of Tab Pane 3
          </TabPanelItem>
        </Tabs>
      </div>;
  },
  args: {
    size: "md"
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const k=["Default","ControlledTabs"];export{o as ControlledTabs,a as Default,k as __namedExportsOrder,P as default};
