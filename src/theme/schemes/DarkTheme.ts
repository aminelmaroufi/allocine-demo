import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";

// Définition des couleurs principales du thème
const themeColors = {
  primary: "#5569ff",
  secondary: "#6E759F",
  success: "#44D600",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#223354",
  white: "#ffffff",
  primaryAlt: "#000C57",
};

// Définir le thème sombre avec toutes les propriétés correctement typées
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark", // Active le mode sombre
    primary: {
      main: themeColors.primary,
      light: "#768fff",
      dark: "#0039cb",
    },
    secondary: {
      main: themeColors.secondary,
      light: "#9b8cb3",
      dark: "#3e4a64",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
    success: {
      main: themeColors.success,
    },
    error: {
      main: themeColors.error,
    },
    warning: {
      main: themeColors.warning,
    },
    info: {
      main: themeColors.info,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
  },
  // Add the missing properties
  colors: {
    gradients: {
      blue1: "",
      blue2: "",
      blue3: "",
      orange1: "",
      orange2: "",
      purple1: "",
      pink1: "",
      pink2: "",
      green1: "",
      black1: "",
    },
    shadows: {
      success: "",
      error: "",
      primary: "",
      warning: "",
    },
    alpha: {
      white: {
        5: "",
        10: "",
        30: "",
        50: "",
        70: "",
        100: "",
      },
      trueWhite: {
        5: "",
        10: "",
        30: "",
        50: "",
        70: "",
        100: "",
      },
      black: {
        5: "",
        10: "",
        30: "",
        50: "",
        70: "",
        100: "",
      },
    },
    secondary: {
      lighter: "",
      light: "",
      main: "",
      dark: "",
    },
    primary: {
      lighter: "",
      light: "",
      main: "",
      dark: "",
    },
    success: {
      lighter: "",
      light: "",
      main: "",
      dark: "",
    },
    warning: {
      lighter: "",
      light: "",
      main: "",
      dark: "",
    },
    error: {
      lighter: "",
      light: "",
      main: "",
      dark: "",
    },
    info: {
      lighter: "",
      light: "",
      main: "",
      dark: "",
    },
  },
  general: {
    reactFrameworkColor: undefined,
    borderRadiusSm: "",
    borderRadius: "",
    borderRadiusLg: "",
    borderRadiusXl: "",
  },
  sidebar: {
    background: undefined,
    boxShadow: undefined,
    width: "",
    textColor: undefined,
    dividerBg: undefined,
    menuItemColor: undefined,
    menuItemColorActive: undefined,
    menuItemBg: undefined,
    menuItemBgActive: undefined,
    menuItemIconColor: undefined,
    menuItemIconColorActive: undefined,
    menuItemHeadingColor: undefined,
  },
  header: {
    height: "",
    background: undefined,
    boxShadow: undefined,
    textColor: undefined,
  },
};

// Créer le thème en utilisant les options définies ci-dessus
const DarkTheme = createTheme(darkThemeOptions);

export default DarkTheme;
