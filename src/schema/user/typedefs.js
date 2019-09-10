// NOTE : User type imported from types folder
import User from '~/types/User';

const typeDefs = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    search(q: String!): [User!]!
  }

  type Mutation {
    editUser(id: ID!, data: EditUserInput!): User!
    storeUserExpoToken(token: String!): StoreUserExpoTokenResponse!
    sendNotification(token: String!): StoreUserExpoTokenResponse!
  }

  # ---

  input EditUserInput {
    firstName: String
    lastName: String
  }

  type StoreUserExpoTokenResponse {
    success: Boolean!
  }

`

export default () => [User, typeDefs]
