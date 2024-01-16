import { Paper } from "@/services/models";
import type { PaperTabModel } from "./PaperTabs.vue";

/** this maps the `tab` field from api into the UI view model.
 * ie. the Tabs's props
 */
export function mapTabLabel<T extends Function>(tab: Paper["tab"], t: T): PaperTabModel {
  const m: Record<Paper["tab"], PaperTabModel> = {
    "": {
      trigger: "",
      icon: "material-symbols:crossword",
      title: t("paper.tab.empty"),
      // default: true,
    },
    bca2021: {
      trigger: "bca2021",
      icon: "material-symbols:crossword",
      title: t("paper.tab.bca2021"),
      // default: true,
    },
    bca2022: {
      trigger: "bca2022",
      icon: "material-symbols:crossword",
      title: t("paper.tab.bca2022"),
      // default: true,
    },
    nsp2020: {
      trigger: "nsp2020",
      icon: "material-symbols:crossword",
      title: t("paper.tab.nsp2020"),
      // default: true,
    },
    shared: {
      trigger: "shared",
      icon: "material-symbols:crossword",
      title: t("paper.tab.shared"),
      // default: true,
    },
  };
  return m[tab];
}
