import { Cryptos, Exchanges, Holdfolio, News, NotFound } from 'pages';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.NEWS} element={<News />} />
        <Route path={Routes.CRYPTOS} element={<Cryptos />} />
        <Route path={Routes.EXCHANGES} element={<Exchanges />} />
        <Route path={Routes.HOLDFOLIO} element={<Holdfolio />} />
        <Route path={Routes.NOT_FOUND} element={<NotFound />} />
      </Switch>
    </Router>
  );
}

export default App;
