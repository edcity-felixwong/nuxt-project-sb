import { expect, test } from "vitest";
import { sideNavItem } from "./side-nav-item-tv";

test("added new variant 'size'", async () => {
  const { base } = sideNavItem({
    size: "large",
  });
  expect(base()).toContain("p-4");
});
test("added 'abc' to 'base' and 'description' if 'size' is 'small'", async () => {
  const { base, description } = sideNavItem({
    size: "small",
  });
  expect(base()).toContain("abc");
  expect(description()).toContain("abc");
});
