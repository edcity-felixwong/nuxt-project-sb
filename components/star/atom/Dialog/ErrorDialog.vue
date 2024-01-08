<template>
  <div>Please sign in to use STAR 🍔</div>
  <StarButton
    label="Login"
    icon="material-symbols:arrow-outward-rounded"
    iconPos="right"
    @click="login"
  />
</template>
<script setup lang="ts">
import { StarButton } from "../Button";

const login = () => window.open("https://e.star.dev.hkedcity.net", "_self");
</script>
