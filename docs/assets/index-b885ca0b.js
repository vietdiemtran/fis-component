import{j as t}from"./jsx-runtime-e7d94ccb.js";import{a as o,r as e,g as a}from"./getTheme-9564f801.js";const g=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  ${r=>{switch(r.$size){case"2xs":return e`
          border: ${a("com/avatar/size-2xs/stroke-width")} solid
            ${a("com/avatar/theme/color-stroke/neutral")};
        `;case"xs":return e`
          border: ${a("com/avatar/size-xs/stroke-width")} solid
            ${a("com/avatar/theme/color-stroke/neutral")};
        `;case"sm":return e`
          border: ${a("com/avatar/size-sm/stroke-width")} solid
            ${a("com/avatar/theme/color-stroke/neutral")};
        `;case"md":return e`
          border: ${a("com/avatar/size-md/stroke-width")} solid
            ${a("com/avatar/theme/color-stroke/neutral")};
        `;case"lg":return e`
          border: ${a("com/avatar/size-lg/stroke-width")} solid
            ${a("com/avatar/theme/color-stroke/neutral")};
        `;case"xl":return e`
          border: ${a("com/avatar/size-xl/stroke-width")} solid
            ${a("com/avatar/theme/color-stroke/neutral")};
        `}}}
  ${r=>{switch(r.$color){case"neutral":return e`
          border-color: ${a("com/avatar/theme/color-stroke/neutral")};
          background-color: ${a("com/avatar/theme/background-color/neutral")};
        `;case"orange":return e`
          border-color: ${a("com/avatar/theme/color-stroke/orange")};
          background-color: ${a("com/avatar/theme/background-color/orange")};
        `;case"yellow":return e`
          border-color: ${a("com/avatar/theme/color-stroke/yellow")};
          background-color: ${a("com/avatar/theme/background-color/yellow")};
        `;case"lime":return e`
          border-color: ${a("com/avatar/theme/color-stroke/lime")};
          background-color: ${a("com/avatar/theme/background-color/lime")};
        `;case"green":return e`
          border-color: ${a("com/avatar/theme/color-stroke/green")};
          background-color: ${a("com/avatar/theme/background-color/green")};
        `;case"ocean":return e`
          border-color: ${a("com/avatar/theme/color-stroke/ocean")};
          background-color: ${a("com/avatar/theme/background-color/ocean")};
        `;case"blue":return e`
          border-color: ${a("com/avatar/theme/color-stroke/blue")};
          background-color: ${a("com/avatar/theme/background-color/blue")};
        `;case"indigo":return e`
          border-color: ${a("com/avatar/theme/color-stroke/indigo")};
          background-color: ${a("com/avatar/theme/background-color/indigo")};
        `;case"violet":return e`
          border-color: ${a("com/avatar/theme/color-stroke/violet")};
          background-color: ${a("com/avatar/theme/background-color/violet")};
        `;case"pink":return e`
          border-color: ${a("com/avatar/theme/color-stroke/pink")};
          background-color: ${a("com/avatar/theme/background-color/pink")};
        `}}}
    // size of the avatar
    ${r=>{switch(r.$size){case"2xs":return e`
          width: ${a("com/avatar/size-2xs/width")};
          height: ${a("com/avatar/size-2xs/height")};
          min-width: ${a("com/avatar/size-2xs/width")};
          max-width: ${a("com/avatar/size-2xs/width")};
          min-height: ${a("com/avatar/size-2xs/height")};
          max-height: ${a("com/avatar/size-2xs/height")};
        `;case"xs":return e`
          width: ${a("com/avatar/size-xs/width")};
          height: ${a("com/avatar/size-xs/height")};
          min-width: ${a("com/avatar/size-xs/width")};
          max-width: ${a("com/avatar/size-xs/width")};
          min-height: ${a("com/avatar/size-xs/height")};
          max-height: ${a("com/avatar/size-xs/height")};
        `;case"sm":return e`
          width: ${a("com/avatar/size-sm/width")};
          height: ${a("com/avatar/size-sm/height")};
          min-width: ${a("com/avatar/size-sm/width")};
          max-width: ${a("com/avatar/size-sm/width")};
          min-height: ${a("com/avatar/size-sm/height")};
          max-height: ${a("com/avatar/size-sm/height")};
        `;case"md":return e`
          width: ${a("com/avatar/size-md/width")};
          height: ${a("com/avatar/size-md/height")};
          min-width: ${a("com/avatar/size-md/width")};
          max-width: ${a("com/avatar/size-md/width")};
          min-height: ${a("com/avatar/size-md/height")};
          max-height: ${a("com/avatar/size-md/height")};
        `;case"lg":return e`
          width: ${a("com/avatar/size-lg/width")};
          height: ${a("com/avatar/size-lg/height")};
          min-width: ${a("com/avatar/size-lg/width")};
          max-width: ${a("com/avatar/size-lg/width")};
          min-height: ${a("com/avatar/size-lg/height")};
          max-height: ${a("com/avatar/size-lg/height")};
        `;case"xl":return e`
          width: ${a("com/avatar/size-xl/width")};
          height: ${a("com/avatar/size-xl/height")};
          min-width: ${a("com/avatar/size-xl/width")};
          max-width: ${a("com/avatar/size-xl/width")};
          min-height: ${a("com/avatar/size-xl/height")};
          max-height: ${a("com/avatar/size-xl/height")};
        `}}}
    ${r=>r.$rounded?e`
          border-radius: ${a("com/avatar/corner-radius-rounded")};
        `:e`
          ${()=>{switch(r.$size){case"2xs":return e`
                  border-radius: ${a("com/avatar/size-2xs/corner-radius")};
                `;case"xs":return e`
                  border-radius: ${a("com/avatar/size-xs/corner-radius")};
                `;case"sm":return e`
                  border-radius: ${a("com/avatar/size-sm/corner-radius")};
                `;case"md":return e`
                  border-radius: ${a("com/avatar/size-md/corner-radius")};
                `;case"lg":return e`
                  border-radius: ${a("com/avatar/size-lg/corner-radius")};
                `;case"xl":return e`
                  border-radius: ${a("com/avatar/size-xl/corner-radius")};
                `}}};
        `};

  ${({$disabled:r})=>{if(r)return e`
        cursor: not-allowed;
        border-color: ${a("com/avatar/disable/color-stroke")};
        background-color: ${a("com/avatar/disable/background-color")};
      `}}

  &:focus-visible {
    box-shadow:
      0 0 0 2px ${a("com/focus-mark/color-gap-spacing")},
      0 0 0 4px ${a("com/focus-mark/color-stroke")};
  }

  ${({$disabled:r})=>r&&e`
      border-color: ${a("com/avatar/disable/color-stroke")};
      background-color: ${a("com/avatar/disable/background-color")};
    `}
`,x=o.img`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${r=>r.$rounded?e`
          border-radius: ${a("com/avatar/corner-radius-rounded")};
        `:e`
          ${()=>{switch(r.$size){case"2xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-2xs/corner-radius")} -
                      ${a("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xs/corner-radius")} -
                      ${a("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-sm/corner-radius")} -
                      ${a("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-md/corner-radius")} -
                      ${a("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-lg/corner-radius")} -
                      ${a("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xl/corner-radius")} -
                      ${a("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}
`,b=o.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${r=>r.$rounded?e`
          border-radius: ${a("com/avatar/corner-radius-rounded")};
        `:e`
          ${()=>{switch(r.$size){case"2xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-2xs/corner-radius")} -
                      ${a("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xs/corner-radius")} -
                      ${a("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-sm/corner-radius")} -
                      ${a("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-md/corner-radius")} -
                      ${a("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-lg/corner-radius")} -
                      ${a("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xl/corner-radius")} -
                      ${a("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}
`,z=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${a("com/avatar/disable/background-color")};
  opacity: 0.35;
  border-radius: inherit;
  pointer-events: none;
`,w=o.div`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${r=>{switch(r.$size){case"2xs":return e`
          width: ${a("com/avatar/size-2xs/size-icon")};
          height: ${a("com/avatar/size-2xs/size-icon")};
        `;case"xs":return e`
          width: ${a("com/avatar/size-xs/size-icon")};
          height: ${a("com/avatar/size-xs/size-icon")};
        `;case"sm":return e`
          width: ${a("com/avatar/size-sm/size-icon")};
          height: ${a("com/avatar/size-sm/size-icon")};
        `;case"md":return e`
          width: ${a("com/avatar/size-md/size-icon")};
          height: ${a("com/avatar/size-md/size-icon")};
        `;case"lg":return e`
          width: ${a("com/avatar/size-lg/size-icon")};
          height: ${a("com/avatar/size-lg/size-icon")};
        `;case"xl":return e`
          width: ${a("com/avatar/size-xl/size-icon")};
          height: ${a("com/avatar/size-xl/size-icon")};
        `}}}
  ${r=>r.$rounded?e`
          border-radius: ${a("com/avatar/corner-radius-rounded")};
        `:e`
          ${()=>{switch(r.$size){case"2xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-2xs/corner-radius")} -
                      ${a("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xs/corner-radius")} -
                      ${a("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-sm/corner-radius")} -
                      ${a("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-md/corner-radius")} -
                      ${a("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-lg/corner-radius")} -
                      ${a("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xl/corner-radius")} -
                      ${a("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}

${r=>{switch(r.$color){case"neutral":return e`
          color: ${a("com/avatar/theme/icon/color-icon/neutral")};
        `;case"orange":return e`
          color: ${a("com/avatar/theme/icon/color-icon/orange")};
        `;case"yellow":return e`
          color: ${a("com/avatar/theme/icon/color-icon/yellow")};
        `;case"lime":return e`
          color: ${a("com/avatar/theme/icon/color-icon/lime")};
        `;case"green":return e`
          color: ${a("com/avatar/theme/icon/color-icon/green")};
        `;case"ocean":return e`
          color: ${a("com/avatar/theme/icon/color-icon/ocean")};
        `;case"blue":return e`
          color: ${a("com/avatar/theme/icon/color-icon/blue")};
        `;case"indigo":return e`
          color: ${a("com/avatar/theme/icon/color-icon/indigo")};
        `;case"violet":return e`
          color: ${a("com/avatar/theme/icon/color-icon/violet")};
        `;case"pink":return e`
          color: ${a("com/avatar/theme/icon/color-icon/pink")};
        `}}}

  ${({$disabled:r})=>{if(r)return e`
        color: ${a("com/avatar/disable/color-icon")};
      `}}
`,k=o.span`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;

  ${r=>{switch(r.$size){case"2xs":return e`
          font-size: 8px;
          font: ${a("sem/typo/subheading/font")};
          font-weight: ${a("sem/typo/subheading/weight")};
          font-size: 8px;
          line-height: ${a("sem/typo/subheading/line-height/xs")};
          letter-spacing: ${a("sem/typo/subheading/letter-spacing/xs")};
          text-align: center;
        `;case"xs":return e`
          font-size: 8px;
          font: ${a("sem/typo/subheading/font")};
          font-weight: ${a("sem/typo/subheading/weight")};
          font-size: 8px;
          line-height: ${a("sem/typo/subheading/line-height/xs")};
          letter-spacing: ${a("sem/typo/subheading/letter-spacing/xs")};
          text-align: center;
        `;case"sm":return e`
          ${a("Subheading/XS")};
        `;case"md":return e`
          ${a("Subheading/Sm")};
        `;case"lg":return e`
          ${a("Subheading/Md")};
        `;case"xl":return e`
          ${a("Subheading/Lg")};
        `}}}

  ${r=>{switch(r.$color){case"neutral":return e`
          color: ${a("com/avatar/theme/label/color-text/neutral")};
        `;case"orange":return e`
          color: ${a("com/avatar/theme/label/color-text/orange")};
        `;case"yellow":return e`
          color: ${a("com/avatar/theme/label/color-text/yellow")};
        `;case"lime":return e`
          color: ${a("com/avatar/theme/label/color-text/lime")};
        `;case"green":return e`
          color: ${a("com/avatar/theme/label/color-text/green")};
        `;case"ocean":return e`
          color: ${a("com/avatar/theme/label/color-text/ocean")};
        `;case"blue":return e`
          color: ${a("com/avatar/theme/label/color-text/blue")};
        `;case"indigo":return e`
          color: ${a("com/avatar/theme/label/color-text/indigo")};
        `;case"violet":return e`
          color: ${a("com/avatar/theme/label/color-text/violet")};
        `;case"pink":return e`
          color: ${a("com/avatar/theme/label/color-text/pink")};
        `}}}
  
  ${r=>r.$rounded?e`
          border-radius: ${a("com/avatar/corner-radius-rounded")};
        `:e`
          ${()=>{switch(r.$size){case"2xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-2xs/corner-radius")} -
                      ${a("com/avatar/size-2xs/stroke-width")}
                  );
                `;case"xs":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xs/corner-radius")} -
                      ${a("com/avatar/size-xs/stroke-width")}
                  );
                `;case"sm":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-sm/corner-radius")} -
                      ${a("com/avatar/size-sm/stroke-width")}
                  );
                `;case"md":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-md/corner-radius")} -
                      ${a("com/avatar/size-md/stroke-width")}
                  );
                `;case"lg":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-lg/corner-radius")} -
                      ${a("com/avatar/size-lg/stroke-width")}
                  );
                `;case"xl":return e`
                  border-radius: calc(
                    ${a("com/avatar/size-xl/corner-radius")} -
                      ${a("com/avatar/size-xl/stroke-width")}
                  );
                `}}};
        `}

  ${({$disabled:r})=>{if(r)return e`
        color: ${a("com/avatar/disable/color-text")};
      `}}
`,p=o.div`
  position: absolute;
  border: ${a("com/avatar/status-badge/size-lg/stroke-width")} solid
    ${a("com/avatar/status-badge/color-stroke")};
  border-radius: ${a("sem/dimension/radius/component/round")};

  ${r=>{switch(r.$size){case"xl":return e`
          width: 10px;
          height: 10px;
          min-width: 10px;
          max-width: 10px;
          min-height: 10px;
          max-height: 10px;
          border-width: ${a("com/avatar/status-badge/size-lg/stroke-width")};
          bottom: calc(
            -${a("com/avatar/status-badge/size-lg/stroke-width")} -
              ${a("com/avatar/size-xl/stroke-width")}
          );
          right: calc(
            -${a("com/avatar/status-badge/size-lg/stroke-width")} -
              ${a("com/avatar/size-xl/stroke-width")}
          );
        `;case"lg":return e`
          width: 8px;
          height: 8px;
          min-width: 8px;
          max-width: 8px;
          min-height: 8px;
          max-height: 8px;
          border-width: ${a("com/avatar/status-badge/size-md/stroke-width")};
          bottom: calc(
            -${a("com/avatar/status-badge/size-md/stroke-width")} -
              ${a("com/avatar/size-lg/stroke-width")}
          );
          right: calc(
            -${a("com/avatar/status-badge/size-md/stroke-width")} -
              ${a("com/avatar/size-lg/stroke-width")}
          );
        `;case"md":return e`
          width: 8px;
          height: 8px;
          min-width: 8px;
          max-width: 8px;
          min-height: 8px;
          max-height: 8px;
          border-width: ${a("com/avatar/status-badge/size-md/stroke-width")};
          bottom: calc(
            -${a("com/avatar/status-badge/size-md/stroke-width")} -
              ${a("com/avatar/size-md/stroke-width")}
          );
          right: calc(
            -${a("com/avatar/status-badge/size-md/stroke-width")} -
              ${a("com/avatar/size-md/stroke-width")}
          );
        `;case"sm":return e`
          width: 6px;
          height: 6px;
          min-width: 6px;
          max-width: 6px;
          min-height: 6px;
          max-height: 6px;
          border-width: ${a("com/avatar/status-badge/size-sm/stroke-width")};
          bottom: calc(
            -${a("com/avatar/status-badge/size-sm/stroke-width")} -
              ${a("com/avatar/size-sm/stroke-width")}
          );
          right: calc(
            -${a("com/avatar/status-badge/size-sm/stroke-width")} -
              ${a("com/avatar/size-sm/stroke-width")}
          );
        `;case"xs":return e`
          width: 6px;
          height: 6px;
          min-width: 6px;
          max-width: 6px;
          min-height: 6px;
          max-height: 6px;
          border-width: ${a("com/avatar/status-badge/size-sm/stroke-width")};
          bottom: calc(
            -${a("com/avatar/status-badge/size-sm/stroke-width")} -
              ${a("com/avatar/size-xs/stroke-width")}
          );
          right: calc(
            -${a("com/avatar/status-badge/size-sm/stroke-width")} -
              ${a("com/avatar/size-xs/stroke-width")}
          );
        `;case"2xs":return e`
          width: 4px;
          height: 4px;
          min-width: 4px;
          max-width: 4px;
          min-height: 4px;
          max-height: 4px;
          border-width: ${a("com/avatar/status-badge/size-xs/stroke-width")};
          bottom: calc(
            -${a("com/avatar/status-badge/size-xs/stroke-width")} -
              ${a("com/avatar/size-2xs/stroke-width")}
          );
          right: calc(
            -${a("com/avatar/status-badge/size-xs/stroke-width")} -
              ${a("com/avatar/size-2xs/stroke-width")}
          );
        `}}}
  ${r=>{switch(r.$statusBadge){case"green":return e`
          background-color: ${a("com/avatar/status-badge/theme/green")};
        `;case"red":return e`
          background-color: ${a("com/avatar/status-badge/theme/red")};
        `;case"yellow":return e`
          background-color: ${a("com/avatar/status-badge/theme/yellow")};
        `;case"blue":return e`
          background-color: ${a("com/avatar/status-badge/theme/blue")};
        `;case"neutral":return e`
          background-color: ${a("com/avatar/status-badge/theme/neutral")};
        `}}}
`,d=({className:r,src:l,alt:h="Avatar",rounded:s=!0,size:i="xl",icon:u,statusBadge:$="green",color:m="neutral",letter:n,disabled:c,dotBadge:v=!1})=>t.jsxs(g,{className:r,$size:i,$rounded:s,$color:m,$disabled:c,tabIndex:c?-1:0,children:[l?t.jsxs(b,{$rounded:s,children:[t.jsx(x,{$rounded:s,$size:i,src:l,alt:h}),c&&t.jsx(z,{})]}):u?t.jsx(w,{$size:i,$rounded:s,$color:m,$disabled:c,children:u}):t.jsx(k,{$size:i,$rounded:s,$color:m,$disabled:c,children:n==null?void 0:n.slice(0,2)}),v&&t.jsx(p,{$size:i,$statusBadge:$})]});d.displayName="FISAvatar";const j=d;try{d.displayName="FISAvatar",d.__docgenInfo={description:"",displayName:"FISAvatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},alt:{defaultValue:{value:"Avatar"},description:"",name:"alt",required:!1,type:{name:"string"}},letter:{defaultValue:null,description:"",name:"letter",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xs"'}]}},statusBadge:{defaultValue:{value:"green"},description:"",name:"statusBadge",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"red"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'}]}},dotBadge:{defaultValue:{value:"false"},description:"",name:"dotBadge",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"true"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"neutral"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"orange"'},{value:'"yellow"'},{value:'"lime"'},{value:'"green"'},{value:'"ocean"'},{value:'"blue"'},{value:'"indigo"'},{value:'"violet"'},{value:'"pink"'}]}}}}}catch{}export{j as F};
