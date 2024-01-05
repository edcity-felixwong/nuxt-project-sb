<template>
  <div :class="pt.root" data-sui-section="root" @click="props.model.command">
    <slot name="wrapper">
      <div :class="pt.wrapper" data-sui-section="wrapper">
        <slot name="iconWrapper">
          <div :class="pt.iconWrapper" data-sui-section="iconWrapper">
            <Icon
              v-if="props.model.icon"
              data-sui-section="icon"
              :class="pt.icon"
              :icon="props.model.icon"
            />
          </div>
        </slot>
        <div data-sui-section="body" :class="pt.body">
          <slot name="title">
            <div v-if="props.model.title" data-sui-section="title" :class="pt.title">
              {{ props.model.title }}
            </div>
          </slot>
          <slot name="description">
            <div
              v-if="props.model.description"
              data-sui-section="description"
              :class="pt.description"
            >
              {{ props.model.description }}
            </div>
          </slot>
        </div>
      </div>
    </slot>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/components/star/atom/Icon";
import { usePassThrough } from "@/composables";
import { optionItem } from "./option-item-tv";

export interface IStarOptionItem {
  icon?: string;
  title?: string;
  description?: string;
  command?: () => void;
  // selected?: boolean;
}
export type StarOptionItemProps = {
  model: IStarOptionItem;
  background?: string;
  foreground?: string;
  textColor?: string;
  pt?: Partial<(typeof optionItem)["slots"]>;
  // isSelected?: boolean;
};
const props = withDefaults(defineProps<StarOptionItemProps>(), {
  // pt: () => undefined,
  ...optionItem.defaultVariants,
});
// const pt = usePassThrough(optionItem, props);
const pt = usePassThrough(optionItem, props);
// watch(pt, () => {
//   console.log(`🚀 // DEBUG 🍔 ~ file: OptionItem.vue:63 ~ watch ~ newValue:`, pt.value);
//   // twMergeMonoidS.concat(pt.value,props.pt)
//   console.log(
//     `🚀 // DEBUG 🍔 ~ file: OptionItem.vue:72 ~ watch ~ twMergeMonoidS.concat(pt.value,props.pt):`,
//     twMergeMonoidS.concat(pt.value, props.pt)
//   );
//   console.log(
//     `🚀 // DEBUG 🍔 ~ file: OptionItem.vue:77 ~ watch ~ twMergeMonoidS.concat(props.pt,pt.value, ):`,
//     twMergeMonoidS.concat(props.pt, pt.value)
//   );
// });
</script>
