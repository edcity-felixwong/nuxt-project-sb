export default defineComponent({
  name: "StarBreadcrumbNav",
  setup(props, { slots }) {
    return () => <div {...props} class="h-[72px] border-b "></div>;
  },
});
