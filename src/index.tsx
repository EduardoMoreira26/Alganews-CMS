import React from 'react';
import { createRoot } from 'react-dom/client';
import './core/imports.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './app/views/Home.view';
import NotFound404 from './app/views/NotFound404.view';
import GlobalStyles from './core/globalStyles';
import EditorsListView from './app/views/EditorsList.view';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/editores' exact component={EditorsListView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

