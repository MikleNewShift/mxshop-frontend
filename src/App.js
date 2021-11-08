import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Catalog } from './pages/Catalog/containers/Catalog';
import { Header } from './shared/Header/containers/Header';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

import { Footer } from './shared/Footer/containers/Footer';
import { About } from './pages/About/containers/About';
import { Payments } from './pages/Payments/containers/Payments';


import './styles/global.scss';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';

function App() {


  return (<>

    <Header />
    <div className='globalContainer'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/catalog' />
        </Route>

        <Route exact path="/catalog" component={Catalog} />

        <Route exact path="/about" component={About} />

        <Route exact path="/payment" component={Payments} />


        <Route path="/catalog/:category" children={<CategoryPage />} />

        <Route exact component={ErrorPage} />
      </Switch>
    </div>
    <Footer />


  </>
  );
}

export default App;
