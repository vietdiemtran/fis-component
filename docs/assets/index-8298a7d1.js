import{j as r}from"./jsx-runtime-47c18db8.js";import{r as p}from"./index-d806aa85.js";import{m as V,d,l as c,g as i,n as M}from"./getTheme-624682de.js";const S=V`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`,q=e=>{switch(e){case"xs":return c`
        width: ${i("com/progress-indicator/circular/size-xs/width")};
        height: ${i("com/progress-indicator/circular/size-xs/width")};
      `;case"sm":return c`
        width: ${i("com/progress-indicator/circular/size-sm/width")};
        height: ${i("com/progress-indicator/circular/size-sm/width")};
      `;case"md":return c`
        width: ${i("com/progress-indicator/circular/size-md/width")};
        height: ${i("com/progress-indicator/circular/size-md/width")};
      `;default:return c`
        width: ${i("com/progress-indicator/circular/size-lg/width")};
        height: ${i("com/progress-indicator/circular/size-lg/width")};
      `}},x=e=>e?i("com/progress-indicator/invert/indicator/lead-color"):i("com/progress-indicator/default/indicator/lead-color"),y=e=>e?i("com/progress-indicator/invert/indicator/trail-color"):i("com/progress-indicator/default/indicator/trail-color"),D=d.svg`
  ${({$size:e})=>q(e)}

  .indicator {
    ${({$invert:e})=>c`
      background: conic-gradient(
        from 82.72deg at 50% 48.91%,
        ${y(e)} -3.6deg,
        ${x(e)} 252deg,
        ${y(e)} 356.4deg,
        ${x(e)} 612deg
      );
    `}
  }

  animation: ${S} 0.5s linear infinite;
`,R=d.svg`
  transform: rotate(-90deg);
`,E=d.div`
  position: relative;
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
  display: flex;
  justify-content: center;
  align-items: center;
`,_=d.circle`
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.35s ease;
`,F=/^\d+/,w=(e,t=0)=>{if(typeof e!="string")return t;const n=e.match(F),l=Number(n==null?void 0:n[0]);return isNaN(l)?t:l},P=(e,t,n)=>Math.min(Math.max(e,t),n),W=({percent:e=0,size:t="md",invert:n=!1,className:l})=>{const a=M(),u=p.useMemo(()=>P(e,0,100),[e]),{size:s,strokeWidth:f,radius:m,circumference:o}=p.useMemo(()=>{const j=w(a==null?void 0:a[`com/progress-indicator/circular/size-${t}/indicator/indicator`],0),I=w(a==null?void 0:a[`com/progress-indicator/circular/size-${t}/indicator/stroke-width`],0),h=Math.max(0,j),C=Math.max(0,I),v=(h-C)/2,k=2*Math.PI*Math.max(0,v);return{size:h,strokeWidth:C,radius:Math.max(0,v),circumference:k}},[t,a]),z=p.useMemo(()=>o<=0?0:o-u/100*o,[u,o]),N=a[`com/progress-indicator/circular/size-${t}/width`],$=n?a["com/progress-indicator/invert/background-color"]:a["com/progress-indicator/default/background-color"],b=n?a["com/progress-indicator/invert/indicator/lead-color"]:a["com/progress-indicator/default/indicator/lead-color"];return s<=0||m<=0?null:r.jsx(E,{$size:N,className:l,children:r.jsxs(R,{width:s,height:s,viewBox:`0 0 ${s} ${s}`,"aria-valuenow":u,role:"progressbar",children:[r.jsx(_,{cx:s/2,cy:s/2,r:m,stroke:$,strokeWidth:f,fill:"none"}),r.jsx(_,{cx:s/2,cy:s/2,r:m,stroke:b,strokeWidth:f,strokeDasharray:o,strokeDashoffset:z,fill:"none"})]})})};try{Determinate.displayName="Determinate",Determinate.__docgenInfo={description:"",displayName:"Determinate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function A({size:e="md",invert:t=!1,className:n}){return r.jsxs(D,{viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n,$invert:t,$size:e,children:[r.jsx("g",{clipPath:"url(#paint0_angular_9600_49736_clip_path)","data-figma-skip-parse":"true",children:r.jsx("g",{transform:"matrix(0.00190748 0.0149333 -0.0152598 0.00186667 22.3061 22)",children:r.jsx("foreignObject",{x:-1186.46,y:-1186.46,width:2372.92,height:2372.92,children:r.jsx("div",{className:"indicator",style:{height:"100%",width:"100%",opacity:1}})})})}),r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.7639 19.8789C33.8246 20.1776 32.8157 19.6745 32.5105 18.7553C31.899 16.9137 30.7791 15.2734 29.2744 14.0157C27.7697 12.7581 25.939 11.9322 23.9846 11.6293C22.0302 11.3264 20.0282 11.5582 18.2001 12.2993C16.3719 13.0403 14.7888 14.2617 13.6257 15.8283C12.4626 17.3949 11.7649 19.2457 11.6096 21.1762C11.4544 23.1066 11.8476 25.0415 12.746 26.7669C13.6443 28.4923 15.0127 29.9409 16.6999 30.9527C18.3871 31.9645 20.3273 32.5 22.3061 32.5C23.2937 32.5 24.0944 33.2835 24.0944 34.25C24.0944 35.2165 23.2937 36 22.3061 36C19.6677 36 17.0808 35.286 14.8312 33.937C12.5816 32.5879 10.7571 30.6564 9.55928 28.3559C8.36149 26.0554 7.8371 23.4755 8.04411 20.9016C8.25111 18.3276 9.18144 15.8598 10.7322 13.771C12.283 11.6822 14.3939 10.0537 16.8314 9.06569C19.2689 8.07764 21.9382 7.76847 24.5441 8.17237C27.1499 8.57627 29.5909 9.6775 31.5972 11.3543C33.6034 13.0311 35.0967 15.2182 35.912 17.6738C36.2172 18.593 35.7032 19.5802 34.7639 19.8789Z","data-figma-gradient-fill":'{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.18431372940540314,"g":0.23529411852359772,"b":0.75686275959014893,"a":1.0},"position":0.750},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.10999999940395355},"position":0.89999997615814209}],"stopsVar":[{"color":{"r":0.18431372940540314,"g":0.23529411852359772,"b":0.75686275959014893,"a":1.0},"position":0.750},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.10999999940395355},"position":0.89999997615814209}],"transform":{"m00":3.8149569034576416,"m01":-30.519655227661133,"m02":35.658443450927734,"m10":29.866659164428711,"m11":3.7333323955535889,"m12":5.2000064849853516},"opacity":1.0,"blendMode":"NORMAL","visible":true}'}),r.jsx("defs",{children:r.jsx("clipPath",{id:"paint0_angular_9600_49736_clip_path",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.7639 19.8789C33.8246 20.1776 32.8157 19.6745 32.5105 18.7553C31.899 16.9137 30.7791 15.2734 29.2744 14.0157C27.7697 12.7581 25.939 11.9322 23.9846 11.6293C22.0302 11.3264 20.0282 11.5582 18.2001 12.2993C16.3719 13.0403 14.7888 14.2617 13.6257 15.8283C12.4626 17.3949 11.7649 19.2457 11.6096 21.1762C11.4544 23.1066 11.8476 25.0415 12.746 26.7669C13.6443 28.4923 15.0127 29.9409 16.6999 30.9527C18.3871 31.9645 20.3273 32.5 22.3061 32.5C23.2937 32.5 24.0944 33.2835 24.0944 34.25C24.0944 35.2165 23.2937 36 22.3061 36C19.6677 36 17.0808 35.286 14.8312 33.937C12.5816 32.5879 10.7571 30.6564 9.55928 28.3559C8.36149 26.0554 7.8371 23.4755 8.04411 20.9016C8.25111 18.3276 9.18144 15.8598 10.7322 13.771C12.283 11.6822 14.3939 10.0537 16.8314 9.06569C19.2689 8.07764 21.9382 7.76847 24.5441 8.17237C27.1499 8.57627 29.5909 9.6775 31.5972 11.3543C33.6034 13.0311 35.0967 15.2182 35.912 17.6738C36.2172 18.593 35.7032 19.5802 34.7639 19.8789Z"})})})]})}try{Indeterminate.displayName="Indeterminate",Indeterminate.__docgenInfo={description:"",displayName:"Indeterminate",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},invert:{defaultValue:{value:"false"},description:"",name:"invert",required:!1,type:{name:"boolean"}}}}}catch{}function g({variant:e,...t}){return e==="determinate"?r.jsx(W,{...t}):r.jsx(A,{...t})}g.displayName="FISProgressCircular";try{g.displayName="FISProgressCircular",g.__docgenInfo={description:"",displayName:"FISProgressCircular",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'}]}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},invert:{defaultValue:null,description:"",name:"invert",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{g as F};
