import users from '~/data/users'

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return users
    },
    user: async (obj, args, ctx, info) => {
      return users.find((user) => user.id === args.id)
    },
    search: async (obj, args, ctx, info) => {
      const { q } = args
      return users.filter(({ firstName, lastName }) => {
        const fullName = [firstName, lastName].join(' ');
        return fullName.toLowerCase().indexOf(q.toLowerCase()) > -1;
      })
    }
  },
  Mutation: {
    editUser: (obj, args, ctx, info) => {
      const { data } = args
      const index = users.findIndex((user) => user.id === args.id);
      users[index] = {
        ...users[index],
        firstName: data.firstName || users[index].firstName,
        lastName: data.lastName || users[index].lastName,
      }
      return users.find((user) => user.id === args.id)
    },
    storeUserExpoToken: (obj, args, ctx, info) => {
      const { token } = args;
      console.log('Got token.', token)
      return { success: true }
    },
    sendNotification: (obj, args, ctx, info) => {
      const { token } = args;
      console.log('Sending notification.', token)
      return { success: true }
    }
  }
}

export default resolvers
