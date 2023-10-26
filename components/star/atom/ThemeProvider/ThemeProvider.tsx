import {
  Fragment,
  reactive,
  provide,
  computed,
  defineComponent,
  h,
  type InjectionKey,
  type ExtractPublicPropTypes,
} from "vue";
import { makeStringProp } from "@/utils/props";
import { lightTheme } from "@/styles/theme";
import { flattenObject } from "./flatten-object";

type Tag = keyof HTMLElementTagNameMap | "Fragment"
type Scope = "local" | "global"

export const defaultPrefix: string = "--sui";
export const defaultTagName: Tag = "div";
export const defaultScope: Scope = "global";
export const defaultTheme: string = "light";

export const globalInjectCount = 0;
export const themeProviderProps = {
  theme: makeStringProp(defaultTheme),
  themeVars: {
    type: Object,
    default: () => reactive({
      light: lightTheme,
    }),
  },
  prefix: makeStringProp(defaultPrefix),
  tag: makeStringProp<Tag>(defaultTagName),
  scope: makeStringProp<Scope>(defaultScope),
};
export type Props = ExtractPublicPropTypes<typeof themeProviderProps>

type InjectedThemeType = InjectionKey<typeof themeProviderProps>
export const THEME_PROVIDER_KEY: InjectionKey<typeof themeProviderProps> = Symbol("test");
type destructInjectionKey<T> = T extends InjectionKey<infer K> ? K : never

/* Functions */
/** @description map `gray1` to `gray-1` */
function insertDash(str: string) {
  return str.replace(/([a-zA-Z])(\d)/g, "$1-$2");
}

// function mapThemeVarsToCSSVars(themeVars: Record<string, Numeric>) {
//   const cssVars: Record<string, Numeric> = {};
//   Object.keys(themeVars).forEach((key) => {
//     const formattedKey = insertDash(kebabCase(key));
//     cssVars[`--van-${formattedKey}`] = themeVars[key];
//   });
//   return cssVars;
// }

export function useTheme<T extends InjectionKey<any> = InjectedThemeType>(
  providedKey = THEME_PROVIDER_KEY
): destructInjectionKey<T> {
  return inject(providedKey);
}
export function getStyle<T>(
  s: T,
  { prefix = defaultPrefix }: { prefix?: typeof defaultPrefix }
) {
  return flattenObject(s, { prefix });
}
function getClassName(prefix: string = "sui") {
  return `${prefix}-theme-provider`;
}

export default defineComponent({
  name: "ThemeProvider",
  props: themeProviderProps,
  //   provide: reactive({ abc: 123 }),
  setup(props, { slots }) {
    const tagName = computed(() => (props.tag === "Fragment" ? Fragment : props.tag));
    const style = computed(() => getStyle(props.themeVars[props.theme], { prefix: props.prefix }));
    const providedProps = computed(() => props);
    provide(THEME_PROVIDER_KEY, providedProps);
    return () =>
      // return <`${tagName.value}`>{slots.default() ?? false}</`${tagName.value}`>;
      h(
        tagName.value,
        {
          class: [getClassName(), props.theme],
          style: {
            ...style.value,
            "color-scheme": ["normal", "light", "dark"].includes(props.theme)
              ? props.theme
              : undefined,
          },
          "data-theme": props.theme,
        },
        slots?.default?.()
      );
  },
});
