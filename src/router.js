import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Loading from "./pages/ui/loading";
import Message from "./pages/ui/message";
import Modals from "./pages/ui/modals";
import Gallery from "./pages/ui/gallery";
import Tabs from "./pages/ui/tabs";
import Carousels from "./pages/ui/carousel";
import Login from "./pages/form/login";
import Register from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";

export default class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              return (
                <Admin>
                  <Switch>
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/loadings" component={Loading} />
                    <Route path="/ui/messages" component={Message} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/ui/tabs" component={Tabs} />
                    <Route path="/ui/carousel" component={Carousels} />
                    <Route path="/form/login" component={Login} />
                    <Route path="/form/reg" component={Register} />
                    <Route path="/table/basic" component={BasicTable} />
                    <Route path="/table/high" component={HighTable} />
                  </Switch>
                </Admin>
              );
            }}
          />
        </App>
      </BrowserRouter>
    );
  }
}
