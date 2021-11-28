<template>
  <el-table
    ref="multipleTable"
    border
     v-loading="context.loading"
    element-loading-text="Loading..."
    :element-loading-spinner="context.svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="context.tableData.filter(
        (data) =>
          !context.search
            || data.source.toLowerCase().includes(search.toLowerCase())
            || data.entity.toLowerCase().includes(search.toLowerCase())
            || data.subject.toLowerCase().includes(search.toLowerCase())
            || data.status.toLowerCase().includes(search.toLowerCase())
      )"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >

    <el-table-column prop="source" label="Source" />
    <el-table-column prop="time" label="Time" sortable/>
    <el-table-column prop="age" label="Age" />
    <el-table-column prop="priority" label="Priority" sortable/>
    <el-table-column prop="entity" label="Entity" />
    <el-table-column prop="subject" label="Subject" />
    <el-table-column prop="status" label="Status" sortable />

    <!-- <el-table-column align="right">
      <template #header>
        <el-input v-model="context.search" size="mini" placeholder="Type to search" />
      </template>
    </el-table-column> -->

  </el-table>
</template>

<script lang="ts">

import { Options, Vue, setup } from 'vue-class-component'
import { reactive, toRefs } from 'vue'

@Options({})
export default class AlertsTable extends Vue {
  context = setup(() => {
    const state = reactive({
      tableData: [] as any,
      loading: true,
      search: '',
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    })
    return toRefs(state)
  })

  created () {
    this.context.tableData = [
      {
        source: 'SLA Zabbix New',
        time: '2021-11-27 10:36PM',
        age: '2m',
        priority: 'P0',
        entity: 'New host 1',
        subject: 'Test alert 1',
        status: 'New'
      },
      {
        source: 'SLA Zabbix New',
        time: '2021-11-27 10:36PM',
        age: '5m',
        priority: 'P1',
        entity: 'New host 2',
        subject: 'Test alert 2',
        status: 'Realarmed'
      }
    ]

    this.context.loading = false
  }

  tableRowClassName ({ row, _rowIndex }: { row: any, _rowIndex: number }):string {
    if (row.status.toLowerCase() === 'realarmed') {
      return 'realarmed-row'
    }
    switch (row.priority) {
      case 'P0':
        return 'danger-row'
      case 'P1':
        return 'error-row'
      case 'P2':
        return 'warning-row'

      default:
        return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light);
}
.el-table .error-row {
  --el-table-tr-bg-color: var(--el-color-error-light);
}
.el-table .danger-row {
  --el-table-tr-bg-color: var(--el-color-danger-light);
}
.el-table .realarmed-row {
  --el-table-tr-bg-color: var(--el-color-primary-light-8);
}
.el-table .el-table__cell {
  font-weight: 650;
}

</style>
