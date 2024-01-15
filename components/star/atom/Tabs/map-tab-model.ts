import { Paper } from "@/services/models";
import type { PaperTabModel } from "./PaperTabs.vue";

/** this maps the `tab` field from api into the UI view model.
 * ie. the Tabs's props
 */
function mapTabLabel(tab: Paper["tab"]): PaperTabModel {}
