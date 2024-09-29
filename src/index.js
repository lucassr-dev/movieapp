import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

/** Setup Axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

/** Adicionando o parâmetro de idioma */
axios.defaults.params = {
  language: 'pt-BR',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //<React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
  
   //</React.StrictMode>
);
reportWebVitals();
