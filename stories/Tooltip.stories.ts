import type { Meta, StoryObj } from "@storybook/vue3";
import { StarButton } from "~/components/star";
import { Status } from "@/services/models";

/**
 * This address the layout and order of the buttons.
 */
const meta: Meta<typeof StarButton> = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  component: StarButton,
};

export default meta;
type Story = StoryObj<typeof StarButton>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <StarButton v-bind="item"/>
          </template>
        </div>
    `,
  }),
};

type TooltipPt = {
  root: string;
  arrow: string;
  text: string;
};

const Comp: Story = {
  render: (args) => ({
    setup: () => {
      args;
    },
    template: `<div id="pv_id_8_tooltip" role="tooltip" style="display: inline-block; width: fit-content; pointer-events: none; opacity: 1.028; z-index: 1008;" class="p-tooltip p-component p-tooltip-bottom ${
      args.pt?.root ?? ""
    }" data-pc-name="tooltip" data-pc-section="root" data-p-position="bottom">
      <div class="p-tooltip-arrow ${args.pt?.arrow ?? ""}" data-pc-section="arrow"></div>
      <div class="p-tooltip-text ${args.pt?.text ?? ""}" data-pc-section="text">Actions</div>
    </div>`,
  }),
};
export const Default: Story = {
  render: (args) => ({
    setup: () => {
      args;
    },
    template: `<div id="pv_id_8_tooltip" role="tooltip" style="display: inline-block; width: fit-content; pointer-events: none; opacity: 1.028; z-index: 1008;" class="p-tooltip p-component p-tooltip-bottom" data-pc-name="tooltip" data-pc-section="root" data-p-position="bottom">
      <div class="p-tooltip-arrow border-b-gray-950" style="top:0;left:50%" data-pc-section="arrow"></div>
      <div class="p-tooltip-text text-sm bg-gray-950 px-3 py-1.5 rounded-[8px]" data-pc-section="text">Actions</div>
    </div>`,
  }),
  args: {
    // model: [{ action: "edit" }, { action: "preview" }, { action: "share" }],
    state: "teacherDraft",
  },
};
export const Try: Story = {
  ...Comp,
  args: {
    // pt: {
    //   text: "bg-red-900",
    // },
  },
};
