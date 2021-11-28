<template>
  <el-row>
    <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '20px' }" shadow="always" class="totalAlertCard">
        <div class="display-text">
            <h1>2</h1>
            <h2>Total Alerts</h2>
        </div>
      </el-card>
    </el-col>

     <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '20px' }" shadow="always" class="p0AlertCard">
        <div class="display-text blink">
            <h1>1</h1>
            <h2>High Priority (P0)</h2>
        </div>
      </el-card>
    </el-col>

     <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '20px' }" shadow="always" class="newAlertCard">
        <div class="display-text">
            <h1>1</h1>
            <h2>New Alerts</h2>
        </div>
      </el-card>
    </el-col>

     <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '20px' }" shadow="always" class="acknowledgeAlertCard">
        <div class="display-text">
           <h1>0</h1>
           <h2>Acknowledged</h2>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class InfoCards extends Vue {
}
</script>

<style scoped>
.el-card {
    border-radius: 4%;
    margin: 10px;
    height: 35vh;
    border: 1px solid;
}

.display-text {
  justify-content: center;
  align-items: center;
}

.totalAlertCard {
  --el-card-bg-color: var(--el-color-success-light);
}

.p0AlertCard {
  --el-card-bg-color: var(--el-color-danger);
}

.newAlertCard {
  --el-card-bg-color: var(--el-color-warning);
}

.acknowledgeAlertCard {
  --el-card-bg-color: var(--el-color-primary-light-6);
}

</style>
