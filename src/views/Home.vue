<template>
  <div class="home">
    <Navbar/>
    <el-container>
      <el-aside width="50px">
        <Sidebar/>
      </el-aside>
      <el-main>
        <InfoCards/>
        <br/>
        <AlertsTable/>
      </el-main>
    </el-container>
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
