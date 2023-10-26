import { defineComponent } from "vue";

export default defineComponent({
  name: "StarHeader",
  setup(props, { slots }) {
    return () => (
      <div
        {...props}
        class="h-[88px] border-b bg-[var(--sui-color-background)]"
      ></div>
    );
  },
});
