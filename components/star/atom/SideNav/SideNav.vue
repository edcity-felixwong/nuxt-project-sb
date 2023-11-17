<template>
  <nav :class="base()">
    <ul>
      <SideNavItem variant="flat" color="primary">
        <template #startContent>
          <div>
            <Icon icon="material-symbols:article-outline-rounded" width="1.5rem" />
          </div>
        </template>
        <template #default> My Paper </template>
      </SideNavItem>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="12" fill="#FFF1EB" />
        <mask
          id="mask0_320_15840"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="16"
          y="16"
          width="24"
          height="24"
        >
          <rect x="16" y="16" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_320_15840)">
          <path
            d="M23 33H30V31H23V33ZM23 29H33V27H23V29ZM23 25H33V23H23V25ZM21 37C20.45 37 19.9792 36.8042 19.5875 36.4125C19.1958 36.0208 19 35.55 19 35V21C19 20.45 19.1958 19.9792 19.5875 19.5875C19.9792 19.1958 20.45 19 21 19H35C35.55 19 36.0208 19.1958 36.4125 19.5875C36.8042 19.9792 37 20.45 37 21V35C37 35.55 36.8042 36.0208 36.4125 36.4125C36.0208 36.8042 35.55 37 35 37H21ZM21 35H35V21H21V35Z"
            fill="#EC4F0C"
          />
        </g>
      </svg>

      <SideNavItem>qweqwe</SideNavItem>
      <SideNavItem>qweqwe</SideNavItem>
      <SideNavItem>qweqwe</SideNavItem>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import SideNavItem from "@/components/star/atom/MenuItem/SideNavItem.vue";
import { Primitive } from "radix-vue";
import { Icon } from "@iconify/vue";
import { sideNav } from "./side-nav-tv";
const { base, list } = sideNav();
</script>
