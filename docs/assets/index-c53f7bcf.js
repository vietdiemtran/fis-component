import{j as o}from"./jsx-runtime-50395f49.js";import{r as p,R as i}from"./index-9fa1aa67.js";import{d,l as g}from"./styled-components.browser.esm-6b0ce59b.js";import{g as r}from"./getTheme-fd88fed7.js";import{S as n,D as x}from"./ResizeIcon-0deac5ef.js";import{F as $}from"./index-45fd36eb.js";const h=d.div`
  display: flex;
  align-items: center;
`,u=d.div`
  display: flex;
  align-items: center;
`,b=d.span`
  ${r("Label/XS")};
  color: ${r("com/breadcrumbs/module/non-current/label/color-text/default")};
`,v=d.button`
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
    ${b} {
      color: ${r("com/breadcrumbs/module/non-current/label/color-text/hover")};
    }

    ${u} {
      color: ${r("com/breadcrumbs/module/non-current/icon/color-icon/hover")};
    }
  }

  ${e=>e.$active&&g`
      background-color: ${r("sem/color/background/neutral/canvas/active")};
      outline: ${r("com/actived-mark/gap-spacing")} solid
        ${r("com/actived-mark/color-gap-spacing")};

      ${b} {
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
`,j=4,m=p.forwardRef(({label:e,icon:l,active:s,onClick:t,...a},c)=>o.jsxs(v,{...a,ref:c,onClick:t,$active:s,children:[l&&o.jsx(u,{children:l}),e&&o.jsx(b,{children:e})]})),S=()=>o.jsxs(o.Fragment,{children:[o.jsx(f,{children:o.jsx(x,{})}),o.jsx(n,{})]}),k=({items:e,className:l})=>{var s,t;return e.length===0?null:o.jsxs(h,{className:l,children:[((s=e==null?void 0:e[0])==null?void 0:s.icon)&&o.jsxs(o.Fragment,{children:[o.jsx($,{size:"xs",icon:(t=e==null?void 0:e[0])==null?void 0:t.icon,variant:"tertiary-invisible",onClick:e[0].onClick}),o.jsx(n,{})]}),e.length>j?o.jsxs(o.Fragment,{children:[e.slice(1,2).map((a,c)=>o.jsxs(i.Fragment,{children:[o.jsx(m,{...a}),o.jsx(n,{})]},c)),o.jsx(S,{}),e.slice(-2).map((a,c)=>o.jsxs(i.Fragment,{children:[o.jsx(m,{...a}),o.jsx(n,{})]},`end-${c}`))]}):o.jsx(o.Fragment,{children:e.slice(1).map((a,c)=>o.jsxs(i.Fragment,{children:[o.jsx(m,{...a}),o.jsx(n,{})]},c))})]})},z=k;try{Breadcrumb.displayName="Breadcrumb",Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItemProps[]"}},className:{defaultValue:null,description:"Additional CSS class names to apply to the breadcrumb.",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{z as F};
