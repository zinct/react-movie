import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Login from './pages/Login';
import EditMovies from './pages/EditMovies';
import NotFound from './pages/NotFound';
import Customers from './pages/Customers';
import Rentals from './pages/Rentals';
import Register from './pages/Register';
import AddMovies from './pages/AddMovies';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/create" component={AddMovies} />
          <Route path="/movies/:id" component={EditMovies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;