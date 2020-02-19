import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "pages/About";
import Home from "pages/Home";
import Search from "pages/Search";
import Resources from "pages/Resources";
import { PageWrapper } from "components/Common/PageWrapper";
import Header from "components/Header";

const App = () => {
  return (
    <>
      <main data-testid="application">
        <Header />
        <Switch>
          <PageWrapper>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/categories/general" />}
            />
            <Route path="/about" component={About} />
            <Route path="/sources" component={Resources} />
            <Route path="/categories/:category" component={Home} />
            <Route path="/search/:term" component={Search} />
          </PageWrapper>
        </Switch>
      </main>
    </>
  );
};

export default App;
