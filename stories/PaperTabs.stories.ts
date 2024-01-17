import { StoryObj, Meta } from "@storybook/vue3";
import StarTabs from "@/components/star/atom/Tabs/PaperTabs.vue";

/** Loading skeleton need to be shown for both idle (fetching state) and loading (data state) */
const meta: Meta<typeof StarTabs> = {
  title: "components/Tabs/PaperTabs",
  component: StarTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarTabs>;

export const Default: Story = {
  args: { tabs: ["", "bca2021"] },
};
export const JustOne: Story = {
  args: { tabs: ["bca2021"] },
};
export const Nothing: Story = {
  args: { tabs: [] },
};
export const All: Story = {
  args: { tabs: ["", "bca2021", "bca2022", "nsp2020", "shared"] },
};
// export const HasNothing: Story = {
//   args: {},
// };
// export const HasALot: Story = {
//   args: {},
// };
