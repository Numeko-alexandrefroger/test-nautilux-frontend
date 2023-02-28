import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store, sagaMiddleware } from './store';
import rootSaga from './sagas';

import Header from './components/Header';
import InterventionsList from './containers/InterventionsList';

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact>
              <InterventionsList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
