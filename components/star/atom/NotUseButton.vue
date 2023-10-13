<template>
  <TButton v-bind="$props">
    <slot />
  </TButton>
</template>
<script lang="ts">
import { Button as TButton, type TdButtonProps } from "tdesign-vue-next/esm";
// type VueDefault =
//   | {
//       default?: any;
//       required?: boolean;
//       type?: Function;
//       validator?: (val: any) => boolean;
//     }
//   | Function;
// const typeToDefault = <T extends { [prop: string]: VueDefault }>(
//   propsType: T
// ): Record<keyof T, any> =>
//   Object.entries(propsType).reduce(
//     (acc, [propName, propType]) => ({
//       ...acc,
//       [propName]:
//         typeof propType === "function" && propType.name !== "Function"
//           ? propType()
//           : propType?.default,
//     }),
//     propsType
//   );
// const TButtonDefault = typeToDefault(TButton.props);
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<TdButtonProps>(), {});
const match =
  <T>(discriminatedKeyword: T) =>
  (
    keyResultPair: T extends PropertyKey
      ? Record<T, Function | any>
      : Record<Extract<T, PropertyKey>, any> & { _: any }
  ) => {
    const runIfFunction = (v: any) => (typeof v === "function" ? v() : v);
    return discriminatedKeyword in keyResultPair
      ? runIfFunction(keyResultPair[discriminatedKeyword])
      : runIfFunction(keyResultPair[_]);
  };


// const radius = match(props.size)({
//   small: "var(--t-radius-sm)",
//   medium: "var(--t-radius-md)",
//   large: "var(--t-radius-lg)",
//   _: "var(--t-radius-md)",
// });
</script>
<!-- <style scoped>
* {
  --ripple-color: transparent;
  --td-comp-size-xs: 32px;
  --td-comp-size-m: 40px;
  --td-comp-size-xl: 48px;
  --td-comp-paddingLR-s: 12px;
  --td-comp-paddingLR-l: 16px;
  --td-comp-paddingLR-xl: 24px;
  border-radius: v-bind(radius);
}
</style> -->
