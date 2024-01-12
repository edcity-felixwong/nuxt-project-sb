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
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="2016/17"> 2016/17 </SelectItem>
        <SelectItem value="2017/18"> 2017/18 </SelectItem>
        <SelectItem value="2018/19"> 2018/19</SelectItem>
        <SelectItem value="2019/20"> 2019/20</SelectItem>
        <SelectItem value="2020/21"> 2020/21</SelectItem>
        <SelectItem value="2021/22"> 2021/22</SelectItem>
        <SelectItem value="2022/23"> 2022/23</SelectItem>
        <SelectItem value="2023/24"> 2023/24</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
