import Post from '~/types/Post'

const User = `
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		postIds: [ID!]
		posts: [Post]!
	}
`

export default () => [Post, User]
