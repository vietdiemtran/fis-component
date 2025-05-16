import{j as n}from"./jsx-runtime-47c18db8.js";import{F as k}from"./index-41f280b7.js";import{H as c,C as l}from"./ArrowRightIcon-2d46fdf7.js";import"./index-d806aa85.js";import"./getTheme-624682de.js";import"./index-e72c950e.js";import"./index-8298a7d1.js";const P={title:"Components/Breadcrumb",component:k,tags:["autodocs"],parameters:{docs:{description:{component:`
Breadcrumb là một component hiển thị vị trí hiện tại của người dùng trong cấu trúc phân cấp của website hoặc ứng dụng.

## Tính năng
- Hỗ trợ hiển thị cả icon và nhãn cho các mục
- Tự động xử lý trường hợp có nhiều hơn 4 mục bằng cách hiển thị dấu ba chấm (...)
- Hiển thị trạng thái active cho mục hiện tại
- Có thể tùy chỉnh thêm thông qua className

## Cách sử dụng
Breadcrumb thường được sử dụng ở phần header hoặc khu vực điều hướng của trang để hiển thị vị trí hiện tại của người dùng trong cấu trúc phân cấp của ứng dụng.
        `}}},argTypes:{items:{description:"Mảng các mục breadcrumb cần hiển thị. Mỗi mục có thể có icon, nhãn và hàm xử lý onClick.",control:"object"},className:{description:"Các class CSS bổ sung để áp dụng cho container của breadcrumb",control:"text"}}},o={args:{items:[{label:"Home",icon:n.jsx(c,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",icon:n.jsx(l,{}),onClick:()=>console.log("Projects clicked")},{label:"Project Details",icon:n.jsx(l,{}),onClick:()=>console.log("Project Details clicked")}]},parameters:{docs:{description:{story:"Cách sử dụng cơ bản của breadcrumb với icon home và các nhãn văn bản đơn giản. Đây là trường hợp sử dụng phổ biến nhất."}}}},e={args:{items:[{label:"Home",icon:n.jsx(c,{}),onClick:()=>console.log("Home clicked")},{label:"Projects",onClick:()=>console.log("Projects clicked")},{label:"Category",onClick:()=>console.log("Category clicked")},{label:"Subcategory",onClick:()=>console.log("Subcategory clicked")},{label:"Details",onClick:()=>console.log("Details clicked")},{label:"Final Page",onClick:()=>console.log("Final Page clicked")}]},parameters:{docs:{description:{story:"Khi có nhiều hơn 4 mục, breadcrumb tự động hiển thị dấu ba chấm (...) ở giữa để duy trì giao diện gọn gàng trong khi vẫn hiển thị các mục đầu và cuối."}}}},i={args:{items:[{icon:n.jsx(c,{}),onClick:()=>console.log("Home clicked")},{icon:n.jsx(c,{}),onClick:()=>console.log("Projects clicked")},{icon:n.jsx(c,{}),onClick:()=>console.log("Details clicked")}]},parameters:{docs:{description:{story:"Breadcrumb có thể được sử dụng chỉ với các icon, phù hợp cho các layout có không gian hạn chế hoặc khi bạn muốn có một thanh điều hướng gọn gàng hơn."}}}};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,g,h;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,d,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Basic","WithManyItems","IconOnly"];export{o as Basic,i as IconOnly,e as WithManyItems,x as __namedExportsOrder,P as default};
