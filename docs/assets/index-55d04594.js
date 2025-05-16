import{j as t}from"./jsx-runtime-47c18db8.js";import{d as l,g as i,l as a,m}from"./getTheme-624682de.js";const p=e=>{switch(e){case"xs":return a`
        width: 100%;
        height: ${i("com/progress-indicator/linear/size-sm/height")};
      `;case"sm":return a`
        width: 100%;
        height: ${i("com/progress-indicator/linear/size-sm/height")};
      `;case"md":return a`
        width: 100%;
        height: ${i("com/progress-indicator/linear/size-md/height")};
      `;default:return a`
        width: 100%;
        height: ${i("com/progress-indicator/linear/size-lg/height")};
      `}},d=l.div`
  position: relative;
  border-radius: ${i("sem/dimension/radius/component/round")};
  overflow: hidden;
  ${({$size:e})=>p(e)}

  ${({$invert:e,$isDeterminate:r})=>r&&(e?a`
          background: ${i("com/progress-indicator/invert/background-color")};
        `:a`
          background: ${i("com/progress-indicator/default/background-color")};
        `)}
`,g=m`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,u=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: width 0.35s ease;

  ${({$isDeterminate:e,$invert:r,theme:n})=>{const o=n[r?"com/progress-indicator/invert/indicator/lead-color":"com/progress-indicator/default/indicator/lead-color"],c=n[r?"com/progress-indicator/invert/indicator/trail-color":"com/progress-indicator/default/indicator/trail-color"];return e?a`
        background: ${o};
      `:a`
      background: linear-gradient(90deg, ${o} 0%, ${c} 100%);
      background-size: 200% auto;
      animation: ${g} 1s linear infinite;
    `}}
`;function f({percent:e,size:r="md",invert:n=!1}){return t.jsx(d,{$invert:n,$size:r,$isDeterminate:!0,children:t.jsx(u,{$isDeterminate:!0,$invert:n,style:{width:`${e}%`}})})}try{Determinate.displayName="Determinate",Determinate.__docgenInfo={description:"",displayName:"Determinate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function v({size:e="md",invert:r=!1}){return t.jsx(d,{$invert:r,$size:e,children:t.jsx(u,{$invert:r})})}try{Indeterminate.displayName="Indeterminate",Indeterminate.__docgenInfo={description:"",displayName:"Indeterminate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function s({variant:e,...r}){return e==="determinate"?t.jsx(f,{...r}):t.jsx(v,{...r})}s.displayName="FISProgressLinear";try{s.displayName="FISProgressLinear",s.__docgenInfo={description:"",displayName:"FISProgressLinear",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},invert:{defaultValue:null,description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}export{s as F};
