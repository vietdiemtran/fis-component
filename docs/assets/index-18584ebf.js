import{j as s}from"./jsx-runtime-47c18db8.js";import{r as c,R as y}from"./index-d806aa85.js";import{d as r,g as e,l as a}from"./getTheme-21dde6f8.js";const E=r.div`
  width: 100%;
`,L=r.div`
  position: relative;
  display: flex;
  gap: ${e("com/tabs/horizontal-gap")};
  width: fit-content;
  border-bottom: ${e("com/tabs/underline/stroke-width")} solid
    ${e("com/tabs/underline/color-stroke")};

  ${({$size:t})=>({xs:a`
        min-height: ${e("com/tabs/item/height/size-xs")};
        ${e("Paragraph/XS")}
      `,sm:a`
        min-height: ${e("com/tabs/item/height/size-sm")};
        ${e("Paragraph/Sm")}
      `,md:a`
        min-height: ${e("com/tabs/item/height/size-md")};
        ${e("Paragraph/Sm")}
      `,lg:a`
        min-height: ${e("com/tabs/item/height/size-lg")};
        ${e("Paragraph/Sm")}
      `})[t]}

  ${({$fullWidth:t})=>t&&a`
      width: 100%;
    `};
`,P=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s;

  ${({$fullWidth:t})=>t&&a`
      flex: 1;
      text-align: center;
    `}

  ${({$disabled:t})=>t&&a`
      cursor: not-allowed;

      color: ${e("com/tabs/item/disable/color-text")} !important;

      svg {
        color: ${e("com/tabs/item/disable/color-icon")} !important;
      }
    `}

  ${({$size:t,$isActive:i})=>({xs:a`
        color: ${e("com/tabs/item/with-label/size-xs/label/color-text/default")};
        gap: ${e("com/tabs/item/with-label/size-sm/horizontal-gap")};

        &:hover {
          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/hover")};
        }

        &:active {
          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/pressed")};
        }

        ${i&&a`
          ${e("Label/XS")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;
        `}
      `,sm:a`
        gap: ${e("com/tabs/item/with-label/size-sm/horizontal-gap")};

        ${b} {
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

        ${i&&a`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/actived")} !important;
          }
        `}
      `,md:a`
        gap: ${e("com/tabs/item/with-label/size-md/horizontal-gap")};

        ${b} {
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

        ${i&&a`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-md/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/actived")} !important;
          }
        `}
      `,lg:a`
        gap: ${e("com/tabs/item/with-label/size-lg/horizontal-gap")};

        ${b} {
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

        ${i&&a`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-lg/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-lg/color-icon/actived")} !important;
          }
        `}
      `})[t]}
`,W=r.div`
  position: absolute;
  bottom: -1px;
  height: ${e("com/tabs/item/active-surface/height")};
  background: ${e("com/tabs/item/active-surface/background-color")};
  border-top-right-radius: ${e("sem/dimension/radius/component/sm")};
  border-top-left-radius: ${e("sem/dimension/radius/component/sm")};
  transition: all 0.3s ease-in-out;
`,T=r.span`
  display: inline-flex;
  align-items: center;
`,b=r.span``,u=({children:t})=>t,K=({children:t,active:i,defaultActive:p,size:f="md",className:S="",contentClassName:C="",fullWidth:g=!1,onChange:h})=>{const m=c.useMemo(()=>{const l=[];return y.Children.forEach(t,o=>{y.isValidElement(o)&&o.type===u&&l.push(o.props)}),l},[t]),I=i||p||(m.length>0?m[0].value:""),[N,v]=c.useState(I),[q,V]=c.useState({}),n=i!==void 0?i:N,d=c.useRef({}),_=(l,o)=>{o||(i===void 0&&v(l),h==null||h(l))},$=c.useMemo(()=>{var l;return(l=m.find(o=>o.value===n))==null?void 0:l.children},[n]);return c.useEffect(()=>{i!==void 0&&v(i)},[i]),c.useEffect(()=>{d.current[n]&&V({width:d.current[n].offsetWidth,left:d.current[n].offsetLeft})},[n]),s.jsxs(E,{className:S,children:[s.jsxs(L,{$fullWidth:g,$size:f,children:[m.map(({value:l,title:o,startIcon:z,endIcon:w,disabled:x,className:j})=>{const R=z&&s.jsx(T,{children:z}),k=w&&s.jsx(T,{children:w});return s.jsxs(P,{ref:D=>d.current[l]=D,$isActive:n===l,$disabled:x,$size:f,className:j,$fullWidth:g,onClick:()=>_(l,x),children:[R,o&&s.jsx(b,{children:o}),k]},l)}),s.jsx(W,{style:q})]}),$&&s.jsx("div",{className:C,children:$})]})};try{u.displayName="TabPanelItem",u.__docgenInfo={description:"",displayName:"TabPanelItem",props:{title:{defaultValue:null,description:"The tab control element associated with this pane item",name:"title",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The unique value that identifies this pane item",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the pane item will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name for styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed inside the pane",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"The child elements of the Tab Control",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:"The currently active segment (controlled component)",name:"active",required:!1,type:{name:"string"}},defaultActive:{defaultValue:null,description:"The default active segment (uncontrolled component)",name:"defaultActive",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"The size of the Tab Control",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"Class name for the main container",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:{value:""},description:"Class name for the inner content",name:"contentClassName",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If true, the Tab Control will stretch to full width",name:"fullWidth",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback triggered when the active segment changes, receives the selected segment key",name:"onChange",required:!1,type:{name:"((key: string) => void)"}}}}}catch{}export{K as F,u as T};
