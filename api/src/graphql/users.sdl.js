export const schema = gql`
  type User {
    id: String!
    userName: String!
    email: String!
    name: String
    createdAt: DateTime!
    updatedAt: DateTime!
    image: String
    bio: String
    Parts: [Part]!
    Part(partTitle: String): Part
    Reaction: [PartReaction]!
    Comment: [Comment]!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    userName(userName: String!): User
  }

  input CreateUserInput {
    userName: String!
    email: String!
    name: String
    image: String
    bio: String
  }

  input UpdateUserInput {
    userName: String
    email: String
    name: String
    image: String
    bio: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    updateUserByUserName(userName: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
