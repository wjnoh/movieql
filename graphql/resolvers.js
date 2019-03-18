import { getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
