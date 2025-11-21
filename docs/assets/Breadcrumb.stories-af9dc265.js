import{j as c}from"./jsx-runtime-47c18db8.js";import{r as D,R as b}from"./index-d806aa85.js";import{d as a,g as n,l as F}from"./getTheme-c4dbdb94.js";import{S as l,f as _,H as s,C as j}from"./LineArrowsUp-e7620e4c.js";import{F as z}from"./index-8f5d9190.js";import"./index-84c6d358.js";const N=a.div`
  display: flex;
  align-items: center;
`,k=a.div`
  display: flex;
  align-items: center;
`,x=a.span`
  ${n("Label/XS")};
  color: ${n("com/breadcrumbs/module/non-current/label/color-text/default")};
`,E=a.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${n("Label/XS")}
  color: ${n("com/breadcrumbs/module/non-current/label/color-text/default")};
  padding-top: ${n("com/breadcrumbs/module/vertical-padding")};
  padding-bottom: ${n("com/breadcrumbs/module/vertical-padding")};
  padding-right: ${n("com/breadcrumbs/module/horizontal-padding")};
  padding-left: ${n("com/breadcrumbs/module/horizontal-padding")};
  border-radius: ${n("sem/dimension/radius/component/sm")};
  gap: ${n("com/breadcrumbs/module/horizontal-gap")};

  &:hover {
    background-color: ${n("sem/color/background/neutral/canvas/hover")};
    ${x} {
      color: ${n("com/breadcrumbs/module/non-current/label/color-text/hover")};
    }

    ${k} {
      color: ${n("com/breadcrumbs/module/non-current/icon/color-icon/hover")};
    }
  }

  ${o=>o.$active&&F`
      background-color: ${n("sem/color/background/neutral/canvas/active")};
      outline: ${n("com/actived-mark/gap-spacing")} solid
        ${n("com/actived-mark/color-gap-spacing")};

      ${x} {
        color: ${n("com/breadcrumbs/module/non-current/label/color-text/active")};
      }

      ${k} {
        color: ${n("com/breadcrumbs/module/non-current/icon/color-icon/active")};
      }
    `}

  &:focus-visible {
    background-color: ${n("com/focus-mark/background-color")};
    box-shadow:
      0 0 0 ${n("sem/dimension/stroke-width/divider/lg")}
        ${n("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${n("com/focus-mark/color-stroke")};
  }
`,M=a.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-top: ${n("com/breadcrumbs/module/vertical-padding")};
  padding-bottom: ${n("com/breadcrumbs/module/vertical-padding")};
  padding-right: ${n("com/breadcrumbs/module/horizontal-padding")};
  padding-left: ${n("com/breadcrumbs/module/horizontal-padding")};
  gap: ${n("com/breadcrumbs/module/horizontal-gap")};
  border-radius: ${n("com/breadcrumbs/module/corner-radius")};
`,i=a.div`
  color: ${n("com/breadcrumbs/separated-icon/color-icon")};
`,T=4,p=D.forwardRef(({label:o,icon:t,active:d,onClick:m,...e},r)=>c.jsxs(E,{type:"button",...e,ref:r,onClick:m,$active:d,children:[t&&c.jsx(k,{children:t}),o&&c.jsx(x,{children:o})]})),w=()=>c.jsxs(c.Fragment,{children:[c.jsx(M,{children:c.jsx(_,{})}),c.jsx(i,{children:c.jsx(l,{})})]}),P=({items:o,className:t})=>{var d,m;return o.length===0?null:c.jsxs(N,{className:t,children:[((d=o==null?void 0:o[0])==null?void 0:d.icon)&&c.jsxs(c.Fragment,{children:[c.jsx(z,{size:"xs",icon:(m=o==null?void 0:o[0])==null?void 0:m.icon,variant:"tertiary-invisible",onClick:o[0].onClick}),c.jsx(i,{children:c.jsx(l,{})})]}),o.length>T?c.jsxs(c.Fragment,{children:[o.slice(1,2).map((e,r)=>c.jsxs(b.Fragment,{children:[c.jsx(p,{...e}),c.jsx(i,{children:c.jsx(l,{})})]},r)),c.jsx(w,{}),o.slice(-2).map((e,r)=>c.jsxs(b.Fragment,{children:[c.jsx(p,{...e}),c.jsx(i,{children:c.jsx(l,{})})]},`end-${r}`))]}):c.jsx(c.Fragment,{children:o.slice(1).map((e,r)=>c.jsxs(b.Fragment,{children:[c.jsx(p,{...e}),c.jsx(i,{children:c.jsx(l,{})})]},r))})]})};P.displayName="FISBreadcrumb";try{Breadcrumb.displayName="Breadcrumb",Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItemProps[]"}},className:{defaultValue:null,description:"Additional CSS class names to apply to the breadcrumb.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Components/Breadcrumb",component:P,tags:["autodocs"],parameters:{docs:{description:{component:`
Breadcrumb là một component hiển thị vị trí hiện tại của người dùng trong cấu trúc phân cấp của website hoặc ứng dụng.

## Tính năng
- Hỗ trợ hiển thị cả icon và nhãn cho các mục
- Tự động xử lý trường hợp có nhiều hơn 4 mục bằng cách hiển thị dấu ba chấm (...)
- Hiển thị trạng thái active cho mục hiện tại
- Có thể tùy chỉnh thêm thông qua className

## Cách sử dụng
Breadcrumb thường được sử dụng ở phần header hoặc khu vực điều hướng của trang để hiển thị vị trí hiện tại của người dùng trong cấu trúc phân cấp của ứng dụng.
        `}}},argTypes:{items:{description:"Mảng các mục breadcrumb cần hiển thị. Mỗi mục có thể có icon, nhãn và hàm xử lý onClick.",control:"object"},className:{description:"Các class CSS bổ sung để áp dụng cho container của breadcrumb",control:"text"}}},g={args:{items:[{label:"Home",icon:c.jsx(s,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",icon:c.jsx(j,{}),onClick:()=>console.log("Projects clicked")},{label:"Project Details",icon:c.jsx(j,{}),onClick:()=>console.log("Project Details clicked")}]},parameters:{docs:{description:{story:"Cách sử dụng cơ bản của breadcrumb với icon home và các nhãn văn bản đơn giản. Đây là trường hợp sử dụng phổ biến nhất."}}}},u={args:{items:[{label:"Home",icon:c.jsx(s,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",onClick:()=>console.log("Projects clicked")},{label:"Category",onClick:()=>console.log("Category clicked")},{label:"Subcategory",onClick:()=>console.log("Subcategory clicked")},{label:"Details",onClick:()=>console.log("Details clicked")},{label:"Final Page",onClick:()=>console.log("Final Page clicked")}]},parameters:{docs:{description:{story:"Khi có nhiều hơn 4 mục, breadcrumb tự động hiển thị dấu ba chấm (...) ở giữa để duy trì giao diện gọn gàng trong khi vẫn hiển thị các mục đầu và cuối."}}}},h={args:{items:[{icon:c.jsx(s,{}),onClick:()=>console.log("Home clicked")},{icon:c.jsx(s,{}),onClick:()=>console.log("Projects clicked")},{icon:c.jsx(s,{}),onClick:()=>console.log("Details clicked")}]},parameters:{docs:{description:{story:"Breadcrumb có thể được sử dụng chỉ với các icon, phù hợp cho các layout có không gian hạn chế hoặc khi bạn muốn có một thanh điều hướng gọn gàng hơn."}}}};var C,v,y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => console.log("Home clicked")
    }, {
      label: "Projects",
      icon: <CategoryIcon />,
      onClick: () => console.log("Projects clicked")
    }, {
      label: "Project Details",
      icon: <CategoryIcon />,
      onClick: () => console.log("Project Details clicked")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Cách sử dụng cơ bản của breadcrumb với icon home và các nhãn văn bản đơn giản. Đây là trường hợp sử dụng phổ biến nhất."
      }
    }
  }
}`,...(y=(v=g.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var $,I,S;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => console.log("Home clicked")
    }, {
      label: "Projects",
      onClick: () => console.log("Projects clicked")
    }, {
      label: "Category",
      onClick: () => console.log("Category clicked")
    }, {
      label: "Subcategory",
      onClick: () => console.log("Subcategory clicked")
    }, {
      label: "Details",
      onClick: () => console.log("Details clicked")
    }, {
      label: "Final Page",
      onClick: () => console.log("Final Page clicked")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Khi có nhiều hơn 4 mục, breadcrumb tự động hiển thị dấu ba chấm (...) ở giữa để duy trì giao diện gọn gàng trong khi vẫn hiển thị các mục đầu và cuối."
      }
    }
  }
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,B,H;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: <HomeIcon />,
      onClick: () => console.log("Home clicked")
    }, {
      icon: <HomeIcon />,
      onClick: () => console.log("Projects clicked")
    }, {
      icon: <HomeIcon />,
      onClick: () => console.log("Details clicked")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb có thể được sử dụng chỉ với các icon, phù hợp cho các layout có không gian hạn chế hoặc khi bạn muốn có một thanh điều hướng gọn gàng hơn."
      }
    }
  }
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const K=["Basic","WithManyItems","IconOnly"];export{g as Basic,h as IconOnly,u as WithManyItems,K as __namedExportsOrder,A as default};
