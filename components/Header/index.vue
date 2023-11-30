<template>
  <header class="py-10 max-[425px]:px-4 max-[425px]:py-6">
    <div class="max-w-[1435px] gap-6 mx-auto flex justify-between ">
      <IconsBurgerMenu class="hidden max-[425px]:block" v-on:click="showMobileMenu=!showMobileMenu"></IconsBurgerMenu>
      <MobileMenu class="min-[425px]:hidden overflow-hidden mt-[50px]" v-show="showMobileMenu"></MobileMenu>
      <NuxtLink to="/home">
        <IconsLogo/>
      </NuxtLink>
      <Menu class="max-[425px]:hidden"></Menu>
      <IconsPhone class="hidden max-[425px]:block"></IconsPhone>
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