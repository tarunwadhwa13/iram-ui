<template>
 <div class="login">
  <el-card class="box-card" shadow="always">
      <div class="card-header">
       <img class="avatar-logo" src="../assets/user-avatar.png"/>
        <div>Login</div>
      </div>
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
    >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="Username">
          <template #prefix>
            <el-icon class="el-input__icon"><user /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="Password"
          type="password"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><key /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="extraOptions">
          <el-checkbox v-model="rememberMe" label="Remember me?"></el-checkbox>
          <router-link class="link" :to="{name: 'ResetPassword' }" target="_blank" >Forgot Password?</router-link>
        </div>
      </el-form-item>
      <el-form-item>
          <el-button
            class="login-button"
            type="primary"
            block
            @click="handleLogin('loginForm')"
          >Login</el-button>
        </el-form-item>
    </el-form>
  </el-card>
</div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { User, UserFilled, Key } from '@element-plus/icons'
import { ElNotification } from 'element-plus'

@Options({
  components: {
    User,
    UserFilled,
    Key
  }
})
export default class Login extends Vue {
  loading = false
  rememberMe = false

  loginForm = {
    username: '',
    password: ''
  }

  rules = {
    username: [
      {
        required: true,
        message: 'Username is required',
        trigger: 'blur'
      },
      {
        min: 4,
        message: 'Username length should be at least 5 characters',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: 'Password is required',
        trigger: 'blur'
      },
      {
        min: 5,
        message: 'Password length should be at least 5 characters',
        trigger: 'blur'
      }
    ]
  }

  handleLogin (formName) {
    console.log(formName)
    console.log(this.$refs)
    const formObj: any = this.$refs[formName]
    // formObj.validate((valid) => {
    //   if (!valid) {
    //     ElNotification({
    //       title: 'Error',
    //       message: 'Error validating form fields',
    //       type: 'error'
    //     })
    //     return false
    //   }
    // })
    this.loading = true
    this.axios.post('http://localhost:8000/login/', {
      username: this.loginForm.username,
      password: this.loginForm.password
    })
      .then(
        (response) => {
          const result = response.data.toJSON()
          console.log('Result from Server: ', result)
          // ignore applicationsettings it's just a kind of localstore in nativescript
          localStorage.setString('token', result.jwt)
          this.loading = false
          this.$router.push({ name: 'Home' })
        },
        (e) => {
          ElNotification({
            title: 'Error',
            message: e,
            type: 'error'
          })
          this.loading = false
        }
      )
  }
}
</script>

<style scoped>
.login {
  min-height: 100vh;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-card {
  border-radius: 15%;
  box-shadow: 4px 4px gray;
  color: white;
  border: 1px solid #d0cbcb;
  background-color: transparent;
  --el-card-padding: 40px
}

.card-header {
  font-weight: bolder;
  font-size: 150%;
  margin-bottom: 25px;
}

.link {
 text-decoration: none;
 color: inherit;
}

.login-form {
  width: 290px;
}

.extraOptions {
  display: flex;
  justify-content: space-between;
  font-style: oblique;
}

.el-checkbox {
  --el-checkbox-text-color: white;
}
.el-link.el-link--default {
  color: white;
}

.login-button {
  min-width: 75%;
  border-radius: 5%;
  opacity: 0.8;
  border: none;
  background: rgb(154,6,6);
  background: linear-gradient(165deg, rgba(154,6,6,1) 0%, rgba(121,9,102,1) 35%, rgba(245,117,183,1) 100%);
}

.avatar-logo {
  height: 75px;
}
</style>

<style>
.el-input > input {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid white !important;
    color: white;
}
</style>
