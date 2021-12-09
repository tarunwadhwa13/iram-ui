import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localStorage if it exists
  const token = localStorage.getItem('token')

  // return the headers to the context so HTTP link can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null
    }
  }
})

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql'
})

// Cache implementation
const cache = new InMemoryCache()

const errorShow = onError(error => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Error making graphql query', error)
  }
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorShow.concat(authLink).concat(httpLink),
  cache
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})
