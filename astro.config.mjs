import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cashforclankers.github.io",
  base: "/maui-field-guide",
  output: "static",
  build: {
    assets: "_assets",
  },
});
