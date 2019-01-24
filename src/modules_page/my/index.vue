<template lang="">
  <div class='layout'>
    <v-navigate :title='($route.meta.title)'></v-navigate>
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
  }
}
</script>
<style lang="">

</style>
