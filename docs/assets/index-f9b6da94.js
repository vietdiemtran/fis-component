import{j as l}from"./jsx-runtime-47c18db8.js";import{r as t}from"./index-d806aa85.js";import{d as o,l as d}from"./styled-components.browser.esm-c9db8114.js";import{g as a}from"./getTheme-fd88fed7.js";const c=o.div.withConfig({shouldForwardProp:i=>!["flip","paddingVertical","paddingHorizontal"].includes(i)})`
  flex: 1;

  ${i=>!(i!=null&&i.flip)&&d`
      .fis-divider-line {
        border-top: 1px solid ${a("sem/color/stroke/neutral/sub")};
      }
    `}

  ${i=>(i==null?void 0:i.flip)&&d`
      .fis-divider-line {
        border-top: 1px solid ${a("sem/color/stroke/neutral/sub")};
        rotate: 180deg;
      }
    `}

  ${i=>{let e="0px";switch(i==null?void 0:i.paddingHorizontal){case"tiny":e=a("com/divider/horizontal-padding/tiny");break;case"2xs":e=a("com/divider/horizontal-padding/2xs");break;case"xs":e=a("com/divider/horizontal-padding/xs");break;case"sm":e=a("com/divider/horizontal-padding/sm");break;case"md":e=a("com/divider/horizontal-padding/md");break;case"lg":e=a("com/divider/horizontal-padding/lg");break;case"xl":e=a("com/divider/horizontal-padding/xl");break;case"2xl":e=a("com/divider/horizontal-padding/2xl");break;default:e="0px";break}return d`
      padding-inline: ${e};
    `}}

${i=>{let e="0px";switch(i==null?void 0:i.paddingVertical){case"tiny":e=a("com/divider/vertical-padding/tiny");break;case"2xs":e=a("com/divider/vertical-padding/2xs");break;case"xs":e=a("com/divider/vertical-padding/xs");break;case"sm":e=a("com/divider/vertical-padding/sm");break;case"md":e=a("com/divider/vertical-padding/md");break;case"lg":e=a("com/divider/vertical-padding/lg");break;case"xl":e=a("com/divider/vertical-padding/xl");break;case"2xl":e=a("com/divider/vertical-padding/2xl");break;default:e="0px";break}return d`
      padding-block: ${e};
    `}}
`,g=i=>{const{flip:e=!1,paddingVertical:r,paddingHorizontal:n}=t.useMemo(()=>i,[i]);return l.jsx(c,{...i,flip:e,paddingVertical:r,paddingHorizontal:n,children:l.jsx("div",{className:"fis-divider-line"})})};try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{flip:{defaultValue:null,description:"",name:"flip",required:!1,type:{name:"boolean"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"2xs"'},{value:'"xl"'},{value:'"tiny"'},{value:'"2xl"'}]}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"2xs"'},{value:'"xl"'},{value:'"tiny"'},{value:'"2xl"'}]}}}}}catch{}export{g as F};
