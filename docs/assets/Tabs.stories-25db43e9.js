import{j as t}from"./jsx-runtime-47c18db8.js";import{r,R as P}from"./index-d806aa85.js";import{d as b,g as e,l as i}from"./getTheme-c4dbdb94.js";import{F as O}from"./LineArrowsUp-e7620e4c.js";const G=b.div`
  width: 100%;
`,H=b.div`
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
`,J=b.div`
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

  ${({$size:a,$isActive:o})=>({xs:i`
        color: ${e("com/tabs/item/with-label/size-xs/label/color-text/default")};
        gap: ${e("com/tabs/item/with-label/size-sm/horizontal-gap")};

        &:hover {
          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/hover")};
        }

        &:active {
          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/pressed")};
        }

        ${o&&i`
          ${e("Label/XS")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;
        `}
      `,sm:i`
        gap: ${e("com/tabs/item/with-label/size-sm/horizontal-gap")};

        ${f} {
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

        ${o&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/actived")} !important;
          }
        `}
      `,md:i`
        gap: ${e("com/tabs/item/with-label/size-md/horizontal-gap")};

        ${f} {
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

        ${o&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-md/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/actived")} !important;
          }
        `}
      `,lg:i`
        gap: ${e("com/tabs/item/with-label/size-lg/horizontal-gap")};

        ${f} {
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

        ${o&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-lg/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-lg/color-icon/actived")} !important;
          }
        `}
      `})[a]}
`,Q=b.div`
  position: absolute;
  bottom: -1px;
  height: ${e("com/tabs/item/active-surface/height")};
  background: ${e("com/tabs/item/active-surface/background-color")};
  border-top-right-radius: ${e("sem/dimension/radius/component/sm")};
  border-top-left-radius: ${e("sem/dimension/radius/component/sm")};
  transition: all 0.3s ease-in-out;
`,k=b.span`
  display: inline-flex;
  align-items: center;
`,f=b.span``,l=({children:a})=>a,d=({children:a,active:o,defaultActive:h,size:c="md",className:x="",contentClassName:u="",fullWidth:z=!1,onChange:$})=>{var y;const p=r.useMemo(()=>{const n=[];return P.Children.forEach(a,s=>{P.isValidElement(s)&&s.type===l&&n.push(s.props)}),n},[a]),q=o||h||(p.length>0?p[0].value:""),[E,w]=r.useState(q),[F,L]=r.useState({}),m=o!==void 0?o:E,g=r.useRef({}),W=(n,s)=>{s||(o===void 0&&w(n),$==null||$(n))},C=(y=p.find(n=>n.value===m))==null?void 0:y.children;return r.useEffect(()=>{o!==void 0&&w(o)},[o]),r.useEffect(()=>{g.current[m]&&L({width:g.current[m].offsetWidth,left:g.current[m].offsetLeft})},[m]),t.jsxs(G,{className:x,children:[t.jsxs(H,{$fullWidth:z,$size:c,children:[p.map(({value:n,title:s,startIcon:S,endIcon:j,disabled:I,className:B})=>{const K=S&&t.jsx(k,{children:S}),X=j&&t.jsx(k,{children:j});return t.jsxs(J,{ref:M=>g.current[n]=M,$isActive:m===n,$disabled:I,$size:c,className:B,$fullWidth:z,onClick:()=>W(n,I),children:[K,s&&t.jsx(f,{children:s}),X]},n)}),t.jsx(Q,{style:F})]}),C&&t.jsx("div",{className:u,children:C})]})};d.displayName="FISTab";try{d.displayName="FISTab",d.__docgenInfo={description:"",displayName:"FISTab",props:{title:{defaultValue:null,description:"The tab control element associated with this pane item",name:"title",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The unique value that identifies this pane item",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the pane item will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name for styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed inside the pane",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const ae={title:"Components/Tabs",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Controls the size of the Tabs",defaultValue:"md"},active:{control:"text",description:"Key of the active Tab (controlled component)"},defaultActive:{control:"text",description:"Initial active Tab key (uncontrolled component)"},onChange:{action:"changed",description:"Callback when Tab is clicked"},className:{control:"text",description:"Additional class names for the Tabs container"},contentClassName:{control:"text",description:"Additional class names for the content area"},fullWidth:{control:"boolean",description:"If true, the Tabs will stretch to full width",defaultValue:!1}}},U=a=>t.jsx("div",{style:{width:"600px"},children:t.jsxs(d,{...a,children:[t.jsx(l,{value:"Tab1",startIcon:t.jsx(O,{}),children:"Content of Tab Pane 1"}),t.jsx(l,{title:"Tab 2",value:"Tab2",children:"Content of Tab Pane 2"}),t.jsx(l,{title:"Tab 3",value:"Tab3",children:"Content of Tab Pane 3"}),t.jsx(l,{title:"Tab 4",value:"Tab4",children:"Content of Tab Pane 4"})]})}),v={render:U,args:{size:"sm",defaultActive:"Tab1"}},T={render:function(o){const[h,c]=r.useState("Tab1"),x=u=>{c(u),o.onChange&&o.onChange(u)};return t.jsxs("div",{style:{width:"600px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsxs("p",{children:["Currently active Tab: ",t.jsx("strong",{children:h})]}),t.jsxs("div",{style:{marginTop:"8px"},children:[t.jsx("button",{onClick:()=>c("Tab1"),style:{marginRight:"8px"},children:"Activate Tab 1"}),t.jsx("button",{onClick:()=>c("Tab2"),style:{marginRight:"8px"},children:"Activate Tab 2"}),t.jsx("button",{onClick:()=>c("Tab3"),children:"Activate Tab 3"})]})]}),t.jsxs(d,{...o,active:h,onChange:x,children:[t.jsx(l,{title:"Tab 1",value:"Tab1",children:"Content of Tab Pane 1"}),t.jsx(l,{title:"Tab 2",value:"Tab2",children:"Content of Tab Pane 2"}),t.jsx(l,{title:"Tab 3",value:"Tab3",children:"Content of Tab Pane 3"})]})]})},args:{size:"md"}};var N,A,R;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm",
    defaultActive: "Tab1"
  }
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var V,_,D;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(_=T.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const oe=["Default","ControlledTabs"];export{T as ControlledTabs,v as Default,oe as __namedExportsOrder,ae as default};
