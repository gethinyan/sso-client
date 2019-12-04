<template>
  <div
    v-loading="loading"
    class="sign-in-form"
  >
    <el-form
      ref="signInForm"
      :label-position="labelPosition"
      label-width="80px"
      :model="signInForm"
      :rules="rules"
    >
      <el-form-item
        prop="email"
      >
        <el-input
          v-model="signInForm.email"
          placeholder="请输入邮箱地址"
        />
      </el-form-item>
      <el-form-item
        prop="password"
      >
        <el-input
          v-model="signInForm.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%;"
          round
          @click="onSubmit"
        >
          立即登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as authApi from '@/api/authApi.js'

export default {
  name: 'SignIn',
  data () {
    return {
      labelPosition: 'top',
      loading: false,
      signInForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['signInForm'].validate((valid) => {
        if (!valid) {
          return false
        }
        const params = Object.entries(this.signInForm).reduce((obj, [key, value]) => Object.assign(obj, { [key.replace(/([A-Z])/g, l => `_${l.toLowerCase()}`)]: value }), {})
        console.log(params)
        authApi.signIn(params)
          .then((response) => {
            this.loading = false
            console.log(response)
            window.open('http://check.sso.com/v1/loginCheck')
          })
          .catch((error) => {
            this.$message.error(error.message)
          })
          .finally(() => {
            this.loading = false
          })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
