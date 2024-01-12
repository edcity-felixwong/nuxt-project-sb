<script setup lang="ts">
import { ref, defineModel } from "vue";
// import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'

import { cn } from "@/utils";
import { StarButton } from "#star";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const frameworks = [
  { value: "2016/17", label: "2016/17" },
  { value: "2017/18", label: "2017/18" },
  { value: "2018/19", label: "2018/19" },
  { value: "2019/20", label: "2019/20" },
  { value: "2020/21", label: "2020/21" },
  { value: "2021/22", label: "2021/22" },
  { value: "2022/23", label: "2022/23" },
  { value: "2023/24", label: "2023/24" },
];

const open = ref(false);
// const value = ref<string>("");
const value = defineModel("modelValue", { default: "", local: true });

// const filterFunction = (list: typeof frameworks, search: string) => list.filter(i => i.value.toLowerCase().includes(search.toLowerCase()))
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <StarButton
        variant="bordered"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between"
        :label="
          value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'
        "
      />
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Search framework..." />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="
                (ev) => {
                  if (typeof ev.detail.value === 'string') {
                    value = ev.detail.value;
                  }
                  open = false;
                }
              "
            >
              {{ framework.label }}
              <!-- <CheckIcon
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
              /> -->
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
