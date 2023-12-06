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
      @click="toggle"
    />
    <PMenu ref="menu" id="overlay_menu" :popup="true" :pt="pt.menuPt">
      <template #start>
        <template v-for="(item, i) in props.options">
          <PListbox
            v-model="models[i]"
            :options="[item]"
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
            @change="toggle"
            :pt="pt.listboxPt"
            unstyled
          >
            <template #option="{ index, option }">
              <div class="flex items-center">
                <Icon icon="material-symbols:10k" />
                <span>{{ option.label }}</span>
              </div>
            </template>
            <template #optiongroup="{ index, option }">
              <div class="flex items-center">
                <Icon icon="material-symbols:13mp-outline" />
                <span>{{ option.label }}</span>
              </div>
            </template>
          </PListbox>
        </template>
      </template>
    </PMenu>
  </div>
  <!-- <PMultiSelect
    v-model="selectedCities"
    :options="groupedCities"
    optionLabel="label"
    optionGroupLabel="label"
    optionGroupChildren="items"
    display="comma"
    placeholder="Select Cities"
    class="md:w-20rem w-full"
    scrollHeight="800px"
  >
    <template #optiongroup="slotProps">
      <div class="align-items-center flex">
        <img
          :alt="slotProps.option.label"
          src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
          :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
          style="width: 18px"
        />
        <div>{{ slotProps.option.label }}</div>
      </div>
    </template>
  </PMultiSelect> -->
</template>
<script setup lang="ts">
import PMultiSelect from "primevue/multiselect";
import PButton from "primevue/button";
import PMenu from "primevue/menu";
import PListbox from "primevue/listbox";
import { ref, computed, toRefs, reactive, watch } from "vue";
import { computedWithControl, watchArray } from "@vueuse/core";
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

function getItems(label: string) {
  return {
    1: [
      {
        label: "germany-choice",
      },
    ],
    2: [
      {
        label: "USA-choice",
      },
    ],
    // Japan: [
    //   {
    //     label: "japan-choice",
    //   },
    // ],
  }[label];
}
type Props = {
  multiSelectPt?: MultiSelectProps["pt"];
  listboxPt?: ListboxProps["pt"];
  menuPt?: MenuProps["pt"];
  options: MenuProps["model"];
};
const props = withDefaults(defineProps<Props>(), {
  // multiSelectPt: () => {},
  // listboxPt: () => {},
  // menuPt: () => {},
  options: () => [
    {
      label: "Germany",
      code: "DE",
      items: [
        { label: "Berlin", value: "Berlin", icon: "wqeqwe" },
        { label: "Frankfurt", value: "Frankfurt", icon: "wqeqwe" },
        { label: "Hamburg", value: "Hamburg", icon: "wqeqwe" },
        { label: "Munich", value: "Munich", icon: "wqeqwe" },
      ],
    },
    {
      separator: true,
    },
    {
      label: "Germany",
      code: "DE",
      items: [
        { label: "Berlin", value: "Berlin", icon: "wqeqwe" },
        { label: "Frankfurt", value: "Frankfurt", icon: "wqeqwe" },
        { label: "Hamburg", value: "Hamburg", icon: "wqeqwe" },
        { label: "Munich", value: "Munich", icon: "wqeqwe" },
      ],
    },
  ],
});
const menu = ref();

const toggle = (event) => {
  menu.value.toggle(event);
};

const models = reactive(
  Array(props.options.length).map(() => reactive<NonNullable<Props["options"]>[number]>({}))
);

const show = computedWithReactive(models, () => models.map(reactive), {});
const pt = usePassThroughS({ listboxPt, menuPt, multiSelectPt }, props);

const { btoa } = window;
</script>
