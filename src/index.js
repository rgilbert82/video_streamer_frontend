import dotenv   from 'dotenv';
import React    from 'react';
import ReactDOM from 'react-dom';
import { App }  from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker    from './registerServiceWorker';
import './stylesheets/index.css';

dotenv.config();

ReactDOM.render(
  (
    <BrowserRouter>
      <Route path="/" render={(props) => <App {...props} />} />
    </BrowserRouter>
  ),
  document.getElementById('root')
);

registerServiceWorker();
