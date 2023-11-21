// import { Alert } from "tdesign-vue-next/esm";
// import TdAlertProp from "tdesign-vue-next/esm/alert/props";

// import { PMessage } from "#build/components";

export default defineComponent({
  name: "StarAlert",
  props: PMessage.props,
  setup(props, { attrs, slots }) {
    return () => <PMessage {...props}>{slots.default?.()}</PMessage>;
  },
});
