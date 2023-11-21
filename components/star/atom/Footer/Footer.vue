<template>
  <footer>
    <slot name="divider">
      <PDivider
        :pt="{
          root: 'from-transparent before:h-[1px] before:bg-gradient-to-r before:via-[#0000001f] before:via-50% before:to-transparent',
        }"
      />
    </slot>
    <div class="flex space-x-4 text-default-500 w-full justify-center px-5 pb-5">
      <slot name="item">
        <span>© 2023 香港教育城有限公司</span>
        <a href="" class="transition-all drop-shadow-[0_0_2em_#646cffaa]">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
      </slot>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
