import { gql } from 'graphql-tag'

export default gql`
  type Query {
    mutationDogByName(name: String!): DogResult
  }
`
