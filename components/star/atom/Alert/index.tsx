import { Alert } from "tdesign-vue-next/esm";
import TdAlertProp from "tdesign-vue-next/esm/alert/props";

export default defineComponent({
  name: "StarAlert",
  props: Alert.props as unknown as typeof TdAlertProp,
  setup(props, { attrs, slots }) {
    return () => <Alert {...props}>{slots.default?.()}</Alert>;
  },
});
