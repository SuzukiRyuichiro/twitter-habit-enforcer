import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import './custom_bootstrap.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

