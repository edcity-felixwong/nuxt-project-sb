import { useBreakpoints as _useBreakpoints } from "@vueuse/core";
import { type Ref, toRefs } from "vue";
import { breakpointSemantic } from "@/theme/theme.css";

export const useBreakpoints = () => _useBreakpoints(breakpointSemantic);

export function useMedia() {
  const breakpoint = useBreakpoints();
  return toRefs({
    isMobile: breakpoint.smaller("tablet"),
    isTablet: breakpoint.between("tablet", "laptop"),
    isLaptop: breakpoint.between("laptop", "desktop"),
    isDesktop: breakpoint.greaterOrEqual("desktop"),

    isTabletOrLarger: breakpoint.greaterOrEqual("tablet"),
    isLaptopOrLarger: breakpoint.greaterOrEqual("laptop"),
    isDesktopOrLarger: breakpoint.greaterOrEqual("desktop"),
  });
}

export const useIsMobile: Ref<boolean> = useMedia().isMobile;
export const useIsTablet: Ref<boolean> = useMedia().isTablet;
export const useIsLaptop: Ref<boolean> = useMedia().isLaptop;
export const useIsDesktop: Ref<boolean> = useMedia().isDesktop;
