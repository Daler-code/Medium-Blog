import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../containers/Auth';
import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/CategoryPage';
import ArticlePage from '../containers/Article';

import NavbarHeader from '../components/navbar';
import NavMain from '../containers/Nav';
import Footer from '../components/footer';

import ScrollToTop from '../hooks/use-scroll-to-top';

import '../assets/fonts/font.css';

const Root = () => (
  <Auth>
    <Router>
      <ScrollToTop>
        <NavbarHeader />
        <NavMain />
        <Switch>
          <Route exact key="r-1" path="/" component={HomePage} />
          <Route exact key="r-2" path="/category/:id" component={CategoryPage} />
          <Route exact key="r-3" path="/articles/:slug" component={ArticlePage} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  </Auth>
);

export default Root;
