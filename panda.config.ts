import { defineConfig } from "@pandacss/dev";
import { colors } from "~/styles/colors";
import { sizes } from "~/styles/sizes";
import { textStyles } from "~/styles/typo";

export default defineConfig({
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
