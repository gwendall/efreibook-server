import users from '~/data/users'

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return users
    },
    user: async (obj, args, ctx, info) => {
      return users.find((user) => user.id === args.id)
    },
  },
}

export default resolvers
