import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import '../semantic/dist/semantic.min.css';

import App from './components/App';
import ConfigureStore from './store/configureStore';
import * as bookActions from './actions/bookActions';

const store = ConfigureStore();
store.dispatch(bookActions.fetchBooks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
