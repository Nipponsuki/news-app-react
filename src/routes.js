import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "pages/About";
import Category from "pages/Category";
import Search from "pages/Search";
import Resources from "pages/Resources";

import Header from "components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/categories/general" />}
        />
        <Route path="/about" component={About} />
        <Route path="/sources" component={Resources} />
        <Route path="/categories/:category" component={Category} />
        <Route path="/search/:term" component={Search} />
      </Switch>
    </>
  );
};

export default App;
