import { expect, test } from "vitest";
import * as SD from "./useStarDateFormat";

test("should strip the seconds", async () => {
  expect(SD.starDateFormat("2023-12-14 19:01:23")).toEqual("2023-12-14 19:01");
});
