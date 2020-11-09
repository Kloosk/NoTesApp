import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
      <Provider store={store}>
         <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
