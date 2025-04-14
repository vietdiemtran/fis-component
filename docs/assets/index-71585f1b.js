import{j as t}from"./jsx-runtime-47c18db8.js";import{d as o,l as a,g as e}from"./getTheme-21dde6f8.js";const g=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  ${r=>{switch(r.$size){case"2xs":return a`
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
  ${r=>{switch(r.$color){case"neutral":return a`
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
        `}}}
    // size of the avatar
    ${r=>{switch(r.$size){case"2xs":return a`
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
    ${r=>{switch(r.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          ${()=>{switch(r.$size){case"2xs":return a`
                  border-radius: ${e("com/avatar/size-2xs/corner-radius")};
                `;case"xs":return a`
                  border-radius: ${e("com/avatar/size-xs/corner-radius")};
                `;case"sm":return a`
                  border-radius: ${e("com/avatar/size-sm/corner-radius")};
                `;case"md":return a`
                  border-radius: ${e("com/avatar/size-md/corner-radius")};
                `;case"lg":return a`
                  border-radius: ${e("com/avatar/size-lg/corner-radius")};
                `;case"xl":return a`
                  border-radius: ${e("com/avatar/size-xl/corner-radius")};
                `}}};
        `}}};

  ${({$disabled:r})=>{if(r)return a`
        cursor: not-allowed;
        border-color: ${e("com/avatar/disable/color-stroke")};
        background-color: ${e("com/avatar/disable/background-color")};
      `}}

  &:focus {
    box-shadow:
      0 0 0 2px ${e("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${e("com/focus-mark/color-stroke")};
  }

  ${({$disabled:r})=>r&&a`
      border-color: ${e("com/avatar/disable/color-stroke")};
      background-color: ${e("com/avatar/disable/background-color")};
    `}
`,x=o.img`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  // badge of the avatar
  ${r=>{switch(r.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          ${()=>{switch(r.$size){case"2xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-2xs/corner-radius")} -
                      ${e("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xs/corner-radius")} -
                      ${e("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-sm/corner-radius")} -
                      ${e("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-md/corner-radius")} -
                      ${e("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-lg/corner-radius")} -
                      ${e("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xl/corner-radius")} -
                      ${e("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}}}
`,b=o.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${r=>{switch(r.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          ${()=>{switch(r.$size){case"2xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-2xs/corner-radius")} -
                      ${e("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xs/corner-radius")} -
                      ${e("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-sm/corner-radius")} -
                      ${e("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-md/corner-radius")} -
                      ${e("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-lg/corner-radius")} -
                      ${e("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xl/corner-radius")} -
                      ${e("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}}}
`,z=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${e("com/avatar/disable/background-color")};
  opacity: 0.35;
  border-radius: inherit;
  pointer-events: none;
`,w=o.div`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${r=>{switch(r.$size){case"2xs":return a`
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
  ${r=>{switch(r.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          ${()=>{switch(r.$size){case"2xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-2xs/corner-radius")} -
                      ${e("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xs/corner-radius")} -
                      ${e("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-sm/corner-radius")} -
                      ${e("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-md/corner-radius")} -
                      ${e("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-lg/corner-radius")} -
                      ${e("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xl/corner-radius")} -
                      ${e("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}}}

${r=>{switch(r.$color){case"neutral":return a`
          color: ${e("com/avatar/theme/icon/color-icon/neutral")};
        `;case"orange":return a`
          color: ${e("com/avatar/theme/icon/color-icon/orange")};
        `;case"yellow":return a`
          color: ${e("com/avatar/theme/icon/color-icon/yellow")};
        `;case"lime":return a`
          color: ${e("com/avatar/theme/icon/color-icon/lime")};
        `;case"green":return a`
          color: ${e("com/avatar/theme/icon/color-icon/green")};
        `;case"ocean":return a`
          color: ${e("com/avatar/theme/icon/color-icon/ocean")};
        `;case"blue":return a`
          color: ${e("com/avatar/theme/icon/color-icon/blue")};
        `;case"indigo":return a`
          color: ${e("com/avatar/theme/icon/color-icon/indigo")};
        `;case"violet":return a`
          color: ${e("com/avatar/theme/icon/color-icon/violet")};
        `;case"pink":return a`
          color: ${e("com/avatar/theme/icon/color-icon/pink")};
        `}}}

  ${({$disabled:r})=>{if(r)return a`
        color: ${e("com/avatar/disable/color-icon")};
      `}}
`,p=o.span`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;

  ${r=>{switch(r.$size){case"2xs":return a`
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

  ${r=>{switch(r.$color){case"neutral":return a`
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
        `}}}
  
  ${r=>{switch(r.$badge){case"rounded":return a`
          border-radius: ${e("com/avatar/corner-radius-rounded")};
        `;case"square":return a`
          ${()=>{switch(r.$size){case"2xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-2xs/corner-radius")} -
                      ${e("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xs/corner-radius")} -
                      ${e("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-sm/corner-radius")} -
                      ${e("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-md/corner-radius")} -
                      ${e("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-lg/corner-radius")} -
                      ${e("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return a`
                  border-radius: calc(
                    ${e("com/avatar/size-xl/corner-radius")} -
                      ${e("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}}}

  ${({$disabled:r})=>{if(r)return a`
        color: ${e("com/avatar/disable/color-text")};
      `}}
`,k=o.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  border: ${e("com/avatar/status-badge/size-lg/stroke-width")} solid
    ${e("com/avatar/status-badge/color-stroke")};
  border-radius: ${e("sem/dimension/radius/component/round")};

  ${r=>{switch(r.$size){case"xl":return a`
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
  ${r=>{switch(r.$status){case"green":return a`
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
`,n=({className:r,src:l,alt:u="Avatar",badge:i="rounded",size:c="xl",icon:m,status:h="green",color:d="neutral",letter:$,disabled:s,isBadgeDot:v=!1})=>t.jsxs(g,{className:r,$size:c,$badge:i,$color:d,$disabled:s,children:[l?t.jsxs(b,{$badge:i,children:[t.jsx(x,{$badge:i,src:l,alt:u}),s&&t.jsx(z,{})]}):m?t.jsx(w,{$size:c,$badge:i,$color:d,$disabled:s,children:m}):t.jsx(p,{$size:c,$badge:i,$color:d,$disabled:s,children:$}),v&&t.jsx(k,{$size:c,$status:h})]});n.displayName="FISAvatar";const q=n;try{n.displayName="FISAvatar",n.__docgenInfo={description:"",displayName:"FISAvatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},alt:{defaultValue:{value:"Avatar"},description:"",name:"alt",required:!1,type:{name:"string"}},letter:{defaultValue:null,description:"",name:"letter",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"2xs"'},{value:'"xl"'}]}},status:{defaultValue:{value:"green"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"red"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'}]}},isBadgeDot:{defaultValue:{value:"false"},description:"",name:"isBadgeDot",required:!1,type:{name:"boolean"}},badge:{defaultValue:{value:"rounded"},description:"",name:"badge",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"without"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"neutral"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"orange"'},{value:'"yellow"'},{value:'"lime"'},{value:'"green"'},{value:'"ocean"'},{value:'"blue"'},{value:'"indigo"'},{value:'"violet"'},{value:'"pink"'}]}}}}}catch{}export{q as F};
