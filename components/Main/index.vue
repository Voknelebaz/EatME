<template>
  <div class="flex items-center justify-between max-w-[1600px] mx-auto space-x-8 mb:space-x-0 mt:pr-[20px]">
    <LeftSide class="mb:hidden"></LeftSide>
    <Center ></Center>
    <RightSide class="mb:hidden"></RightSide>
  </div>
</template>

<script setup lang="ts">

import LeftSide from "~/components/Main/LeftSide.vue";
import RightSide from "~/components/Main/RightSide.vue";
import Center from "~/components/Main/Center.vue";
</script>