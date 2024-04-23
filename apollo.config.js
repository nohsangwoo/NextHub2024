module.exports = {
  client: {
    service: {
      name: 'my-graphql-app',
      url: 'http://localhost:3000/graphql',
    },
    includes: ['src/**/*.tsx', 'src/**/*.ts'],
    excludes: ['**/__tests__/**'],
  },
}
