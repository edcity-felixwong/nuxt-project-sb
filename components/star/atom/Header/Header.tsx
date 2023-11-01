import { defineComponent } from "vue";

export default defineComponent({
  name: "StarHeader",
  setup(props, { slots }) {
    return () => (
      <header
        {...props}
        class="h-[88px] w-full border-b bg-[var(--sui-color-background)]"
      ></header>
    );
  },
});
