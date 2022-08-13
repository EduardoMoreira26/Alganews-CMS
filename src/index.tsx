import React from 'react';
import { createRoot } from 'react-dom/client';
import './core/imports.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './app/views/Home.view';
import NotFound404 from './app/views/NotFound404.view';
import GlobalStyles from './core/globalStyles';
import EditorsListView from './app/views/EditorsList.view';
import PostCreateView from './app/views/PostCreate.view';
import EditorProfileView from './app/views/EditorProfile.view';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/editores' exact component={EditorsListView} />
        <Route path='/editores/:id' exact component={EditorProfileView} />
        <Route path='/posts/criar' exact component={PostCreateView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

