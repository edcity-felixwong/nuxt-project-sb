import { defineComponent, h } from "vue";
import { Button as TButton } from "tdesign-vue-next/esm";
import TTButtonProp from "tdesign-vue-next/esm/button/props";

export { TTButtonProp as StarButtonProp };
export default defineComponent({
  name: "TryButton",
  props: TButton.props as unknown as typeof TTButtonProp,
  setup(props, { attrs, slots }) {
    /* https://stackoverflow.com/questions/69875273/non-function-value-encountered-for-default-slot-in-vue-3-composition-api-comp */
    // return () => h(TButton, { ...props, ...attrs }, () => slots.default?.()) // If send `slots.default` instead, can it be non-function?
    return () => <TButton {...props}>{slots.default?.()}</TButton>;
  },
});
