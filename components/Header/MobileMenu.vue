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
<template>
  <div  class="flex flex-col justify-between absolute w-screen bg-PYL min-h-screen z-30 py-8">
    <nav class="pl-8">
      <ul class="flex flex-col gap-y-4 gap-x-4 text-center items-start">
        <li v-for="item in items">
          <NuxtLink class="link__item " to="/home"> {{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <div class="mb-[32px] pl-8">
        <div class="flex items-center mb-6">
          <IconsPhone/>
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
      <div class="h-[2px] bg-LG mb-4 mx-[16px]"></div>
      <div class="flex  ml-[32px]">
        <IconsFacebook class="mr-[16px] w-8 h-8"></IconsFacebook>
        <IconsTwitter class="mx-[16px] w-8 h-8"></IconsTwitter>
        <IconsInstagram class="mx-[16px] w-8 h-8"></IconsInstagram>
        <IconsPinterest class="ml-[16px] w-8 h-8"></IconsPinterest>
      </div>
    </div>
  </div>

</template>


