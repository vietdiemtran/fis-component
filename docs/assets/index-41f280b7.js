import{j as o}from"./jsx-runtime-47c18db8.js";import{r as g,R as i}from"./index-d806aa85.js";import{d,g as r,l as x}from"./getTheme-624682de.js";import{S as n,D as $}from"./ArrowRightIcon-2d46fdf7.js";import{F as h}from"./index-e72c950e.js";const v=d.div`
  display: flex;
  align-items: center;
`,u=d.div`
  display: flex;
  align-items: center;
`,p=d.span`
  ${r("Label/XS")};
  color: ${r("com/breadcrumbs/module/non-current/label/color-text/default")};
`,j=d.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${r("Label/XS")}
  color: ${r("com/breadcrumbs/module/non-current/label/color-text/default")};
  padding-top: ${r("com/breadcrumbs/module/vertical-padding")};
  padding-bottom: ${r("com/breadcrumbs/module/vertical-padding")};
  padding-right: ${r("com/breadcrumbs/module/horizontal-padding")};
  padding-left: ${r("com/breadcrumbs/module/horizontal-padding")};
  border-radius: ${r("sem/dimension/radius/component/sm")};
  gap: ${r("com/breadcrumbs/module/horizontal-gap")};

  &:hover {
    background-color: ${r("sem/color/background/neutral/canvas/hover")};
    ${p} {
      color: ${r("com/breadcrumbs/module/non-current/label/color-text/hover")};
    }

    ${u} {
      color: ${r("com/breadcrumbs/module/non-current/icon/color-icon/hover")};
    }
  }

  ${e=>e.$active&&x`
      background-color: ${r("sem/color/background/neutral/canvas/active")};
      outline: ${r("com/actived-mark/gap-spacing")} solid
        ${r("com/actived-mark/color-gap-spacing")};

      ${p} {
        color: ${r("com/breadcrumbs/module/non-current/label/color-text/active")};
      }

      ${u} {
        color: ${r("com/breadcrumbs/module/non-current/icon/color-icon/active")};
      }
    `}

  &:focus-visible {
    background-color: ${r("com/focus-mark/background-color")};
    box-shadow: 0 0 0 ${r("sem/dimension/stroke-width/divider/lg")}
        ${r("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${r("com/focus-mark/color-stroke")};
  }
`,f=d.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-top: ${r("com/breadcrumbs/module/vertical-padding")};
  padding-bottom: ${r("com/breadcrumbs/module/vertical-padding")};
  padding-right: ${r("com/breadcrumbs/module/horizontal-padding")};
  padding-left: ${r("com/breadcrumbs/module/horizontal-padding")};
  gap: ${r("com/breadcrumbs/module/horizontal-gap")};
  border-radius: ${r("com/breadcrumbs/module/corner-radius")};
`,S=4,m=g.forwardRef(({label:e,icon:l,active:s,onClick:t,...a},c)=>o.jsxs(j,{...a,ref:c,onClick:t,$active:s,children:[l&&o.jsx(u,{children:l}),e&&o.jsx(p,{children:e})]})),I=()=>o.jsxs(o.Fragment,{children:[o.jsx(f,{children:o.jsx($,{})}),o.jsx(n,{})]}),b=({items:e,className:l})=>{var s,t;return e.length===0?null:o.jsxs(v,{className:l,children:[((s=e==null?void 0:e[0])==null?void 0:s.icon)&&o.jsxs(o.Fragment,{children:[o.jsx(h,{size:"xs",icon:(t=e==null?void 0:e[0])==null?void 0:t.icon,variant:"tertiary-invisible",onClick:e[0].onClick}),o.jsx(n,{})]}),e.length>S?o.jsxs(o.Fragment,{children:[e.slice(1,2).map((a,c)=>o.jsxs(i.Fragment,{children:[o.jsx(m,{...a}),o.jsx(n,{})]},c)),o.jsx(I,{}),e.slice(-2).map((a,c)=>o.jsxs(i.Fragment,{children:[o.jsx(m,{...a}),o.jsx(n,{})]},`end-${c}`))]}):o.jsx(o.Fragment,{children:e.slice(1).map((a,c)=>o.jsxs(i.Fragment,{children:[o.jsx(m,{...a}),o.jsx(n,{})]},c))})]})};b.displayName="FISBreadcrumb";try{b.displayName="FISBreadcrumb",b.__docgenInfo={description:"",displayName:"FISBreadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItemProps[]"}},className:{defaultValue:null,description:"Additional CSS class names to apply to the breadcrumb.",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{b as F};
