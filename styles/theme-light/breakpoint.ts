export const breakpoint = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
} as const;
// interface BreakPoint {
//   [threshold: string]: `${number}px`;
// }
// type BreakPointRead = {
//   [K in keyof typeof breakpointNum]: `${(typeof breakpointNum)[K]}px`;
// };
// export const breakpoint: BreakPoint = Object.entries(breakpointNum).reduce(
//   (acc, [k, v]) => ({ ...acc, [k]: `${v}px` }),
//   {} as BreakPointRead
// );
