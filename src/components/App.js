import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";
import CityWetherPage from "../pages/CityWetherPage/CityWetherPage";
import NotFound from "../pages/NotFound/NotFound";
import Nav from "./Nav/Nav";
import Wrapper from "./Wrapper/Wrapper";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Nav />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/city/:cityName" component={CityWetherPage} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </Provider>
  );
}

export default App;
