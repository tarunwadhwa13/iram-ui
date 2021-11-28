<template>
  <div class="home">
      <InfoCards/>
      <AlertsTable/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AlertsTable from '@/components/AlertsTable.vue' // @ is an alias to /src
import InfoCards from '@/components/InfoCards.vue'

@Options({
  components: {
    AlertsTable,
    InfoCards
  }
})
export default class Home extends Vue {}
</script>
