const movies = [
  {
    _id: '1',
    title: 'Harry Potter',
    genre: { _id: 1, name: 'Action' },
    stock: 5,
    rate: 2.5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    _id: '2',
    title: 'Terminator',
    genre: { _id: 1, name: 'Action' },
    stock: 6,
    rate: 3,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    _id: '3',
    title: 'Men In Black',
    genre: { _id: 2, name: 'Scifi' },
    stock: 3,
    rate: 4,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    _id: '4',
    title: 'I am legend',
    genre: { _id: 2, name: 'Scifi' },
    stock: 5,
    rate: 5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    _id: '5',
    title: 'Die hard',
    genre: { _id: 1, name: 'Action' },
    stock: 3,
    rate: 2.5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    _id: '6',
    title: 'Swallow',
    genre: { _id: 1, name: 'Action' },
    stock: 3,
    rate: 2.5,
    publishDate: '2020-01-01',
    liked: false,
  },
  {
    _id: '7',
    title: 'Zombie land',
    genre: { _id: 3, name: 'Thirell' },
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
  return movies.find(movie => movie._id == id);
}