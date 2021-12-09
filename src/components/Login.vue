<template>
 <div class="login">
  <el-card class="box-card" shadow="always">
      <div class="card-header">
       <img class="avatar-logo" src="../assets/user-avatar.png"/>
        <div>Login</div>
      </div>
    <el-form
      class="login-form"
      :model="model"
      :rules="rules"
      ref="form"
    >
      <el-form-item prop="username">
        <el-input v-model="model.username" placeholder="Username">
          <template #prefix>
            <el-icon class="el-input__icon"><user /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="model.password"
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
          <el-link href="/#/account/reset-password" target="_blank" :underline="false" >Forgot Password?</el-link>
        </div>
      </el-form-item>
      <el-form-item>
          <el-button
            class="login-button"
            type="primary"
            native-type="submit"
            block
          >Login</el-button>
        </el-form-item>
    </el-form>
  </el-card>
</div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { User, UserFilled, Key } from '@element-plus/icons'

@Options({
  components: {
    User,
    UserFilled,
    Key
  }
})
export default class Login extends Vue {
  data () {
    return {
      rememberMe: false,
      model: {
        username: '',
        password: ''
      },
      rules: {
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
    }
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
