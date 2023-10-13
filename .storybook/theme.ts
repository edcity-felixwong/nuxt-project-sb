import { create } from "@storybook/theming/create";

export default create({
    base: 'light',
  // Typography
  fontBase: `'Inter',"Open Sans", sans-serif`,
  fontCode: ` Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`,

  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
//   appBorderColor: '#585C6D',
  appBorderRadius: 16,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
//   barTextColor: '#9E9E9E',
//   barSelectedColor: '#585C6D',
//   barBg: '#ffffff',

  // Form colors
//   inputBg: '#ffffff',
//   inputBorder: '#10162F',
//   inputTextColor: '#10162F',
  inputBorderRadius: 16,
//   base: "light",

//   appBorderRadius: 16,
//   inputBorderRadius: 16,

//   fontBase: `Inter`,
//   fontCode: ``,

//   brandTitle: "My custom Storybook",
//   brandUrl: "https://example.com",
//   brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
//   brandTarget: "_self",
});
