import { tv } from "@/utils/tv";
import type { MenubarPassThroughOptions } from "primevue/menubar";

export const header = tv({
  slots: {
    root: "h-[88px] min-h-[88px] w-full border-b bg-[var(--sui-color-background)]",
  } satisfies MenubarPassThroughOptions,
});
