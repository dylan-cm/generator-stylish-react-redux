import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";

const App = lazy(() => import("../pages/App"));

export const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <ErrorPage>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Suspense>
      </ErrorPage>
    </Router>
  );
}

export default Routes;
