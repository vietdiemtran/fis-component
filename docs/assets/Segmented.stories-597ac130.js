import{j as t}from"./jsx-runtime-47c18db8.js";import{r as m,R as j}from"./index-d806aa85.js";import{d as r,g as e,l as o}from"./getTheme-c4dbdb94.js";import{F}from"./LineArrowsUp-e7620e4c.js";const K=r.div`
  width: 100%;
`,M=r.div`
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
`,X=r.div`
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

        ${$} {
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

        ${$} {
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

        ${$} {
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
`,I=r.span`
  display: inline-flex;
  align-items: center;
`,$=r.span``,a=({children:n})=>n,z=({children:n,active:i,defaultActive:d,size:c="md",className:f="",contentClassName:g="",fullWidth:w=!1,onChange:S})=>{const u=m.useMemo(()=>{const s=[];return j.Children.forEach(n,l=>{j.isValidElement(l)&&l.type===a&&s.push(l.props)}),s},[n]),T=i||d||(u.length>0?u[0].value:""),[R,y]=m.useState(T),x=i!==void 0?i:R,E=(s,l)=>{l||(i===void 0&&y(s),S==null||S(s))},k=m.useMemo(()=>{var s;return(s=u.find(l=>l.value===x))==null?void 0:s.children},[x]);return m.useEffect(()=>{i!==void 0&&y(i)},[i]),t.jsxs(K,{className:f,children:[t.jsx(M,{$fullWidth:w,$size:c,children:u.map(({value:s,title:l,startIcon:h,endIcon:p,disabled:C,className:D})=>{const L=h&&t.jsx(I,{children:h}),W=p&&t.jsx(I,{children:p}),B=!!(!l&&(!h&&p||h&&!p));return t.jsxs(X,{$isActive:x===s,$disabled:C,$size:c,$fullWidth:w,$onlyIcon:B,className:D,onClick:()=>E(s,C),children:[L,l&&t.jsx($,{children:l}),W]},s)})}),k&&t.jsx("div",{className:g,children:k})]})};try{a.displayName="SegmentedPanelItem",a.__docgenInfo={description:"",displayName:"SegmentedPanelItem",props:{title:{defaultValue:null,description:"The tab control element associated with this pane item",name:"title",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The unique value that identifies this pane item",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the pane item will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name for styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed inside the pane",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{Segmented.displayName="Segmented",Segmented.__docgenInfo={description:"",displayName:"Segmented",props:{children:{defaultValue:null,description:"The child elements of the Segmented Control",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:"The currently active segment (controlled component)",name:"active",required:!1,type:{name:"string"}},defaultActive:{defaultValue:null,description:"The default active segment (uncontrolled component)",name:"defaultActive",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"The size of the Segmented Control",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"Class name for the main container",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:{value:""},description:"Class name for the inner content",name:"contentClassName",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If true, the Segmented Control will stretch to full width",name:"fullWidth",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback triggered when the active segment changes, receives the selected segment key",name:"onChange",required:!1,type:{name:"((key: string) => void)"}}}}}catch{}const U={title:"Components/Segmenteds",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Controls the size of the Segmenteds",defaultValue:"md"},active:{control:"text",description:"Key of the active Segmented (controlled component)"},defaultActive:{control:"text",description:"Initial active Segmented key (uncontrolled component)"},onChange:{action:"changed",description:"Callback when Segmented is clicked"},className:{control:"text",description:"Additional class names for the Segmenteds container"},contentClassName:{control:"text",description:"Additional class names for the content area"},fullWidth:{control:"boolean",description:"If true, the Segmented Control will stretch to full width"}}},O=n=>t.jsx("div",{style:{width:"600px"},children:t.jsxs(z,{...n,children:[t.jsx(a,{startIcon:t.jsx(F,{}),value:"Segmented1",children:"Content of Segmented Pane 1"}),t.jsx(a,{title:"Segmented 2",value:"Segmented2",children:"Content of Segmented Pane 2"}),t.jsx(a,{title:"Segmented 3",value:"Segmented3",children:"Content of Segmented Pane 3"}),t.jsx(a,{title:"Segmented 4",value:"Segmented4",disabled:!0,children:"Content of Segmented Pane 4"})]})}),v={render:O,args:{size:"sm",defaultActive:"Segmented1"}},b={render:function(i){const[d,c]=m.useState("Segmented1"),f=g=>{c(g),i.onChange&&i.onChange(g)};return t.jsxs("div",{style:{width:"600px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsxs("p",{children:["Currently active Segmented: ",t.jsx("strong",{children:d})]}),t.jsxs("div",{style:{marginTop:"8px"},children:[t.jsx("button",{onClick:()=>c("Segmented1"),style:{marginRight:"8px"},children:"Activate Segmented 1"}),t.jsx("button",{onClick:()=>c("Segmented2"),style:{marginRight:"8px"},children:"Activate Segmented 2"}),t.jsx("button",{onClick:()=>c("Segmented3"),children:"Activate Segmented 3"})]})]}),t.jsxs(z,{...i,active:d,onChange:f,children:[t.jsx(a,{title:"Segmented 1",value:"Segmented1",children:"Content of Segmented Pane 1"}),t.jsx(a,{title:"Segmented 2",value:"Segmented2",children:"Content of Segmented Pane 2"}),t.jsx(a,{title:"Segmented 3",value:"Segmented3",children:"Content of Segmented Pane 3"})]})]})},args:{size:"md"}};var N,_,P;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm",
    defaultActive: "Segmented1"
  }
}`,...(P=(_=v.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var V,q,A;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=b.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Y=["Default","ControlledSegmenteds"];export{b as ControlledSegmenteds,v as Default,Y as __namedExportsOrder,U as default};
