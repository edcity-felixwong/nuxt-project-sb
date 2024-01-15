<script setup lang="ts">
import { ref, computed, defineModel } from "vue";
import { useI18n } from "vue-i18n";

import { Icon } from "#star/atom/Icon";
import type { OwnerInfo } from "@/services/models";

import { cn } from "@/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Person extends OwnerInfo {
  // value: string;
  label: string;
  // icon?: string;
}

// const users: Person[] = [
//   {
//     value: "backlog",
//     label: "Backlog",
//     // icon: HelpCircle,
//   },
//   {
//     value: "todo",
//     label: "Todo",
//     // icon: Circle,
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//     // icon: ArrowUpCircle,
//   },
//   {
//     value: "done",
//     label: "Done",
//     // icon: CheckCircle2,
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//     // icon: XCircle,
//   },
// ];

export interface StarOwnerFilterProps {
  users: Person[];
}
const props = withDefaults(defineProps<StarOwnerFilterProps>(), {
  users: () => [],
});
const { locale } = useI18n();
const usersWithLabel = computed(() => {
  return props.users.map((_) => ({
    ..._,
    label: locale.value === "zh" ? _.fullnameC : _.fullnameE,
  }));
});
const open = ref(false);
const value = ref();

const selectedPerson = defineModel<Person>("modelValue", { local: true });
</script>

<template>
  <!-- <div class="flex items-center space-x-4">
    <p class="text-sm text-muted-foreground">Status</p> -->
  <Select v-model="selectedPerson">
    <SelectTrigger v-model:open="open" class="w-[128px] h-full truncate space-x-1">
      <template #iconLeft>
        <Icon icon="material-symbols-light:person-outline-rounded" class="w-5 h-5 shrink-0" />
      </template>
      <SelectValue class="truncate" :placeholder="'All user'">{{
        locale === "zh" ? selectedPerson?.fullnameC : selectedPerson?.fullnameE
      }}</SelectValue>
    </SelectTrigger>
    <SelectContent>
      <!-- <Popover v-model:open="open">
          <PopoverContent class="p-0" side="right" align="start"> -->
      <Command>
        <CommandInput placeholder="View all user..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="person in usersWithLabel"
              :key="person.label"
              :value="person"
              @select="
                () => {
                  selectedPerson = person;
                  open = false;
                }
              "
            >
              <!-- <component
                :is="person.icon"
                :key="person.value"
                :class="
                  cn(
                    'mr-2 h-4 w-4',
                    person.value === selectedPerson?.value ? 'opacity-100' : 'opacity-40'
                  )
                "
              /> -->
              <span>{{ locale === "zh" ? person.fullnameC : person.fullnameE }}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <!-- </PopoverContent>
        </Popover> -->
    </SelectContent>
  </Select>
  <!-- </div> -->
</template>
