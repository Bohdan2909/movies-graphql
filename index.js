import {createSchema, createYoga} from 'graphql-yoga'
import {createServer} from 'node:http'
import {getMovie, getMovies, getSuggestions} from "./db";



const yoga = createYoga({
  schema: createSchema({
    typeDefs: `
    type Movie {
   id: Int!
   title: String!
   rating: Float!
   summary: String!
   language: String!
   medium_cover_image: String!
   rating: Float
   description_intro: String
   language: String
   medium_cover_image: String
   genres: [String]
 }
 
 type Query {
   movies(limit: Int, rating: Float): [Movie]!
   movie(id: Int!): Movie
   suggestions(id: Int!): [Movie]!
 }
 `,
    resolvers: {
      Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
      }
    }
  })
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})