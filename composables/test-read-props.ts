import { watch } from "vue";
import { read } from "@/composables/usePassThrough";
import { footer } from "@/components/star/atom/Footer/footer-tv";

export function usePropsWatcher(props) {
  watch(
    () => props,
    (newProps, oldProps) => {
      // Handle prop changes here
      console.log("Props changed:", newProps, oldProps);
      console.log("text changed:", newProps.isMobile);
      console.log(
        "🚀 ~ file: test-read-props.ts:13 ~ usePropsWatcher ~ read(footer, newProps):",
        read(footer, newProps)()
      );
    },
    { deep: true }
  );
}
