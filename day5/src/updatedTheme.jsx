import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from "./ui-components";

const updatedTheme = createTheme(
  {
    // Extend the theme to update the button color
    name: "my-theme-updates",
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: {
              value: "#b71c1c",
            },
          },
        },
      },
    },
  },
  studioTheme
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={updatedTheme}>
    <App />
  </ThemeProvider>
);
