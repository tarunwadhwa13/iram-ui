<template>
  <div>
    <Navbar/>
    <el-container>
      <el-aside width="50px">
        <Sidebar/>
      </el-aside>
      <el-main>
        <ConfigureOptions/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ConfigureOptions from '@/components/ConfigureOptions.vue'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

@Options({
  components: {
    ConfigureOptions,
    Navbar,
    Sidebar
  }
})
export default class ConfigureHome extends Vue {}
</script>
