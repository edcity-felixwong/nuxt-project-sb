import type { ButtonProps } from "primevue/button";
import PButton from "primevue/button";
import { defineComponent } from "vue";

console.log("🚀 ~ file: NavItem.tsx:3 ~ PButton:", PButton);
// import { PButton } from '../../../../.nuxt/components';

// export default defineComponent({
//   name: "StarNavItem",
//   props: PButton.extends.props as unknown as ButtonProps,
//   // extends: PButton,
//   setup(props, { slots }) {
//     return () => (
//       // <PButton>abc</PButton>
//       <div>abc</div>
//     );
//   },
// });
type Props = ButtonProps

export default defineComponent(
  (props: Props) => () => <PButton {...props}>abc</PButton>,
  {
    name: "StarNavItem",
    props: PButton.extends.props as unknown as Props,
  }
);
