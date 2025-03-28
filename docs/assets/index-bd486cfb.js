import{j as l}from"./jsx-runtime-47c18db8.js";import{d as b,l as e}from"./styled-components.browser.esm-c9db8114.js";import{g as o}from"./getTheme-fd88fed7.js";import{F as f}from"./index-ae7e2e3f.js";import{c as u}from"./index-d16835b1.js";const k=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  box-sizing: border-box;
  background-color: ${o("com/badge/default/background-color/neutral")};
  border: ${o("com/badge/stroke-width")} solid
    ${o("com/badge/default/color-stroke/neutral")};

  &.solid {
    border: none;
  }

  ${({$disable:a})=>a&&e`
      border-color: ${o("com/badge/disable/color-stroke")};
      background-color: ${o("com/badge/disable/background-color")};

      &.solid {
        background-color: ${o("com/badge/disable/background-color")};
      }
    `}

  ${a=>{switch(a.$size){case"xs":return e`
          min-height: ${o("com/badge/size-xs/height")};
          max-height: ${o("com/badge/size-xs/height")};
          border-radius: ${o("com/badge/size-xs/corner-radius")};
          border: ${o("com/badge/stroke-width")} solid
            ${o("com/badge/default/color-stroke/neutral")};
          padding-left: calc(
            ${o("com/badge/size-xs/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          padding-right: calc(
            ${o("com/badge/size-xs/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
        `;case"sm":return e`
          min-height: ${o("com/badge/size-sm/height")};
          max-height: ${o("com/badge/size-sm/height")};
          border-radius: ${o("com/badge/size-sm/corner-radius")};
          border: ${o("com/badge/stroke-width")} solid
            ${o("com/badge/default/color-stroke/neutral")};
          padding-left: calc(
            ${o("com/badge/size-sm/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          padding-right: calc(
            ${o("com/badge/size-sm/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          gap: ${o("com/badge/size-sm/horizontal-gap")};
        `;case"md":return e`
          min-height: ${o("com/badge/size-md/height")};
          max-height: ${o("com/badge/size-md/height")};
          border-radius: ${o("com/badge/size-md/corner-radius")};
          border: ${o("com/badge/stroke-width")} solid
            ${o("com/badge/default/color-stroke/neutral")};
          padding-left: calc(
            ${o("com/badge/size-md/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          padding-right: calc(
            ${o("com/badge/size-md/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          gap: ${o("com/badge/size-md/horizontal-gap")};
        `;case"lg":return e`
          min-height: ${o("com/badge/size-lg/height")};
          max-height: ${o("com/badge/size-lg/height")};
          border-radius: ${o("com/badge/size-lg/corner-radius")};
          background-color: ${o("com/badge/default/background-color/neutral")};
          border: ${o("com/badge/stroke-width")} solid
            ${o("com/badge/default/color-stroke/neutral")};
          padding-left: calc(
            ${o("com/badge/size-lg/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          padding-right: calc(
            ${o("com/badge/size-lg/horizontal-padding")} -
              ${o("com/badge/stroke-width")}
          );
          gap: ${o("com/badge/size-lg/horizontal-gap")};
        `}}};

  ${a=>{switch(a.$color){case"neutral":return e`
          border-color: ${o("com/badge/default/color-stroke/neutral")};
          background-color: ${o("com/badge/default/background-color/neutral")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/neutral")};
          }
        `;case"orange":return e`
          border-color: ${o("com/badge/default/color-stroke/orange")};
          background-color: ${o("com/badge/default/background-color/orange")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/orange")};
          }
        `;case"yellow":return e`
          border-color: ${o("com/badge/default/color-stroke/yellow")};
          background-color: ${o("com/badge/default/background-color/yellow")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/yellow")};
          }
        `;case"lime":return e`
          border-color: ${o("com/badge/default/color-stroke/lime")};
          background-color: ${o("com/badge/default/background-color/lime")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/lime")};
          }
        `;case"green":return e`
          border-color: ${o("com/badge/default/color-stroke/green")};
          background-color: ${o("com/badge/default/background-color/green")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/green")};
          }
        `;case"ocean":return e`
          border-color: ${o("com/badge/default/color-stroke/ocean")};
          background-color: ${o("com/badge/default/background-color/ocean")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/ocean")};
          }
        `;case"blue":return e`
          border-color: ${o("com/badge/default/color-stroke/blue")};
          background-color: ${o("com/badge/default/background-color/blue")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/blue")};
          }
        `;case"indigo":return e`
          border-color: ${o("com/badge/default/color-stroke/indigo")};
          background-color: ${o("com/badge/default/background-color/indigo")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/indigo")};
          }
        `;case"violet":return e`
          border-color: ${o("com/badge/default/color-stroke/violet")};
          background-color: ${o("com/badge/default/background-color/violet")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/violet")};
          }
        `;case"pink":return e`
          border-color: ${o("com/badge/default/color-stroke/pink")};
          background-color: ${o("com/badge/default/background-color/pink")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/pink")};
          }
        `;case"red":return e`
          border-color: ${o("com/badge/default/color-stroke/red")};
          background-color: ${o("com/badge/default/background-color/red")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/red")};
          }
        `}}}
  ${a=>{switch(a.$status){case"info":return e`
          border-color: ${o("com/badge/default/color-stroke/info")};
          background-color: ${o("com/badge/default/background-color/info")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/info")};
          }
        `;case"caution":return e`
          border-color: ${o("com/badge/default/color-stroke/caution")};
          background-color: ${o("com/badge/default/background-color/caution")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/caution")};
          }
        `;case"positive":return e`
          border-color: ${o("com/badge/default/color-stroke/positive")};
          background-color: ${o("com/badge/default/background-color/positive")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/positive")};
          }
        `;case"negative":return e`
          border-color: ${o("com/badge/default/color-stroke/negative")};
          background-color: ${o("com/badge/default/background-color/negative")};

          &.solid {
            background-color: ${o("com/badge/solid/background-color/negative")};
          }
        `}}}
`,p=b.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }

  &.solid {
    color: ${o("com/badge/solid/icon/color-icon")};
  }

  ${({$disable:a})=>a&&e`
      color: ${o("com/badge/disable/icon/color-icon")};
    `}

  ${a=>{switch(a.$size){case"sm":return e`
          width: ${o("com/badge/size-sm/icon/size-icon")};
          height: ${o("com/badge/size-sm/icon/size-icon")};
        `;case"md":return e`
          width: ${o("com/badge/size-md/icon/size-icon")};
          height: ${o("com/badge/size-md/icon/size-icon")};
        `;case"lg":return e`
          width: ${o("com/badge/size-lg/icon/size-icon")};
          height: ${o("com/badge/size-lg/icon/size-icon")};
        `}}}

  ${a=>{switch(a.$color){case"neutral":return e`
          color: ${o("com/badge/default/icon/color-icon/neutral")};
        `;case"orange":return e`
          color: ${o("com/badge/default/icon/color-icon/orange")};
        `;case"yellow":return e`
          color: ${o("com/badge/default/icon/color-icon/yellow")};
        `;case"lime":return e`
          color: ${o("com/badge/default/icon/color-icon/lime")};
        `;case"green":return e`
          color: ${o("com/badge/default/icon/color-icon/green")};
        `;case"ocean":return e`
          color: ${o("com/badge/default/icon/color-icon/ocean")};
        `;case"blue":return e`
          color: ${o("com/badge/default/icon/color-icon/blue")};
        `;case"indigo":return e`
          color: ${o("com/badge/default/icon/color-icon/indigo")};
        `;case"violet":return e`
          color: ${o("com/badge/default/icon/color-icon/violet")};
        `;case"pink":return e`
          color: ${o("com/badge/default/icon/color-icon/pink")};
        `;case"red":return e`
          color: ${o("com/badge/default/icon/color-icon/red")};
        `}}}

  
  ${a=>{switch(a.$status){case"info":return e`
          color: ${o("com/badge/default/icon/color-icon/info")};
        `;case"caution":return e`
          color: ${o("com/badge/default/icon/color-icon/caution")};
        `;case"positive":return e`
          color: ${o("com/badge/default/icon/color-icon/positive")};
        `;case"negative":return e`
          color: ${o("com/badge/default/icon/color-icon/negative")};
        `}}}
`,h=b.span`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.solid {
    color: ${o("com/badge/solid/label/color-text")};
  }

  &.only-label {
    padding-right: 0;
    padding-left: 0;
  }

  ${({$disable:a})=>a&&e`
      color: ${o("com/badge/disable/label/color-text")};
    `}

  ${a=>{switch(a.$size){case"xs":return e`
          padding-right: 0;
          padding-left: 0;
          ${o("Subheading/XS")}
        `;case"sm":return e`
          padding-right: ${o("com/badge/size-sm/sub-spacing")};
          padding-left: ${o("com/badge/size-sm/sub-spacing")};
          ${o("Label/XS")}
        `;case"md":return e`
          padding-right: ${o("com/badge/size-md/sub-spacing")};
          padding-left: ${o("com/badge/size-md/sub-spacing")};
          ${o("Label/Sm")}
        `;case"lg":return e`
          padding-right: ${o("com/badge/size-lg/sub-spacing")};
          padding-left: ${o("com/badge/size-lg/sub-spacing")};
          ${o("Label/Md")}
        `}}}

  ${a=>{switch(a.$color){case"neutral":return e`
          color: ${o("com/badge/default/label/color-text/neutral")};
        `;case"orange":return e`
          color: ${o("com/badge/default/label/color-text/orange")};
        `;case"yellow":return e`
          color: ${o("com/badge/default/label/color-text/yellow")};
        `;case"lime":return e`
          color: ${o("com/badge/default/label/color-text/lime")};
        `;case"green":return e`
          color: ${o("com/badge/default/label/color-text/green")};
        `;case"ocean":return e`
          color: ${o("com/badge/default/label/color-text/ocean")};
        `;case"blue":return e`
          color: ${o("com/badge/default/label/color-text/blue")};
        `;case"indigo":return e`
          color: ${o("com/badge/default/label/color-text/indigo")};
        `;case"violet":return e`
          color: ${o("com/badge/default/label/color-text/violet")};
        `;case"pink":return e`
          color: ${o("com/badge/default/label/color-text/pink")};
        `;case"red":return e`
          color: ${o("com/badge/default/label/color-text/red")};
        `}}}

${a=>{switch(a.$status){case"info":return e`
          color: ${o("com/badge/default/label/color-text/info")};
        `;case"caution":return e`
          color: ${o("com/badge/default/label/color-text/caution")};
        `;case"positive":return e`
          color: ${o("com/badge/default/label/color-text/positive")};
        `;case"negative":return e`
          color: ${o("com/badge/default/label/color-text/negative")};
        `}}}
`,d=({className:a,icon:i,label:m,size:r="md",color:t,status:n,type:g="default",src:s,disable:c=!1})=>{const $=r==="sm"||r==="md"?"2xs":"xs";return l.jsxs(k,{$size:r,$color:t,$status:n,className:u(a,{solid:g==="solid"}),$disable:c,children:[r!=="xs"&&(s?l.jsx(f,{size:$,src:s,disable:c}):i?l.jsx(p,{$size:r,$color:t,$status:n,className:u({solid:g==="solid"}),$disable:c,children:i}):null),l.jsx(h,{$size:r,$color:t,$status:n,className:u({solid:g==="solid","only-label":!i&&!s}),$disable:c,children:m})]})};d.displayName="FISBadge";const S=d;try{d.displayName="FISBadge",d.__docgenInfo={description:"",displayName:"FISBadge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"lime"'},{value:'"green"'},{value:'"ocean"'},{value:'"blue"'},{value:'"indigo"'},{value:'"violet"'},{value:'"pink"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"disable"'},{value:'"info"'},{value:'"caution"'},{value:'"positive"'},{value:'"negative"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"solid"'}]}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},disable:{defaultValue:{value:"false"},description:"",name:"disable",required:!1,type:{name:"boolean"}}}}}catch{}export{S as F};
