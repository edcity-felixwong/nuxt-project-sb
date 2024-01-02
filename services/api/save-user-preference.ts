import { z } from "zod";
import { $http } from "../axios";

const defaultParams = z.object({
  token: z.string(),
});

export interface SaveUserPreferenceParams {}
export function saveUserPreferenceQuery() {
  return $http
    .post("/api.php?action=save_user_preference", {
      token,
      para: {
        general: JSON.stringify(),
      },
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
