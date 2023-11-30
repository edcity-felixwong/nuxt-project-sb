<template>
  <div role="banner" class="border-b" aria-hidden>
    <img class="max-w-none h-[115px]" :src="getBanner(props.subject)" alt="" title="" aria-hidden />
  </div>
</template>
<script setup lang="ts">
import chi from "@/assets/star_header_chi.png?url";
import eng from "@/assets/star_header_eng.png?url";
import cmath from "@/assets/star_header_Cmath.png?url";
import emath from "@/assets/star_header_Emath.png?url";
import stu from "@/assets/star_header_stu.png?url";

type Props = {
  subject?: "chinese" | "english" | "cmath" | "emath" | "generic";
};
export type Subject = NonNullable<Props["subject"]>;

const props = withDefaults(defineProps<Props>(), {
  subject: () => "generic",
});

function getBanner(subject: Subject): string {
  const map: Record<Subject, string> = {
    chinese: chi,
    english: eng,
    cmath: cmath,
    emath: emath,
    generic: stu,
  };
  return map[subject];
}
</script>
