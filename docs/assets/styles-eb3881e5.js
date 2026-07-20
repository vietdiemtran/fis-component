import{a as i,g as t}from"./getTheme-9564f801.js";const a=i.div`
  display: flex;
  flex-direction: column;
  gap: ${t("com/input/vertical-gap")};

  /* Keep the default full width while letting consumer utility classes win. */
  :where(&) {
    width: 100%;
  }
`,o=i.span`
  ${t("Subheading/XS")}
  color: ${t("com/input/character-limit/label/default/color-text")};
  padding-right: ${t("com/input/character-limit/horizontal-padding")};
  padding-left: ${t("com/input/character-limit/horizontal-padding")};

  &.negative {
    color: ${t("com/input/character-limit/label/over-limit/color-text")};
  }
`,l=i.div`
  display: flex;
  justify-content: space-between;
`,n=i.span`
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
`;export{a as D,n as S,l as a,o as b};
