<template>
  <div class="flex flex-col absolute w-[300px] bg-PYL z-50 left-0">
    <nav class="pl-4 mb-[150px] ">
      <ul class="flex flex-col gap-y-4 gap-x-4 text-center items-start">
        <li v-for="item in items">
          <NuxtLink class="link__item" to="#"> {{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <div class="mb-[32px] pl-4">
        <div class="flex items-center mb-6">
          <IconsPhone class="w-[18px] h-[18px]"/>
          <NuxtLink class="ml-[12px]" to="tel:+380999009900">099-900-99-00</NuxtLink>
        </div>
        <div class="flex items-center mb-6">
          <IconsEmail/>
          <NuxtLink class="ml-[12px]" to="mailto:eatme@food.com">eatme@food.com</NuxtLink>
        </div>
        <div class="flex items-center">
          <IconsMap/>
          <NuxtLink class="ml-[12px]" to="https://www.google.com/maps">Shevchenko Str. 100</NuxtLink>
        </div>
      </div>
      <div class="h-[2px] bg-LG mb-4  w-[256px]"></div>
      <div class="flex  ml-4">
        <IconsFacebook class="mr-[16px] w-8 h-8"></IconsFacebook>
        <IconsTwitter class="mx-[16px] w-8 h-8"></IconsTwitter>
        <IconsInstagram class="mx-[16px] w-8 h-8"></IconsInstagram>
        <IconsPinterest class="ml-[16px] w-8 h-8"></IconsPinterest>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const items = [
  {name: 'About Us'},
  {name: 'Programs'},
  {name: 'Menu'},
  {name: 'Calculator'},
  {name: 'Delivery'},
  {name: 'Feedback'},
];
</script>

