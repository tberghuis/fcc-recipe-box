import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'mobx-react';

import App from './components/App.jsx';
import RecipeList from './components/RecipeList.jsx';
import Recipe from './components/Recipe.jsx';
import RecipeEdit from './components/RecipeEdit.jsx';
import AppState from './stores/AppState.js';

import style from './scss/style.scss';

const appState = new AppState();

render(
  (
    <Provider appState={appState}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RecipeList} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/recipe/:id/edit" component={RecipeEdit} />
        </Route>

      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
