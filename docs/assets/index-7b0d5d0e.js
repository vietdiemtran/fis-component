import{j as o}from"./jsx-runtime-50395f49.js";import{d as i,l as a}from"./styled-components.browser.esm-6b0ce59b.js";import{g as e}from"./getTheme-fd88fed7.js";const g=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>{switch(t.$size){case"2xs":return a`
          border: ${e("com/avatar/size-2xs/stroke-width")} solid
            ${e("com/avatar/theme/color-stroke/neutral")};
        `;case"xs":return a`
          border: ${e("com/avatar/size-xs/stroke-width")} solid
            ${e("com/avatar/theme/color-stroke/neutral")};
        `;case"sm":return a`
          border: ${e("com/avatar/size-sm/stroke-width")} solid
            ${e("com/avatar/theme/color-stroke/neutral")};
        `;case"md":return a`
          border: ${e("com/avatar/size-md/stroke-width")} solid
            ${e("com/avatar/theme/color-stroke/neutral")};
        `;case"lg":return a`
          border: ${e("com/avatar/size-lg/stroke-width")} solid
            ${e("com/avatar/theme/color-stroke/neutral")};
        `;case"xl":return a`
          border: ${e("com/avatar/size-xl/stroke-width")} solid
            ${e("com/avatar/theme/color-stroke/neutral")};
        `}}}
  ${t=>{switch(t.$color){case"neutral":return a`
          border-color: ${e("com/avatar/theme/color-stroke/neutral")};
          background-color: ${e("com/avatar/theme/background-color/neutral")};
        `;case"orange":return a`
          border-color: ${e("com/avatar/theme/color-stroke/orange")};
          background-color: ${e("com/avatar/theme/background-color/orange")};
        `;case"yellow":return a`
          border-color: ${e("com/avatar/theme/color-stroke/yellow")};
          background-color: ${e("com/avatar/theme/background-color/yellow")};
        `;case"lime":return a`
          border-color: ${e("com/avatar/theme/color-stroke/lime")};
          background-color: ${e("com/avatar/theme/background-color/lime")};
        `;case"green":return a`
          border-color: ${e("com/avatar/theme/color-stroke/green")};
          background-color: ${e("com/avatar/theme/background-color/green")};
        `;case"ocean":return a`
          border-color: ${e("com/avatar/theme/color-stroke/ocean")};
          background-color: ${e("com/avatar/theme/background-color/ocean")};
        `;case"blue":return a`
          border-color: ${e("com/avatar/theme/color-stroke/blue")};
          background-color: ${e("com/avatar/theme/background-color/blue")};
        `;case"indigo":return a`
          border-color: ${e("com/avatar/theme/color-stroke/indigo")};
          background-color: ${e("com/avatar/theme/background-color/indigo")};
        `;case"violet":return a`
          border-color: ${e("com/avatar/theme/color-stroke/violet")};
          background-color: ${e("com/avatar/theme/background-color/violet")};
        `;case"pink":return a`
          border-color: ${e("com/avatar/theme/color-stroke/pink")};
          background-color: ${e("com/avatar/theme/background-color/pink")};
        `;case"disable":return a`
          border-color: ${e("com/avatar/disable/color-stroke")};
          background-color: ${e("com/avatar/disable/background-color")};
        `}}}
    // size of the avatar
    ${t=>{switch(t.$size){case"2xs":return a`
          width: ${e("com/avatar/size-2xs/width")};
          height: ${e("com/avatar/size-2xs/height")};
          min-width: ${e("com/avatar/size-2xs/width")};
          max-width: ${e("com/avatar/size-2xs/width")};
          min-height: ${e("com/avatar/size-2xs/height")};
          max-height: ${e("com/avatar/size-2xs/height")};
        `;case"xs":return a`
          width: ${e("com/avatar/size-xs/width")};
          height: ${e("com/avatar/size-xs/height")};
          min-width: ${e("com/avatar/size-xs/width")};
          max-width: ${e("com/avatar/size-xs/width")};
          min-height: ${e("com/avatar/size-xs/height")};
          max-height: ${e("com/avatar/size-xs/height")};
        `;case"sm":return a`
          width: ${e("com/avatar/size-sm/width")};
          height: ${e("com/avatar/size-sm/height")};
          min-width: ${e("com/avatar/size-sm/width")};
          max-width: ${e("com/avatar/size-sm/width")};
          min-height: ${e("com/avatar/size-sm/height")};
          max-height: ${e("com/avatar/size-sm/height")};
        `;case"md":return a`
          width: ${e("com/avatar/size-md/width")};
          height: ${e("com/avatar/size-md/height")};
          min-width: ${e("com/avatar/size-md/width")};
          max-width: ${e("com/avatar/size-md/width")};
          min-height: ${e("com/avatar/size-md/height")};
          max-height: ${e("com/avatar/size-md/height")};
        `;case"lg":return a`
          width: ${e("com/avatar/size-lg/width")};
          height: ${e("com/avatar/size-lg/height")};
          min-width: ${e("com/avatar/size-lg/width")};
          max-width: ${e("com/avatar/size-lg/width")};
          min-height: ${e("com/avatar/size-lg/height")};
          max-height: ${e("com/avatar/size-lg/height")};
        `;case"xl":return a`
          width: ${e("com/avatar/size-xl/width")};
          height: ${e("com/avatar/size-xl/height")};
          min-width: ${e("com/avatar/size-xl/width")};
          max-width: ${e("com/avatar/size-xl/width")};
          min-height: ${e("com/avatar/size-xl/height")};
          max-height: ${e("com/avatar/size-xl/height")};
        `}}}
    ${t=>{switch(t.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          border-radius: ${e("com/avatar/size-xl/corner-radius")};
        `}}};
`,v=i.img`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  // badge of the avatar
  ${t=>{switch(t.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          border-radius: ${e("com/avatar/size-xl/corner-radius")};
        `}}}
`,$=i.div`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>{switch(t.$size){case"2xs":return a`
          width: ${e("com/avatar/size-2xs/size-icon")};
          height: ${e("com/avatar/size-2xs/size-icon")};
        `;case"xs":return a`
          width: ${e("com/avatar/size-xs/size-icon")};
          height: ${e("com/avatar/size-xs/size-icon")};
        `;case"sm":return a`
          width: ${e("com/avatar/size-sm/size-icon")};
          height: ${e("com/avatar/size-sm/size-icon")};
        `;case"md":return a`
          width: ${e("com/avatar/size-md/size-icon")};
          height: ${e("com/avatar/size-md/size-icon")};
        `;case"lg":return a`
          width: ${e("com/avatar/size-lg/size-icon")};
          height: ${e("com/avatar/size-lg/size-icon")};
        `;case"xl":return a`
          width: ${e("com/avatar/size-xl/size-icon")};
          height: ${e("com/avatar/size-xl/size-icon")};
        `}}}
  // badge of the avatar
    ${t=>{switch(t.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          border-radius: ${e("com/avatar/size-xl/corner-radius")};
        `}}}
`,x=i.span`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;

  ${t=>{switch(t.$size){case"2xs":return a`
          font-size: 8px;
          font: ${e("sem/typo/subheading/font")};
          font-weight: ${e("sem/typo/subheading/weight")};
          font-size: 8px;
          line-height: ${e("sem/typo/subheading/line-height/xs")};
          letter-spacing: ${e("sem/typo/subheading/letter-spacing/xs")};
          text-align: center;
        `;case"xs":return a`
          font-size: 8px;
          font: ${e("sem/typo/subheading/font")};
          font-weight: ${e("sem/typo/subheading/weight")};
          font-size: 8px;
          line-height: ${e("sem/typo/subheading/line-height/xs")};
          letter-spacing: ${e("sem/typo/subheading/letter-spacing/xs")};
          text-align: center;
        `;case"sm":return a`
          ${e("Subheading/XS")};
        `;case"md":return a`
          ${e("Subheading/Sm")};
        `;case"lg":return a`
          ${e("Subheading/Md")};
        `;case"xl":return a`
          ${e("Subheading/Lg")};
        `}}}

  ${t=>{switch(t.$color){case"neutral":return a`
          color: ${e("com/avatar/theme/label/color-text/neutral")};
        `;case"orange":return a`
          color: ${e("com/avatar/theme/label/color-text/orange")};
        `;case"yellow":return a`
          color: ${e("com/avatar/theme/label/color-text/yellow")};
        `;case"lime":return a`
          color: ${e("com/avatar/theme/label/color-text/lime")};
        `;case"green":return a`
          color: ${e("com/avatar/theme/label/color-text/green")};
        `;case"ocean":return a`
          color: ${e("com/avatar/theme/label/color-text/ocean")};
        `;case"blue":return a`
          color: ${e("com/avatar/theme/label/color-text/blue")};
        `;case"indigo":return a`
          color: ${e("com/avatar/theme/label/color-text/indigo")};
        `;case"violet":return a`
          color: ${e("com/avatar/theme/label/color-text/violet")};
        `;case"pink":return a`
          color: ${e("com/avatar/theme/label/color-text/pink")};
        `;case"disable":return a`
          color: ${e("com/avatar/disable/color-text")};
        `}}}
  
  // badge of the avatar
    ${t=>{switch(t.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          border-radius: ${e("com/avatar/size-xl/corner-radius")};
        `}}}
`,b=i.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  border: ${e("com/avatar/status-badge/size-lg/stroke-width")} solid
    ${e("com/avatar/status-badge/color-stroke")};
  border-radius: ${e("sem/dimension/radius/component/round")};

  ${t=>{switch(t.$size){case"xl":return a`
          width: 10px;
          height: 10px;
          min-width: 10px;
          max-width: 10px;
          min-height: 10px;
          max-height: 10px;
        `;case"lg":return a`
          width: 8px;
          height: 8px;
          min-width: 8px;
          max-width: 8px;
          min-height: 8px;
          max-height: 8px;
        `;case"md":return a`
          width: 8px;
          height: 8px;
          min-width: 8px;
          max-width: 8px;
          min-height: 8px;
          max-height: 8px;
        `;case"sm":return a`
          width: 6px;
          height: 6px;
          min-width: 6px;
          max-width: 6px;
          min-height: 6px;
          max-height: 6px;
        `;case"xs":return a`
          width: 6px;
          height: 6px;
          min-width: 6px;
          max-width: 6px;
          min-height: 6px;
          max-height: 6px;
        `;case"2xs":return a`
          width: 4px;
          height: 4px;
          min-width: 4px;
          max-width: 4px;
          min-height: 4px;
          max-height: 4px;
        `}}}
  ${t=>{switch(t.$status){case"green":return a`
          background-color: ${e("com/avatar/status-badge/theme/green")};
        `;case"red":return a`
          background-color: ${e("com/avatar/status-badge/theme/red")};
        `;case"yellow":return a`
          background-color: ${e("com/avatar/status-badge/theme/yellow")};
        `;case"blue":return a`
          background-color: ${e("com/avatar/status-badge/theme/blue")};
        `;case"neutral":return a`
          background-color: ${e("com/avatar/status-badge/theme/neutral")};
        `}}}
`,p=({className:t,src:n,alt:d="Avatar",badge:s="rounded",size:r="xl",icon:l,status:h="green",color:m="neutral",letter:c,isBadgeDot:u=!0})=>o.jsxs(g,{className:t,$size:r,$badge:s,$color:m,children:[n?o.jsx(v,{$size:r,$badge:s,src:n,alt:d}):l?o.jsx($,{$size:r,$badge:s,children:l}):o.jsx(x,{$size:r,$badge:s,$color:m,children:c==null?void 0:c.slice(0,2)}),u&&o.jsx(b,{$size:r,$status:h})]}),f=p;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},alt:{defaultValue:{value:"Avatar"},description:"",name:"alt",required:!1,type:{name:"string"}},letter:{defaultValue:null,description:"",name:"letter",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"2xs"'},{value:'"xl"'}]}},status:{defaultValue:{value:"green"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"red"'},{value:'"yellow"'},{value:'"blue"'},{value:'"neutral"'}]}},isBadgeDot:{defaultValue:{value:"true"},description:"",name:"isBadgeDot",required:!1,type:{name:"boolean"}},badge:{defaultValue:{value:"rounded"},description:"",name:"badge",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"without"'}]}},color:{defaultValue:{value:"neutral"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"yellow"'},{value:'"blue"'},{value:'"neutral"'},{value:'"orange"'},{value:'"lime"'},{value:'"ocean"'},{value:'"indigo"'},{value:'"violet"'},{value:'"pink"'},{value:'"disable"'}]}}}}}catch{}export{f as F};
