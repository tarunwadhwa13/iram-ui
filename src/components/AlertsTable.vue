<template>
  <el-alert v-if="context.error" title="Snap :( Something went wrong and we couldn't fetch data" type="error" close-text="Gotcha" center show-icon effect="dark">
  </el-alert>
  <el-table
    ref="multipleTable"
    border
    v-loading="context.loading"
    empty-text="No active alert(s) to show"
    element-loading-text="Loading..."
    :element-loading-spinner="context.svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="context.activeAlerts.filter(
        (data) =>
          !context.search
            || data.source.toLowerCase().includes(search.toLowerCase())
            || data.entity.toLowerCase().includes(search.toLowerCase())
            || data.subject.toLowerCase().includes(search.toLowerCase())
            || data.state.toLowerCase().includes(search.toLowerCase())
      )"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >

    <el-table-column prop="source" label="Source" width="120"/>
    <el-table-column prop="createdAt" label="Started At" sortable width="180"/>
    <el-table-column prop="age" label="Age" width="50" />
    <el-table-column prop="priority" label="Priority" sortable width="100" />
    <el-table-column prop="entity" label="Entity" width="250" />
    <el-table-column prop="subject" label="Subject" />
    <el-table-column prop="state" label="State" sortable width="90"/>
    <el-table-column prop="assignedTo.username" label="Assigned To" sortable width="140"/>
    <el-table-column label="Action" width="120">
      <el-button type="danger"  size="mini" @click="showDetailModal = true">
        <font-awesome-icon :icon="detailIcon" title="Alert Details"/>
      </el-button>
      <el-button type="danger"  size="mini" @click="showAssignModal = true">
        <font-awesome-icon :icon="assignIcon" title="Assign Alert"/>
      </el-button>
    </el-table-column>
    <!-- <el-table-column align="right">
      <template #header>
        <el-input v-model="context.search" size="mini" placeholder="Type to search" />
      </template>
    </el-table-column> -->

  </el-table>
</template>

<script lang="ts">

import { Options, Vue, setup } from 'vue-class-component'
import { reactive, toRefs, watch } from 'vue'
import gql from 'graphql-tag'
import { useQuery, useResult } from '@vue/apollo-composable'
import { faUserPlus, faInfo } from '@fortawesome/free-solid-svg-icons'

@Options({})
export default class AlertsTable extends Vue {
  assignIcon = faUserPlus
  detailIcon = faInfo
  showErrorAlert = false
  alertMsg = ''
  context = setup(() => {
    const { result, loading, error } = useQuery(gql`query {
        activeAlerts {
          source,
          createdAt,
          age,
          priority,
          entity,
          subject,
          state,
          assignedTo {
            username
          }
        }
      }`)

    const activeAlerts = useResult(result, [], data => data.activeAlerts)
    const dynProps = reactive({
      showDetailModal: false,
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
    return { dynProps: toRefs(dynProps), activeAlerts: activeAlerts, loading: loading, error: error }
  })

  tableRowClassName ({ row, _rowIndex }: { row: any, _rowIndex: number }):string {
    if (row.state.toLowerCase() === 'realarmed') {
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
.el-table {
  --el-table-border-color: var(--el-table-border-color-base)
}

</style>
