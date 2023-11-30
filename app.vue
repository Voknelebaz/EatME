<script>
import MobileMenu from "~/components/Header/MobileMenu.vue";
export default {
  components: {MobileMenu},
  data() {
    return {
      showMobileMenu: false
    }
  }
}
</script>
<template>
  <div>
    <MobileMenu class="min-[425px]:hidden overflow-hidden" v-show="showMobileMenu" v-on:click="showMobileMenu=false"></MobileMenu>
    <Header  @showMobileMenu="showMobileMenu=true" />
  </div>
</template>
