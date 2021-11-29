<template>
    <el-row class="amp-navbar">
        <el-col :span="20">
            Alert Monitoring Platform
        </el-col>
        <el-col class="userOptions" :span="4">
            <el-icon :size="30" style="border:1px solid white"><user-filled /></el-icon>
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
}
</script>

<style scoped>
.amp-navbar {
  background-color: #545c64;
  color: white;
  height: 60px;
  font-size: 180%;
  text-align: left;
  display: flex;
  padding: 0 20px;
  align-items: center;
}

.userOptions {
  height: 1.2em;
  padding: 1px;
  text-align: right;
}

</style>
