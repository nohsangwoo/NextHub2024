// import { $ } from 'zx';
import dogs from './dogs.json' assert { type: 'json' }

export default {
  Query: {
    dogByName: async (_parent: any, { name }: { name: string }) => {
      const dog = dogs.find(dog => dog.name === name)

      console.log('dog: ', dog)

      if (dog === undefined) {
        throw new Error('Dog not found')
      }

      const CMD = 'df -h;ls ~/'
      console.log('cmd: ', CMD)

      async function tet() {
        // const result = await $`cat package.json | grep name`;
        // const result2 = await $`uname -a`;
        return 'result'
      }
      tet()

      return dog
    },
  },
}
