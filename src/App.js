import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router';
import { Header } from './components';
import { Home, Cart, EmptyPage } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setPizzas(data.pizzas))
      .catch((error) => console.log(error.message));
  }, []);

  const showName = (name) => {
    console.log(name);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home showName={showName} data={pizzas} />
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
