import type { Meta, StoryObj } from "@storybook/vue3-vite"
const meta: Meta<any> = {
  // component: MyComponent,
  title: "test/abc",
}

export default meta
type Story = StoryObj<any>
export const ExampleStory: Story = {
  args: {
    propertyA: import.meta.env,
  },
}
