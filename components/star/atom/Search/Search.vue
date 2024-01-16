<template>
  <div
    class="card justify-content-center text-text-300 rounded-large flex flex-wrap gap-3"
    data-sui-section="root"
  >
    <span
      class="p-input-icon-left p-input-icon-right text-inherit w-full"
      data-sui-section="iconWrapper"
    >
      <slot name="iconLeft">
        <Icon
          icon="mynaui:search"
          width="24px"
          color="currentColor"
          class="top-1/2 left-3 [&_*]:text-inherit absolute m-0 -translate-y-1/2"
          data-sui-section="icon"
        />
      </slot>

      <PInputText
        v-model="model"
        :placeholder="`${$t('ui.search')}...`"
        class="text-inherit focus:ring focus:ring-offset-2 focus:ring-ring focus:ring-2 focus:border-primary-400 border-default hover:border-primary-300 w-full h-full"
        data-sui-section="input"
      />
      <slot name="iconRight">
        <button
          v-if="model"
          class="top-1/2 right-3 [&_*]:text-inherit absolute m-0 -translate-y-1/2 text-default-300"
          data-sui-section="clearButton"
          ariaLabel="Clear Search text"
          @click="() => (model = '')"
        >
          <Icon icon="material-symbols:cancel-rounded" width="24px" data-sui-section="iconRight" />
        </button>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "#star/atom/Icon";
import PInputText from "primevue/inputtext";
import { defineModel } from "vue";

const model = defineModel<string>("modelValue", { local: true });
// TODO autocomplete
</script>
