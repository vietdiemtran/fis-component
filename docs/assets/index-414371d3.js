import{j as a}from"./jsx-runtime-47c18db8.js";import{d as i,g as e,l as c}from"./getTheme-624682de.js";import{F as p}from"./index-5e805f35.js";const m=i.div``,u=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${e("sem/dimension/padding/2xs")};
  padding-right: ${e("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${e("sem/dimension/padding/2xs")};
  padding-left: ${e("com/menu/group-label/horizontal-padding")};
  gap: 8px;
`,g=i.span`
  ${e("Subheading/Sm")}
  color: ${e("com/menu/group-label/color-text")};
`,f=i.a`
  ${e("Paragraph/Sm")};
  color: ${e("com/link/primary/label-color/default")};
  text-decoration: none;

  ${n=>n.$actionLabel&&c`
      color: ${e("com/link/secondary/label-color/default")};
    `}
`,h=i.div`
  padding-top: ${e("sem/dimension/padding/2xs")};
  padding-right: ${e("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${e("sem/dimension/padding/2xs")};
  padding-left: ${e("com/menu/group-label/horizontal-padding")};
`,o=({label:n,withAction:l=!1,actionText:t,actionLabel:d=!1,actionLink:r="#",withDivider:s=!1})=>a.jsxs(m,{children:[s&&a.jsx(h,{children:a.jsx(p,{})}),(n||t)&&a.jsxs(u,{children:[n&&a.jsx(g,{children:n}),l&&t&&a.jsx(f,{href:r,$actionLabel:d,children:t})]})]});o.displayName="FISMenuSection";const $=o;try{o.displayName="FISMenuSection",o.__docgenInfo={description:"",displayName:"FISMenuSection",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},withAction:{defaultValue:{value:"false"},description:"",name:"withAction",required:!1,type:{name:"boolean"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string"}},actionLink:{defaultValue:{value:"#"},description:"",name:"actionLink",required:!1,type:{name:"string"}},actionLabel:{defaultValue:{value:"false"},description:"",name:"actionLabel",required:!1,type:{name:"boolean"}},withDivider:{defaultValue:{value:"false"},description:"",name:"withDivider",required:!1,type:{name:"boolean"}}}}}catch{}export{$ as F};
