import type { Meta, StoryObj } from "@storybook/vue3";
import CardTimeProgress from "~/components/star/atom/Card/CardTimeProgress.vue";
import dayjs from "dayjs";

/**
 * This address the layout and order of the buttons.
 */
const meta: Meta<typeof CardTimeProgress> = {
  title: "Components/Card/CardCardTimeProgress",
  tags: ["autodocs"],
  component: CardTimeProgress,
};

export default meta;
type Story = StoryObj<typeof CardTimeProgress>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { CardTimeProgress },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <CardTimeProgress v-bind="item"/>
          </template>
        </div>
    `,
  }),
};

const actions: NonNullable<Story["args"]>["action"][] = [
  "accept",
  "attempt",
  "edit",
  "preview",
  "reject",
  "report",
  "retry",
  "share",
];

// export const Default: Story = {
//   ...ListTemplate,
//   args: {
//     items: actions.map((action) => ({ action })) satisfies Story["args"][],
//   },
// };
export const Default: Story = {
  args: {},
};
export const NoTime: Story = {
  args: {
    startTime: "",
    endTime: "",
  },
};
export const NoStartTime: Story = {
  args: {
    startTime: "",
    endTime: "2016-08-30",
  },
};
export const InProgress: Story = {
  args: {
    startTime: "2023-10-05 00:00:00",
    endTime: "2099-12-31 00:00:00",
  },
};
export const InProgress2: Story = {
  args: {
    startTime: dayjs().subtract(7, "day"),
    endTime: dayjs().add(7, "day"),
  },
};
export const InProgress3: Story = {
  args: {
    startTime: dayjs().subtract(1, "day"),
    endTime: dayjs().add(7, "day"),
  },
};
export const InProgress4: Story = {
  args: {
    startTime: dayjs().subtract(6, "day"),
    endTime: dayjs().add(1, "day"),
  },
};

export const Ended: Story = {
  args: {
    startTime: "2021-10-08 10:44:00",
    endTime: "2022-08-28 18:15:00",
  },
};
export const Pending: Story = {
  args: {
    startTime: dayjs().add(7, "day"),
    endTime: dayjs().add(49, "day"),
  },
};
