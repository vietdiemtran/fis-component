import{j as g}from"./jsx-runtime-47c18db8.js";import{d as m,g as o,l as e}from"./getTheme-624682de.js";import{F as h}from"./index-63636042.js";import{c as b}from"./index-d16835b1.js";const f=m.div`
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

  &.no-label {
    gap: 0;
  }

  &.neutral-light {
    display: none;
  }
  &.only-label {
    ${a=>{switch(a.$size){case"sm":return e`
            padding-right: ${o("com/badge/size-sm/only-label/horizontal-padding")};
            padding-left: ${o("com/badge/size-sm/only-label/horizontal-padding")};
          `;case"md":return e`
            padding-right: ${o("com/badge/size-md/only-label/horizontal-padding")};
            padding-left: ${o("com/badge/size-md/only-label/horizontal-padding")};
          `;case"lg":return e`
            padding-right: ${o("com/badge/size-lg/only-label/horizontal-padding")};
            padding-left: ${o("com/badge/size-lg/only-label/horizontal-padding")};
          `}}};
  }

  &.only-icon {
    ${a=>{switch(a.$size){case"sm":return e`
            padding-right: 0px;
            padding-left: 0px;
            min-width: ${o("com/badge/size-sm/height")};
            max-width: ${o("com/badge/size-sm/height")};
          `;case"md":return e`
            padding-right: 0px;
            padding-left: 0px;
            min-width: ${o("com/badge/size-md/height")};
            max-width: ${o("com/badge/size-md/height")};
          `;case"lg":return e`
            padding-right: 0px;
            padding-left: 0px;
            min-width: ${o("com/badge/size-lg/height")};
            max-width: ${o("com/badge/size-lg/height")};
          `}}};
  }

  ${({$disabled:a})=>a&&e`
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
        `;case"neutral-light":return e`
          border-color: ${o("com/badge/default/color-stroke/neutral")};
          background-color: ${o("com/badge/default/background-color/neutral-light")};
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

  ${({$disabled:a})=>a&&e`
      border-color: ${o("com/badge/disable/color-stroke")};
      background-color: ${o("com/badge/disable/background-color")};

      &.solid {
        background-color: ${o("com/badge/disable/background-color")};
        border: ${o("com/badge/stroke-width")} solid
          ${o("com/badge/disable/color-stroke")};
      }
    `}
`,p=m.div`
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
        `;case"neutral-light":return e`
          color: ${o("com/badge/default/icon/color-icon/neutral-light")};
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
  
  ${({$disabled:a})=>a&&e`
      color: ${o("com/badge/disable/icon/color-icon")};

      &.solid {
        color: ${o("com/badge/disable/icon/color-icon")};
      }
    `}
`,k=m.span`
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
        `;case"neutral-light":return e`
          color: ${o("com/badge/default/label/color-text/neutral-light")};
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

${({$disabled:a})=>a&&e`
      color: ${o("com/badge/disable/label/color-text")};

      &.solid {
        color: ${o("com/badge/disable/label/color-text")};
      }
    `}
`,s=({className:a,icon:l,label:c,size:r="sm",color:i,status:u,type:t="default",src:d,disabled:n=!1})=>{const $=r==="sm"||r==="md"?"2xs":"xs";return g.jsxs(f,{$size:r,$color:i,$status:u,className:b(a,{solid:t==="solid","no-label":!c,"neutral-light":i==="neutral-light"&&t==="solid","only-label":!!c&&!l&&!d,"only-icon":!!l&&!c&&!d}),$disabled:n,children:[r!=="xs"&&(d?g.jsx(h,{size:$,src:d,disabled:n}):l?g.jsx(p,{$size:r,$color:i,$status:u,className:b({solid:t==="solid"}),$disabled:n,children:l}):null),c&&g.jsx(k,{$size:r,$color:i,$status:u,className:b({solid:t==="solid","only-label":!l&&!d}),$disabled:n,children:c})]})};s.displayName="FISBadge";const y=s;try{s.displayName="FISBadge",s.__docgenInfo={description:"",displayName:"FISBadge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"red"'},{value:'"yellow"'},{value:'"blue"'},{value:'"neutral"'},{value:'"orange"'},{value:'"lime"'},{value:'"ocean"'},{value:'"indigo"'},{value:'"violet"'},{value:'"pink"'},{value:'"neutral-light"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"positive"'},{value:'"negative"'},{value:'"caution"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"solid"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}}}}}catch{}export{y as F};
