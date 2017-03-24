import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';

import App from './components/App.jsx';
import RecipeList from './components/RecipeList.jsx';
import AppState from './stores/AppState.jsx';

import style from './scss/style.scss';

const appState = new AppState();

render(
  (
    <Provider appState={appState}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RecipeList} />
        </Route>

      </Router>
    </Provider>
  ),
  document.getElementById('app')
);
