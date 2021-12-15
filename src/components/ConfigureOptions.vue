<template>
  <el-row>
    <el-main>
        <div class="title-text">
        What would you like to configure?
        </div>
    </el-main>
  </el-row>
  <div class="options-container">
  <el-row>

    <el-col
      :key="0"
      :span="6"
      :offset="0">
      <router-link class="link" :to="{name: 'AddNewAlertSource'}">
      <el-card shadow="hover" class="">
        <div>
            <font-awesome-icon :icon=addIcon size="2x"/>
            <div class="info-text">Add New Alert Source</div>
        </div>
      </el-card>
      </router-link>
    </el-col>

    <el-col
      :key="0"
      :span="6"
      :offset="0">
      <router-link class="link" :to="{name: 'ManageAlertSource'}">
      <el-card shadow="hover" class="">
        <div>
            <font-awesome-icon :icon=taskIcon size="2x"/>
            <div class="info-text">Manage Existing Alert Sources</div>
        </div>
      </el-card>
      </router-link>
    </el-col>

    <el-col
      :key="0"
      :span="6"
      :offset="0">
      <router-link class="link" :to="{name: 'ManageUsers'}">
      <el-card shadow="hover" class="">
        <div>
            <font-awesome-icon :icon=userIcon size="2x"/>
            <div class="info-text">Manage Users and Permissions</div>
        </div>
      </el-card>
      </router-link>
    </el-col>

    <el-col
      :key="0"
      :span="6"
      :offset="0">
      <router-link class="link" :to="{name: 'OtherAppSettings'}">
      <el-card shadow="hover" class="">
        <div>
            <font-awesome-icon :icon=otherSettingIcon size="2x"/>
            <div class="info-text">Other App Settings</div>
        </div>
      </el-card>
      </router-link>
    </el-col>

  </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { faPlusCircle, faTasks, faUsersCog, faWrench } from '@fortawesome/free-solid-svg-icons'

@Options({
  components: {
    faPlusCircle,
    faTasks,
    faUsersCog,
    faWrench
  }
})
export default class ConfigureOptions extends Vue {
    addIcon = faPlusCircle
    taskIcon = faTasks
    userIcon = faUsersCog
    otherSettingIcon = faWrench
}
</script>

<style scoped>
.el-card {
    border-radius: 5%;
    margin: 40px 40px;
    height: 30vh;
    border: 1px solid;
    justify-content: center;
    align-items: center;
    display: grid;
    cursor: pointer;
    background: var(--el-color-primary-light-8);
}

.el-card:hover {
  box-shadow: 0 0 15px;
}

.title-text {
 justify-content: center;
 min-width: 100%;
 font-size: 200%;
 background: gray;
 color: white;
 padding: 10px;
}

.link {
 text-decoration: none;
 color: inherit;
}

.options-container {
 border: 1px solid black;
 margin-top: 10px;
 background: var(--el-border-color-extra-light);
}

.info-text {
  font-size: 150%;
}

</style>
