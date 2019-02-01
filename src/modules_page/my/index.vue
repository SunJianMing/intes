<template lang="">
  <div class='layout'>
    <v-navigate :title='title'></v-navigate>
    <div class="layout-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import vNavigate from '@/components/navigate'
export default {
  components: {
    vNavigate
  },
  computed: {
    title () {
      if (this.$route.meta.title) {
        return this.$route.meta.title
      }
      return ''
    }
  }
}
</script>
<style lang="">

</style>
