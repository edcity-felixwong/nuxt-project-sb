<template>
  <footer :class="`${bem('root')}`">
    <slot name="divider">
      <PDivider :pt="pt" />
    </slot>
    <div :class="pt.list">
      <slot name="item">
        <!-- <span>© 2023 香港教育城有限公司</span> -->
        <template v-for="item in items">
          <a :href="item.href" target="_blank">{{ item.label }}</a>
        </template>
      </slot>
    </div>
  </footer>
</template>
<script setup lang="ts">
import type { DividerPassThroughOptions } from "primevue/divider";
import { withDefaults } from "vue";
import { createBEM } from "@/composables/bem";
import { usePassThrough } from "@/composables/usePassThrough";
import { footer } from "./footer-tv";
import { usePropsWatcher } from "@/composables/test-read-props";
import { useI18n } from "vue-i18n";
import { computedWithControl } from "@vueuse/core";

const { t, locale, tm, te, r, set } = useI18n();

const bem = createBEM("footer");

interface Item {
  label: string;
  href: string;
}
/** Variants can be exposed from tv, like VariantProps<footer>,
 * but vue is too lame to parse complex types 🥴
 */
export type Props = {
  model: Item[];
  isMobile?: boolean;
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<Props>(), {
  ...footer.defaultVariants,
});

usePropsWatcher(props);

const pt = usePassThrough(footer, props);

const items: Ref<Item[]> = computedWithControl(
  () => locale.value,
  () => [
    {
      label: t("brand.company_name"),
      href: t("brand.privacy_link"),
    },

    {
      label: t("brand.privacy"),
      href: t("brand.privacy_link"),
    },
    {
      label: t("brand.tos"),
      href: t("brand.tos_link"),
    },
    {
      label: t("brand.copyright"),
      href: t("brand.copyright_link"),
    },
    {
      label: t("brand.disclaimer"),
      href: t("brand.disclaimer_link"),
    },
    {
      label: t("brand.contact"),
      href: t("brand.contact_link"),
    },
  ]
);
</script>
