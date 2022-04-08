import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
	name: 'react-rick-morty-graphql'
});