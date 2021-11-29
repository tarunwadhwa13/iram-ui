<template>
  <div class="home">
    <Navbar/>
    <el-row :gutter="10">
      <el-col :span="1">
        <Sidebar/>
      </el-col>
      <el-col :span="23">
        <InfoCards/>
        <br/>
        <AlertsTable/>
      </el-col>
      <el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AlertsTable from '@/components/AlertsTable.vue' // @ is an alias to /src
import InfoCards from '@/components/InfoCards.vue'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

@Options({
  components: {
    Sidebar,
    AlertsTable,
    InfoCards,
    Navbar
  }
})
export default class Home extends Vue {}
</script>
