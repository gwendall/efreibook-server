// NOTE : User type imported from types folder

const typeDefs = /* GraphQL */ `
  schema {
    query: Query
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  # ---

  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }
`

export default typeDefs
