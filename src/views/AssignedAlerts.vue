<template>
  <div class="home">
    <Navbar/>
    <el-container>
      <el-aside width="50px">
        <Sidebar/>
      </el-aside>
      <el-main>
        <AlertsTable data_key='assigned_alerts' />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AlertsTable from '@/components/AlertsTable.vue' // @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

@Options({
  components: {
    Sidebar,
    AlertsTable,
    Navbar
  }
})
export default class Home extends Vue {}
</script>
