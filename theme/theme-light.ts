const primary = {
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
const primaryTw = {
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
const gray = {
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
const grayTw = {
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
const success = {
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
const successTw = {
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
const warning = {
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
const warningTw = {
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
const danger = {
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
const dangerTw = {
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
export default {
  font: {
    size: {
      sm: {
        xs: "10px",
        sm: "14px",
        md: "16px",
      },
      md: {
        xs: "12px",
        sm: "16px",
        md: "20px",
      },
    },
    weight: {
      md: {
        sm: 400,
        md: 500,
        lg: 600,
      },
    },
  },
  color: {
    primary: {
      ...primary,
      tw: { ...primaryTw },
      default: primary[500],
      ring: "#ffc195",
      hover: "test",
      active: "test",
      highlightFocus: "#FFE2D6", // 50 with lightness -4
    },
    default: {
      ...gray,
      tw: { ...grayTw },
    },
    success: {
      ...success,
      tw: { ...successTw },
    },
    warning: {
      ...warning,
      tw: { ...warningTw },
    },
    danger: {
      ...danger,
      tw: { ...dangerTw },
    },
    surface: {
      ground: "not done",
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
      default: "var(--sui-color-default-300)",
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
};
