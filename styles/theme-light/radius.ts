const r = {
  1: "2px",
  2: "4px",
  3: "6px",
  4: "8px",
  5: "10px",
  6: "12px",
  7: "14px",
  8: "16px",
  9: "18px",
  10: "20px",
  11: "22px",
  12: "24px",
} as const;
export const radius = {
  ...r,
  small: r[4],
  default: r[6],
  medium: r[6],
  large: r[7],
  // extraLarge: r[8],
  round: "9999px",
  circle: "50%",
};
