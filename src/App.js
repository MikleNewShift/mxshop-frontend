import React from 'react';

import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { Header } from './shared/Header/containers/Header';
import { Home } from './pages/Home/containers/Home';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

import './styles/global.scss';
import { Footer } from './shared/Footer/containers/Footer';
import { About } from './pages/About/containers/About';
import { Payments } from './pages/Payments/containers/Payments';

function App() {
  return (
    <>
      <Header />
      <div className='globalContainer'>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/payment" component={Payments} />

          <Route exact component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
