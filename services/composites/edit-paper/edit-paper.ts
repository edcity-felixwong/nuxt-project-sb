import { z } from "zod";
import { packageIdZ, packageCodeZ, Paper } from "../../models";
import { pipe } from "fp-ts/function";

export function encode<T>(obj: T) {
  return encodeURIComponent(
    btoa(" ".repeat(9 * Math.random()) + JSON.stringify(obj)).replace(/\=+$/, "")
  );
}

/**
 * This is the state for `/home` client.
 */
const payloadZ = z.object({
  paper_id: z.number(),
  package_id: packageIdZ,
  package_code: packageCodeZ,
  locale: z.enum(["zh", "en"]),
});
/** This is the state for `/paper` and `/report` clients,
 * they need it in the url params.
 */
const startTrialPayloadZ = z.object({
  paper_id: z.number(),
  package_alias: packageCodeZ,
  mode: z.enum(["preview", "review", "start"]),
});
export function packageIdToPackageCode(
  packageId: z.infer<typeof packageIdZ>
): z.infer<typeof packageCodeZ> {}
export function attempt({ paper, locale }: { paper: Paper; locale: "zh" | "en" }) {
  return pipe(
    paper, //
    (_) =>
      payloadZ.parse({
        paper_id: _.id,
        package_id: _.packageId,
        package_code: packageIdToPackageCode(_.packageId),
        locale,
      }),
    encode
  );
}
