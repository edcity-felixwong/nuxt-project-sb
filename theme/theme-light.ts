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
  },
  radius: {
    checkbox: "6px",
    default: "12px",
  },
  /** Border */
  border: {
    width: {
      small: "1px",
      medium: "2px",
      large: "3px",
    },
  },
};
