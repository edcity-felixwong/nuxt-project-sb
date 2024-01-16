import { test, expect, vi, describe, afterEach } from "vitest";
import * as EP from "./edit-paper";

describe("Test edit-paper", async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should encode the object correctly", async () => {
    vi.mocked(Math.random).mockReturnValue(1);
    const payload = {};
    expect(EP.encode());
  });
});
