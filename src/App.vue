<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="">
  #app{
    height: 100%;
  }
</style>
