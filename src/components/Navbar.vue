<template>
    <el-row class="amp-navbar">
        <el-col :span="20">
            Alert Monitoring Platform
        </el-col>
        <el-col class="userOptions" :span="4">
            Hello {{ username }} !
        </el-col>
    </el-row>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { UserFilled } from '@element-plus/icons'

@Options({
  components: {
    UserFilled
  }
})
export default class Navbar extends Vue {
  username = 'Tarun'
}
</script>

<style scoped>
.amp-navbar {
  background-color: #545c64;
  color: white;
  height: 50px;
  font-size: 130%;
  font-weight: bold;
  text-align: left;
  display: flex;
  padding: 0 10px;
  align-items: center;
}

.userOptions {
  height: 1.2em;
  padding: 1px;
  text-align: right;
}

</style>
