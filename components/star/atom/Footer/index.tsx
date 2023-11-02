export default defineComponent({
  name: "StarHeader",
  setup(props, { slots }) {
    return () => (
      <div {...props} class="h-[88px] border-8">
        Footer
      </div>
    );
  },
});
