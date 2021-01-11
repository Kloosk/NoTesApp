import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {QueryClientProvider,QueryClient} from "react-query";


const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
