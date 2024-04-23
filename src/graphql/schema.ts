import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { fileURLToPath } from 'url'
import { makeExecutableSchema } from '@graphql-tools/schema'

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.ts`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.ts`)

export const typeDefs = mergeTypeDefs(loadedTypes)
export const resolvers = mergeResolvers(loadedResolvers)

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
