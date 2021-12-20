import { apolloClient } from '@/utils/apollo'
import gql from 'graphql-tag'

const state = () => ({
    alerts: []
})

export default {
    namespaced: true,
    state
  }