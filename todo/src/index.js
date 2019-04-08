import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = () => {
    return {
      todo: 'this is fake!'
    };
  };

const store =createStore(reducer) ;


ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
