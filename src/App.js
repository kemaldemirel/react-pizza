import React from 'react';
import { Route, Switch } from 'react-router';

import { Header } from './components';
import { Home, Cart, EmptyPage } from './pages';

function App() {
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
