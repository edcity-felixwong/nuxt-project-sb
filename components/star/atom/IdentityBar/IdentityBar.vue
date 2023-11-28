<template>
  <div class="min-h-[36px] w-full flex items-center flex-row-reverse">
    <div class="flex gap-1 leading-4 text-[--sui-color-edcity-default]">
      <!-- Felix|English| -->
      <div>
        <a
          @click="toggle"
          class="focus:text-[--sui-color-edcity-hover] hover:text-[--sui-color-edcity-hover]"
          >Felix</a
        >
        <UserMenu
          ref="menu"
          :user="{
            fullname: 'losum ipsum',
            schoolName: 'hkedity wqwe school no.2',
            avatar:
              'https://www.dev.hkedcity.net/citizen/profile/profile_picture.php?size=80&user_id=200000150',
          }"
        />
      </div>
      <Divider />
      <a
        class="hover:text-[--sui-color-edcity-hover]"
        @click="() => (locale === 'zh' ? (locale = 'en') : (locale = 'zh'))"
        >{{ locale === "zh" ? "中" : "English" }}</a
      >
      <Divider />
      <div class="flex items-center justify-center">
        <HomeIcon class="hover:text-[--sui-color-edcity-hover]" />
      </div>
    </div>
  </div>
</template>
<script setup lang="tsx">
import { ref, defineComponent } from "vue";
import { createBEM } from "@/composables";
import PDivider from "primevue/divider";
import { useI18n } from "vue-i18n";
import UserMenu from "./UserMenu.vue";

const { locale } = useI18n();

const bem = createBEM("identity-bar");

const Divider = defineComponent(
  () => () =>
    (
      <PDivider
        layout="vertical"
        pt={{ root: "m-0 p-0 before:border-solid before:border-[color:--sui-color-edcity]" }}
      />
    ),
  { name: "Divider" }
);
const HomeIcon = defineComponent(
  () => () =>
    (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9957 7.98438C17.9957 8.54688 17.527 8.9875 16.9957 8.9875H15.9957L16.0176 13.9937C16.0176 14.0781 16.0113 14.1625 16.002 14.2469V14.75C16.002 15.4406 15.4426 16 14.752 16H14.252C14.2176 16 14.1832 16 14.1488 15.9969C14.1051 16 14.0613 16 14.0176 16H13.002H12.252C11.5613 16 11.002 15.4406 11.002 14.75V14V12C11.002 11.4469 10.5551 11 10.002 11H8.00195C7.44883 11 7.00195 11.4469 7.00195 12V14V14.75C7.00195 15.4406 6.44258 16 5.75195 16H5.00195H4.00508C3.9582 16 3.91133 15.9969 3.86445 15.9937C3.82695 15.9969 3.78945 16 3.75195 16H3.25195C2.56133 16 2.00195 15.4406 2.00195 14.75V11.25C2.00195 11.2219 2.00195 11.1906 2.00508 11.1625V8.9875H1.00195C0.439453 8.9875 0.00195312 8.55 0.00195312 7.98438C0.00195312 7.70312 0.0957031 7.45312 0.314453 7.23438L8.32695 0.25C8.5457 0.03125 8.7957 0 9.01445 0C9.2332 0 9.4832 0.0625 9.6707 0.21875L17.652 7.23438C17.902 7.45312 18.027 7.70312 17.9957 7.98438Z"
          fill="currentColor"
        />
      </svg>
    ),
  { name: "HomeIcon" }
);

const menu = ref();
/** No direct reference to menu.toggle as it is null at start */
const toggle = (event) => menu.value.menu.toggle(event);
</script>
