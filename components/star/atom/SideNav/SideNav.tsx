import { defineComponent } from "vue";

export default defineComponent({
  name: "StarSideNav",
  setup(props, { slots }) {
    return () => (
      <nav class="w-[76px] relative transition-all bg-[var(--sui-color-background)] border-r">廿水尸廿</nav>
    );
  },
});
