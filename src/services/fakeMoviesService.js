import { getGenres } from "./fakeGenresService";

const movies = [
  {
    id: '1',
    title: 'Harry Potter',
    genre: { id: 1, name: 'Action' },
    stock: 5,
    rate: 2.5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    id: '2',
    title: 'Terminator',
    genre: { id: 1, name: 'Action' },
    stock: 6,
    rate: 3,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    id: '3',
    title: 'Men In Black',
    genre: { id: 2, name: 'Scifi' },
    stock: 3,
    rate: 4,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    id: '4',
    title: 'I am legend',
    genre: { id: 2, name: 'Scifi' },
    stock: 5,
    rate: 5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    id: '5',
    title: 'Die hard',
    genre: { id: 1, name: 'Action' },
    stock: 3,
    rate: 2.5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    id: '6',
    title: 'Swallow',
    genre: { id: 1, name: 'Action' },
    stock: 3,
    rate: 2.5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    id: '7',
    title: 'Zombie land',
    genre: { id: 3, name: 'Thirell' },
    stock: 3,
    rate: 3.5,
    publishDate: '2020-01-01',
    liked: false,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(movie => movie.id == id);
}

export function addMovie(movie) {
  const genres = getGenres();
  const result = genres.filter(genre => genre.id == movie.genre);
  movies.push({
    id: (movies.length + 1).toString(),
    title: movie.title,
    genre: result[0],
    stock: movie.stock,
    rate: movie.rate,
    publishDate: '2020-01-01',
    liked: false,
  })
  return movies;
}