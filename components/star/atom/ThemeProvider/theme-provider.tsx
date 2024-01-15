import { makeStringProp } from "@/utils/props";
import {
  Fragment,
  computed,
  createVNode,
  defineComponent,
  inject,
  reactive,
  type ExtractPublicPropTypes,
  type InjectionKey,
} from "vue";
import { theme } from "./default-theme";
import "@/theme/theme.css.ts";

type Tag = keyof HTMLElementTagNameMap | "Fragment";
type Scope = "local" | "global";

export const defaultPrefix: string = "--sui";
export const defaultTagName: Tag = "div";
export const defaultScope: Scope = "global";
export const defaultTheme: string = "light";

export const globalInjectCount = 0;
export const themeProviderProps = {
  theme: makeStringProp(defaultTheme),
  themeVars: {
    type: Object,
    default: () => reactive(theme),
  },
  prefix: makeStringProp(defaultPrefix),
  tag: makeStringProp<Tag>(defaultTagName),
  scope: makeStringProp<Scope>(defaultScope),
};
export type StarThemeProviderProps = ExtractPublicPropTypes<typeof themeProviderProps>;

type InjectedThemeType = InjectionKey<typeof themeProviderProps>;
export const THEME_PROVIDER_KEY: InjectionKey<typeof themeProviderProps> = Symbol("theme");
type destructInjectionKey<T> = T extends InjectionKey<infer K> ? K : never;

export function useTheme<T extends InjectionKey<any> = InjectedThemeType>(
  providedKey = THEME_PROVIDER_KEY
): destructInjectionKey<T> {
  return inject(providedKey);
}

export default defineComponent({
  name: "ThemeProvider",
  props: themeProviderProps,
  setup(props, { slots }) {
    const tagName = computed(() => (props.tag === "Fragment" ? Fragment : props.tag));
    return () => createVNode(
      tagName.value,
      {
      },
      slots?.default?.()
    );
  },
});
