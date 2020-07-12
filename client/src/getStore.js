import {createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import { getQuery } from './utility';
import { initSagas } from './initSagas';
import { reducer } from './combineReducers';
import { defaultState } from './defaultState';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const logger = createLogger({
  stateTransformer,
});

export const getStore = ()=> {
  const sagaMiddleware = createSagaMiddleware();
  let middleWares = [sagaMiddleware];
  if (getQuery()['logger']) { middleWares.push(logger);}

  const composeEnhancers  = [applyMiddleware(...middleWares)
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];
  const enhancer = compose(... composeEnhancers);
  const store = createStore(
    reducer,
    defaultState,
    enhancer,
  );
  initSagas(sagaMiddleware);
  return store;
};
