const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!,
    name: String!,
    email: String!,
    password: String!
  }

  type Query {
    getUsers(id:ID!): User
  }

  input CreateUserInput {
    name: String!,
    email: String!,
    password: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    changePass(id: ID!, password: String!): User
  }
`;

module.exports = typeDefs;