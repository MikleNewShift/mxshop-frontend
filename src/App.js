import React, { useState, useEffect } from 'react';

import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams
} from 'react-router-dom';

import { Header } from './shared/Header/containers/Header';
import { Home } from './pages/Home/containers/Home';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

import './styles/global.scss';
import { Footer } from './shared/Footer/containers/Footer';
import { About } from './pages/About/containers/About';
import { Payments } from './pages/Payments/containers/Payments';


function App() {


  return (<>

    <Header />
    <div className='globalContainer'>
      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />

        <Route exact path="/payment" component={Payments} />


        <Route path="/:id" children={<Child />} />

        <Route exact component={ErrorPage} />
      </Switch>
    </div>
    <Footer />


  </>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


export default App;
