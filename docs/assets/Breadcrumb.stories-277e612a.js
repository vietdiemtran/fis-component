import{j as c}from"./jsx-runtime-e7d94ccb.js";import{r as N,R as p}from"./index-981f9478.js";import{a as i,g as n,r as E}from"./getTheme-9564f801.js";import{H as a,j as l,k as M,C as b}from"./InfoSolidIcon-78d566e9.js";import{F as T}from"./index-df9a4235.js";import"./index-66039438.js";const w=i.div`
  display: flex;
  align-items: center;
`,j=i.div`
  display: flex;
  align-items: center;
`,x=i.span`
  ${n("Label/XS")};
  color: ${n("com/breadcrumbs/module/non-current/label/color-text/default")};
`,A=i.button`
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

    ${j} {
      color: ${n("com/breadcrumbs/module/non-current/icon/color-icon/hover")};
    }
  }

  ${o=>o.$active&&E`
      background-color: ${n("sem/color/background/neutral/canvas/active")};
      outline: ${n("com/actived-mark/gap-spacing")} solid
        ${n("com/actived-mark/color-gap-spacing")};

      ${x} {
        color: ${n("com/breadcrumbs/module/non-current/label/color-text/active")};
      }

      ${j} {
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
`,L=i.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-top: ${n("com/breadcrumbs/module/vertical-padding")};
  padding-bottom: ${n("com/breadcrumbs/module/vertical-padding")};
  padding-right: ${n("com/breadcrumbs/module/horizontal-padding")};
  padding-left: ${n("com/breadcrumbs/module/horizontal-padding")};
  gap: ${n("com/breadcrumbs/module/horizontal-gap")};
  border-radius: ${n("com/breadcrumbs/module/corner-radius")};
`,t=i.div`
  color: ${n("com/breadcrumbs/separated-icon/color-icon")};
`,R=4,k=N.forwardRef(({label:o,icon:s,active:d,onClick:e,...r},z)=>c.jsxs(A,{type:"button",...r,ref:z,onClick:e,$active:d,children:[s&&c.jsx(j,{children:s}),o&&c.jsx(x,{children:o})]})),W=()=>c.jsxs(c.Fragment,{children:[c.jsx(L,{children:c.jsx(M,{})}),c.jsx(t,{children:c.jsx(l,{})})]}),_=({items:o,className:s})=>{var d;return o.length===0?null:c.jsxs(w,{className:s,children:[c.jsxs(c.Fragment,{children:[c.jsx(T,{size:"xs",icon:((d=o==null?void 0:o[0])==null?void 0:d.icon)??c.jsx(a,{}),variant:"tertiary-invisible",onClick:o[0].onClick}),c.jsx(t,{children:c.jsx(l,{})})]}),o.length>R?c.jsxs(c.Fragment,{children:[o.slice(1,2).map((e,r)=>c.jsxs(p.Fragment,{children:[c.jsx(k,{...e}),c.jsx(t,{children:c.jsx(l,{})})]},r)),c.jsx(W,{}),o.slice(-2).map((e,r)=>c.jsxs(p.Fragment,{children:[c.jsx(k,{...e}),c.jsx(t,{children:c.jsx(l,{})})]},`end-${r}`))]}):c.jsx(c.Fragment,{children:o.slice(1).map((e,r)=>c.jsxs(p.Fragment,{children:[c.jsx(k,{...e}),c.jsx(t,{children:c.jsx(l,{})})]},r))})]})};_.displayName="FISBreadcrumb";try{Breadcrumb.displayName="Breadcrumb",Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItemProps[]"}},className:{defaultValue:null,description:"Additional CSS class names to apply to the breadcrumb.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Components/Breadcrumb",component:_,tags:["autodocs"],parameters:{docs:{description:{component:`
Breadcrumb là một component hiển thị vị trí hiện tại của người dùng trong cấu trúc phân cấp của website hoặc ứng dụng.

## Tính năng
- Hỗ trợ hiển thị cả icon và nhãn cho các mục
- Tự động xử lý trường hợp có nhiều hơn 4 mục bằng cách hiển thị dấu ba chấm (...)
- Hiển thị trạng thái active cho mục hiện tại
- Có thể tùy chỉnh thêm thông qua className

## Cách sử dụng
Breadcrumb thường được sử dụng ở phần header hoặc khu vực điều hướng của trang để hiển thị vị trí hiện tại của người dùng trong cấu trúc phân cấp của ứng dụng.
        `}}},argTypes:{items:{description:"Mảng các mục breadcrumb cần hiển thị. Mỗi mục có thể có icon, nhãn và hàm xử lý onClick.",control:"object"},className:{description:"Các class CSS bổ sung để áp dụng cho container của breadcrumb",control:"text"}}},m={args:{items:[{label:"Home",icon:c.jsx(a,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",icon:c.jsx(b,{}),onClick:()=>console.log("Projects clicked")},{label:"Project Details",icon:c.jsx(b,{}),onClick:()=>console.log("Project Details clicked")}]},parameters:{docs:{description:{story:"Cách sử dụng cơ bản của breadcrumb với icon home và các nhãn văn bản đơn giản. Đây là trường hợp sử dụng phổ biến nhất."}}}},g={args:{items:[{label:"Home",icon:c.jsx(a,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",onClick:()=>console.log("Projects clicked")},{label:"Category",onClick:()=>console.log("Category clicked")},{label:"Subcategory",onClick:()=>console.log("Subcategory clicked")},{label:"Details",onClick:()=>console.log("Details clicked")},{label:"Final Page",onClick:()=>console.log("Final Page clicked")}]},parameters:{docs:{description:{story:"Khi có nhiều hơn 4 mục, breadcrumb tự động hiển thị dấu ba chấm (...) ở giữa để duy trì giao diện gọn gàng trong khi vẫn hiển thị các mục đầu và cuối."}}}},h={args:{items:[{label:"Home",icon:c.jsx(a,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",icon:c.jsx(b,{}),onClick:()=>console.log("Projects clicked")},{label:"Project Details",icon:c.jsx(b,{}),active:!0,onClick:()=>console.log("Project Details clicked")}]},parameters:{docs:{description:{story:"Đánh dấu mục hiện tại bằng `active: true` — thường là mục cuối cùng, thể hiện vị trí hiện tại của người dùng."}}}},u={args:{items:[{icon:c.jsx(a,{}),onClick:()=>console.log("Home clicked")},{icon:c.jsx(a,{}),onClick:()=>console.log("Projects clicked")},{icon:c.jsx(a,{}),onClick:()=>console.log("Details clicked")}]},parameters:{docs:{description:{story:"Breadcrumb có thể được sử dụng chỉ với các icon, phù hợp cho các layout có không gian hạn chế hoặc khi bạn muốn có một thanh điều hướng gọn gàng hơn."}}}};var C,v,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var $,I,S;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(S=(I=g.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var P,f,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      active: true,
      onClick: () => console.log("Project Details clicked")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Đánh dấu mục hiện tại bằng \`active: true\` — thường là mục cuối cùng, thể hiện vị trí hiện tại của người dùng."
      }
    }
  }
}`,...(H=(f=h.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var D,B,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Q=["Basic","WithManyItems","WithActiveItem","IconOnly"];export{m as Basic,u as IconOnly,h as WithActiveItem,g as WithManyItems,Q as __namedExportsOrder,J as default};
