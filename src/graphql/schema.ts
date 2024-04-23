import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`)

export const typeDefs = mergeTypeDefs(loadedTypes)
export const resolvers = mergeResolvers(loadedResolvers)

export function test() {
  console.log('__dirname: ', __dirname)
  console.log('__filename: ', __filename)
  // console.log('loadedTypes: ',)

  return 'test'
}
