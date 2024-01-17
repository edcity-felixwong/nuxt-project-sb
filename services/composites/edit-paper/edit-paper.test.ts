import { test, expect, vi, describe, afterEach, beforeEach } from "vitest";
import * as EP from "./edit-paper";
import { useEnvironmentStore } from "@/stores";

describe("Test edit-paper", async () => {
  vi.mock("@/stores", () => ({
    useEnvironmentStore: vi.fn(() => ({
      useEnvHostname: vi.fn().mockReturnValue("e.star.dev.hkedcity.net"),
    })),
  }));
  afterEach(() => {
    vi.restoreAllMocks();
  });
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(1);
    expect(Math.random()).toEqual(1);
  });
  test("should encode the object correctly", async () => {
    const payload = {
      paper_id: 4437,
      package_id: 13,
      package_code: "chi",
      locale: "zh",
      preview: 0,
    };
    expect(EP.encode(payload)).toBe(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDQzNywicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6InpoIiwicHJldmlldyI6MH0"
    );
  });

  test("should encode correctly `attempt` - /home/start", async () => {
    const payload = {
      paper_id: 4252, //
      package_alias: "chi",
      mode: "start",
    };
    expect(EP.encode(payload)).toEqual(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9hbGlhcyI6ImNoaSIsIm1vZGUiOiJzdGFydCJ9"
    );
  });
  test("should encode correctly `preview` - /home/start", async () => {
    const payload = {
      paper_id: 4252, //
      package_alias: "chi",
      mode: "preview",
    };
    expect(EP.encode(payload)).toEqual(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9hbGlhcyI6ImNoaSIsIm1vZGUiOiJwcmV2aWV3In0"
    );
  });
  test("should encode correctly `review` - /home/start", async () => {
    const payload = {
      paper_id: 4252, //
      package_alias: "chi",
      mode: "review",
    };
    expect(EP.encode(payload)).toEqual(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9hbGlhcyI6ImNoaSIsIm1vZGUiOiJyZXZpZXcifQ"
    );
  });
  test("should encode correctly `edit` - /paper", async () => {
    const payload = {
      paper_id: 4252, //
      package_id: 13,
      package_code: "chi",
      locale: "zh",
      preview: 0,
    };
    expect(EP.encode(payload)).toEqual(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6InpoIiwicHJldmlldyI6MH0"
    );
  });
  test("should encode correctly `view` - /paper", async () => {
    const payload = {
      paper_id: 4252, //
      package_id: 13,
      package_code: "chi",
      locale: "zh",
      preview: 1,
    };
    expect(EP.encode(payload)).toEqual(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6InpoIiwicHJldmlldyI6MX0"
    );
  });
  test("should encode correctly `report` - /report", async () => {
    const payload = {
      paper_id: 4252, //
      package_id: 13,
      package_code: "chi",
      locale: "en",
      preview: 0,
    };
    expect(EP.encode(payload)).toEqual(
      "ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6ImVuIiwicHJldmlldyI6MH0"
    );
  });

  test("should mock env to DEV", async () => {
    const { useEnvHostname } = useEnvironmentStore();
    expect(useEnvHostname()).toEqual("e.star.dev.hkedcity.net");
  });

  test("should give link correctly - `attempt` - /home/start", async () => {
    expect(
      EP.useAttemptLink({
        // @ts-ignore
        paper: {
          id: 4252,
          packageId: "13",
        },
      })
    ).toEqual(
      "http://e.star.dev.hkedcity.net/home/start/ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9hbGlhcyI6ImNoaSIsIm1vZGUiOiJzdGFydCJ9"
    );
  });
  test("should give link correctly - `preview` - /home/start", async () => {
    expect(
      EP.usePreviewLink({
        // @ts-ignore
        paper: {
          id: 4252,
          packageId: "13",
        },
      })
    ).toStrictEqual(
      "http://e.star.dev.hkedcity.net/home/start/ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9hbGlhcyI6ImNoaSIsIm1vZGUiOiJwcmV2aWV3In0"
    );
  });
  test("should give link correctly - `review` - /home/start", async () => {
    const paper = {
      id: 4252, //
      packageId: "13",
    };
    expect(EP.useReviewLink({ paper })).toEqual(
      "http://e.star.dev.hkedcity.net/home/start/ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9hbGlhcyI6ImNoaSIsIm1vZGUiOiJyZXZpZXcifQ"
    );
  });
  test("should give link correctly - `edit` - /paper", async () => {
    const paper = {
      id: 4252, //
      packageId: "13",
    };
    expect(EP.useEditLink({ paper, locale: "zh" })).toEqual(
      "http://e.star.dev.hkedcity.net/paper/ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6InpoIiwicHJldmlldyI6MH0"
    );
  });
  test("should give link correctly - `view` - /paper", async () => {
    const paper = {
      id: 4252, //
      packageId: 13,
    };
    expect(EP.useViewLink({ paper, locale: "zh" })).toEqual(
      "http://e.star.dev.hkedcity.net/paper/ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6InpoIiwicHJldmlldyI6MX0"
    );
  });
  test("should give link correctly - `report` - /report", async () => {
    const paper = {
      id: 4252, //
      packageId: "13",
    };
    expect(EP.useReportLink({ paper, locale: "en" })).toEqual(
      "http://e.star.dev.hkedcity.net/report/ICAgICAgICAgeyJwYXBlcl9pZCI6NDI1MiwicGFja2FnZV9pZCI6MTMsInBhY2thZ2VfY29kZSI6ImNoaSIsImxvY2FsZSI6ImVuIiwicHJldmlldyI6MH0"
    );
  });
});
