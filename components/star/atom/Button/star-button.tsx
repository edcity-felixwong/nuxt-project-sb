import type { ButtonProps } from "primevue/button";
import PButton from "primevue/button";
import { defineComponent } from "vue";

type Props = ButtonProps

export default defineComponent(
  (props: Props, { slots }) => () => <PButton {...props} label={slots?.default?.()?.[0]?.children}></PButton>,
  {
    name: "StarButton",
    props: PButton.extends.props as unknown as Props,
  }
);
