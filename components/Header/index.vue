<template>
  <header class="py-10 lg:px-4 mb:py-6">
    <div class="max-w-[1435px] gap-6 mx-auto flex justify-between">
      <IconsBurgerMenu class="hidden mb:block" v-on:click="showMobileMenu=!showMobileMenu"></IconsBurgerMenu>
      <MobileMenu class="min-mb:hidden overflow-hidden mt-[45px] pb-[25px] rounded-b-[5px]" v-show="showMobileMenu"></MobileMenu>
      <NuxtLink to="#">
        <IconsLogo class="fill-LG hover:fill-AM"/>
      </NuxtLink>
      <Menu class="mb:hidden"></Menu>
      <IconsPhone class="hidden mb:block"></IconsPhone>
    </div>
  </header>
</template>
<script>
import {defineComponent} from "vue";
import Menu from "~/components/Header/Menu.vue";
import MobileMenu from "~/components/Header/MobileMenu.vue";

export default defineComponent({
  components: {MobileMenu, Menu},
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {}
})
</script>