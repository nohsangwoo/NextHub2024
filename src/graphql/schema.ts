import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'

import dogByNameResolvers from './dogByName/dogByName.resolvers'
import extraTypeDefs from './extra.typeDefs'
import dogByNameTypeDefs from './dogByName/dogByName.typeDefs'

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.ts`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.ts`)

export const resolvers = mergeResolvers(loadedResolvers)
export const typeDefs = mergeTypeDefs(loadedTypes)

export const resolvers2 = mergeResolvers([dogByNameResolvers])
export const typeDefs2 = mergeTypeDefs([dogByNameTypeDefs, extraTypeDefs])

export const schema = makeExecutableSchema({
  resolvers: resolvers2,
  typeDefs: typeDefs2,
})
