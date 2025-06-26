import{j as l}from"./jsx-runtime-47c18db8.js";import{r,R as S}from"./index-d806aa85.js";import{d as n,g as e,l as i}from"./getTheme-624682de.js";const k=n.div`
  width: 100%;
`,F=n.div`
  position: relative;
  display: flex;
  gap: ${e("com/tabs/horizontal-gap")};
  width: fit-content;
  border-bottom: ${e("com/tabs/underline/stroke-width")} solid
    ${e("com/tabs/underline/color-stroke")};

  ${({$size:t})=>({xs:i`
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
      `})[t]}

  ${({$fullWidth:t})=>t&&i`
      width: 100%;
    `};
`,L=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s;

  ${({$fullWidth:t})=>t&&i`
      flex: 1;
      text-align: center;
    `}

  ${({$disabled:t})=>t&&i`
      cursor: not-allowed;

      color: ${e("com/tabs/item/disable/color-text")} !important;

      svg {
        color: ${e("com/tabs/item/disable/color-icon")} !important;
      }
    `}

  ${({$size:t,$isActive:o})=>({xs:i`
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

        ${o&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-xs/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-sm/icon/color-icon/actived")} !important;
          }
        `}
      `,md:i`
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

        ${o&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-md/label/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-md/icon/color-icon/actived")} !important;
          }
        `}
      `,lg:i`
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

        ${o&&i`
          ${e("Label/Sm")};

          color: ${e("com/tabs/item/with-label/size-lg/color-text/actived")} !important;

          svg {
            color: ${e("com/tabs/item/with-label/size-lg/color-icon/actived")} !important;
          }
        `}
      `})[t]}
`,P=n.div`
  position: absolute;
  bottom: -1px;
  height: ${e("com/tabs/item/active-surface/height")};
  background: ${e("com/tabs/item/active-surface/background-color")};
  border-top-right-radius: ${e("sem/dimension/radius/component/sm")};
  border-top-left-radius: ${e("sem/dimension/radius/component/sm")};
  transition: all 0.3s ease-in-out;
`,y=n.span`
  display: inline-flex;
  align-items: center;
`,b=n.span``,M=({children:t})=>t,u=({children:t,active:o,defaultActive:p,size:$="md",className:I="",contentClassName:T="",fullWidth:g=!1,onChange:h})=>{const m=r.useMemo(()=>{const a=[];return S.Children.forEach(t,s=>{S.isValidElement(s)&&s.type===M&&a.push(s.props)}),a},[t]),N=o||p||(m.length>0?m[0].value:""),[j,f]=r.useState(N),[C,q]=r.useState({}),c=o!==void 0?o:j,d=r.useRef({}),R=(a,s)=>{s||(o===void 0&&f(a),h==null||h(a))},v=r.useMemo(()=>{var a;return(a=m.find(s=>s.value===c))==null?void 0:a.children},[c]);return r.useEffect(()=>{o!==void 0&&f(o)},[o]),r.useEffect(()=>{d.current[c]&&q({width:d.current[c].offsetWidth,left:d.current[c].offsetLeft})},[c]),l.jsxs(k,{className:I,children:[l.jsxs(F,{$fullWidth:g,$size:$,children:[m.map(({value:a,title:s,startIcon:z,endIcon:w,disabled:x,className:V})=>{const _=z&&l.jsx(y,{children:z}),D=w&&l.jsx(y,{children:w});return l.jsxs(L,{ref:E=>d.current[a]=E,$isActive:c===a,$disabled:x,$size:$,className:V,$fullWidth:g,onClick:()=>R(a,x),children:[_,s&&l.jsx(b,{children:s}),D]},a)}),l.jsx(P,{style:C})]}),v&&l.jsx("div",{className:T,children:v})]})};u.displayName="FISTab";try{u.displayName="FISTab",u.__docgenInfo={description:"",displayName:"FISTab",props:{title:{defaultValue:null,description:"The tab control element associated with this pane item",name:"title",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Defines the element that stands before the children element.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Defines the element that stands after the children element.",name:"endIcon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The unique value that identifies this pane item",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the pane item will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name for styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed inside the pane",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{u as F,M as T};
