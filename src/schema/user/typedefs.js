// NOTE : User type imported from types folder

const typeDefs = /* GraphQL */ `
  schema {
    query: Query
  }

  type Query {
    me: CurrentUserInfo!
  }

  # ---

  type CurrentUserInfo {
    id: ID!
    name: String!
  }
`

export default typeDefs
