<template>
  <div class="card justify-content-center flex">
    <PMultiSelect
      v-model="show"
      scrollHeight="0"
      :options="props.options"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      placeholder="Select Cities"
      :maxSelectedLabels="props.options.length"
      :pt="pt.multiSelectPt"
      :disabled="props.disabled"
      @click="toggle"
    />
    <PMenu ref="menu" :popup="true" :pt="pt.menuPt">
      <template #start>
        <template v-for="(item, i) in props.options">
          <PListbox
            :ariaLabel="item.ariaLabel"
            v-model="models[i]"
            :options="[item]"
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
            @change="toggle"
            :pt="pt.listboxPt"
            unstyled
            optionDisabled="disabled"
          >
            <template #option="{ index, option }">
              <SelectItem :model="option" />
            </template>
            <template #optiongroup="{ index, option }">
              <SelectItem :model="option" />
            </template>
          </PListbox>
        </template>
      </template>
    </PMenu>
  </div>
</template>
<script setup lang="ts">
import PMultiSelect from "primevue/multiselect";
import PButton from "primevue/button";
import PMenu from "primevue/menu";
import PListbox from "primevue/listbox";
import { ref, computed, toRefs, reactive, watch } from "vue";
import { computedWithControl, notNullish, watchArray } from "@vueuse/core";
import { usePassThroughS, computedWithReactive } from "@/composables";
import {
  listboxPt,
  menuPt,
  multiSelectPt,
  type MultiSelectProps,
  type ListboxProps,
  type MenuProps,
} from "./multiple-select-tv";
import { Icon } from "@iconify/vue";
import { AriaAttributes } from "@types/react";
import SelectItem from "./SelectItem.vue";

export type Item = NonNullable<MenuProps["model"]>[number] & {
  ariaLabel?: AriaAttributes["aria-label"];
  items?: Item[];
};
export type Props = {
  multiSelectPt?: MultiSelectProps["pt"];
  listboxPt?: ListboxProps["pt"];
  menuPt?: MenuProps["pt"];
  options: Item[];
  /** @default false */
  disabled?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  // multiSelectPt: () => {},
  // listboxPt: () => {},
  // menuPt: () => {},
  options: () => [],
  ...multiSelectPt.defaultVariants,
  ...listboxPt.defaultVariants,
  ...menuPt.defaultVariants,
});
const menu = ref();

const toggle = (event) => {
  menu.value.toggle(event);
};

const models = reactive(
  Array(props.options.length).map(() => reactive<NonNullable<Props["options"]>[number]>({}))
);

const show = computedWithReactive(models, () => models.map(reactive));
const pt = usePassThroughS({ listboxPt, menuPt, multiSelectPt }, props);
</script>
