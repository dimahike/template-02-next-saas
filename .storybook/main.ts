import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config) => {
    config.oxc = {
      ...(config.oxc === false ? {} : config.oxc),
      jsx: {
        ...(config.oxc && typeof config.oxc.jsx === "object" ? config.oxc.jsx : {}),
        runtime: "automatic",
        importSource: "react"
      }
    };
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(projectRoot)
    };
    return config;
  }
};

export default config;
