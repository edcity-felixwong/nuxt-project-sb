import { tv } from "@/utils/tv";
import type { MenubarPassThroughOptions } from "primevue/menubar";

export const header = tv({
  slots: {
    root: " min-h-[--sui-size-header-height] w-full border-b bg-[var(--sui-color-background)] rounded-none px-1",
    start: "mr-8",
  } satisfies MenubarPassThroughOptions,
});
