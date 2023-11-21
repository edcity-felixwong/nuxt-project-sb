import { expect, test, describe } from "vitest";
import { tv, mapClass } from "./tv";

describe("tv workflow", async () => {
  const testTv = tv({
    // extend: dropdownItem,
    slots: {
      base: "gap-4",
      wrapper: "",
      title: "",
      description: "",
      selectedIcon: "",
      shortcut: "",
    },
    variants: {
      size: {
        small: {
          base: "",
        },
        medium: {
          base: "",
        },
        large: {
          base: "p-4",
        },
      },
      isIconOnly: {
        true: {
          wrapper: "hidden",
        },
      },
    },
  });
  test("should return `slot`&`class` pair", async () => {
    expect(mapClass(testTv())).toEqual({
      base: "gap-4",
    });
  });
  test("should read props correctly", async () => {
    const props = {
      size: "large",
    } as const;
    expect(mapClass(testTv(props))).toEqual({
      base: "gap-4 p-4",
    });
  });
});
