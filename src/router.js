import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";

export default class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => {
              return (
                <Admin>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                </Admin>
              );
            }}
          />
        </App>
      </BrowserRouter>
    );
  }
}
