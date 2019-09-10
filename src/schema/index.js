import { mergeSchemas } from 'graphql-tools'
import userSchema from './user'
import postSchema from './post'

const schema = mergeSchemas({
  schemas: [
    userSchema,
    postSchema,
  ],
})

export default schema
