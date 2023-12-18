<template>
  <FooterTemplate :model="items" :isMobile="!isTabletOrLarger" />
</template>
<script setup lang="ts">
import { useMedia } from "@/composables";
import { computedWithControl } from "@vueuse/core";
import type { Ref } from "vue";
import { useI18n } from "vue-i18n";
import FooterTemplate, { type StarFooterProps } from "./FooterTemplate.vue";

/** Data */
const { t, locale } = useI18n();
const items: Ref<StarFooterProps["model"]> = computedWithControl(locale, () => [
  {
    label: t("brand.company_name"),
    href: t("brand.company_link"),
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
]);

const { isTabletOrLarger } = useMedia();
</script>
