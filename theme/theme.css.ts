import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

const palette = {
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
};
const font = {
  size: "in rem",
  "line-height": "eg 1.2",
  weight: "eg 400",
};
export const breakpointBase = {
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
} as const;
export const breakpointSemantic = {
  tablet: breakpointBase.md,
  laptop: breakpointBase.lg,
  desktop: breakpointBase.xl,
} as const;
export const breakpoint = {
  ...breakpointBase,
  ...breakpointSemantic,
};
export const breakpointComponent = {
  header: breakpointBase.md,
};
export const prefix = "sui";

export const primary = {
  50: "#FFF1EB",
  100: "#FFDFCC",
  200: "#FFCCA8",
  300: "#FFB67E",
  400: "#FF9D4D",
  500: "#FF832B",
  600: "#FD6D14",
  700: "#FE5C0B",
  800: "#EC4F0C",
  900: "#D9370F",
};
export const primaryTw = {
  50: "18deg 100% 96%",
  100: "22deg 100% 90%",
  200: "25deg 100% 83%",
  300: "26deg 100% 75%",
  400: "27deg 100% 65%",
  500: "25deg 100% 58%",
  600: "23deg 98% 54%",
  700: "20deg 99% 52%",
  800: "18deg 90% 49%",
  900: "12deg 87% 45%",
};
export const secondary = {
  50: "#fff9db",
  100: "#fff3bf",
  200: "#ffec99",
  300: "#ffe066",
  400: "#ffd43b",
  500: "#fcc419",
  600: "#fab005",
  700: "#f59f00",
  800: "#f08c00",
  900: "#e67700",
};
export const secondaryTw = {
  50: "50deg 100% 93%",
  100: "49deg 100% 87%",
  200: "49deg 100% 80%",
  300: "48deg 100% 70%",
  400: "47deg 100% 62%",
  500: "45deg 97% 54%",
  600: "42deg 96% 50%",
  700: "39deg 100% 48%",
  800: "35deg 100% 47%",
  900: "31deg 100% 45%",
};
export const gray = {
  0: "#ffffff",
  50: "#f8f9fa",
  100: "#f1f3f5",
  200: "#e9ecef",
  300: "#dee2e6",
  400: "#ced4da",
  500: "#adb5bd",
  600: "#868e96",
  700: "#495057",
  800: "#343a40",
  900: "#212529",
};
export const grayTw = {
  0: "210deg 17% 100%",
  50: "210deg 17% 98%",
  100: "210deg 17% 95%",
  200: "210deg 16% 93%",
  300: "210deg 14% 89%",
  400: "210deg 14% 83%",
  500: "210deg 11% 71%",
  600: "210deg 7% 56%",
  700: "210deg 9% 31%",
  800: "210deg 10% 23%",
  900: "210deg 11% 15%",
};
export const success = {
  50: "#EFFAF5",
  100: "#D3F9E8",
  200: "#B2F2D5",
  300: "#8CE9BF",
  400: "#48C78E",
  500: "#27B879",
  600: "#11AF6E",
  700: "#0CA668",
  800: "#09925B",
  900: "#087F50",
};
export const successTw = {
  50: "153deg 52% 96%",
  100: "153deg 76% 90%",
  200: "153deg 71% 82%",
  300: "153deg 68% 73%",
  400: "153deg 53% 53%",
  500: "154deg 65% 44%",
  600: "155deg 82% 38%",
  700: "156deg 87% 35%",
  800: "156deg 88% 30%",
  900: "156deg 88% 26%",
};
export const warning = {
  50: "#FFFAEB",
  100: "#FFF6DD",
  200: "#FFEEBF",
  300: "#FFE499",
  400: "#FFE08A",
  500: "#FFDD76",
  600: "#FFD666",
  700: "#FFD153",
  800: "#FFC93B",
  900: "#FCC419",
};
export const warningTw = {
  50: "45deg 100% 96%",
  100: "44deg 100% 93%",
  200: "44deg 100% 87%",
  300: "44deg 100% 80%",
  400: "44deg 100% 77%",
  500: "45deg 100% 73%",
  600: "44deg 100% 70%",
  700: "44deg 100% 66%",
  800: "43deg 100% 62%",
  900: "45deg 97% 54%",
};
export const danger = {
  50: "#FEECF0",
  100: "#FFE3EA",
  200: "#FFA8BC",
  300: "#FF87A1",
  400: "#F96989",
  500: "#F14668",
  600: "#EB3556",
  700: "#E53252",
  800: "#DB3053",
  900: "#C92A4E",
};
export const dangerTw = {
  50: "347deg 90% 96%",
  100: "345deg 100% 95%",
  200: "346deg 100% 83%",
  300: "347deg 100% 76%",
  400: "347deg 92% 69%",
  500: "348deg 86% 61%",
  600: "349deg 82% 56%",
  700: "349deg 77% 55%",
  800: "348deg 70% 52%",
  900: "346deg 65% 48%",
};

export const lightTheme = {
  breakpoint,
  font: {
    family: {
      system: `-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,Microsoft JhengHei, "微軟正黑體", sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
      monospace: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace`,
    },
    body: {
      small: {
        size: "0.875rem",
        "line-height": "1.4285",
        weight: "400",
      },
      medium: {
        size: "1rem",
        "line-height": "1.5",
        weight: "400",
      },
      large: {
        size: "1.125rem",
        "line-height": "1.5555",
        weight: "400",
      },
    },

    // size: {},
  },
  color: {
    primary: {
      ...primary,
      tw: { ...primaryTw, default: primaryTw[700] },
      default: primary[500],
      foreground: "#ffffff",
      ring: "#ffc195",
      hover: "test",
      active: "test",
      highlight: {
        focus: "#FFE2D6", // 50 with lightness -4
      },
    },
    secondary: {
      ...secondary,
      tw: { ...secondaryTw, default: secondaryTw[500] },
      default: secondary[500],
      foreground: `var(--${prefix}-color-text-1600)`,
    },
    accent: {
      tw: { default: "250deg 59% 30%" },
      default: "#2E1F7A",
      foreground: "#ffffff",
    },
    default: {
      ...gray,
      tw: { ...grayTw, default: grayTw[200] },
      default: gray[200],
      disabled: gray[500],
      emphasized: gray[800],
      foreground: gray[700],
    },
    /** Text palette is designed by contrast ratios,
     * Unlike Open Color, which is designed for UI views.
     * It start from 300, which means 3.0 contrast for icons,
     * And it passthrough the original gray palette,
     * so conceptually this and the gray palette is inter-changeable.
     * @see {@link https://leonardocolor.io/theme.html?name=Untitled&config=%7B%22baseScale%22%3A%22Gray%22%2C%22colorScales%22%3A%5B%7B%22name%22%3A%22Gray%22%2C%22colorKeys%22%3A%5B%22%23212529%22%2C%22%23f8f9fa%22%5D%2C%22colorspace%22%3A%22HSL%22%2C%22ratios%22%3A%5B%221.05%22%2C%221.11%22%2C%221.19%22%2C%221.3%22%2C%221.49%22%2C%222.07%22%2C%223.02%22%2C%223.32%22%2C%223.5%22%2C%224%22%2C%224.54%22%2C%225%22%2C%225.5%22%2C%226%22%2C%226.5%22%2C%227%22%2C%227.5%22%2C%228%22%2C%228.5%22%2C%229%22%2C%229.5%22%2C%2210%22%2C%2210.5%22%2C%2210.86%22%2C%2211%22%2C%2211.5%22%2C%2215.43%22%5D%2C%22smooth%22%3Afalse%7D%5D%2C%22lightness%22%3A100%2C%22contrast%22%3A1%2C%22saturation%22%3A100%2C%22formula%22%3A%22wcag2%22%7D}
     */
    text: {
      default: gray[700],
      300: "#8796a4",
      350: gray[600],
      400: "#708192",
      450: "#687887",
      500: "#627180",
      550: "#5d6a78",
      600: "#586471",
      650: "#545f6b",
      700: "#4f5a66",
      750: "#4b5660",
      800: gray[700],
      850: "#444d57",
      900: "#414a53",
      950: "#3e474f",
      1000: "#3c434b",
      1050: "#394047",
      1100: "#363d44",
      1150: "#333a41",
      1200: "#31373e",
      1250: "#2f343a",
      1300: "#2c3137",
      1350: "#2a2f34",
      1400: "#282c31",
      1450: "#25292e",
      1500: "#23272c",
      1550: gray[900],
      1600: "#1e2226",
    },
    success: {
      ...success,
      tw: { ...successTw, default: successTw[500] },
      default: success[500],
      foreground: `var(--${prefix}-color-text-1600)`,
    },
    warning: {
      ...warning,
      tw: { ...warningTw, default: warningTw[500] },
      default: warning[500],
      foreground: `var(--${prefix}-color-text-1600)`,
    },
    danger: {
      ...danger,
      tw: { ...dangerTw, default: dangerTw[500] },
      default: danger[500],
      foreground: "#ffffff",
    },
    info: {
      tw: { default: "224deg 76% 48%" },
      default: "#1D4ED8",
      foreground: "#ffffff",
    },
    help: {
      tw: { default: "270deg 67% 47%" },
      default: "#7828C8",
      foreground: "#ffffff",
    },
    surface: {
      ground: "not done",
      section: "not done",
      card: "not done",
      border: "not done",
      overlay: "not done",
    },
    edcity: { default: "#1C64AD", hover: "#c93" },
  },
  /** Radius */
  radius: {
    checkbox: "6px",
    default: "12px",
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  /** Border */
  border: {
    width: {
      small: "1px",
      medium: "2px",
      large: "3px",
    },
    color: {
      default: gray[200],
    },
  },
  /** Opacity */
  opacity: {
    disabled: 0.5,
    focus: 1,
    hover: 0.8,
    divider: 0.15,
    overlay: 0,
  },
  size: {
    header: {
      height: "88px",
    },
    margin: {
      small: "12px",
      medium: "20px",
      large: "32px",
    },
  },
  padding: {
    footer: "1.25rem",
  },
};

export const t = {
  breakpoint,
  /** Font */
  font: {
    family: {
      system: `-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
      monospace: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace`,
    },
    body: {
      small: font,
      medium: font,
      large: font,
    },
    // size: {},
  },
  /** Color */
  color: {
    primary: {
      ...palette,
      tw: palette,
      default: "aka 600",
      ring: "focus-ring",
      hover: "",
      active: "",
      highlight: { focus: "tint of 50 (lightness -4)" },
    },
    default: {
      0: "background",
      ...palette,
      tw: {
        0: "background for tailwind usage",
        ...palette,
      },
      disabled: "disabled color for UI",
      default: "default text color",
      emphasized: "shade of default",
    },
    success: {
      ...palette,
      tw: palette,
    },
    warning: {
      ...palette,
      tw: palette,
    },
    danger: {
      ...palette,
      tw: palette,
    },
    surface: {
      ground: "#ffffff",
      section: "not done",
      card: "not done",
      border: "not done",
      overlay: "not done",
    },
  },
  /** Radius */
  radius: {
    checkbox: "6px",
    default: "12px",
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  /** Border */
  border: {
    width: {
      small: "1px",
      medium: "2px",
      large: "3px",
    },
    color: {
      default: "",
    },
  },
  /** Opacity */
  opacity: {
    disabled: 0.5,
    focus: 1,
    hover: 0.8,
    divider: 0.15,
    overlay: 0,
  },
  size: {
    header: {
      height: "88px",
    },
  },
};

export const themeType = createGlobalThemeContract(
  lightTheme,
  (_, path) => `${prefix}-${path.join("-")}`
);

createGlobalTheme(':root, [data-theme="light"]', themeType, lightTheme);
