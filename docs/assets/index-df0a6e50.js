import{j as s}from"./jsx-runtime-e7d94ccb.js";import{r as y}from"./index-981f9478.js";import{a as h,g as e,r as o}from"./getTheme-9564f801.js";import{F as C}from"./index-b885ca0b.js";import{F as S}from"./index-df9a4235.js";import{d as j}from"./InfoSolidIcon-78d566e9.js";import{c as g}from"./index-f7beeda4.js";const b=t=>r=>{const u=r.$theme??"neutral",l=r.theme;return o`
      color: ${l[`com/chips-button/theme/icon/color-icon/${t}/${u}`]};
    `},p=t=>r=>{const u=r.$theme??"neutral",l=r.theme;return o`
      color: ${l[`com/chips-button/theme/label/color-text/${t}/${u}`]};
    `},i=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  outline-offset: -${e("com/chips-button/stroke-width/default")};

  &.no-padding {
    padding-right: 0;
  }

  &.no-padding-horizontal {
    padding-right: 0;
    padding-left: 0;
  }

  ${t=>{switch(t.$size){case"xs":return o`
          height: ${e("com/chips-button/size-xs/height")};
          min-width: ${e("com/chips-button/size-xs/min-width")};
          min-height: ${e("com/chips-button/size-xs/height")};
          max-height: ${e("com/chips-button/size-xs/height")};
          border-radius: ${e("com/chips-button/size-xs/corner-radius")};
          padding-left: ${e("com/chips-button/size-xs/left-padding")};
          padding-right: ${e("com/chips-button/size-xs/right-padding")};
          gap: ${e("com/chips-button/size-xs/horizontal-gap")};
        `;case"sm":return o`
          height: ${e("com/chips-button/size-sm/height")};
          min-width: ${e("com/chips-button/size-sm/min-width")};
          min-height: ${e("com/chips-button/size-sm/height")};
          max-height: ${e("com/chips-button/size-sm/height")};
          border-radius: ${e("com/chips-button/size-sm/corner-radius")};
          padding-left: ${e("com/chips-button/size-sm/left-padding")};
          padding-right: ${e("com/chips-button/size-sm/right-padding")};
          gap: ${e("com/chips-button/size-sm/horizontal-gap")};
        `;case"md":return o`
          height: ${e("com/chips-button/size-md/height")};
          min-width: ${e("com/chips-button/size-md/min-width")};
          min-height: ${e("com/chips-button/size-md/height")};
          max-height: ${e("com/chips-button/size-md/height")};
          border-radius: ${e("com/chips-button/size-md/corner-radius")};
          padding-left: ${e("com/chips-button/size-md/left-padding")};
          padding-right: ${e("com/chips-button/size-md/right-padding")};
          gap: ${e("com/chips-button/size-md/horizontal-gap")};
        `;case"lg":return o`
          height: ${e("com/chips-button/size-lg/height")};
          min-width: ${e("com/chips-button/size-lg/min-width")};
          min-height: ${e("com/chips-button/size-lg/height")};
          max-height: ${e("com/chips-button/size-lg/height")};
          border-radius: ${e("com/chips-button/size-lg/corner-radius")};
          padding-left: ${e("com/chips-button/size-lg/left-padding")};
          padding-right: ${e("com/chips-button/size-lg/right-padding")};
          gap: ${e("com/chips-button/size-lg/horizontal-gap")};
        `}}};

  ${t=>t.$rounded&&o`
      border-radius: ${e("com/chips-button/corner-radius-round")};
    `};

  ${t=>{switch(t.$theme){case"neutral":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/neutral")};
          background-color: ${e("com/chips-button/theme/background-color/default/neutral")};
        `;case"orange":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/orange")};
          background-color: ${e("com/chips-button/theme/background-color/default/orange")};
        `;case"yellow":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/yellow")};
          background-color: ${e("com/chips-button/theme/background-color/default/yellow")};
        `;case"lime":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/lime")};
          background-color: ${e("com/chips-button/theme/background-color/default/lime")};
        `;case"green":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/green")};
          background-color: ${e("com/chips-button/theme/background-color/default/green")};
        `;case"ocean":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/ocean")};
          background-color: ${e("com/chips-button/theme/background-color/default/ocean")};
        `;case"blue":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/blue")};
          background-color: ${e("com/chips-button/theme/background-color/default/blue")};
        `;case"indigo":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/indigo")};
          background-color: ${e("com/chips-button/theme/background-color/default/indigo")};
        `;case"violet":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/violet")};
          background-color: ${e("com/chips-button/theme/background-color/default/violet")};
        `;case"pink":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/pink")};
          background-color: ${e("com/chips-button/theme/background-color/default/pink")};
        `;case"red":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/red")};
          background-color: ${e("com/chips-button/theme/background-color/default/red")};
        `;case"brand":return o`
          outline: ${e("com/chips-button/stroke-width/default")} solid
            ${e("com/chips-button/theme/color-stroke/default/brand")};
          background-color: ${e("com/chips-button/theme/background-color/default/brand")};
        `}}}

  &:hover:not(:has(.button-icon:hover)) {
    outline-offset: -${e("com/chips-button/stroke-width/hover")};
    ${t=>{switch(t.$theme){case"neutral":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/neutral")};
            background-color: ${e("com/chips-button/theme/background-color/hover/neutral")};
          `;case"orange":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/orange")};
            background-color: ${e("com/chips-button/theme/background-color/hover/orange")};
          `;case"yellow":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/yellow")};
            background-color: ${e("com/chips-button/theme/background-color/hover/yellow")};
          `;case"lime":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/lime")};
            background-color: ${e("com/chips-button/theme/background-color/hover/lime")};
          `;case"green":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/green")};
            background-color: ${e("com/chips-button/theme/background-color/hover/green")};
          `;case"ocean":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/ocean")};
            background-color: ${e("com/chips-button/theme/background-color/hover/ocean")};
          `;case"blue":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/blue")};
            background-color: ${e("com/chips-button/theme/background-color/hover/blue")};
          `;case"indigo":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/indigo")};
            background-color: ${e("com/chips-button/theme/background-color/hover/indigo")};
          `;case"violet":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/violet")};
            background-color: ${e("com/chips-button/theme/background-color/hover/violet")};
          `;case"pink":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/pink")};
            background-color: ${e("com/chips-button/theme/background-color/hover/pink")};
          `;case"red":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/red")};
            background-color: ${e("com/chips-button/theme/background-color/hover/red")};
          `;case"brand":return o`
            outline: ${e("com/chips-button/stroke-width/hover")} solid
              ${e("com/chips-button/theme/color-stroke/hover/brand")};
            background-color: ${e("com/chips-button/theme/background-color/hover/brand")};
          `}}}
  }

  &:active {
    box-shadow: ${e("Elevation/Level-1")};
    outline-offset: -${e("com/chips-button/stroke-width/pressed")};
    ${t=>{switch(t.$theme){case"neutral":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/neutral")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/neutral")};
          `;case"orange":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/orange")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/orange")};
          `;case"yellow":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/yellow")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/yellow")};
          `;case"lime":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/lime")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/lime")};
          `;case"green":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/green")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/green")};
          `;case"ocean":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/ocean")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/ocean")};
          `;case"blue":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/blue")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/blue")};
          `;case"indigo":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/indigo")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/indigo")};
          `;case"violet":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/violet")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/violet")};
          `;case"pink":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/pink")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/pink")};
          `;case"red":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/red")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/red")};
          `;case"brand":return o`
            outline: ${e("com/chips-button/stroke-width/pressed")} solid
              ${e("com/chips-button/theme/color-stroke/pressed/brand")};
            background-color: ${e("com/chips-button/theme/background-color/pressed/brand")};
          `}}}
  }

  &.selected {
    outline-offset: -${e("com/chips-button/stroke-width/selected")};
    ${t=>{switch(t.$theme){case"neutral":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/neutral")};
            background-color: ${e("com/chips-button/theme/background-color/selected/neutral")};
          `;case"orange":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/orange")};
            background-color: ${e("com/chips-button/theme/background-color/selected/orange")};
          `;case"yellow":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/yellow")};
            background-color: ${e("com/chips-button/theme/background-color/selected/yellow")};
          `;case"lime":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/lime")};
            background-color: ${e("com/chips-button/theme/background-color/selected/lime")};
          `;case"green":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/green")};
            background-color: ${e("com/chips-button/theme/background-color/selected/green")};
          `;case"ocean":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/ocean")};
            background-color: ${e("com/chips-button/theme/background-color/selected/ocean")};
          `;case"blue":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/blue")};
            background-color: ${e("com/chips-button/theme/background-color/selected/blue")};
          `;case"indigo":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/indigo")};
            background-color: ${e("com/chips-button/theme/background-color/selected/indigo")};
          `;case"violet":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/violet")};
            background-color: ${e("com/chips-button/theme/background-color/selected/violet")};
          `;case"pink":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/pink")};
            background-color: ${e("com/chips-button/theme/background-color/selected/pink")};
          `;case"red":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/red")};
            background-color: ${e("com/chips-button/theme/background-color/selected/red")};
          `;case"brand":return o`
            outline: ${e("com/chips-button/stroke-width/selected")} solid
              ${e("com/chips-button/theme/color-stroke/selected/brand")};
            background-color: ${e("com/chips-button/theme/background-color/selected/brand")};
          `}}}
  }

  ${({$disabled:t})=>{if(t)return o`
        cursor: not-allowed;
        pointer-events: none;
        background-color: ${e("com/chips-button/disable/background-color")};
        outline: ${e("com/chips-button/stroke-width/default")} solid
          ${e("com/chips-button/disable/color-stroke")};
      `}}
`,I=h.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>{switch(t.$size){case"xs":return o`
          width: ${e("com/chips-button/size-xs/icon/size-icon")};
          height: ${e("com/chips-button/size-xs/icon/size-icon")};
        `;case"sm":return o`
          width: ${e("com/chips-button/size-sm/icon/size-icon")};
          height: ${e("com/chips-button/size-sm/icon/size-icon")};
        `;case"md":return o`
          width: ${e("com/chips-button/size-md/icon/size-icon")};
          height: ${e("com/chips-button/size-md/icon/size-icon")};
        `;case"lg":return o`
          width: ${e("com/chips-button/size-lg/icon/size-icon")};
          height: ${e("com/chips-button/size-lg/icon/size-icon")};
        `}}}

  ${t=>{switch(t.$theme){case"neutral":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/neutral")};
        `;case"orange":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/orange")};
        `;case"yellow":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/yellow")};
        `;case"lime":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/lime")};
        `;case"green":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/green")};
        `;case"ocean":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/ocean")};
        `;case"blue":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/blue")};
        `;case"indigo":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/indigo")};
        `;case"violet":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/violet")};
        `;case"pink":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/pink")};
        `;case"red":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/red")};
        `;case"brand":return o`
          color: ${e("com/chips-button/theme/icon/color-icon/default/brand")};
        `}}}

  ${i}:hover:not(:has(.button-icon:hover)) & {
    ${b("hover")}
  }

  ${i}:active & {
    ${b("pressed")}
  }

  ${i}.selected & {
    ${b("selected")}
  }

${({$disabled:t})=>{if(t)return o`
        color: ${e("com/chips-button/disable/color-icon")};
      `}}
`,q=h.span`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  &.no-padding {
    padding-right: 0;
  }

  ${t=>{switch(t.$size){case"xs":return o`
          ${e("Label/XS")};
          padding-right: 0;
          padding-left: 0;
        `;case"sm":return o`
          ${e("Label/Sm")};
          padding-right: ${e("com/chips-button/size-sm/sub-spacing")};
          padding-left: ${e("com/chips-button/size-sm/sub-spacing")};
        `;case"md":return o`
          ${e("Label/Sm")};
          padding-right: ${e("com/button/size-md/label/sub-spacing")};
          padding-left: ${e("com/button/size-md/label/sub-spacing")};
        `;case"lg":return o`
          ${e("Label/Sm")};
          padding-right: ${e("com/button/size-lg/label/sub-spacing")};
          padding-left: ${e("com/button/size-lg/label/sub-spacing")};
        `}}}

  ${t=>{switch(t.$theme){case"neutral":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/neutral")};
        `;case"orange":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/orange")};
        `;case"yellow":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/yellow")};
        `;case"lime":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/lime")};
        `;case"green":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/green")};
        `;case"ocean":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/ocean")};
        `;case"blue":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/blue")};
        `;case"indigo":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/indigo")};
        `;case"violet":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/violet")};
        `;case"pink":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/pink")};
        `;case"red":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/red")};
        `;case"brand":return o`
          color: ${e("com/chips-button/theme/label/color-text/default/brand")};
        `}}}

  ${i}:hover:not(:has(.button-icon:hover)) & {
    ${p("hover")}
  }

  ${i}:active & {
    ${p("pressed")}
  }

  ${i}.selected & {
    ${p("selected")}
  }

  ${({$disabled:t})=>{if(t)return o`
        color: ${e("com/chips-button/disable/color-text")};
      `}}
`,N=h.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  ${t=>{switch(t.$size){case"xs":return o`
          width: 24px;
          height: 24px;
        `;case"sm":return o`
          width: 28px;
          height: 28px;
        `;case"md":return o`
          width: 36px;
          height: 36px;
        `;case"lg":return o`
          width: 44px;
          height: 44px;
        `}}};

  ${({$disabled:t})=>{if(t)return o`
        background-color: ${e("com/button/disable/background-color-transparent")};
      `}}

  .button-icon {
    pointer-events: auto;
  }
`,d=y.forwardRef((t,r)=>{const{className:u,icon:l,label:k,size:c="xs",theme:a="neutral",rounded:f=!1,srcAvatar:$="",closeable:m,selected:w,disabled:n,onClickClose:v,...z}=t,x=c==="xs"?"2xs":c==="sm"?"xs":c==="md"?"sm":"md";return s.jsxs(i,{...z,ref:r,$size:c,$theme:a,$rounded:f,$disabled:n,className:g(u,{selected:w,"no-padding":m}),children:[$?s.jsx(C,{size:x,src:$,disabled:n,dotBadge:!n}):l&&s.jsx(I,{$size:c,$theme:a,$disabled:n,children:l}),s.jsx(q,{$size:c,$theme:a,$disabled:n,className:g({"no-padding":m}),children:k}),m&&s.jsx(N,{$size:c,$disabled:n,className:"button-icon",children:s.jsx(S,{size:c,variant:"tertiary-invisible",icon:s.jsx(j,{}),onClick:v,disabled:n})})]})});d.displayName="FISChipButton";const E=d;try{d.displayName="FISChipButton",d.__docgenInfo={description:"",displayName:"FISChipButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"lime"'},{value:'"green"'},{value:'"ocean"'},{value:'"blue"'},{value:'"indigo"'},{value:'"violet"'},{value:'"pink"'},{value:'"brand"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},closeable:{defaultValue:null,description:"",name:"closeable",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClickClose:{defaultValue:null,description:"",name:"onClickClose",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},srcAvatar:{defaultValue:null,description:"",name:"srcAvatar",required:!1,type:{name:"string"}}}}}catch{}export{E as F};
