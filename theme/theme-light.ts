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
};
