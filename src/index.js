import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {createGlobalStyle} from "styled-components";
import {QueryClientProvider,QueryClient} from "react-query";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
      scroll-behavior: smooth;
     ::-webkit-scrollbar {
     width: 14px;
     height: 14px;
    }
    ::-webkit-scrollbar-thumb {
     background: linear-gradient(13deg, #0798da 14%,#f9b613 64%);
     border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
     background: linear-gradient(13deg, #F9B613 14%,#0798da 64%);
    }
    ::-webkit-scrollbar-track{
     background: #ffffff;
     border-radius: 10px;
     box-shadow: inset 7px 10px 12px #f0f0f0;
}
  }
`;
const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
