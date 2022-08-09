import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home.view';
import Contact from './views/Contact.view';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={'/home'}>
          <Home />
        </Route>
        <Route path={'/contato'}>
          <Contact />
        </Route>
        <Route>
          {/* <NotFound /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

