import{j as o}from"./jsx-runtime-50395f49.js";import{r as p,R as t}from"./index-9fa1aa67.js";import{d,l as g}from"./styled-components.browser.esm-6b0ce59b.js";import{g as r}from"./getTheme-fd88fed7.js";import{S as n,D as x}from"./RequestButtonLoadingIcon-c839309c.js";import{F as $}from"./index-94aafcdd.js";const h=d.div`
  display: flex;
  align-items: center;
`,i=d.div`
  display: flex;
  align-items: center;
`,l=d.span`
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
    ${l} {
      color: ${r("com/breadcrumbs/module/non-current/label/color-text/hover")};
    }

    ${i} {
      color: ${r("com/breadcrumbs/module/non-current/icon/color-icon/hover")};
    }
  }

  ${e=>e.$active&&g`
      background-color: ${r("sem/color/background/neutral/canvas/active")};
      outline: ${r("com/actived-mark/gap-spacing")} solid
        ${r("com/actived-mark/color-gap-spacing")};

      ${l} {
        color: ${r("com/breadcrumbs/module/non-current/label/color-text/active")};
      }

      ${i} {
        color: ${r("com/breadcrumbs/module/non-current/icon/color-icon/active")};
      }
    `}

  &:focus-visible {
    background-color: ${r("com/focus-mark/background-color")};
    box-shadow: 0 0 0 ${r("sem/dimension/stroke-width/divider/lg")}
        ${r("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${r("com/focus-mark/color-stroke")};
  }
`,j=d.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-top: ${r("com/breadcrumbs/module/vertical-padding")};
  padding-bottom: ${r("com/breadcrumbs/module/vertical-padding")};
  padding-right: ${r("com/breadcrumbs/module/horizontal-padding")};
  padding-left: ${r("com/breadcrumbs/module/horizontal-padding")};
  gap: ${r("com/breadcrumbs/module/horizontal-gap")};
  border-radius: ${r("com/breadcrumbs/module/corner-radius")};
`,f=4,s=p.forwardRef(({label:e,icon:c,active:a,onClick:m,...u},b)=>o.jsxs(v,{...u,ref:b,onClick:m,$active:a,children:[c&&o.jsx(i,{children:c}),e&&o.jsx(l,{children:e})]})),k=()=>o.jsxs(o.Fragment,{children:[o.jsx(j,{children:o.jsx(x,{})}),o.jsx(n,{})]}),I=({items:e})=>e.length===0?null:o.jsxs(h,{children:[e[0].icon&&o.jsxs(o.Fragment,{children:[o.jsx($,{size:"xs",icon:e[0].icon,variant:"tertiary-invisible",onClick:e[0].onClick}),o.jsx(n,{})]}),e.length>f?o.jsxs(o.Fragment,{children:[e.slice(1,2).map((c,a)=>o.jsxs(t.Fragment,{children:[o.jsx(s,{...c}),o.jsx(n,{})]},a)),o.jsx(k,{}),e.slice(-2).map((c,a)=>o.jsxs(t.Fragment,{children:[o.jsx(s,{...c}),o.jsx(n,{})]},`end-${a}`))]}):o.jsx(o.Fragment,{children:e.slice(1).map((c,a)=>o.jsxs(t.Fragment,{children:[o.jsx(s,{...c}),o.jsx(n,{})]},a))})]}),z=I;try{Breadcrumb.displayName="Breadcrumb",Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItemProps[]"}}}}}catch{}export{z as F};
