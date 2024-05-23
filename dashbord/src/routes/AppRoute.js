import React from "react";
import { Route } from "react-router-dom";

function AppRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
}
export default AppRoute;
