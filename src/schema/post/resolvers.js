import users from '~/data/users'
import Expo from 'expo-server-sdk';
import posts from '~/data/posts';

const resolvers = {
  Query: {
    getPosts: () => posts
  },
}

export default resolvers
