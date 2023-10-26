import { defineComponent } from "vue";
import { Aside } from "tdesign-vue-next/esm";

export default defineComponent({
  name: "StarSideNav",
  setup(props, { slots }) {
    return () => (
      <Aside
        {...props}
        width={"76px"}
        class="relative transition-all bg-[var(--sui-color-background)] border-r w-[76px]"
      ></Aside>
    );
  },
});
