import { apolloClient } from '@/utils/apollo'
import gql from 'graphql-tag' 

const state = () => ({
    isAdmin: false,
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    dataExpiry: 0
})

const getters = {
    userDetails: (state, getters, rootState) => {
        return {
            username: state.username,
            fullName: state.fullName,
            firstname: state.firstName,
            lastName: state.lastName,
            email: state.email,
            is_admin: state.is_admin
        }
    }
}

const actions = {
    async refreshUserState ({ commit, state }) {
        try {
            // Query should return the details of the user whose auth token is passed
            const userDetailQuery = gql`{
                query getUserDetail {
                    id,
                    username,
                    firstName,
                    email,
                    lastName,
                    isAdmin
                }
            }`
            const { data } = await apolloClient.query({
                query: userDetailQuery
            })
            console.log(data)
            commit('id', data.id)
            commit('isAdmin', data.is_admin)
            commit('firstName', data.firstName)
            commit('lastName', data.lastName)
            commit('email', data.email)
            commit('dataExpiry', Date.now() + 300*1000) // persist state for 5 mins
        } catch (e) {
            console.log(e)
            // to be on a safer side. disable admin privs until state is verified
            commit('isAdmin', false)
            commit('dataExpiry', Date.now() + 30*1000) // persist error state for 30 seconds
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions
  }