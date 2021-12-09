<template>
  <div class="auth">
    <Login/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Login from '@/components/Login.vue'

@Options({
  components: {
    Login
  }
})
export default class Authentication extends Vue {}
</script>

<style scoped>
.auth {
 min-height: 100vh;
 background: rgb(15,12,66);
 background: linear-gradient(63deg, rgba(15,12,66,1) 2%, rgba(89,29,148,0.9710084717480743) 43%, rgba(112,91,212,1) 69%, rgba(123,137,230,1) 87%, rgba(71,123,134,1) 100%);
}
</style>
