import{j as i}from"./jsx-runtime-47c18db8.js";import{d as a,g as e,l as c}from"./getTheme-624682de.js";import{F as p}from"./index-6b2c958e.js";const m=a.div``,u=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${e("sem/dimension/padding/2xs")};
  padding-right: ${e("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${e("sem/dimension/padding/2xs")};
  padding-left: ${e("com/menu/group-label/horizontal-padding")};
  gap: 8px;
  min-width: 0;
`,g=a.span`
  ${e("Subheading/Sm")}
  color: ${e("com/menu/group-label/color-text")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
`,f=a.a`
  ${e("Paragraph/Sm")};
  color: ${e("com/link/primary/label-color/default")};
  text-decoration: none;

  ${n=>n.$actionLabel&&c`
      color: ${e("com/link/secondary/label-color/default")};
    `}
`,h=a.div`
  padding-top: ${e("sem/dimension/padding/2xs")};
  padding-right: ${e("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${e("sem/dimension/padding/2xs")};
  padding-left: ${e("com/menu/group-label/horizontal-padding")};
`,o=({label:n,withAction:l=!1,actionText:t,actionLabel:d=!1,actionLink:r="#",withDivider:s=!1})=>i.jsxs(m,{children:[s&&i.jsx(h,{children:i.jsx(p,{})}),(n||t)&&i.jsxs(u,{children:[n&&i.jsx(g,{children:n}),l&&t&&i.jsx(f,{href:r,$actionLabel:d,children:t})]})]});o.displayName="FISMenuSection";const $=o;try{o.displayName="FISMenuSection",o.__docgenInfo={description:"",displayName:"FISMenuSection",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},withAction:{defaultValue:{value:"false"},description:"",name:"withAction",required:!1,type:{name:"boolean"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string"}},actionLink:{defaultValue:{value:"#"},description:"",name:"actionLink",required:!1,type:{name:"string"}},actionLabel:{defaultValue:{value:"false"},description:"",name:"actionLabel",required:!1,type:{name:"boolean"}},withDivider:{defaultValue:{value:"false"},description:"",name:"withDivider",required:!1,type:{name:"boolean"}}}}}catch{}export{$ as F};
