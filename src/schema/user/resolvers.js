const resolvers = {
  Query: {
    me: async (obj, args, ctx, info) => {
      return {
        id: 123,
        name: 'Hello world'
      }
    },
  },
}

export default resolvers
