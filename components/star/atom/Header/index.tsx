export default defineComponent({
  name: "StarHeader",
  setup(props, { attrs, slots }) {
    return () => <div {...props} className="h-[88px]"></div>;
  },
});
