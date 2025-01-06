import { VITE_GRAPHQL_RAVN_API, VITE_GRAPHQL_RAVN_API_KEY } from "@/config/env";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: VITE_GRAPHQL_RAVN_API,
  headers: {
    Authorization: `Bearer ${VITE_GRAPHQL_RAVN_API_KEY}`,
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first",
    },
  },
});
