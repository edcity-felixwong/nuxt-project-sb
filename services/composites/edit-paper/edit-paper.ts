import { z } from "zod";
import { packageIdZ, packageCodeZ, Paper, Actions } from "../../models";
import { pipe } from "fp-ts/function";
import { useEnvironmentStore } from "@/stores";
import type { Locale } from "@/i18n";

/* eslint indent:0 implicit-arrow-linebreak:0 */

export function encode<T>(obj: T) {
  return encodeURIComponent(
    btoa(" ".repeat(9 * Math.random()) + JSON.stringify(obj)).replace(/\=+$/, "")
  );
}

/** This is the state for `/paper` and `/report` clients,
 * they need it in the url params.
 *
 * `package_id` should be number
 */
const payloadZ = z.object({
  paper_id: z.number(),
  package_id: z.coerce.number(packageIdZ),
  package_code: packageCodeZ,
  locale: z.enum(["zh", "en"]),
  preview: z.coerce.number(z.enum(["0", "1"])),
});
type Payload = z.infer<typeof payloadZ>;
/**
 * This is the state for `/home` client.
 */
const startTrialPayloadZ = z.object({
  paper_id: z.number(),
  package_alias: packageCodeZ,
  mode: z.enum(["preview", "review", "start"]),
});
type startTrialPayload = z.infer<typeof startTrialPayloadZ>;

export type ActionsAvailable = Extract<
  Actions,
  "attempt" | "preview" | "review" | "view" | "edit" | "report"
>;
export function packageIdToPackageCode(
  packageId: z.infer<typeof packageIdZ>
): z.infer<typeof packageCodeZ> {
  const m: Record<z.infer<typeof packageIdZ>, z.infer<typeof packageCodeZ>> = {
    13: "chi",
    14: "eng",
    15: "math_zh",
    16: "math_en",
  };
  return m[packageId];
}
type Pathname = "/home/start/" | "/paper/" | "/report/";
/** This address the type of the possible pathnames */
const getPathname = (action: ActionsAvailable): Pathname => {
  if (action === "attempt") return "/home/start/";
  if (action === "preview") return "/home/start/";
  if (action === "review") return "/home/start/";
  if (action === "view") return "/paper/";
  if (action === "edit") return "/paper/";
  if (action === "report") return "/report/";
  throw new Error("Action is not valid");
};
type ActionToLinkFn = ({ paper, locale }: { paper: Paper; locale: Locale }) => string;
const getPayload =
  ({ action, locale }: { action: ActionsAvailable; locale: Locale }) =>
  (paper: Paper) => {
    if (["attempt", "preview", "review"].includes(action)) {
      return startTrialPayloadZ.parse({
        paper_id: paper.id,
        package_alias: packageIdToPackageCode(paper.packageId),
        // @ts-ignore zod will handle it
        mode: action === "attempt" ? "start" : action,
      } satisfies startTrialPayload);
    }
    if (["view", "edit"].includes(action) || ["report"].includes(action)) {
      return payloadZ.parse({
        paper_id: paper.id,
        package_id: paper.packageId,

        package_code: packageIdToPackageCode(paper.packageId),
        locale,
        preview: action === "view" ? "1" : "0",
      } satisfies Payload);
    }
  };

const actionDispatcher =
  (action: ActionsAvailable): ActionToLinkFn =>
  ({ paper, locale }) => {
    const { useEnvHostname } = useEnvironmentStore();

    return pipe(
      paper, //
      getPayload({ action, locale }),
      encode,
      (_) => `${getPathname(action)}${_}`,
      (_) => `${window.location.protocol}//${useEnvHostname()}${_}`
    );
  };
export const usePreviewLink: ActionToLinkFn = actionDispatcher("preview");
export const useAttemptLink: ActionToLinkFn = actionDispatcher("attempt");
export const useReviewLink: ActionToLinkFn = actionDispatcher("review");
export const useViewLink: ActionToLinkFn = actionDispatcher("view");
export const useEditLink: ActionToLinkFn = actionDispatcher("edit");
export const useReportLink: ActionToLinkFn = actionDispatcher("report");
