import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// redux things: 
import {Provider} from 'react-redux'
import store  from './redux/store'


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
