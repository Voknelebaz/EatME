<script setup lang="ts">
const items = [
  {name: 'Home'},
  {name: 'About Us'},
  {name: 'Programs'},
  {name: 'Calculator'},
  {name: 'Delivery'},
  {name: 'Feedback'},
  {name: 'Contacts'}
];
</script>
<template>
  <nav>
    <ul class="flex flex-wrap items-center">
      <li class="mx-4 first:ml-0 last:mr-0 lt:ml-0 mb-2" v-for="item in items">
        <NuxtLink class="link__item " to="#"> {{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
