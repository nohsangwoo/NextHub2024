import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql'

// dev일때와 prod일때 적용방식이 달라야함.
const API_URL = '/graphql'
const gqlClient = new GraphQLClient(API_URL)

export const { dogByName, mutationDogByName } = getSdk(gqlClient)
