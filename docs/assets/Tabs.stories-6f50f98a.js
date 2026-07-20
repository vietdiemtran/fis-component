import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r,R as k}from"./index-981f9478.js";import{a as b,g as e,r as i}from"./getTheme-9564f801.js";import{F as w}from"./InfoSolidIcon-78d566e9.js";const U=b.div`
  width: 100%;
`,Y=b.div`
  position: relative;
  display: flex;
  gap: ${e("com/tabs/horizontal-gap")};
  width: fit-content;
  border-bottom: ${e("com/tabs/underline/stroke-width")} solid
    ${e("com/tabs/underline/color-stroke")};

  ${({$size:a})=>({xs:i`
        min-height: ${e("com/tabs/item/height/size-xs")};
        ${e("Paragraph/XS")}
      `,sm:i`
        min-height: ${e("com/tabs/item/height/size-sm")};
        ${e("Paragraph/Sm")}
      `,md:i`
        min-height: ${e("com/tabs/item/height/size-md")};
        ${e("Paragraph/Sm")}
      `,lg:i`
        min-height: ${e("com/tabs/item/height/size-lg")};
        ${e("Paragraph/Sm")}
      `})[a]}

  ${({$fullWidth:a})=>a&&i`
      width: 100%;
    `};
`,Z=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s;

  ${({$fullWidth:a})=>a&&i`
      flex: 1;
      text-align: center;
    `}

  ${({$disabled:a})=>a&&i`
      cursor: not-allowed;

      color: ${e("com/tabs/item/disable/color-text")} !important;

      svg {
        color: ${e("com/tabs/item/disable/color-icon")} !important;
      }
    `}

  ${({$size:a,$isActive:n})=>({xs:i`
        color: ${e("com/tabs/item/with-label/size-xs/label/color-text/default")};
        gap: ${e("com/tabs/item/with-label/size-sm/horizontal-gap")};

        &:hover {
          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/hover")};
        }

        &:active {
          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/pressed")};
        }

        ${n&&i`
          ${e("Label/XS")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;
        `}
      `,sm:i`
        gap: ${e("com/tabs/item/with-label/size-sm/horizontal-gap")};

        ${x} {
          padding: 0 ${e("com/tabs/item/with-label/size-sm/sub-spacing")};
        }
        color: ${e("com/tabs/item/with-label/size-sm/label/color-text/default")};

        svg {
          color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/default")};
        }

        &:hover {
          color: ${e("com/tabs/item/with-label/size-sm/label/color-text/hover")};

          svg {
            color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/tabs/item/with-label/size-sm/label/color-text/pressed")};

          svg {
            color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/pressed")};
          }
        }

        ${n&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/actived")} !important;
          }
        `}
      `,md:i`
        gap: ${e("com/tabs/item/with-label/size-md/horizontal-gap")};

        ${x} {
          padding: 0 ${e("com/tabs/item/with-label/size-md/sub-spacing")};
        }
        color: ${e("com/tabs/item/with-label/size-md/label/color-text/default")};

        svg {
          color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/default")};
        }

        &:hover {
          color: ${e("com/tabs/item/with-label/size-md/label/color-text/hover")};

          svg {
            color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/tabs/item/with-label/size-md/label/color-text/pressed")};

          svg {
            color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/pressed")};
          }
        }

        ${n&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-md/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/actived")} !important;
          }
        `}
      `,lg:i`
        gap: ${e("com/tabs/item/with-label/size-lg/horizontal-gap")};

        ${x} {
          padding: 0 ${e("com/tabs/item/with-label/size-lg/sub-spacing")};
        }
        color: ${e("com/tabs/item/with-label/size-lg/color-text/default")};

        svg {
          color: ${e("com/tabs/item/with-label/size-lg/color-icon/default")};
        }

        &:hover {
          color: ${e("com/tabs/item/with-label/size-lg/color-text/hover")};

          svg {
            color: ${e("com/tabs/item/with-label/size-lg/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/tabs/item/with-label/size-lg/color-text/pressed")};

          svg {
            color: ${e("com/tabs/item/with-label/size-lg/color-icon/pressed")};
          }
        }

        ${n&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-lg/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-lg/color-icon/actived")} !important;
          }
        `}
      `})[a]}
`,ee=b.div`
  position: absolute;
  bottom: -1px;
  height: ${e("com/tabs/item/active-surface/height")};
  background: ${e("com/tabs/item/active-surface/background-color")};
  border-top-right-radius: ${e("sem/dimension/radius/component/sm")};
  border-top-left-radius: ${e("sem/dimension/radius/component/sm")};
  transition: all 0.3s ease-in-out;
`,N=b.span`
  display: inline-flex;
  align-items: center;
`,x=b.span``,s=({children:a})=>a,m=({children:a,active:n,defaultActive:h,size:c="md",className:$="",contentClassName:u="",fullWidth:y=!1,onChange:z})=>{var j;const p=r.useMemo(()=>{const o=[];return k.Children.forEach(a,l=>{k.isValidElement(l)&&l.type===s&&o.push(l.props)}),o},[a]),O=n||h||(p.length>0?p[0].value:""),[B,C]=r.useState(O),[K,X]=r.useState({}),d=n!==void 0?n:B,g=r.useRef({}),M=(o,l)=>{l||(n===void 0&&C(o),z==null||z(o))},I=(j=p.find(o=>o.value===d))==null?void 0:j.children;return r.useEffect(()=>{n!==void 0&&C(n)},[n]),r.useEffect(()=>{g.current[d]&&X({width:g.current[d].offsetWidth,left:g.current[d].offsetLeft})},[d]),t.jsxs(U,{className:$,children:[t.jsxs(Y,{$fullWidth:y,$size:c,children:[p.map(({value:o,title:l,startIcon:S,endIcon:P,disabled:A,className:G})=>{const H=S&&t.jsx(N,{children:S}),J=P&&t.jsx(N,{children:P});return t.jsxs(Z,{ref:Q=>g.current[o]=Q,$isActive:d===o,$disabled:A,$size:c,className:G,$fullWidth:y,onClick:()=>M(o,A),children:[H,l&&t.jsx(x,{children:l}),J]},o)}),t.jsx(ee,{style:K})]}),I&&t.jsx("div",{className:u,children:I})]})};m.displayName="FISTab";try{m.displayName="FISTab",m.__docgenInfo={description:"",displayName:"FISTab",props:{title:{defaultValue:null,description:"The tab control element associated with this pane item",name:"title",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The unique value that identifies this pane item",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the pane item will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name for styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed inside the pane",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const se={title:"Components/Tabs",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Controls the size of the Tabs",defaultValue:"md"},active:{control:"text",description:"Key of the active Tab (controlled component)"},defaultActive:{control:"text",description:"Initial active Tab key (uncontrolled component)"},onChange:{action:"changed",description:"Callback when Tab is clicked"},className:{control:"text",description:"Additional class names for the Tabs container"},contentClassName:{control:"text",description:"Additional class names for the content area"},fullWidth:{control:"boolean",description:"If true, the Tabs will stretch to full width",defaultValue:!1}}},te=a=>t.jsx("div",{style:{width:"600px"},children:t.jsxs(m,{...a,children:[t.jsx(s,{value:"Tab1",startIcon:t.jsx(w,{}),children:"Content of Tab Pane 1"}),t.jsx(s,{title:"Tab 2",value:"Tab2",children:"Content of Tab Pane 2"}),t.jsx(s,{title:"Tab 3",value:"Tab3",children:"Content of Tab Pane 3"}),t.jsx(s,{title:"Tab 4",value:"Tab4",children:"Content of Tab Pane 4"})]})}),v={render:te,args:{size:"sm",defaultActive:"Tab1"}},T={render:function(n){const[h,c]=r.useState("Tab1"),$=u=>{c(u),n.onChange&&n.onChange(u)};return t.jsxs("div",{style:{width:"600px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsxs("p",{children:["Currently active Tab: ",t.jsx("strong",{children:h})]}),t.jsxs("div",{style:{marginTop:"8px"},children:[t.jsx("button",{onClick:()=>c("Tab1"),style:{marginRight:"8px"},children:"Activate Tab 1"}),t.jsx("button",{onClick:()=>c("Tab2"),style:{marginRight:"8px"},children:"Activate Tab 2"}),t.jsx("button",{onClick:()=>c("Tab3"),children:"Activate Tab 3"})]})]}),t.jsxs(m,{...n,active:h,onChange:$,children:[t.jsx(s,{title:"Tab 1",value:"Tab1",children:"Content of Tab Pane 1"}),t.jsx(s,{title:"Tab 2",value:"Tab2",children:"Content of Tab Pane 2"}),t.jsx(s,{title:"Tab 3",value:"Tab3",children:"Content of Tab Pane 3"})]})]})},args:{size:"md"}},f={render:a=>t.jsx("div",{style:{width:720},children:t.jsxs(m,{...a,fullWidth:!0,defaultActive:"Tab2",children:[t.jsx(s,{value:"Tab1",startIcon:t.jsx(w,{}),children:"Overview content"}),t.jsx(s,{title:"Analytics",value:"Tab2",endIcon:t.jsx(w,{}),children:"Analytics content"}),t.jsx(s,{title:"Settings",value:"Tab3",children:"Settings content"})]})}),args:{size:"md"}};var R,F,V;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm",
    defaultActive: "Tab1"
  }
}`,...(V=(F=v.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var _,D,W;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(D=T.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var q,E,L;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 720
  }}>
      <Tabs {...args} fullWidth defaultActive="Tab2">
        <TabPanelItem value="Tab1" startIcon={<Fpt />}>
          Overview content
        </TabPanelItem>
        <TabPanelItem title="Analytics" value="Tab2" endIcon={<Fpt />}>
          Analytics content
        </TabPanelItem>
        <TabPanelItem title="Settings" value="Tab3">
          Settings content
        </TabPanelItem>
      </Tabs>
    </div>,
  args: {
    size: "md"
  }
}`,...(L=(E=f.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const le=["Default","ControlledTabs","WithIconsAndFullWidth"];export{T as ControlledTabs,v as Default,f as WithIconsAndFullWidth,le as __namedExportsOrder,se as default};
