<template>
    <el-menu
        :default-active="context.activeIndex"
        class="amp-sidebar"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="context.handleSelect"
    >
        <el-menu-item index="1">
          <el-tooltip
            class="item"
            effect="dark"
            content="Home"
            placement="right-start"
          >
          <router-link class="link" :to="{name: 'Home'}">
            <font-awesome-icon :icon="homeIcon" size="lg"/>
          </router-link>
          </el-tooltip>
        </el-menu-item>
        <el-menu-item index="2">
          <el-tooltip
            class="item"
            effect="dark"
            content="Past Alerts"
            placement="right-start"
          >
          <router-link class="link" :to="{name: 'PastAlerts'}">
            <font-awesome-icon :icon="pastAlertsIcon" size="lg"/>
          </router-link>
          </el-tooltip>
        </el-menu-item>
        <el-menu-item index="3">
          <el-tooltip
            class="item"
            effect="dark"
            content="Configure"
            placement="right-start"
          >
          <router-link class="link" :to="{name: 'Configure'}">
            <font-awesome-icon :icon="configureIcon" size="lg"/>
          </router-link>
          </el-tooltip>
        </el-menu-item>

        <el-menu-item index="4">
          <el-tooltip
            class="item"
            effect="dark"
            content="Assigned Alerts"
            placement="right-start"
          >
          <router-link class="link" :to="{name: 'AssignedAlerts'}">
            <font-awesome-icon :icon="taskIcon" size="lg"/>
          </router-link>
          </el-tooltip>
        </el-menu-item>

        <el-menu-item index="5">
          <el-tooltip
            class="item"
            effect="dark"
            content="Logout"
            placement="right-start"
          >
          <font-awesome-icon :icon="logOutIcon" size="lg"/>
          </el-tooltip>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component'
import { ref } from 'vue'
import { Clock, HomeFilled, Setting } from '@element-plus/icons'
import { faSignOutAlt, faHistory, faCogs, faHome, faTasks } from '@fortawesome/free-solid-svg-icons'

@Options({
  components: {
    Clock,
    HomeFilled,
    Setting
  }
})
export default class Sidebar extends Vue {
    pastAlertsIcon = faHistory
    logOutIcon = faSignOutAlt
    configureIcon = faCogs
    homeIcon = faHome
    taskIcon = faTasks
    context = setup(() => {
      const activeIndex = ref('1')
      const handleSelect = (key: any, keyPath: any) => {
        console.log(key, keyPath)
      }
      return {
        activeIndex,
        handleSelect
      }
    })
}
</script>

<style scoped>
.amp-sidebar {
  min-height: 95vh;
  max-width: 50px;
}

.el-menu-item {
  justify-content: center;
  align-items: center;
}

.link {
 text-decoration: none;
 color: inherit;
}

li.el-menu-item {
  padding: 30px 0 50px 0 !important;
}
</style>
