export let movies = [
  {
    id: 0,
    name: "Captain Marvel",
    score: 3
  },
  {
    id: 1,
    name: "Aqua Man",
    score: 3
  },
  {
    id: 2,
    name: "Ant-Man and the Wasp",
    score: 4
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
