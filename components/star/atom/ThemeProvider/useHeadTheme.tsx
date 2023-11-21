import { useHead } from "unhead";
import { watchEffect } from "vue";
import { styleToString } from "./style-object-to-css-string";
import { flattenObject } from "./flatten-object";

const toCssVar = (x) => flattenObject(x, { prefix: "--sui" });

interface Options {
  //   scope: "local" | "global";
  className?: string;
  tag?: "Fragment" | keyof HTMLElementTagNameMap;
  injectMode?: "style" | "class";
  key?: string | (() => string);
}
const defaultOption = {
  className: ":root",
  tag: "div",
  injectMode: "class",
  key: () => btoa(`${Math.random()}`).toString(8),
} as const;

export function variablize(theme): string {
  return styleToString(toCssVar(theme)) ;
}

export function toCSS(theme, options: { className: string }): string {
  const cssString = variablize(theme);
  //   const id = options.className.match(/^[\.\#]/)
  //     ? options.className
  //     : `.${options.className}`;
  return `${options.className} {
${cssString}
}`;
}

export const useMountTheme = (
  innerHTML: string,
  options: Options,
): (() => void) => {
  console.log("🚀 ~ file: useHeadTheme.tsx:40 ~ innerHTML:", innerHTML)
  const hash = typeof options.key === "function" ? options.key() : options.key;
  console.log("🚀 ~ file: useHeadTheme.tsx:42 ~ hash:", hash)
  const headEntry = useHead({
    style: [
      {
        innerHTML,

        id: `sui-theme-provider-${hash}`,
        key: hash,
        // tagPriority: -90,
        // id: options.id
      },
    ],
  });
  console.log("🚀 ~ file: useHeadTheme.tsx:54 ~ headEntry:", headEntry)
  return headEntry ? headEntry.dispose : () => { };
};

export function useHeadTheme(theme, options?: Options): void {
  const optionsMerged = { ...(options ?? {}), ...defaultOption };
  const styleInnerHTML = toCSS(theme, optionsMerged);
  watchEffect((onCleanup) => {
    const clearTheme = useMountTheme(styleInnerHTML, optionsMerged);
    onCleanup(clearTheme);
  });
  //   return clearTheme;
}
