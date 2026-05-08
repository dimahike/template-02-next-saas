import type { Preview } from "@storybook/react-vite";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      options: {
        app: { name: "app", value: "rgb(var(--color-bg))" },
        surface: { name: "surface", value: "rgb(var(--color-surface))" }
      }
    }
  },

  initialGlobals: {
    backgrounds: {
      value: "app"
    }
  }
};

export default preview;
