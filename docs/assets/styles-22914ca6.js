import{a as n,g as o,r as e,u as i}from"./getTheme-9564f801.js";const r=n.div`
  display: flex;
  flex-direction: column;
  width: unset;
  min-width: ${o("com/menu/min-width")};
  max-height: ${({$maxHeight:t})=>t?typeof t=="number"?`${t}px`:t:o("com/menu/max-height")};
  border-radius: ${o("com/menu/corner-radius")};
  border: ${o("com/menu/border/stroke-width")} solid
    ${o("com/menu/border/color-stroke")};
  padding-top: ${o("com/menu/top-padding")};
  padding-bottom: ${o("com/menu/bottom-padding")};
  padding-left: ${o("com/menu/left-padding")};
  padding-right: ${o("com/menu/right-padding")};
  /* gap: ${o("com/menu/item/horizontal-gap")}; */
  background-color: ${o("com/menu/background-color")};
  box-shadow: ${o("Elevation/Level-2")};
`,a=n.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${o("com/menu/item/horizontal-gap")};
  height: ${o("com/menu/height")};
`,m=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,p=n.p`
  margin: 0;
  ${o("Paragraph/Sm")}
  color: ${o("com/menu/item/action/label/color-text/default")};
`;n.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;const c=n.div`
  display: flex;
  flex-direction: column;
  gap: ${o("com/menu/vertical-gap")};
  min-height: ${o("com/menu/item/size-md/min-height")};
  background-color: ${o("com/menu/item/action/background-color/default")};
`,u=n.div`
  padding-bottom: ${o("com/alert-banner/bottom-padding")};
`,l=n.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% + ${o("com/scrollbar/thumb/thumb-width/default")});
  position: relative;

  ${({$removeSelectedGroup:t})=>t&&e`
      margin-bottom: calc(
        ${o("com/menu/item/size-md/min-height")} + 2 *
          ${o("com/menu/bottom-padding")}
      );
    `}

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 8px;
    border-radius: ${o("sem/dimension/radius/component/round")};
    margin-top: 40px;
  }

  &::-webkit-scrollbar-thumb {
    height: 8px;
    background-color: ${o("com/scrollbar/thumb/background-color/default")};
    border-radius: ${o("sem/dimension/radius/component/round")};
    margin-top: 40px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,s=n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${o("sem/color/background/neutral/canvas/default")};
  box-shadow: 0px -4px 32px -8px
    ${o("pri/elevation/shadow-ambient/color/sm")};
  padding: 8px;
  border: 1px solid ${o("com/menu/border/color-stroke")};
  border-top: none;
  border-bottom-left-radius: ${o("com/menu/corner-radius")};
  border-bottom-right-radius: ${o("com/menu/corner-radius")};
`;n.span`
  ${o("Subheading/XS")}
  color: ${o("com/menu/group-label/color-text")};
  padding-top: ${o("com/menu/group-label/vertical-padding")};
  padding-right: ${o("com/menu/group-label/horizontal-padding")};
  padding-bottom: ${o("com/menu/group-label/vertical-padding")};
  padding-left: ${o("com/menu/group-label/horizontal-padding")};
  margin: 0;
`;const g=i`
  .fis-menu-select-dropdown {
    .ant-dropdown-menu {
      border-radius: 12px;
      padding-top: ${o("com/menu/top-padding")} !important;
      padding-top: ${o("com/menu/top-padding")} !important;
      padding-right: ${o("com/menu/right-padding")} !important;
      padding-bottom: ${o("com/menu/bottom-padding")} !important;
      padding-left: ${o("com/menu/left-padding")} !important;
      border-width: ${o("com/menu/border/stroke-width")} !important;
      border-radius: ${o("com/menu/corner-radius")} !important;
      overflow-y: unset;
    }

    .ant-dropdown-menu-item {
      padding: 0 !important;
    }

    .ant-dropdown-menu-submenu-popup {
      margin-left: 12px;
    }

    .ant-dropdown-menu-item {
      padding: 0
    }



    .ant-dropdown-menu-item-divider {
      margin-top: ${o("com/divider/side-offset/xs")} !important;
      margin-right: ${o("com/divider/headpoint-offset/xs")} !important;
      margin-bottom: ${o("com/divider/side-offset/xs")} !important;
      margin-left: ${o("com/divider/headpoint-offset/xs")} !important;
    }
  }

  .ant-dropdown-menu-sub:has(.fis-menu-select-dropdown-item) {
    border-radius: 12px;
    padding-top: ${o("com/menu/top-padding")} !important;
    padding-top: ${o("com/menu/top-padding")} !important;
    padding-right: ${o("com/menu/right-padding")} !important;
    padding-bottom: ${o("com/menu/bottom-padding")} !important;
    padding-left: ${o("com/menu/left-padding")} !important;
    border-width: ${o("com/menu/border/stroke-width")} !important;
    border-radius: ${o("com/menu/corner-radius")} !important;
  }

  .ant-dropdown-menu-submenu-title:has(.fis-menu-select-dropdown-item), .ant-dropdown-menu-item:has(.fis-menu-select-dropdown-item) {
    padding: 0 !important;
  }

  .ant-dropdown-menu-submenu-expand-icon {
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
  }

 .ant-dropdown-menu-title-content:has(.fis-menu-select-dropdown-item) {
  p {
    font-weight: normal !important;
    /* Để tránh hiện tượng cumulative layout shift */
  }
   
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -30px;
      width: 30px;
      height: 100%;
      background: transparent;
      z-index: 9999;
    }
  }
`,b=n.div`
  position: absolute;
  inset-inline-end: 8px;
  color: ${o("com/menu/item/leveling/icon/color-icon/default")};

  &:hover {
    color: ${o("com/menu/item/leveling/icon/color-icon/hover")};
  }
`;export{r as D,b as E,s as F,g as M,p as P,u as a,a as b,m as c,l as d,c as e};
