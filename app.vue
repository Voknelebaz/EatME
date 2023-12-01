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
    <NuxtPage/>
  </div>
</template>
