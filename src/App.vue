<template>
  <div id="app">
    <div class="main">
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style scoped lang="stylus">
#app
  display flex

.main
  flex auto
  display flex
  flex-flow column
  overflow-x hidden
  height 100vh

.content
  padding 15px
  background-color #fafafa
  flex auto
  overflow-x hidden
  overflow-y auto
</style>
