import type { Meta, StoryObj } from "@storybook/vue3";
import MultipleSelect from "@/components/star/atom/Filter/MultipleSelect.vue";

const meta: Meta<typeof MultipleSelect> = {
  title: "Components/Filter",
  tags: ["autodocs"],
  component: MultipleSelect,
};

export default meta;
type Story = StoryObj<typeof MultipleSelect>;

export const Years: Story = {
  args: {
    options: [
      {
        items: [
          { label: "All years", value: "all", default: true },
          { label: "2023/24", value: "2023/24" },
          { label: "2022/23", value: "2022/23" },
          { label: "2021/22", value: "2021/22" },
          { label: "2020/21", value: "2020/21" },
          { label: "2019/20", value: "2019/20" },
        ],
      },
    ],
  },
};
export const Statuses: Story = {
  args: {
    options: [
      {
        items: [
          { label: "All statuses", value: "all", default: true },
          { label: "Pending", value: "pending" },
          { label: "Ready", value: "ready" },
          { label: "Not attempted", value: "notAttempted" },
          { label: "Attempted", value: "attempted" },
          { label: "Finished", value: "finished" },
        ],
      },
    ],
  },
};
export const Owners: Story = {
  args: {
    options: [
      {
        items: [
          { label: "All statuses", value: "all", default: true },
          { label: "Pending", value: "pending" },
          { label: "Ready", value: "ready" },
          { label: "Not attempted", value: "notAttempted" },
          { label: "Attempted", value: "attempted" },
          { label: "Finished", value: "finished" },
        ],
      },
    ],
  },
};

export const SortBy: Story = {
  args: {
    placeholder: "Sort by",
    options: [
      {
        label: "Sort by",
        ariaLabel: "Sort by",
        items: [
          { label: "Marking", value: "marking" },
          { label: "Title", value: "title" },
          { label: "Date started", value: "dateStarted" },
          { label: "Date ended", value: "dateEnded" },
          { label: "Status", value: "status" },
          { label: "Owner", value: "owner" },
          { label: "Date updated", value: "dateUpdated" },
        ],
      },
      {
        separator: true,
      },
      {
        label: "Order",
        ariaLabel: "Order",
        items: [
          { label: "Older first", value: "olderFirst" },
          { label: "Newest first", value: "newestFirst" },
          { label: "Z-A", value: "z-a" },
          { label: "A-Z", value: "a-z" },
        ],
      },
    ],
  },
};
