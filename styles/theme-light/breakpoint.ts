export const breakpointNum = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  "2xl": 1400,
} as const;
interface BreakPoint {
  [threshold: string]: `${number}px`;
}
type BreakPointRead = {
  [K in keyof typeof breakpointNum]: `${(typeof breakpointNum)[K]}px`;
};
export const breakpoint: BreakPoint = Object.entries(breakpointNum).reduce(
  (acc, [k, v]) => ({ ...acc, [k]: `${v}px` }),
  {} as BreakPointRead
);
