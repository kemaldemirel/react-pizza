import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart, EmptyPage } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('http://localhost:5000/pizzas')
      .then(({ data }) => dispatch(setPizzas(data)))
      .catch((error) => console.log(error.message));
  }, [dispatch]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
