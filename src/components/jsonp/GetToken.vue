<template>
  <el-input v-model="token" />
</template>

<script>
export default {
  name: 'GetToken',
  data () {
    return {
      token: ''
    }
  },
  created: function () {
    console.log(111)
    this.$jsonp('http://server.sso.com/v1/getToken', { callbackName: 'getToken' }).then(token => {
      this.token = token
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="stylus">
</style>
