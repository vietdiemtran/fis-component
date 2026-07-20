import{j as t}from"./jsx-runtime-e7d94ccb.js";import{r as m,R as I}from"./index-981f9478.js";import{a as r,g as e,r as o}from"./getTheme-9564f801.js";import{F as U}from"./InfoSolidIcon-78d566e9.js";const X=r.div`
  width: 100%;
`,G=r.div`
  display: flex;
  background-color: ${e("com/segmented/background/background-color")};
  color: ${e("com/segmented/item/with-label/size-xs/label/color-text/default")};
  width: fit-content;
  box-sizing: border-box;

  ${({$size:n})=>({xs:o`
        height: ${e("com/button/size-xs/height")};
        border-radius: ${e("com/segmented/corner-radius/xs")};
        border: ${e("com/segmented/background/stroke-width")} solid
          ${e("com/segmented/background/color-stroke")};
        ${e("Paragraph/XS")}
        padding: calc(${e("com/segmented/item/with-label/size-xs/vertical-padding")} - ${e("com/segmented/background/stroke-width")});
        gap: calc(
          ${e("com/segmented/item/with-label/size-xs/vertical-padding")} +
            ${e("com/segmented/item/with-label/size-xs/vertical-padding")}
        );
      `,sm:o`
        height: ${e("com/button/size-sm/height")};
        border-radius: ${e("com/segmented/corner-radius/sm")};
        border: ${e("com/segmented/background/stroke-width")} solid
          ${e("com/segmented/background/color-stroke")};
        ${e("Paragraph/Sm")}
        padding: calc(${e("com/segmented/item/with-label/size-sm/vertical-padding")} - ${e("com/segmented/background/stroke-width")});
        gap: calc(
          ${e("com/segmented/item/with-label/size-sm/vertical-padding")} +
            ${e("com/segmented/item/with-label/size-sm/vertical-padding")}
        );
      `,md:o`
        height: ${e("com/button/size-md/height")};
        border-radius: ${e("com/segmented/corner-radius/md")};
        border: ${e("com/segmented/background/stroke-width")} solid
          ${e("com/segmented/background/color-stroke")};
        ${e("Paragraph/Sm")}
        padding: calc(${e("com/segmented/item/with-label/size-md/vertical-padding")} - ${e("com/segmented/background/stroke-width")});
        gap: calc(
          ${e("com/segmented/item/with-label/size-md/vertical-padding")} +
            ${e("com/segmented/item/with-label/size-md/vertical-padding")}
        );
      `,lg:o`
        height: ${e("com/button/size-lg/height")};
        border-radius: ${e("com/segmented/corner-radius/lg")};
        border: ${e("com/segmented/background/stroke-width")} solid
          ${e("com/segmented/background/color-stroke")};
        ${e("Paragraph/Sm")}
        padding: calc(${e("com/segmented/item/with-label/size-lg/vertical-padding")} - ${e("com/segmented/background/stroke-width")});
        gap: calc(
          ${e("com/segmented/item/with-label/size-lg/vertical-padding")} +
            ${e("com/segmented/item/with-label/size-lg/vertical-padding")}
        );
      `})[n]}

  ${({$fullWidth:n})=>n&&o`
      width: 100%;
    `};
`,H=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  transition: all 0.2s;

  ${({$fullWidth:n})=>n&&o`
      flex: 1;
      text-align: center;
    `}

  ${({$disabled:n})=>n&&o`
      cursor: not-allowed;

      color: ${e("com/segmented/item/disable/color-text")} !important;

      svg {
        color: ${e("com/segmented/item/disable/color-icon")} !important;
      }
    `}

  ${({$size:n,$isActive:i,$onlyIcon:d})=>({xs:o`
        border-radius: ${e("com/button/size-xs/corner-radius")};
        padding: 0
          ${e("com/segmented/item/active-surface/size-xs/horizontal-padding")};
        gap: ${e("com/segmented/item/with-label/size-sm/horizontal-gap")};
        color: ${e("com/segmented/item/with-label/size-xs/label/color-text/default")};

        svg {
          color: ${e("com/segmented/item/only-icon/size-xs/icon/color-icon/default")};
        }

        &:hover {
          color: ${e("com/segmented/item/with-label/size-xs/label/color-text/hover")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-xs/icon/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/segmented/item/with-label/size-xs/label/color-text/pressed")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-xs/icon/color-icon/pressed")};
          }
        }

        ${i&&o`
          ${e("Label/XS")};
          background-color: ${e("com/segmented/item/active-surface/background-color")};
          color: ${e("com/segmented/item/with-label/size-xs/label/color-text/actived")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-xs/icon/color-icon/actived")};
          }
          box-shadow: ${e("Elevation/Level-1")};
          border-bottom: ${e("com/segmented/item/active-surface/stroke-width")}
            solid ${e("com/segmented/item/active-surface/color-stroke")};
        `}

        ${d&&o`
          width: 22px;
          height: 18px;
        `}
      `,sm:o`
        border-radius: ${e("com/button/size-sm/corner-radius")};
        padding: 0
          ${e("com/segmented/item/active-surface/size-sm/horizontal-padding")};
        gap: ${e("com/segmented/item/with-label/size-sm/horizontal-gap")};
        color: ${e("com/segmented/item/with-label/size-sm/label/color-text/default")};

        ${f} {
          padding: 0
            ${e("com/segmented/item/with-label/size-sm/sub-spacing")};
        }
        svg {
          color: ${e("com/segmented/item/only-icon/size-sm/icon/color-icon/default")};
        }

        &:hover {
          color: ${e("com/segmented/item/with-label/size-sm/label/color-text/hover")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-sm/icon/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/segmented/item/with-label/size-sm/label/color-text/pressed")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-sm/icon/color-icon/pressed")};
          }
        }

        ${i&&o`
          ${e("Label/Sm")};
          background-color: ${e("com/segmented/item/active-surface/background-color")};
          color: ${e("com/segmented/item/with-label/size-sm/label/color-text/actived")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-sm/icon/color-icon/actived")};
          }
          box-shadow: ${e("Elevation/Level-1")};
          border-bottom: ${e("com/segmented/item/active-surface/stroke-width")}
            solid ${e("com/segmented/item/active-surface/color-stroke")};
        `}

        ${d&&o`
          width: 22px;
          height: 22px;
        `}
      `,md:o`
        border-radius: ${e("com/button/size-md/corner-radius")};
        padding: 0
          ${e("com/segmented/item/active-surface/size-lg/horizontal-padding")};
        gap: ${e("com/segmented/item/with-label/size-md/horizontal-gap")};
        color: ${e("com/segmented/item/with-label/size-md/label/color-text/default")};

        ${f} {
          padding: 0
            ${e("com/segmented/item/with-label/size-md/sub-spacing")};
        }

        svg {
          color: ${e("com/segmented/item/only-icon/size-md/icon/color-icon/default")};
        }

        &:hover {
          color: ${e("com/segmented/item/with-label/size-md/label/color-text/hover")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-md/icon/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/segmented/item/with-label/size-md/label/color-text/pressed")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-md/icon/color-icon/pressed")};
          }
        }

        ${i&&o`
          ${e("Label/Sm")};
          background-color: ${e("com/segmented/item/active-surface/background-color")};
          color: ${e("com/segmented/item/with-label/size-md/label/color-text/actived")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-md/icon/color-icon/actived")};
          }
          box-shadow: ${e("Elevation/Level-1")};
          border-bottom: ${e("com/segmented/item/active-surface/stroke-width")}
            solid ${e("com/segmented/item/active-surface/color-stroke")};
        `}

        ${d&&o`
          width: 28px;
          height: 28px;
        `}
      `,lg:o`
        border-radius: ${e("com/button/size-lg/corner-radius")};
        padding: 0
          ${e("com/segmented/item/active-surface/size-lg/horizontal-padding")};
        gap: ${e("com/segmented/item/with-label/size-lg/horizontal-gap")};
        color: ${e("com/segmented/item/with-label/size-lg/label/color-text/default")};

        ${f} {
          padding: 0
            ${e("com/segmented/item/with-label/size-lg/sub-spacing")};
        }

        svg {
          color: ${e("com/segmented/item/only-icon/size-lg/icon/color-icon/default")};
        }

        &:hover {
          color: ${e("com/segmented/item/with-label/size-lg/label/color-text/hover")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-lg/icon/color-icon/hover")};
          }
        }

        &:active {
          color: ${e("com/segmented/item/with-label/size-lg/label/color-text/pressed")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-lg/icon/color-icon/pressed")};
          }
        }

        ${i&&o`
          ${e("Label/Sm")};
          background-color: ${e("com/segmented/item/active-surface/background-color")};
          color: ${e("com/segmented/item/with-label/size-lg/label/color-text/actived")};

          svg {
            color: ${e("com/segmented/item/only-icon/size-lg/icon/color-icon/actived")};
          }
          box-shadow: ${e("Elevation/Level-1")};
          border-bottom: ${e("com/segmented/item/active-surface/stroke-width")}
            solid ${e("com/segmented/item/active-surface/color-stroke")};
        `}

        ${d&&o`
          width: 36px;
          height: 36px;
        `}
      `})[n]}
`,P=r.span`
  display: inline-flex;
  align-items: center;
`,f=r.span``,s=({children:n})=>n,$=({children:n,active:i,defaultActive:d,size:c="md",className:x="",contentClassName:g="",fullWidth:y=!1,onChange:z})=>{const u=m.useMemo(()=>{const l=[];return I.Children.forEach(n,a=>{I.isValidElement(a)&&a.type===s&&l.push(a.props)}),l},[n]),L=i||d||(u.length>0?u[0].value:""),[W,k]=m.useState(L),w=i!==void 0?i:W,F=(l,a)=>{a||(i===void 0&&k(l),z==null||z(l))},C=m.useMemo(()=>{var l;return(l=u.find(a=>a.value===w))==null?void 0:l.children},[w]);return m.useEffect(()=>{i!==void 0&&k(i)},[i]),t.jsxs(X,{className:x,children:[t.jsx(G,{$fullWidth:y,$size:c,children:u.map(({value:l,title:a,startIcon:h,endIcon:v,disabled:j,className:O})=>{const B=h&&t.jsx(P,{children:h}),K=v&&t.jsx(P,{children:v}),M=!!(!a&&(!h&&v||h&&!v));return t.jsxs(H,{$isActive:w===l,$disabled:j,$size:c,$fullWidth:y,$onlyIcon:M,className:O,onClick:()=>F(l,j),children:[B,a&&t.jsx(f,{children:a}),K]},l)})}),C&&t.jsx("div",{className:g,children:C})]})};try{s.displayName="SegmentedPanelItem",s.__docgenInfo={description:"",displayName:"SegmentedPanelItem",props:{title:{defaultValue:null,description:"The tab control element associated with this pane item",name:"title",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The unique value that identifies this pane item",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the pane item will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name for styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed inside the pane",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{Segmented.displayName="Segmented",Segmented.__docgenInfo={description:"",displayName:"Segmented",props:{children:{defaultValue:null,description:"The child elements of the Segmented Control",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:"The currently active segment (controlled component)",name:"active",required:!1,type:{name:"string"}},defaultActive:{defaultValue:null,description:"The default active segment (uncontrolled component)",name:"defaultActive",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"The size of the Segmented Control",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"Class name for the main container",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:{value:""},description:"Class name for the inner content",name:"contentClassName",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If true, the Segmented Control will stretch to full width",name:"fullWidth",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback triggered when the active segment changes, receives the selected segment key",name:"onChange",required:!1,type:{name:"((key: string) => void)"}}}}}catch{}const te={title:"Components/Segmenteds",component:$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Controls the size of the Segmenteds",defaultValue:"md"},active:{control:"text",description:"Key of the active Segmented (controlled component)"},defaultActive:{control:"text",description:"Initial active Segmented key (uncontrolled component)"},onChange:{action:"changed",description:"Callback when Segmented is clicked"},className:{control:"text",description:"Additional class names for the Segmenteds container"},contentClassName:{control:"text",description:"Additional class names for the content area"},fullWidth:{control:"boolean",description:"If true, the Segmented Control will stretch to full width"}}},J=n=>t.jsx("div",{style:{width:"600px"},children:t.jsxs($,{...n,children:[t.jsx(s,{startIcon:t.jsx(U,{}),value:"Segmented1",children:"Content of Segmented Pane 1"}),t.jsx(s,{title:"Segmented 2",value:"Segmented2",children:"Content of Segmented Pane 2"}),t.jsx(s,{title:"Segmented 3",value:"Segmented3",children:"Content of Segmented Pane 3"}),t.jsx(s,{title:"Segmented 4",value:"Segmented4",disabled:!0,children:"Content of Segmented Pane 4"})]})}),p={render:J,args:{size:"sm",defaultActive:"Segmented1"}},b={render:function(i){const[d,c]=m.useState("Segmented1"),x=g=>{c(g),i.onChange&&i.onChange(g)};return t.jsxs("div",{style:{width:"600px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsxs("p",{children:["Currently active Segmented: ",t.jsx("strong",{children:d})]}),t.jsxs("div",{style:{marginTop:"8px"},children:[t.jsx("button",{onClick:()=>c("Segmented1"),style:{marginRight:"8px"},children:"Activate Segmented 1"}),t.jsx("button",{onClick:()=>c("Segmented2"),style:{marginRight:"8px"},children:"Activate Segmented 2"}),t.jsx("button",{onClick:()=>c("Segmented3"),children:"Activate Segmented 3"})]})]}),t.jsxs($,{...i,active:d,onChange:x,children:[t.jsx(s,{title:"Segmented 1",value:"Segmented1",children:"Content of Segmented Pane 1"}),t.jsx(s,{title:"Segmented 2",value:"Segmented2",children:"Content of Segmented Pane 2"}),t.jsx(s,{title:"Segmented 3",value:"Segmented3",children:"Content of Segmented Pane 3"})]})]})},args:{size:"md"}},S={render:n=>t.jsx("div",{style:{width:"100%"},children:t.jsxs($,{...n,fullWidth:!0,defaultActive:"Segmented2",children:[t.jsx(s,{title:"Overview",value:"Segmented1",children:"Overview content"}),t.jsx(s,{title:"Activity",value:"Segmented2",children:"Activity feed content"}),t.jsx(s,{title:"Settings",value:"Segmented3",children:"Settings content"})]})}),args:{size:"md"}};var A,N,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm",
    defaultActive: "Segmented1"
  }
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var V,q,T;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(q=b.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var R,E,D;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%"
  }}>
      <Segmenteds {...args} fullWidth defaultActive="Segmented2">
        <SegmentedPanelItem title="Overview" value="Segmented1">
          Overview content
        </SegmentedPanelItem>
        <SegmentedPanelItem title="Activity" value="Segmented2">
          Activity feed content
        </SegmentedPanelItem>
        <SegmentedPanelItem title="Settings" value="Segmented3">
          Settings content
        </SegmentedPanelItem>
      </Segmenteds>
    </div>,
  args: {
    size: "md"
  }
}`,...(D=(E=S.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const ne=["Default","ControlledSegmenteds","FullWidthUseCase"];export{b as ControlledSegmenteds,p as Default,S as FullWidthUseCase,ne as __namedExportsOrder,te as default};
