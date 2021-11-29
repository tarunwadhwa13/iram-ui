<template>
  <el-row>
    <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '0px' }" shadow="always" class="totalAlertCard">
        <div>
            <div class="info-text">2</div>
            <div class="desc-test">Total Alerts</div>
        </div>
      </el-card>
    </el-col>

     <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '0px' }" shadow="always" class="p0AlertCard">
        <div class="blink">
            <div class="info-text">1</div>
            <div class="desc-test">High Priority (P0)</div>
        </div>
      </el-card>
    </el-col>

     <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '0px' }" shadow="always" class="newAlertCard">
        <div>
            <div class="info-text">1</div>
            <div class="desc-test">New Alerts</div>
        </div>
      </el-card>
    </el-col>

     <el-col
      :key="0"
      :span="6"
      :offset="0">
      <el-card :body-style="{ padding: '0px' }" shadow="always" class="acknowledgeAlertCard">
        <div>
           <div class="info-text">0</div>
           <div class="desc-test">Acknowledged</div>
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
    border-radius: 5%;
    margin: 8px;
    height: 18vh;
    border: 1px solid;
    justify-content: center;
    align-items: center;
    display: grid;
}

.info-text {
  font-size: 200%;
}

.desc-text {
  font-size: 180%;
}

.totalAlertCard {
  --el-card-bg-color: var(--el-color-success-light);
  background-image: url('../assets/backgrounds/gplay.png')
}

.p0AlertCard {
  --el-card-bg-color: var(--el-color-danger);
  background-image: url('../assets/backgrounds/black-thread-light.png')
}

.newAlertCard {
  --el-card-bg-color: var(--el-color-warning);
  background-image: url('../assets/backgrounds/cubes.png')
}

.acknowledgeAlertCard {
  --el-card-bg-color: var(--el-color-primary-light-6);
  background-image: url('../assets/backgrounds/transparent-square-tiles.png')

}

</style>
