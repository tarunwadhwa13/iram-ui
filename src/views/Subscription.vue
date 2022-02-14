<template>
  <div class="home">
    <Navbar/>
    <el-container>
      <el-aside width="50px">
        <Sidebar/>
      </el-aside>
      <el-main>
          <SubscriptionDetailTable />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import SubscriptionDetailTable from '@/components/SubscriptionDetailTable.vue'

@Options({
  components: {
    SubscriptionDetailTable,
    Navbar,
    Sidebar
  }
})
export default class Home extends Vue {}
</script>
