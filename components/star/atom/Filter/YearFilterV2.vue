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
import { Icon } from "#star/atom/Icon";
</script>

<template>
  <Select>
    <SelectTrigger class="w-[128px] h-full">
      <template #iconLeft>
        <Icon
          icon="material-symbols-light:calendar-today-outline-rounded"
          class="w-5 h-5 shrink-0"
        />
      </template>
      <SelectValue placeholder="View all year" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ $t("paper.year.fieldName") }}</SelectLabel>
        <!-- <SelectItem value="all">{{ $t("paper.year.all") }}</SelectItem> -->
        <SelectItem value="2023/24">2023/24</SelectItem>
        <SelectItem value="2022/23">2022/23</SelectItem>
        <SelectItem value="2021/22">2021/22</SelectItem>
        <SelectItem value="2020/21">2020/21</SelectItem>
        <SelectItem value="2019/20">2019/20</SelectItem>
        <SelectItem value="2018/19">2018/19</SelectItem>
        <SelectItem value="2017/18">2017/18</SelectItem>
        <SelectItem value="2016/17">2016/17</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
