<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
</script>

<template>
  <Select>
    <SelectTrigger class="w-[128px] h-full">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Statuses</SelectLabel>
        <SelectItem value="Pending"> Pending </SelectItem>
        <SelectItem value="Ready"> Ready </SelectItem>
        <SelectItem value="Not attempted"> Not attempted</SelectItem>
        <SelectItem value="Attempted"> Attempted</SelectItem>
        <SelectItem value="Finished"> Finished</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
