import React                                        from 'react';
import { render }                                   from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { createStore }                              from 'redux';
import { Provider }                                 from 'react-redux';
import { syncHistoryWithStore, routerReducer }      from 'react-router-redux';
import App                                          from './containers/App.jsx';
import rootReducer                                  from './reducers/rootreducer.js';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' activeClassName="active" component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

module.exports = store;
