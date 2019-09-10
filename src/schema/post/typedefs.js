import Post from '~/types/Post'

const typeDefs = /* GraphQL */ `
  schema {
    query: Query
  }

  type Query {
    getPosts: [Post!]!
  }

`

export default () => [Post, typeDefs]
