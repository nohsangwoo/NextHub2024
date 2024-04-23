import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { fileURLToPath } from 'url'
import path from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import dogByNameResolvers from './dogByName/dogByName.resolvers'
import dogByNameTypeDefs from './dogByName/dogByName.typeDefs'
// import extraTypeDefs from './extra.typeDefs'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.ts`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.ts`)

export const typeDefs = mergeTypeDefs(loadedTypes)
export const resolvers = mergeResolvers(loadedResolvers)

// export const resolvers2 = mergeResolvers([dogByNameResolvers])
// export const typeDefs2 = mergeTypeDefs([dogByNameTypeDefs, extraTypeDefs])
// export const schema = makeExecutableSchema({
//   resolvers: resolvers2,
//   typeDefs: typeDefs2,
// })

export function test() {
  console.log('__dirname: ', __dirname)
  console.log('__filename: ', __filename)
  console.log('0-------------------------0')
  console.log('loadedTypes: ', loadedTypes)
  console.log('loadedResolvers: ', loadedResolvers)

  console.log('0-------------------------0')
  // console.log('typeDefs2: ', typeDefs2)
  // console.log('resolvers2: ', resolvers2)
  // console.log('0-------------------------0')
  console.log('typeDefs: ', typeDefs)
  console.log('resolvers: ', resolvers)

  // console.log('loadedTypes: ')

  return 'test'
}
