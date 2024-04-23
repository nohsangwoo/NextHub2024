// 동적으로 zx 모듈 불러오기
async function loadZX() {
  const zx = await import('zx')
  return zx.$
}
import dogs from './dogs.json' assert { type: 'json' }

export default {
  Query: {
    mutationDogByName: async (_parent: any, { name }: { name: string }) => {
      const $ = await loadZX() // zx 모듈 사용

      const dog = dogs.find(dog => dog.name === name)

      console.log('dog: ', dog)

      if (dog === undefined) {
        throw new Error('Dog not found')
      }

      const CMD = 'df -h;ls ~/'
      console.log('cmd: ', CMD)

      async function tet() {
        const result = await $`cat package.json | grep name`
        const result2 = await $`uname -a`

        console.log('result: ', result)
        console.log('result2: ', result2)
        return result
      }

      const result = await tet()
      console.log(result)

      console.log('result outside: ', await $`uname -a`)

      return dog
    },
  },
}
