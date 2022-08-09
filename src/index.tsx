import React from 'react';
import { createRoot } from 'react-dom/client';
import './core/imports.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './app/views/Home.view';
import Contact from './app/views/Contact.view';
import NotFound404 from './app/views/NotFound404.view';
import NavBar from './app/components/NavBar';
import GlobalStyles from './core/globalStyles';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/contato'} exact component={Contact} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

