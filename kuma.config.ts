import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
    fonts: {
        body: "Noto Sans JP, sans-serif",
        heading: "Noto Sans JP, sans-serif",
        monospace: "Noto Sans JP, sans-serif",
    },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
