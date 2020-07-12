import {routes} from './routes/routes';
import {BrowserRouter, Router} from 'react-router-dom';
import {MakeRouteWithSubRoute} from './routes/makeRoute';
import {getStore} from './getStore';
import {history} from '../src/helper/history';
import {Provider} from 'react-redux';
import React from 'react';
import {Header} from './component/header/header';
import {Footer} from './component/footer/footer';
const store = getStore();


export const App = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Provider store={store}>
          <Header/>
          {routes.map((route, index) => <MakeRouteWithSubRoute key={index} {...route} />)}
          {/*<Footer/>*/}

        </Provider>
      </Router>
    </BrowserRouter>
  );
};