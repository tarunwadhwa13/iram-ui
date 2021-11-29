<template>
    <el-menu
        :default-active="context.activeIndex"
        class="amp-sidebar"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="context.handleSelect"
    >
        <el-menu-item index="1">P1</el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component'
import { ref } from 'vue'

@Options({})
export default class Sidebar extends Vue {
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
  min-height: 100vh;
}
</style>
