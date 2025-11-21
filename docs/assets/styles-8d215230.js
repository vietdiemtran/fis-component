import{d as i,g as t}from"./getTheme-1aacf7d7.js";const a=i.div`
  display: flex;
  flex-direction: column;
  gap: ${t("com/input/vertical-gap")};
  width: 100%;
`,e=i.span`
  ${t("Subheading/XS")}
  color: ${t("com/input/character-limit/label/default/color-text")};
  padding-right: ${t("com/input/character-limit/horizontal-padding")};
  padding-left: ${t("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${t("com/input/character-limit/label/over-limit/color-text")};
  }
`,n=i.div`
  display: flex;
  justify-content: space-between;
`,l=i.span`
  ${t("Paragraph/XS")}
  color: ${t("com/input/hint/neutral/label/color-text")};
  padding-top: ${t("com/input/hint/top-padding")};

  &.negative {
    color: ${t("com/input/hint/negative/label/color-text")};
  }

  &.positive {
    color: ${t("com/input/hint/positive/label/color-text")};
  }

  &.disabled {
    color: ${t("com/input/hint/disable/label/color-text")};
  }
`;export{a as D,l as S,n as a,e as b};
