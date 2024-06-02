import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { colors } from "~/styles/colors";
import { sizes } from "~/styles/sizes";
import { textStyles } from "~/styles/typo";

const globalCss = defineGlobalStyles({
  html: {
    height: "100%",
  },
  "*:focus-visible": {
    outlineColor: "Primary",
    outlineWidth: "1",
    outlineStyle: "solid",
    outlineOffset: 0,
  },
});

export default defineConfig({
  globalCss,
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],
  presets: ["@pandacss/preset-base"],
  // Useful for theme customization
  theme: {
    textStyles,
    tokens: {
      colors,
      sizes,
      radii: sizes,
      spacing: sizes,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
