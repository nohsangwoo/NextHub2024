import { DogByNameQueryVariables } from '@/generated/graphql'
import dogs from './dogs.json' assert { type: 'json' }
import { Context } from '../type'

export default {
  Query: {
    dogByName: async (
      _parent: any,
      args: DogByNameQueryVariables,
      context: Context,
    ) => {
      const { name } = args
      const dog = dogs.find(dog => dog.name === name)

      console.log('context: ', context.customData)

      console.log('dog: ', dog)

      if (dog === undefined) {
        throw new Error('Dog not found')
      }

      // 이 부분을 수정하여 zx 모듈을 동적으로 불러오기
      // google zx사용 법 연구해야함
      // const { $ } = await import('zx')
      // const CMD = 'df -h;ls ~/'
      // console.log('cmd: ', CMD)

      // async function runCommand() {
      //   const result = await $`cat package.json | grep name`
      //   return result
      // }
      // const runcmdResult = await runCommand()

      // console.log('runcmdResult: ', runcmdResult)
      console.log('test console.log')

      return dog
    },
  },
}
